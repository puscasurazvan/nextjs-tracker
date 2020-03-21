import HabitButton from './HabitButton'

const Habit = ({ habit }) => {
  const dates = getLastFiveDays()
  console.log(dates)
  return (
    <article>
      <h3>{habit}</h3>
      <div>
        {dates.map((date, index) => (
          <HabitButton key={date.getMilliseconds()} date={date} />
        ))}
      </div>
    </article>
  )
}

const getLastFiveDays = () => {
  const dates = '01234'.split('').map(day => {
    const tempDate = new Date()
    tempDate.setDate(tempDate.getDate() - day)
    return tempDate
  })
  return dates
}

export default Habit
