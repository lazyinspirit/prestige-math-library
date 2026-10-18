# Step 3a reader report — batch 70

Run: `non-ml-math-remaining-81-2026-10-18`

## Scope and status

I reviewed the current batch-70 manifest independently of the author notes. The manifest assigns 25 items: 22 on the A page and three examples on the B page. The older `batch-70.notes.md` describes a 15-item inventory and a Step-1 state; those counts and status do not match the current manifest or the recomputed `.autopilot/` status, so I used the task dispatch and current manifest as the review scope.

At the status check, the run was in `3a-read` with no worker in flight. The status also reported an unrelated run-wide `3a-collect` blocker: `collect-18` failed three times for batch 18. Batch 70 had no workflow blocker.

## Opened inventory

Assigned pages:

- `library/hecke-algebras-and-categorification/unequal-parameter-hecke-cells-and-representations.md` (A page).
- `library/hecke-algebras-and-categorification/unequal-parameter-hecke-cells-and-representations-examples.md` (B page).

The three declared page-reading prerequisites were also opened:

- `library/hopf-hecke-algebras/hopf-hecke-and-quantum-symmetry-interfaces.md`.
- `library/coxeter-groups/bruhat-subword-order-and-lifting.md`.
- `library/braid-groups/hecke-markov-traces-and-polynomial-link-invariants.md`.

Assigned items opened in dependency order:

- Level 0: `def-arbitrary-rank-coxeter-system-and-bruhat-order`; `def-canonical-basic-set-for-hecke-specialization`; `def-schur-elements-from-a-symmetrizing-trace`; `rem-general-unequal-parameter-cell-conjectures-are-regime-dependent`; `lem-complete-local-hecke-modular-systems-and-idempotent-lifting`.
- Level 1: `def-unequal-parameter-weight-function-and-coefficient-order`; `thm-arbitrary-rank-finite-parabolics-and-bruhat-subword`.
- Level 2: `lem-simple-generator-weights-extend-to-a-weight-function`; `def-unequal-parameter-coxeter-hecke-algebra`.
- Level 3: `lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity`.
- Level 4: `thm-unequal-parameter-kazhdan-lusztig-basis`.
- Level 5: `def-unequal-parameter-cells-and-cell-quotients`; `def-finite-weyl-lusztig-basic-set-data`.
- Level 6: `thm-unequal-parameter-cell-quotients-are-modules`; `lem-lusztig-asymptotic-algebra-and-specialization-map`; `ex-b2-unequal-parameter-kl-basis-and-cell-edges`.
- Level 7: `thm-a1xa1-unequal-parameter-cells-give-a-canonical-basic-set`; `lem-schur-leading-coefficients-and-good-asymptotic-specializations`; `cex-modular-specialization-collapses-unequal-parameter-cell-labels`.
- Level 8: `lem-asymptotic-induction-identifies-leading-modular-simples`.
- Level 9: `lem-filtered-projectives-prove-canonical-basic-set-reciprocity`.
- Level 10: `thm-finite-weyl-canonical-basic-sets-from-lusztig-properties`.
- Level 11: `cor-weighted-cell-quotients-and-finite-weyl-basic-set-labels`; `ex-a1-nonsemisimple-good-specialization-has-a-basic-set`.
- Level 12: `rem-geck-basic-set-theorem-scope-and-proof-status`.

The relevant statements or definitions of the direct published suppliers were opened; longer supplier arguments were read where the assigned proof relied on them. The external supplier inventory was:

```text
def-free-group
def-group-presentation
def-relators-relations-and-finite-presentations
def-normal-closure
def-quotient-group
def-natural-numbers
thm-well-ordering-principle
def-group
def-hh-coxeter-matrix-word-group-and-length
def-cg-bruhat-order-by-reflection-chains
thm-equivalent-characterisations-of-a-dvr
def-composition-series-and-composition-factors-of-an-object
def-simple-object
thm-jordan-holder-theorem-in-an-abelian-category
def-hh-canonical-hecke-trace-and-symmetrizing-form
thm-hh-canonical-hecke-trace-is-symmetric-and-perfect
def-axiom-of-choice
lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain
thm-noetherian-ring-quotients-and-localisations
cor-polynomial-ring-over-a-field-is-a-pid
thm-krull-height-theorem
thm-completion-of-a-noetherian-local-ring
thm-completion-preserves-regular-local-rings
thm-regular-local-rings-are-domains-and-cohen-macaulay
thm-nakayama-lemma
thm-finite-modules-over-complete-noetherian-rings-are-complete
thm-hh-coxeter-exchange-deletion-and-faithfulness
thm-hh-parabolic-minimal-representatives-and-length-additivity
thm-cg-bruhat-subword-characterization
thm-hh-matsumoto-reduced-word-theorem
lem-hh-dihedral-root-recurrence-and-root-sign
def-algebra-over-a-commutative-ring
lem-hh-free-associative-ring-and-relations-descent
def-hh-universal-coxeter-hecke-parameters-and-presentation
thm-hh-generic-coxeter-hecke-standard-basis
lem-hh-reduced-word-independence-and-length-multiplication
cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras
def-essential-epimorphism-and-projective-cover
def-projective-module
thm-free-modules-are-projective-with-choice-boundary
```

Primary source locations checked against the current claims:

