---
id: thm-contour-parameter-integrals-are-holomorphic
kind: theorem
title: "A contour integral of a jointly continuous, parameter-holomorphic integrand is holomorphic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-tagged-sums-approximate-a-contour-integral, thm-weierstrass-convergence-holomorphic-functions, thm-heine-cantor-metric, thm-heine-borel-rn, thm-compact-subset-is-closed-and-bounded, thm-continuous-image-of-a-compact-space-is-compact, thm-algebra-of-complex-derivatives, thm-existence-of-complex-line-integrals-on-rectifiable-paths, def-partition-and-refinement, cor-archimedean-reciprocal, def-metric-ball, def-metric-topology, thm-metric-open-set-algebra, def-complex-contours-reversal-concatenation-and-closedness, thm-complex-coordinate-isometry-and-topology-transport]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/numerical-analysis-comprehensive-2026-10-16-owner-supplier-thm-contour-parameter-integrals-are-holomorphic-published-repair.json
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.2"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb C$ be a rectifiable contour with trace $\gamma^\ast$,
let $\Omega\subseteq\mathbb C$ be open, and let
$\varphi:\gamma^\ast\times\Omega\to\mathbb C$ be continuous, with
$z\mapsto\varphi(w,z)$ holomorphic on $\Omega$ for every $w\in\gamma^\ast$. Then

$$F(z):=\int_\gamma\varphi(\zeta,z)\,d\zeta$$

is defined for every $z\in\Omega$ and is holomorphic on $\Omega$.

Here $\gamma^\ast\times\Omega$ carries the Euclidean metric of $\mathbb R^4$
under the coordinate identification of the plane, so continuity of $\varphi$ is
joint continuity in the two variables together.

## Facts & Assumptions

**Given:** A rectifiable contour $\gamma:[a,b]\to\mathbb C$, an open $\Omega\subseteq\mathbb C$, and a continuous $\varphi:\gamma^\ast\times\Omega\to\mathbb C$ with $\varphi(w,\cdot)$ holomorphic on $\Omega$ for each $w\in\gamma^\ast$; write $\Phi(a+bi)=(a,b)$ and use $J(w,z)=(\Phi(w),\Phi(z))$ for product coordinates. By [[thm-complex-coordinate-isometry-and-topology-transport]] in each factor, $\lVert J(w,z)-J(w_0,z_0)\rVert_2^2=|w-w_0|^2+|z-z_0|^2$. Here locally uniform convergence means that every point has an open neighbourhood on which the convergence is uniform; this is the explicit convention of [[thm-weierstrass-convergence-holomorphic-functions]].

[L1] For a rectifiable contour $\gamma:[a,b]\to\mathbb C$ with $a<b$, a continuous $f$ on $\gamma^\ast$, a partition $a=t_0<\dots<t_r=b$ and tags $\xi_i\in[t_i,t_{i+1}]$, the difference between $\int_\gamma f\,dz$ and $\sum_{i<r}f(\gamma(\xi_i))(\gamma(t_{i+1})-\gamma(t_i))$ has modulus at most $\omega L(\gamma)$ whenever $\omega\ge0$ satisfies $|f(u)-f(v)|\le\omega$ for all $u,v\in\gamma^\ast$ ([[lem-tagged-sums-approximate-a-contour-integral]]).

[L2] If each $f_n:\Omega\to\mathbb C$ is holomorphic on an open $\Omega$ and $f_n\to f$ locally uniformly on $\Omega$, then $f$ is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

[L3] A continuous map from a compact metric space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[L4] A subset of $\mathbb R^n$ is compact exactly when it is closed and bounded, and every closed box is compact ([[thm-heine-borel-rn]]).

[L5] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

[L6] The continuous image of a compact subset is a compact subset ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L7] A linear combination $\alpha f+\beta g$ of functions complex differentiable at a point is complex differentiable there, with $(\alpha f+\beta g)'=\alpha f'+\beta g'$, and every constant function has derivative $0$ ([[thm-algebra-of-complex-derivatives]]).

[L8] For a rectifiable $\gamma:[a,b]\to\mathbb C$ and $f$ continuous on its trace, the complex line integral $\int_\gamma f\,dz$ exists ([[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]).

[L9] For $a<b$ and a natural $N\ge1$ the uniform partition of $[a,b]$ into $N$ parts has points $t_i=a+i(b-a)/N$ and mesh $(b-a)/N$ ([[def-partition-and-refinement]]).

[L10] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L11] $B(x,r)$ is the set of points at distance below $r$ from $x$ and $\bar B(x,r)$ the set at distance at most $r$; a set is open exactly when each of its points has some ball around it inside the set, open balls are open and closed balls are closed ([[def-metric-ball]], [[def-metric-topology]], [[thm-metric-open-set-algebra]]).

