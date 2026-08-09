# Wave 9 published repair ledger

Reviewer: Audit-Alpha (GPT 5.6 Sol, owner-delegated), A6, 2026-08-09.

This ledger records the exact published text changed in Wave 9 before A7. Five
item ids and one page were materially repaired at A4; A6 added one narrow
dependency/citation repair inside an already material target. The 38 remaining
scoped items were field-aware provenance/source/verification retags only.

## `def-oscillation`

- Defect and class: class (a) unambiguous mathematical falsehood. The old unrestricted
  nonnegativity and real-valued bounded claims contradicted the definition's
  explicit convention `omega_f(emptyset) = -infinity`.
- A4 repair: qualify nonnegativity and the bounded real-valued conclusion by
  nonempty-set/point oscillation, and retain the empty-set exception explicitly.
- A6 repair: the displayed bound `|f(x)-f(y)| <= |f(x)|+|f(y)|` cited only
  `lem-of-abs-value`, whose current text does not state the triangle inequality.
  Alpha added the existing exact dependency and rendered citation
  `lem-of-triangle-inequality`; no definition clause changed at A6.
- Evidence: current extended-real definitions and `lem-of-triangle-inequality`;
  exact-final Terra certification in
  `research/audit/wave9-dispatch/certifier-a6r3-def-oscillation.result.json`.
- Impact: every current affected consumer uses a nonempty interval,
  neighbourhood, or point oscillation, or explicitly retains the empty-set
  convention; all remain licensed.

## `fs-additive-implies-linear`

- Defect and class: class (a) invalid proof argument, plus class (b) removal of
  an unused Fact. The old basis-vector multiplication
  argument did not follow from additivity/Q-linearity.
- Repair: replace it with the valid range-based irrational-value contradiction
  for the Hamel-basis witness. The false public statement remains unchanged.
- Evidence: `def-additive-function`, `lem-additive-is-q-linear`, and
  `lem-hamel-basis-exists`; exact-final Terra certification in
  `research/audit/wave9-dispatch/certifier-a6r2-fs-additive-implies-linear.result.json`.
- Impact: consumers quote only the unchanged counterexample conclusion.

## `thm-baire-one-continuity-points`

- Defect and class: class (b) citation/proof-inventory repair plus a class (a)
  false Remark.
  The old proof carried an unused circular oscillation dependency, and the old
  Remark misstated where the Baire-one hypothesis enters.
- Repair: remove the unused Fact/dependency, use the direct licensed argument,
  and state the actual approximant-continuity/pointwise-convergence uses.
- Evidence: the final proof contract and exact-final Terra certification in
  `research/audit/wave9-dispatch/certifier-a6r2-thm-baire-one-continuity-points.result.json`.
- Impact: the public theorem is unchanged and every consumer remains licensed.

## `thm-continuity-set-realisation`

- Defect and class: class (a) unambiguous mathematical Remark repair. The old prose denied a
  bounded example immediately after constructing one taking values in
  `[-1,1]`, and overclaimed the monotonicity conclusion.
- Repair: state only that the construction does not guarantee monotonicity, is
  bounded, and asserts no behaviour beyond its continuity set.
- Evidence: the current construction and exact-final Terra certification in
  `research/audit/wave9-dispatch/certifier-a6r2-thm-continuity-set-realisation.result.json`.
- Impact: `thm-discontinuity-set-is-f-sigma` uses only the unchanged
  continuity-set theorem and remains licensed.

## `thm-semicontinuous-evt`

- Defect and class: class (b) load-bearing citation repair. The old final step derived the
  lower-semicontinuous clause via `-f` while citing a Fact that did not state
  negation duality.
- Repair: add Fact L7 quoting the exact “Negation exchanges the two” clause of
  `def-semicontinuity`, and cite L7 in step 9.1.
- Evidence: the current dependency text, proof contract, and exact-final Terra
  certification in
  `research/audit/wave9-dispatch/certifier-a6r3-thm-semicontinuous-evt.result.json`.
- Impact: the theorem is unchanged; the current upper-semicontinuity
  counterexample consumer remains licensed.

## `library/real-analysis/monotone-functions-and-discontinuities.md`

- Defect and class: class (a) unambiguous page-prose mathematical repair. The old summary
  assigned the nondecreasing one-sided-limit formulas to all monotone
  functions.
- Repair: say that the left-limit supremum/right-limit infimum formulas are for
  nondecreasing functions and reverse for nonincreasing functions.
- Evidence: `thm-monotone-one-sided-limits-exist` and exact-final Terra
  certification in
  `research/audit/wave9-dispatch/certifier-a6r2-page-monotone-functions-and-discontinuities.result.json`.
- Impact: page prose only; the page itself is not an A7 judge target.

## Exact A7 item target

Only these five item ids are repaired targets:
`def-oscillation`, `fs-additive-implies-linear`,
`thm-baire-one-continuity-points`, `thm-continuity-set-realisation`, and
`thm-semicontinuous-evt`. The exact machine-readable receipt is
`research/audit/wave9-rejudge-targets.json`. No pure retag, page, unchanged
consumer, or reader-only route is included.

## A8 fatal-only repair — `thm-semicontinuous-evt`

Reviewer: Audit-Alpha (GPT 5.6 Sol, owner-delegated), A8, 2026-08-09.

- A7 adjudication: **confirmed fatal**, type `other`. The public Statement said
  that an upper semicontinuous function on a compact set “need be neither
  bounded below nor a function attaining its infimum” and claimed that the
  companion page supplied such a function. The exact companion
  `cex-upper-semicontinuous-need-not-attain-its-infimum` is explicitly bounded
  below by zero, has infimum zero, and attains no minimum. It refutes
  attainment, not boundedness below.
- Minimal repair: replace only that false sentence clause with “need not attain
  its infimum.” The two theorem claims, every Fact, every numbered proof step,
  dependency metadata, provenance, and source metadata are unchanged.
- Contract repair: update only the consumer's exact L5 quotation in the
  namespaced and merged Wave 9 contracts to match the repaired Statement. Both
  contract files pass the 34/34 strict gate.
- Pre-edit normalized hash:
  `6c9c462f58c2a7d6ccbcdbca3e14db97d084d68d6bc760f02d7737896cdfb0b2`.
  Exact-final normalized hash:
  `2c41870f7473c660ab787bedf0da90b98661325380944cc20ffdc44e999ef685`.
- Provenance remains `statement: literature-derived`, `proof: ai-altered`,
  `evidence: exact-source`. The stale A6 `verification.verified` block was
  removed before certification; no judge block was present.
- Impact: the exact reverse-dependency/direct-citation union contains only the
  named companion consumer. It uses the unchanged maximum theorem and is fully
  consistent with the repaired warning, so it remains licensed without an edit
  or rejudge. Evidence is in `research/audit/wave9-A8-impact-review.json`.
- Independent evidence: GPT 5.6 Terra independently read the exact-final item,
  all 13 dependencies, the consumer, and both current contract copies at the
  exact-final hash, then returned `CERTIFIED`, `CURRENT-TEXT: READ`, and
  `FINDINGS: NONE`. The append-only result is
  `research/audit/wave9-dispatch/certifier-a8-final1-host-thm-semicontinuous-evt.result.json`;
  its hash-bound index is `research/audit/wave9-A8-certifier-index.json`.
  Alpha restored the owner-delegated `verification.verified` stamp only after
  checking that result and rechecking the exact-final hash.

The exact A8 targeted paired-rejudge set is the singleton
`thm-semicontinuous-evt`. Neither of the two confirmed-nonfatal items nor the
unchanged still-licensed consumer belongs to it.
