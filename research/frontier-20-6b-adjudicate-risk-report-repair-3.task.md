# Step 6b repair — risk-report

This file is the authority for repair cycle 3.
Primary gate: `risk-report`
Reason: ERROR risk-review-missing [thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]: thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures is critical risk and lacks a complete Alpha risk_review
Live item ids: `lem-quadratic-irrational-complete-quotients-are-finite-state`, `thm-lagrange-periodic-continued-fraction-theorem`, `ex-continued-fraction-and-extended-euclid`, `ex-continued-fraction-of-square-root-two`, `ex-a-negative-real-continued-fraction`, `lem-radical-membership-by-a-power`, `lem-radical-commutes-with-quotient-correspondence`, `cor-reduced-quotient-by-the-nilradical`, `lem-radical-intersection-proof-separating-prime`, `cor-nilradical-as-intersection-of-primes`, `cor-ring-reduced-iff-zero-is-an-intersection-of-primes`, `lem-vanishing-sets-detect-radicals`, `lem-distinguished-subset-cover-detects-radical`, `thm-prime-spectrum-of-a-quotient-bijection`, `cor-prime-spectrum-insensitive-to-nilpotents`, `lem-minimal-prime-over-an-ideal-exists`, `lem-noetherian-minimal-primes-induction-split`, `thm-nilradical-of-a-noetherian-ring-is-nilpotent`, `cor-radical-ideal-has-finitely-many-minimal-primes-noetherian`, `thm-noetherian-ring-has-finitely-many-minimal-primes`, `cor-dimension-of-a-quotient-as-chains-above-an-ideal`, `ex-prime-sets-of-a-field-and-the-integers`, `ex-prime-ideals-of-a-node`, `thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
cks a complete Alpha risk_review
ERROR risk-review-missing [lem-quadratic-irrational-complete-quotients-are-finite-state]: lem-quadratic-irrational-complete-quotients-are-finite-state is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-lagrange-periodic-continued-fraction-theorem]: thm-lagrange-periodic-continued-fraction-theorem is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [ex-continued-fraction-and-extended-euclid]: ex-continued-fraction-and-extended-euclid is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [ex-continued-fraction-of-square-root-two]: ex-continued-fraction-of-square-root-two is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [ex-a-negative-real-continued-fraction]: ex-a-negative-real-continued-fraction is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [lem-radical-membership-by-a-power]: lem-radical-membership-by-a-power is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [lem-radical-commutes-with-quotient-correspondence]: lem-radical-commutes-with-quotient-correspondence is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cor-reduced-quotient-by-the-nilradical]: cor-reduced-quotient-by-the-nilradical is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [lem-radical-intersection-proof-separating-prime]: lem-radical-intersection-proof-separating-prime is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cor-nilradical-as-intersection-of-primes]: cor-nilradical-as-intersection-of-primes is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cor-ring-reduced-iff-zero-is-an-intersection-of-primes]: cor-ring-reduced-iff-zero-is-an-intersection-of-primes is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [lem-vanishing-sets-detect-radicals]: lem-vanishing-sets-detect-radicals is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [lem-distinguished-subset-cover-detects-radical]: lem-distinguished-subset-cover-detects-radical is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-prime-spectrum-of-a-quotient-bijection]: thm-prime-spectrum-of-a-quotient-bijection is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cor-prime-spectrum-insensitive-to-nilpotents]: cor-prime-spectrum-insensitive-to-nilpotents is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [lem-minimal-prime-over-an-ideal-exists]: lem-minimal-prime-over-an-ideal-exists is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [lem-noetherian-minimal-primes-induction-split]: lem-noetherian-minimal-primes-induction-split is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-nilradical-of-a-noetherian-ring-is-nilpotent]: thm-nilradical-of-a-noetherian-ring-is-nilpotent is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cor-radical-ideal-has-finitely-many-minimal-primes-noetherian]: cor-radical-ideal-has-finitely-many-minimal-primes-noetherian is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [thm-noetherian-ring-has-finitely-many-minimal-primes]: thm-noetherian-ring-has-finitely-many-minimal-primes is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cor-dimension-of-a-quotient-as-chains-above-an-ideal]: cor-dimension-of-a-quotient-as-chains-above-an-ideal is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [ex-prime-sets-of-a-field-and-the-integers]: ex-prime-sets-of-a-field-and-the-integers is critical risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [ex-prime-ideals-of-a-node]: ex-prime-ideals-of-a-node is critical risk and lacks a complete Alpha risk_review

```

## Advisory failures

```json
[
  {
    "stage": "6b-adjudicate",
    "gate": "step6-routing-adjudicate",
    "why": "ERROR decision-not-applied: [ex-a-step-function-generates-a-finite-atomic-measure] accepted_repair no longer matches the reader result"
  }
]
```

## Canonical repair protocol

# Step 6 gate repair

The generated repair task supplies the primary gate, live ids, exhausted ids,
output, and advisory failures. Reproduce only the primary gate on the current
tree; do not revisit exhausted ids or treat advisory failures as this dispatch's
scope.

For each live finding, repair a confirmed in-scope defect or document a
false-positive with the governing rule and exact evidence. Update only records
made stale by a confirmed repair. An unscoped mechanical failure may be fixed at
its repository cause; do not invent an item or ledger row for it.

At 6b, append one `route:"gate"` supplemental decision per concrete defect to
the owning group's decisions file and its matching ledger row. At 6c, append the
required `kind:"gate"` verdict and current carrier hash to
`research/<run>-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.

