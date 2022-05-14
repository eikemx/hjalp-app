import { SpinnerCircular } from "spinners-react";

const LoadingSpinner = () => {
  return (
    <div className="loader">
<SpinnerCircular size={60} thickness={144} speed={130} color="rgba(212, 24, 36, 1)" secondaryColor="rgba(0, 0, 0, 0)" />
    </div>
  );
};

export default LoadingSpinner;