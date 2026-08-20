# Step 6c — cross-batch and cross-level citation audit, run `frontier-16`

You are the **lead Alpha** and this stage has one owner: one global citation
reader.

The group Alphas each saw at most three batches. Nobody has yet read the run
as a whole, and the defects that survive to here are exactly the ones that are
invisible inside a single batch.

## The run at a glance

| batch | category | pairs | Beta task |
|---|---|---|---|
| 1 | real-analysis | `the-inverse-function-theorem-completed`<br>`convex-and-semicontinuous-functions-on-rn` | `research/frontier-16-beta-1.task.md` |
| 2 | real-analysis | `areas-of-elementary-plane-figures`<br>`improper-and-parameter-dependent-multiple-integrals` | `research/frontier-16-beta-2.task.md` |
| 3 | real-analysis | `picard-lindelof-and-first-order-odes`<br>`the-gauge-integral-and-cousins-lemma` | `research/frontier-16-beta-3.task.md` |
| 4 | real-analysis | `trigonometric-and-oscillatory-examples-in-one-variable` | `research/frontier-16-beta-4.task.md` |
| 5 | measure-theory | `measures-and-their-basic-properties` | `research/frontier-16-beta-5.task.md` |
| 6 | topology | `the-seifert-van-kampen-theorem`<br>`classification-of-covering-spaces` | `research/frontier-16-beta-6.task.md` |
| 7 | complex-analysis | `analyticity-liouville-and-morera` | `research/frontier-16-beta-7.task.md` |

## What to check

1. **Every cross-batch citation.** No item may depend on a page outside its
   own page's declared `requires` closure. `validate-plan` catches the
   structural case; you catch the semantic one — a citation that resolves but
   does not carry the claim. Work the seams: any item one batch authored and
   another batch cites, and any item minted for a page outside this run.
2. **Every cross-level citation.** For items citing already-published pages,
   open the published item and confirm its Statement carries what the citing
   step needs. A published dependency that is unambiguously false may be
   repaired under the obvious-repair rule — take a dedicated touch snapshot
   first, record it in `research/frontier-16-published-dependency-repairs.md`, and
   note that no author certifies its own repair. If the correction needs a
   debatable restatement, a new theorem, a deletion or a reading-order change,
   it is not "obvious": report it for the owner.
3. **The contract merge and its detectors:**

```
node tools/merge-proof-contracts.mjs --level frontier-16 \
  research/frontier-16-proof-contracts.json research/frontier-16-batch-*.proof-contracts.json
node tools/proof-contract.mjs research/frontier-16-proof-contracts.json --strict
node tools/finite-smoke.mjs research/frontier-16-proof-contracts.json
node tools/risk-report.mjs research/frontier-16-proof-contracts.json --require-reviewed
node tools/boundary-audit.mjs research/frontier-16-batch-*.proof-contracts.json
node tools/citation-fidelity.mjs research/frontier-16-proof-contracts.json --fail-on-missing-quote
node tools/gate-liveness.mjs --run frontier-16 --contracts research/frontier-16-proof-contracts.json
```

The merge runs first: a merge that fails means nothing below it claims to have
passed over a stale file. `--require-reviewed` belongs here, not at step 5 —
a `risk_review` is a disposition only Alpha may write, and 6b is where it is
written.

4. **The spine receipt.**
   `node tools/spine-audit.mjs --template research/frontier-16-spine-audit.json`
   to generate, then fill and re-run with `--receipt`, over the proof-bearing
   items among the largest transitive dependency cones. It lapses on any
   mathematical-content change, so it must be current when step 7 freezes.

## Output

`research/frontier-16-alpha-6c.md`: every cross-batch and cross-level citation you
checked, the defects found and their dispositions, the gate results, and an
explicit statement of what you did **not** check. Every confirmed-fatal
disposition writes its `research/defect-ledger.jsonl` row in the same act.

**No permission prompts of any kind**, including inside an `&&` chain.
