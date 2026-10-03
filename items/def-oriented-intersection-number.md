---
id: def-oriented-intersection-number
kind: definition
title: "The oriented intersection number"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-transverse-complementary-dimensional-intersection-set, lem-compact-transverse-complementary-intersections-are-finite, def-local-oriented-intersection-sign, def-oriented-smooth-manifold-and-oriented-chart, thm-transversality-homotopy-theorem, def-smooth-family-of-maps-and-evaluation-map, def-countable-choice]
justified_by: [thm-oriented-intersection-number-is-homotopy-invariant]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 3 §3, printed pp. 107–108 and 112 (definition of $I(f,Z)$, the submanifold case, and the deformation convention)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§5, printed pp. 26–29 (oriented source and target, signs of $df_x$, and the extendability computation)"
---

## Definition

Let $X$ be a compact oriented smooth $x$-manifold without boundary, let $M$ be an oriented smooth $n$-manifold without boundary, and let $Z\subseteq M$ be a closed oriented embedded $z$-submanifold with $x+z=n$ ([[def-oriented-smooth-manifold-and-oriented-chart]]). For a smooth $f:X\to M$ transverse to $Z$, the **oriented intersection number** is the finite sum

$$I(f,Z):=\sum_{p\in f^{-1}(Z)}\varepsilon(p)\in\mathbb Z,$$

with the local signs of [[def-local-oriented-intersection-sign]]; the sum is finite by [[lem-compact-transverse-complementary-intersections-are-finite]]. For an arbitrary smooth $g:X\to M$, choose a transverse $f$ homotopic to $g$ ([[thm-transversality-homotopy-theorem]], under Countable Choice; the homotopy is a smooth family in the sense of [[def-smooth-family-of-maps-and-evaluation-map]]) and set $I(g,Z):=I(f,Z)$; independence of the choice is [[thm-oriented-intersection-number-is-homotopy-invariant]], not assumed here. For compact oriented complementary-dimensional submanifolds $A,B\subseteq M$, where one is compact and the other closed, one sets $I(A,B):=I(i_A,B)$ with $i_A$ the inclusion, so the first factor is the submanifold $A$. If the source is not compact, or the target submanifold is not closed, the sum may fail to be finite or invariant; the safe extension by properness with compact trace is recorded in the remark on properness later on this page. Countable Choice is assumed for selecting transverse representatives and for the classification used to prove independence of that selection; the signs, the finite sum and the empty case (which contributes $0$) are choice-free.

For transverse maps $f:X^x\to M$, $g:Z^z\to M$ with compact oriented boundaryless sources and $x+z=\dim M$, define $I(f,g)$ as the sum of the local signs of [[def-local-oriented-intersection-sign]] over $X\times_MZ$. This set is closed in the compact product because $M$ is Hausdorff, and discrete by [[def-transverse-complementary-dimensional-intersection-set]], so the sum is finite. If $g$ is an inclusion this recovers $I(f,Z)$. Ambient compactness is unnecessary in either construction.
