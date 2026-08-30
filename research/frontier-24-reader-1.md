# frontier-24 reader-1 report

Date: 2026-08-29
Batch: `1`
Run: `frontier-24`

## Opened scope

- Reader instructions: `research/frontier-24-dispatch/reader-reader-1.prompt.md`
- Batch artifacts: `research/frontier-24-batch-1.pages.json`, `research/frontier-24-batch-1.coverage.json`, `research/frontier-24-batch-1.notes.md`, `research/frontier-24-batch-1.proof-contracts.json`
- Live run state: `.autopilot/status.md`
- Assigned pages:
  - `library/commutative-algebra/noether-normalisation-and-nullstellensatz.md`
  - `library/commutative-algebra/noether-normalisation-and-nullstellensatz-examples.md`
- Assigned items (35):
  - `lem-maximal-algebraically-independent-subset-is-a-transcendence-basis`
  - `lem-transcendence-basis-exchange`
  - `cor-transcendence-degree-tower-additivity`
  - `lem-noether-normalisation-nonzero-polynomial-made-monic`
  - `lem-noether-normalisation-finite-field-exponent-substitution`
  - `lem-noether-normalisation-one-relation-reduction`
  - `lem-noether-normalisation-inductive-integrality`
  - `cor-noether-normalisation-module-finiteness`
  - `cor-noether-normalisation-dimension-lower-bound`
  - `lem-zariski-lemma-one-variable-localisation-not-finite`
  - `lem-zariski-lemma-localised-polynomial-ring-not-field`
  - `lem-zariski-lemma-transcendence-basis-reduction`
  - `cor-field-finite-type-over-a-field-is-a-finite-extension`
  - `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite`
  - `lem-evaluation-ideal-is-maximal`
  - `cor-weak-nullstellensatz-algebraically-closed-coordinate-form`
  - `lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus`
  - `lem-rabinowitsch-unit-ideal-consequence`
  - `lem-rabinowitsch-substitution-clears-denominators`
  - `cor-strong-nullstellensatz-two-inclusions`
  - `lem-affine-algebra-points-as-k-algebra-maps`
  - `cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field`
  - `lem-vanishing-ideal-is-radical`
  - `lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical`
  - `cor-affine-radical-ideal-point-separation`
  - `lem-jacobson-ring-prime-as-intersection-of-maximals`
  - `lem-finite-type-jacobson-residue-extension`
  - `cor-affine-closed-points-detect-radicals`
  - `ex-transcendence-basis-and-algebraic-remainder`
  - `ex-noether-normalisation-triangular-change`
  - `ex-noether-normalisation-finite-field-weight-choice`
  - `ex-zariski-lemma-denominator-obstruction`
  - `ex-weak-nullstellensatz-over-real-numbers`
  - `ex-strong-nullstellensatz-nonradical-ideal`
  - `ex-rabinowitsch-identity-explicit`
- Dependency pages opened:
  - `library/abstract-algebra/algebraic-closure-embeddings-and-separability.md`
  - `library/abstract-algebra/finite-fields-and-cyclotomic-extensions.md`
  - `library/commutative-algebra/integral-extensions-and-going-up-examples.md`
- Direct dependency items opened (27):
  - `cor-integral-extension-lifts-finite-prime-chains`
  - `cor-rational-function-field-as-a-fraction-field`
  - `cor-residue-field-of-a-localisation-at-a-prime`
  - `def-algebraically-closed-field`
  - `def-field-extension-generated-subfields-and-simple-extension`
  - `def-finite-type-and-module-finite-algebras`
  - `def-finitely-generated-field-extension`
  - `def-krull-dimension-of-a-ring`
  - `def-localisation-at-a-prime-ideal`
  - `def-multiplicative-subset-and-localisation`
  - `def-polynomial-evaluation-and-root`
  - `def-radical-of-an-ideal`
  - `lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring`
  - `lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite`
  - `thm-finitely-generated-algebraic-extensions-are-finite`
  - `thm-integrality-and-finite-module-equivalences`
  - `thm-localisation-at-a-prime-is-local`
  - `thm-localisation-equivalence-and-ring-laws`
  - `thm-monic-polynomial-division`
  - `thm-polynomial-ring-over-a-field-is-a-ufd`
  - `thm-prime-spectrum-of-a-localisation-bijection`
  - `thm-proper-ideal-contained-in-maximal-ideal`
  - `thm-quotient-is-field-iff-ideal-maximal`
  - `thm-radical-as-intersection-of-primes`
  - `thm-transitivity-of-algebraicity`
  - `thm-transitivity-of-integrality`
  - `thm-universal-property-of-a-polynomial-ring`

## Confirmed repairs

