---
id: prop-injectivity-radius-is-the-infimum-of-cut-times
kind: proposition
title: Injectivity radius is the infimum of cut times
status: draft
origin: pipeline
deps:
  - cor-the-differential-of-a-diffeomorphism-is-an-isomorphism
  - def-countable-choice
  - def-cut-point-and-cut-locus-of-a-point
  - def-cut-time-in-a-unit-tangent-direction
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-infimum
  - def-injectivity-radius-at-a-point-and-of-a-manifold
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-speed-and-length
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - prop-conjugate-points-and-multiplicity-are-invariant-under-affine-reparametrization
  - prop-exponential-map-scales-geodesic-time
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - thm-characterization-of-a-cut-point
  - thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic
  - thm-existence-of-normal-neighborhoods
  - thm-hopf-rinow
  - thm-infimum-property
  - thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth
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
      locator: "Chapter 10, printed pp.173-190: the injectivity radius at a point and the comparison with the cut locus; the equivalence with the infimum of cut times is derived here."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 23, sections 23.2-23.3, printed pp.163-172: the cut locus, Definition 23.3.3 of the injectivity radius, and the relation with the cut times."
---

## Statement

Assume exactly the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$,
carried by the declared exponential-domain, characterization and
normal-neighbourhood suppliers. Let $(M,g)$ be a complete, connected,
boundaryless, finite-dimensional Riemannian manifold, let $p\in M$, let
$S_pM=\{v\in T_pM:|v|_g=1\}$ with cut time $c:=c_p:S_pM\to(0,+\infty]$, and
let $\operatorname{inj}(p)$ be the injectivity radius at $p$ of
[[def-injectivity-radius-at-a-point-and-of-a-manifold]]. Put
$$\delta:=\inf\{c(v):v\in S_pM\}\in[0,+\infty],$$
with the convention $\inf\varnothing=+\infty$: concretely, $\delta$ is the
ordinary infimum of the set of finite cut times when there is one, and
$\delta=+\infty$ when there is no finite cut time, in particular when every
cut time is $+\infty$ or $S_pM=\varnothing$. Then
$$\operatorname{inj}(p)=\inf\{c(v):v\in S_pM\}=\delta,$$
and in particular $\delta\in(0,+\infty]$. In dimension zero
$S_pM=\varnothing$, so $\delta=+\infty$, and $\operatorname{inj}(p)=+\infty$
as well; the two dimension-zero values are derived in step 4.1 below, not
imported from elsewhere. No compactness of $M$ is assumed.

## Facts & Assumptions

**Given:** The complete connected boundaryless finite-dimensional Riemannian manifold $(M,g)$, the point $p\in M$, the unit sphere $S_pM$, the cut time $c=c_p$ and the number $\delta$ above.

[A1] The choice assumption is $\mathrm{AC}_\omega$ of [[def-countable-choice]], inherited through the declared suppliers; no full Axiom of Choice is used.

[F1] The injectivity radius at $p$ is $\operatorname{inj}(p)=\sup\mathcal R_p$, where $\mathcal R_p=\{r>0:B_r(0_p)\subseteq\mathcal E_p\text{ and } \exp_p|_{B_r(0_p)}\text{ is a diffeomorphism onto its image}\}$, and this supremum is an extended number in $(0,+\infty]$ ([[def-injectivity-radius-at-a-point-and-of-a-manifold]]).

[F2] The cut time is $c(v)=\sup\{t>0:d_g(p,\exp_p(tv))=t\}\in(0,+\infty]$ for $v\in S_pM$ ([[def-cut-time-in-a-unit-tangent-direction]]).

[F3] If $0\le t<c(v)$, then $t\in A_p(v)$, that is $d_g(p,\gamma_v(t))=t$; and if $c(v)<+\infty$ then $c(v)\in A_p(v)$, so $d_g(p,\gamma_v(c(v)))=c(v)$ and the cut point is $\gamma_v(c(v))=\exp_p(c(v)v)$ ([[def-cut-point-and-cut-locus-of-a-point]], [[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]]).

