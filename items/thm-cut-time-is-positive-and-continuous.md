---
id: thm-cut-time-is-positive-and-continuous
kind: theorem
title: Cut time is positive and continuous
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-cut-time-in-a-unit-tangent-direction
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-metric-space
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-speed-and-length
  - lem-finite-dimensional-unit-spheres-are-sequentially-compact
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - prop-exponential-map-scales-geodesic-time
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - thm-characterization-of-a-cut-point
  - thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic
  - thm-hopf-rinow
  - thm-riemannian-distance-is-a-metric
  - thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173-190: the cut locus and the fact that the cut time is a continuous positive function of the direction; the two semicontinuity arguments are carried out here."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 23, section 23.2, printed pp.163-170: the cut locus, Lemma 23.2.1-23.2.2 and the regularity of the distance function; the local-invertibility argument for lower semicontinuity follows its proof strategy."
---

## Statement

Assume exactly the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$,
carried by the declared exponential-domain, Hopf-Rinow, cut-time, conjugacy
and characterization interfaces. Let $(M,g)$ be a complete, connected,
boundaryless, finite-dimensional Riemannian manifold, let $p\in M$, let
$$S_pM=\{v\in T_pM:|v|_g=1\}$$
be the unit tangent sphere and let $c:=c_p:S_pM\to(0,+\infty]$ be the cut time
from [[def-cut-time-in-a-unit-tangent-direction]], the target carrying the
order inherited from the extended real line.

(a) **Positivity.** $c(v)>0$ for every $v\in S_pM$.

(b) **Continuity.** $c$ is continuous. Concretely, whenever $v_k\to v$ in
$S_pM$: if $c(v)<+\infty$ then $c(v_k)\to c(v)$, and if $c(v)=+\infty$ then
for every $M>0$ there is $k_0$ with $c(v_k)>M$ for all $k\ge k_0$.

(c) **Uniform positivity.** If $S_pM\ne\varnothing$ then
$\delta_p:=\inf\{c(v):v\in S_pM\}>0$; this infimum equals $+\infty$ exactly
when $c\equiv+\infty$.

In dimension zero $S_pM=\varnothing$ and (a), (b) are vacuous. No compactness
of $M$ is assumed, and exactly $\mathrm{AC}_\omega$ is used.

## Facts & Assumptions

**Given:** The complete connected boundaryless finite-dimensional Riemannian manifold $(M,g)$, the point $p\in M$, the unit tangent sphere $S_pM$, and the cut time $c=c_p$ with the minimizing-time sets $A_p(v)=\{t\ge0:d_g(p,\exp_p(tv))=t\}$.

[A1] The choice assumption is $\mathrm{AC}_\omega$ of [[def-countable-choice]], inherited through the declared Hopf-Rinow, exponential-domain, conjugacy and characterization suppliers. No full Axiom of Choice is used.

[F1] For $v\in S_pM$ the cut time is $c_p(v)=\sup\{t>0:d_g(p,\exp_p(tv))=t\}\in(0,+\infty]$, the supremum being taken over a nonempty set, and $\gamma_v(t):=\exp_p(tv)$ is defined for every real $t$ ([[def-cut-time-in-a-unit-tangent-direction]]).

[F2] For each $v\in S_pM$ the set $A_p(v)$ is an initial interval: if $T\in A_p(v)$ and $0\le s\le T$ then $s\in A_p(v)$; in particular, since $c_p(v)$ is the least upper bound of the positive elements of $A_p(v)$, every $t$ with $0\le t<c_p(v)$ satisfies $t\in A_p(v)$, that is $d_g(p,\gamma_v(t))=t$ ([[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]]).

[F3] On the complete manifold $(M,g)$ the fibre exponential domain is all of $T_pM$, and every two points $x,y\in M$ are joined by a minimizing geodesic: there is $w\in T_xM$ with $\exp_x(w)=y$, $|w|_{g_x}=d_g(x,y)$, the curve $t\mapsto\exp_x(tw)$ on $[0,1]$ having length $d_g(x,y)$ ([[thm-hopf-rinow]]).

