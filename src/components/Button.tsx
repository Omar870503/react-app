import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Button({ children }: Props) {
  return (
    <button type="button" className="btn btn-primary">
      {children}
    </button>
  );
}

export default Button;
