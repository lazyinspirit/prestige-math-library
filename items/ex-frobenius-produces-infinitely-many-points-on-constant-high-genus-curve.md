---
id: ex-frobenius-produces-infinitely-many-points-on-constant-high-genus-curve
kind: example
title: Frobenius gives infinitely many points on a constant genus-two curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-constant-and-isotrivial-variety-over-function-field
  - def-perfect-field
  - def-function-field-with-exact-constant-field
  - lem-squarefree-quintic-double-cover-is-genus-two
  - lem-proper-cohomology-field-extension
  - thm-curves-function-fields-equivalence
  - thm-perfect-field-characterizations
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, Examples 9.5.3–9.5.5, printed p. 287"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
    - title: "The Stacks Project, Algebraic Curves, Lemma 53.12.2 (tag 0C1D)"
      url: https://stacks.math.columbia.edu/tag/0C1D
verification:
  precheck: pass
---

## Example

Let $k=\mathbb F_{17}$, $a_i=i-1$ for $1\le i\le5$, and
$f(x)=\prod_{i=1}^5(x-a_i)$. Let $C_0/k$ be obtained by gluing
$\operatorname{Spec}k[x,y]/(y^2-f(x))$ and
$\operatorname{Spec}k[u,w]/(w^2-u\prod_i(1-a_i u))$ via
$u=x^{-1}$ and $w=u^3y$ on the loci $x,u\ne0$. Put $K=k(C_0)$ and
$X=C_0\times_{\operatorname{Spec}k}\operatorname{Spec}K$. Then $(K,k)$ is
a function field with exact constant field $k$, $X$ is a constant smooth
proper geometrically integral curve of genus two over $K$, and $X(K)$ is
infinite, where $X(K)=\operatorname{Hom}_K(\operatorname{Spec}K,X)$.
More precisely, for every
$n\ge0$, let $\varphi_n:C_0\to C_0$ be the unique dominant $k$-morphism whose
pullback on $K=k(C_0)$ sends $h$ to $h^{17^n}$. The K-point
$P_n:\operatorname{Spec}K\to X$ is induced by the pair consisting of
$\varphi_n\circ\eta:\operatorname{Spec}K\to C_0$, where $\eta$ is the
generic point, and the identity map on $\operatorname{Spec}K$. These points are pairwise
distinct.

## Example references

[[lem-squarefree-quintic-double-cover-is-genus-two]]

[[thm-curves-function-fields-equivalence]]

[Poonen, Examples 9.5.3–9.5.5, printed p. 287](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[The Stacks Project, Lemma 53.12.2 (tag 0C1D)](https://stacks.math.columbia.edu/tag/0C1D)

## Facts & Assumptions

**Given:** AC, the finite field $k=\mathbb F_{17}$, the curve $C_0$ and its
function field $K$ as in the Example, and the curve $X=C_{0,K}$.

[A1] AC: every family of nonempty sets has a choice function.
[[def-axiom-of-choice]]

[F1] For $c\ne0$ and a split squarefree quintic in characteristic different
from two, the displayed two-chart double cover is smooth, proper and
geometrically integral of genus two, and its coordinate $x$ has a pole above
infinity. [[lem-squarefree-quintic-double-cover-is-genus-two]]

[F2] If $C$ is a smooth proper geometrically integral curve over a perfect
field $k$, then $k(C)/k$ is finitely generated of transcendence degree one
and $k$ is algebraically closed in $k(C)$. The finite field
$\mathbb F_{17}$ is perfect. [[def-perfect-field]]
[[thm-perfect-field-characterizations]]
[[thm-curves-function-fields-equivalence]]

[F3] For smooth proper geometrically integral curves, an injective
$k$-homomorphism of function fields in the reverse direction is induced by a
unique dominant $k$-morphism. [[thm-curves-function-fields-equivalence]]

[F4] For a proper curve and its coherent structure sheaf, cohomology in
degree one commutes with field extension; therefore the genus is unchanged
under constant base change. [[lem-proper-cohomology-field-extension]]

## Axiom use

AC is assumed through the double-cover and function-field/morphism suppliers
[F1] and [F3]. The Frobenius field maps and pole-order distinction use no
additional choice.

## Proof

**Proof technique:** direct; apply relative Frobenius to the generic point and
distinguish the induced function-field maps by pole orders.

1.1 The field $k$ is perfect, and [F1] gives that $C_0$ is smooth, proper, geometrically integral, and of genus two. By [F2], $K=k(C_0)$ is finitely generated of transcendence degree one and has exact constant field $k$. The product definition makes $X$ constant over $k$. It remains smooth, proper and geometrically integral after field extension, and [F4] shows that its genus remains two. [A1, F1, F2, F4, given]

1.2 For each $n\ge0$, the map $K\to K$, $h\mapsto h^{17^n}$, is an injective $k$-homomorphism because $k=\mathbb F_{17}$. By [F3] it is the pullback of a unique dominant $k$-morphism $\varphi_n:C_0\to C_0$. Composing $\varphi_n$ with the generic point and pairing with the identity on $\operatorname{Spec}K$ defines the stated K-point $P_n$ of $X$. [A1, F3, given, construct]

2.1 The coordinate $x\in K$ has a pole at the point above infinity by [F1]; write its order there as $-m$ with $m>0$. If $P_n=P_j$, their induced maps on the function field agree, so $x^{17^n}=x^{17^j}$. The orders at that pole would then be $-m17^n$ and $-m17^j$, which are unequal for $n\ne j$. Therefore the points are pairwise distinct, and $X(K)$ is infinite. [F1, step 1.2, algebra] ∎

