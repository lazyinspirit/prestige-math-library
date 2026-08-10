---
id: thm-change-of-variables-for-compact-jordan-sets
kind: theorem
title: "Change of variables for an injective $C^1$ map on a compact Jordan set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
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

[L5] The Riemann integral is linear, monotone, and stable under absolute value ([[thm-multidimensional-integral-properties]]), with Jordan-set values independent of the bounding rectangle ([[lem-jordan-set-integral-well-defined]]).

## Proof

**Proof technique:** local-to-global.

1.1 The entries of $Dg$ are continuous; [L1] therefore makes $\det Dg$ and $|\det Dg|$ continuous on $K$, hence bounded and Riemann integrable. By [L3], $g(K)$ is also a compact Jordan set. [L1, L3]

1.2 Global injectivity and [L3] patch the local inverses into a $C^1$ inverse $G:g(U)\to U$. By [L4], $DG(g(x))Dg(x)=I$ and $|\det DG(g(x))|\,|\det Dg(x)|=1$. [L3, L4]

2.1 Let $E\subseteq K$ be compact Jordan. Cover it by finitely many cubes on which [L2] gives volume factors $|\det Dg(a)|(1\pm\varepsilon)^n$ and on which $|\det Dg|$ has arbitrarily small oscillation. A common interior-disjoint grid refinement and the finite cover bounds compare $\operatorname{cont}(g(E))$ with the lower and upper sums of $|\det Dg|$ over $E$. Letting the mesh and $\varepsilon$ tend to zero gives $\operatorname{cont}(g(E))=\int_E|\det Dg|$. [L2, step 1.1, step 1.2]

3.1 First take $f\ge0$ integrable on $g(K)$. A fine rectangular grid of a bounding rectangle cuts $g(K)$, up to content-zero shared faces, into compact Jordan pieces $F_j$ on which the lower and upper Darboux step functions have arbitrarily small integral gap. Their preimages $E_j=G(F_j)$ are compact Jordan by [L3]. Step 2.1 turns every coefficient times $\operatorname{cont}(F_j)$ into the integral of that coefficient times $|\det Dg|$ over $E_j$. Hence the pulled-back lower and upper step functions squeeze $(f\circ g)|\det Dg|$ with the same arbitrarily small gap, proving its integrability and the formula. Applying this implication to $G$ and using step 1.2 proves the converse. [L3, L5, step 1.2, step 2.1]

4.1 For signed $f$, apply step 3.1 to $f^+=\max(f,0)$ and $f^-=\max(-f,0)$. Stability under absolute value and linearity in [L5] give both integrability implications and the formula for $f=f^+-f^-$. Bounding-rectangle independence also follows from [L5]. [L5, step 3.1] ∎