1. `items/lem-rabinowitsch-substitution-clears-denominators.md`
   - Confirmed a real zero-boundary defect: the written descent from the localization back to `k[x_1,\ldots,x_n]` was invalid when `f=0`, and even in the `f\ne 0` branch it needed the localization equality criterion plus the domain property of the polynomial ring.
   - Repair: split off the trivial `f=0` case, renumbered the proof, and rewrote the denominator-clearing step so the equality in the localization descends honestly to an equality in `R`.

2. `items/cor-strong-nullstellensatz-two-inclusions.md`
   - Confirmed a missing-hypothesis defect: the proof cites `lem-rabinowitsch-unit-ideal-consequence`, whose statement assumes the Axiom of Choice, but the corollary omitted that hypothesis.
   - Repair: added `Assume the Axiom of Choice.` to the statement and `Given` block.

3. `items/cor-affine-radical-ideal-point-separation.md`
   - Confirmed the same missing-hypothesis defect through its citation of `cor-strong-nullstellensatz-two-inclusions`.
   - Repair: added `Assume the Axiom of Choice.` to the statement and `Given` block.

4. `items/cor-affine-closed-points-detect-radicals.md`
   - Confirmed an unnecessary inference in the final step: the proof had already shown the required intersection statement, but then claimed `B` is Jacobson from the zero-prime case alone.
   - Repair: removed that stale Jacobson inference and the now-unused local fact line.

5. `items/ex-strong-nullstellensatz-nonradical-ideal.md`
   - Confirmed a downstream citation defect after the strong Nullstellensatz repair: the example imported the theorem only as commentary, without carrying the new Choice hypothesis.
   - Repair: removed the unnecessary citation and kept the example self-contained.

6. `items/ex-rabinowitsch-identity-explicit.md`
   - Confirmed the same downstream citation defect for the explicit Rabinowitsch witness.
   - Repair: removed the unnecessary citation to the Choice-dependent unit-ideal lemma.

7. `research/frontier-24-batch-1.proof-contracts.json`
   - Regenerated the affected entries with `tools/regen-contract-entries.mjs` for:
     - `lem-rabinowitsch-substitution-clears-denominators`
     - `cor-strong-nullstellensatz-two-inclusions`
     - `cor-affine-radical-ideal-point-separation`
     - `cor-affine-closed-points-detect-radicals`
     - `ex-strong-nullstellensatz-nonradical-ideal`
     - `ex-rabinowitsch-identity-explicit`

No stale `verification.judge` record was present on any repaired in-flight item, so no judge removal was needed.

## Page verdicts

- `noether-normalisation-and-nullstellensatz`: pass after the four A-item repairs above.
- `noether-normalisation-and-nullstellensatz-examples`: pass after the two example citation cleanups above.

## Uneditable defects

None confirmed in the opened dependency closure.

## Blockers

None.

## Checks run

- `node tools/regen-contract-entries.mjs research/frontier-24-batch-1.proof-contracts.json lem-rabinowitsch-substitution-clears-denominators cor-strong-nullstellensatz-two-inclusions cor-affine-radical-ideal-point-separation cor-affine-closed-points-detect-radicals ex-strong-nullstellensatz-nonradical-ideal ex-rabinowitsch-identity-explicit`
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-rabinowitsch-substitution-clears-denominators.md items/cor-strong-nullstellensatz-two-inclusions.md items/cor-affine-radical-ideal-point-separation.md items/cor-affine-closed-points-detect-radicals.md items/ex-strong-nullstellensatz-nonradical-ideal.md items/ex-rabinowitsch-identity-explicit.md`
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-rabinowitsch-substitution-clears-denominators.md items/cor-strong-nullstellensatz-two-inclusions.md items/cor-affine-radical-ideal-point-separation.md items/cor-affine-closed-points-detect-radicals.md items/ex-strong-nullstellensatz-nonradical-ideal.md items/ex-rabinowitsch-identity-explicit.md`
- `node tools/proof-contract.mjs research/frontier-24-batch-1.proof-contracts.json --strict`
- `node tools/citation-fidelity.mjs research/frontier-24-batch-1.proof-contracts.json --fail-on-missing-quote`
- `node tools/boundary-audit.mjs research/frontier-24-batch-1.proof-contracts.json --fail-on-contradicted`
- `node tools/rendercheck.mjs items/lem-rabinowitsch-substitution-clears-denominators.md items/cor-strong-nullstellensatz-two-inclusions.md items/cor-affine-radical-ideal-point-separation.md items/cor-affine-closed-points-detect-radicals.md items/ex-strong-nullstellensatz-nonradical-ideal.md items/ex-rabinowitsch-identity-explicit.md`
- `node tools/content-policy.mjs research/frontier-24-batch-1.pages.json`
- `git diff --check`

All listed checks passed on the final bytes.
