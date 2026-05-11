import { handleRequest } from '../worker/index.js'

export async function onRequest({ request, env }) {
  return handleRequest(request, env)
}
