# frontier-29 reader-3 report

Date: 2026-09-01.
Run: `frontier-29`
Batch: `3`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `README.md`, `CLAUDE.md`, `research/frontier-29-reader.task.md`, `research/frontier-29-beta-3.task.md`, `research/frontier-29-batch-3.pages.json`, `research/frontier-29-batch-3.coverage.json`, `research/frontier-29-batch-3.proof-contracts.json`, `research/frontier-29-batch-3.notes.md`, `research/frontier-29-step6-hash-3-pre.json`, `research/plan-commutative-algebra-track.md` (CA-14 at lines 1184-1241 and 3626-3668), and the matching `research/plan-spec.json` entries.
- Assigned pages: `library/commutative-algebra/henselian-rings-and-equicharacteristic-cohen-structure.md` and `library/commutative-algebra/henselian-rings-and-equicharacteristic-cohen-structure-examples.md`.
- Assigned A-page items: `def-henselian-pair-and-henselian-local-ring`, `lem-henselian-pair-ideal-in-jacobson-radical`, `lem-coprime-factor-bezout-lift`, `lem-hensel-factor-lift-leading-coefficient-normalisation`, `lem-hensel-factor-correction-one-stage`, `lem-hensel-factor-corrections-form-cauchy-sequences`, `lem-hensel-factor-limit-multiplies-to-original`, `lem-hensel-factor-lift-uniqueness-induction`, `prop-uniqueness-of-hensel-factor-lifting`, `lem-simple-root-to-coprime-factorisation`, `cor-factor-hensel-implies-simple-root-hensel`, `cor-idempotents-lift-uniquely-in-a-henselian-pair`, `lem-simple-root-hensel-lifts-idempotents`, `lem-simple-root-form-recovers-factor-lifting`, `cor-henselian-local-simple-root-criterion`, `thm-equivalent-elementary-forms-of-hensels-property`, `cor-complete-separated-adic-pair-henselian`, `cor-complete-local-rings-are-henselian`, `cor-nilpotent-ideal-pair-is-henselian`, `cor-artinian-local-henselian-via-nilpotent-maximal-ideal`, `lem-henselian-quotient-factor-lift`, `cor-quotient-of-a-henselian-local-ring-is-henselian`, `def-equicharacteristic-local-ring-and-coefficient-field`, `lem-coefficient-field-maps-isomorphically-to-residue-field`, `lem-equicharacteristic-prime-field-lifts`, `lem-maximal-residue-injective-subfield`, `lem-coefficient-field-separable-adjunction-step`, `lem-coefficient-field-transcendental-adjunction-step`, `lem-coefficient-field-purely-inseparable-complete-step`, `cor-equicharacteristic-complete-local-ring-has-coefficient-field`, `lem-formal-power-series-evaluation-converges`, `lem-formal-power-series-evaluation-unique-continuous-map`, `lem-cohen-presentation-surjective-mod-maximal-square`, `lem-cohen-presentation-surjective-by-completeness`, `cor-equicharacteristic-complete-local-power-series-quotient`, `lem-parameter-power-series-subring-makes-ring-finite`, `lem-parameter-power-series-map-injective-by-dimension`, `cor-complete-local-domain-finite-over-a-regular-power-series-ring`, and `rem-mixed-characteristic-cohen-structure-boundary`.
- Assigned B-page items: `ex-hensel-factor-correction-mod-three-powers`, `ex-simple-root-and-factor-hensel-same-lift`, `ex-multiple-residue-root-does-not-lift-uniquely`, `ex-idempotent-lifting-and-product-decomposition`, `ex-complete-discrete-valuation-ring-henselian`, `ex-artinian-local-ring-henselian`, `ex-localised-integers-not-henselian`, `ex-cohen-presentation-singular-hypersurface`, and `ex-coefficient-field-noncanonical-choice`.
- Dependency items opened for verification: `def-local-ring`, `def-field`, `def-polynomial-ring-over-a-commutative-ring`, `def-quotient-ring`, `def-separated-and-complete-filtered-module`, `def-system-of-parameters-and-parameter-ideal`, `lem-parameter-ideal-equivalent-m-primary`, `cor-nakayama-generators-modulo-an-ideal`, `prop-units-in-an-adically-complete-ring`, `thm-complete-nakayama-lemma`, `cor-formal-series-over-a-field-is-a-local-domain`, `thm-equivalent-characterisations-of-a-dvr`, `thm-artinian-local-ring-has-nilpotent-maximal-ideal`, `thm-dimension-as-minimal-number-of-radical-generators`, `thm-krull-principal-ideal-theorem`, `thm-localisation-at-a-prime-is-local`, `cor-residue-field-of-a-localisation-at-a-prime`, `thm-z-mod-p-is-a-field`, `thm-noetherian-ring-ideal-characterisations`, `thm-prime-subfield-classification`, and `thm-zorn`.
- Primary-source passages re-opened to repair uncertain steps: Stacks tag `09XD` (Definition 15.11.1 and Lemmas 15.11.6 and 15.11.8), Stacks tag `04GE` (Definition 10.153.1 and Lemma 10.153.3), and Stacks tag `0323` (Remark 10.160.9 and Lemmas 10.160.10-10.160.11).

## Design/spec check

