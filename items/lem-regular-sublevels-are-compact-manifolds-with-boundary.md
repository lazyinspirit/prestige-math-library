---
id: lem-regular-sublevels-are-compact-manifolds-with-boundary
kind: lemma
title: "Regular sublevels are compact manifolds with boundary"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-closed-sublevel-and-level-set-of-a-smooth-function, def-critical-point-and-critical-value-of-a-smooth-function, def-morse-function-and-excellent-morse-function, cor-local-normal-form-for-submersions, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-smooth-manifold, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, def-compact-space]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed., Ch. 2 §2.2 “The Topology of Sublevel Sets” (exhaustive Morse functions, compact sublevel sets, handle attachment across critical values), printed pp. 37–56"
      url: https://www3.nd.edu/~lnicolae/Morse2nd.pdf
    - title: "John M. Lee, Introduction to Smooth Manifolds, regular level set theorem and its sublevel corollary"
      url: https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf
dependency_level: 0
---

## Statement

Let $f:M\to\mathbb R$ be smooth on a boundaryless smooth $m$-manifold and let $c$ be a regular value such that the closed sublevel $f^{-1}((-\infty,c])$ is compact. Then $f^{-1}((-\infty,c])$ is a compact smooth $m$-dimensional submanifold with boundary, its boundary is the level $f^{-1}(c)$, its interior is the open sublevel $f^{-1}((-\infty,c))$, and the boundary is empty exactly when the level is empty; in that case $f^{-1}((-\infty,c])=f^{-1}((-\infty,c))$ is a compact manifold without boundary. In particular every regular sublevel of a Morse function whose sublevels are compact is a compact manifold with boundary.

## Facts & Assumptions

**Given:** A smooth function $f:M\to\mathbb R$ on a boundaryless smooth $m$-manifold $M$, a regular value $c$, and the compact closed sublevel $S=f^{-1}((-\infty,c])$.

[F1] A value $c$ is regular when it is not a critical value, so $df_x\neq0$ at every $x\in f^{-1}(c)$; sublevels, levels and the open sublevel are as in [[def-closed-sublevel-and-level-set-of-a-smooth-function]] and [[def-critical-point-and-critical-value-of-a-smooth-function]].

[L1] At a point where $f$ is a submersion there are charts in which $f$ reads as a coordinate function ([[cor-local-normal-form-for-submersions]]).

[L2] Half-space charts compatible in the local-extension sense define a smooth structure with boundary ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]), and the boundary of such a manifold is closed and embedded ([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]).

[L3] The sublevel is compact in the subspace topology by hypothesis ([[def-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 If $x\in S$ has $f(x)<c$, continuity of $f$ and openness of $(-\infty,c)$ give an open neighbourhood $U$ of $x$ with $f(U)\subseteq(-\infty,c)$, so $U\subseteq S$. Hence every point of the open sublevel is interior; the local normal form below excludes points of the level from the interior. [F1, given]

1.2 Let $x\in f^{-1}(c)$. By [F1] the differential $df_x$ is nonzero, so $f$ is a submersion at $x$; by [L1] choose adapted source coordinates with last coordinate $f-c$. To see that these are coordinates, start with the submersion normal form and replace its final coordinate by $\psi^{-1}(u_m)-c$, whose derivative is nonzero. Then $S\cap U$ corresponds to $\{u_m\le0\}$ and the level to $\{u_m=0\}$. Every neighbourhood of a level point also meets $\{f>c\}$, so no level point is interior to $S$. [F1, L1, algebra]

2.1 The charts of step 1.2 around points of the level together with the ordinary charts of $M$ around the interior points of step 1.1 cover $S$. Their transition maps are restrictions of smooth transition maps of the ambient manifold $M$ (each boundary chart extends to an ambient smooth chart), hence smooth in the local-extension sense; therefore they define a smooth $m$-manifold structure with boundary on $S$ whose boundary is the level $f^{-1}(c)$ and whose interior is the open sublevel, and [L2] makes that boundary closed and embedded. [L2, step 1.1, step 1.2, construct]

3.1 By hypothesis $S$ is compact. If the level is empty, step 1.1 applies at every point and $S=S^\circ$, so $S$ is a compact manifold without boundary; conversely, if the boundary is empty then the level is empty. The assertion for a Morse function with compact sublevels is the special case in which the regular values are exactly the non-critical values. [F1, L3, step 1.1, step 2.1] ∎
