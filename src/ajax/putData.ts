export const putData = (apiPath: string, id:number, bodyObj: Object) => {
  //

  fetch(`https://newdemostock.gopos.pl/ajax/219/${apiPath}/${id}`, {
    method: "PUT",
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


