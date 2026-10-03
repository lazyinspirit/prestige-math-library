---
id: lem-pullback-metric-on-a-cover-of-a-complete-manifold-is-complete
kind: lemma
title: Pullback metric on a cover of a complete manifold is complete
status: published
origin: pipeline
deps:
  - def-covering-map-and-evenly-covered-neighbourhoods
  - thm-path-lifting-for-covering-maps
  - def-pullback-riemannian-metric
  - prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions
  - lem-local-isometries-send-geodesics-to-geodesics
  - thm-hopf-rinow
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - def-geodesically-complete-riemannian-manifold
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§20.1 and 24.3, pp.147–149, 178–179: coverings of complete manifolds and the lifted metric"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§5, pp.17–19: completeness inherited by coverings in the Cartan–Hadamard route"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of dimension
$n$, let $N$ be a connected, boundaryless smooth $n$-manifold, and let
$\pi:N\to M$ be a smooth covering map that is a local diffeomorphism —
equivalently, $N$ carries the smooth structure lifted from $M$ along $\pi$, so
that $\pi$ has invertible differential at every point; this is the standing
situation for the coverings used on this page. Then:

1. $\pi^*g$ is a Riemannian metric on $N$ and
   $\pi:(N,\pi^*g)\to(M,g)$ is a local isometry;
2. $(N,\pi^*g)$ is geodesically complete, hence complete as a metric space.

The zero-dimensional and empty cases are included by the conventions stated
below; no compactness of $M$ or $N$ is assumed, and no choice beyond the
inherited $\mathrm{AC}_\omega$ is used.

## Facts & Assumptions

**Given:** The complete connected boundaryless Riemannian manifold $(M,g)$ of
dimension $n$, the connected boundaryless smooth $n$-manifold $N$, and the
smooth covering map $\pi:N\to M$ that is a local diffeomorphism, with
$\pi^*g$ the pullback of $g$ of [[def-pullback-riemannian-metric]].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the Hopf–Rinow, geodesic-existence and
completeness suppliers below; the covering-theoretic steps select nothing.

[F1] $F^*h$ is a Riemannian metric on the source if and only if $F$ is an
immersion, and in general it is positive semidefinite with radical
$\ker dF_p$ at $p$
([[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]]).
Moreover $\pi$ is a covering map in the sense of
[[def-covering-map-and-evenly-covered-neighbourhoods]], so $\pi$ is surjective.

[F2] A local Riemannian isometry $F$ commutes with covariant differentiation:
$D_t^N(dF_{\gamma(t)}W(t))=dF_{\gamma(t)}(D_t^MW(t))$ along every smooth curve,
and consequently $F$ carries affinely parametrized geodesics to affinely
parametrized geodesics ([[lem-local-isometries-send-geodesics-to-geodesics]]).

[F3] Path lifting: for a covering $p:E\to B$, a path $\alpha:I\to B$ and
$e_0\in E$ with $p(e_0)=\alpha(0)$ there is a unique path
$\widetilde\alpha:I\to E$ with $\widetilde\alpha(0)=e_0$ and
$p\circ\widetilde\alpha=\alpha$
([[thm-path-lifting-for-covering-maps]]).

[F4] Hopf–Rinow: for a nonempty connected boundaryless Riemannian manifold,
metric completeness, geodesic completeness and the global existence of the
exponential are equivalent; whenever these conditions hold, any two points
are joined by a minimizing geodesic ([[thm-hopf-rinow]]).

[F5] Geodesic completeness means that for every initial vector the unique
maximal geodesic has domain $\mathbb R$
([[def-geodesically-complete-riemannian-manifold]]); the unique maximal
geodesic with prescribed initial data exists and its domain is an open interval
containing $0$ ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]).

## Proof

1.1 The pullback is a Riemannian metric and $\pi$ is a local isometry. [F1, given]
Since $\pi$ is a local diffeomorphism, $d\pi_x$ is injective for every $x\in N$,
so the radical $\ker d\pi_x$ of [F1] is trivial and [F1] makes $\pi^*g$ a
Riemannian metric on $N$. By the definition of the pullback,
$(\pi^*g)_x(v,w)=g_{\pi(x)}(d\pi_xv,d\pi_xw)$ for all $v,w\in T_xN$; since
$\pi$ is also a local diffeomorphism, it is a local isometry from
$(N,\pi^*g)$ to $(M,g)$ in the sense of [F2]. In dimension $n=0$ both
manifolds have discrete points and the empty bilinear form is positive
definite, so the claim holds vacuously; if $N$ is empty then so is $M$ (as
$\pi$ is surjective), and both statements are vacuous. [F1, given]

