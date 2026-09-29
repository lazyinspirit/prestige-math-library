---
id: thm-distance-from-p-is-smooth-off-p-and-the-cut-locus
kind: theorem
title: Distance from p is smooth off p and the cut locus
status: published
origin: pipeline
deps:
  - cor-inner-product-induces-a-norm
  - def-countable-choice
  - def-cut-point-and-cut-locus-of-a-point
  - def-cut-time-in-a-unit-tangent-direction
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - lem-minimizing-along-a-geodesic-is-an-initial-interval-property
  - lem-sup-epsilon
  - lem-the-pointwise-norm-is-smooth-off-the-zero-vector
  - prop-identity-maps-and-composites-of-smooth-maps-are-smooth
  - thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p
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
      locator: "Chapter 10, printed pp.173-190: the cut-locus discussion and the radial coordinate r(q)=|exp_p^{-1}(q)|_{g_p} on M minus the cut locus."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Lecture 23, sections 23.2-23.3, printed pp.163-172: the tangent cut domain and differentiability of the distance function off the cut locus."
---

## Statement

Assume exactly the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$,
carried by the declared exponential-domain, cut-time and diffeomorphism
suppliers. Let $(M,g)$ be a complete, connected, boundaryless,
finite-dimensional Riemannian manifold and let $p\in M$. Put
$$r_p:M\to\mathbb R,\qquad r_p(q):=d_g(p,q),$$
the Riemannian distance from $p$, and
$$\operatorname{Cut}(p)=\{\exp_p(c_p(v)v):v\in S_pM,\ c_p(v)<+\infty\}$$
as in the cut-point definition. Then:

(a) $r_p$ is smooth on the open set
$M\setminus(\{p\}\cup\operatorname{Cut}(p))$;

(b) in inverse exponential polar coordinates,
$$r_p(\exp_p(tv))=t \qquad\text{for every }v\in S_pM\text{ and every }0<t<c_p(v),$$
equivalently $r_p(\exp_p(w))=|w|_g$ for every $w\in D_p=\{tv:v\in S_pM,\ 0<t<c_p(v)\}$.

In dimension zero both sets are empty ($S_pM=\varnothing$ and
$\operatorname{Cut}(p)=\varnothing$) and the assertion is vacuous. No
compactness of $M$ is assumed.

## Facts & Assumptions

**Given:** The complete connected boundaryless finite-dimensional Riemannian manifold $(M,g)$, the point $p\in M$, the unit sphere $S_pM$, the cut time $c_p:S_pM\to(0,+\infty]$, the cut locus $\operatorname{Cut}(p)$, the tangent cut domain $D_p=\{tv:v\in S_pM,\ 0<t<c_p(v)\}$ and the distance function $r_p(q)=d_g(p,q)$.

[A1] The choice assumption is $\mathrm{AC}_\omega$ of [[def-countable-choice]], inherited exactly through the declared exponential-domain, cut-time and diffeomorphism suppliers; no full Axiom of Choice and no dependent choice is used.

[F1] The tangent cut domain $D_p$ is open in $T_pM$, the complement $M\setminus(\{p\}\cup\operatorname{Cut}(p))$ is an open submanifold of $M$, and the restriction $\exp_p|_{D_p}:D_p\to M\setminus(\{p\}\cup\operatorname{Cut}(p))$ is a diffeomorphism onto it; in dimension zero both sides are empty and no compactness of $M$ is assumed ([[thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p]]).

[F2] The unit sphere is $S_pM=\{v\in T_pM:|v|_g=1\}$, and for each $v\in S_pM$ the radial curve is $\gamma_v(t)=\exp_p(tv)$; when $c_p(v)<+\infty$ the point $\exp_p(c_p(v)v)$ is the cut point of $p$ along $\gamma_v$, and the cut locus is the set of all such points over the directions with finite cut time. The endpoint of a finite cut time is minimizing, every $0\le t<c_p(v)$ is minimizing, no $t>c_p(v)$ is minimizing, and if $c_p(v)=+\infty$ every finite radial segment minimizes so that the direction contributes no cut point. In dimension zero $S_pM=\varnothing$ and $\operatorname{Cut}(p)=\varnothing$ ([[def-cut-point-and-cut-locus-of-a-point]]).

[F3] For a unit vector $v$, the cut time is $$c_p(v)=\sup\{t>0:d_g(p,\exp_p(tv))=t\}\in(0,+\infty],$$ the value $+\infty$ being allowed when every positive radial segment minimizes ([[def-cut-time-in-a-unit-tangent-direction]]).

