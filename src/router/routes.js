import { routes as auth } from '@/modules/auth'
import { routes as todos } from '@/modules/todos'
import { routes as about } from '@/pages/about'

export default [
    ...auth,
    ...about,
    ...todos
]
