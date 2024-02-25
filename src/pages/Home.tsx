import { useEffect, useState } from "react";

interface Problem {
    id: number;
    problemStatement: string;
    problemLink: string;
    solutionLink: string;
    rating: number;
}

const Home: React.FC = () => {
    const [problems, setProblems] = useState<Problem[]>([]);
    const [solvedProblems, setSolvedProblems] = useState<number[]>([]);

    useEffect(() => {
        const savedSolvedProblems = localStorage.getItem("solvedProblems");
        if (savedSolvedProblems) {
            setSolvedProblems(JSON.parse(savedSolvedProblems));
        }

        fetch("/db.json")
            .then((res) => res.json())
            .then((data) => setProblems(data))
            .catch((error) => console.error("Error fetching problems:", error));
    }, []);

    const handleCheckbox = (id: number) => {
        const index = solvedProblems.indexOf(id);

        if (index === -1) {
            const updatedSolvedProblems = [...solvedProblems, id];
            setSolvedProblems(updatedSolvedProblems);
            localStorage.setItem(
                "solvedProblems",
                JSON.stringify(updatedSolvedProblems)
            );
        } else {
            const updatedSolvedProblems = [
                ...solvedProblems.slice(0, index),
                ...solvedProblems.slice(index + 1),
            ];
            setSolvedProblems(updatedSolvedProblems);
            localStorage.setItem(
                "solvedProblems",
                JSON.stringify(updatedSolvedProblems)
            );
        }
    };

    return (
        <div className="container">
            <p>
                <strong>Tip:</strong>Going to solution without attempting the
                question is waste of your time
            </p>
            <br />
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Problems</th>
                        <th>Solution</th>
                        <th>Rating</th>
                        <th>Solved</th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map((problem, index) => (
                        <tr
                            key={problem.id}
                            style={{
                                backgroundColor: solvedProblems.includes(
                                    problem.id
                                )
                                    ? "lightgreen"
                                    : "",
                            }}
                        >
                            <td>{index + 1}.</td>
                            <td>{problem.problemStatement}</td>
                            <td>
                                <a
                                    href={problem.solutionLink}
                                    style={{ textDecoration: "none" }}
                                >
                                    Solution
                                </a>
                            </td>
                            <td>{problem.rating}</td>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={solvedProblems.includes(
                                        problem.id
                                    )}
                                    onChange={() => {
                                        handleCheckbox(problem.id);
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
