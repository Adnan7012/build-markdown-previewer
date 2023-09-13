import { useState } from 'react';
import {marked} from "marked"
import './App.css';

//a header (H1 size), a sub header (H2 size),
// a link, inline code, a code block, a list item,
// a blockquote, an image, and bolded text

function App() {
const [text,setTexst]=useState(`
 # H1

 ## H2 

 [title](https://www.example.com)

 \`code\`

 \`\`\`
 {
   "firstName": "John",
   "lastName": "Smith",
   "age": 25
 }
 \`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**

`);
marked.setOptions({
  breaks:true
})

const handleChange =(event)=>{
setTexst(event.target.value)
}

  return (
    <div className="App">
     <div id='editorWrap'> 
        <div id='toolbar'>Editor</div>
        <textarea id='editor' onChange={handleChange} value={text}></textarea>
        </div>
      <div id='previwWrap'> 
        <div id='toolbar'>Previewer</div>
        <div id='preview' dangerouslySetInnerHTML={{__html:marked(text)}} ></div>
      </div>
    </div>
  );
}

export default App;
