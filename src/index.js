/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
	  return new Response(JSON.stringify({
		message: "Hello from Cloudflare Worker API!",
		time: new Date().toISOString(),
	  }), {
		headers: { 'Content-Type': 'application/json' }
	  });
	}
  };
  
