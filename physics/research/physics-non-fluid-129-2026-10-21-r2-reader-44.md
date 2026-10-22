# Step 3a reader report — batch 44

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `44`  
Role: reader

## Opened inventory

Assigned pages:

- `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-form-spectral-methods.md`
- `library/non-relativistic-quantum-mechanics-mathematics/nrqmx-form-spectral-methods-examples.md`

The A-page prerequisite page carriers were also opened:
`nrqmx-operator-realizations`, `qm-math-coulomb`,
`spectral-measures-and-borel-functional-calculus`,
`analytic-semigroups-and-linear-evolution-equations`,
`unbounded-self-adjoint-operators-and-stones-theorem`, and
`tempered-distributions-and-the-fourier-transform`. For the current-run
operator-realizations prerequisite, I also opened
`items/def-nrqmx-extension-data.md`. The page edge is appropriate to the
operator-domain and trace-data context; no defect was found in that supplier
use.

Assigned items were reviewed in their manifest's in-batch dependency order:

1. `thm-nrqmx-closed-form-representation`
2. `thm-nrqmx-rank-one-resolvent`
3. `thm-nrqmx-free-laplacian-form-domain`
4. `thm-nrqmx-form-min-max`
5. `lem-nrqmx-yukawa-resolvent-kernel`
6. `thm-nrqmx-birman-schwinger-negative-spectrum`
7. `ex-nrqmx-attractive-separable-bound-state`
8. `cex-nrqmx-trial-vector-domain`

I inspected the current item statements and proofs, their direct dependency
statements/definitions, and the corresponding proof-contract derivations,
citations, risk records, and boundary cases. Direct item prerequisites
reviewed were:

`cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space`,
`def-axiom-of-choice`, `def-closed-sectorial-form-and-its-associated-operator`,
`def-compact-linear-operator`, `def-countable-choice`,
`def-discrete-and-essential-spectrum-of-a-self-adjoint-operator`,
`def-nrqm-coulomb-closed-semibounded-forms`,
`def-nrqm-coulomb-ltwo-kernel-operators`,
`def-real-and-complex-inner-product-space`,
`def-resolvent-and-spectrum-of-a-closed-unbounded-operator`,
`def-sobolev-space-wkp-and-its-norm`,
`lem-compositions-with-a-compact-operator-are-compact`,
`lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact`,
`lem-schwartz-space-is-dense-in-l-two`,
`thm-cauchy-schwarz-in-an-inner-product-space`, `thm-dominated-convergence`,
`thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces`,
`thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`,
`thm-intermediate-value`, `thm-kato-rellich`,
`thm-l-one-l-two-agreement-of-fourier-transform`,
`thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`,
`thm-locally-integrable-functions-embed-in-distributions`,
`thm-monotone-convergence-for-the-integral`,
`thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators`,
`thm-plancherel`, `thm-polar-coordinates-formula-for-lebesgue-measure`,
`thm-riesz-representation-for-hilbert-space`,
`thm-self-adjoint-resolvent-estimate`,
`thm-spectral-theorem-for-compact-self-adjoint-operators`,
`thm-spectral-theorem-for-unbounded-self-adjoint-operators`,
`thm-tonelli-and-fubini-for-completed-product-measures`, and
`thm-unbounded-borel-functional-calculus`.

No TikZ/tikzcd diagrams occur on the assigned pages or in the assigned items.

## Mathematical review

The closed-form representation proof correctly constructs the Riesz resolvent
on the shifted form Hilbert space, uses positivity and injectivity to obtain the
self-adjoint inverse, identifies the operator domain, and proves the stated
form-bound perturbation result by equivalent shifted norms. The rank-one proof
uses the stated first-variable-linear convention consistently and verifies the
resolvent inverse on both sides. The free-Laplacian proof identifies the weak
form domain and operator domain with the Fourier multipliers. The form min–max
proof handles finite and empty essential-spectrum thresholds and proves its
strict-below-threshold conclusion locally. The Yukawa proof has the correct
`2π` normalization, integrability, convolution multiplier, and inverse-domain
argument. The Birman–Schwinger proof establishes compactness, the eigenspace
correspondence, and the strict count through the form negative index. The
Gaussian rank-one example proves its threshold criterion, strict monotonicity,
and uniqueness; the counterexample normalizes an `L²` vector and proves its
kinetic form integral diverges.

The key source statements were checked at their cited locators. Porta's
Theorem 4.65 states the unique self-adjoint representation of a densely defined
closed semibounded form and its operator-domain characterization (printed
pp. 41–42, [Tübingen notes](https://www.math.uni-tuebingen.de/de/forschung/maphy/lehre/ss-2019/quantumtheory/dateien/notes.pdf)).
Nam's min–max theorem is in §2.3 (printed pp. 17–18); its Birman–Schwinger
theorem uses inclusive endpoint counts in §3.3 (printed pp. 42–45), while the
assigned item proves its strict version locally. Nam's §2.5 gives the free
Schrödinger realization on `H²`, and §3.3 gives the three-dimensional Yukawa
kernel ([LMU notes](https://www.math.lmu.de/~nam/LectureNotesFA2021.pdf)).
Albeverio–Kurasov Theorem 1.1.1 states the rank-one resolvent formula for a
bounded perturbation of a self-adjoint operator, with the source's pairing
convention accounted for in the local proof ([publisher preview](https://api.pageplace.de/preview/DT0400.9781139382595_A23867432/preview-9781139382595_A23867432.pdf)).
These source checks corroborate the claims; the assigned proof items supply the
arguments required by the library.

## Edit and validation

In `ex-nrqmx-attractive-separable-bound-state.md`, I changed the title from
“Attractive separable perturbation has at most one bound state” to “Rank-one
attractive perturbation has at most one negative eigenvalue.” The proof and
statement establish the count of negative eigenvalues; the revised title states
that exact scope. The proof contract's `one` boundary now records that its
evidence supports the revised title. The item had no `verification.judge` record.

Required checks on the edited item passed:

- Reflow: completed.
- Precheck: 1 item checked, 0 failing.
- Proof-layout: 1 item, 5 numbered steps, 0 defects.

## Uneditable finding

`thm-intermediate-value` is a published mathematics dependency of the assigned
consumer `ex-nrqmx-attractive-separable-bound-state`. Its theorem statement is
clear through the intermediate-value conclusion, but the same `## Statement`
then continues with proof commentary and a malformed nested-interval sentence
(“and it is A nested sequence ...”). This is an ill-formed published statement
section. The assigned proof uses only the valid theorem clause. The source is
outside this reader's write scope; it is retained as a nonfatal published-
dependency finding in the findings JSON.

## Page verdicts and blockers

- `nrqmx-form-spectral-methods`: **Pass.** The draft mathematics page has a
  coherent item inventory and prerequisite ordering; no page-prose defect was
  found. The published IVT supplier defect is separately routed through its
  assigned consumer.
- `nrqmx-form-spectral-methods-examples`: **Pass.** The draft companion page
  correctly requires the A-page and lists both assigned examples once.

No blocker remains for this reader assignment. I reviewed the assigned items,
their direct item prerequisites, and the six direct A-page prerequisite page
carriers; I did not audit the full unrelated transitive mathematical-library
closure or independently re-prove every published mathematical supplier.
