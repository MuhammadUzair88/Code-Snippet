import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = () => {
  async function createSnippet(formData:FormData) {
    "use server"; // server action

    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const snippet = await prisma.snippet.create({
      data: { title, code },
    });

    console.log("created Snippet", snippet);
    redirect("/");
  }

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <form action={createSnippet} className="flex flex-col gap-4 w-full max-w-md">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="border p-2 rounded-md w-full"
        />

        <label htmlFor="code">Code</label>
        <textarea
          name="code"
          className="border p-2 rounded-md w-full"
          rows={5}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Add Snippet
        </button>
      </form>
    </div>
  );
};

export default Page;
