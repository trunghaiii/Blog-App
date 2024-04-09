
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import NewModal from "./app.newModal"
import { useState } from 'react';
interface IProps {
    blogs: IBlog[]
}
const AppTable = (props: IProps) => {

    const [openModal, setOpenModal] = useState<boolean>(false)

    const { blogs } = props

    const handleDeleteBlog = (id: number) => {
        if (confirm("sure to delete???")) {
            fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                //body: JSON.stringify({ title, author, content })
            }).then(res => res.json())
                .then(res => window.alert("Delete the blog successfully!"));

        }

    }

    return (
        <>
            <div>
                <Button
                    onClick={() => setOpenModal(true)}
                >Add New Blog</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs?.map(blog => {
                        return (
                            <tr>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>{blog.content}</td>
                                <td>

                                    <Button
                                        variant='warning'
                                        onClick={() => handleDeleteBlog(blog.id)}
                                    >Delete</Button>

                                </td>
                            </tr>
                        )
                    })}

                </tbody>
                <NewModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            </Table>
        </>
    )
}

export default AppTable