---
id: ex-cg-equally-spaced-points-on-a-short-circle-are-stationary
kind: example
title: "Equally spaced points on a metric circle: stationary energy and the equality case"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 16
deps: [cor-pi-is-the-first-positive-sine-zero, def-axiom-of-choice, def-cg-cat-zero-cat-one-and-local-geodesic, def-cg-cyclic-small-mesh-polygon-and-midpoint-energy, def-metric-ball, def-metric-space, def-principal-inverse-sine-and-cosine, lem-cg-bowditch-quantitative-short-loop-control, lem-cg-comparison-convexity-and-model-spaces, lem-cg-polygon-midpoint-drop-and-equality, lem-cg-uniform-energy-decrement-and-short-class-closedness]
proof_strategy: direct
axiom_use: "AC enters through the cited general quantitative or short-loop criterion; the explicit model-space computations require no additional choice."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.1.3 and I.2.3 (geodesics on the circle and sphere; local geodesics)"
    - title: "B. H. Bowditch, Notes on locally CAT(1) spaces (Aberdeen preprint, 27 scanned sheets)"
      url: "https://www.bhbowditch.com/papers/bhb-catone.pdf"
      locator: "§3.3.1–3.3.6, printed pp. 20–23 (stationary polygons and the equality case); §3.1.4–3.1.7 (short closed local geodesics are nonshrinkable)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice for the cited short-loop criterion.

Let $0<\ell<2\pi$ and let $S^1_\ell=\mathbb R/\ell\mathbb Z$ be the circle of circumference $\ell$ with its metric $d_\ell$ ([[def-cg-cat-zero-cat-one-and-local-geodesic]], [[lem-cg-comparison-convexity-and-model-spaces]] (vi)). Fix $n\ge5$, choose $0<\varepsilon<\ell(1/4-1/n)$, and let $x$ be the cyclic $n$-tuple of equally spaced points $0,\ell/n,\dots,(n-1)\ell/n$; take the uniform radius $l=\ell/4-\varepsilon$ of [[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]] so that $\operatorname{mesh}(x)=\ell/n<l$, and fix $h$ with $\ell/n\le h<l$. Thus $x\in P_h(n)$. Then:

**(i)** $\operatorname{mesh}(x)=\ell/n$, $L(x)=\ell$, $E(x)=\ell^2/n$, and $f(x)$ is the equally spaced tuple shifted by $\ell/(2n)$; hence $L(f^k x)=\ell$ and $E(f^k x)=\ell^2/n$ for every $k$, and $x\notin C^0_h(n)$ ([[def-metric-ball]]).

**(ii)** Every consecutive triple of $x$ is straight, so $x$ realizes the equality case of [[lem-cg-polygon-midpoint-drop-and-equality]] (iii): it is the list of $n$ equally spaced points of the closed local geodesic $S^1_\ell$. This is the exclusion of [[lem-cg-uniform-energy-decrement-and-short-class-closedness]] (iii): the basin can contain no such tuple.

**(iii)** $S^1_\ell$ is compact and locally CAT(1) but not CAT(1) ([[lem-cg-comparison-convexity-and-model-spaces]] (vi)), and it contains the isometrically embedded circle $S^1_\ell$ of length $\ell<2\pi$. The loop is a short nonshrinkable loop, in agreement with [[lem-cg-bowditch-quantitative-short-loop-control]] (iii) with $m=\ell$; in particular the tuple with stationary length and energy in (i) is not contradictory, because the quantitative decrement is stated on the basin only.

**(iv)** For $\ell=2\pi$ the same computation gives a rotating tuple with stationary length and energy on the CAT(1) circle $S^1_{2\pi}$; stationary length and energy therefore do not detect whether the space is CAT(1), they only detect the closed local geodesic.

## Facts & Assumptions

**Given:** The circle $S^1_\ell=\mathbb R/\ell\mathbb Z$ of circumference $0<\ell<2\pi$ with its intrinsic metric; a fixed $n\ge5$; the cyclic tuple $x$ of equally spaced points $j\ell/n$; $l=\ell/4-\varepsilon$ with $0<\varepsilon<\ell(1/4-1/n)$ and $\ell/n\le h<l$.

