import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Create from "./pages/Create"
import Detail from "./pages/Detail"
import Edit from "./pages/Edit"
import { Note, NoteData, Tag } from "./types"
import { useLocalStorage } from "@uidotdev/usehooks"
import { v4 } from "uuid"



const App = () => {
  const [notes, setNotes] = useLocalStorage<Note[]>("NOTES", [])
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])


  //tag oluşturma fonskiyonu
  const createTag = (tag: Tag): void => {
    setTags((prev) => [...prev, tag]);
  }


  //not oluşturma fonksiyonu 
  const createNote = (noteData: NoteData): void => {
    //formdan gelen data ya id ekle
    const newNote: Note = { id: v4(), ...noteData };

    //state'i güncelle
    setNotes((prev) => [...prev, newNote]);
  }





  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main notes={notes} availableTags={tags} />} />
        <Route path="/new" element={<Create createTag={createTag} handleSubmit={createNote} availableTags={tags} />} />
        <Route path="/note/:id" element={<Detail />} />
        <Route path="/note/:id/edit" element={<Edit />} />







      </Routes>


    </BrowserRouter>

  )
}

export default App