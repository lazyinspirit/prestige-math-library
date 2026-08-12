## Batch 3 of run `frontier-12` — linear algebra

Two A/B pairs. You own all four pages, and you author them at step 5.

### Pair A — eigenvalues and the characteristic polynomial

| | |
|---|---|
| A page | order **86** · `eigenvalues-eigenvectors-and-the-characteristic-polynomial` · "Eigenvalues, Eigenvectors and the Characteristic Polynomial" · `linear-algebra` |
| B page | order **87** · `eigenvalues-eigenvectors-and-the-characteristic-polynomial-examples` |
| requires | `the-determinant-of-a-linear-operator` (84), `polynomial-rings-and-roots` (52) |
| prose scaffold | `research/plan-algebra-track-expansion.md`, `research/plan-algebra-track.md` |

Eigenvalues and eigenvectors of an operator and of a matrix, eigenspaces, the
characteristic polynomial and its independence of basis, similarity invariance,
algebraic and geometric multiplicity and the inequality between them, the
spectrum over a general field versus an algebraically closed one, trace and
determinant as coefficients, Cayley–Hamilton.

Cayley–Hamilton is worth real care: the "substitute the matrix into its own
characteristic polynomial" pseudo-proof is a classic false argument, and the
adjugate route needs `the-determinant-of-a-linear-operator` cited exactly. If you
cannot close it honestly from what is published, say so in your notes rather than
writing a proof that gestures.

Diagonalisation and the minimal polynomial live on order 88, a **later,
unscaffolded** page. Do not build them here; note the boundary.

### Pair B — dual spaces, bilinear forms, inertia

| | |
|---|---|
| A page | order **92** · `dual-spaces-bilinear-forms-and-inertia` · "Dual Spaces, Bilinear and Quadratic Forms, and Sylvester's Law of Inertia" |
| B page | order **93** · `dual-spaces-bilinear-forms-and-inertia-examples` |
| requires | `the-determinant-of-a-linear-operator` (84) |
| prose scaffold | `research/plan-algebra-track-expansion.md`, `research/plan-algebra-track.md` |

Dual space, dual basis and its failure in infinite dimension, the double dual and
the canonical map, annihilators, transpose of a linear map, bilinear and
sesquilinear forms, symmetric and alternating forms, the matrix of a form and
congruence, quadratic forms and polarisation (mind characteristic 2 — state the
hypothesis), diagonalisation of symmetric forms, rank and signature, Sylvester's
law of inertia.

Be careful and explicit about the field: polarisation and orthogonal
diagonalisation need `char ≠ 2`, and inertia is a statement about ordered fields
(ℝ). A missing hypothesis here is a fatal defect at step 6, not a nitpick.

Inner product spaces are order 94, a later unscaffolded page — note the boundary
rather than absorbing it.

### Between your two pairs

86 and 92 are not in each other's `requires` closure, so **neither may cite the
other's items** (`undeclared-prereq`). They share `the-determinant-of-a-linear-operator`
as a common published dependency; cite it directly from each.