[F4] **Characterization of the cut point.** (b)(1): if $t>0$ and $\gamma_v(0)=p$, $\gamma_v(t)$ are conjugate along $\gamma_v|_{[0,t]}$, then $c_p(v)\le t$. (b)(2): if $t>0$ and $\sigma:[0,t]\to M$ is a unit-speed minimizing geodesic with $\sigma(0)=p$, $\sigma(t)=\gamma_v(t)$ and $\sigma'(0)\ne v$, then $c_p(v)\le t$ ([[thm-characterization-of-a-cut-point]]).

[F5] For $w\in\mathcal E_p$ with $w\ne0$, the points $p$ and $\exp_p(w)$ are conjugate along $t\mapsto\exp_p(tw)$ on $[0,1]$ if and only if $d(\exp_p)_w$ is singular, and equivalently $\exp_p$ fails to be a local diffeomorphism at $w$ ([[thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic]]).

[F6] A smooth map $F$ is a local diffeomorphism when every point has an open neighbourhood $U$ with $F(U)$ open and the corestriction $F|_U^{F(U)}:U\to F(U)$ a diffeomorphism onto the open submanifold $F(U)$; a diffeomorphism is by definition bijective ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F7] The exponential map is smooth on its domain; since $\mathcal E_p=T_pM$ by [F3], each $\exp_p:T_pM\to M$ is smooth and hence continuous ([[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]]).

[F8] The Riemannian distance is a metric ([[thm-riemannian-distance-is-a-metric]]), and a metric satisfies symmetry (M2) and the triangle inequality (M3) ([[def-metric-space]]); consequently $|d_g(p,q)-d_g(p,q')|\le d_g(q,q')$ for all $q,q'\in M$.

[F9] The unit tangent sphere $S_pM$ is sequentially compact: every sequence in $S_pM$ has a subsequence converging in the norm metric of $T_pM$ to a point of $S_pM$ ([[lem-finite-dimensional-unit-spheres-are-sequentially-compact]]).

[F10] For $u\in T_pM$ and real $s$ one has $\exp_p(su)=\gamma_{p,u}(s)$, the maximal geodesic with initial value $p$ and initial velocity $u$ ([[prop-exponential-map-scales-geodesic-time]]).

[F11] A geodesic of the Levi-Civita connection has constant speed ([[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]]); the length of a piecewise $C^1$ curve is the integral of its speed, so a unit-speed curve on a parameter interval of length $t$ has length $t$ ([[def-riemannian-speed-and-length]]); and the Riemannian distance is the infimum of lengths of joining curves, so a curve whose length equals the distance between its endpoints is minimizing ([[def-riemannian-distance-on-a-connected-manifold]]).

## Proof

**Proof technique:** minimizing times are read off as distance equalities; upper semicontinuity contradicts minimality at a fixed later time, and lower semicontinuity uses local invertibility of $\exp_p$ plus the two-minimizer alternative at a hypothetical drop.

1.1 Near-minimal times and their stability. [F1, F2, given]
Fix $v\in S_pM$. By [F1] the set over which the supremum defining $c(v)$ is taken is nonempty and $c(v)>0$, which is (a). If $0\le t<c(v)$, then $t$ is not an upper bound of that set, so there is $T\in A_p(v)$ with $T>t$; the initial-interval property [F2] gives $t\in A_p(v)$, that is $d_g(p,\gamma_v(t))=t$. [F1, F2, given]

