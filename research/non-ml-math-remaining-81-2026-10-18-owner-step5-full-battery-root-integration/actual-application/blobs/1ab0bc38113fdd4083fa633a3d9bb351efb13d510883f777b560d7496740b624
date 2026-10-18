---
id: ex-category-o-degenerate-tensor-functor-on-trivial-sl2-module
kind: example
title: "The one-strand degenerate action on the trivial module has scalar dot"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-category-o-klr-and-hecke-route-conventions
  - def-arakawa-suzuki-casimir-operators-on-tensor-functors
  - thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations
  - def-degenerate-affine-hecke-algebra
  - def-special-linear-lie-algebra-sl-two
  - def-simple-semisimple-and-reductive-lie-algebras
  - def-semisimple-lie-algebra-by-vanishing-radical
  - def-radical-of-a-finite-dimensional-lie-algebra
  - def-derived-series-and-solvable-lie-algebra
  - def-bgg-category-o
  - prop-verma-and-finite-dimensional-modules-lie-in-category-o
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Tomoyuki Arakawa and Takeshi Suzuki, Lie algebras and degenerate affine Hecke algebras of type A, J. Algebra 209 (1998), complete 16-page preprint"
      url: "https://arxiv.org/pdf/q-alg/9710037"
      locator: "§2.2, printed pp. 6–7, formulas (2.2.1)–(2.2.2): source normalization and tensor-functor action."

---

## Statement

Let $M=\mathbb C$ be the trivial $\mathfrak{gl}_2(\mathbb C)$-module, let
$V=\mathbb C^2$ be the natural module, and restrict $M$ to
$\mathfrak{sl}_2(\mathbb C)$. For tensor degree $d=0$ the associated
degenerate affine Hecke algebra is $H_0=\mathbb C$ and acts on $M$ by scalars.
For $d=1$, the Arakawa–Suzuki polynomial generator $y_1$ acts on
$M\otimes V$ as $\tfrac12\operatorname{id}_{M\otimes V}$. Thus the polynomial
action factors through
$$\mathbb C[y_1]/(y_1-\tfrac12)\cong\mathbb C.$$
This is a computation of the action on the indicated tensor object, not a
claim about higher tensor degree or other modules.

## Facts & Assumptions

**Given:** The trivial $\mathfrak{gl}_2(\mathbb C)$-module $M=\mathbb C$, its
restriction to $\mathfrak{sl}_2(\mathbb C)$, the natural module $V=\mathbb C^2$,
and tensor degrees $d=0,1$.

[F1] [[def-category-o-klr-and-hecke-route-conventions]]: the Category-O route
uses the degenerate affine Hecke action and keeps the source-normalized
generator $y_j=x_j-\frac1N z_M+\frac{N-1}{2}$ distinct from a nondegenerate
Hecke generator.

[F2] [[def-arakawa-suzuki-casimir-operators-on-tensor-functors]]: on
$M\otimes V^{\otimes d}$, the defined operators are
$x_j=\Omega_{0j}+\sum_{k<j}P_{kj}$ and $s_i=P_{i,i+1}$.

[F3] [[def-arakawa-suzuki-casimir-operators-on-tensor-functors]]: the
source-normalized operators are $y_j=x_j-\frac1N z_M+\frac{N-1}{2}$.

[F4] [[def-arakawa-suzuki-casimir-operators-on-tensor-functors]]: for trivial
$M=\mathbb C$, $\Omega_{0j}=0$ and $x_1=0$.

[F5] [[thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations]]:
these operators commute with $\mathfrak{gl}_N$ and give the stated right
degenerate affine Hecke action.

[F6] [[prop-verma-and-finite-dimensional-modules-lie-in-category-o]]: every
finite-dimensional $\mathfrak h$-semisimple module for a finite-dimensional
complex semisimple Lie algebra belongs to the BGG category $\mathcal O$.

[F7] [[def-bgg-category-o]]: $\mathcal O$ consists of finitely generated,
$\mathfrak h$-semisimple modules on which each $U(\mathfrak n^+)$-orbit is
finite-dimensional.

[F8] [[def-degenerate-affine-hecke-algebra]]: $H_0=\mathbb C$ and
$H_1=\mathbb C[x_1]$; there are no $s_i$ generators in degree one.

[F9] [[def-special-linear-lie-algebra-sl-two]]: $\mathfrak{sl}_2(\mathbb C)$
has basis $e,f,h$ with $[h,e]=2e$, $[h,f]=-2f$, and $[e,f]=h$.

[F10] [[def-simple-semisimple-and-reductive-lie-algebras]]: a finite-dimensional
Lie algebra is simple when it is nonabelian with no nonzero proper ideals.

[F11] [[def-semisimple-lie-algebra-by-vanishing-radical]]: a finite-dimensional
Lie algebra is semisimple when its solvable radical is zero; the radical is
the largest solvable ideal.

[F12] [[def-radical-of-a-finite-dimensional-lie-algebra]]: the solvable
radical is a solvable ideal containing every solvable ideal of the Lie algebra.

[F13] [[def-derived-series-and-solvable-lie-algebra]]: a Lie algebra is
solvable when its derived series eventually becomes zero.

## Proof

1.1 The adjoint action of $h$ has distinct eigenvalues $2,-2,0$ on the basis $e,f,h$ [F9]; for any nonzero ideal $I$, Lagrange projection polynomials in $\operatorname{ad}h$ preserve $I$ and isolate a nonzero basis component. If $e\in I$, then $h=[e,f]\in I$ and $-2f=[h,f]\in I$; if $f\in I$, then $h=[e,f]\in I$ and $2e=[h,e]\in I$; if $h\in I$, then $2e=[h,e]\in I$ and $-2f=[h,f]\in I$. Thus $I=\mathfrak{sl}_2$, which is nonabelian since $[e,f]=h\ne0$, so it is simple [F10]. Its derived algebra equals itself by [F9], so it is not solvable [F13]; the solvable radical is an ideal [F11,F12], hence simplicity forces it to be zero, and [F11] makes $\mathfrak{sl}_2$ semisimple. The restricted module $M$ is one-dimensional and finite-dimensional, and $\mathfrak h=\mathbb Ch$ acts by zero, so it is $\mathfrak h$-semisimple; [F6] puts it in $\mathcal O$ as defined by [F7]. [given, F6, F7, F9, F10, F11, F12, F13, algebra]

1.2 For $d=0$, $M\otimes V^{\otimes0}=M$ and $H_0=\mathbb C$, so the action is scalar [F8]. For $d=1$, [F2] and [F4] give $x_1=\Omega_{01}=0$ on the trivial factor, while $z_M=0$; the normalization [F3] at $N=2$ therefore gives $y_1=\frac12\operatorname{id}_{M\otimes V}$. The action exists by [F5]. [given, F2, F3, F4, F5, F8, algebra]

2.1 By [F8], $H_1=\mathbb C[x_1]$; the source-normalized route [F1] has $y_1=x_1+\frac12$ by [F3]. Since [F2] and [F4] give $x_1=z_M=0$, evaluation at $y_1=\frac12$ is the action, with kernel $(y_1-\frac12)$ by polynomial division. Thus the action factors through $\mathbb C[y_1]/(y_1-\frac12)\cong\mathbb C$. [F1, F2, F3, F4, F8, algebra] ∎
