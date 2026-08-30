# frontier-25 alpha group c step 6b adjudication

Date: Sunday, August 30, 2026
Run: frontier-25
Group: c
Scope: batches 6, 7, and 8

Group c owed 28 Step-6 decisions on the live scope: 18 `touched` carriers and
10 `refuter` findings. There were no routed page obligations and no routed
reader findings in this group.

## Batch 6

- Touched obligations: 6 total.
  Accepted as exact reader-result carriers: none after the current gate repair.
  Amended beyond the raw reader result: `cor-the-two-unitors-agree-on-the-unit-object`, `ex-the-free-monoid-monad-as-a-monoid-object`, `thm-a-category-with-finite-products-is-monoidal`, `thm-modules-over-a-commutative-ring-form-a-monoidal-category`, `thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product`, and `thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid`.

- Refuter obligations: 4 total, all confirmed fatal and repaired.
  `def-the-reverse-and-the-opposite-of-a-monoidal-category`, `def-lax-strong-and-strict-monoidal-functor`, `thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid`, and `ex-the-five-bracketings-of-a-four-fold-product`.

- Risk review: reran `risk-report` on `research/frontier-25-batch-6.proof-contracts.json` and wrote 6 complete `alpha-6b-c` `risk_review` records into the live batch contract.

## Batch 7

- Touched obligations: 12 total.
  Accepted as exact reader-result carriers: `cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension`, `def-chain-homotopy`, `ex-a-contracting-homotopy-for-the-two-term-identity-complex`, `ex-two-homotopic-maps-with-different-components`, `fs-chain-homotopic-maps-are-equal-as-chain-maps`, `fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence`, `lem-chain-homotopy-is-compatible-with-addition-and-composition`, `prop-chain-homotopy-is-an-equivalence-relation`, and `thm-chain-homotopic-maps-induce-the-same-map-on-homology`.
  Amended beyond the raw reader result: `fs-every-acyclic-complex-is-contractible`, `prop-zero-cocycles-in-the-hom-complex-are-chain-maps`, and `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category`.

- Refuter obligations: 1 total, confirmed fatal and repaired.
  `lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible`.

- Risk review: reran `risk-report` on `research/frontier-25-batch-7.proof-contracts.json` and wrote 11 complete `alpha-6b-c` `risk_review` records into the live batch contract.

## Batch 8

- Touched obligations: none.

- Refuter obligations: 5 total, all confirmed and repaired.
  Confirmed fatal: `cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree`, `lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree`.
  Confirmed nonfatal: `lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears`, and the two separate findings on `thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb`.

- Risk review: reran `risk-report` on `research/frontier-25-batch-8.proof-contracts.json` and wrote 4 complete `alpha-6b-c` `risk_review` records into the live batch contract.

## Outputs

- Decisions file: `research/frontier-25-alpha-c-6b-decisions.json`
  31 current decisions total: 9 `accepted_repair`, 9 `amended_repair`, 7 `confirmed_fatal`, and 6 `confirmed_nonfatal`.

- Risk-review payload: `research/frontier-25-alpha-c-6b-risk-reviews.json`
  Applied 21 complete `risk_review` records across batches 6, 7, and 8.

- Ledger rows: `research/frontier-25-alpha-c-6b-ledger-rows.json`
  Appended 31 frontier-25 group-c Step-6 rows to `research/defect-ledger.jsonl` across `research/frontier-25-alpha-c-6b-ledger-rows.json` and `research/frontier-25-alpha-c-6b-gate-ledger-rows.json`, then regenerated `research/DEFECT-LEDGER.md`.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts <9 edited items>`
  Result: pass; four batch-8 items were reflowed, the other five were already canonical.

- `node tools/regen-contract-entries.mjs research/frontier-25-batch-6.proof-contracts.json <9 ids>`
  Result: regenerated 7 batch-6 contract entries; the two definition ids were correctly skipped because they are not authored proof-contract rows.

- `node tools/regen-contract-entries.mjs research/frontier-25-batch-7.proof-contracts.json <3 ids>`
  Result: pass; regenerated 3 batch-7 contract entries.

- `node tools/regen-contract-entries.mjs research/frontier-25-batch-8.proof-contracts.json <4 ids>`
  Result: regenerated 3 batch-8 contract entries; the no-facts lemma contract row was then updated manually so its derivations and boundary note match the live repaired item.

- `node tools/tsx-run.mjs tools/precheck.mts <7 edited proof-bearing items>`
  Result: pass, `7 checked, 0 failing`.

- `node tools/rendercheck.mjs <9 edited items>`
  Result: pass, `OK - 9 file(s)`.

- `node tools/proof-contract.mjs research/frontier-25-batch-{6,7,8}.proof-contracts.json --strict`
  Result: pass, `32/32`, `37/37`, and `12/12` with `0` errors and `0` warnings on the post-risk-review contracts.

- `node tools/citation-fidelity.mjs research/frontier-25-batch-{6,7,8}.proof-contracts.json --fail-on-missing-quote`
  Result: pass; `73`, `108`, and `26` citations respectively, with no missing quotes and no widening candidates.

- `node tools/risk-report.mjs research/frontier-25-batch-{6,7,8}.proof-contracts.json --require-reviewed --json`
  Result: pass; every required HIGH or CRITICAL item in the three owned batches now carries a complete `alpha-6b-c` `risk_review` record.

- `node tools/defect-ledger.mjs append --file research/frontier-25-alpha-c-6b-ledger-rows.json`
  Result: pass; appended 28 rows and regenerated `research/DEFECT-LEDGER.md`.

- `node tools/step6-scope.mjs stamp --run frontier-25 --group c`
  Result: pass; stamped 28 current carrier hashes for the group-c decisions file.

- `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate --batch 6`
  Result: pass, `46 item(s) routed, 10 adjudication obligation(s), 0 error(s)`.

- `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate --batch 7`
  Result: pass, `48 item(s) routed, 13 adjudication obligation(s), 0 error(s)`.

- `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate --batch 8`
  Result: pass, `13 item(s) routed, 5 adjudication obligation(s), 0 error(s)`.

- `node tools/defect-ledger.mjs validate --run frontier-25`
  Result: pass, `41 defect row(s) checked, 0 error(s)`.

- `git diff --check -- <group-c items, contracts, and Step-6 artifacts>`
  Result: pass.

## Blockers

- None in the live scope for group c.

## Gate repair - `step6-routing-adjudicate` (Sunday, August 30, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed three stale batch-6 touched decisions: `cor-the-two-unitors-agree-on-the-unit-object`, `ex-the-free-monoid-monad-as-a-monoid-object`, and `thm-modules-over-a-commutative-ring-form-a-monoidal-category`.
- Reread the current items against `research/frontier-25-reader-6.md` and found no new mathematical defect. I retagged the three touched decisions from `accepted_repair` to `amended_repair` and appended the supplemental gate rows `frontier-25-S6-c-gate-6-1` through `frontier-25-S6-c-gate-6-3` via `research/frontier-25-alpha-c-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate --batch 6`
  -> `46 item(s) routed, 10 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate`
  -> `381 item(s) routed, 110 adjudication obligation(s), 0 error(s)`.
