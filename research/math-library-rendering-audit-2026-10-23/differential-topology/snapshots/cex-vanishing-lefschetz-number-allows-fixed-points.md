---
id: cex-vanishing-lefschetz-number-allows-fixed-points
kind: counterexample
title: "A vanishing Lefschetz number with canceling fixed points"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-lefschetz-fixed-point-theorem, thm-lefschetz-hopf-index-formula, thm-index-of-a-nondegenerate-fixed-point, def-local-fixed-point-index, def-algebraic-lefschetz-number, def-global-geometric-lefschetz-number, def-degree-of-a-circle-loop, thm-degree-map-on-the-circle-is-a-homomorphism, cor-homology-of-spheres, def-c-r-and-smooth-maps-between-smooth-manifolds, def-axiom-of-choice, cor-lefschetz-number-is-homotopy-invariant, def-degree-of-a-self-map-of-an-oriented-sphere]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §§7-8, printed pp. 16-18 (the converse of the Lefschetz theorem fails; examples have L(f)=0 with fixed points of indices 1, -1 and 0)"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed p. 126 (degenerate but canceling fixed points are the standard obstruction to a converse)"
dependency_level: 13
---

## Statement refuted

If $L(f)=0$ then $f$ has no fixed points. Equivalently, a vanishing Lefschetz
number forces a self-map of a closed manifold to be fixed-point-free.

## Facts & Assumptions

**Given:** AC ([[def-axiom-of-choice]]), the circle $S^1=\mathbb R/2\pi\mathbb Z$ and the smooth map $g(\theta)=\theta+\varepsilon\sin\theta$ with $0<\varepsilon<1$, viewed as a self-map $f$ of $S^1$.

[F1] $H_*(S^1;\mathbb Q)$ is $\mathbb Q$ in degrees $0,1$ and vanishes otherwise; a circle self-map of degree $d$ has $f_*=\mathrm{id}$ on $H_0$ and multiplication by $d$ on $H_1$ ([[cor-homology-of-spheres]], [[def-degree-of-a-self-map-of-an-oriented-sphere]]).

[L1] $L(f)$ is the alternating trace sum over rational homology ([[def-algebraic-lefschetz-number]]); for a smooth map of $S^1$ with isolated fixed points the index sum is $L(f)$ and a nondegenerate fixed point $\theta_0$ has index $\operatorname{sign}(1-g'(\theta_0))$ ([[thm-lefschetz-hopf-index-formula]], [[thm-index-of-a-nondegenerate-fixed-point]], [[def-local-fixed-point-index]]). Homotopic maps have equal Lefschetz numbers ([[cor-lefschetz-number-is-homotopy-invariant]]).

## Counterexample

1.1 The fixed points. A point $\theta$ is fixed by $g$ exactly when $\varepsilon\sin\theta=0$ in $\mathbb R/2\pi\mathbb Z$, i.e. exactly when $\theta\in\{0,\pi\}$. Both solutions are nondegenerate because $g'(\theta)=1+\varepsilon\cos\theta$ is $1+\varepsilon$ at $0$ and $1-\varepsilon$ at $\pi$, neither equal to $1$ for $0<\varepsilon<1$; their indices are $\operatorname{sign}(1-(1+\varepsilon))=-1$ at $0$ and $\operatorname{sign}(1-(1-\varepsilon))=+1$ at $\pi$. So $f$ has fixed points and its index sum is $(-1)+(+1)=0$. [given, L1]

2.1 The periodic function $\varepsilon\sin\theta$ makes $g_t(\theta)=\theta+t\varepsilon\sin\theta$ a well-defined homotopy of circle maps from the identity to $f$. By [L1], $L(f)=L(\mathrm{id})$, and [F1] gives the two identity traces one in degrees zero and one, so $L(f)=1-1=0$. Thus $L(f)=0$ while $f$ has the two fixed points found in step 1.1. [step 1.1, F1, L1]


3.1 The refutation. The displayed statement asserts that a vanishing Lefschetz number forces the map to be fixed-point-free; $f$ has $L(f)=0$ and the fixed points $0,\pi$, so the implication fails. The example is the curved version of the standard caution that $L$ is only a signed count: the nonvanishing of $L$ guarantees a fixed point, but its vanishing merely allows fixed points to cancel, as here with indices $-1$ and $+1$. [step 2.1, step 1.1, F1] ∎
