import { Bars } from "react-loader-spinner";

function Loader() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Bars
        height="80"
        width="80"
        color="#2596be"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
