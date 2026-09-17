# Cross-batch dependency review — consumer batch(es) <batches>

Run `phase-2-remaining-27`. The Step-3 gate `frontier-dependency-ledger` fails
with "Cross-batch review incomplete: supply every batch input and review every
declared edge". Every batch input file exists; the missing half is a current
review row for each declared cross-batch edge whose consumer lives in
batch(es) <batches>.

## What to do

1. Get the authoritative edge list:
   `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`
   then read `research/phase-2-remaining-27-cross-batch-dependencies.json` and
   take every edge whose `consumer_batch` is in <batches>.
2. For each such edge: read the consumer item `items/<consumer>.md` (statement,
   facts and the step that uses the supplier) and the supplier item
   `items/<supplier>.md` (its statement and the interface the consumer needs).
   Decide whether the declared use matches the supplier's actual statement.
3. Rewrite the consumer batch's file
   `research/phase-2-remaining-27-batch-<b>.cross-batch-dependencies.json` as a
   JSON array containing exactly one row per declared edge of that batch, in the
   established format:
   `{"kind": "item", "consumer": "<id>", "supplier": "<id>", "status":
   "verified"|"defect", "evidence": "<supplier statement; consumer use; why the
   interface is sufficient>"}`.
   Keep any row whose consumer is NOT in <batches> untouched. Drop rows for edges
   that are no longer declared, and add rows for every current edge.
4. `status: "verified"` requires that the supplier's statement really supplies
   what the consumer's proof uses. If it does not, record `status: "defect"`
   with the exact mismatch (quote both statements) and leave the item alone —
   the orchestrator will escalate it.
5. Re-run `node tools/frontier-dependency-ledger.mjs refresh --run
   phase-2-remaining-27` and confirm it no longer reports unreviewed edges *for
   your batches* (other batches may still be outstanding while a sibling agent
   works).

## Rules

- Edit only the cross-batch-dependencies file(s) of batch(es) <batches>. Do not
  edit item files, manifests, coverage, proof contracts, notes or reports.
- Evidence must be specific: name the supplier's claim and the consumer's use,
  with the step number.
- Mathematical integrity: never mark an edge `verified` you have not checked;
  a defect row with quoted evidence is the honest outcome.
- Write a short report to
  `research/phase-2-remaining-27-crossbatch-review-<batches>-report.md` with the
  edge count, verified/defect counts, and every defect in full.
