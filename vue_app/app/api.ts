import { eventHandler, readBody , getQuery } from "vinxi/http";
import { getWebRequest , getRequestURL } from "vinxi/http";

export default eventHandler (async (event) => {
  const request = getWebRequest(event); 
  const url = getRequestURL(event);
  console.log(request);
  console.log("method=", request.method);
  console.log("pathname=", url.pathname);
  if(request.method === "GET"){
    const query = getQuery(event); 
    console.log(query);
    const data = { message: query };
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  if(request.method === "POST"){
    const body = await readBody(event); 
    console.log(body);
    const data = { message: 'Hello from POST' };
    return new Response(JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  // データの取得や処理
  const data = { message: 'Hello from Vinxi API!' };
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
});
