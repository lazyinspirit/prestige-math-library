# frontier-25 alpha group d step 6b adjudication

Date: 2026-08-30
Run: frontier-25
Group: d
Scope: batches 10 and 11

## Batch 10

- Touched obligations: 1 total, accepted.
  `ex-subset-construction-can-require-exponentially-many-states` keeps Reader 10's repair on the live carrier with no further Alpha amendment.

- Refuter obligations: 4 total, all confirmed fatal and repaired.
  Confirmed fatal and repaired: `lem-pda-fragment-variables-compose`, `prop-deterministic-cfls-are-closed-under-complement`, `thm-nfa-constructions-for-union-concatenation-and-star`, and `thm-pda-to-cfg-construction`.

- Risk review: ran `tools/risk-report.mjs` on `research/frontier-25-batch-10.proof-contracts.json` without `--require-reviewed`, reviewed every current HIGH or CRITICAL item against its proof and the cited definitions plus the reader/refuter evidence, and wrote complete `alpha-6b-d` `risk_review` notes for all 8 required batch-10 items:
  `prop-every-dfa-is-an-nfa`, `lem-subset-construction-state-invariant`, `prop-subset-construction-can-require-exponentially-many-states`, `thm-cfg-to-pda-construction`, `thm-epsilon-elimination-for-nfas`, `thm-pda-to-cfg-construction`, `lem-dpdas-have-unique-computations`, and `prop-deterministic-cfls-are-unambiguous`.

## Batch 11

- Touched obligations: 3 total.
  Accepted: `ex-valid-computation-histories-are-decidable`.
  Amended: `def-halting-computation-and-divergence`, because the live item bytes now differ from the raw post-reader snapshot while preserving Reader 11's typed opening repair, and `prop-valid-computation-histories-are-decidable`, because Alpha kept Reader 11's recursive-list repair and also replaced the untagged configuration code by a tagged one with a canonical trailing-blank test.

- Refuter obligations: 4 total, all confirmed and repaired.
  Confirmed fatal and repaired: `def-partial-function-computed-by-a-machine`, `prop-valid-computation-histories-are-decidable` (both routed findings), and `prop-valid-computation-histories-are-decidable`'s exactness claim.
  Confirmed nonfatal and repaired: `lem-acceptance-is-configuration-reachability`.

- Risk review: ran `tools/risk-report.mjs` on `research/frontier-25-batch-11.proof-contracts.json` without `--require-reviewed`, reviewed every current HIGH or CRITICAL item against its proof and the current dependency text plus the refuter evidence, and wrote complete `alpha-6b-d` `risk_review` notes for all 3 required batch-11 items:
  `prop-valid-computation-histories-are-decidable`, `lem-acceptance-is-configuration-reachability`, and `ex-acceptance-is-configuration-reachability`.

## Repairs

- `def-partial-function-computed-by-a-machine`
  The definition now fixes the machine input alphabet to `{0,1}`, so the machine-input domain matches the binary encodings it quantifies over.

- `prop-valid-computation-histories-are-decidable`
  The proof now uses tagged state/tape blocks and enforces the canonical last-cell condition from `def-turing-machine-configuration`, which repairs both the `Q cap Gamma` overlap defect and the redundant-trailing-blank defect. Reader 11's recursive list encoder repair remains in place.

- `lem-acceptance-is-configuration-reachability`
  The proof no longer imports finite-digraph path language. It now proves both directions directly from finite witness lists of consecutive configuration-graph arcs.

- `thm-nfa-constructions-for-union-concatenation-and-star`
  The union construction now starts from disjoint copies of the two input NFAs, preventing cross-machine runs through shared state names.

- `lem-pda-fragment-variables-compose`
  The converse split now occurs only when the lower stacked symbol is first exposed, not merely when the stack stops beginning with the upper symbol.

- `thm-pda-to-cfg-construction`
  The reverse inclusion now performs a first-move case split and uses the repaired fragment lemma only at the licensed lower-symbol exposure point.

