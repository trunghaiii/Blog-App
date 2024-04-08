'use client'
import AppTable from "@/components/app.table";
import { useEffect } from "react";

export default function Home() {

  const fetchBlogData = async () => {
    const response = await fetch("http://localhost:8000/blogs");
    const blogData = await response.json();

    console.log('blogData: ', blogData);

  }

  useEffect(() => {
    fetchBlogData()
  }, [])

  return (
    <div>
      <AppTable />
    </div>
  );
}
