---
dependency_level: 4
id: lem-finite-separable-local-field-norm-image-is-open
kind: lemma
title: Finite separable local norms contain an open neighborhood of one
deps:
- def-field-norm-and-trace
- cor-trace-is-surjective-for-finite-separable-extensions
- lem-hensel-factor-lifting-over-a-complete-valued-field
- def-local-field-valuation-ring-uniformizer-and-residue-field
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version4.03, ChapterIII §§1–3
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Norm continuity/openness is reconstructed directly from determinant/trace
      and Hensel; no unproved local reciprocity or the source norm-index route is
      imported.
verification: {}
---

## Statement

Let $K$ be complete discretely valued with uniformizer $\pi$, and let
$L/K$ be a finite separable extension. Then $N_{L/K}(L^\times)$ contains
$1+\pi^m\mathcal O_K$ for some $m\ge1$, and is an open subgroup of
$K^\times$. The argument works in every characteristic and does not use
local reciprocity or a norm-index theorem.

## Facts & Assumptions

**Given:** $K,L,\pi$ as in the Statement and one finite $K$-basis of $L$.

[F1] Norm and trace are the determinant and trace of multiplication.
[[def-field-norm-and-trace]]

[F2] Trace is onto for a finite separable extension.
[[cor-trace-is-surjective-for-finite-separable-extensions]]

[F3] Over a complete nonarchimedean field, a polynomial with a simple
residue root has a lifted linear factor, even if the polynomial is not
monic, by the factor-lifting assertion.
[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F4] The valuation ring has maximal ideal $(\pi)$ and powers of it give
open neighborhoods of zero. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

## Proof

**Proof technique:** restrict the determinant norm to one trace-nonzero
line, scale its derivative to a simple-residue-root problem, and lift.

**Given:** The data above.

1.1 By [F2] choose $x\in L$ of nonzero trace. Scale it by a sufficiently
high power of $\pi$ so the finitely many entries of its multiplication
matrix $M_x$ in the given basis lie in $\mathcal O_K$. Its trace
$b\in\mathcal O_K$ is still nonzero. Expanding the finite determinant
in [F1] gives
$$ f(T)=N_{L/K}(1+Tx)=\det(1+TM_x)
=1+bT+\sum_{i=2}^{[L:K]}c_iT^i,\qquad c_i\in\mathcal O_K.$$
The coefficient of $T$ is the matrix trace by the determinant expansion;
separability ensures it was not zero before scaling. [F1, F2, F4, given, construct, algebra]

2.1 For any $u\in1+b^2\pi\mathcal O_K$, set
$$g(S)=\frac{f(b\pi S)-u}{b^2\pi}
=S-\frac{u-1}{b^2\pi}
+\sum_{i\ge2}c_i b^{i-2}\pi^{i-1}S^i.$$
It has coefficients in $\mathcal O_K$, and its reduction is the linear
polynomial $S-\overline{(u-1)/(b^2\pi)}$. This root is simple, so
[F3] lifts it to $s\in\mathcal O_K$. Then $t=b\pi s$ satisfies
$f(t)=u\ne0$, and consequently $1+tx\ne0$ in $L$ with norm $u$.
Thus $1+b^2\pi\mathcal O_K$ is contained in the norm image.
It equals $1+\pi^m\mathcal O_K$ with $m=2v_K(b)+1\ge1$.
Norm is multiplicative because multiplication operators compose and
determinants multiply; hence its nonzero image is a subgroup. A subgroup
containing an open neighborhood of $1$ is open by translation, proving
the result. Degree one is also covered (the sum of higher coefficients is
empty). Only finite witnesses and the explicit Hensel construction were
used; no reciprocity or characteristic-zero logarithm occurs.
[F1, F3, F4, step 1.1, construct, algebra] ∎
