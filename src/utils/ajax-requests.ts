//AJAX Request utilities for API compsuming
export const loadRequest = (postCategory: string) => {
    var request = new XMLHttpRequest();
    request.open(
        "GET",
        wpApiSettings.siteUrl + "/wp-json/wp/v2/posts?categories=" +
        postCategory +
        "&order=asc",
        true
    );
    return new Promise((resolve, reject) => {
        request.onload = (): any => (request.status >= 200 && request.status < 400) ? resolve(JSON.parse(request.responseText)) : reject("We connected to the server, but it returned error.")
        request.onerror = () => reject("Conection error");
        request.send();
    }) // close Promise
};

export const saveRequest = (data: any) => {
    var request = new XMLHttpRequest();
    request.open(
        "POST",
        wpApiSettings.siteUrl + "/wp-json/wp/v2/posts",
        true
    );
    request.setRequestHeader("X-WP-Nonce", wpApiSettings.nonce);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    return new Promise((resolve, reject) => {
        data.title !== '' ? request.send(JSON.stringify(data)) : reject('Escribe un título para el post!')
        request.onreadystatechange = () => {
            if (request.readyState == 4) { //the request got complete
                (request.status == 201) ? resolve('Petición satisfactoria!') : reject('Petición no realizada. Inténtalo de nuevo')
            }
        }
        request.onerror = () => reject("Conection error")
    })// close Promise
};
