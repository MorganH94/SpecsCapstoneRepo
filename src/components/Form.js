import {useState, useContext} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import AuthContext from '../store/authContext'

const Form = () => {
    const {token, userId} = useContext(AuthContext)
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [status, setStatus] = useState(true)
    const [mood, setMood] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        axios.post('/posts', {title, content, status, userId, mood}, {
            headers: {
                authorization: token
            }
        })
            .then(() => {
                navigate('/profile')
            })
            .catch(err => console.log(err))
    }

    return (
        <main>
            <form className='form add-post-form' onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Add Your Title Here'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className='form-input add-post-input'
                />
                <textarea 
                    type='text'
                    placeholder='Add Your Content Here'
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className='form-input add-post-input textarea'
                />
                <div className='flex-row status-container'>
                    <div className='radio-btn'>
                        <label htmlFor='private-status'>
                            private:
                        </label>
                        <input 
                            type='radio'
                            name='status'
                            id='private-status'
                            value={true}
                            onChange={e => setStatus(e.target.value)}
                            checked={true}
                        />
                    </div>
                    <div className='radio-btn'>
                        <label htmlFor='public-status'>
                            public:
                        </label>
                        <input 
                            type='radio'
                            name='status'
                            id='public-status'
                            value={false}
                            onChange={e => setStatus(e.target.value)}
                        />
                    </div>
                    <div className='radio-btn'>
                    <label htmlFor='mood'>
                        Mood:
                    </label>
                    <input 
                        type='radio'
                        name='mood'
                        id='mood-1'
                        value={"Happy"}
                        onChange={e => setMood(e.target.value)}
                    />
                    <label htmlFor='mood-1'>Happy</label>

                    <input 
                        type='radio'
                        name='mood'
                        id='mood-2'
                        value={"Sad"}
                        onChange={e => setMood(e.target.value)}
                    />
                    <label htmlFor='mood-2'>Sad</label>

                    <input 
                        type='radio'
                        name='mood'
                        id='mood-3'
                        value={"Angry"}
                        onChange={e => setMood(e.target.value)}
                    />
                    <label htmlFor='mood-3'>Angry</label>

                    <input 
                        type='radio'
                        name='mood'
                        id='mood-4'
                        value={"Fear"}
                        onChange={e => setMood(e.target.value)}
                    />
                    <label htmlFor='mood-4'>Fear</label>

                    <input 
                        type='radio'
                        name='mood'
                        id='mood-5'
                        value={"Neutral"}
                        onChange={e => setMood(e.target.value)}
                    />
                    <label htmlFor='mood-5'>Neutral</label>
                    </div>

                </div>
                <button className='form-btn'>submit</button>
            </form>
        </main>
    )
}

export default Form