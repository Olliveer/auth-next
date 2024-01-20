import CardWrapper from "./card-wrapper";

function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      login
    </CardWrapper>
  );
}

export default LoginForm;
