
export const getData = (url:string, callback:(data:any) => void) => {
  fetch(url, {
    headers: {
      Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
    },
  })
    .then((response) => response.json())
    .then((data: any) => callback(data.data))

    .catch((e) => {
      console.log("Failed to fetch data, error" + e);
    });
}