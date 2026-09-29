---
id: thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p
kind: theorem
title: The exponential map is a diffeomorphism on the open tangent cut domain
status: published
origin: pipeline
deps:
  - def-levi-civita-connection
  - thm-the-riemannian-distance-topology-is-the-manifold-topology
  - cor-inner-product-induces-a-norm
  - def-countable-choice
  - def-cut-point-and-cut-locus-of-a-point
  - def-cut-time-in-a-unit-tangent-direction
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-metric-ball
  - def-metric-convergence
  - def-metric-space
  - def-metric-topology
  - def-norm-and-normed-space
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-speed-and-length
  - lem-metric-nonnegativity
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure
  - prop-conjugate-points-and-multiplicity-are-invariant-under-affine-reparametrization
  - prop-exponential-map-scales-geodesic-time
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - thm-characterization-of-a-cut-point
  - thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic
  - thm-cut-locus-of-a-point-is-closed
  - thm-cut-time-is-positive-and-continuous
  - thm-hopf-rinow
  - thm-metric-open-set-algebra
  - thm-metric-sequential-closure
  - thm-riemannian-distance-is-a-metric
  - thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173-190: the tangent cut domain and the diffeomorphism of exp_p onto the complement of the cut locus."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 23, sections 23.2-23.3, printed pp.163-172: the cut locus, the cut time, and the domain on which exp_p is a diffeomorphism."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume exactly the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$,
carried by the declared exponential-domain, cut-time, characterization,
Hopf–Rinow and sequential-closure suppliers. Let $(M,g)$ be a complete,
connected, boundaryless, finite-dimensional Riemannian manifold and let
$p\in M$. Put
$$D_p:=\{tv:v\in S_pM,\ 0<t<c_p(v)\}\subseteq T_pM.$$
Then $D_p$ is open in $T_pM$, the set
$M\setminus(\{p\}\cup\operatorname{Cut}(p))$ is an open submanifold of $M$, and
the restriction
$$\exp_p|_{D_p}:D_p\longrightarrow M\setminus(\{p\}\cup\operatorname{Cut}(p))$$
is a diffeomorphism onto it. In dimension zero both sides are empty
($S_pM=\varnothing$, and $\operatorname{Cut}(p)=\varnothing$). No compactness
of $M$ is assumed.

## Facts & Assumptions

**Given:** The complete connected boundaryless finite-dimensional Riemannian manifold $(M,g)$, the point $p\in M$, the unit sphere $S_pM$, the cut time $c_p:S_pM\to(0,+\infty]$, the cut locus $\operatorname{Cut}(p)$ and the tangent cut domain $D_p=\{tv:v\in S_pM,\ 0<t<c_p(v)\}$.

[A1] The choice assumption is $\mathrm{AC}_\omega$ of [[def-countable-choice]], inherited through the declared suppliers and spent in this proof only at the point flagged in step 1.1; no full Axiom of Choice and no dependent choice is used.

[F1] The cut locus is $\operatorname{Cut}(p)=\{\exp_p(c_p(v)v):v\in S_pM,\ c_p(v)<+\infty\}$ and $\gamma_v(t)=\exp_p(tv)$; in dimension zero $S_pM=\varnothing$ and $\operatorname{Cut}(p)=\varnothing$ ([[def-cut-point-and-cut-locus-of-a-point]]).

[F2] The cut time is $c_p(v)=\sup\{t>0:d_g(p,\exp_p(tv))=t\}\in(0,+\infty]$, so it is an upper bound of that set of minimizing times ([[def-cut-time-in-a-unit-tangent-direction]]).

[F3] If $0\le t<c_p(v)$ then $t\in A_p(v)$, that is $d_g(p,\gamma_v(t))=t$; and if $c_p(v)$ is finite then $c_p(v)\in A_p(v)$, so the cut point $\gamma_v(c_p(v))=\exp_p(c_p(v)v)$ is at distance $c_p(v)$ from $p$ ([[def-cut-point-and-cut-locus-of-a-point]], [[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]]).

[F4] **Characterization of the cut point.** (a) If $c_p(v)<+\infty$, then either $p$ and $\gamma_v(c_p(v))$ are conjugate along $\gamma_v|_{[0,c_p(v)]}$, or there is a unit-speed minimizing geodesic $\sigma$ with $\sigma(0)=p$, $\sigma(c_p(v))=\gamma_v(c_p(v))$ and $\sigma'(0)\ne v$. (b)(1) If $t>0$ and $p,\gamma_v(t)$ are conjugate along $\gamma_v|_{[0,t]}$, then $c_p(v)\le t$. (b)(2) If $t>0$ and $\sigma:[0,t]\to M$ is a unit-speed minimizing geodesic with $\sigma(0)=p$, $\sigma(t)=\gamma_v(t)$ and $\sigma'(0)\ne v$, then $c_p(v)\le t$ ([[thm-characterization-of-a-cut-point]]).

