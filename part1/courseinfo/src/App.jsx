//Exercise 1.1

//Header:takes care of rendering the name of the course
const Header = (prop) => {
    return (
        <h1>{prop.course}</h1>
    )
}


//Content: renders the parts and their number of exercises 
const Content = (prop) => { 
    //Exercise 1.2
    return (
        <>
            <Part part={prop.parts[0].name} exercises={prop.parts[0].exercises} />
            <Part part={prop.parts[1].name} exercises={prop.parts[1].exercises} />
            <Part part={prop.parts[2].name} exercises={prop.parts[2].exercises} />
        </>
    )
}
const Part = (prop) => { 
    return (
        <p>{prop.part} {prop.exercises}</p>
    )
}

//Total: renders the number of total exercises
const Total = (prop) => { 
    return (
        <p>Number of exercises {prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises}</p>
    )
}


const App = () => {
    //Exercises 1.3-1.5
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default App