2.1 Geodesics of $N$ project to geodesics of $M$.
Let $\gamma:I\to N$ be an affinely parametrized geodesic of $(N,\pi^*g)$ and
put $\sigma:=\pi\circ\gamma$. Since $\pi$ is the identity map of the metric in
the sense of step 1.1, [F2] applied to the field $W=\dot\gamma$ gives
$$D_t^M\dot\sigma=D_t^M\bigl(d\pi_{\gamma(t)}\dot\gamma(t)\bigr)=d\pi_{\gamma(t)}\bigl(D_t^N\dot\gamma(t)\bigr)=0,$$
so $\sigma$ is an affinely parametrized geodesic of $(M,g)$.
[F2, step 1.1]

3.1 Local lifts of geodesics are geodesics.
Conversely, let $\sigma:J\to M$ be an affinely parametrized geodesic and let
$\gamma:J\to N$ be a smooth curve with $\pi\circ\gamma=\sigma$. Applying [F2]
to $W=\dot\gamma$ and using $D_t^M\dot\sigma=0$ gives
$d\pi_{\gamma(t)}(D_t^N\dot\gamma(t))=D_t^M\dot\sigma(t)=0$ for all $t$; since
$d\pi$ is injective at every point (step 1.1 and the local-diffeomorphism
hypothesis), $D_t^N\dot\gamma=0$ and $\gamma$ is a geodesic of $(N,\pi^*g)$.
In particular every path lift of a geodesic of $M$ is a geodesic of $N$.
[F2, step 2.1]

4.1 Maximal geodesics of the complete base.
Since $(M,g)$ is complete, [F4] and [F5] say that every maximal geodesic of
$M$ is defined on all of $\mathbb R$: given $q\in M$ and $u\in T_qM$, the
unique maximal geodesic with initial data $(q,u)$ — which exists by [F5] —
has domain $\mathbb R$ by the equivalence of [F4] applied to the complete
manifold. This is the only place where completeness of $M$ enters.
[A1, F4, F5, step 3.1]

5.1 Extending a maximal geodesic of $N$ to an $M$-geodesic on all of $\mathbb R$.
Let $\gamma:I\to N$ be a maximal geodesic of $(N,\pi^*g)$; maximality is with
respect to the maximal-geodesic convention of [F5], and $0\in I$ with $I$ an
open interval. By step 2.1, $\sigma_0:=\pi\circ\gamma$ is a geodesic of $M$ on
$I$; it is the restriction of the unique maximal $M$-geodesic $\sigma$ with the
initial data $\sigma(0)=\pi(\gamma(0))$ and $\dot\sigma(0)=d\pi_{\gamma(0)}\dot\gamma(0)$,
whose domain is $\mathbb R$ by step 4.1. Now lift the path $\sigma:\mathbb R\to M$
through the covering $\pi$ with initial point $\gamma(0)$: by [F3] there is a
unique path $\widetilde\gamma:\mathbb R\to N$ with
$\pi\circ\widetilde\gamma=\sigma$ and
$\widetilde\gamma(0)=\gamma(0)$.
[F3, F5, step 4.1]

6.1 The lift is a geodesic agreeing with $\gamma$, so $N$ is geodesically complete.
Since $\pi\circ\widetilde\gamma=\sigma$ is smooth and $\pi$ is a local
diffeomorphism, $\widetilde\gamma$ is smooth; being a path lift of the geodesic
$\sigma$, it is a geodesic of $(N,\pi^*g)$ by step 3.1. On the interval $I$ both
$\widetilde\gamma$ and $\gamma$ are paths in $N$ covering the same path
$\sigma|_I$ and both start at $\gamma(0)$; by the uniqueness clause of [F3],
$\widetilde\gamma|_I=\gamma$. Hence the maximal geodesic $\gamma$ of $N$ is the
restriction of the geodesic $\widetilde\gamma$ defined on $\mathbb R$, and by
the maximality convention of [F5] its domain is $I=\mathbb R$. Therefore every
maximal geodesic of $(N,\pi^*g)$ has domain $\mathbb R$: the manifold
$(N,\pi^*g)$ is geodesically complete, and [F4] applied to the nonempty
connected manifold $N$ makes it complete as a metric space. This proves both
assertions.
[F5, step 3.1, step 5.1]

7.1 Boundary and choice audit.
Every hypothesis is used where it is needed: the local-diffeomorphism
hypothesis is exactly what makes $\pi^*g$ positive definite in step 1.1 and
makes the projected covariant derivative vanish in step 3.1; surjectivity of
$\pi$ keeps $N$ nonempty when $M$ is; and completeness of $M$ is used only in
step 4.1 through Hopf–Rinow. The geodesic-completeness definition of [F5]
includes the zero initial vector, and the zero vector case is also covered by
steps 2.1 and 3.1 (constant geodesics project to constant geodesics and lift to
constant geodesics). In dimension zero every constant map is a geodesic and
both completeness notions hold, so the argument is a special case of the same
steps. No step selects a family of curves: the unique lift is produced by [F3]
and the unique maximal geodesic by [F5]. Exactly [A1] is inherited and no
further choice is spent.
[A1, F1, F2, F3, F4, F5, step 1.1, step 6.1] ∎
