---
id: lem-product-boundary-formula-for-oriented-manifolds
kind: lemma
title: Product boundary formula for oriented manifolds
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary
  - def-product-orientation
  - def-induced-boundary-orientation
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-orientation-preserving-parametrization
  - thm-finite-products-of-compact-spaces
  - def-compact-space
  - def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, 2016)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf
      locator: "Section 8.2, boundary conventions for products and the identification $\\tau W|_{\\partial W}\\cong\\tau\\partial W\\oplus\\varepsilon^1$, printed p.246"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "(2.19)-(2.21) orientation of a Cartesian product, printed pp.18-19"
---

## Statement

Let $W^m$ and $V^n$ be compact oriented smooth manifolds with at most one of
$\partial W,\partial V$ nonempty (the corner-free case), and give $W\times V$
its product smooth structure
([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]])
and product orientation ([[def-product-orientation]]). Then, up to a canonical
orientation-preserving diffeomorphism
([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]],
[[def-orientation-preserving-parametrization]]), the boundary
$\partial(W\times V)$ with the outward-normal-first orientation
([[def-induced-boundary-orientation]]) equals
$$(\partial W\times V)\;\sqcup\;(-1)^{m}\,(W\times\partial V),$$
each summand carrying the product orientation of the induced boundary
orientation of the factor and the supplied orientation of the other factor. In
the unoriented theory the same identity of smooth manifolds with boundary holds
without signs. If both factors are closed then $W\times V$ is closed. The case
where both boundaries are nonempty produces corners at $\partial W\times\partial
V$ and is excluded.

## Facts & Assumptions

**Given:** Compact oriented smooth manifolds $W^m$ and $V^n$ with at most one of $\partial W,\partial V$ nonempty, and the product $W\times V$ with its product smooth structure and product orientation.

[F1] If $\partial N=\varnothing$ then $\partial(M\times N)=\partial M\times N$ carries the product boundary orientation; if $\partial M=\varnothing$ then $M\times\partial N$ carries $(-1)^m$ times the product orientation ([[prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary]]).

[F2] The boundaryless product atlas is [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]. When exactly one factor has boundary, products of its half-space charts with Euclidean charts of the other factor, followed by a coordinate permutation placing the boundary coordinate last, give half-space charts of the product. Transitions and their inverses extend smoothly as products of the extensions in the factors ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]). Product bases give second countability and product separation gives Hausdorffness, exactly as in the boundaryless proof. The product orientation is the ordered tensor product of determinant rays ([[def-product-orientation]]), and boundary orientation is outward-normal-first ([[def-induced-boundary-orientation]]).

[F3] A finite product of compact spaces is compact, with no choice beyond finite choice ([[thm-finite-products-of-compact-spaces]], [[def-compact-space]]).

## Proof

1.1 (Case $\partial V=\varnothing$.) If $\partial V=\varnothing$, the first clause of [F1] with $(M,N)=(W,V)$ states that $\partial(W\times V)$ equals $\partial W\times V$ and carries the product boundary orientation: the induced boundary orientation on $\partial W$ first, then the orientation of $V$. In this case $W\times\partial V=\varnothing$, so the displayed formula has a single summand, with sign $+1$ as the first summand, and the identification is the canonical projection diffeomorphism. [F1, F2]

1.2 (Case $\partial W=\varnothing$.) If $\partial W=\varnothing$, the second clause of [F1] with $(M,N)=(W,V)$ states that $\partial(W\times V)$ equals $W\times\partial V$ and carries $(-1)^m$ times the product orientation, namely $(-1)^m$ times (orientation of $W$)$\otimes$(induced boundary orientation of $\partial V$). In this case $\partial W\times V=\varnothing$, so this is the second summand of the display. [F1, F2]

1.3 (Both factors closed.) If $\partial W=\varnothing$ and $\partial V=\varnothing$, then $W\times V$ is a product of compact spaces, hence compact by [F3], and its boundary is empty; a compact smooth manifold with empty boundary is closed, so $W\times V$ is closed and both summands of the display are empty. [F1, F3]

1.4 (Unoriented theory.) The identifications of steps 1.1 and 1.2 are diffeomorphisms of the underlying smooth manifolds and do not depend on the orientations: the projection $\partial(W\times V)\to\partial W\times V$ (when $\partial V=\varnothing$) and $\partial(W\times V)\to W\times\partial V$ (when $\partial W=\varnothing$) are canonical diffeomorphisms, and reading them in the unoriented theory gives the same disjoint-union identity without the sign $(-1)^m$. [F2]

2.1 (Assembly and the excluded corner case.) In the two corner-free cases steps 1.1 and 1.2 identify the boundary with the two summands of the display with the stated orientations, and step 1.3 covers the closed case; step 1.4 covers the unoriented theory. If both boundaries are nonempty, then near a point of $\partial W\times\partial V$ the space $W\times V$ is locally a product of two half-spaces, a quadrant with a corner, and is not a smooth manifold with boundary in the sense fixed on this page; the formula is therefore asserted only in the corner-free case, exactly as stated. [F1, F2, step 1.1, step 1.2, step 1.3, step 1.4] ∎
