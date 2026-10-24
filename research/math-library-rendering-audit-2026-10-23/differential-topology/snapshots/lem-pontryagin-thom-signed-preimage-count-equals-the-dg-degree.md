---
id: lem-pontryagin-thom-signed-preimage-count-equals-the-dg-degree
kind: lemma
title: The signed preimage count equals the degree
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
deps:
- def-framing-sign-of-a-zero-dimensional-regular-preimage
- def-framed-regular-preimage-of-a-map-to-a-sphere
- def-local-orientation-sign-of-a-regular-preimage
- thm-regular-value-formula-for-degree
- def-regular-and-critical-points-and-values
- def-degree-of-a-proper-smooth-map-by-compact-support-cohomology
- def-orientation-of-a-finite-dimensional-real-vector-space
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: The signed count of the framed preimage equals the degree of the associated map, printed pp.22-23
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: 'Section 7, concluding Hopf discussion, first paragraph: sum of signs equals the degree, printed p.50'
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a nonempty closed connected oriented smooth
$m$-manifold, $m\ge1$, let $f:M\to S^m$ be smooth, $y\in S^m$ a regular value
and $b$ a positive basis of $T_yS^m$. Then the framed regular preimage
$(f^{-1}(y),f_*b)$ has signed count
$\sum_{x\in f^{-1}(y)}\varepsilon(x)=\deg(f)$, the compact-support degree of
$f$; equivalently $\varepsilon(x)=\operatorname{sgn}(df_x)$ at every
$x\in f^{-1}(y)$. No new definition of degree is introduced.

## Facts & Assumptions

**Given:** A nonempty closed connected oriented smooth $m$-manifold $M$, a smooth map $f:M\to S^m$, a regular value $y$ and a positive basis $b$ of $T_yS^m$ ([[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]], [[def-regular-and-critical-points-and-values]]).

[F1] Writing $\beta$ for the coordinate isomorphism determined by $b$, the framed regular preimage $(f^{-1}(y),f_*b)$ is a closed framed $0$-dimensional submanifold of $M$ whose framing at $x$ is $f_*b=\beta\circ df_x:\nu(x)=T_xM\to T_yS^m\to\mathbb R^m$ ([[def-framed-regular-preimage-of-a-map-to-a-sphere]], [[def-framing-sign-of-a-zero-dimensional-regular-preimage]], [[def-countable-choice]]).

[F2] The framing sign of $x\in f^{-1}(y)$ equals the local orientation sign $\operatorname{sgn}(df_x)$, because its coordinate isomorphism $\beta$ carries the orientation of $T_yS^m$ to the standard orientation of $\mathbb R^m$ ([[def-framing-sign-of-a-zero-dimensional-regular-preimage]], [[def-local-orientation-sign-of-a-regular-preimage]], [[def-orientation-of-a-finite-dimensional-real-vector-space]]).

[F3] For a proper smooth map between nonempty connected oriented boundaryless manifolds and a regular value $y$, the fibre is finite and $\deg(f)=\sum_{x\in f^{-1}(y)}\operatorname{sgn}(df_x)$, and $f$ is proper here because $M$ is compact ([[thm-regular-value-formula-for-degree]], [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]]).

## Proof

**Proof technique:** direct.

1.1 For $x\in f^{-1}(y)$ the normal quotient $\nu(x)=T_xM/T_x\{x\}=T_xM$ is identified with $T_xM$, and the differential $df_x:T_xM\to T_yS^m$ is an isomorphism because $y$ is a regular value of an equidimensional map; the induced framing is the composite $\beta\circ df_x$, by [F1], where $\beta:T_yS^m\to\mathbb R^m$ sends the positive basis $b$ to the standard basis. [F1, given]

2.1 Since $b$ is a positive basis, [F2] gives $\varepsilon(x)=\operatorname{sgn}(df_x)$ for every $x$ of the fibre, and the fibre is finite; summing and applying the regular value formula of [F3] to the proper map $f$ gives $\sum_{x\in f^{-1}(y)}\varepsilon(x)=\sum_{x\in f^{-1}(y)}\operatorname{sgn}(df_x)=\deg(f)$. [F2, F3, step 1.1, algebra]

3.1 Hence the signed count of the framed regular preimage is exactly the compact-support degree of the original map, with no new definition of degree and no use of an orientation of $S^m$ beyond the fixed positive basis. [F3, step 2.1] ∎
