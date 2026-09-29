---
id: cor-a-geodesic-segment-before-its-first-conjugate-point-is-locally-energy-minimizing
kind: corollary
title: A geodesic segment before its first conjugate point is locally energy minimizing
status: draft
origin: pipeline
deps:
  - def-countable-choice
  - def-h-one-riemannian-curves-and-half-energy
  - lem-h-one-local-length-comparison-for-a-conjugate-free-geodesic
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - thm-holder-inequality-for-integrals
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173-190: Jacobi fields and the local minimizing property before the first conjugate point; the H1 equality analysis is derived here."
    - title: "Zuoqin Wang, Riemannian Geometry (USTC, 2024 Spring), Lecture 20: The index form"
      url: http://staff.ustc.edu.cn/~wangzuoq/Courses/24S-RiemGeom/Notes/Lec20.pdf
      locator: "Theorem 1.1(1) and Lemma 1.3: isolated length minimization via local exponential inverse branches."
---

## Statement

Assume exactly the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$.
Let $(M,g)$ be a connected finite-dimensional Riemannian manifold without
boundary, $a<b$, and $\gamma:[a,b]\to M$ an affinely parametrized
Levi-Civita geodesic such that for no $t\in(a,b]$ are $\gamma(a)$ and
$\gamma(t)$ conjugate along $\gamma|_{[a,t]}$. Let $E$ be the half-energy
of $H^1$ Riemannian curves.

Then there is $\varepsilon>0$ such that every fixed-endpoint $H^1$ curve
$\alpha:[a,b]\to M$ satisfying
$$\alpha(a)=\gamma(a),\qquad\alpha(b)=\gamma(b),\qquad\sup_{t\in[a,b]}d_g(\alpha(t),\gamma(t))<\varepsilon$$
has $E(\alpha)\ge E(\gamma)$, and equality holds if and only if
$\alpha=\gamma$. Thus $\gamma$ is a strict local half-energy minimizer
among fixed-endpoint $H^1$ curves, also in the $H^1$ path topology.
Constant geodesics are included; no completeness, unit-speed assumption
or compactness of $M$ is needed.

## Facts & Assumptions

**Given:** The manifold and conjugate-free geodesic in the statement, and
an admissible fixed-endpoint $H^1$ curve $\alpha$. Put
$v=\dot\gamma(a)$ and $T=b-a>0$.

[A1] The inherited choice assumption is Countable Choice
([[def-countable-choice]]).

[F1] For $H^1$ Riemannian curves, the a.e. tangent velocity belongs to
$L^2$, $L_g(\alpha)=\int_a^b|\dot\alpha|_g$ and
$E(\alpha)=\frac12\int_a^b|\dot\alpha|_g^2$; smooth superposition and
coordinate changes obey the a.e. $L^2$ chain rule. The $H^1$ path topology
embeds in the uniform path topology
([[def-h-one-riemannian-curves-and-half-energy]]).

[F2] The $H^1$ local length comparison gives $\varepsilon>0$ such that
$L_g(\alpha)\ge L_g(\gamma)$ in that uniform neighborhood; if equality
holds, then either both curves are the same constant curve or
$\alpha=\gamma\circ\tau$ for an absolutely continuous nondecreasing
$H^1$ surjection $\tau:[a,b]\to[a,b]$ fixing the endpoints
([[lem-h-one-local-length-comparison-for-a-conjugate-free-geodesic]]).

[F3] The geodesic has constant speed $|v|_g$, so
$L_g(\gamma)=T|v|_g$ and $E(\gamma)=T|v|_g^2/2$
([[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]],
[[def-h-one-riemannian-curves-and-half-energy]]).

[F4] H\"older with exponents $2,2$ bounds the integral of a product
by the product of its $L^2$ norms
([[thm-holder-inequality-for-integrals]]). A nonnegative measurable
function with zero integral vanishes almost everywhere
([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

## Proof

1.1 The full $H^1$ energy bound. [F1, F2, F3, F4, given]
Take $\varepsilon$ from [F2] and an admissible $\alpha$. Applying [F4]
to $s=|\dot\alpha|_g\in L^2$ and the constant function $1$, using [F1],
gives $L_g(\alpha)^2\le T\int_a^b s^2=2T E(\alpha)$. Both lengths are
nonnegative and [F2] gives $L_g(\alpha)\ge L_g(\gamma)$. By [F3],
$$E(\alpha)\ge\frac{L_g(\alpha)^2}{2T}\ge\frac{L_g(\gamma)^2}{2T}=E(\gamma).$$
This argument uses the $L^2$ speed of every $H^1$ competitor, not a
smooth approximation of the equality case. [F1, F2, F3, F4, given]

2.1 Equality forces constant speed and the radial reparametrization. [F2, F3, F4, step 1.1, given]
If $E(\alpha)=E(\gamma)$, both inequalities in step 1.1 are equalities.
Thus $L_g(\alpha)=L_g(\gamma)$. Put $s=|\dot\alpha|_g$ and
$m=L_g(\alpha)/T$. Expanding the square using $\int s=Tm$ gives
$\int_a^b(s-m)^2=\int_a^bs^2-Tm^2=2E(\alpha)-L_g(\alpha)^2/T=0$.
By the zero-integral clause of [F4], $s=m$ a.e., and by [F3]
$m=|v|_g$. If $v=0$, [F2] already gives
$\alpha=\gamma$. Suppose $v\ne0$. The equality clause of [F2]
produces an absolutely continuous nondecreasing $H^1$ surjection
$\tau$ fixing $a,b$ and satisfying $\alpha=\gamma\circ\tau$.
[F2, F3, F4, step 1.1]

3.1 The only equal-energy reparametrization is the identity. [F1, F3, step 2.1, given]
The a.e. chain rule [F1] applied to the smooth geodesic and $H^1$
function $\tau$ gives
$\dot\alpha(t)=\dot\gamma(\tau(t))\tau'(t)$ a.e. Since $\tau$
is nondecreasing and a primitive, $\tau'\ge0$ a.e.; [F3] then gives
$|\dot\alpha|_g=|v|_g\tau'$ a.e. By step 2.1 the left side equals
$|v|_g>0$ a.e., so $\tau'=1$ a.e. The primitive identity for $\tau$
and $\tau(a)=a$ yield $\tau(t)=a+\int_a^t1\,ds=t$ for every $t$.
Hence $\alpha=\gamma$. Conversely $\gamma$ is admissible and has its
own energy, proving the equality clause. [F1, F3, step 2.1]

4.1 Locality and boundaries. [A1, F1, step 1.1, step 3.1, given]
The radius in [F2] is positive, and [F1] makes its uniform neighborhood
an open neighborhood in the fixed-endpoint $H^1$ path topology. The preceding
steps prove strictness there. For a constant geodesic, step 2.1
handles equality, including dimension zero. Only [A1] and the stated
local suppliers are used; no global compactness or geodesic completeness
enters. [A1, F1, step 1.1, step 3.1] ∎
