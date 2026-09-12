---
id: ex-normal-coordinates-on-the-round-sphere
kind: example
title: Normal coordinates on the round sphere
status: draft
origin: pipeline
pipeline_run: phase-2-next-17
deps: [def-normal-neighborhood-and-normal-coordinate-chart, thm-existence-of-normal-neighborhoods, ex-great-circles-as-round-sphere-geodesics, def-domain-and-exponential-map-of-a-connection, def-countable-choice, thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous, thm-sine-cosine-signs-monotonicity-and-ranges, cor-pi-is-the-first-positive-sine-zero, thm-quarter-turn-values-and-shift-formulas]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Example 17.1.3 and Definition 17.2.1, pp. 128 and 130
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. Let $n\geq1$, let $p\in S^n$ on the unit round sphere, and supply an orthonormal basis $e=(e_1,\ldots,e_n)$ of $T_pS^n$. The exponential map is defined on all of $T_pS^n$ and is
$$\exp_p(v)=\begin{cases}\cos|v|\,p+\dfrac{\sin|v|}{|v|}v,&v\ne0,\\p,&v=0.\end{cases}$$
The second branch is the continuous value of the first at $v=0$. The restriction of $\exp_p$ to the open ball $B_\pi(0_p)=\{v:|v|<\pi\}$ is injective. Consequently, on any normal domain $D\subseteq B_\pi(0_p)$, if $v=\sum_i v^ie_i$, then the associated normal coordinates satisfy
$$x_e^i(\exp_p(v))=v^i.$$
At radius $\pi$, the distinct vectors $\pi e_1$ and $-\pi e_1$ both exponentiate to the antipode $-p$, so injectivity is not extended to the closed ball.

## Facts & Assumptions

**Given:** The point $p\in S^n$, $n\geq1$, its tangent inner product, and the supplied orthonormal basis $e$.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$. It is used only through the current library definitions in [F1]--[F2], not in the explicit sphere calculation.

[F1] [[def-domain-and-exponential-map-of-a-connection]] defines $\exp_p(v)$ as the value at time one of the geodesic with initial data $(p,v)$ and carries the assumption [A1].

[F2] Under [A1], [[thm-existence-of-normal-neighborhoods]] supplies a normal domain at $p$, while [[def-normal-neighborhood-and-normal-coordinate-chart]] defines such a domain and its coordinate map from the inverse of $\exp_p$.

[F3] [[ex-great-circles-as-round-sphere-geodesics]] proves the all-real solution of the round-sphere geodesic initial-value problem and includes the zero-speed constant case.

[L1] Sine and cosine are differentiable and hence continuous ([[thm-sine-and-cosine-derivatives]], [[cor-differentiable-implies-continuous]]).

[L2] Cosine is strictly decreasing on $[0,\pi]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[L3] Sine is positive on $(0,\pi)$ and $\sin\pi=0$ ([[cor-pi-is-the-first-positive-sine-zero]]).

[L4] The endpoint value of cosine is $\cos\pi=-1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

## Verification

1.1 Let $v\in T_pS^n$. If $v=0$, [F3] gives the constant geodesic $\gamma(t)=p$. If $v\ne0$, put $r=|v|$ and $u=v/r$; then $p,u$ are orthonormal and [F3] gives the geodesic $$\gamma_v(t)=\cos(rt)p+\sin(rt)u.$$ It is defined for every real $t$, so $v$ lies in the exponential domain. Evaluating at time one as in [F1] yields the two displayed branches for $\exp_p(v)$. [A1, F1, F3, given]

1.2 By [F2], there is a normal domain $D_0$ at $p$. Its intersection $D_0\cap B_\pi(0_p)$ is open and star-shaped about zero, and restricting the diffeomorphism $\exp_p:D_0\to\exp_p(D_0)$ gives a diffeomorphism on that intersection, so at least one normal domain lies in $B_\pi(0_p)$. Now let $D\subseteq B_\pi(0_p)$ be any normal domain at $p$ and let $v=\sum_i v^ie_i\in D$. The definition in [F2] gives $$x_e(\exp_p(v))=E_e^{-1}(v)=(v^1,\ldots,v^n),$$ which proves the asserted formula for every such $D$. [A1, F2]

2.1 For $v\ne0$, with $r=|v|$, step 1.1 gives $$|\exp_p(v)-p|\leq|\cos r-1|+|\sin r|.$$ As $v\to0$, one has $r\to0$, and [L1] makes the right side tend to zero. Thus the nonzero branch converges to $p=\exp_p(0)$, proving the asserted continuous value without assigning a value to $v/|v|$ at zero. [L1, step 1.1, algebra]

2.2 Suppose $v,w\in B_\pi(0_p)$ and $\exp_p(v)=\exp_p(w)$. Put $r=|v|$ and $s=|w|$. Taking the Euclidean inner product with $p$ in the formula of step 1.1 gives $\cos r=\cos s$, because $v,w\perp p$. Since $r,s\in[0,\pi)$ and cosine is strictly decreasing there by [L2], $r=s$. If this common value is zero, then $v=w=0$. If it is positive, [L3] gives $\sin r>0$, and equality of the components perpendicular to $p$ gives $(\sin r/r)v=(\sin r/r)w$, hence $v=w$. This proves injectivity on the open ball, including all zero/nonzero combinations. [L2, L3, step 1.1, algebra]

3.1 The vectors $\pi e_1$ and $-\pi e_1$ are distinct because $n\geq1$ and $e_1$ is a unit vector. Step 1.1 and [L3]--[L4] give $$\exp_p(\pi e_1)=-p=\exp_p(-\pi e_1).$$ Thus radius $\pi$ is the first boundary at which the antipodal collision can occur: step 2.2 excludes collisions at smaller radii, while the displayed pair realizes one at radius $\pi$. The source ball is open, so its endpoint is not silently included. Dimension zero is outside the stated $n\geq1$ claim; there the tangent space is the singleton $\{0_p\}$ and no antipodal-direction pair exists. An empty sphere has no supplied $p$. The explicit calculations and displayed collision pair make no choices; $\mathrm{AC}_\omega$ is used exactly through the inherited exponential/normal-neighborhood framework recorded in [A1]--[F2]. [L3, L4, step 1.1, step 2.2] ∎

## Source locator

Datar, Example 17.1.3, printed p. 128 (PDF p. 136), gives the coordinate formula at the north pole of $S^2$. Definition 17.2.1, printed p. 130 (PDF p. 138), defines geodesic normal neighborhoods and charts. The proof above derives the formula for every $S^n$, proves continuity at zero and injectivity on $|v|<\pi$, and supplies the collision witnesses at radius $\pi$.
