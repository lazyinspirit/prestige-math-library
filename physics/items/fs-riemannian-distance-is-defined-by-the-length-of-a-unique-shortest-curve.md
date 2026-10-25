---
id: "fs-riemannian-distance-is-defined-by-the-length-of-a-unique-shortest-curve"
kind: "false-statement"
title: "Riemannian distance is defined by the length of a unique shortest curve"
deps: ["def-riemannian-distance-on-a-connected-manifold", "lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric", "prop-length-is-additive-under-concatenation-and-invariant-under-reversal", "thm-newton-leibniz-with-interior-derivative"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Riemannian distance is the length of a unique shortest curve. In fact both attainment and uniqueness can fail.

## Facts & Assumptions

**Given:** First use the Euclidean metric on $P=\mathbb R^2\setminus\{0\}$ with endpoints $(-1,0),(1,0)$. Then use the induced metric on $S^1$ with endpoints $(1,0),(-1,0)$.

[F1] [[def-riemannian-distance-on-a-connected-manifold]]: On a connected Riemannian manifold define $d_g(p,q)=\inf\{L_g(\gamma):\gamma\text{ is piecewise }C^1\text{ from }p\text{ to }q\}$. Lengths are those of def-riemannian-speed-and-length. For each pair $p,q$, lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve supplies a curve, so the set of lengths is nonempty, contains a finite real number and is bounded below by zero. Applying the least-upper-bound property cor-cauchy-reals-lub-complete to the negatives gives a finite nonnegative infimum. On the empty connected manifold this defines the empty distance function; there are no pairs to evaluate. No minimizing curve is part of this definition.

[F3] [[prop-length-is-additive-under-concatenation-and-invariant-under-reversal]]: Length adds under finite concatenation and is unchanged by reversal.

[F4] [[thm-newton-leibniz-with-interior-derivative]]: Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is Riemann integrable and $$f(x)=G'(x)\qquad(a<x<b),$$ then $$\int_a^b f=G(b)-G(a).$$ No derivative of $G$ at either endpoint is assumed, and the two endpoint values assigned to the integrable extension $f$ do not enter the conclusion.

## Refutation

**Proof technique:** direct.

1.1 For a piecewise $C^1$ path $\gamma=(x,y)$ in $P$ between the prescribed points, its Euclidean speed is $\sqrt{x'^2+y'^2}$. On each smooth piece this is at least $x'$. Integrating and telescoping the endpoint differences gives $L(\gamma)\ge x(b)-x(a)=2$; Newton–Leibniz applies to the continuously differentiable coordinates on every closed piece. [F4, given]

1.2 For any piecewise $C^1$ path in $S^1$, subdivide its parameter interval so that each piece lies in one open arc admitting a smooth angle coordinate. Such a finite subdivision exists: the inverse images of these arcs cover the compact interval; a finite subcover has a positive Lebesgue number, so sufficiently short equal subintervals refine it. Refine further at the original smooth-piece endpoints. Choose an angle value at the initial point and successively add integer multiples of $2\pi$ to each local angle so adjacent values agree at the joining parameter. This gives a continuous piecewise $C^1$ angle $\theta$ with $\gamma=(\cos\theta,\sin\theta)$. Differentiation gives speed $|\theta'|$. [given]

2.1 For $0<\varepsilon<1$, travel along the horizontal axis from $(-1,0)$ to $(-\varepsilon,0)$, along the upper semicircle of radius $\varepsilon$, and along the axis from $(\varepsilon,0)$ to $(1,0)$. All three pieces avoid the origin. Their lengths are $1-\varepsilon$, $\pi\varepsilon$, and $1-\varepsilon$: the semicircle parametrization $(\varepsilon\cos t,\varepsilon\sin t)$ has speed $\varepsilon$ for $0\le t\le\pi$, with reversal giving the required direction. Additivity and reversal yield $2+(\pi-2)\varepsilon$. Consequently the infimum is $2$. [F1, F3, step 1.1]

3.1 If an admissible path had length $2$, then the integral of $\sqrt{x'^2+y'^2}-x'$ would be zero. This function is continuous and nonnegative on each smooth piece, so it vanishes on each piece (a positive value would give a positive integral on a small interval). Thus $y'=0$ and $x'\ge0$ there. Newton–Leibniz and continuity at the subdivision points imply $y\equiv0$. The intermediate value theorem gives a parameter with $x=0$, contradicting avoidance of the origin. Hence the infimum on $P$ is not attained. [F4, step 1.1, step 2.1]

4.1 For the antipodal endpoints, take $\theta(a)=0$. Then $\theta(b)=(2k+1)\pi$ for some integer $k$. Integrating $|\theta'|$ and applying Newton–Leibniz on the pieces gives $L\ge|\theta(b)-\theta(a)|\ge\pi$. The paths $t\mapsto(\cos t,\sin t)$ and $t\mapsto(\cos t,-\sin t)$ for $0\le t\le\pi$ have speed $1$, length $\pi$, and distinct images. Both attain the distance. This proves failure of uniqueness as well as the failure of existence in step 3.1. [F1, F4, step 3.1, step 1.2] ∎

## Source locator

Lee, pp. 337–338, Riemannian length and distance. The nonattainment and antipodal calculations, including the finite angle-lift construction, are supplied above; no geodesic existence theorem is used.
