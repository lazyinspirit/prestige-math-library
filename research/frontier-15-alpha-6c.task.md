# Step 6c — cross-batch and cross-level citation audit, run `frontier-15`

You are the **lead Alpha** and this stage has one owner: one global citation
reader.

The group Alphas each saw at most three batches. Nobody has yet read the run
as a whole, and the defects that survive to here are exactly the ones that
are invisible inside a single batch.

## What to check

1. **Every cross-batch citation.** No item may depend on a page outside its
   own page's declared `requires` closure. `validate-plan` catches the
   structural case; you catch the semantic one — a citation that resolves
   but does not carry the claim. This run's seams to watch: batch 2's Sylow
   index-p existence item is cited by nothing in-run (it serves a future
   page — check it is stated in the existence form anyway), and batch 3's
   closure machinery must not be reached for by any other batch (nothing
   else declares it).
2. **Every cross-level citation.** Items citing already-published pages:
   open the published item and confirm its Statement carries what the citing
   step needs. A published dependency that is unambiguously false may be
   repaired under the obvious-repair rule — record it in
   `research/frontier-15-published-dependency-repairs.md`, and note that no
   author certifies its own repair. Watch batch 5's citations into the
   frontier-14 lifting items: their printed hypotheses must match the use.
3. **The contract merge:**

```
node tools/merge-proof-contracts.mjs --level frontier-15 \
  research/frontier-15-proof-contracts.json research/frontier-15-batch-*.proof-contracts.json
node tools/proof-contract.mjs research/frontier-15-proof-contracts.json --strict
node tools/finite-smoke.mjs research/frontier-15-proof-contracts.json
node tools/risk-report.mjs research/frontier-15-proof-contracts.json --require-reviewed
node tools/boundary-audit.mjs research/frontier-15-batch-*.proof-contracts.json
node tools/citation-fidelity.mjs research/frontier-15-proof-contracts.json --fail-on-missing-quote
node tools/gate-liveness.mjs --run frontier-15 --contracts research/frontier-15-proof-contracts.json
```

`--require-reviewed` belongs here, not at step 5: a `risk_review` is a
disposition only Alpha may write, and 6b is where it is written.

4. **The spine receipt.**
   `node tools/spine-audit.mjs --template research/frontier-15-spine-audit.json`
   to generate, then fill and re-run with `--receipt`, over the proof-bearing
   items among the largest transitive dependency cones. It lapses on any
   content change, so it must be current when step 7 freezes.

## Output

`research/frontier-15-alpha-6c.md`: every cross-batch and cross-level
citation you checked, the defects found and their dispositions, the gate
results, and an explicit statement of what you did **not** check. Every
confirmed-fatal disposition writes its `research/defect-ledger.jsonl` row in
the same act.

**No permission prompts of any kind**, including inside an `&&` chain.
