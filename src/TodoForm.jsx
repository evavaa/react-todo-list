import { ListItem } from '@mui/material';
import { useState } from "react";
import CreateIcon from '@mui/icons-material/Create';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

export default function TodoForm({addTodo}) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="standard-basic" 
                    label="Standard" 
                    variant="standard" 
                    onChange={handleChange}
                    value={text}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="create todo" type="submit">
                                        <CreateIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                    }}
                />
            </form>
        </ListItem>
    )
}