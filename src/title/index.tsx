type TitleProps = {
  id: string;
  className: string;
  title: string;
};

function Title({ id, className, title }: TitleProps) {
  return (
    <>
      <div className="title-box">
        <h1 id={id} className={className}>
          {title}
        </h1>
      </div>
    </>
  );
}

export default Title;
