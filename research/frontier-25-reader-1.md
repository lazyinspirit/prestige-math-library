# frontier-25 reader-1 report

Date: 2026-08-30
Batch: `1`
Run: `frontier-25`

## Opened scope

- Reader instructions: `research/frontier-25-dispatch/reader-reader-1.attempt-1.prompt.md`, `research/frontier-25-reader.task.md`
- Batch artifacts: `research/frontier-25-batch-1.pages.json`, `research/frontier-25-batch-1.coverage.json`, `research/frontier-25-batch-1.notes.md`, `research/frontier-25-batch-1.proof-contracts.json`
- Live run state: `.autopilot/status.md`
- Assigned pages:
  - `library/commutative-algebra/valuation-rings-and-discrete-valuation-rings.md`
  - `library/commutative-algebra/valuation-rings-and-discrete-valuation-rings-examples.md`
- Assigned items (27):
  - `def-totally-ordered-abelian-group`
  - `def-valuation-on-a-field`
  - `def-valuation-ring`
  - `lem-valuation-ring-is-local`
  - `thm-valuation-ring-characterisations`
  - `def-value-group-of-a-valuation-ring`
  - `thm-every-valuation-ring-arises-from-its-value-group`
  - `thm-valuation-ring-is-integrally-closed`
  - `def-discrete-valuation`
  - `def-discrete-valuation-ring`
  - `def-uniformising-parameter`
  - `thm-dvr-element-normal-form`
  - `thm-ideals-in-a-dvr`
  - `cor-prime-ideals-and-dimension-of-a-dvr`
  - `thm-equivalent-characterisations-of-a-dvr`
  - `thm-noetherian-valuation-ring-characterisation`
  - `thm-dvr-ideal-and-module-length`
  - `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr`
  - `cor-dvr-is-a-pid`
  - `ex-p-adic-dvr`
  - `ex-localisation-of-a-pid-at-a-prime`
  - `ex-plane-curve-local-ring-not-dvr`
  - `ex-rank-two-valuation-ring-not-dvr`
  - `ex-nondiscrete-ordered-subgroup-valuation`
  - `ex-dvr-length-computation`
  - `ex-uniformisers-and-dvr-ideal-arithmetic`
  - `ex-valuation-ring-ideals-linearly-ordered`
- Dependency pages opened:
  - `library/abstract-algebra/chain-conditions-and-semisimple-modules.md`
  - `library/commutative-algebra/prime-spectra-and-radicals.md`
  - `library/commutative-algebra/integral-extensions-and-going-up.md`
  - `library/abstract-algebra/the-field-of-fractions-and-localisation.md`
  - `library/abstract-algebra/ideals-and-quotient-rings.md`
  - `library/abstract-algebra/euclidean-domains-pids-and-unique-factorisation.md`
  - `library/commutative-algebra/noetherian-rings-and-hilbert-basis.md`
  - `library/linear-algebra/the-determinant-of-a-linear-operator.md`
  - `library/abstract-algebra/modules-over-a-pid-and-canonical-forms.md`
- Direct dependency items opened (17):
  - `cor-length-is-additive-in-short-exact-sequences`
  - `cor-principal-ideal-domains-are-noetherian`
  - `def-composition-series-and-length-of-a-module`
  - `def-height-of-a-prime-ideal`
  - `def-integral-closure-and-integrally-closed-domain`
  - `def-krull-dimension-of-a-ring`
  - `def-local-ring`
  - `def-localisation-at-a-prime-ideal`
  - `def-noetherian-ring`
  - `def-prime-and-maximal-ideals`
  - `def-principal-ideal-domain`
  - `thm-adjugate-identity-over-a-commutative-ring`
  - `thm-localisation-at-a-prime-is-local`
  - `thm-nilradical-of-a-noetherian-ring-is-nilpotent`
  - `thm-noetherian-ring-ideal-characterisations`
  - `thm-noetherian-ring-quotients-and-localisations`
  - `thm-prime-spectrum-of-a-localisation-bijection`

## Confirmed repairs

