---
id: "ex-length-and-distance-on-the-circle"
kind: "example"
title: "Length and distance on the circle"
deps: ["def-riemannian-speed-and-length", "def-riemannian-distance-on-a-connected-manifold", "thm-newton-leibniz-with-interior-derivative"]
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

## Example

On the unit circle with induced metric, $d(e^{ia},e^{ib})=\min_{k\in\mathbb Z}|b-a+2\pi k|$. Antipodes have two distinct minimizing semicircles.

## Facts & Assumptions

**Given:** Real angles $a,b$, and the circle parametrization $e^{it}=(\cos t,\sin t)$.

[F1] [[def-riemannian-speed-and-length]]: The **Riemannian speed** on a $C^1$ piece is $|\dot\gamma(t)|_g=\sqrt{g_{\gamma(t)}(\dot\gamma(t),\dot\gamma(t))}$. Its **length** is $L_g(\gamma)=\sum_j\int_{t_{j-1}}^{t_j}|\dot\gamma(t)|_g\,dt$. The curve convention is def-piecewise-c-one-curve-on-a-manifold and the norm is def-pointwise-norm-and-angle-from-a-riemannian-metric. Each integrand is continuous on its closed piece with the one-sided endpoint derivative, hence Riemann integrable and nonnegative. Values chosen at the finitely many corners do not change its integral. For a singleton interval the empty sum is zero; a constant curve also has zero length. Partition independence is established next.

[F2] [[def-riemannian-distance-on-a-connected-manifold]]: On a connected Riemannian manifold define $d_g(p,q)=\inf\{L_g(\gamma):\gamma\text{ is piecewise }C^1\text{ from }p\text{ to }q\}$. Lengths are those of def-riemannian-speed-and-length. For each pair $p,q$, lem-any-two-points-in-a-connected-smooth-manifold-can-be-joined-by-a-piecewise-c-one-curve supplies a curve, so the set of lengths is nonempty, contains a finite real number and is bounded below by zero. Applying the least-upper-bound property cor-cauchy-reals-lub-complete to the negatives gives a finite nonnegative infimum. On the empty connected manifold this defines the empty distance function; there are no pairs to evaluate. No minimizing curve is part of this definition.

[F3] [[thm-newton-leibniz-with-interior-derivative]]: Let $a<b$. Suppose $G:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable on $(a,b)$. If $f:[a,b]\to\mathbb R$ is Riemann integrable and $$f(x)=G'(x)\qquad(a<x<b),$$ then $$\int_a^b f=G(b)-G(a).$$ No derivative of $G$ at either endpoint is assumed, and the two endpoint values assigned to the integrable extension $f$ do not enter the conclusion.

## Verification

**Proof technique:** direct.

1.1 For any piecewise $C^1$ circle path, the inverse images of smooth angle arcs form an open cover of its compact parameter interval. A finite subcover has a positive Lebesgue number; subdividing more finely than it, and at the original differentiability breakpoints, puts each piece in one angle arc. Start the first angle at $a$, and add a multiple of $2\pi$ to each successive local angle to match the preceding endpoint. This yields a continuous piecewise $C^1$ lift $\theta$ starting at $a$, ending at $b+2\pi k$ for some integer $k$. [given]

2.1 Differentiation of $(\cos\theta,\sin\theta)$ gives squared speed $\theta'^2(\sin^2\theta+\cos^2\theta)=\theta'^2$. Consequently $L=\int|\theta'|\ge|\int\theta'|=|b-a+2\pi k|$, where Newton–Leibniz is applied on each closed smooth piece and the endpoint increments telescope. [F1, F3, step 1.1]

3.1 There is an integer $k_0$ with $\delta=b-a+2\pi k_0\in[-\pi,\pi]$, obtained by rounding $(a-b)/(2\pi)$ to a nearest integer. Every other representative has absolute value at least $|\delta|$. The path $t\mapsto e^{i(a+t\delta)}$ on $[0,1]$ has constant speed $|\delta|$ and attains that lower bound, proving the distance formula. [F2, step 2.1]

4.1 For $b-a=\pi$, the representatives $\delta=\pi$ and $\delta=-\pi$ both minimize. The paths $e^{i(a+\pi t)}$ and $e^{i(a-\pi t)}$ have length $\pi$ and disjoint interior semicircle images. For equal endpoints $\delta=0$, the same construction is a constant path of length zero. [step 3.1] ∎

## Source locator

Lee, pp. 331 and 337–338, induced metric and distance; the finite angle lift and minimization over integers are proved above.