[F5] For $w$ in the exponential domain with $w\ne0$, the points $p$ and $\exp_p(w)$ are conjugate along $t\mapsto\exp_p(tw)$ on $[0,1]$ exactly when $d(\exp_p)_w$ is singular, and equivalently exactly when $\exp_p$ fails to be a local diffeomorphism at $w$ ([[thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic]]); conjugacy of a pair of endpoints along a geodesic is unchanged when the geodesic is composed with an affine bijection of its parameter interval ([[prop-conjugate-points-and-multiplicity-are-invariant-under-affine-reparametrization]]).

[F6] The cut time is positive at every unit vector, and it is continuous in the extended sense: if $v_k\to v$ in $S_pM$ and $c_p(v)<+\infty$ then $c_p(v_k)\to c_p(v)$, while if $c_p(v)=+\infty$ then for every $M_0>0$ there is $k_0$ with $c_p(v_k)>M_0$ for all $k\ge k_0$ ([[thm-cut-time-is-positive-and-continuous]]).

[F7] On the complete manifold $(M,g)$ the Hopf–Rinow equivalent condition 3 holds, so $\mathcal E_p=T_pM$ for every point; moreover every $x,y\in M$ are joined by a minimizing geodesic: there is $w\in T_xM$ with $\exp_x(w)=y$, $|w|_{g_x}=d_g(x,y)$ and the curve $t\mapsto\exp_x(tw)$ on $[0,1]$ of length $d_g(x,y)$ ([[thm-hopf-rinow]]).

[F8] The exponential map is smooth on its open domain, and each fibre restriction $\exp_p$ is smooth on the open set $\mathcal E_p$ ([[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]]).

[F9] A diffeomorphism is a bijective smooth map with smooth inverse; a local diffeomorphism at a point restricts to a diffeomorphism from some open neighbourhood of that point onto an open submanifold. An open subset of a smooth manifold carries a canonical smooth structure making it an open submanifold ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]).

[F10] For $u\in T_pM$ and real $s$, $\exp_p(su)=\gamma_{p,u}(s)$ whenever $su\in\mathcal E_p$ ([[prop-exponential-map-scales-geodesic-time]]); the Levi-Civita connection is metric compatible ([[def-levi-civita-connection]]), so its geodesics have constant speed ([[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]]). The length of a piecewise $C^1$ curve is the integral of its speed, so a unit-speed curve on a parameter interval of length $t$ has length $t$ ([[def-riemannian-speed-and-length]]), and a curve whose length equals the distance between its endpoints is minimizing ([[def-riemannian-distance-on-a-connected-manifold]]).

[F11] $d_g$ is a finite metric on the connected Riemannian manifold $M$ ([[thm-riemannian-distance-is-a-metric]]), with (M1) separation, (M2) symmetry and (M3) triangle inequality ([[def-metric-space]]); metric values are nonnegative ([[lem-metric-nonnegativity]]).

[F12] In $(X,d)$ the open ball is $B(x,r)=\{y:d(x,y)<r\}$ for $r>0$, a set is open when each of its points has a ball inside it, and closed means open complement ([[def-metric-ball]], [[def-metric-topology]]); convergence $x_k\to x$ means $d(x_k,x)\to0$ ([[def-metric-convergence]]).

[F13] Open balls are open, finite intersections of open sets are open, and closed balls $\bar B(x,r)$, $r>0$, are closed ([[thm-metric-open-set-algebra]]); in a metric space a set is closed if and only if it is sequentially closed ([[thm-metric-sequential-closure]]).

[F14] The cut locus $\operatorname{Cut}(p)$ is closed in $(M,d_g)$ for every $p$ in the complete connected boundaryless finite-dimensional manifold $M$ ([[thm-cut-locus-of-a-point-is-closed]]).

[F15] On the tangent space the Riemannian metric is a positive definite symmetric bilinear form ([[def-riemannian-metric-and-riemannian-manifold]]), the pointwise norm is $|v|_g=\sqrt{g(v,v)}$, the induced inner-product norm ([[def-pointwise-norm-and-angle-from-a-riemannian-metric]]) satisfies $|\lambda v|_g=|\lambda|\,|v|_g$ and $|u+v|_g\le|u|_g+|v|_g$ ([[cor-inner-product-induces-a-norm]]), and a normed space carries the metric $d_N(u,v)=N(u-v)$ ([[def-norm-and-normed-space]]).

