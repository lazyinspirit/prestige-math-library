// Audit-Beta helper (wave 5, topology-separation): pull a Wikipedia article as plain
// text and print the sentences matching the given patterns, so a provenance
// determination quotes the source rather than a memory of it.
const title = process.argv[2];
const patterns = process.argv.slice(3);
const url = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&format=json&redirects=1&titles=${title}`;
const res = await fetch(url, { headers: { 'User-Agent': 'prestige-math-library-audit/1.0' } });
const json = await res.json();
for (const key of Object.keys(json.query.pages)) {
  const text = (json.query.pages[key].extract || '').replace(/\s+/g, ' ');
  console.log(`##### ${json.query.pages[key].title} (${text.length} chars)`);
  for (const pattern of patterns) {
    const re = new RegExp(`[^.]{0,170}${pattern}[^.]{0,260}\\.`, 'g');
    const hits = text.match(re);
    if (hits) console.log(`--- ${pattern}\n${hits.slice(0, 3).join('\n')}`);
  }
}
