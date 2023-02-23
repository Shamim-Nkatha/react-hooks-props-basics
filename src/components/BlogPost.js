<BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />

function BlogPost() {
  return (
    <div>
      {/* BlogContent is being returned from BlogPost */}
      {/* Therefore, BlogContent is a child of BlogPost */}
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
   
    </div>
  );
}

// BlogContent.js
// CHILD COMPONENT
function BlogContent(props) {
  return <div>{props.articleText}</div>;
}