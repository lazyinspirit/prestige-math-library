# Step 6c — cross-batch audit and closure

You are the sole 6c lead. Open
`research/<run>-cross-group-edges.json`; it lists every dependency crossing
batches, forward reference, and item/page change since the exact post-6b snapshot.
An empty list is valid.

Open each citing use and cited Statement. Verify domains, hypotheses,
quantifiers, direction, conclusion, and typing. Apply the disposition, then
append one row to `research/<run>-6c-verdicts.jsonl`:

```json
{"kind":"edge","from":"<citing>","to":"<target>","verdict":"accurate|repaired|struck","from_sha256":"<current sha256 or null>","to_sha256":"<current sha256 or null>","defect_ids":[],"note":"evidence"}
{"kind":"forward","item":"<id>","target":"<id>","decision":"lemmas-added|dropped","item_sha256":"<current sha256 or null>","defect_ids":["<row>"],"note":"evidence"}
```

An accurate edge has no defect row. A repaired/struck edge and every forward
resolution name their closed `6c-cross` defect row. Hash the current files
after edits; a later byte change makes the verdict stale.

Audit every structural change, including item strategy/dependency metadata and
page title/order/requires/category/item order. Every later proof, contract, or
manifest change appears as `kind:"item"`; give it a critical read rather than
reopening unchanged 6b work. Give every new item a full critical read.
Restore a pre-existing removal before deciding it; only a removal you made
after reading may be accepted.

```json
{"kind":"addition","batch":"2","id":"lem-new","verdict":"accepted|repaired|dropped","subject_sha256":"<current or listed sha256>","defect_ids":[],"note":"evidence"}
{"kind":"removal","batch":"2","id":"lem-old","verdict":"accepted|reverted","subject_sha256":"<current or listed sha256>","defect_ids":["<row>"],"note":"evidence"}
{"kind":"item","batch":"2","id":"thm-edited","verdict":"accepted|repaired|reverted","subject_sha256":"<current composite sha256>","defect_ids":[],"note":"evidence"}
{"kind":"page","batch":"2","id":"page-id","verdict":"accepted|repaired|reverted","subject_sha256":"<current sha256>","defect_ids":[],"note":"evidence"}
```

Compute a current item/page composite hash with `node
tools/cross-group-edges.mjs carrier --run <run> --id <id>`. Page addition or
removal changes build scope and is an owner blocker. `accepted` on an addition
or item/page edit is a clean audit and needs no row. Every repair, drop,
removal, or reversion is a
defect outcome and must name a unique closed ledger row whose subject is the
row's `id` (or citing item for an edge/forward).

Gate-only item defects use the `kind:"gate"` row defined by the gate-repair
task. Every closed `6c-cross` ledger row must be referenced by one machine
verdict; do not write an orphan row.

The final battery rechecks exact routing, decision/ledger ownership, hashes,
applied dispositions, repository policy, sources, contracts, risk reviews,
impact closure, and the audit manifest. It rejects open or deferred Step 6
rows. Write `research/<run>-alpha-6c.md`; extend prior retry work and never
repeat completed analysis.