[F16] The topology of $d_g$ is the manifold topology on every connected
Riemannian manifold
([[thm-the-riemannian-distance-topology-is-the-manifold-topology]]).

## Proof

**Proof technique:** the tangent cut domain is open because a sequence leaving the domain cannot converge to a point of it (sequential closedness of its complement); strictly below the cut time there is no conjugate point, so the exponential is a local diffeomorphism; below the cut time no second minimizing direction can exist, so it is injective; Hopf–Rinow places every point off the cut locus strictly before its cut time, giving surjectivity; a closed cut locus makes the target open, and a bijective local diffeomorphism onto an open submanifold is a diffeomorphism.

1.1 The tangent cut domain is open. [F2, F6, F12, F13, F15, given]
Write $D_p=\{tv:v\in S_pM,\ 0<t<c_p(v)\}=\{w\in T_pM:w\ne0\text{ and }|w|_g<c_p(w/|w|_g)\}$, the second description recording that a nonzero $w$ has the unique form $w=tv$ with $t=|w|_g>0$ and $v=w/|w|_g\in S_pM$, and that $w\in D_p$ means $0<t<c_p(v)$ with $c_p$ as in [F2]. Let $F:=T_pM\setminus D_p$ and let $w_k\in F$ with $w_k\to w$ in the norm metric of $T_pM$ [F15]; suppose for contradiction that $w\in D_p$, say $w=tv$ with $v\in S_pM$ and $0<t<c_p(v)$. Since $|w_k|_g\to t>0$ [F12, F15], for all large $k$ we have $|w_k|_g>t/2$, so $v_k:=w_k/|w_k|_g\in S_pM$ is defined, and $v_k\to v$: indeed $v_k-v=\frac{1}{|w_k|_g}(w_k-w)+\big(\frac{1}{|w_k|_g}-\frac1t\big)w$ and $1/|w_k|_g$ is bounded while $(1/|w_k|_g-1/t)\to0$ and $w_k\to w$, so the right-hand side tends to $0$ by absolute homogeneity and the triangle inequality [F15]. Case $c_p(v)<+\infty$: continuity of the cut time [F6] gives $c_p(v_k)\to c_p(v)$; with $\varepsilon:=(c_p(v)-t)/3>0$ we get $|w_k|_g<t+\varepsilon$ and $c_p(v_k)>c_p(v)-\varepsilon=t+2\varepsilon$ for all large $k$, hence $|w_k|_g<c_p(v_k)$. Case $c_p(v)=+\infty$: the infinite-value clause of [F6] gives $c_p(v_k)>t+1$ for all large $k$, while $|w_k|_g<t+1/2$. In both cases $w_k\ne0$ and $|w_k|_g<c_p(v_k)=c_p(w_k/|w_k|_g)$ for all large $k$, that is $w_k\in D_p$, contradicting $w_k\in F$. Hence $F$ is sequentially closed, so $F$ is closed in the metric space $T_pM$ [F13], and therefore $D_p$, its complement, is open in $T_pM$ [F12]. [F2, F6, F12, F13, F15, given]

1.2 The exponential map is a local diffeomorphism throughout the domain. [F1, F3, F4, F5, given]
Let $w=tv\in D_p$, so $v\in S_pM$ and $0<t<c_p(v)$. By [F3] $t\in A_p(v)$: $d_g(p,\exp_p(w))=t$ and the vector $w=tv$ lies in the exponential domain, with $\gamma_v(t)=\exp_p(tv)=\exp_p(w)$ [F1]. The curve $s\mapsto\exp_p(stv)=\gamma_v(st)$ on $[0,1]$ is the radial geodesic $\gamma_v|_{[0,t]}$ composed with the affine bijection $s\mapsto st$, and by [F5] conjugacy of endpoints is unchanged under this reparametrisation; so if $p$ and $\exp_p(w)=\gamma_v(t)$ were conjugate along $\gamma_v|_{[0,t]}$, then clause (b)(1) of the cut-point characterization [F4] would give $c_p(v)\le t$, contradicting $t<c_p(v)$. Hence the endpoints are not conjugate, and by the equivalence between conjugacy of the endpoints, singularity of $d(\exp_p)_w$ and failure of $\exp_p$ to be a local diffeomorphism at $w$ [F5], the map $\exp_p$ is a local diffeomorphism at $w$. As $w\in D_p$ was arbitrary, $\exp_p$ is a local diffeomorphism at every point of $D_p$. [F1, F3, F4, F5, given]

