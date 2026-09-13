---
id: cex-principal-bundle-classification-can-fail-without-numerability
kind: counterexample
title: Principal-bundle classification can fail without numerability
status: draft
origin: pipeline
deps: ["thm-principal-bundles-are-classified-by-maps-to-bg", "def-principal-g-bundle-and-associated-fiber-bundle", "def-locally-trivial-fiber-bundle", "lem-locally-finite-sums-are-continuous"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Peter J. Nyikos, The Topological Structure of the Tangent and Cotangent Bundles on the Long Line
      url: https://web.archive.org/web/20240207153423if_/http://topology.nipissingu.ca/tp/reprints/v04/tp04126s.pdf
      locator: Topology Proceedings 4 (1979), printed pages 271--273 for the differentiable nonmetrizable long line and pages 273--275 for its tangent-bundle structure
    - title: Dale Husemoller, Fibre Bundles, Third Edition
      url: https://link.springer.com/book/10.1007/978-1-4757-2261-1
      locator: Chapter 4, Definitions 9.1--9.2 and Theorem 12.5, printed pages 49 and 58
---

## Claim

Let $L$ be the smooth long line and let $P=F(TL)$ be the frame bundle of its tangent line bundle. Then

$$ P\longrightarrow L $$

is a locally trivial principal $\operatorname{GL}_1(\mathbb R)$-bundle which is not numerable. Hence it is not the pullback of Milnor's universal numerable bundle along any map $L\to B\operatorname{GL}_1(\mathbb R)$. The space $L$ is locally compact Hausdorff, hence CGWH, but it is outside the library's second-countable manifold convention.

## Facts & Assumptions

[F1] Nyikos's long line is a connected Hausdorff differentiable $1$-manifold and is nonmetrizable; each bounded closed order interval is metrizable.

[F2] Smooth coordinate changes make $F(TL)$ a locally trivial principal $\operatorname{GL}_1(\mathbb R)$-bundle in the sense of [[def-principal-g-bundle-and-associated-fiber-bundle]].

[F3] A numeration is a locally finite partition of unity whose supports lie in assigned trivializing opens ([[def-locally-trivial-fiber-bundle]]).

[F4] Pullback of a support-subordinate numeration is again a support-subordinate numeration ([[thm-principal-bundles-are-classified-by-maps-to-bg]]).

[F5] A locally finite sum of continuous functions is continuous ([[lem-locally-finite-sums-are-continuous]]).

## Verification

**Given:** The smooth long line $L$ and its tangent frame bundle $P$.

1.1 The derivative of a change of one-dimensional chart is a continuous nonzero scalar, so the frame-coordinate changes take values in $\operatorname{GL}_1(\mathbb R)$ and act freely and transitively on each frame fiber. Thus [F2] gives the asserted locally trivial principal bundle. [F1, F2]

1.2 Suppose for contradiction that it is numerable. Let $(U_i,\varphi_i)$ be the [F3] data. In the frame over $U_i$, declare the selected frame to have squared norm $1$; this defines a continuous positive quadratic form $g_i$ on $TL|_{U_i}$. Extend $\varphi_i g_i$ by zero away from $U_i$. Support containment makes the extension continuous, and local finiteness together with [F5] makes

$$ g=\sum_i\varphi_i g_i $$

a continuous quadratic form on $TL$. Since $\sum_i\varphi_i=1$ and every $g_i$ is positive on nonzero tangent vectors, $g$ is positive definite. [F3, F5]

2.1 This $g$ metrizes $L$, as follows. Define $d_g(p,q)$ as the infimum of the $g$-lengths of piecewise smooth paths from $p$ to $q$. In a connected smooth manifold, the points reachable from a fixed point by such paths form a nonempty open-and-closed set, so every two points are joined and $d_g(p,q)<\infty$. Positivity gives $d_g(p,q)>0$ when $p\ne q$: choose a coordinate interval $V$ about $p$ whose smaller closed subinterval $K$ contains $p$ in its interior. On $K$, the coefficient of $g$ has a positive lower bound, so every path leaving $K$ has a fixed positive length, and within $K$ coordinate displacement has the corresponding lower bound. An upper bound for the coefficient on a still smaller interval shows short coordinate segments have arbitrarily small $g$-length. Therefore sufficiently small $d_g$-balls lie in $V$, while a sufficiently small coordinate interval lies in any prescribed $d_g$-ball. The metric topology is exactly the original topology. [F1, step 1.2]

3.1 Step 2.1 contradicts the nonmetrizability in [F1], so $P$ is not numerable. Every pullback of Milnor's bundle is numerable by [F4], applied to its join-coordinate numeration. Therefore no map $L\to B\operatorname{GL}_1(\mathbb R)$ pulls Milnor's bundle back to $P$. This does not contradict the classification theorem, whose right side contains only numerable bundles. $\square$ [F1, F4, step 2.1]
