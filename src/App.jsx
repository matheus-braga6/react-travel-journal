import Header from './components/Header'
import Entry from './components/Entry'
import entriesData from './data/places'

export default function App() {
  
  const entryElements = entriesData.map((entry) => {
    return (
      <Entry 
        key={entry.id}
        {...entry}
      />
    )
  })

  return (
    <>
      <Header />
      <section className="entry">
        {entryElements}
      </section>
    </>
  )
}