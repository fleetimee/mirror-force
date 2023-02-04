const { iwa, iwaId, iwaIdUrl } = require("instagram-without-api-node");

const _cookie =
  'mid=Ytt9QgALAAEYyWeXkehmshA-oDZW; ig_did=A5FFAF53-2928-4378-AC7E-8E0A21D5972A; ig_nrcb=1; fbm_124024574287414=base_domain=.instagram.com; datr=2rDcYuBAIaWmJx5gIs4OsqS-; ds_user_id=31551738572; csrftoken=e9P96CLwxHaze0hPVQfvDADzTSMZXCH8; shbid="7777\05431551738572\0541706916066:01f77473bf8f221d0921d2178786d9a1bf46f9e9261bd9858db540b2316bbc1f4e2c9808"; shbts="1675380066\05431551738572\0541706916066:01f75f48065548aabf493be6c3fa968fbaf523ded715703247f72e75be259b3b89a50df1"; fbsr_124024574287414=mpOFb1xAps4xbVDEOLUysygJ4wRR9cmg59t0sqF4bjo.eyJ1c2VyX2lkIjoiMTAwMDAwODYxOTY1MDgzIiwiY29kZSI6IkFRQnh6amxRc0NfRjhMX1dBbWwtNjRJU3ZIVC0tWlJsSExjako2bW9rX1RPcFdpNndPellPMndCNDJVQkJ4QnJGdFdoSmI4eGV3TWYtdW8xbm1pWTJGNE80U0FTTEtBMmlEYmlnX0JkWXRnNk5BN1R2bUZySmZlc3I4cWl1QVVLOUhpVE04d0Y0dTM0ZC02OHhNakhhN2tGRXdGbGFTeTZ2WUw0U0xpVXZiLXlKMDAxR0pCSTNkaTkzNTMxRkVNTXNRaHEtV1hYQV9iOHVMVjVJc1I0VkRxbkZDRVRLVHFpSll3VE9UQ1lQYW52QTJheFp0OGgzeHpTemxuV3lHZnNIWmQzRXlXOVA1U055eXpYZGFWVVNPYXFYdXdSTEFnSjB2dnp1dG9JQW92ZlE3d0hLelNmdXVpaG5neTZ1UTlIU3loeDRmYjdIdlJWbnlaT1FLRkhZRUx3WUNOODVldlZWMU0yNU1GSmF3Y1RwUSIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFDS2pucTBQYVJSakJKRWhjQzlWS2RUcEtlTmtsS1dJOUFxQ3QzdUxnNUJXM2VrU2lvaWl0cWMzT1JXSGlCbnRSTno4Ym1oTzRyMUYzR1VjcGFSeFFlMTd0R2dONW9BREFoVzJXYVlNd05NcWszbnhzUWNvU3pnQXdiRThncVdWeFlNOWMxcVI1TndXWXdlTTlOTFhWcFlIaFpBRzJqY05aQ3lvWkJPTnE0WEpWZW5YUUVaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjc1NDg3Mzg1fQ; dpr=3; fbsr_124024574287414=mpOFb1xAps4xbVDEOLUysygJ4wRR9cmg59t0sqF4bjo.eyJ1c2VyX2lkIjoiMTAwMDAwODYxOTY1MDgzIiwiY29kZSI6IkFRQnh6amxRc0NfRjhMX1dBbWwtNjRJU3ZIVC0tWlJsSExjako2bW9rX1RPcFdpNndPellPMndCNDJVQkJ4QnJGdFdoSmI4eGV3TWYtdW8xbm1pWTJGNE80U0FTTEtBMmlEYmlnX0JkWXRnNk5BN1R2bUZySmZlc3I4cWl1QVVLOUhpVE04d0Y0dTM0ZC02OHhNakhhN2tGRXdGbGFTeTZ2WUw0U0xpVXZiLXlKMDAxR0pCSTNkaTkzNTMxRkVNTXNRaHEtV1hYQV9iOHVMVjVJc1I0VkRxbkZDRVRLVHFpSll3VE9UQ1lQYW52QTJheFp0OGgzeHpTemxuV3lHZnNIWmQzRXlXOVA1U055eXpYZGFWVVNPYXFYdXdSTEFnSjB2dnp1dG9JQW92ZlE3d0hLelNmdXVpaG5neTZ1UTlIU3loeDRmYjdIdlJWbnlaT1FLRkhZRUx3WUNOODVldlZWMU0yNU1GSmF3Y1RwUSIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFDS2pucTBQYVJSakJKRWhjQzlWS2RUcEtlTmtsS1dJOUFxQ3QzdUxnNUJXM2VrU2lvaWl0cWMzT1JXSGlCbnRSTno4Ym1oTzRyMUYzR1VjcGFSeFFlMTd0R2dONW9BREFoVzJXYVlNd05NcWszbnhzUWNvU3pnQXdiRThncVdWeFlNOWMxcVI1TndXWXdlTTlOTFhWcFlIaFpBRzJqY05aQ3lvWkJPTnE0WEpWZW5YUUVaRCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjc1NDg3Mzg1fQ; rur="EAG\05431551738572\0541707023456:01f7ea504aa1cd3b04dcdf7901fddd74cfe9a4e8a980392bc757e21f6c9b4ba917907b5a"; sessionid=31551738572:DyGEAbtnYtKvp7:16:AYe9d8yTmd8M7ZbiAvNzXbiDxVJgQ4xJZKEp4Td-3BIi';
const _userAgent =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/109.0.0.0"; // <!-- required!! please get your user-agent from your browser console (7)
const _xIgAppId = "1217981644879628"; // <!-- required!! please get your x-ig-app-id from your browser console (8)

async function fetch() {
  // get the latest 12 feeds from an account (example https://www.instagram.com/orsifrancesco/)

  const responseIwa = await iwa({
    headers: {
      cookie: _cookie,
      "user-agent": _userAgent,
      "x-ig-app-id": _xIgAppId,
    },

    base64images: false, // <!-- optional, but without it, you will be not able to store/show images
    maxImages: 2, // <!-- optional, 12 is the max number
    file: "instagram-cache.json", // <!-- optional, instagram-cache.json is by default
    pretty: true, // <!-- optional, prettyfy json true/false
    time: 3600, // <!-- optional, reload contents after 3600 seconds by default

    id: "orsifrancesco", // <!-- id is required
  });

  console.log({ responseIwa });
}
fetch();