[F4] **Characterization of the cut point.** (a) If $c(v)<+\infty$, then either $p$ and $\gamma_v(c(v))$ are conjugate along $\gamma_v|_{[0,c(v)]}$, or there is a unit-speed minimizing geodesic $\sigma:[0,c(v)]\to M$ with $\sigma(0)=p$, $\sigma(c(v))=\gamma_v(c(v))$ and $\sigma'(0)\ne v$. (b)(1) If $t>0$ and $p,\gamma_v(t)$ are conjugate along $\gamma_v|_{[0,t]}$, then $c(v)\le t$. (b)(2) If $t>0$ and $\sigma:[0,t]\to M$ is a unit-speed minimizing geodesic with $\sigma(0)=p$, $\sigma(t)=\gamma_v(t)$ and $\sigma'(0)\ne v$, then $c(v)\le t$ ([[thm-characterization-of-a-cut-point]]).

[F5] For $w$ in the exponential domain with $w\ne0$, the points $p$ and $\exp_p(w)$ are conjugate along $t\mapsto\exp_p(tw)$ on $[0,1]$ exactly when $d(\exp_p)_w$ is singular, and equivalently exactly when $\exp_p$ fails to be a local diffeomorphism at $w$ ([[thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic]]); conjugacy of a pair of endpoints along a geodesic, and the multiplicity when they are conjugate, are unchanged when the geodesic is composed with an affine bijection of its parameter interval, with the endpoints corresponding under the bijection ([[prop-conjugate-points-and-multiplicity-are-invariant-under-affine-reparametrization]]).

[F6] There is an open star-shaped neighbourhood $\widetilde U_p$ of $0_p$ in $T_pM$, contained in $\mathcal E_p$, such that $\exp_p:\widetilde U_p\to\exp_p(\widetilde U_p)$ is a diffeomorphism onto an open neighbourhood of $p$ ([[thm-existence-of-normal-neighborhoods]]).

[F7] A diffeomorphism is a bijective smooth map with smooth inverse, so it is injective; a local diffeomorphism at a point restricts to a diffeomorphism from some open neighbourhood of that point onto an open submanifold ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]). For a diffeomorphism $F$ the differential $dF_x$ is a linear isomorphism at every point $x$ of its domain ([[cor-the-differential-of-a-diffeomorphism-is-an-isomorphism]]).

[F8] For $u\in T_pM$ and real $s$, $\exp_p(su)=\gamma_{p,u}(s)$ is the maximal geodesic with initial value $p$ and initial velocity $u$ ([[prop-exponential-map-scales-geodesic-time]]); a geodesic of the Levi-Civita connection has constant speed ([[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]]). The length of a piecewise $C^1$ curve is the integral of its speed, so a unit-speed curve on a parameter interval of length $t$ has length $t$ ([[def-riemannian-speed-and-length]]), and the Riemannian distance is the infimum of lengths of joining curves, so a curve whose length equals the distance between its endpoints is minimizing ([[def-riemannian-distance-on-a-connected-manifold]]).

[F9] The exponential map is smooth on its domain ([[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]]).

[F10] If $S\subseteq\mathbb R$ is nonempty and bounded below, then $\inf S$ exists and is a lower bound of $S$; consequently $r\le\inf S$ for every real lower bound $r$ of $S$ ([[thm-infimum-property]], [[def-infimum]]).

[F11] On the complete manifold $(M,g)$ the Hopf–Rinow equivalent condition 3 holds: for every point the fibre exponential domain is all of the tangent space, $\mathcal E_p=T_pM$ ([[thm-hopf-rinow]]).

## Proof

**Proof technique:** admissible radii are exactly those below every cut time: beyond a cut time the ray either is conjugate or has a competitor, defeating invertibility or injectivity on the ball, while below the infimum every point of the ball is nonconjugate and two radial minimizers are impossible.

1.1 Every admissible radius is at most every finite cut time. [F1, F3, F4, F5, F7, F8, given]
Let $r\in\mathcal R_p$ and $v\in S_pM$ with $c(v)<+\infty$. Suppose $r>c(v)$. By [F3] the cut point is attained: $\gamma_v(c(v))=\exp_p(c(v)v)$ and $d_g(p,\gamma_v(c(v)))=c(v)$; the forward alternative (a) of [F4] applies at $t=c(v)$. In the conjugacy case, [F5] makes $d(\exp_p)_{c(v)v}$ singular, while $c(v)v$ lies in the open ball $B_r(0_p)$ on which $\exp_p$ is a diffeomorphism onto its image by [F1], so [F7] makes that differential an isomorphism, a contradiction. In the two-minimizer case let $\sigma$ be the unit-speed minimizing geodesic with $\sigma'(0)=u\ne v$; by [F8] $\sigma(s)=\exp_p(su)$ for $0\le s\le c(v)$, so $\exp_p(c(v)u)=\gamma_v(c(v))=\exp_p(c(v)v)$ with $c(v)u\ne c(v)v$ and both vectors in $B_r(0_p)$; this contradicts the injectivity of the diffeomorphism $\exp_p|_{B_r(0_p)}$ [F7]. Hence $r\le c(v)$ for every $v$ with $c(v)<+\infty$. [F1, F3, F4, F5, F7, F8, given]

