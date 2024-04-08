
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
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs?.map(blog => {
                        return (
                            <tr>
                                <td>{blog.id}</td>
                                <td>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>
                                    <Button>View</Button>
                                    <Button variant='warning'>Delete</Button>
                                    <Button variant='danger'>Update</Button>
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