1. `items/thm-valuation-ring-characterisations.md`
   - Confirmed a fatal false-claim defect in the statement and reverse implication: as written, conditions 2 and 3 can hold for a field `V` sitting inside a larger field `K` even when `V` is not a valuation ring of `K`.
   - Repair: strengthened the ambient hypothesis to `V` being a domain with fraction field `K`, added the explicit fraction-field decomposition fact used in the reverse direction, and renumbered the proof to match the canonical step form.

2. `items/thm-every-valuation-ring-arises-from-its-value-group.md`
   - Confirmed a citation/closure defect in the order proof: the item retained an unused imported fact from `thm-valuation-ring-characterisations`, while the actual order verification needed explicit reflexive and transitive steps on current bytes.
   - Repair: removed the stale imported fact and rewrote the order-verification steps so the total-order claim is explicitly closed by the displayed proof.

3. `items/thm-equivalent-characterisations-of-a-dvr.md`
   - Confirmed a material proof defect in the `(3) => (4)` and summary spine: the draft used a circular appeal back into the condition-4 branch after only proving the maximal ideal principal, and its final implication ledger no longer matched the current step structure.
   - Repair: rewrote the central proof so the reusable “Noetherian local domain with principal maximal ideal” block is proved once, derived ideal classification from it, made the determinant-trick contradiction explicit at a nonzero coordinate, and updated the implication summary accordingly.

4. `items/ex-nondiscrete-ordered-subgroup-valuation.md`
   - Confirmed a boundary-case omission in the nondiscreteness witness: the ceiling argument did not exclude the special case `\varepsilon = 1`.
   - Repair: inserted the explicit smaller positive element `\sqrt2-1` first, forcing any least positive element into the range `0 < \varepsilon < 1` before the denominator argument runs.

5. `research/frontier-25-batch-1.proof-contracts.json`
   - Regenerated the affected contract entries for:
     - `thm-valuation-ring-characterisations`
     - `thm-every-valuation-ring-arises-from-its-value-group`
     - `thm-equivalent-characterisations-of-a-dvr`
     - `ex-nondiscrete-ordered-subgroup-valuation`
     - `thm-noetherian-valuation-ring-characterisation`
     - `ex-valuation-ring-ideals-linearly-ordered`
   - Repaired the stale zero-boundary rationale on `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr` so the contract now records that the localisation denominators are automatically nonzero.

No stale `verification.judge` record was present on any repaired in-flight item, so no judge removal was needed.

## Page verdicts

- `valuation-rings-and-discrete-valuation-rings`: pass after the three A-item repairs and the contract refresh above.
- `valuation-rings-and-discrete-valuation-rings-examples`: pass after the nondiscreteness boundary repair.

## Uneditable defects

None confirmed in the opened dependency closure.

## Blockers

None.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-valuation-ring-characterisations.md items/thm-every-valuation-ring-arises-from-its-value-group.md items/thm-equivalent-characterisations-of-a-dvr.md items/ex-nondiscrete-ordered-subgroup-valuation.md`
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-valuation-ring-characterisations.md items/thm-every-valuation-ring-arises-from-its-value-group.md items/thm-equivalent-characterisations-of-a-dvr.md items/ex-nondiscrete-ordered-subgroup-valuation.md`
- `node tools/regen-contract-entries.mjs research/frontier-25-batch-1.proof-contracts.json thm-valuation-ring-characterisations thm-every-valuation-ring-arises-from-its-value-group thm-equivalent-characterisations-of-a-dvr ex-nondiscrete-ordered-subgroup-valuation thm-noetherian-valuation-ring-characterisation ex-valuation-ring-ideals-linearly-ordered`
- `node tools/proof-contract.mjs research/frontier-25-batch-1.proof-contracts.json --strict`
- `node tools/citation-fidelity.mjs research/frontier-25-batch-1.proof-contracts.json --fail-on-missing-quote`
- `node tools/boundary-audit.mjs research/frontier-25-batch-1.proof-contracts.json --fail-on-contradicted`
- `node tools/rendercheck.mjs items/thm-valuation-ring-characterisations.md items/thm-every-valuation-ring-arises-from-its-value-group.md items/thm-equivalent-characterisations-of-a-dvr.md items/ex-nondiscrete-ordered-subgroup-valuation.md`
- `node tools/content-policy.mjs research/frontier-25-batch-1.pages.json`
