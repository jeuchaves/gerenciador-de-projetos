import BarraDeProgresso from "./BarraDeProgresso";
import Espacamento from '../layout/Espacamento';

function BarrasDeProgressos() {
    
    const dados = [
        { "name": "ReactJS", "percent": 65 },
        { "name": "JavaScript", "percent": 80 },
        { "name": "HTML5", "percent": 95 },
        { "name": "CSS3 (Sass)", "percent": 77 },
        { "name": "Git", "percent": 80 },
        { "name": "Design Responsivo", "percent": 90 }
    ]

    return (
        <div>
            {dados && (
                dados.map((dado, index) => (
                    <div key={index}>
                        <BarraDeProgresso 
                            name={dado.name} 
                            percent={dado.percent}
                        />
                        <Espacamento altura="20" />
                    </div>
                ))
            )}
            
        </div>
    );
}

export default BarrasDeProgressos;