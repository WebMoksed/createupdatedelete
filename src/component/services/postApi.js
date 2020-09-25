import http from '../services/httpService';

function Getallpost(){
    return http.get('/posts/');
}
export default { Getallpost };


