const axios = require('axios');
const { cmd } = require('../command');

// TMDB API Key
const TMDB_API_KEY = '91c9bde7f4f9487b7b4f75d6c6dfc84b';
// Default fallback image for TV shows without posters
const DEFAULT_IMAGE_URL = 'https://via.placeholder.com/500x750?text=No+Poster+Available';

cmd({
    pattern: "gettv",
    desc: "Fetch detailed information about a TV show.",
    category: "utility",
    react: "📺",
    filename: __filename
},
async (conn, mek, m, { from, quoted, args, reply }) => {
    try {
        // Get the TV show name from user input
        const tvShowName = args.join(' ');
        if (!tvShowName) {
            return reply("📺 Please provide the name of the TV show you want to search for.");
        }

        // TMDB search URL
        const searchUrl = `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(tvShowName)}&api_key=${TMDB_API_KEY}`;

        // Fetch TV show search results
        const searchResponse = await axios.get(searchUrl);
        const searchResults = searchResponse.data;

        if (!searchResults.results || searchResults.results.length === 0) {
            return reply("🚫 No TV show found with the given name.");
        }

        // Get the first result from the search
        const tvShow = searchResults.results[0];
        const tvShowDetailsUrl = `https://api.themoviedb.org/3/tv/${tvShow.id}?api_key=${TMDB_API_KEY}`;

        // Fetch detailed information for the selected TV show
        const detailsResponse = await axios.get(tvShowDetailsUrl);
        const tvDetails = detailsResponse.data;

        // Prepare the information for the message
        const tvInfo = `
🎥 *TV Show Information* 🎥
━━━━━━━━━━━━━━━━━━━━━
📺 *Title*: ${tvDetails.name || 'N/A'}
🗓 *First Air Date*: ${tvDetails.first_air_date || 'N/A'}
🗓 *Last Air Date*: ${tvDetails.last_air_date || 'N/A'}
⭐ *Average Rating*: ${tvDetails.vote_average || 'N/A'} / 10
📜 *Number of Seasons*: ${tvDetails.number_of_seasons || 'N/A'}
🎞 *Number of Episodes*: ${tvDetails.number_of_episodes || 'N/A'}
📝 *Overview*: ${tvDetails.overview || 'No overview available.'}
🗣 *Language*: ${tvDetails.original_language.toUpperCase() || 'N/A'}
📡 *Status*: ${tvDetails.status || 'N/A'}

🌐 *Homepage*: ${tvDetails.homepage || 'No official website available'}
━━━━━━━━━━━━━━━━━━━━━
`;

        // Get the TV show poster or use a default image
        const posterUrl = tvDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`
            : DEFAULT_IMAGE_URL;

        // Send the TV show information with the poster image
        await conn.sendMessage(from, {
            image: { url: posterUrl },
            caption: `${tvInfo}\n> Powered by TMDB API`,
        }, { quoted: mek });

        // React to the message
        await conn.sendMessage(from, {
            react: {
                text: "📺",
                key: mek.key,
            },
        });

    } catch (error) {
        console.error("Error fetching TV show info:", error.message);
        reply("❌ An error occurred while fetching TV show details. Please try again.");
    }
});
