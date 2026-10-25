---
id: thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic
kind: theorem
title: Conjugate points are critical values of the exponential map along the geodesic
status: published
origin: pipeline
deps:
  - cor-the-tangent-space-of-an-n-manifold-has-dimension-n
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-countable-choice
  - def-covariant-derivative-along-a-curve
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-domain-and-exponential-map-of-a-connection
  - def-jacobi-field
  - def-kernel-and-image-of-a-linear-map
  - def-linear-isomorphism-and-invertible-linear-map
  - def-linear-map
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - lem-curvature-is-c-infinity-linear-in-all-three-vector-fields
  - thm-chain-rule-for-differentials-of-smooth-maps
  - thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields
  - thm-dimension-of-a-linear-subspace
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-rank-nullity
  - thm-linear-kernel-image-and-injectivity
  - thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth
  - thm-the-differential-of-exp-p-at-zero-is-the-identity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Proposition 10.11 and proof"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Proposition 10.11 and proof, printed p.182-183 (PDF labels P197-P198), including the displayed variation and the identification of the pushforward with the endpoint value of the variation field."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025), Proposition 22.3.1 and proof"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Proposition 22.3.1 and proof, printed pp.163-164 (PDF labels P170-P171), together with the definition of multiplicity as the dimension of Null_gamma."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume exactly the library's countable-choice axiom $\mathrm{AC}_\omega$, as
carried by the declared exponential-domain and exponential-differential
suppliers. Let $(M,g)$ be a finite-dimensional Riemannian manifold without
boundary, let $p\in M$, let $v\in\mathcal E_p$ with $v\ne0$, and let
$$\gamma:[0,1]\to M,\qquad \gamma(t)=\exp_p(tv).$$
Then:

1. $\gamma(0)=p$ and $\gamma(1)$ are conjugate along $\gamma$ if and only if
   $d(\exp_p)_v:T_pM\to T_{\gamma(1)}M$ is singular;
2. if they are conjugate, the multiplicity equals
   $\dim\ker d(\exp_p)_v$;
3. equivalently, $\exp_p$ fails to be a local diffeomorphism at $v$ if and
   only if $\gamma(1)$ is conjugate to $p$ along $\gamma$.

Constant geodesics are excluded by $v\ne0$, and dimension zero is vacuous
because no nonzero tangent vector exists then. No completeness, compactness
or full Axiom of Choice is assumed.

## Facts & Assumptions

**Given:** The boundaryless finite-dimensional Riemannian manifold, the point $p$, and the nonzero vector $v$ in the exponential domain, under the stated $\mathrm{AC}_\omega$ assumption.

[A1] The choice assumption is exactly $\mathrm{AC}_\omega$ of [[def-countable-choice]]. It enters only through the declared suppliers [[def-domain-and-exponential-map-of-a-connection]], [[thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields]], and the openness/smoothness and differential-at-zero suppliers in [F9]; the inverse-function lemma [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]] is choice-free; the linear-algebra and Jacobi-initial-value arguments below select nothing and use no full Axiom of Choice.

