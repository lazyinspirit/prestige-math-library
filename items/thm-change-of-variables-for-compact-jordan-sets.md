---
id: thm-change-of-variables-for-compact-jordan-sets
kind: theorem
title: "Change of variables for an injective $C^1$ map on a compact Jordan set"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-jacobian-determinant-of-a-c-one-map, def-c-one-map-and-local-inverse, cor-determinant-is-a-polynomial-in-the-matrix-entries, thm-componentwise-limits-and-continuity, thm-continuous-functions-on-compact-jordan-sets-are-integrable, lem-finite-jordan-cover-sum-bounds, lem-local-c-one-volume-distortion, thm-injective-c-one-images-of-compact-jordan-sets-are-jordan, lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set, thm-euclidean-inverse-function-theorem, thm-chain-rule-for-total-derivatives, thm-determinant-multiplicative, thm-multidimensional-integral-properties, lem-jordan-set-integral-well-defined]
justified_by: []
aliases: []
landmark: true
proof_strategy: local-to-global
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Theorem 6.1.4"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
    - title: "J. Lebl, Basic Analysis II, Theorem 10.6.6"
      url: "https://www.jirka.org/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be open, let $g:U\to\mathbb R^n$ be injective and $C^1$, and suppose $Dg(x)$ is invertible for every $x\in U$. Let $K\subseteq U$ be compact and Jordan measurable. For a bounded function $f:g(K)\to\mathbb R$, the following are equivalent:

1. $f$ is Riemann integrable on $g(K)$;
2. $x\mapsto f(g(x))|\det Dg(x)|$ is Riemann integrable on $K$.

When either condition holds,
$$\int_{g(K)}f(y)\,dy=\int_K f(g(x))|\det Dg(x)|\,dx.$$

## Facts & Assumptions

**Given:** The map $g$, compact Jordan set $K$, and bounded $f$ in the statement.

[L1] The determinant is a polynomial in the matrix entries ([[cor-determinant-is-a-polynomial-in-the-matrix-entries]]), and componentwise continuity gives continuity of maps assembled from finitely many continuous components ([[thm-componentwise-limits-and-continuity]]).

[L2] Local $C^1$ volume distortion is bounded by factors arbitrarily close to the absolute determinant of the derivative ([[lem-local-c-one-volume-distortion]]), with finite Jordan cover bounds controlling upper and lower sums ([[lem-finite-jordan-cover-sum-bounds]]).

[L3] The image $g(K)$ is compact Jordan ([[thm-injective-c-one-images-of-compact-jordan-sets-are-jordan]]), while the inverse function theorem supplies local $C^1$ inverses ([[thm-euclidean-inverse-function-theorem]]).

[L4] The chain rule multiplies derivatives ([[thm-chain-rule-for-total-derivatives]]) and determinants multiply ([[thm-determinant-multiplicative]]).

## Proof

**Proof technique:** local-to-global.

1.1 The entries of $Dg$ are continuous; [L1] therefore makes $\det Dg$ and $|\det Dg|$ continuous on $K$, hence bounded and Riemann integrable. By [L3], $g(K)$ is also a compact Jordan set. [L1, L3]

2.1 First take $f\ge0$. Cover a compact Jordan neighborhood of $K$ inside $U$ by finitely many cubes on which [L2] gives volume factors $|\det Dg(a)|(1\pm\varepsilon)^n$ and on which $|\det Dg|$ oscillates by less than $\varepsilon$. Pass to a common interior-disjoint rectangular refinement. Comparing the infima and suprema of $f$ on each image piece with those of $f\circ g$ on its source piece, the finite cover bounds squeeze the two lower and upper integrals within an error tending to zero with the mesh and $\varepsilon$. Thus one side is integrable exactly when the other is, and their integrals agree. [L2, step 1.1]

3.1 Global injectivity and [L3] patch the local inverses into a $C^1$ inverse on the open set $g(U)$; applying the one-sided squeeze in both directions will therefore give equality. [L3, L4, step 2.1]
$$D(g^{-1})(g(x))Dg(x)=I,\qquad |\det D(g^{-1})(g(x))|\,|\det Dg(x)|=1.$$
Applying the one-sided squeeze of step 2.1 to $g$ and to $g^{-1}$ removes both possible inequality directions and also proves the asserted integrability equivalence.

4.1 For signed $f$, apply the nonnegative result to $f^+=\max(f,0)$ and $f^-=\max(-f,0)$. The usual positive/negative-part integrability criterion and linearity give the formula for $f=f^+-f^-$. Independence from all bounding rectangles follows from Jordan-set integral well-definedness. [L2, step 3.1] ∎