- [Lusztig, *Hecke Algebras with Unequal Parameters*](https://arxiv.org/pdf/math/0208154): §§3.1–3.2 and Theorem 5.2 (PDF pp. 22–23 and 27–29) cover the weight-function odd-edge condition, presentation, and bar-invariant basis; §§8.1–8.3 (PDF pp. 36–37) give the cell conventions; §§13.1–13.2 and 14.1–14.3 (PDF pp. 55–58) state positive weights, boundedness, and conjecture status.
- [Geck, *Relative Kazhdan–Lusztig Cells*](https://arxiv.org/pdf/math/0511548): Theorem 4.4 and Definition 4.13 (PDF pp. 15–16 and 22–23) give Schur exponents/leading integers and canonical basic-set conditions; Theorem 4.11 (PDF p. 20) gives the nonzero-Schur-element condition; §5.2 (PDF pp. 24–25) gives P2–P8/P15′; Remark 5.9 (PDF p. 29) gives the zero-weight qualification; Theorem 6.6 (PDF pp. 32–35) gives the conditional basic-set theorem and proof route.
- [Björner–Brenti, *Combinatorics of Coxeter Groups*](https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf): Theorem 2.2.2 (printed pp. 34–35) gives both directions of the subword property and the fixed-expression statement; Chapter 1, §§1.4–1.5 (printed pp. 16–20), supports the reduced-word and finite-parabolic steps.

The assigned page prerequisite `hopf-hecke-and-quantum-symmetry-interfaces` is draft context only; its own page says its local spectral-R suppliers are not logical suppliers for these items. The two published context pages supply reading context, while the actual proof dependencies are the item suppliers listed above.

## Repairs and evidence

- `thm-arbitrary-rank-finite-parabolics-and-bruhat-subword`, proof 1.1: made the normal-closure finite-product step explicit and justified that the finite free-group inclusion is injective by a retraction. Added the exact dependencies `def-normal-closure` and `def-free-group`. This closes the finite-support reduction used before applying the published finite-parabolic theorem.
- `def-finite-weyl-lusztig-basic-set-data`, Definition: identified `alpha_E` and `f_E` as Geck's source-defined Schur exponent and leading integer, and stated what the local lemma proves from P2–P8/P15′. Geck Theorem 4.4, PDF pp. 15–16, supplies this notation.
- `lem-lusztig-asymptotic-algebra-and-specialization-map`, Statement and proof 8.1: named the asymptotic support degree `nu_E`, leaving its equality with the Schur exponent to the next lemma. Also restricted the rational evaluation in 8.1 to a nonzero rational value, as required to evaluate Laurent coefficients.
- `lem-schur-leading-coefficients-and-good-asymptotic-specializations`, Statement and proofs 3.2, 5.1 and 5.3: used `nu_E` for the support degree, the degree-specific identity in the constant-term calculation, and then proved `nu_E=alpha_E` from the generic trace-dual-basis formula. This removes the unsupported identification from the supplier lemma and proves the exact leading coefficient needed by its consumers.
- `lem-filtered-projectives-prove-canonical-basic-set-reciprocity`, dependencies and proofs 1.1 and 5.1: checked explicitly that the corestricted specialization to `k0` remains good; then proved the radical quotient and nilpotent-ideal argument that keeps the projective-cover kernel superfluous after field extension. Added the projective-cover definition as a direct supplier.
- `thm-finite-weyl-canonical-basic-sets-from-lusztig-properties`, dependencies, Facts & Assumptions, and proof 2.2: supplied the projective-cover superfluous-kernel fact and proved the first nonzero projective layer has a single generic `J`-simple summand. Reciprocity for `E(M)` gives the reverse inequality `b <= a_M`; the previous argument gives `a_M <= b`, so the minimum layer is exactly `a_M` and its unique label is `E(M)`. This avoids inferring total decomposition multiplicity one from head multiplicity alone.
- `cor-weighted-cell-quotients-and-finite-weyl-basic-set-labels`, Facts & Assumptions and proof 3.1: made the support-degree-to-Schur-exponent identification explicit using the already-declared free-model reciprocity supplier. Its direct dependency set remains within the existing batch manifest.

The residue algebra in `def-canonical-basic-set-for-hecke-specialization` is formed by base change along `O→k0→k`; it is well-defined and equals the two-stage scalar extension, so I made no edit there.

Updated the batch proof-contract rows for the six repaired proof-bearing items and the two unchanged consumers whose quoted supplier statements changed: `lem-asymptotic-induction-identifies-leading-modular-simples` and `ex-a1-nonsemisimple-good-specialization-has-a-basic-set`. No changed item had a `verification.judge` record.

## Defects not edited

None. No defect remains in the assigned items or assigned A-page prose after these repairs.

## Page verdicts

- `unequal-parameter-hecke-cells-and-representations` (A): pass after the listed repairs. Its arbitrary-rank Hecke and cell claims are proved locally; the finite-Weyl modular result retains the explicit P2–P8/P15′ and L-good hypotheses. The page does not claim universal P1–P15, positivity, or cell classification.
- `unequal-parameter-hecke-cells-and-representations-examples` (B): pass. The B2 computation supports only its four stated arrows; the characteristic-two example proves generic labels can merge without asserting basic-set nonexistence; the rank-one example correctly retains its nonsemisimple L-good case.

## Checks and blocker

- Reflow ran for all seven changed item paths and made no further formatting changes.
- Precheck passed all six proof-bearing changed items; the changed definition returned not-applicable (zero proofs).
- Full batch proof-contract audit passed for all 25 assigned items with zero errors or warnings.
- Final `proof-layout` checked seven changed items and 42 steps with zero defects.
- Batch 70 has no blocker. The run status also reports the unrelated `collect-18` failure for batch 18 in `3a-collect`; that run-wide blocker was not modified here.

## Coverage note

The current manifest's 25 assigned items, the two assigned pages, their three declared page-reading prerequisites, the direct suppliers needed for the proofs, and the cited primary-source passages listed above were reviewed. I did not audit every full proof in the transitive published-library closure or any unrelated batch. The stale author-note inventory was treated as evidence only; the current manifest controls the inventory reported here.
