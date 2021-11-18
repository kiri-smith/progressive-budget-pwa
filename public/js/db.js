let db;
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (event) {
  event.target.result.createObjectStore("pending", 
  {
    keyPath: "id",
    autoIncrement: true
  }
  );
};

request.onsuccess = function (event) {
    db = event.target.result;
  
    if (navigator.onLine) {
      checkDatabase();
    }
  };

request.onerror = function (err) {
  console.log(err.message);
};

