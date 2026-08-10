---
id: lem-local-c-one-volume-distortion
kind: lemma
title: "On a small cube, a $C^1$ diffeomorphism distorts Jordan content by factors arbitrarily close to its linearized absolute determinant"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-jacobian-determinant-of-a-c-one-map, thm-linear-images-scale-jordan-content-by-absolute-determinant, lem-near-identity-c-one-maps-sandwich-cubes, def-jordan-inner-and-outer-content]
justified_by: []
aliases: []
landmark: false
proof_strategy: reduction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Leibman, Multidimensional Real Analysis, Lemma 6.1.3 and Theorem 6.1.4"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $g:U\to\mathbb R^n$ be $C^1$ on an open set, let $a\in U$, and suppose $A=Dg(a)$ is invertible. For every $0<\varepsilon<1$ there is a closed cube $Q$ centred at $a$, of positive radius and contained in $U$, such that every Jordan set $E\subseteq Q$ has Jordan image and
$$|\det Dg(a)|(1-\varepsilon)^n\operatorname{cont}(E)\le \operatorname{cont}(g(E))\le |\det Dg(a)|(1+\varepsilon)^n\operatorname{cont}(E).$$
The cube may be chosen inside any prescribed neighborhood of $a$.

## Facts & Assumptions

**Given:** The $C^1$ map, the point $a$, invertible $A=Dg(a)$, and $0<\varepsilon<1$.

[L1] A linear endomorphism maps Jordan sets to Jordan sets and scales content by its absolute determinant ([[thm-linear-images-scale-jordan-content-by-absolute-determinant]]).

[L2] A map whose derivative is uniformly close enough to the identity sandwiches each sufficiently small cube between concentric contracted and expanded cubes ([[lem-near-identity-c-one-maps-sandwich-cubes]]).

[L3] Jordan inner and outer content approximate Jordan sets by finite rectangular figures ([[def-jordan-inner-and-outer-content]]).

## Proof

**Proof technique:** reduction.

1.1 Normalize at $a$ by the affine map below; continuity then gives a cube on which its derivative is uniformly close to the identity. [given]
$$H(x)=a+A^{-1}(g(x)-g(a)).$$
Then $H(a)=a$ and $DH(a)=I$. Continuity of $Dg$ lets us choose a positive-radius cube $Q$ inside the prescribed neighborhood so that the derivative error for $H$ satisfies the bound in [L2] with $q=\varepsilon$ throughout a slightly larger cube.

2.1 Subdivide $Q$ into sufficiently fine cubes. Applied after translation at the centre of each subcube, [L2] bounds the content of its $H$-image between $(1-\varepsilon)^n$ and $(1+\varepsilon)^n$ times its content. Injectivity supplied locally by [L2] makes images of interior-disjoint subcubes interior-disjoint. Finite additivity gives the same estimates for rectangular figures. [L2, step 1.1]

3.1 Sandwich an arbitrary Jordan $E\subseteq Q$ between inner and outer rectangular figures with vanishing content gap, as in [L3]. The estimates in step 2.1 squeeze $H(E)$ between finite Jordan figures and prove both its Jordan measurability and the two content bounds. Finally $g(E)=g(a)+A(H(E)-a)$, so [L1] multiplies every content by $|\det A|=|\det Dg(a)|$. [L1, L3, step 2.1] ∎
