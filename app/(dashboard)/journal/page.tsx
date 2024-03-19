
import { prisma } from '@/util/db'
import { getUserByClerkID } from '@/util/auth'
const getEntries = async () => {
  const user = await getUserByClerkID()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()
  console.log('entries ', entries)
  return <div>journal</div>
}

export default JournalPage