[L12] A complex contour is a rectifiable path $\gamma:[a,b]\to\mathbb C$, so $L(\gamma)$ is a nonnegative real ([[def-complex-contours-reversal-concatenation-and-closedness]]).

## Proof

**Proof technique:** direct.

1.1 The parameter interval $[a,b]$ is compact by [L4] and $\gamma$ is continuous, so the trace $\gamma^\ast$ is compact by [L6]. [given, L4, L6]

1.2 For each $z\in\Omega$ the map $\zeta\mapsto\varphi(\zeta,z)$ is continuous on $\gamma^\ast$, so $F(z)$ exists by [L8]. [given, L8]

1.3 Write $P_N$ for the uniform partition of $[a,b]$ into $N$ parts, with points $t^N_i=a+i(b-a)/N$, and set $S_N(z)=\sum_{i<N}\varphi(\gamma(t^N_i),z)\bigl(\gamma(t^N_{i+1})-\gamma(t^N_i)\bigr)$ for $z\in\Omega$, assuming $a<b$. Each summand is a constant multiple of a function holomorphic on $\Omega$, so $S_N$ is holomorphic on $\Omega$ by [L7]. [given, L7, L9]

2.1 Fix $z_0\in\Omega$. By [L11] choose $s>0$ with $B(z_0,s)\subseteq\Omega$ and put $\rho=s/2>0$, so $\bar B(z_0,\rho)\subseteq B(z_0,s)\subseteq\Omega$; put $K=\bar B(z_0,\rho)$, which is closed and bounded, hence compact by [L4]. By [L5] and step 1.1 both $\gamma^\ast$ and $K$ are closed and bounded, and their coordinate images have these properties by the given isometry. Their product is bounded because squared product distance is the sum of the two squared distances. It is closed because a point outside the product has a coordinate outside one closed factor; a ball in the open complement of that factor lifts, by the $1$-Lipschitz product projection, to a product-metric ball missing the product. Hence $J[\gamma^\ast\times K]$ is closed and bounded in $\mathbb R^4$ and compact by [L4]; the distance identity for $J$ transfers this compactness back by carrying open covers and finite subcovers in both directions; since $\varphi$ is continuous there, [L3] makes it uniformly continuous on $\gamma^\ast\times K$. [given, step 1.1, L3, L4, L5, L11]

3.1 Let $\varepsilon>0$. Step 2.1 gives $\eta>0$ such that $|\varphi(u,z)-\varphi(v,z)|\le\varepsilon$ whenever $u,v\in\gamma^\ast$ satisfy $|u-v|<\eta$ and $z\in K$. The interval $[a,b]$ is compact by [L4], so $\gamma$ is uniformly continuous on it by [L3]: there is $\delta>0$ with $|\gamma(t)-\gamma(s)|<\eta$ whenever $|t-s|<\delta$. By [L10] applied to $\delta/(b-a)$ there is a natural $n\ge1$ with $(b-a)/n<\delta$. [step 2.1, L3, L4, L10, choose]

4.1 Let $N\ge n$ and $z\in K$. Every two parameters in a subinterval of $P_N$ differ by at most $(b-a)/N\le(b-a)/n<\delta$, so any two points of $\gamma([t^N_i,t^N_{i+1}])$ are within $\eta$ of each other and step 3.1 bounds $|\varphi(u,z)-\varphi(v,z)|$ by $\varepsilon$ for such points. Applying [L1] to $f=\varphi(\cdot,z)$ on each subarc, with $\omega=\varepsilon$ on that subarc, and summing the subarc bounds gives $|F(z)-S_N(z)|\le\varepsilon L(\gamma)$. [step 1.2, step 1.3, step 3.1, L1, L12]

5.1 Since $\varepsilon>0$ was arbitrary and $L(\gamma)$ is a fixed nonnegative real by [L12], step 4.1 says $S_N\to F$ uniformly on $K$, hence uniformly on the open neighbourhood $B(z_0,\rho)$ of $z_0$; as $z_0\in\Omega$ was arbitrary, $S_N\to F$ locally uniformly on $\Omega$, and [L2] with step 1.3 makes $F$ holomorphic on $\Omega$. If instead $a=b$ then $\int_\gamma f\,dz=0$ for every continuous $f$, so $F$ is identically $0$ and holomorphic by [L7]. [step 1.3, step 4.1, L2, L7, L11, L12] ∎