2.1 Upper semicontinuity. [F7, F8, F1, given, step 1.1]
Let $u_n\to v$ in $S_pM$. If $c(v)=+\infty$ there is nothing to prove, so assume $c(v)<+\infty$ and suppose for contradiction that $\limsup_n c(u_n)>c(v)$. Then there are $\eta>0$ and a subsequence with $c(u_{n_j})\ge c(v)+\eta$ for all $j$; put $t:=c(v)+\eta/2$, so that $c(v)<t<c(u_{n_j})$ for every $j$. By step 1.1, $d_g(p,\exp_p(tu_{n_j}))=t$. Since $tu_{n_j}\to tv$ in $T_pM$ and $\exp_p$ is continuous [F7], $\exp_p(tu_{n_j})\to\exp_p(tv)=\gamma_v(t)$; the distance function is continuous by the triangle inequality [F8], so $d_g(p,\gamma_v(t))=t$, that is $t\in A_p(v)$ and hence $t\le c(v)$ by [F1]. This contradicts $t>c(v)$. Therefore $\limsup_{n}c(u_n)\le c(v)$ whenever $u_n\to v$. [F7, F8, F1, given, step 1.1]

2.2 Local invertibility below the cut time. [F4, F5, F6, given, step 1.1]
Fix $t$ with $0<t<c(v)$. By step 1.1, $d_g(p,\exp_p(tv))=t$, and $tv\ne0$. The differential $d(\exp_p)_{tv}$ is nonsingular: otherwise [F5] would make $p$ and $\exp_p(tv)=\gamma_v(t)$ conjugate along $\gamma_v|_{[0,t]}$, so that clause (b)(1) of the characterization [F4] would give $c(v)\le t$, contrary to the choice of $t$. Hence $\exp_p$ is a local diffeomorphism at $tv$ [F5], so by [F6] there are an open neighbourhood $U\subseteq T_pM$ of $tv$ and an open set $W\subseteq M$ such that $\exp_p|_U:U\to W$ is a diffeomorphism onto $W$, and in particular $\exp_p|_U$ is injective. [F4, F5, F6, given, step 1.1]

3.1 Lower semicontinuity: no drop below $c(v)$. [F3, F4, F7, F8, F9, F10, F11, given, step 1.1, step 2.2]
Let $u_n\to v$ in $S_pM$ and suppose for contradiction that $\liminf_n c(u_n)<t<c(v)$ for some $t$; passing to a subsequence, assume $c(u_n)<t$ for every $n$. Put $q_n:=\exp_p(tu_n)=\gamma_{u_n}(t)$, so that $q_n\to\gamma_v(t)=:q$ by continuity of $\exp_p$ [F7]. Since $c(u_n)<t$, step 1.1 gives $d_g(p,q_n)<t$, so by Hopf-Rinow [F3] there is $w_n\in T_pM$ with $\exp_p(w_n)=q_n$ and $|w_n|_g=d_g(p,q_n)<t$; by the distance continuity [F8] and step 1.1, $|w_n|_g\to d_g(p,q)=t$. By the sequential compactness of the unit sphere [F9] applied to $w_n/|w_n|_g\in S_pM$ (defined for large $n$), pass to a subsequence with $w_{n_j}/|w_{n_j}|_g\to u\in S_pM$; then $w_{n_j}=|w_{n_j}|_g\,(w_{n_j}/|w_{n_j}|_g)\to tu$, and continuity of $\exp_p$ gives $\exp_p(tu)=q$. There are two cases. If $u=v$, then $tu\in U$ and, for all large $j$, $tu_{n_j}\in U$ and $w_{n_j}\in U$ (both kinds of points converge to $tu=tv$); since $\exp_p(w_{n_j})=q_{n_j}= \exp_p(tu_{n_j})$ and $\exp_p|_U$ is injective, $w_{n_j}=tu_{n_j}$, so $|w_{n_j}|_g=t$, contradicting $|w_{n_j}|_g<t$. If $u\ne v$, then $\sigma(s):=\exp_p(su)$ is, by [F10] and [F11], a unit-speed geodesic on $[0,t]$ with $\sigma(0)=p$, $\sigma(t)=\exp_p(tu)=q=\gamma_v(t)$, $\sigma'(0)=u\ne v$, and length $L(\sigma|_{[0,t]})=t=d_g(p,q)$, so $\sigma$ is a minimizing geodesic; clause (b)(2) of [F4] then gives $c(v)\le t$, contradicting $t<c(v)$. Both cases are impossible, so for every $t<c(v)$ there is a neighbourhood of $v$ on which $c\ge t$; equivalently $\liminf_n c(u_n)\ge c(v)$ whenever $u_n\to v$. [F3, F4, F8, F9, F10, F11, given, step 2.2]

