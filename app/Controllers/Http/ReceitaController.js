'use strict'
const axios = use('axios')
// const CircularJSON = require('circular-json')
// const api = axios.create()

const Env = use('Env')
/**
 * Resourceful controller for interacting with receitas
 */
class ReceitaController {
  
  /**
   * Show a list of all receitas.
   * GET receitas
   * primeiramente, somente receitas da web
   */
  async index ({ request, response, params }) {
    const { q, filter } = params
    const cx = (filter == 'null') ? Env.get('DEFAULT_CX') : Env.get('VIDEO_CX')
    const query = q.replace(' ', '+').replace(',', '+')

    await axios.get(`https://www.googleapis.com/customsearch/v1?key=${Env.get('GOOGLE_KEY')}&cx=${cx}&q=${query}&gl=br&hr=pt-BR&lr=lang_pt&ie=UTF-8&imgColorType=color&imgSize=large`).then((res) => {
      return response.json(res.data)
      }).catch((error) => {
        console.warn(error)
      }) 
  }
  
  /**
   * Render a form to be used for creating a new receita.
   * GET receitas/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Display a single receita.
   * GET receitas/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing receita.
   * GET receitas/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update receita details.
   * PUT or PATCH receitas/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a receita with id.
   * DELETE receitas/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ReceitaController
