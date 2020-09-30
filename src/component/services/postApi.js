import http from '../services/httpService';

function Getallpost(body,title,userId){
    return http.get('/posts/', {body,title,userId});
}
export default { Getallpost };


