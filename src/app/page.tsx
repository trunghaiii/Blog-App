'use client'
import AppTable from "@/components/app.table";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function Home() {

  const [blogData, setBlogData] = useState([])

  const fetchBlogData = async () => {
    const response = await fetch("http://localhost:8000/blogs");
    const blogData = await response.json();

    setBlogData(blogData)

  }

  useEffect(() => {
    fetchBlogData()
  }, [])

  return (
    <div>
      <AppTable
        blogs={blogData}
      />
    </div>
  );
}
