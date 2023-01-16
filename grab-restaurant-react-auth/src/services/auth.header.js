export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user")); //เป็นการ Check User ว่า login หรือยัง


    if (user && user.accessToken) {
        return {
            "x-access-token": user.accessToken
        };
    } else {
        return {};
    }
}