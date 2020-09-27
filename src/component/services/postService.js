import http from "./httpService";


function createPosts(data) {
    return http.post('/posts/', data);
};

function getAllPosts() {
    return http.get('/posts/');
}


export { createPosts, getAllPosts }