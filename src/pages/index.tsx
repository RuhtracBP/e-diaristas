import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preeencha seu endereço e conheça todos os profissionais da sua localidade"
        }
      />

      <UserInformation
        name={"Arthur CBP"}
        picture={"https://github.com/RuhtracBP.png"}
        rating={3}
        description={"Recife"}
      />
    </div>
  );
}