1.2 Below the infimum, $\exp_p$ is a local diffeomorphism throughout the ball. [F2, F4, F5, F6, F7, F11, given]
Fix $r$ with $0<r<\delta$. Since $c$ takes values in $(0,+\infty]$ [F2] and $\delta\le c(v)$ for every $v\in S_pM$ (this includes the case $\delta=+\infty$), every $w\in B_r(0_p)$ has $|w|_g<r<c(v)$ when $w=tv\ne0$, where $t=|w|_g$ and $v=w/t\in S_pM$; by [F11] $\mathcal E_p=T_pM$, so $\exp_p$ and its differential are defined on all of $B_r(0_p)$. At $w=0_p$, [F6] gives a diffeomorphism domain of $\exp_p$ and hence a local diffeomorphism at $0_p$ [F7]. At $w=tv\ne0$, the curve $s\mapsto\exp_p(stv)=\gamma_v(st)$ on $[0,1]$ is the unit-speed radial geodesic $\gamma_v|_{[0,t]}$ composed with the affine bijection $s\mapsto st$, and conjugacy of endpoints is unchanged under this reparametrisation [F5], so if $d(\exp_p)_{w}$ were singular then [F5] would make $p$ and $\exp_p(w)=\gamma_v(t)$ conjugate along $\gamma_v|_{[0,t]}$, and clause (b)(1) of [F4] would give $c(v)\le t$, contradicting $t<c(v)$. Hence $d(\exp_p)_w$ is nonsingular and, by [F5] again, $\exp_p$ is a local diffeomorphism at $w$. [F2, F4, F5, F6, F7, F11, given]

2.1 Consequences for $\operatorname{inj}(p)$. [F1, F10, given, step 1.1]
By step 1.1 every $r\in\mathcal R_p$ satisfies $r\le c(v)$ for every $v$ with finite cut time. If the set of finite cut times is nonempty, it is bounded below by $0$, so [F10] gives its ordinary infimum $\delta$ and shows that each such $r$, being a real lower bound, satisfies $r\le\delta$; if there is no finite cut time then $\delta=+\infty$ by the convention in the statement and $r\le\delta$ is trivial. Hence $\delta$ is an upper bound of $\mathcal R_p$ and $\operatorname{inj}(p)=\sup\mathcal R_p\le\delta$ by [F1]. [F1, F10, given, step 1.1]

2.2 Injectivity on the ball. [F3, F4, F8, F11, given, step 1.2]
All exponential evaluations below are legitimate because $\mathcal E_p=T_pM$ by [F11]. Let $w_1,w_2\in B_r(0_p)$ with $\exp_p(w_1)=\exp_p(w_2)=:q$ and $w_1\ne w_2$; put $t_i=|w_i|_g$ and, when $t_i>0$, $v_i:=w_i/t_i\in S_pM$. If $t_i=0$ for some $i$, then $w_i=0_p$ and $q=p$; for the other index $t_j<r<\delta\le c(v_j)$ (or $t_j=0$ as well), so by [F3] the radial segment to $q$ is minimizing and $t_j=d_g(p,q)=d_g(p,p)=0$, contradicting $w_j\ne w_i$. Hence $t_1,t_2>0$. Since $t_i<r<\delta\le c(v_i)$, [F3] gives $d_g(p,q)=t_i$ for $i=1,2$, so $t_1=t_2=:t>0$. If $v_1\ne v_2$, then by [F8] the maps $\sigma_i(s)=\exp_p(sv_i)$ are unit-speed geodesics on $[0,t]$ with $\sigma_i(0)=p$, $\sigma_i(t)=q$ and length $t=d_g(p,q)$, so both are minimizing; clause (b)(2) of [F4] applied to $\sigma_2$ and the direction $v_1$ gives $c(v_1)\le t$, contradicting $t<r<\delta\le c(v_1)$. If $v_1=v_2$, then $w_1=tv_1=tv_2=w_2$, contradicting $w_1\ne w_2$. Hence $\exp_p|_{B_r(0_p)}$ is injective. [F3, F4, F8, F11, given, step 1.2]

