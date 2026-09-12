---
id: "fs-any-two-points-of-a-riemannian-manifold-are-joined-by-a-minimizing-geodesic"
kind: "false-statement"
title: "Any two points admit a minimizing geodesic"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-countable-choice", "prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure", "def-riemannian-metric-and-riemannian-manifold", "lem-plane-exterior-of-a-closed-disc-is-path-connected", "def-riemannian-speed-and-length", "def-riemannian-distance-on-a-connected-manifold", "thm-gradient-theorem-for-line-integrals", "thm-scalar-and-vector-line-integral-estimates", "prop-length-is-additive-under-concatenation-and-invariant-under-reversal", "thm-intermediate-value", "thm-hopf-rinow"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ben Andrews, Geodesics and Completeness, Theorem 11.5.1 and proof, printed pp. 106--108
      url: https://maths-people.anu.edu.au/andrews/DG/DG_chap11.pdf
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: "direct"
---

## Statement

**False claim:** for every Riemannian manifold and every two of its points,
there is a minimizing geodesic joining them.

Assume $\mathrm{AC}_\omega$ for the current library interfaces used below. The
counterexample is stronger than a failure caused by disconnectedness: it is a
connected boundaryless Riemannian manifold, and its two displayed points can be
joined by piecewise-$C^1$ curves whose lengths have a finite infimum, but no
curve attains that infimum.

## Facts & Assumptions

**Given:** $$M=\mathbb R^2\setminus\{(0,0)\},\qquad p=(-1,0),\qquad q=(1,0).$$ with the smooth structure and Riemannian metric obtained by restricting the standard Euclidean ones.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] [[prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure]] makes an open subset of $\mathbb R^2$ a smooth boundaryless $2$-manifold; [[def-riemannian-metric-and-riemannian-manifold]] defines a Riemannian metric; and [[lem-plane-exterior-of-a-closed-disc-is-path-connected]] says, at radius zero, that the punctured plane is path-connected and hence connected.

[F2] [[def-riemannian-speed-and-length]] defines length as the finite sum of the speed integrals, and [[def-riemannian-distance-on-a-connected-manifold]] defines $d_g$ as the infimum of lengths of piecewise-$C^1$ curves with the given endpoints.

[F3] [[thm-gradient-theorem-for-line-integrals]] evaluates the line integral of a gradient as its endpoint increment; [[thm-scalar-and-vector-line-integral-estimates]] bounds a constant unit vector field's line integral by Euclidean arc length; and [[prop-length-is-additive-under-concatenation-and-invariant-under-reversal]] makes Riemannian length additive after a finite subdivision.

[F4] [[thm-intermediate-value]] says that a continuous real coordinate on a closed interval takes every value between its endpoint values.

[F5] Under [A1], [[thm-hopf-rinow]] says that a nonempty connected boundaryless Riemannian manifold that is metrically or geodesically complete joins every two points by a minimizing geodesic.

## Refutation

**Proof technique:** direct.

1.1 The set $M$ is open: if $z\in M$, the Euclidean ball of radius $\lVert z\rVert_2/2$ about $z$ misses the origin. Thus [F1] makes $M$ a smooth boundaryless $2$-manifold. The restricted tensor has the constant identity matrix, so it is smooth and positive definite and is a Riemannian metric by [F1]. The radius-zero clause of [F1] makes $M$ path-connected, hence connected; it is plainly nonempty. [F1, given, algebra]

1.2 Let $\sigma:[a,b]\to M$ be any piecewise-$C^1$ curve from $p$ to $q$, and write $\sigma(t)=(x(t),y(t))$. The function $x$ is continuous, with $x(a)=-1$ and $x(b)=1$, so [F4] supplies $t_0\in(a,b)$ with $x(t_0)=0$. Put $z=\sigma(t_0)=(0,y_0)$. Because $\sigma$ takes values in $M$, one has $y_0\ne0$. [F4, given]

1.3 For every real $\varepsilon>0$, define a two-segment curve $c_\varepsilon:[0,2]\to M$ by $c_\varepsilon(t)=(-1+t,\varepsilon t)$ for $0\le t\le1$ and $c_\varepsilon(t)=(t-1,\varepsilon(2-t))$ for $1\le t\le2$. It joins $p$ to $q$ through $(0,\varepsilon)$. On the first segment, a zero first coordinate forces $t=1$ and then the second coordinate is $\varepsilon$; on the second it again forces $t=1$. Hence the curve never meets the origin. Its two constant velocities are $(1,\varepsilon)$ and $(1,-\varepsilon)$, so [F2] gives $L_g(c_\varepsilon)=2\sqrt{1+\varepsilon^2}$. Moreover $\sqrt{1+\varepsilon^2}\le1+\varepsilon^2/2$, because squaring the nonnegative right side adds $\varepsilon^4/4$. Given $\delta>0$, taking $0<\varepsilon<\sqrt\delta$ therefore gives $L_g(c_\varepsilon)<2+\delta$. [F2, construct, algebra]

2.1 Refine a piecewise-$C^1$ subdivision to include $t_0$. On the first restriction, take the constant Euclidean unit vector $u=(z-p)/\lVert z-p\rVert_2$. It is the gradient of the linear function $w\mapsto u\mathbin\cdot w$, so [F3] evaluates its line integral as $u\mathbin\cdot(z-p)=\lVert z-p\rVert_2$ and bounds this by the Euclidean length of the restriction. The restricted Riemannian metric is Euclidean, so [F2] identifies that length with its Riemannian length. Applying the same argument to the second restriction, with $(q-z)/\lVert q-z\rVert_2$, and then using additivity gives $L_g(\sigma)\ge \lVert z-p\rVert_2+\lVert q-z\rVert_2=2\sqrt{1+y_0^2}>2$. Thus every competitor has length strictly greater than $2$. [F2, F3, step 1.2, algebra]

3.1 Steps 2.1 and 1.3 show that the set of competitor lengths has infimum exactly $2$, so [F2] gives $d_g(p,q)=2$. Step 2.1 also shows that no competitor has length $2$. Consequently no length-minimizing curve, and in particular no minimizing geodesic, joins $p$ to $q$. This refutes the full universal claim. [F2, step 2.1, step 1.3]

4.1 The precise missing hypothesis is completeness, not connectedness. Indeed step 1.1 verifies all of [F5]'s manifold hypotheses, while step 3.1 contradicts the minimizing-geodesic conclusion; under [A1], [F5] therefore shows that this $M$ is neither metrically nor geodesically complete. Andrews proves the complete-manifold implication in the cited Hopf--Rinow theorem, printed pp. 106--108, but does not give this punctured-plane counterexample or its nonattainment calculation; those are proved in steps 1.1--3.1. [A1, F5, step 1.1, step 3.1]

5.1 Empty manifolds have no pair of points to witness the failure, and a nonempty connected zero-manifold is a singleton, where the constant geodesic minimizes. A punctured line is disconnected, so dimension two is used to keep the counterexample connected. Here $p\ne q$, the parameter intervals and both detour pieces are nondegenerate, $t_0$ is an interior parameter, and all curve endpoints are included. The witnesses $p,q,c_\varepsilon$ are explicit and no family of them is selected. The intermediate-value construction [F4] is canonical and choice-free, and the explicit line-integral and detour calculations in steps 1.1--3.1 use no choice principle. Assumption [A1] is used only when invoking the current Hopf--Rinow interface [F5] for the completeness diagnosis in step 4.1; no full choice axiom is used. There is no iff claim to check. [A1, F4, F5, step 1.2, step 1.3, step 2.1, step 3.1, step 4.1] ∎
