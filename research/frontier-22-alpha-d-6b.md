# Frontier-22 Alpha d Step 6b

Run: `frontier-22`  
Group: `d`  
Date: Friday, August 28, 2026

## Scope

Owned batches: `6` and `7`.

Routed obligations on current disk:

- Batch `6`: `46` touched items and `7` refuter findings.
- Batch `7`: `3` touched items and `2` refuter findings.
- Supplemental gate findings created during the mandatory high-risk reread and contract audit: `43`.

There were no routed page obligations and no routed reader-findings obligations for this group.

## Adjudication

All `49` touched obligations now close as `amended_repair`. On reread, each live item still matches the reader-repaired item bytes, but every touched carrier now differs from the raw post-reader snapshot because its batch-6 or batch-7 contract fingerprint changed later during Step 6b through refuter repairs, contract-boundary repairs, proof repairs, batch-wide contract regeneration, or the required Alpha risk_review writes.

Refuter findings confirmed and repaired:

- Batch `6`: all `7` routed refuter findings are `confirmed_fatal`. Three were renderer-breaking definition displays, one was the ill-typed circline set-builder, and three were the constant-`infinity` inconsistencies in the sphere-meromorphic/rational-degree package.
- Batch `7`: both routed refuter findings are `confirmed_fatal`. The Weierstrass division theorem and quotient-module lemma both needed the `m=1` coefficient-ring boundary made explicit through `\mathcal O_{0,0}=\mathbb C`.

Additional 6b gate repairs on current disk:

- Repaired the high-risk proof of `thm-three-point-transitivity-mobius-transformations` by replacing the repeated-point cross-ratio shortcut with an explicit case-split Möbius normalization formula.
- Repaired `thm-cross-ratio-mobius-invariant` so step `1.1` now normalizes to `(1,0,\infty)` and matches the correct cross-ratio order before invoking uniqueness.
- Repaired six stale batch-6 contract boundary rows: the empty-family rows on `lem-locally-bounded-holomorphic-families-are-locally-equicontinuous`, `thm-montel-theorem-for-holomorphic-functions`, `thm-normal-holomorphic-families-are-locally-bounded`, `thm-chordal-arzela-ascoli-criterion-for-meromorphic-families`, and `fs-normality-means-sequential-limits-stay-inside-the-family`, plus the zero-boundary row on `thm-three-point-transitivity-mobius-transformations` after the proof repair.

## Risk Review

Completed `risk_review: {status: complete, reviewer: alpha-6b-d, notes: ...}` on every current high/critical item owned by this group:

- Batch `6`: `17` items.
- Batch `7`: `18` items.

Each note names the actual risk signal I reread and why the current proof, refutation, or repaired contract now resolves it. The final `--require-reviewed` rerun also promoted `thm-mobius-preserves-circlines-and-reflections` into the high-risk set after the circline-package repair, and its contract now carries the required Alpha `risk_review`. No owned high/critical item remains without a complete Alpha `risk_review`.

## Focused Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the directly edited item files: only the two Möbius/cross-ratio theorem files needed reflow.
- `node tools/tsx-run.mjs tools/precheck.mts` on the seven edited proof-bearing items: pass, `7 checked, 0 failing`.
- `node tools/rendercheck.mjs` on the fifteen directly edited item files, and again on the two reflowed Möbius/cross-ratio theorems: clean.
- `node tools/regen-contract-entries.mjs research/frontier-22-batch-6.proof-contracts.json ...` regenerated all `47` batch-6 proof-contract entries; `...batch-7...` regenerated all `33` batch-7 entries.
- `node tools/proof-contract.mjs research/frontier-22-batch-6.proof-contracts.json --strict` and `...batch-7... --strict`: both clean.
- `node tools/citation-fidelity.mjs research/frontier-22-batch-6.proof-contracts.json --fail-on-missing-quote` and `...batch-7... --fail-on-missing-quote`: no quote misses and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-22-batch-6.proof-contracts.json --fail-on-contradicted` and `...batch-7... --fail-on-contradicted`: no contradicted dispositions remain after the batch-6 boundary repairs.
- `node tools/apply-risk-reviews.mjs --run frontier-22 --file /tmp/frontier-22-alpha-d-risk-reviews.json` and the follow-on one-item rerun for `thm-mobius-preserves-circlines-and-reflections`: applied `35` risk-review records across batches `6` and `7`.

Artifacts written:

- `research/frontier-22-alpha-d-6b-ledger-rows.json`
- `research/frontier-22-alpha-d-6b-decisions.json`

## Blockers

None.
