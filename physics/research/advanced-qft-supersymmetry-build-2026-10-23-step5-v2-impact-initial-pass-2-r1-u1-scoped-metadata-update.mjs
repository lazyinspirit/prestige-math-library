import fs from 'node:fs';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
const sha = text => crypto.createHash('sha256').update(text).digest('hex');
const repairs = [
  {
    "path": "research/advanced-qft-supersymmetry-build-2026-10-23-batch-8.proof-contracts.json",
    "id": "def-qftx-character-localization",
    "source": "def-torus-equivariant-cohomology-cartan-model",
    "section": "Definition",
    "before_quote_sha256": "84e76635b974439167d430bfbb9ec6950f1364e871c618cb36364e4a3df9cda8",
    "source_raw_sha256": "921016f8cda2be9c4431034dda4d3cc8977f3744540b46710209ea208c07cab3"
  },
  {
    "path": "research/advanced-qft-supersymmetry-build-2026-10-23-batch-8.proof-contracts.json",
    "id": "def-qftx-character-localization",
    "source": "lem-torus-classifying-space-cohomology",
    "section": "Statement",
    "before_quote_sha256": "3ee84fb41500a5ebd592a0a192912710a781f6d20e0c03fe425fef3dd536d124",
    "source_raw_sha256": "81f64448f57948caf0a46f4386c6dfc88ba13a4ab9cfb10f531ff1d02b37398a"
  },
  {
    "path": "research/advanced-qft-supersymmetry-build-2026-10-23-batch-26.proof-contracts.json",
    "id": "ex-aqft-qed-threshold-matching",
    "source": "def-aqft-threshold-matching-map",
    "section": "Definition",
    "before_quote_sha256": "b47ef10bdeb8a59637e1fe3f046e1a01cc2c43997ce69e46d0b4f488f80d7ce2",
    "source_raw_sha256": "d0dfb9840a05350a2e19bf454971a17113eeff5b9d784fd1edae3fb4247b598b"
  },
  {
    "path": "research/advanced-qft-supersymmetry-build-2026-10-23-batch-44.proof-contracts.json",
    "id": "ex-aqft-heavy-fermion-anomaly-threshold",
    "source": "pthm-aqft-heavy-chiral-threshold-wess-zumino-match",
    "section": "Statement",
    "before_quote_sha256": "3ae5bdbedb167764eac804001f9bcf9b6e4192ca4284280c2012399292f996ff",
    "source_raw_sha256": "3edefab1d0af465e4fe9f8e870f0a86241bc6f2e8f884e2aa9ff88e81f0e247b"
  }
];
const documents = new Map();
for (const row of repairs) {
  if (!documents.has(row.path)) documents.set(row.path, JSON.parse(fs.readFileSync(row.path, 'utf8')));
  const document = documents.get(row.path);
  const citations = document.contracts[row.id].citations.filter(c => c.source === row.source && c.source_section === row.section);
  if (citations.length !== 1) throw new Error('Ambiguous citation: ' + row.id);
  const sourceBytes = fs.readFileSync('items/' + row.source + '.md');
  if (sha(sourceBytes) !== row.source_raw_sha256) throw new Error('Supplier changed since review: ' + row.source);
  const body = sourceBytes.toString('utf8');
  const marker = '## ' + row.section + '\n';
  const start = body.indexOf(marker);
  if (start < 0 || body.indexOf(marker, start + marker.length) >= 0) throw new Error('Missing/duplicate section');
  const tail = body.slice(start + marker.length);
  const end = tail.search(/^## /m);
  const quote = (end < 0 ? tail : tail.slice(0, end)).trim();
  if (citations[0].quote !== quote && sha(citations[0].quote) !== row.before_quote_sha256) throw new Error('Citation changed since review: ' + row.id);
  citations[0].quote = quote;
}
for (const [path, document] of documents) fs.writeFileSync(path, JSON.stringify(document, null, 2) + '\n');
for (const [path] of documents) {
  const ids = [...new Set(repairs.filter(row => row.path === path).map(row => row.id))].join(',');
  const check = spawnSync(process.execPath, ['tools/physics-support/proof-contract.mjs', path, '--strict', '--items', ids], { stdio: 'inherit' });
  if (check.status !== 0) process.exit(check.status || 1);
}
