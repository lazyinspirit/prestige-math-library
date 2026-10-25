---
id: ex-power-maps-on-the-circle-have-their-exponent-as-degree
kind: example
title: Circle power maps are classified by their exponent
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 9
deps:
- cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree
- cor-real-line-is-universal-cover-of-circle
- def-degree-of-a-proper-smooth-map-by-compact-support-cohomology
- def-euclidean-spheres-and-closed-balls
- def-smooth-manifold
- prop-degree-of-the-power-map-on-the-circle
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 3, Section 6, degree of circle maps and the resulting classification (also Exercise 8 of Chapter 2, Section 4), printed pp.83-84, 146
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 5, the circle power-map example, printed p.29; the Hopf theorem at the end of Section 7, printed pp.50-51
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Theorem 2.37(i) for $M=S^1$, printed p.23
---
## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For $k\in\mathbb Z$ let $p_k:S^1\to S^1$, $p_k(z)=z^k$ (equivalently
$p_k([t])=[kt]$), with the counterclockwise orientations. Then
$\deg(p_k)=k$, and by the Hopf classification for $M=S^1$ the maps $p_k$ and
$p_l$ are homotopic if and only if $k=l$. Hence the homotopy classes
$[S^1,S^1]$ are in bijection with $\mathbb Z$ and the class of a power map is
determined by its exponent, consistently with the covering-space computation
of circle self-maps.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the unit circle $S^1$ with its counterclockwise orientation and smooth structure, the real line as its universal cover, and the power maps $p_k$ ([[def-euclidean-spheres-and-closed-balls]], [[def-smooth-manifold]], [[cor-real-line-is-universal-cover-of-circle]]).

[F1] For every $m\in\mathbb Z$ the power map $P_m([t])=[mt]$ has $\deg(P_m)=m$; equivalently the continuous map $p_d(z)=z^d$ has degree $d$ ([[prop-degree-of-the-power-map-on-the-circle]]).

[F2] For $m\ge1$, degree induces a bijection from $[S^m,S^m]$ to $\mathbb Z$, so two maps are homotopic exactly when their degrees agree ([[cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree]], [[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]]).

[F3] For the quotient covering $p:\mathbb R\to\mathbb R/\mathbb Z$, the explicit map $\widetilde p_k(t)=kt$ satisfies $p\circ\widetilde p_k=p_k\circ p$ and $\widetilde p_k(t+1)-\widetilde p_k(t)=k$ ([[cor-real-line-is-universal-cover-of-circle]]). This is an explicit lift of the composite $p_k\circ p$, not a lift $S^1\to\mathbb R$ of $p_k$ itself.

## Verification

**Proof technique:** direct.

1.1 By [F1] the degree of $p_k$ is the integer $k$; the explicit lift of [F3] has period increment $k$, so this increment agrees with the degree already computed by [F1]. [F1, F3, given]

1.2 Let $k,l\in\mathbb Z$. If $k=l$ then $p_k=p_l$; conversely if $p_k$ and $p_l$ are homotopic, [F2] with $m=1$ gives $k=\deg(p_k)=\deg(p_l)=l$, so the two maps are homotopic exactly when their exponents agree. [F1, F2]

2.1 Hence the assignment $k\mapsto[p_k]$ is a bijection from $\mathbb Z$ to $[S^1,S^1]$, inverse to the degree, and a power map is determined up to homotopy by its exponent alone; this matches the covering-space description. [F2, F3, step 1.1, step 1.2] ∎
