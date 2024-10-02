import type { HttpContext } from '@adonisjs/core/http'
import z from 'zod'

export default class SessionController {
  /**
   * Display form to create a new record
   */
  async create({ inertia }: HttpContext) {
    return inertia.render('session/create', { session: { email: '', password: '' } })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ inertia, request, response }: HttpContext) {
    const body = request.body()
    const { success, data, error } = await this.parsedCreateBody(body)

    if (success) {
    } else {
    }
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const bookId = params.id
    return response.redirect('/')
  }

  parsedCreateBody(body: any) {
    return z
      .object({
        email: z.string(),
        password: z.string(),
      })
      .safeParseAsync(body)
  }
}
