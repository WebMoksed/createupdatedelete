import http from "./httpService";


function insertAllPosts() {
    return http.get('/posts/', { userId, title, body});
};


export default { insertAllPosts}