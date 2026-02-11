import { useEffect, useState } from "react";

function AppLibrary() {

  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedApp, setSelectedApp] = useState(null);
  const [appData, setAppData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    if (searchTerm.length < 2) {
      setApps([]);
      setShowDropDown(false);
      return;
    }

    setSearchLoading(true);

    const timer = setTimeout(() => {
      fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=software&limit=5`)
        .then((res) => res.json())
        .then((data) => {
          if (data.results) {
            setApps(data.results);
            setShowDropDown(true);
          } else {
            setApps([]);
            setShowDropDown(false);
          }
          setSearchLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching apps:", error);
          setSearchLoading(false);
        });
    }, 500);

    return () => clearTimeout(timer);

  }, [searchTerm]);

  const handleAppSelect = (app) => {
    setSelectedApp(app);
    setSearchTerm(app.trackName);
    setAppData(app);
    setShowDropDown(false);
  };

  return (
    <div className="weather-wrapper">
      <div className="weather-search">
        <input
          type="text"
          placeholder="Search app..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {showDropDown && apps.length > 0 && (
          <ul className="weather-dropdown">
            {apps.map((item) => (
              <li key={item.trackId} onClick={() => handleAppSelect(item)}>
                {item.trackName}
              </li>
            ))}
          </ul>
        )}
      </div>

      {searchLoading && <p className="weather-loading">Searching...</p>}

      {appData && (
        <div className="weather-card">
          <img src={appData.artworkUrl100} alt="app icon" />
          <h3>{appData.trackName}</h3>
          <p>Developer: {appData.sellerName}</p>
          <p>Rating: {appData.averageUserRating || "No rating"} ⭐</p>
          <p>Price: {appData.price === 0 ? "Free" : `$${appData.price}`}</p>
          <p>{appData.description?.substring(0, 120)}...</p>
        </div>
      )}
    </div>
  );
}

export default AppLibrary;
