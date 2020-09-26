import http from "./httpService";


function insertAllPosts() {
    return http.post('/posts/', { title, body});
};


export default { insertAllPosts}