// Run only through rendering-diagrams.mjs, in the application's web cwd. This
// calls the production compiler rather than maintaining a second TeX preamble.
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
const request = JSON.parse(readFileSync(0, 'utf8'));
try {
  const { renderTikz } = await import(pathToFileURL(request.renderer).href);
  const svg = await renderTikz(request.source, request.environment);
  process.stdout.write('\nRENDERING_DIAGRAM_RESULT=' + JSON.stringify({ svg }) + '\n');
} catch (error) {
  process.stdout.write('\nRENDERING_DIAGRAM_RESULT=' + JSON.stringify({ error: String(error) }) + '\n');
  process.exitCode = 1;
}
