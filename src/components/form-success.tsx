import { CheckCircle } from "lucide-react";

export interface FormSuccessProps {
  message?: string;
}

function FormSuccess({ message }: FormSuccessProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="p-3 rounded-md flex items-center gap-x-2 text-sm bg-emerald-500/15 text-emerald-500">
      <CheckCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
}

export default FormSuccess;
