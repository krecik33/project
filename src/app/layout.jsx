import "./index.css";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <html>
      <head></head>
      <body>
        <section>
          {/* Include shared UI here e.g. a header or sidebar */}
          <nav></nav>

          {children}
        </section>
      </body>
    </html>
  );
}