4.1 Continuity in the extended topology. [F1, step 1.1, step 2.1, step 3.1]
If $c(v)<+\infty$, step 2.1 gives $\limsup c(u_n)\le c(v)$ and step 3.1 gives $\liminf c(u_n)\ge c(v)$ for every $u_n\to v$, hence $c(u_n)\to c(v)$: the function is continuous at $v$. If $c(v)=+\infty$, then for every $t>0$ step 3.1 (applied with this $t$, which satisfies $t<c(v)$) yields a neighbourhood of $v$ on which $c\ge t$; since $t$ is arbitrary, $c(u_n)\to+\infty$, which is exactly continuity at $+\infty$ in the order topology of $(0,+\infty]$. This proves (b); combined with step 1.1 it gives (a) and (b). [F1, step 2.1, step 3.1]

4.2 Uniform positivity. [F9, F1, step 1.1, step 3.1]
Assume $S_pM\ne\varnothing$ and write $\delta_p=\inf\{c(v):v\in S_pM\}$. Suppose $\delta_p=0$. Then for each $k\ge1$ the number $1/k>0$ is not a lower bound of the set of cut times, so there is $v_k\in S_pM$ with $c(v_k)<1/k$. By the sequential compactness of the sphere [F9] pass to a subsequence $v_{k_j}\to v\in S_pM$; lower semicontinuity (step 3.1) gives $c(v)\le\liminf_j c(v_{k_j})\le\lim_j 1/k_j=0$, contradicting the positivity $c(v)>0$ of step 1.1. Hence $\delta_p>0$. If $c\equiv+\infty$ then $\delta_p=+\infty$; conversely, if $\delta_p=+\infty$ then $c(v)\ge\delta_p$ forces $c(v)=+\infty$ for every $v$, since $c(v)\in(0,+\infty]$. This proves (c). [F9, F1, step 1.1, step 3.1]

4.3 Boundary and choice audit. [A1, F1, F3, F9, step 1.1, step 3.1]
In dimension zero, $S_pM=\varnothing$ by [F1] and the statements (a), (b) are vacuous, while (c) is vacuous and $\delta_p$ is not evaluated; in dimension one $S_pM$ consists of the two unit vectors and all arguments above apply verbatim, with [F9] covering the two-point sphere. The empty manifold has no point $p$. The zero vector is never passed to the exponential differential: step 2.2 uses $tv\ne0$ because $t>0$ and $|v|_g=1$. Completeness is used exactly through [F3] (surjectivity of the exponential and existence of minimizing geodesics) and through the full exponential domain in [F7]; no compactness of $M$ is assumed, and the only compactness used is the sequential compactness of the finite-dimensional sphere $S_pM$ [F9]. The hypothesis $c(v)<+\infty$ versus $c(v)=+\infty$ is handled in both directions in step 4.1, so no endpoint of the extended range is silently excluded. Exactly the declared $\mathrm{AC}_\omega$ of [A1] is used here: in step 3.1 it selects a sequence $(w_n)$ of minimizing initial velocities from the nonempty Hopf–Rinow witness sets for $(q_n)$, and in step 4.2 it selects $(v_k)$ from the nonempty sets $\{u\in S_pM:c(u)<1/k\}$. Passing to subsequences then uses [F9]. Neither selection follows from separate existential instantiation without countable choice. [A1, F1, F3, F9, step 1.1, step 3.1]

$\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.173-190, discusses the cut locus and the continuity of the cut time as a function of the unit direction; Datar, *Lectures on Riemannian Geometry*, Lecture 23, section 23.2, printed pp.163-170, gives the cut-locus characterization (Lemma 23.2.2) used here. The upper and lower semicontinuity arguments, including the local-invertibility step and the two-case contradiction, are carried out above from the pair's own suppliers; nothing is quoted.
