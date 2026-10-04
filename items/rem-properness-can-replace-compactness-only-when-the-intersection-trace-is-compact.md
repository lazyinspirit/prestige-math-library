---
id: rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact
kind: remark
title: "Properness can replace compactness only when the intersection trace is compact"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-mod-two-intersection-number, thm-mod-two-intersection-number-is-homotopy-invariant, def-oriented-intersection-number, thm-oriented-intersection-number-is-homotopy-invariant, thm-transverse-preimage-for-manifolds-with-boundary, thm-degree-is-invariant-under-proper-smooth-homotopy]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, Exercise 13, printed p. 84 (invariance and the Boundary Theorem fail without closedness, compactness, or a compact trace)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§5, printed pp. 28–29 (the compact oriented trace argument)"
---

## Remark

The compactness hypotheses of the definitions and invariance theorems on this page may be replaced by properness in exactly the places where the proofs use them. For complementary dimensions, if $X$ is a smooth boundaryless manifold and $f:X\to M$ is proper with $Z\subseteq M$ a compact embedded submanifold, properness makes $f^{-1}(Z)$ compact, and a transverse count over it is finite ([[thm-transverse-preimage-for-manifolds-with-boundary]] records the local structure that makes the counted set discrete). Properness alone is not enough when the target is not compact: the proper map $f:\mathbb R\to\mathbb R^2$, $f(t)=(t,\sin t)$, is transverse to the closed submanifold $Z=\mathbb R\times\{0\}$ and meets it in the infinite set $\pi\mathbb Z$, so its trace, though discrete, is not compact and the count is not finite. For a homotopy the same argument requires properness of the combined map $F:[0,1]\times X\to M$ when $Z$ is compact, or more generally compactness of the trace $F^{-1}(Z)$ itself: properness of the endpoint maps alone does not imply it, exactly as for the degree ([[thm-degree-is-invariant-under-proper-smooth-homotopy]]), and the safe formulation is that the relevant intersection trace $F^{-1}(Z)$ be compact.

Arbitrary noncompact homotopies do not preserve the count. The intersection points can escape to infinity, so that the compact $1$-manifold argument of [[thm-mod-two-intersection-number-is-homotopy-invariant]] and [[thm-oriented-intersection-number-is-homotopy-invariant]] has no compact boundary to count; the companion counterexample on the examples page exhibits the escape to infinity even with proper slices. Closedness of the target submanifold is likewise used rather than decorative, and the definitions of [[def-mod-two-intersection-number]] and [[def-oriented-intersection-number]] are stated for compact sources precisely so that this remark is a boundary case, not an implicit extension.

Boundarylessness of $X$ is a separate requirement: with a source boundary, a compact trace can have additional boundary points on $[0,1]\times\partial X$, and the endpoint counts need not agree. This is not a failure of compactness. The trace and boundary counts use the inherited $\mathrm{AC}_\omega$ of their classification suppliers; the explicit finiteness and escape computations introduce no further choice.
