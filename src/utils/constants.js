const GOOGLE_API_KEY = "AIzaSyDUCsCvHTRpLYJ4Kh03ZE7vzIdEtYpZaE8";
export const OFFSET_LIVE_CHAT = 15;

// AIzaSyDz-S_pcq5OX46Q8BJk5RZ80efmjdsDyRQ 

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_KEYWORD_API_1 = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="

export const YOUTUBE_SEARCH_KEYWORD_API_2 = "&type=video&key=" + GOOGLE_API_KEY

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&regionCode=IN&q=surfing&key=[YOUR_API_KEY]