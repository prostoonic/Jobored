export default function VacancyDescription(props) {
    const vacancyDescription = props.description
    console.log(props)
    return (
      <div dangerouslySetInnerHTML={{ __html: vacancyDescription }}></div>
    )
  }
  