[F4] For a nonempty $S\subseteq\mathbb R$ bounded above with supremum $u$ and $\varepsilon>0$ there is $s\in S$ with $u-\varepsilon<s$ ([[lem-sup-epsilon]]).

[F5] With $A_p(v)=\{t\ge0:d_g(p,\gamma_v(t))=t\}$ for a unit vector $v$, the set $A_p(v)$ is an initial interval: if $T\in A_p(v)$ and $0\le s\le T$ then $s\in A_p(v)$; and if the cut time is finite then $c_p(v)\in A_p(v)$ ([[lem-minimizing-along-a-geodesic-is-an-initial-interval-property]]).

[F6] The pointwise norm is $|w|_g=\sqrt{g(w,w)}$ ([[def-pointwise-norm-and-angle-from-a-riemannian-metric]]).

[F7] On an inner-product space the induced length satisfies $\|\lambda v\|=|\lambda|\,\|v\|$ for every scalar $\lambda$ ([[cor-inner-product-induces-a-norm]]).

[F8] The pointwise norm $N_p(w)=|w|_g$ on $T_pM$ is smooth on the open set $T_pM\setminus\{0_p\}$ ([[lem-the-pointwise-norm-is-smooth-off-the-zero-vector]]).

[F9] If $F:M\to N$ and $G:N\to P$ are smooth maps of smooth manifolds, then $G\circ F:M\to P$ is smooth ([[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

[F10] A diffeomorphism from $M$ to $N$ is a bijective smooth map whose inverse is smooth ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

## Proof

**Proof technique:** on the domain of the global exponential diffeomorphism the distance from $p$ is the tangent-space norm of the inverse exponential coordinate, by the definition of the cut time; the norm is smooth off the zero vector and composition of smooth maps preserves smoothness.

1.1 Set-up and the zero-dimensional case. [A1, F1, F2, F8, F10, given]
Write $$U:=M\setminus(\{p\}\cup\operatorname{Cut}(p)),\qquad E:=\exp_p|_{D_p}:D_p\to U .$$ By [F1] the set $D_p$ is open in $T_pM$, the set $U$ is an open submanifold of $M$, and $E$ is a diffeomorphism onto $U$; by [F10] this means that $E$ is bijective and that both $E$ and $E^{-1}:U\to D_p$ are smooth. By [F2] every $w\in D_p$ has the form $w=tv$ with $v\in S_pM$ and $t>0$, so $w\ne0_p$ and $D_p\subseteq T_pM\setminus\{0_p\}$; by [F8] the pointwise norm $N_p$ is smooth on the open set $T_pM\setminus\{0_p\}$, hence so is its restriction to the open subset $D_p$. If $\dim M=0$ then $S_pM=\varnothing$ and $\operatorname{Cut}(p)=\varnothing$ by [F2], so $D_p=\varnothing$ and $U=M\setminus\{p\}=\varnothing$ because a zero-dimensional connected manifold is the singleton $\{p\}$; in that case both assertions of the statement are vacuous. Assume henceforth $\dim M\ge1$; note that $U$ is open and $p\notin U$.

2.1 The radial distance and norm identity. [F2, F3, F4, F5, F6, F7, step 1.1]
Let $v\in S_pM$ and $0<t<c_p(v)$, and put $A(v):=\{s>0:d_g(p,\exp_p(sv))=s\}$, so that $c_p(v)=\sup A(v)$ by [F3]. If $c_p(v)<+\infty$, then [F4] applied to $A(v)$ with the positive number $\varepsilon:=c_p(v)-t$ supplies $s\in A(v)$ with $c_p(v)-\varepsilon<s$, that is $s>t$. If $c_p(v)=+\infty$, then $A(v)$ is not bounded above: this is the meaning of the value $+\infty$ recorded in [F3], and it agrees with the clause that every positive radial segment minimizes, since then every positive $s$ lies in $A(v)$; so again there is $s\in A(v)$ with $s>t$. In either case [F5] applies, because the initial-interval property of $A_p(v)=A(v)\cup\{0\}$ gives $t\in A_p(v)$ from $s\in A_p(v)$ and $0\le t\le s$, and $t\in A_p(v)$ with $t>0$ means $t\in A(v)$; that is $$d_g(p,\exp_p(tv))=t .$$ On the other hand $|v|_g=1$ by [F2], so [F6] and [F7] applied with the scalar $\lambda=t>0$ give $$|tv|_g=t\,|v|_g=t .$$ Therefore $d_g(p,\exp_p(tv))=|tv|_g=t$ for every $tv\in D_p$.

3.1 The distance is the norm of the inverse exponential coordinate. [F1, F2, step 1.1, step 2.1] Let $q\in U$ and put $w:=E^{-1}(q)\in D_p$, so that $q=E(w)=\exp_p(w)$. By [F2] the vector $w\in D_p$ has the form $w=tv$ with $v\in S_pM$ and $0<t<c_p(v)$, and this representation is determined by $w$: the norm of $v$ is one, so $t=|w|_g$ and $v=w/t$. Step 2.1 therefore gives $$r_p(q)=d_g(p,q)=d_g(p,\exp_p(tv))=t=|w|_g=N_p(w)=N_p\bigl(E^{-1}(q)\bigr).$$ Hence $$r_p|_U=N_p\circ E^{-1},$$ the composition of the inverse diffeomorphism $E^{-1}:U\to D_p$ with the restriction to $D_p$ of the pointwise norm.

4.1 Smoothness on $U$. [F1, F8, F9, F10, step 1.1, step 3.1]
By step 1.1 both $E^{-1}:U\to D_p$ and $N_p|_{D_p}:D_p\to\mathbb R$ are smooth maps of smooth manifolds: $E^{-1}$ because $E$ is a diffeomorphism [F1, F10], and $N_p|_{D_p}$ because $N_p$ is smooth on the open set $T_pM\setminus\{0_p\}$ containing $D_p$ [F8]. By [F9] their composite is smooth, so step 3.1 shows that $r_p|_U$ is smooth. Since $U$ is open in $M$ [F1], this is precisely the assertion that $r_p$ is smooth on $M\setminus(\{p\}\cup\operatorname{Cut}(p))$.

5.1 Polar coordinates and boundary audit. [A1, F1, F2, F7, step 2.1, step 3.1, step 4.1]
For $v\in S_pM$ and $0<t<c_p(v)$ the point $\exp_p(tv)=E(tv)$ lies in $U$, and step 2.1 together with step 3.1 gives $$r_p(\exp_p(tv))=d_g(p,\exp_p(tv))=t=|tv|_g,$$ which is the polar-coordinate formula; in the form $r_p(\exp_p(w))=|w|_g$ it holds for every $w\in D_p$. The audit: the base point $p$ is excluded from $U$ by construction, and no claim is made at $p$, where the distance is not differentiable; the cut locus is excluded, and at a cut point the formula is not asserted; the time parameter runs over the open interval $(0,c_p(v))$, so both endpoints are outside the assertion: $t=0$ would give the zero vector, on which no smoothness of $N_p$ is used or claimed [F8], and $t=c_p(v)$ would give a cut point, excluded from $U$ unless $c_p(v)=+\infty$, in which case the upper endpoint does not occur; radial geodesics are nonconstant because $|v|_g=1$ [F2], so no degenerate constant geodesic arises; the case of a finite cut time is covered by the epsilon characterization in step 2.1 and the case $c_p(v)=+\infty$ by the unboundedness clause of the same step, so neither case is silently dropped; in dimension zero both sides are empty by [F2] and the assertions are vacuous, and in dimension one the unit sphere has two points and every step applies verbatim; $\mathrm{AC}_\omega$ of [A1] is inherited exactly through the exponential-domain, cut-time and diffeomorphism suppliers [F1] and is spent inside them, while the supremum characterization [F4], the initial-interval lemma [F5] and the norm-smoothness lemma [F8] are choice-free; finally the statement consists of a smoothness assertion and a displayed identity and claims no equivalence, so there is no iff direction to verify. $\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.173-190, works with the radial coordinate $r(q)=|\exp_p^{-1}(q)|_{g_p}$ on the complement of the cut locus, and Datar, *Lectures on Riemannian Geometry*, section 23.3, printed pp.170-172, proves differentiability of the distance function off $p$ and the cut locus. The presentation above derives the identity $r_p(\exp_p(tv))=t$ from the cut-time supremum, the initial-interval lemma and the epsilon characterization of the supremum, and obtains smoothness from the global exponential diffeomorphism [[thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p]] together with the tangent-space norm lemma [[lem-the-pointwise-norm-is-smooth-off-the-zero-vector]], whose proof is not repeated here.
