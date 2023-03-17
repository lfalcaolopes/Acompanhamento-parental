import Checkbox from "./Checkbox";
import StatusItem from "./StatusItem";

function App() {
  return (
    <>
      <div className="bg-violet-500 flex justify-center items-center">
        <h1 className="text-white text-5xl p-5 font-IBM-Mono  drop-shadow-md">Castigômetro</h1>
      </div>
      <div className="mx-8 mt-8 flex flex-col space-y-28">
        <div>
          <h2 className="text-2xl font-IBM-Mono text-violet-500 drop-shadow-lg">Status</h2>
          <div className="grid gap-2 mt-4">
            <StatusItem text="Eletrônicos" isAllowed={false} />
            <StatusItem text="Sair com os pais" isAllowed={true} />
            <StatusItem text="Viajar" isAllowed={true} />
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-IBM-Mono  text-violet-500 drop-shadow-lg">Atividades cumpridas</h2>
            <form className="mt-4 grid gap-2">
              <Checkbox text="Higiene Pessoal" />
              <Checkbox text="Roupas Limpas" />
              <Checkbox text="Quarto Limpo" />
              <Checkbox text="Banheiro Limpo" />
              <Checkbox text="Atividades Escolares" />
            </form>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="p-4 bg-violet-300 rounded-md font-IBM-Mono w-fit">
            <p className="text-white text-2xl drop-shadow-md">Histórico</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
