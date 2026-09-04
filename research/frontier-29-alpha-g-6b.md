# Frontier-29 Alpha g Step 6b

Run: `frontier-29`  
Group: `g`  
Date: Tuesday, September 1, 2026

## Scope

Owned batches: `18` and `19`.

Routed obligations on current disk:

- Batch `18`: `9` touched items and `3` refuter findings.
- Batch `19`: `8` touched items and `7` refuter findings.
- Supplemental gate findings created during the mandatory high-risk reread: `1` (`def-bounded-computation-tableau`).

There were no routed page obligations and no routed reader-findings obligations for this group.

## Adjudication

- Touched carriers: `7` now close as `accepted_repair` and `10` as `amended_repair`.
- Routed refuter findings: `9` close as `confirmed_fatal`; `1` (`thm-schwartz-zippel-lemma`, proof step `1.1`) closes as `confirmed_nonfatal`.
- Supplemental gate findings: `1` closes as `confirmed_fatal` on `def-bounded-computation-tableau`.

Mathematical repairs applied on current disk:

- Batch `18`: repaired the Cook-Levin tableau semantics so bounded tableaux may stutter after halting, local windows are checked on padded rows, the locality lemma handles repeated halting rows, and the Cook-Levin correctness / SAT-completeness proofs now use that repaired convention explicitly.
- Batch `19`: repaired the pairwise-independence definition and remark, replaced the PP counterexample with an explicit polynomial-time language witness, narrowed the configuration-count lemma to a fixed input, weakened Freivalds to the one-trial algebraic error bound the proof actually establishes, and closed the empty-set plus `n=0` boundary holes in Schwartz-Zippel.

## Risk Review

Completed `risk_review: {status: complete, reviewer: alpha-6b-g, notes: ...}` on every current high/critical item owned by this group:

- Batch `18`: `16` items.
- Batch `19`: `15` items.

Each note names the actual risk signal reread and why the current proof, refutation, or repaired contract resolves it. The follow-up `risk-report --require-reviewed` rerun passes on both owned batch contracts.

## Focused Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the seven edited proof-bearing items: `lem-space-bounded-machines-have-exponentially-many-configurations`, `thm-freivalds-matrix-product-verification`, and `thm-schwartz-zippel-lemma` reflowed; the other four were unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on the seven edited proof-bearing items: pass, `7 checked, 0 failing`.
- `node tools/rendercheck.mjs` on the ten directly edited item files: clean.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-18.proof-contracts.json ...`: regenerated `8` batch-18 entries.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-19.proof-contracts.json ...`: regenerated `10` batch-19 entries.
- `node tools/proof-contract.mjs research/frontier-29-batch-18.proof-contracts.json --strict` and `...batch-19... --strict`: both clean (`30/30`).
- `node tools/citation-fidelity.mjs research/frontier-29-batch-18.proof-contracts.json --fail-on-missing-quote` and `...batch-19... --fail-on-missing-quote`: no quote misses and no widening candidates.
- `node tools/apply-risk-reviews.mjs --run frontier-29 --file /tmp/frontier-29-alpha-g-risk-reviews.json`: applied `31` risk-review records across batches `18` and `19`.
- `node tools/risk-report.mjs research/frontier-29-batch-18.proof-contracts.json --require-reviewed` and `...batch-19... --require-reviewed`: both pass.
- `node tools/defect-ledger.mjs append --file research/frontier-29-alpha-g-6b-ledger-rows.json` and `node tools/defect-ledger.mjs validate --run frontier-29`: `28` new frontier-29 Step-6 rows, ledger clean.
- `node tools/step6-scope.mjs stamp --run frontier-29 --group g`: stamped `28` current carrier hashes.
- `node tools/step6-scope.mjs check --run frontier-29 --phase adjudicate --batch 18`: pass, `12` adjudication obligations, `0` errors.
- `node tools/step6-scope.mjs check --run frontier-29 --phase adjudicate --batch 19`: pass, `15` adjudication obligations, `0` errors.
- A whole-run `node tools/step6-scope.mjs check --run frontier-29 --phase adjudicate` was not used as the dispatch gate: it reports stale reader-routing state in batch `16` and missing 6b decision files for groups `a` through `f`, all outside Alpha-g's owned scope.

Artifacts written:

- `research/frontier-29-alpha-g-6b-ledger-rows.json`
- `research/frontier-29-alpha-g-6b-decisions.json`
- `research/frontier-29-alpha-g-6b.md`

## Blockers

None.

## Gate repair - `step6-routing-adjudicate` (Tuesday, September 1, 2026)

- Reproduced the live gate and confirmed 3 stale touched decisions in batch `19`.
- Reread the current Chebyshev / reachability-size / BPP-amplification items against `research/frontier-29-reader-19.md`; the current proofs remain mathematically sound on disk.
- Retagged the 3 touched decisions from `accepted_repair` to `amended_repair` and appended the 3 matching supplemental gate rows via `research/frontier-29-alpha-g-6b-gate-ledger-rows.json`.
- Shared rerun: `node tools/step6-scope.mjs check --run frontier-29 --phase adjudicate` now returns `step6-scope: 755 item(s) routed, 291 adjudication obligation(s), 0 error(s)`.
