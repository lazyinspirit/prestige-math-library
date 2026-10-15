# Step 3a reader report — batch 62

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Scope: batch 62 only

## Opened inventory

The batch manifest lists two draft pages and six draft items.

- A page `qft-ir04`: `library/quantum-field-theory-mathematics/qft-ir04.md`.
- B page `qft-ir04-examples`: `library/quantum-field-theory-mathematics/qft-ir04-examples.md`.
- Assigned items: `def-qft-distribution-scaling-degree`, `lem-qft-test-frechet-uniform-scaling-order`, `thm-qft-finite-scaling-degree-extension`, `prop-qft-local-counterterm-jet-classification`, `prop-qft-four-dimensional-log-scale-anomaly`, and `ex-qft-unique-subcritical-extension`.
- Mathematical supplier items consulted: `def-test-function-space-d-of-an-open-set`, `def-test-function-topology`, `def-distribution`, `def-axiom-of-choice`, `def-countable-choice`, `def-dependent-choice`, `def-fixed-support-test-function-frechet-space`, `def-dirac-delta-and-its-derivatives`, `def-support-of-a-distribution`, `def-polar-surface-measure-on-the-unit-sphere`, `def-regular-distribution-from-a-locally-integrable-function`, `def-choice-function`, `def-function`, `def-natural-numbers`, `def-ck-and-multi-index-notation-in-several-variables`, `lem-fixed-support-test-function-spaces-are-complete`, `thm-baire-category-for-complete-metric-spaces`, `thm-choice-implies-dependent-implies-countable-choice`, `lem-test-function-cutoffs-and-euclidean-localization`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `thm-test-function-operations-are-continuous`, `thm-distributions-supported-at-one-point`, `thm-locally-integrable-functions-embed-in-distributions`, `thm-gaussian-integral`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`, `thm-borel-sigma-algebra-of-a-subspace-is-the-trace`, `def-pi-system`, and `thm-measure-uniqueness-on-a-sigma-finite-pi-system`.
- The batch proof-contract file and `research/math-imports.json` were consulted as context. The imports file was queried for selected supplier pins; the full import closure was not hash-audited.

## Source checks

- Brunetti and Fredenhagen, “Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds,” §5.1 and §5.2, [arXiv:math-ph/9903028](https://arxiv.org/pdf/math-ph/9903028), printed pp. 22–25. The scaling-degree definition is on p. 22; Theorems 5.2 and 5.3 state existence of same-scaling-degree extensions below and at/above the dimension threshold, respectively. The local items state the arbitrary-distribution scope explicitly and provide their own constructions and classification proof.
- Folland, *Real Analysis*, 2nd ed., §2.7, Theorem 2.49, printed pp. 78–79, [source text](https://ru.djvu.online/file/NPF4BEtSuqdFA). This gives the polar-coordinate measure decomposition used in the four-dimensional computation.

## Review results

The scaling-degree definition specifies the punctured Euclidean domain, dilation convention, test-function convergence, extended-real edge cases, extension, and exact homogeneity. The uniform-order lemma’s Baire argument supplies a finite seminorm bound for the entire moving-scale family. The extension theorem’s dyadic construction, Taylor subtraction, continuity, restriction, and scaling-degree estimates establish the stated extension. The point-supported distribution classification gives the finite delta-jet space with the threshold and uniqueness claims. The four-dimensional computation has a convergent defining integral, derives the coefficient (1/(8\pi^2)) with the stated sign, and limits the conclusion to a Euclidean distribution identity. The subcritical example correctly handles negative exponents, the strict integrability threshold, and the nonexistence of a regular-distribution extension at the critical exponent.

No defect was confirmed in an assigned item or in assigned A-page prose. No content repair was made.

### Uneditable published dependency

`thm-baire-category-for-complete-metric-spaces`, Proof step 2.1, derives a sequence of nested balls by dependent choice and then says “Choose centres (x_n\in B_n).” The stated DC instance only supplies the balls. Selecting a centre from each member of that already constructed sequence requires countable choice, or the DC relation must instead construct ball-centre pairs. The theorem states only DC and does not list `thm-choice-implies-dependent-implies-countable-choice` as a dependency. The missing step is readily repairable, and the Baire theorem itself is true under DC; this is a nonfatal proof gap. The assigned lemma `lem-qft-test-frechet-uniform-scaling-order` directly depends on the published theorem. The extension theorem, both propositions, and the example reach it transitively.

## Page verdicts

- `qft-ir04` (A page): **Pass with the external dependency alert above.** Its summary accurately describes the definitions, conditional extension results, finite counterterm classification, and Euclidean scope. No assigned page-prose edit is needed.
- `qft-ir04-examples` (B page): **Pass with the same external dependency alert.** Its summary accurately describes the subcritical regular extension and the critical affine line. Its example reaches the Baire supplier through the assigned prerequisite chain.

## Edits, checks, and blocker

- Edits: none.
- Reflow, precheck, and proof-layout: not run because no item was changed.
- Blocker: none.
- Coverage limitation: the assigned carriers were opened before the supplier pass, so the requested supplier-before-consumer reading order was not achieved. The direct proof suppliers needed for this review were then inspected; I did not independently audit every transitive proof closure of the published mathematical suppliers.
