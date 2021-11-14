import "./App.css";

function App() {
  const friends = [
    {
      id: 1,
      name: "Anna",
      favoriteColor: "violet",
    },
    {
      id: 2,
      name: "Alice",
      favoriteColor: "pink",
    },
    {
      id: 3,
      name: "Kate",
      favoriteColor: "lightseagreen",
    },
    {
      id: 4,
      name: "Frida",
      favoriteColor: "olive",
    },
    {
      id: 5,
      name: "Ivanna",
      favoriteColor: "lightskyblue",
    },
    {
      id: 6,
      name: "Minesa",
      favoriteColor: "orange",
    },
  ];

  return (
    <div className="App">
      <header className="header">
        <h1>Pink Programming</h1>
      </header>
      <main className="main">
        {friends.map((friend) => (
          <div
            className="card"
            style={{ backgroundColor: friend.favoriteColor }}
          >
            <span>#{friend.id}</span>
            <h4>{friend.name}</h4>
          </div>
        ))}
      </main>
      <footer className="footer">
        <span className="text-code">I have {friends.length} new friends!</span>
      </footer>
    </div>
  );
}

export default App;