3.1 Every radius below $\delta$ is admissible. [F1, F7, F9, F11, given, step 1.2, step 2.2]
Retain $0<r<\delta$. By [F9] the restriction $\exp_p|_{B_r(0_p)}$ is smooth, and it is injective by step 2.2, so it is bijective onto its image; its inverse is smooth because $\exp_p$ is a local diffeomorphism at every point of $B_r(0_p)$ (step 1.2): around each point of the image, the global inverse agrees with a smooth local inverse provided by [F7]. Hence $\exp_p|_{B_r(0_p)}$ is a diffeomorphism onto its image; moreover $B_r(0_p)\subseteq T_pM=\mathcal E_p$ for every $r>0$ by [F11]. Therefore $r\in\mathcal R_p$ for every $r\in(0,\delta)$, so $\mathcal R_p\supseteq(0,\delta)$; if $\delta>0$ (this includes $\delta=+\infty$) then $\operatorname{inj}(p)=\sup\mathcal R_p\ge\sup(0,\delta)=\delta$, and if $\delta=0$ then $\operatorname{inj}(p)=\sup\mathcal R_p>0=\delta$ by [F1]. [F1, F7, F9, F11, given, step 1.2, step 2.2]

4.1 Conclusion and boundary audit. [A1, F1, F2, F4, F6, F7, F11, given, step 2.1, step 3.1]
Step 2.1 gives $\operatorname{inj}(p)\le\delta$ and step 3.1 gives $\operatorname{inj}(p)\ge\delta$: in the finite case the second inequality reads $\sup\mathcal R_p\ge\sup(0,\delta)=\delta$, and when $\delta=+\infty$ it reads $\sup\mathcal R_p=+\infty$. Hence $\operatorname{inj}(p)=\delta$, which is the displayed identity; since $\operatorname{inj}(p)\in(0,+\infty]$ by [F1], also $\delta\in(0,+\infty]$, so the case $\delta=0$ analysed in step 3.1 does not actually occur. In dimension zero $T_pM=\{0_p\}$, so $S_pM=\varnothing$ and $\delta=+\infty$ by the stated convention; by [F11] $\mathcal E_p=T_pM=\{0_p\}$, and for every $r>0$ the ball $B_r(0_p)$ is the singleton $\{0_p\}$, on which $\exp_p$ restricts to the bijection $\{0_p\}\to\{p\}$ determined by $\exp_p(0_p)=p$ (forced, since by [F6] a star-shaped neighbourhood of $0_p$ has image an open neighbourhood of $p$, and here that image is the singleton $\{\exp_p(0_p)\}$); a bijective map between zero-dimensional manifolds has smooth inverse, so it is a diffeomorphism onto its image [F7]. Thus every $r>0$ lies in $\mathcal R_p$, so $\mathcal R_p=(0,\infty)$ and $\operatorname{inj}(p)=+\infty$ by [F1]: the two dimension-zero values of the statement are derived here directly, without quoting the verification of the definition. In dimension one the two unit directions are handled by exactly the same argument. The empty manifold has no point $p$. The hypotheses used are exactly those declared: completeness enters through the cut-time framework [F2], the characterization [F4] and the Hopf–Rinow exponential-domain clause [F11]; no compactness of $M$ and no unit-speed assumption beyond the unit sphere $S_pM$ are used. Exactly the inherited $\mathrm{AC}_\omega$ of [A1] is spent through the normal-neighbourhood and characterization interfaces [F4, F6]. [A1, F1, F2, F4, F6, F7, F11, given, step 2.1, step 3.1] $\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.173-190, defines the injectivity radius at a point and relates it to the cut locus; Datar, *Lectures on Riemannian Geometry*, Definition 23.3.3 and section 23.3, printed pp.171-172, gives the same radius through exponential-diffeomorphism balls. The equality with the infimum of the cut times, including the two directions of the inequality and the dimension-zero values $\delta=\operatorname{inj}(p)=+\infty$, is carried out above from the pair's own characterization theorem and the Hopf–Rinow exponential-domain clause; nothing is quoted.
