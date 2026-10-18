# Step 3a reader report — batch 44

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader (`reader-44`)  
Scope: batch `44`

## Run and scope check

The autopilot status command reported the run as `running`, with Step 3a review
active and no worker currently running. The assigned carriers are draft items
whose `pipeline_run` is this run. I read the canonical `CLAUDE.md`, `README.md`,
`SCHEMA.md`, the Step 3 section of `WORKFLOW.md`, `briefs/reader.md`, the batch
44 page manifest, both assigned pages, and all nine assigned items. The batch
proof contracts, cross-batch dependency record, source evidence, source
coverage, and authoring notes were consulted as evidence, not accepted as
verdicts.

## Opened inventory

### Assigned pages and items

| Page | Kind/status | Assigned items opened |
|---|---|---|
| `bv-brst-and-homological-physics-interfaces` | A / draft | `def-bv-algebra-and-degree-plus-one-bracket`; `def-classical-lie-action-brst-complex`; `thm-bv-derived-bracket-is-odd-poisson`; `def-classical-and-formal-quantum-master-equations`; `thm-classical-lie-action-brst-differential-squares-zero`; `thm-classical-master-equation-defines-square-zero-differential` |
| `bv-brst-and-homological-physics-interfaces-examples` | B / draft | `cex-nonrepresentation-action-breaks-brst-nilpotence`; `ex-dilation-action-classical-brst-cohomology`; `ex-one-variable-bv-algebra-solves-classical-master-equation` |

I followed the in-run supplier order shown in the manifest: the BV definition
before its bracket and master-equation results; the BRST definition before its
nilpotence theorem; and the resulting theorems before the dependent examples.

### Dependency and source context opened

For the BRST definition and theorem, I opened the published algebraic suppliers
needed to compare their domains and formulas: `def-field`, `def-vector-space`,
`def-linear-map`, `def-lie-algebra-over-a-field`,
`def-homomorphism-of-possibly-infinite-dimensional-lie-algebras`,
`def-vector-space-of-linear-maps`, `def-representation-of-a-lie-algebra`,
`def-alternating-k-linear-map`, `def-kth-exterior-power-by-quotient`,
`def-symmetric-and-exterior-powers-over-an-arbitrary-field`,
`def-chevalley-eilenberg-cochains`, `def-chevalley-eilenberg-differential`,
and `thm-the-chevalley-eilenberg-differential-squares-to-zero`.

To check the A-page's reading-route statements, I opened
`a-infinity-l-infinity-and-deformation-complexes` and
`dg-and-homological-algebra-foundations`, the filtered shifted L-infinity
definitions and Maurer–Cartan convergence theorem, the gauge-path definition
and its cited flow/gauge results, and `def-differential-graded-algebra`.
These route materials are not item-level logical dependencies of batch 44.

I checked the cited primary-source passages relevant to the local conventions:

- Getzler, *Batalin–Vilkovisky Algebras and Two-Dimensional Topological Field
  Theories*, §1, Proposition 1.2, PDF pp. 5–6:
  <https://arxiv.org/pdf/hep-th/9212043>.
- Seidel, *Lectures on Categorical Dynamics and Symplectic Topology*, Lecture
  12, §12.7, printed pp. 118–119 (PDF pp. 119–120), for the degree −1
  comparison convention:
  <https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf>.
- Kosmann-Schwarzbach and Monterde, *Divergence Operators and Odd Poisson
  Brackets*, §1.1, equation (1), and §1.3, Proposition 1.6:
  <https://arxiv.org/pdf/math/0002209>.
- Weibel, *An Introduction to Homological Algebra*, §7.7, Definition 7.7.1,
  Exercise 7.7.1, and Corollary 7.7.3, printed pp. 239–241 (PDF pp. 23–25):
  <https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf>.
  The exercise asks the reader to prove square-zero; the current published
  Chevalley–Eilenberg theorem, not the exercise, supplies that proof here.

## Mathematical review