[F1] The points $\gamma(0)$ and $\gamma(1)$ are conjugate along $\gamma$ exactly when the space $$\mathcal K_\gamma(0,1)=\{J\in\mathcal J(\gamma):J(0)=0,\ J(1)=0\}$$ of Jacobi fields vanishing at both times contains a nonzero field; for a conjugate pair, the multiplicity is $\dim_\mathbb R\mathcal K_\gamma(0,1)$, and $\mathcal K_\gamma(0,1)$ is a real vector space of finite dimension ([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

[F2] A smooth field $J$ along $\gamma$ is Jacobi exactly when $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$ on $[0,1]$ ([[def-jacobi-field]]), the covariant derivative along a curve is real-linear in the field with $D_t(aJ+bK)=aD_tJ+bD_tK$ ([[def-covariant-derivative-along-a-curve]]), and curvature is linear in each slot, so $J\mapsto R(J,\dot\gamma)\dot\gamma$ is pointwise linear ([[lem-curvature-is-c-infinity-linear-in-all-three-vector-fields]]). Hence the Jacobi equation is linear: real linear combinations of Jacobi fields are Jacobi fields.

[F3] For every $w\in T_pM$ there is exactly one smooth Jacobi field $J_w$ along $\gamma$ with $J_w(0)=0$ and $D_tJ_w(0)=w$; uniqueness holds for any prescribed initial position and derivative at $0$, with one-sided derivatives at the included endpoint $0$ ([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

[F4] For every $w\in T_pM$, the differential of the exponential map satisfies $d(\exp_p)_v(w)=J(1)$, where $J$ is the Jacobi field along $\gamma$ with $J(0)=0$ and $D_tJ(0)=w$ ([[thm-differential-of-the-exponential-map-in-terms-of-jacobi-fields]]).

[F5] The tangent space $T_pM$ is a real vector space of finite dimension $n=\dim M$ ([[cor-the-tangent-space-of-an-n-manifold-has-dimension-n]], [[def-linear-map]]).

[F6] For a linear map $T:V\to W$ the kernel is a linear subspace, and $T$ is injective exactly when its kernel is the zero subspace ([[def-kernel-and-image-of-a-linear-map]], [[def-linear-map]], [[thm-linear-kernel-image-and-injectivity]]). If $V$ is finite-dimensional with $\dim_FV=n$, then $n=\dim_F\ker T+\operatorname{rank}T$ ([[thm-rank-nullity]]); a linear subspace $U\subseteq V$ satisfies $\dim_FU=n$ exactly when $U=V$ ([[thm-dimension-of-a-linear-subspace]]).

[F7] A linear map between finite-dimensional spaces is called invertible, or a linear isomorphism, when it is bijective, equivalently when it has a two-sided inverse; "singular" means not invertible ([[def-linear-isomorphism-and-invertible-linear-map]]).

[F8] In ZF, if $U\subseteq\mathbb R^n$ is open, $f:U\to\mathbb R^n$ is smooth and $Df(a)$ is invertible at $a\in U$, then $f$ restricts to a diffeomorphism from some open neighbourhood of $a$ onto an open set ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]). For smooth manifold maps the chain rule holds, so if a smooth map has a smooth local inverse near a point then its differential there is invertible ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[thm-chain-rule-for-differentials-of-smooth-maps]]).

[F9] Under [A1], $\mathcal E_p$ is open and $\exp_p$ is smooth
([[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]]),
and $d(\exp_p)_0$ is the identity
([[thm-the-differential-of-exp-p-at-zero-is-the-identity]]).

## Proof

**Proof technique:** Identify the kernel of the exponential differential with the endpoint-vanishing Jacobi space through the initial-value map, then compare dimensions and invoke the inverse function theorem.

1.1 Define $\Phi:T_pM\to\mathcal J(\gamma)$ by $\Phi(w)=J_w$ for the unique Jacobi field of [F3] with $J_w(0)=0$ and $D_tJ_w(0)=w$. Then $\Phi$ is real-linear: for $a,b\in\mathbb R$ and $u,w\in T_pM$, the field $aJ_u+bJ_w$ is Jacobi by [F2], and its initial data at $0$ are $0$ and $au+bw$ by [F2], so uniqueness in [F3] gives $aJ_u+bJ_w=J_{au+bw}$, that is, $\Phi(au+bw)=a\Phi(u)+b\Phi(w)$. [F2, F3]

2.1 The map $\Phi$ is injective: if $\Phi(w)=0$, then $w=D_tJ_w(0)=D_t0(0)=0$. Moreover $\Phi(T_pM)=\{J\in\mathcal J(\gamma):J(0)=0\}$: for such a $J$, put $w=D_tJ(0)$; then $J$ and $J_w$ are Jacobi fields with the same position and derivative at $0$, so $J=J_w=\Phi(w)$ by [F3]. [F3, step 1.1]

3.1 By [F4], for every $w\in T_pM$, $$d(\exp_p)_v(w)=\Phi(w)(1).$$ Hence, using [F1], $$w\in\ker d(\exp_p)_v\iff\Phi(w)\in\mathcal K_\gamma(0,1).$$ Since $\Phi$ is injective and $\mathcal K_\gamma(0,1)\subseteq\{J:J(0)=0\}=\Phi(T_pM)$ by step 2.1, the restriction $$\Phi|_{\ker d(\exp_p)_v}:\ker d(\exp_p)_v\longrightarrow\mathcal K_\gamma(0,1)$$ is a well-defined bijection: it maps a $w$ with $d(\exp_p)_v(w)=0$ to the field $\Phi(w)$, which lies in $\mathcal K_\gamma(0,1)$ by the displayed equivalence, and it is surjective because every $J\in\mathcal K_\gamma(0,1)$ equals $\Phi(w)$ with $w=D_tJ(0)$ by step 2.1. It is linear as a restriction of a linear map. [F1, F4, step 2.1]

