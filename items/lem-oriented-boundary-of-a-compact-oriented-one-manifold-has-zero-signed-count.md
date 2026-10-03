---
id: lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count
kind: lemma
title: "Oriented boundary counts of a compact oriented 1-manifold cancel"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-boundary-of-a-compact-one-manifold-has-even-cardinality, def-induced-boundary-orientation, prop-boundary-orientation-is-independent-of-the-outward-vector-field, def-oriented-smooth-manifold-and-oriented-chart, def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§5, printed pp. 28–29 (Lemma 1: for an arc $A$ of a compact 1-manifold, the two boundary signs sum to zero)"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 3 §3, printed p. 108 (the sum of the orientation numbers at the boundary of a compact oriented 1-manifold is zero)"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ be a compact oriented smooth $1$-manifold and give $\partial W$ the outward-normal-first orientation ([[def-induced-boundary-orientation]]). The boundary is a finite $0$-manifold, so its orientation at a boundary point $p$ is a sign $\varepsilon(p)\in\{+1,-1\}$; then $$\sum_{p\in\partial W}\varepsilon(p)=0.$$ On each closed-interval component the two boundary points carry opposite signs; circle components contribute nothing. With the standard orientation of $[a,b]$ the outward-normal-first convention gives $\partial[a,b]=\{b\}-\{a\}$.

## Facts & Assumptions

**Given:** A compact oriented smooth $1$-manifold $W$ and its outward-normal-first boundary orientation.

[F1] $W$ is diffeomorphic to a finite disjoint union of circles $S^1$ and closed intervals $[a,b]$, so $\partial W$ is finite; that classification is established under $\mathrm{AC}_\omega$ (it fixes a Riemannian metric), and this lemma inherits $\mathrm{AC}_\omega$ and adds no further choice ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]], [[def-countable-choice]]).

[F2] The outward-normal-first rule orients $T_p\partial W$: an outward vector first, followed by a positive boundary determinant, is a positive determinant of $T_pW$; for a $1$-manifold this assigns to a boundary point the sign $+1$ when the positive tangent direction points outward and $-1$ when it points inward, and the result is independent of the chosen outward vector field ([[def-induced-boundary-orientation]], [[prop-boundary-orientation-is-independent-of-the-outward-vector-field]]).

[F3] An orientation of a manifold is a smooth choice of ray in each determinant line, and a $0$-manifold carries one sign per point ([[def-oriented-smooth-manifold-and-oriented-chart]], [[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]]).

## Proof

**Proof technique:** direct, by computing the model components.

1.1 A circle contributes no boundary points. On $[a,b]$ with $a<b$ and positive tangent direction $\partial_t$, the outward vector is $+\partial_t$ at $b$ and $-\partial_t$ at $a$. The outward-normal-first determinant rule gives the point signs $+1$ at $b$ and $-1$ at $a$, so $\partial[a,b]=\{b\}-\{a\}$ and their sum is zero. Reversing the interval orientation reverses both point signs and preserves their cancellation. [F2, F3, algebra]

2.1 By [F1] write $W$ as a finite disjoint union of such model components. The given orientation of $W$ restricts to an orientation of each component, and the outward-normal-first boundary orientation is computed componentwise, because a boundary point lies in exactly one component and the outward vectors of the component and of $W$ agree there. Adding the finitely many contributions of 1.1 gives $\sum_{p\in\partial W}\varepsilon(p)=0$; a circle component contributes no boundary point, an interval component contributes exactly $+1$ and $-1$, and the empty manifold contributes nothing. [F1, step 1.1, algebra] ∎