1.3 The exponential map is injective on the domain. [F1, F3, F4, F10, given]
Let $w_1=t_1v_1$ and $w_2=t_2v_2$ in $D_p$ satisfy $\exp_p(w_1)=\exp_p(w_2)=:q$. Since $0<t_i<c_p(v_i)$ for $i=1,2$, [F3] gives $d_g(p,q)=d_g(p,\gamma_{v_i}(t_i))=t_i$, so $t_1=t_2=:t$. If $v_1\ne v_2$, then $\sigma_i(s)=\exp_p(sv_i)=\gamma_{v_i}(s)$ for $s\in[0,t]$ are unit-speed geodesics [F10] with $\sigma_i(0)=p$, $\sigma_i(t)=q$, and since each has length $t=d_g(p,q)$ on $[0,t]$ [F10] both are minimizing; clause (b)(2) of the characterization [F4] applied to $\sigma_2$ and the direction $v_1$ gives $c_p(v_1)\le t$, contradicting $t<c_p(v_1)$. Hence $v_1=v_2$, and then $w_1=t_1v_1=t_2v_2=w_2$; so $\exp_p|_{D_p}$ is injective. [F1, F3, F4, F10, given]

1.4 The image is contained in the complement of the base point and the cut locus. [F1, F3, F4, F10, given]
Let $w=tv\in D_p$, so $0<t<c_p(v)$ and, by [F3], $d_g(p,\exp_p(w))=t>0$. If $\exp_p(w)=p$ then the metric separation (M1) would give $d_g(p,\exp_p(w))=d_g(p,p)=0$, contradicting $t>0$; hence $\exp_p(w)\ne p$. Second, suppose $\exp_p(w)\in\operatorname{Cut}(p)$, that is $\exp_p(w)=\exp_p(c_p(u)u)$ for some $u\in S_pM$ with $c_p(u)<+\infty$ [F1]. Then $c_p(u)\in A_p(u)$ by [F3], so $d_g(p,\exp_p(w))=c_p(u)$, and comparing with $d_g(p,\exp_p(w))=t$ gives $c_p(u)=t$. If $u=v$ this says $c_p(v)=t$, contradicting $t<c_p(v)$. If $u\ne v$, then $\sigma:=\gamma_u|_{[0,t]}$ is a unit-speed geodesic [F10] with $\sigma(0)=p$, $\sigma(t)=\gamma_u(t)=\exp_p(tu)=\exp_p(c_p(u)u)=\exp_p(w)=\gamma_v(t)$ and $\sigma'(0)=u\ne v$, so clause (b)(2) of [F4] gives $c_p(v)\le t$, again contradicting $t<c_p(v)$. Hence $\exp_p(w)\notin\operatorname{Cut}(p)$, and therefore $\exp_p(D_p)\subseteq M\setminus(\{p\}\cup\operatorname{Cut}(p))$. [F1, F3, F4, F10, given]

1.5 Surjectivity onto the complement. [F1, F2, F7, F11, given]
Let $q\in M\setminus(\{p\}\cup\operatorname{Cut}(p))$. By Hopf–Rinow [F7] there is $w\in T_pM$ with $\exp_p(w)=q$, $|w|_g=d_g(p,q)$ and $s\mapsto\exp_p(sw)$ of length $d_g(p,q)$ on $[0,1]$. Since $q\ne p$, metric separation (M1) [F11] gives $d_g(p,q)>0$, so $t:=|w|_g>0$ and $w\ne0$; put $v:=w/t\in S_pM$, so $w=tv$ and $\exp_p(tv)=q$. Then $t$ is a minimizing time of the direction $v$: $d_g(p,\gamma_v(t))=d_g(p,\exp_p(tv))=d_g(p,q)=t$ [F1], so $t$ belongs to the set whose supremum defines the cut time [F2], whence $c_p(v)\ge t$. If $c_p(v)=t$, then $q=\exp_p(c_p(v)v)$ with $v\in S_pM$ and $c_p(v)<+\infty$, so $q\in\operatorname{Cut}(p)$ [F1], contradicting the choice of $q$. Hence $t<c_p(v)$, that is $w=tv\in D_p$ with $\exp_p(w)=q$. Thus every point of $M\setminus(\{p\}\cup\operatorname{Cut}(p))$ lies in $\exp_p(D_p)$. [F1, F2, F7, F11, given]

