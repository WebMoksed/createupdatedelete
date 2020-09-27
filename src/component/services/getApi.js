import http from "./httpService";


function insertAllPosts(data) {
    return http.post('/posts/', data);
};


export default { insertAllPosts }