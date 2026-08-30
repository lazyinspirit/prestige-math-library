# frontier-25 alpha group a step 6b adjudication

Date: Sunday, August 30, 2026
Run: frontier-25
Group: a
Scope: batches 1, 4, and 5

## Batch 1

- Page obligations: none; `research/frontier-25-step6-scope-1.json` routes no touched page carrier.
- Touched obligations: 7 total.
- `accepted_repair`: `thm-valuation-ring-characterisations`, `thm-noetherian-valuation-ring-characterisation`, `ex-valuation-ring-ideals-linearly-ordered`.
- `amended_repair`: `thm-every-valuation-ring-arises-from-its-value-group`, `thm-equivalent-characterisations-of-a-dvr`, `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr`, `ex-nondiscrete-ordered-subgroup-valuation`.
- Refuter obligations: 1 total, `confirmed_nonfatal` on `thm-equivalent-characterisations-of-a-dvr`.
- Risk review: wrote 11 complete `risk_review` records for the current HIGH/CRITICAL items in `research/frontier-25-batch-1.proof-contracts.json`.

## Batch 4

- Page obligations: none; `research/frontier-25-step6-scope-4.json` routes no touched page carrier.
- Touched obligations: 4 total.
- `accepted_repair`: none after the current gate repair.
- `amended_repair`: `cor-winding-number-classifies-loops-in-the-punctured-plane`, `lem-contractibility-implies-trivial-fundamental-group`, `lem-null-homology-implies-connected-spherical-complement`, `thm-homotopy-invariance-of-holomorphic-line-integrals`.
- Refuter obligations: 8 total.
- `confirmed_fatal`: `cor-cauchy-theorem-for-null-homotopic-loops`, `cor-spherical-complement-characterization-of-plane-simple-connectivity`, `ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped`, `ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm`, `lem-trivial-fundamental-group-implies-null-homology-for-plane-domains`, `rem-simply-connected-convention-for-plane-domains`, `thm-grand-equivalence-for-simply-connected-plane-domains` at `refuter:4:7`.
- `confirmed_nonfatal`: `thm-grand-equivalence-for-simply-connected-plane-domains` at `refuter:4:8`.
- Supplemental gate repairs: `gate:frontier-25-S6-a-gate-4-1` records the downstream Choice-scope sync defect on `cex-the-punctured-plane-separates-c-complement-from-spherical-complement`; `gate:frontier-25-S6-a-gate-4-2` and `gate:frontier-25-S6-a-gate-4-3` record the stale touched-carrier reclassification on `cor-winding-number-classifies-loops-in-the-punctured-plane` and `lem-null-homology-implies-connected-spherical-complement`.
- Risk review: wrote 8 complete `risk_review` records for the current HIGH/CRITICAL items in `research/frontier-25-batch-4.proof-contracts.json`.

## Batch 5

- Page obligations: none; `research/frontier-25-step6-scope-5.json` routes no touched page carrier.
- Touched obligations: 9 total.
- `accepted_repair`: `cor-number-of-monic-irreducible-polynomials-over-a-finite-field`, `cor-von-mangoldt-mobius-inversion-formula`, `def-von-mangoldt-function`, `ex-dirichlet-convolution-table-through-twelve`, `ex-liouville-square-indicator`, `prop-liouville-convolution-square-indicator`, `thm-von-mangoldt-divisor-sum-identity`.
- `amended_repair`: `thm-dirichlet-convolution-invertibility-criterion`, `thm-dirichlet-convolution-preserves-multiplicativity`.
- Refuter obligations: 1 total, `confirmed_fatal` on `cex-the-mertens-conjecture-is-false`.
- Risk review: wrote 2 complete `risk_review` records for the current HIGH/CRITICAL items in `research/frontier-25-batch-5.proof-contracts.json`.

## Outputs

- Wrote `research/frontier-25-alpha-a-6b-decisions.json` with 33 current decisions: 10 `accepted_repair`, 10 `amended_repair`, 8 `confirmed_fatal`, and 5 `confirmed_nonfatal`.
- Appended 33 closed frontier-25 group-a Step-6 rows to `research/defect-ledger.jsonl` across `research/frontier-25-alpha-a-6b-ledger-rows.json` and `research/frontier-25-alpha-a-6b-gate-ledger-rows.json`.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts <edited item scope>`: pass.
- `node tools/tsx-run.mjs tools/precheck.mts <edited proof-bearing items>`: pass after canonical step-tag and numbering cleanup on three batch-4 items.
- `node tools/proof-contract.mjs research/frontier-25-batch-{1,4,5}.proof-contracts.json --strict`: pass, `20/20`, `25/25`, and `17/17`.
- `node tools/risk-report.mjs research/frontier-25-batch-{1,4,5}.proof-contracts.json --require-reviewed --json`: pass on all three owned contracts.
- `node tools/citation-fidelity.mjs research/frontier-25-batch-{1,4}.proof-contracts.json --fail-on-missing-quote`: pass; no missing quotes and no widening candidates.
- `node tools/content-policy.mjs research/frontier-25-batch-4.pages.json research/frontier-25-batch-5.pages.json`: pass, `55 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/rendercheck.mjs <edited item scope>`: pass.
- `node tools/boundary-audit.mjs research/frontier-25-batch-{1,4,5}.proof-contracts.json --items-dir items --fail-on-contradicted`: no contradicted dispositions remain. Batches 1 and 4 still emit nonblocking template-reuse advisories on legacy `not_applicable` rationales.
- `node tools/step6-scope.mjs stamp --run frontier-25 --group a`: pass; stamped 31 current carrier hashes.
- `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate --batch 1`: pass, `27 item(s) routed, 8 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate --batch 4`: pass, `28 item(s) routed, 12 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate --batch 5`: pass, `27 item(s) routed, 10 adjudication obligation(s), 0 error(s)`.
- `node tools/defect-ledger.mjs validate --run frontier-25`: pass, `113 defect row(s) checked, 0 error(s)`.
- `git diff --check -- <group-a step-6 scope>`: pass.

## Blockers

- None in the live scope for group a.

## Gate repair - `step6-routing-adjudicate` (Sunday, August 30, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed two stale batch-4 touched decisions: `cor-winding-number-classifies-loops-in-the-punctured-plane` and `lem-null-homology-implies-connected-spherical-complement`.
- Reread the current items against `research/frontier-25-reader-4.md` and found no new mathematical defect. I retagged the two touched decisions from `accepted_repair` to `amended_repair` and appended the supplemental gate rows `frontier-25-S6-a-gate-4-2` and `frontier-25-S6-a-gate-4-3` via `research/frontier-25-alpha-a-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate --batch 4`
  -> `28 item(s) routed, 12 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-25 --phase adjudicate`
  -> `381 item(s) routed, 110 adjudication obligation(s), 0 error(s)`.
