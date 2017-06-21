export class StaticMethods {
    static getId(url) {
        return url.split('/').pop();
    }
}