- `prop-deterministic-cfls-are-closed-under-complement`
  The unsupported local sketch was replaced by an explicit source-backed use of the standard DPDA complementation theorem from Kozen and Lewis-Papadimitriou.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/def-partial-function-computed-by-a-machine.md items/prop-valid-computation-histories-are-decidable.md items/lem-acceptance-is-configuration-reachability.md items/thm-nfa-constructions-for-union-concatenation-and-star.md items/lem-pda-fragment-variables-compose.md items/thm-pda-to-cfg-construction.md items/prop-deterministic-cfls-are-closed-under-complement.md`
  Result: pass; `lem-acceptance-is-configuration-reachability.md` and `thm-nfa-constructions-for-union-concatenation-and-star.md` reflowed once and the final bytes are canonical.

- `node tools/regen-contract-entries.mjs research/frontier-25-batch-10.proof-contracts.json thm-nfa-constructions-for-union-concatenation-and-star lem-pda-fragment-variables-compose thm-pda-to-cfg-construction prop-deterministic-cfls-are-closed-under-complement`
  Result: regenerated 4 entries, then regenerated the complement entry once more after the precheck numbering normalization.

- `node tools/regen-contract-entries.mjs research/frontier-25-batch-11.proof-contracts.json prop-valid-computation-histories-are-decidable lem-acceptance-is-configuration-reachability`
  Result: regenerated 2 entries; then the stale boundary-step references for `lem-acceptance-is-configuration-reachability` were updated in the batch-11 contract.

- `node tools/tsx-run.mjs tools/precheck.mts items/prop-valid-computation-histories-are-decidable.md items/lem-acceptance-is-configuration-reachability.md items/thm-nfa-constructions-for-union-concatenation-and-star.md items/lem-pda-fragment-variables-compose.md items/thm-pda-to-cfg-construction.md items/prop-deterministic-cfls-are-closed-under-complement.md`
  Result: pass after adopting the canonical step numbering in `prop-deterministic-cfls-are-closed-under-complement.md`; final rerun clean.

- `node tools/proof-contract.mjs research/frontier-25-batch-10.proof-contracts.json --strict`
  Result: pass, `27/27 item(s) checked`, `0 error(s)`, `0 warning(s)`.

- `node tools/citation-fidelity.mjs research/frontier-25-batch-10.proof-contracts.json --fail-on-missing-quote`
  Result: pass; `54 citation(s)`, no missing quotes, no widening candidates.

- `node tools/boundary-audit.mjs research/frontier-25-batch-10.proof-contracts.json --fail-on-contradicted`
  Result: pass; no contradicted boundary dispositions.

- `node tools/proof-contract.mjs research/frontier-25-batch-11.proof-contracts.json --strict`
  Result: pass, `8/8 item(s) checked`, `0 error(s)`, `0 warning(s)`.

- `node tools/citation-fidelity.mjs research/frontier-25-batch-11.proof-contracts.json --fail-on-missing-quote`
  Result: pass; `16 citation(s)`, no missing quotes, no widening candidates.

- `node tools/boundary-audit.mjs research/frontier-25-batch-11.proof-contracts.json --fail-on-contradicted`
  Result: pass; no contradicted boundary dispositions.

- `node tools/apply-risk-reviews.mjs --run frontier-25 --file <staged reviews>`
  Result: applied 11 complete `risk_review` records across batches 10 and 11.

- `node tools/risk-report.mjs research/frontier-25-batch-10.proof-contracts.json --require-reviewed --json`
  Result: pass; all 8 required HIGH/CRITICAL batch-10 items now carry complete `alpha-6b-d` `risk_review` records.

- `node tools/risk-report.mjs research/frontier-25-batch-11.proof-contracts.json --require-reviewed --json`
  Result: pass; all 3 required HIGH/CRITICAL batch-11 items now carry complete `alpha-6b-d` `risk_review` records.

- `node tools/rendercheck.mjs items/def-partial-function-computed-by-a-machine.md items/prop-valid-computation-histories-are-decidable.md items/lem-acceptance-is-configuration-reachability.md items/thm-nfa-constructions-for-union-concatenation-and-star.md items/lem-pda-fragment-variables-compose.md items/thm-pda-to-cfg-construction.md items/prop-deterministic-cfls-are-closed-under-complement.md`
  Result: pass, `OK - 7 file(s)`.

- `node tools/defect-ledger.mjs append --file research/frontier-25-alpha-d-6b-ledger-rows.json`
  Result: appended 13 closed rows and regenerated `research/DEFECT-LEDGER.md`.

- `node tools/defect-ledger.mjs validate --run frontier-25`
  Result: pass, `13 defect row(s) checked`, `0 error(s)`.

- `node tools/step6-scope.mjs stamp --run frontier-25 --group d`
  Result: pass; stamped 12 current carrier hashes into `research/frontier-25-alpha-d-6b-decisions.json`.

- `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate --batch 10`
  Result: pass, `38 item(s) routed`, `5 adjudication obligation(s)`, `0 error(s)`.

- `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate --batch 11`
  Result: pass, `19 item(s) routed`, `7 adjudication obligation(s)`, `0 error(s)`.

- `git diff --check -- items/def-partial-function-computed-by-a-machine.md items/prop-valid-computation-histories-are-decidable.md items/lem-acceptance-is-configuration-reachability.md items/thm-nfa-constructions-for-union-concatenation-and-star.md items/lem-pda-fragment-variables-compose.md items/thm-pda-to-cfg-construction.md items/prop-deterministic-cfls-are-closed-under-complement.md research/frontier-25-batch-10.proof-contracts.json research/frontier-25-batch-11.proof-contracts.json research/frontier-25-alpha-d-6b-ledger-rows.json research/defect-ledger.jsonl research/DEFECT-LEDGER.md`
  Result: pass.

## Blockers

- None in the live scope for batches 10 and 11.

## Gate repair - `step6-routing-adjudicate` (Sunday, August 30, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed one stale batch-11 touched decision: `def-halting-computation-and-divergence`.
- Reread the current definition against `research/frontier-25-reader-11.md` and found no new mathematical defect. I retagged the touched decision from `accepted_repair` to `amended_repair` and appended the supplemental gate row `frontier-25-S6-d-gate-11-1` via `research/frontier-25-alpha-d-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate --batch 11`
  -> `19 item(s) routed, 7 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate`
  -> `381 item(s) routed, 110 adjudication obligation(s), 0 error(s)`.
