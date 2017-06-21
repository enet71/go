package main
 
import (
    "encoding/json"
    "log"
    "net/http"
    "strconv"
    "github.com/julienschmidt/httprouter"
)
 
type Book struct {
    ID string   `json:"id,omitempty"`
    Name string   `json:"name,omitempty"`
    Isbn  string   `json:"isbn,omitempty"`
    Сharacters []string `json:"characters,omitempty"`
}

type Character struct {
    ID string   `json:"id,omitempty"`
    Name string   `json:"name,omitempty"`
    Gender  string   `json:"gender,omitempty"`
    PageSize  uint32   `json:"pageSize,omitempty"`
}

type House struct {
    ID string   `json:"id,omitempty"`
    Name string   `json:"name,omitempty"`
    Region  string   `json:"region,omitempty"`
    PageSize  uint32   `json:"pageSize,omitempty"`
}

 
var book []Book
var character []Character
var house []House

func GetBooks(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
    json.NewEncoder(w).Encode(book)
} 
 
func GetBook(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
    params := httprouter.Params(ps)
    for _, item := range book {
        if item.ID == params.ByName("id") {
            json.NewEncoder(w).Encode(item)
            return
        }
    }
    json.NewEncoder(w).Encode(&Book{})
}

func GetCharacters(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
    num, _ := strconv.ParseInt(r.URL.Query().Get("pageSize"), 10, 32)
    if num != 0 {
        json.NewEncoder(w).Encode(character[:num])
    } else {
        json.NewEncoder(w).Encode(character)
    }
    
} 
 
func GetCharacter(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
    params := httprouter.Params(ps)
    for _, item := range character {
        if item.ID == params.ByName("id") {
            json.NewEncoder(w).Encode(item)
            return
        }
    }
    json.NewEncoder(w).Encode(&Character{})
}

func GetHouses(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
    num, _ := strconv.ParseInt(r.URL.Query().Get("pageSize"), 10, 32)
    if num != 0 {
        json.NewEncoder(w).Encode(house[:num])
    } else {
        json.NewEncoder(w).Encode(house)
    }
    
} 
 
func GetHouse(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
    params := httprouter.Params(ps)
    for _, item := range house {
        if item.ID == params.ByName("id") {
            json.NewEncoder(w).Encode(item)
            return
        }
    }
    json.NewEncoder(w).Encode(&Character{})
}

func main() {
    router := httprouter.New()
    initData()

    router.GET("/books", GetBooks)
    router.GET("/books/:id", GetBook)

    router.GET("/characters", GetCharacters)
    router.GET("/characters/:id", GetCharacter)

    router.GET("/houses", GetHouses)
    router.GET("/houses/:id", GetHouse)

    log.Fatal(http.ListenAndServe(":8187", router))
}

func initData() {
    book = append(book, Book{ID: "1", Name: "A Game of Thrones", Isbn: "978-0553103540", 
        Сharacters: []string{"1","2","3"}})
    book = append(book, Book{ID: "2", Name: "A Clash of Kings", Isbn: "978-0553108033", 
        Сharacters: []string{"4","5","6"}})

    character = append(character, Character{ID: "1", Name: "High Septon", Gender: "Male"})
    character = append(character, Character{ID: "2", Name: "Margaery Tyrell", Gender: "Female"})
    character = append(character, Character{ID: "3", Name: "Melicent", Gender: "Female"})
    character = append(character, Character{ID: "4", Name: "Meribald", Gender: "Male"})
    character = append(character, Character{ID: "5", Name: "Moelle", Gender: "Female"})
    character = append(character, Character{ID: "6", Name: "Mordane", Gender: "Male"})

    house = append(house, House{ID: "1", Name: "House Algood", Region: "The Westerlands"})
    house = append(house, House{ID: "1", Name: "House Allyrion of Godsgrace", Region: "Dorne"})
    house = append(house, House{ID: "1", Name: "House Amber", Region: "The North"})
}