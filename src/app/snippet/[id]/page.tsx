import { prisma } from "@/lib/prisma";
import React from "react";
import Link from "next/link";

interface SnippetPageProps {
  params: Promise<{ id: string }>; // 👈 params is async
}

const SnippetPage = async ({ params }: SnippetPageProps) => {
  const { id } = await params; // 👈 await it
  const snippetId = parseInt(id);

  const snippet = await prisma.snippet.findUnique({
    where: { id: snippetId },
  });

  if (!snippet) {
    return <div>Snippet not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{snippet.title}</h1>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        <code>{snippet.code}</code>
      </pre>

      {/* Edit button */}
      <Link
        href={`/snippet/${snippetId}/edit`}
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Edit Snippet
      </Link>
    </div>
  );
};

export default SnippetPage;