- `def-bv-algebra-and-degree-plus-one-bracket` consistently states the
  characteristic-zero, unital graded-commutative setting, degree, square-zero
  condition, triple graded-commutator order condition, and derived-bracket
  signs. The separate-differential and convention caveats are accurate.
- `thm-bv-derived-bracket-is-odd-poisson` derives the bracket degree, odd
  skew-symmetry, both derivation rules, and odd Jacobi from those hypotheses.
  I checked the commutator evaluations and the signs in steps 1.1–4.1; the
  cited Getzler result uses the equivalent seven-term convention, while this
  proof supplies its own degree-`+1` argument. No missing hypothesis or
  citation defect was found.
- `def-classical-and-formal-quantum-master-equations` correctly restricts the
  formal QME to a coefficientwise identity in `A[[hbar]]`, with finite
  coefficient sums. Substitution `w=iS_hbar/hbar` in the Laurent extension
  and multiplication by `-hbar^2` give exactly the displayed normalization.
- `thm-classical-master-equation-defines-square-zero-differential` applies the
  odd Jacobi identity to obtain
  `2 d_S^2(x) = {{S,S},x}`; the characteristic-zero hypothesis justifies
  division by two. Its degree and conclusion are correct.
- `def-classical-lie-action-brst-complex` uses a Lie-algebra homomorphism into
  derivations, so the coefficient algebra is a module and the exact
  zero-based two-sum formula matches the opened Chevalley–Eilenberg supplier.
  `thm-classical-lie-action-brst-differential-squares-zero` applies the
  published square-zero theorem to those same cochains and signs, then proves
  image containment in the kernel, including the `C^{-1}=0` convention.
- `cex-nonrepresentation-action-breaks-brst-nilpotence` gives derivations on
  `C[x,y]` with `[rho(u),rho(v)]=partial_y` although `[u,v]=0`, and computes
  `d^2 y(u,v)=1`; this is a valid counterexample to the stated universal
  assertion.
- `ex-dilation-action-classical-brst-cohomology` correctly computes
  `d(f)=xf'`, kernel `C`, image `xC[x]`, and vanishing cochains above degree
  one. The resulting `H^0` and `H^1` are each `C`.
- `ex-one-variable-bv-algebra-solves-classical-master-equation` correctly
  checks the graded derivation and square-zero properties, the order-two
  condition, the bracket `{f,theta g}=f'g`, the CME for `S=x^3/3`, and
  `d_S(f+theta g)=x^2g`.

The A-page's formal-QME caveat is mathematically consistent: the cited filtered
Maurer–Cartan convergence theorem requires a characteristic-zero shifted
L-infinity structure, degreewise separated completeness, additive filtration
bounds, and an input in `F^1W^0`. With `w=iS_hbar/hbar` and the h-adic
filtration, `S_hbar` must therefore start in `hbar^2 A[[hbar]]` for this
convergence theorem to apply. The page also correctly says that algebraic
normalization alone gives no convergence or gauge-classification result.

## Edits, remaining defects, and page verdicts

- **Edits:** none. No assigned item or A-page prose required a confirmed
  repair. No proof contract or judge record was changed. Since no item changed,
  the post-edit proof-layout, reflow, and precheck commands were not applicable.
- **Uneditable defects:** none found in assigned content or in the opened
  dependencies needed for the BRST claims.
- **Page `bv-brst-and-homological-physics-interfaces`:** no confirmed defect.
  Its summaries, sign conventions, scope limits, and reading-route caveats
  match the authored items and the opened route statements.
- **Page `bv-brst-and-homological-physics-interfaces-examples`:** no confirmed
  defect. Its item inventory, computations, and stated boundaries match the
  three assigned examples/counterexample and their A-page suppliers.
- **Blocker:** none.

## Coverage limitation

I reviewed the dependency statements and proofs needed to check batch 44's
claims, not every foundational ancestor of the published field, vector-space,
tensor-product, and quotient constructions. The A-infinity/L-infinity route
check was limited to the filtered Maurer–Cartan hypotheses used in the
A-page's caveat and the route's cited gauge items; it was not an independent
audit of that route's full proof closure.
