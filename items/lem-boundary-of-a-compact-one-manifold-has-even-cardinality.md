---
id: lem-boundary-of-a-compact-one-manifold-has-even-cardinality
kind: lemma
title: "Boundary of a compact 1-manifold has even cardinality"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-overlap-of-arc-length-parametrizations-of-a-one-manifold, thm-every-smooth-manifold-admits-a-riemannian-metric, def-riemannian-metric-and-riemannian-manifold, prop-components-of-a-topological-manifold-are-open-and-at-most-countable, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, thm-euclidean-inverse-function-theorem, def-interval, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-compact-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "Appendix: Classifying 1-manifolds, printed pp. 56–57 (the classification theorem and the maximal arc-length argument); §2, printed p. 14 (finite disjoint unions of circles and segments, with the parity consequence)"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, printed pp. 77–79 (the parity of the boundary of a compact 1-manifold, used in the mod 2 invariance proof)"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ be a compact smooth $1$-manifold, possibly with boundary (the empty manifold included). Then $W$ is diffeomorphic to a finite disjoint union of copies of the circle $S^1$ and of the closed interval $[0,1]$. Consequently the boundary $\partial W$ is a finite set of even cardinality: every circle component contributes no boundary point and every interval component contributes exactly two, so $\#\partial W$ is twice the number of interval components of $W$. The classification neither assumes orientability nor compactness of the connected model; compactness is used only to finish with finitely many circles and closed intervals.

## Facts & Assumptions

**Given:** A compact smooth $1$-manifold $W$ with boundary, and $\mathrm{AC}_\omega$ for the metric and the local constructions.

[A1] $\mathrm{AC}_\omega$: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] Every smooth manifold with boundary admits a Riemannian metric, and under [A1] the metric can be chosen on the whole manifold ([[thm-every-smooth-manifold-admits-a-riemannian-metric]]).

[F2] For a connected Riemannian $1$-manifold and arc-length parametrizations $f,h$, the overlap $f(I)\cap h(J)$ has at most two components; one component lets $f$ be extended by gluing, and two components force the manifold to be diffeomorphic to $S^1$ ([[lem-overlap-of-arc-length-parametrizations-of-a-one-manifold]]).

[F3] The connected components of a topological manifold are open and there are at most countably many of them ([[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]]). For boundary charts the same proof applies: half-space chart neighbourhoods are locally path-connected, so components are open; each contains a member of a countable basis, and assigning the least such basis index injects the components into $\mathbb N$.

[F4] If $\dim M\ge1$ then $\partial M$ is a closed embedded smooth $(\dim M-1)$-manifold; for $\dim M=0$, $\partial M=\varnothing$ ([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]).

[F5] A compact discrete topological space is finite, and the discrete topology on an infinite set is not compact ([[def-compact-space]]).

[F6] A chart of $W$ is a homeomorphism onto a relatively open subset of $\mathbb H^n$, a smooth interval reparametrization with strictly positive derivative has a smooth inverse: the inverse function theorem gives a $C^1$ inverse, and its derivative formula bootstraps to smoothness; at an included endpoint apply it to a smooth local extension with positive derivative, and a nondegenerate compact interval is diffeomorphic to $[0,1]$ ([[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]], [[thm-euclidean-inverse-function-theorem]], [[def-interval]]).

[F7] The metric assigns to each tangent vector a $g$-length, and a parametrization is by arc-length when its velocity has $g$-length one everywhere ([[def-riemannian-metric-and-riemannian-manifold]]).

## Proof

**Proof technique:** direct, following Milnor's appendix: local arc-length parametrizations, a maximal extension, and the overlap lemma.

1.1 Fix a Riemannian metric $g$ on $W$ by [F1] under [A1]. Near any $x\in W$ choose a chart as in [F6]; in its coordinates the metric reads $h(t)\,dt^2$ with $h>0$ smooth, and $s(t):=\int_{t_0}^t\sqrt{h}$ has $s'>0$, so by [F6] its inverse is smooth and $\sigma\mapsto(\text{chart})^{-1}(s^{-1}(\sigma))$ is a unit-speed reparametrization onto an open subset, i.e. an arc-length parametrization in the sense of [F7]. Hence every point of $W$ lies in an arc-length parametrization with some nondegenerate interval domain. [A1, F1, F6, F7, construct]

2.1 First suppose $W$ is connected. Fix one such parametrization $f:I\to W$ and let $\mathcal E$ be the set of arc-length parametrizations extending $f$. If two members $h_1,h_2\in\mathcal E$ did not agree at some point of their common domain, then the overlap of their images would have two components (with one component, [F2] makes $h_2^{-1}\circ h_1$ affine of slope $\pm1$ on an interval containing $I$, where it is the identity, hence the identity everywhere on the overlap), and then [F2] gives $W\cong S^1$. If $W\not\cong S^1$, all members of $\mathcal E$ therefore agree on overlaps, and the union formula defines a single arc-length parametrization $f^*$: the affine one-component transition between any two extensions is the identity, so their domain overlap is exactly their image overlap and the union is injective. Thus it defines $f^*$ on the interval $I^*:=\bigcup_{h\in\mathcal E}\operatorname{dom}h$ extending every member; it is maximal by construction. [F2, step 1.1, construct]

3.1 Let $f:I\to W$ be maximal and suppose $f(I)\neq W$. Since $f(I)$ is open and $W$ is connected, its boundary in $W$ is nonempty; pick $x\in\partial f(I)$, a limit point of $f(I)$ with $x\notin f(I)$. By 1.1 choose an arc-length parametrization $h:J\to W$ near $x$; it satisfies $h(J)\cap f(I)\neq\varnothing$ and $h(J)\not\subseteq f(I)$. Applying [F2] to the pair $f,h$: if the overlap has two components then $W\cong S^1$; if it has one component, [F2] exhibits an arc-length parametrization of $f(I)\cup h(J)$ over $I\cup L^{-1}(J)$ extending $f$, and this domain is strictly larger than $I$ because its image contains $x\notin f(I)$; that contradicts maximality. Hence a maximal arc-length parametrization of a connected $W$ is onto, unless $W\cong S^1$. [F2, step 1.1, step 2.1, algebra]

4.1 If $W$ is connected and compact and $W\not\cong S^1$, then by 3.1 a maximal arc-length parametrization $f:I\to W$ is a diffeomorphism; since $W$ is compact and $f$ is a homeomorphism, $I$ is a nondegenerate compact interval, hence diffeomorphic to $[0,1]$ by [F6], and $\partial W$ consists of the two endpoints. Together with the circle alternative this gives: every connected compact smooth $1$-manifold is diffeomorphic to $S^1$ or to $[0,1]$. [step 3.1, F4, F6, given]

5.1 For a general compact $W$ (the empty case included) the components are open by [F3] and cover the compact space $W$, so there are finitely many; each component is closed in $W$, hence compact, and with the restricted structure is a connected compact smooth $1$-manifold, so by 4.1 it is diffeomorphic to $S^1$ or to $[0,1]$. By [F4] the boundary $\partial W$ is a closed $0$-dimensional embedded submanifold of $W$, hence a compact discrete space, hence finite by [F5]. Circle components contribute no boundary points and every interval component contributes exactly two, so $\#\partial W=2\cdot\#\{\text{interval components}\}$ is even. [F3, F4, F5, step 4.1, algebra] ∎
