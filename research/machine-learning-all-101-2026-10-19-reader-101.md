# Step 3a reader report — batch 101

Run: `machine-learning-all-101-2026-10-19`  
Role: `reader-101`  
Reviewed: 2026-10-20

## Opened inventory

Assigned pages:

- A page `semi-supervised-graph-propagation-and-pseudolabeling-limits` at `library/machine-learning/semi-supervised-graph-propagation-and-pseudolabeling-limits.md`.
- B page `semi-supervised-graph-propagation-and-pseudolabeling-limits-examples` at `library/machine-learning/semi-supervised-graph-propagation-and-pseudolabeling-limits-examples.md`.

Assigned items, read in supplier-before-consumer order:

- `alg-finite-round-confidence-pseudolabeling`
- `lem-real-cholesky-recurrence-computes-factorization`
- `def-graph-harmonic-label-extension`
- `thm-unlabeled-law-alone-does-not-identify-labels`
- `thm-graph-harmonic-extension-uniqueness-and-maximum-principle`
- `alg-graph-harmonic-label-propagation`
- `rem-semisupervised-cluster-assumptions`
- `ex-confident-pseudolabel-can-be-wrong`
- `ex-unlabeled-law-two-point-lower-bound`
- `ex-graph-harmonic-path-interpolation`
- `ex-graph-harmonic-unanchored-component-status`

Dependency suppliers opened to check the claims and proofs:

- `def-finite-weighted-graph-laplacian`, `lem-weighted-graph-laplacian-quadratic-form-and-kernel`
- `def-cholesky-factorisation-with-positive-diagonal`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`, `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost`
- `thm-rank-nullity`, `def-rank-and-nullity`, `lem-kernel-basis-extension-gives-image-basis`, `def-dimension`, `def-finite-cardinality`, `thm-sum-rule`
- `def-supervised-learning-problem`, `def-population-and-empirical-risk`
- `def-sesquilinear-and-hermitian-forms-over-a-field-with-involution`, `def-triangular-and-diagonal-matrices-over-a-commutative-ring`, `def-forward-and-back-substitution-for-triangular-systems`
- `thm-determinant-of-a-triangular-matrix`, `thm-determinant-multiplicative`, `def-matrix-product-and-identity-matrix`, `thm-operator-invertible-iff-determinant-nonzero`

## Edit and evidence

Edited `items/rem-semisupervised-cluster-assumptions.md`. The original sentence stated that a high-density connected cluster “has one class,” which overstates the cited cluster assumption. Chapelle, Schölkopf, and Zien, *Semi-Supervised Learning*, Chapter 1 §1.2.2 (printed p. 5), states that points in the same cluster are likely to have the same class and gives low-density separation as the corresponding low-density-boundary assumption. I changed the sentence to retain that probabilistic qualification and added §1.2.2 to the visible source locator. [Source](https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf).

The remark has no proof facts, derivations, or routine steps in its batch contract, and its `verification` has no `judge` record; there was no proof-contract entry or stale judge stamp to change. No downstream item consumes the remark.

Checks after the edit: `reflow` completed with “unchanged”; `precheck` reported 0 checked, 0 failing; the required single `proof-layout` run reported 1 item, 0 steps, 0 defects.

Source passages used to check the mathematics and citation locators:

- Bindel, “Blocked LU and Cholesky,” Cholesky recursion and Schur-complement positivity exercise, [Cornell CS 4220, February 9, 2026](https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html). The assigned Cholesky proof supplies the positivity argument left as an exercise there.
- Driscoll and Braun, *Fundamentals of Numerical Computation*, §2.9.3, [“Exploiting matrix structure”](https://fncbook.com/structure/), for the SPD Cholesky factorization and its cubic cost.
- Zhu, Ghahramani, and Lafferty, §2, [“Semi-Supervised Learning Using Gaussian Fields and Harmonic Functions”](https://mlg.eng.cam.ac.uk/pub/pdf/ZhuGhaLaf03a.pdf), for the graph-harmonic averaging equation, block solution, and maximum-principle context.
- Chapelle, Schölkopf, and Zien, Chapter 1 §1.2.2 and Chapter 11 §§11.2–11.3, [*Semi-Supervised Learning*](https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf), for the cluster/low-density assumptions and graph label-propagation context.

## Defects not editable in this assignment

The following published dependencies contain hyperlinks inside complete statement, definition, or remark sections. The assigned reader cannot edit published content; each reference should be moved to the immediately following matching `references` section while preserving the mathematical prose.

- `def-cholesky-factorisation-with-positive-diagonal` — `## Definition`, final terminology sentences: two wikilinks occur inside the definition. Assigned consumer: `lem-real-cholesky-recurrence-computes-factorization`. Fatal `ill-formed` editorial defect.
- `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost` — `## Statement`, claim 1: a wikilink to the substitution definition is embedded in the claim. Assigned consumer: `thm-graph-harmonic-extension-uniqueness-and-maximum-principle`. Fatal `ill-formed` editorial defect.
- `def-forward-and-back-substitution-for-triangular-systems` — `## Definition`, final explanatory paragraph: two wikilinks occur inside the definition. Assigned consumer: `alg-graph-harmonic-label-propagation`. Fatal `ill-formed` editorial defect.
- `def-rank-and-nullity` — `## Definition`: wikilinks to the kernel/image, dimension, and basis suppliers occur inside the definition. Assigned consumer: `lem-real-cholesky-recurrence-computes-factorization`. Fatal `ill-formed` editorial defect.
- `def-dimension` — `## Definition` and `## Remarks`: wikilinks occur inside both complete prose sections. Assigned consumer: `lem-real-cholesky-recurrence-computes-factorization`. Fatal `ill-formed` editorial defect.
- `def-finite-cardinality` — `## Definition` and `## Remarks`: wikilinks occur inside both complete prose sections. Assigned consumer: `lem-real-cholesky-recurrence-computes-factorization`. Fatal `ill-formed` editorial defect.
- `thm-sum-rule` — `## Statement`, clauses 1 and 2: wikilinks to prerequisite definitions are embedded in the claims. Assigned consumer: `lem-real-cholesky-recurrence-computes-factorization`. Fatal `ill-formed` editorial defect.
- `lem-kernel-basis-extension-gives-image-basis` — `## Remarks`, second bullet: a wikilink occurs inside the prose remark. Assigned consumer: `lem-real-cholesky-recurrence-computes-factorization`. Fatal `ill-formed` editorial defect.
- `thm-rank-nullity` — `## Remarks`, second bullet: a wikilink occurs inside the prose remark. Assigned consumer: `lem-real-cholesky-recurrence-computes-factorization`. Fatal `ill-formed` editorial defect.

These are also recorded as uneditable `published-dependency` findings in the JSON output. No mathematical gap was found in the supplier arguments opened for the assigned claims.

## Page verdicts

- A page `semi-supervised-graph-propagation-and-pseudolabeling-limits`: pass. Its frontmatter-only body is empty, `page_layout: compact-v1` is present, and its seven assigned items match the manifest inventory.
- B page `semi-supervised-graph-propagation-and-pseudolabeling-limits-examples`: pass. Its frontmatter-only body is empty, `page_layout: compact-v1` is present, and its four examples match the manifest inventory.

All four TikZ diagrams in the assigned examples were checked against their statements and computations; their labels, edges, distance ordering, and isolated-component depiction are correct. No additional diagram was required by the assigned exposition.

## Blockers

There is no batch-101 mathematical or editorial blocker. The live autopilot status still reports unrelated `3a-collect` failure for batch 91 and `3a-split` failure for batch 80; this reader did not intervene outside its assigned batch.