- The live spec and the batch manifest agree on the owned pair, companion page, order `194.001`, and prerequisites `inverse-limits-and-noetherian-completion-examples` and `formal-power-series`.
- The older CA-14 design block still names a wider prerequisite set than the live spec. I did not edit the spec and followed the live batch manifest, consistent with the batch notes.

## Confirmed defects and edits

1. Repaired `items/lem-hensel-factor-lift-leading-coefficient-normalisation.md`.
   The old file cited `lem-coprime-factor-bezout-lift` for a statement about leading coefficients that the cited item does not contain. I removed the false dependency and rewrote the proof as the direct coefficient check it actually is.
2. Repaired `items/cor-complete-separated-adic-pair-henselian.md`.
   Step 1.1 did not prove `I \subseteq J(A)`, and step 1.2 invoked the correction lemma without first supplying the needed Bezout lift. I replaced the Jacobson-radical step with the correct unit criterion argument and inserted the missing Bezout stage explicitly.
3. Repaired `items/lem-henselian-quotient-factor-lift.md`.
   The original pullback argument incorrectly treated a factorization modulo `(I+J)/J` as though it were already a factorization modulo `I`. I replaced it with the correct quotient-map argument using the integral-base-change theorem for Henselian pairs from Stacks tag `09XD`.
4. Repaired `items/lem-simple-root-form-recovers-factor-lifting.md`.
   The old proof compressed a nontrivial coefficient-algebra argument into unsupported local steps. I rewrote it to state honestly that this implication is exactly the local converse in Stacks tag `04GE`, Lemma 10.153.3, which is the source already cited for the item.
5. Repaired `items/thm-equivalent-elementary-forms-of-hensels-property.md`.
   Step 1.2 previously cited only base-ring idempotent lifting while concluding the full finite-algebra idempotent criterion. I replaced that step with the exact pair-level finite-algebra equivalence from Stacks tag `09XD`, keeping the local simple-root equivalence as the on-page route between conditions (1) and (2).
6. Repaired `items/lem-formal-power-series-evaluation-converges.md`.
   The old proof mis-cited `def-local-ring` for the claim that a product of `N` maximal-ideal elements lies in `\mathfrak m^N`. I grounded that step in the definition of ideal powers instead.
7. Repaired `items/lem-parameter-power-series-map-injective-by-dimension.md`.
   The old contradiction used the uncited slogan that a finite extension "does not change the dimension." I rewrote the proof through the explicit dimension drop for `B/(F)` and the contraction of prime chains under the resulting integral extension.
8. Updated `research/frontier-29-batch-3.proof-contracts.json`.
   I regenerated the seven changed contract entries: `lem-hensel-factor-lift-leading-coefficient-normalisation`, `cor-complete-separated-adic-pair-henselian`, `lem-henselian-quotient-factor-lift`, `lem-simple-root-form-recovers-factor-lifting`, `thm-equivalent-elementary-forms-of-hensels-property`, `lem-formal-power-series-evaluation-converges`, and `lem-parameter-power-series-map-injective-by-dimension`.

## Per-page verdicts

- `henselian-rings-and-equicharacteristic-cohen-structure`: pass after the repairs above. The current A-page prose, statements, proofs, and regenerated contracts are consistent with the opened dependencies and reread Stacks passages.
- `henselian-rings-and-equicharacteristic-cohen-structure-examples`: pass. The current B-page body matches the assigned examples and I did not find a surviving page-level overclaim.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-hensel-factor-lift-leading-coefficient-normalisation.md items/cor-complete-separated-adic-pair-henselian.md items/lem-henselian-quotient-factor-lift.md items/lem-simple-root-form-recovers-factor-lifting.md items/thm-equivalent-elementary-forms-of-hensels-property.md items/lem-formal-power-series-evaluation-converges.md items/lem-parameter-power-series-map-injective-by-dimension.md`
  Result: all touched items were reflowed as needed.
- `node tools/tsx-run.mjs tools/precheck.mts` on the seven touched items
  Result: all seven passed after the repairs above.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-3.proof-contracts.json lem-hensel-factor-lift-leading-coefficient-normalisation cor-complete-separated-adic-pair-henselian lem-henselian-quotient-factor-lift lem-simple-root-form-recovers-factor-lifting thm-equivalent-elementary-forms-of-hensels-property lem-formal-power-series-evaluation-converges lem-parameter-power-series-map-injective-by-dimension`
  Result: `regenerated 7, skipped 0`.
- `node tools/tsx-run.mjs tools/precheck.mts` over all proof-bearing batch-3 items
  Result: `45 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-29-batch-3.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 45/45 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-3.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: `93 citation(s)` with no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-29-batch-3.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: one `empty`-axis candidate on `lem-formal-power-series-evaluation-converges`; after manual reread this is a detector false positive triggered by the displayed formal-series sum, not a real empty-input defect.
- `node tools/content-policy.mjs research/frontier-29-batch-3.pages.json`
  Result: `48 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/lem-hensel-factor-lift-leading-coefficient-normalisation.md items/cor-complete-separated-adic-pair-henselian.md items/lem-henselian-quotient-factor-lift.md items/lem-simple-root-form-recovers-factor-lifting.md items/thm-equivalent-elementary-forms-of-hensels-property.md items/lem-formal-power-series-evaluation-converges.md items/lem-parameter-power-series-map-injective-by-dimension.md research/frontier-29-batch-3.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None.

## Blockers

- None.