[L1] [[lem-cg-comparison-convexity-and-model-spaces]] (vi): the circle $S^1_\ell$ is compact and locally CAT(1), the distance between two points is the minimum of the two arc lengths, and $S^1_\ell$ is not CAT(1) for $\ell<2\pi$.

[L2] [[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]] and [[lem-cg-polygon-midpoint-drop-and-equality]]: the midpoint operation $f$ by arclength midpoints, the quantities $\operatorname{mesh},L,E$, the basin $C^0_h(n)$ and the equality case.

[L3] [[lem-cg-bowditch-quantitative-short-loop-control]] (iii)-(iv): the minimum $m$ of the lengths of isometrically embedded circles, and the equivalence between $X$ being CAT(1) and $m\ge2\pi$.

[L4] [[def-metric-space]], [[def-metric-ball]], [[def-principal-inverse-sine-and-cosine]]: the metric axioms, balls, and the elementary circle computations.

[L5] [[def-axiom-of-choice]]: AC enters only through the suppliers [L2] and [L3]; the explicit circle computation is choice-free.



## Verification

**Proof technique:** explicit arc-midpoint computation.

1.1 **The data of the tuple (i).** Consecutive points $j\ell/n$ and $(j+1)\ell/n$ are at distance $\ell/n$ (the shorter arc has length $\ell/n<\ell/2$, so it is the unique geodesic), so $\operatorname{mesh}(x)=\ell/n\le h$ and $x\in P_h(n)$, $L(x)=n\cdot\ell/n=\ell$ and $E(x)=n(\ell/n)^2=\ell^2/n$. [L2, L4, algebra]

2.1 **The midpoint tuple is the shifted tuple (i).** The arclength midpoint of the arc from $j\ell/n$ to $(j+1)\ell/n$ is $(j+1/2)\ell/n$, so $f(x)_j=(j+1/2)\ell/n$; this is the equally spaced tuple based at $\ell/(2n)$, i.e. a rotation of $x$ by $\ell/(2n)$. The rotation is an isometry of $S^1_\ell$, so $L(f^kx)=\ell$ and $E(f^kx)=\ell^2/n$ for every $k$; in particular the iterated lengths do not tend to $0$ and $x\notin C^0_h(n)$. [step 1.1, L2, L4, algebra]

3.1 **Straightness and the equality case (ii).** Every consecutive triple of $x$ lies on the unique minimizing arc of length $2\ell/n<\ell/2$ because $n\ge5$, and its middle point is the midpoint of that arc; hence each triple is straight, which is exactly the equality condition of [L2](iii): the tuple is the list of $n$ equally spaced points of the closed local geodesic $S^1_\ell$. Since the basin contains no nonconstant straight equilateral tuple by [[lem-cg-uniform-energy-decrement-and-short-class-closedness]] (iii), this is consistent with step 2.1. [step 2.1, L2, algebra]

3.2 **The short circle and its minimum (iii).** By [L1] the circle is compact locally CAT(1), but not CAT(1). Pairs at distance $<\ell/2$ have a unique shortest arc. If an isometrically embedded circle has length $u$, its opposite points have two distinct minimizing arcs of length $u/2$, so $u/2\ge\ell/2$. The whole circle realizes equality, proving $m=\ell$. By [L3](iii) it is nonshrinkable, consistent with the basin-only decrement and the constant positive iterated energy of step 2.1. [step 2.1, L1, L2, L3, algebra]

3.3 **The boundary case (iv).** For $\ell=2\pi$ the same computations give $\operatorname{mesh}(x)=2\pi/n$, $L(x)=2\pi$, $E(x)=4\pi^2/n$ and $f(x)$ the shifted equispaced tuple, so its length and energy are stationary while $S^1_{2\pi}$ is CAT(1); stationary length and energy therefore do not distinguish the two cases. [step 2.1, L1, L3, algebra]

4.1 **Conclusion.** Clause (i) is steps 1.1 and 2.1, clause (ii) is step 3.1, clause (iii) is step 3.2 and clause (iv) is step 3.3; AC enters only through the suppliers [L2] and [L3] ([L5]). [step 1.1, step 2.1, step 3.1, step 3.2, step 3.3, L5] ∎
