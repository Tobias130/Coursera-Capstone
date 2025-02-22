const PageNotFound = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-heading font-bold">404</h1>
          <div className="py-10 text-base">
            <p>Something's missing.</p>
            <p>
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <a href="/">Back to Homepage</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