1.6 The target is open. [F1, F11, F12, F13, F14, F16, F9, given]
First, $M\setminus\{p\}$ is open: if $x\ne p$ then $d_g(x,p)>0$ by (M1) and nonnegativity [F11], and $B(x,d_g(x,p)/2)\subseteq M\setminus\{p\}$, because $y=p$ in the ball would give $d_g(x,p)<d_g(x,p)/2$ [F12]; since every point of $M\setminus\{p\}$ has such a ball inside it, that set is open [F12]. Second, $M\setminus\operatorname{Cut}(p)$ is open because $\operatorname{Cut}(p)$ is closed [F14] and closedness means openness of the complement [F12]. The target is the intersection $(M\setminus\{p\})\cap(M\setminus\operatorname{Cut}(p))$ of two open sets, hence open in the $d_g$ topology [F13]. By [F16] it is open in the manifold topology, and an open subset of the smooth manifold $M$ carries a canonical smooth structure making it an open submanifold [F9]. [F1, F9, F11, F12, F13, F14, F16, given]

2.1 The exponential map is a diffeomorphism onto the target. [F7, F8, F9, given, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6]
By steps 1.3 and 1.5 the restriction $\exp_p|_{D_p}$ is injective and every point of $M\setminus(\{p\}\cup\operatorname{Cut}(p))$ is attained, while by step 1.4 no point outside that set is attained; hence $\exp_p|_{D_p}$ is a bijection from $D_p$ onto $M\setminus(\{p\}\cup\operatorname{Cut}(p))$. The map is smooth: $D_p$ is open in $T_pM$ (step 1.1) and contained in $T_pM=\mathcal E_p$ [F7], on which $\exp_p$ is smooth [F8], so the restriction is smooth on the open submanifold $D_p$ [F9]. By step 1.2 the map is a local diffeomorphism at every point of $D_p$, and by step 1.6 the target is an open submanifold of $M$. A bijection that is a local diffeomorphism is a diffeomorphism onto its target: around each point of the target the global inverse agrees with a smooth local inverse provided by the local-diffeomorphism property, so the inverse is smooth [F9]. Therefore $\exp_p|_{D_p}:D_p\to M\setminus(\{p\}\cup\operatorname{Cut}(p))$ is a diffeomorphism onto it. [F7, F8, F9, given, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6]

3.1 Boundary and choice audit. [A1, F1, F6, F7, F11, F13, given, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1]
In dimension zero $S_pM=\varnothing$ by [F1], so $D_p=\varnothing$; by the surjectivity of step 1.5 every point of the target would then be $\exp_p(w)$ for some $w\in D_p$, and there is no such $w$, so the target is empty as well and the assertion is the diffeomorphism between two empty manifolds. The empty manifold has no point $p$. In dimension one the unit sphere has exactly two points and every step applies verbatim. The two endpoints of the domain are excluded by construction: $t>0$ removes the zero vector and the base point, and $t<c_p(v)$ excludes the cut instant; correspondingly $p\notin\operatorname{Cut}(p)$ and $\exp_p(D_p)\cap\operatorname{Cut}(p)=\varnothing$ are the content of step 1.4, while step 1.5 shows that equality $t=c_p(v)$ is exactly what would force $q\in\operatorname{Cut}(p)$. The case $c_p(v)=+\infty$ needs no separate treatment: it is covered in step 1.1 by the second case of the openness argument, and in steps 1.2, 1.3, 1.4 the hypothesis $t<c_p(v)$ is then automatic for every $t>0$. All directions above are unit vectors, so every radial geodesic is nonconstant and the degenerate time $t=0$ never occurs. Completeness enters only through the global exponential domain and the existence of minimizing geodesics [F7] and through the cut-time theory [F6]; no compactness of $M$ is assumed. The choice audit: $\mathrm{AC}_\omega$ of [A1] is spent exactly once in this proof, in step 1.1, through the direction of [F13] that converts sequential closedness of the complement of $D_p$ into closedness and hence makes $D_p$ open; the remaining steps use only the inherited suppliers. [A1, F1, F6, F7, F11, F13, given, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 2.1]

$\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.173-190, describes the domain on which the exponential map is a diffeomorphism and its relation to the cut locus; Datar, *Lectures on Riemannian Geometry*, Lecture 23, sections 23.2-23.3, printed pp.163-172, gives the cut time and cut locus. The diffeomorphism statement is proved above from the pair's own cut-point characterization, the continuity of the cut time and the closedness of the cut locus; no source text is quoted.
