# Requirements for education software

# Background

Sadhakas want to create a mobile PWA application called Sadhakas web platform (SWP). The application will host an education platform. The first book to publish is Science of Self Realisation (SSR). The content will be written in Markdown format in Notion. It will be exported from Notion and imported into SWP. SWP will show the content in a good visual format.

# User Roles

**Administrators**

1. They can publish a new page
2. They can unpublish a page and move it to draft.
3. All editor permissions

**Editors**

1. They can import markdown files to create a new page
2. They can edit page title and content for a draft page
3. They can delete a draft page.
4. All viewer permissions

**Viewers**

1. They can view published pages

# Functional requirements

1. The system allows editors to upload content in Markdown (.md) format.
2. The system creates a new page for a new Markdown document.
3. The system converts uploaded document into visually appealing UI; containing cards
4. The system supports following content types
    1. Headings
    2. Paragraphs
    3. Lists
    4. Header image
    5. Image in content
5. The system allows editors to edit the content and save a draft
6. The system allows administrators to publish and unpublish a page
7. The system shows all published pages to the viewers
8. Each card can be edited separately.
9. Editors can reorder cards
10. The system supports 3 access levels - administrators, editors and viewers
11. The UI is designed for mobile experience