4.1 The kernel of $d(\exp_p)_v$ is a linear subspace of $T_pM$ by [F6], so by step 3.1 the multiplicity $\dim_\mathbb R\mathcal K_\gamma(0,1)$ equals $\dim\ker d(\exp_p)_v$; in particular both spaces are finite-dimensional. If $\mathcal K_\gamma(0,1)\ne\{0\}$ then, by [F1], $\gamma(0)$ and $\gamma(1)$ are conjugate and step 3.1 gives a nonzero element of $\ker d(\exp_p)_v$, so the differential is not injective. Conversely, if the differential is not injective, step 3.1 and injectivity of $\Phi$ give a nonzero element of $\mathcal K_\gamma(0,1)$, and [F1] makes the endpoints conjugate. Since the source and target of the differential both have dimension $n$ by [F5], [F6] identifies noninjectivity with singularity. This proves claims 1 and 2, the second in the form "the multiplicity equals the kernel dimension". [F1, F5, F6, step 3.1]

5.1 It remains to translate singularity into failure of local invertibility. Suppose first that $d(\exp_p)_v$ is invertible. Choose a linear isomorphism of $T_pM$ onto $\mathbb R^n$ and a chart of $M$ around $\gamma(1)$; in these coordinates $\exp_p$ is a smooth map from a neighbourhood of $v$ in $\mathbb R^n$ to $\mathbb R^n$ whose derivative at $v$ is invertible, so [F8] makes $\exp_p$ a diffeomorphism from a neighbourhood of $v$ onto an open set. Conversely, suppose $\exp_p$ is a local diffeomorphism at $v$: there are open neighbourhoods $V$ of $v$ and $W$ of $\exp_p(v)=\gamma(1)$ such that $\exp_p|_V:V\to W$ is a diffeomorphism. Its inverse $g:W\to V$ is smooth, and the chain rule [F8] applied to $g\circ(\exp_p|_V)=\mathrm{id}_V$ at $v$ gives $dg(\gamma(1))\circ d(\exp_p)_v=\mathrm{id}_{T_pM}$, so $d(\exp_p)_v$ has a left inverse, hence is injective, hence bijective by [F6] and [F7]. Thus $\exp_p$ fails to be a local diffeomorphism at $v$ exactly when $d(\exp_p)_v$ is singular, which by step 4.1 happens exactly when the endpoints are conjugate. [F5, F6, F7, F8, F9, step 4.1]

6.1 Boundary and choice audit. Since $v\ne0$, the geodesic $\gamma$ has initial velocity $d(\exp_p)_0(v)=v\ne0$ and is nonconstant; the constant-geodesic clause of [F1] is therefore not needed. If $\dim M=0$ then $T_pM=\{0\}$ by [F5] and there is no nonzero $v$, so the theorem is vacuous; in dimension one every nonzero $v$ is in the single line $T_pM$ and the argument uses no splitting into normal and tangential directions. The zero vector $w=0$ has $\Phi(0)=0$ and $d(\exp_p)_v(0)=0$, consistent with [F4]; the case $w\ne0$ is where the kernel is tested. Both directions of the equivalence in claim 1 and both directions of claim 3 are proved: conjugacy is derived from a nonzero kernel element in step 4.1, and singularity is derived from conjugacy there as well. The only choice assumption is [A1]; no selection from a family is made. [A1, F1, F4, F5, F9, step 4.1, step 5.1] $\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Proposition 10.11 and proof, printed pp.182–183 / PDF labels P197–P198, proves that $\exp_p$ is a local diffeomorphism near $V$ if and only if $q=\exp_pV$ is not conjugate to $p$ along $t\mapsto\exp_p(tV)$; his proof computes the pushforward through the variation $\Gamma_W(s,t)=\exp_p\bigl(t(V+sW)\bigr)$ and identifies its endpoint derivative with the Jacobi field. Datar, *Lectures on Riemannian Geometry*, Proposition 22.3.1 and proof, printed pp.163–164 / PDF labels P170–P171, proves directly that $q$ is conjugate to $p$ along $\gamma$ if and only if $d\exp_p$ is singular at $v$ and defines multiplicity as the dimension of the vanishing Jacobi space. The proof above follows the same two ingredients but states the kernel identification as an explicit bijection, so the multiplicity statement 2 is derived rather than assumed.
