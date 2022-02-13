export const postData =  (url:string, bodyObj: Object) => {
    //
  
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyObj),
    })
      .then((result) => result.json())
      .then((resp) => console.log(resp))
      .catch((e) => {
        console.log("Failed to fetch data, error" + e);
      });
  };
  


