---
id: def-conjugate-points-along-a-geodesic-and-their-multiplicity
kind: definition
title: Conjugate points along a geodesic and their multiplicity
status: published
origin: pipeline
deps:
  - cor-the-tangent-space-of-an-n-manifold-has-dimension-n
  - cor-zero-derivative-implies-constant
  - def-covariant-derivative-along-a-curve
  - def-dimension
  - def-geodesic-of-an-affine-connection
  - def-jacobi-field
  - def-levi-civita-connection
  - def-linear-basis
  - def-linear-map
  - def-linear-subspace
  - def-nat-order
  - def-natural-numbers
  - def-parallel-section-along-a-curve
  - def-riemannian-metric-and-riemannian-manifold
  - def-vector-field-and-section-along-a-smooth-curve
  - def-vector-space
  - lem-curvature-is-c-infinity-linear-in-all-three-vector-fields
  - lem-nat-nonzero-is-successor
  - lem-nat-order-is-membership
  - prop-geodesics-have-constant-speed-for-a-metric-compatible-connection
  - prop-tangential-jacobi-fields-are-affine-multiples-of-the-velocity
  - thm-dimension-of-a-linear-subspace
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-existence-and-uniqueness-of-parallel-sections
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
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Chapter 10"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, Conjugate Points, printed p.182 / PDF label P198, lines 7169–7179."
---

## Definition

Let $(M,g)$ be a finite-dimensional Riemannian manifold without boundary of dimension $n\ge0$,
let $a<b$, and let $\gamma:[a,b]\to M$ be an affinely parametrized geodesic.
Define
$$\mathcal K_\gamma(a,b):=\{J\in\mathcal J(\gamma):J(a)=0,\ J(b)=0\}.$$
This is a finite-dimensional real vector space. The points $\gamma(a)$ and
$\gamma(b)$ are **conjugate along $\gamma$** exactly when
$\mathcal K_\gamma(a,b)$ contains a nonzero Jacobi field. For a conjugate pair,
its **multiplicity** is $\dim_\mathbb R\mathcal K_\gamma(a,b)$. If $\gamma$ is
constant, then $\mathcal K_\gamma(a,b)=\{0\}$ and the endpoints are not
conjugate. If $\gamma$ is nonconstant, then
$\dim_\mathbb R\mathcal K_\gamma(a,b)\le n-1$. Included endpoint derivatives
are one-sided. No completeness or choice axiom is assumed.

## Facts & Assumptions

**Given:** A finite-dimensional Riemannian manifold $(M,g)$ without boundary, a nondegenerate segment $[a,b]$ with $a<b$, and a specified affinely parametrized geodesic $\gamma:[a,b]\to M$.

[F1] A smooth vector field along $\gamma$ is a section of the pulled-back tangent bundle and has smooth coefficient functions in a pulled-back frame ([[def-vector-field-and-section-along-a-smooth-curve]]).

[F2] Each tangent space is an $n$-dimensional real vector space, and a real vector space has pointwise addition, zero and scalar multiplication satisfying the vector-space axioms ([[cor-the-tangent-space-of-an-n-manifold-has-dimension-n]], [[def-vector-space]]).

[F3] A smooth field is Jacobi exactly when $$D_t^2J+R(J,\dot\gamma)\dot\gamma=0$$ on the full nondegenerate interval; constant geodesics and one-sided endpoint derivatives are included ([[def-jacobi-field]]).

[F4] Covariant differentiation along a curve is real-linear on sections, satisfies $D_t(fV)=f'V+fD_tV$, and uses one-sided endpoint derivatives ([[def-covariant-derivative-along-a-curve]]).

[F5] Curvature is $C^\infty$-linear in each vector-field slot, giving pointwise linearity of $J\mapsto R(J,\dot\gamma)\dot\gamma$ along $\gamma$ ([[lem-curvature-is-c-infinity-linear-in-all-three-vector-fields]]).

[F6] A linear subspace contains zero and is closed under addition and scalar multiplication ([[def-linear-subspace]]).

[F7] A map between real vector spaces is linear when it preserves every linear combination ([[def-linear-map]]).

[F8] Initial value and derivative at $a$ determine exactly one Jacobi field on all of $[a,b]$, including when $a$ is an endpoint ([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

[F9] A linear subspace of an $n$-dimensional vector space is finite-dimensional with dimension at most $n$; equality holds exactly for the full space, and the finite-dimensional argument uses no choice principle ([[thm-dimension-of-a-linear-subspace]]).

[F10] Dimension is the size of a finite basis, and a basis is linearly independent and spanning; an $n$-dimensional space has an $n$-element basis ([[def-dimension]], [[def-linear-basis]]).

[F11] For an affine geodesic, $D_tT=0$ where $T=\dot\gamma$, with one-sided endpoint interpretation ([[def-geodesic-of-an-affine-connection]]).

[F12] The Levi-Civita connection is metric-compatible; its geodesics have constant speed, and the Riemannian metric is positive definite ([[def-levi-civita-connection]], [[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]], [[def-riemannian-metric-and-riemannian-manifold]]).

[F13] If $\gamma$ is nonconstant, $(t-a)\dot\gamma(t)$ is a Jacobi field by the affine-multiple characterization of tangential Jacobi fields ([[prop-tangential-jacobi-fields-are-affine-multiples-of-the-velocity]]).

[F14] Along a supplied smooth curve, every initial fiber vector determines exactly one parallel section on the whole interval, without AC ([[thm-existence-and-uniqueness-of-parallel-sections]]).

[F15] A section is parallel exactly when $D_tV=0$; along a constant curve its coefficients in a constant fiber frame are constant ([[def-parallel-section-along-a-curve]]).

[F16] A continuous real function on an interval whose derivative vanishes at every interior point is constant on the whole interval ([[cor-zero-derivative-implies-constant]]).

[F17] If $n>0$, write $n=\sigma(p)$ for its predecessor $p$ ([[def-natural-numbers]], [[lem-nat-nonzero-is-successor]]). By the definition of strict natural order, $m\le n$ and $m\ne n$ imply $m<n$; and $m<\sigma(p)$ is equivalent to $m\le p$ ([[def-nat-order]], [[lem-nat-order-is-membership]]). Thus a natural number at most $n$ and unequal to $n$ is at most $p=n-1$.

## Proof

**Proof technique:** Use the initial derivative to embed the endpoint-vanishing space into one tangent space, then exclude its velocity direction for a nonconstant geodesic.

1.1 The smooth fields along $\gamma$ form a real vector space under pointwise operations: in a pulled-back frame, addition and scalar multiplication preserve smooth coefficient functions by [F1], and the vector-space axioms hold in each tangent fiber by [F2]. [F1, F2]

1.2 Suppose $\gamma$ is constant at $p$. If $n=0$, [F1] and [F2] imply the only field along $\gamma$ is zero. Otherwise, take a finite basis $e_1,\ldots,e_n$ of $T_pM$ using [F2] and [F10], and extend each vector to a parallel section $E_i$ by [F14]. These sections span every fiber: any vector at any time has a parallel extension by [F14], and its value at $a$ is a linear combination of the $e_i$, whose parallel extension is that same combination of the $E_i$ by uniqueness. They are independent at every time: a linear combination vanishing at one time is a parallel section with zero value, so uniqueness in [F14] makes it identically zero, and its initial coefficients vanish by basis independence. Write an arbitrary Jacobi field as $J(t)=\sum_i x_i(t)E_i(t)$, with smooth coefficients by [F1]. Since $T=0$, curvature multilinearity [F5] and [F3] give $D_t^2J=0$. Using the product rule [F4] twice and $D_tE_i=0$ from [F15], this equation becomes $\sum_i x_i''E_i=0$, so every $x_i''=0$. Applying [F16] to $x_i'$ and then to $x_i-c_it$ gives $x_i(t)=c_it+d_i$. From $x_i(a)=x_i(b)=0$ and $a<b$, we get $c_i=d_i=0$. Therefore $\mathcal K_\gamma(a,b)=\{0\}$ and the constant-geodesic endpoints are not conjugate. [F1, F2, F3, F4, F5, F10, F14, F15, F16]

2.1 Put $T=\dot\gamma$ and define $L(J)=D_t^2J+R(J,T)T$ on the smooth-field space of step 1.1. By [F4] and [F5], $L$ is real-linear. Thus its kernel, the Jacobi fields by [F3], is a linear subspace; the endpoint conditions $J(a)=J(b)=0$ are preserved under the same pointwise operations. Hence $\mathcal K_\gamma(a,b)$ is a real vector space. [F3, F4, F5, F6, step 1.1]

3.1 Define $\Phi:\mathcal K_\gamma(a,b)\to T_{\gamma(a)}M$ by $\Phi(J)=D_tJ(a)$. By [F4] and [F7], $\Phi$ is linear. If $\Phi(J)=0$, then $J(a)=0$ and $D_tJ(a)=0$, so [F8] gives $J=0$; hence $\Phi$ is injective. Let $U=\Phi[\mathcal K_\gamma(a,b)]$. [F4, F7, F8, step 2.1]

4.1 Since $\Phi$ is linear, $U$ contains zero and is closed under addition and scalar multiplication, so it is a linear subspace of $T_{\gamma(a)}M$ by [F6]. By [F9], it is finite-dimensional with $\dim U\le n$. Take a basis $u_1,\ldots,u_d$ of $U$ by [F10]. Each $u_i$ has a unique preimage $J_i\in\mathcal K_\gamma(a,b)$ because $U$ is the image and $\Phi$ is injective. The fields $J_1,\ldots,J_d$ span $\mathcal K_\gamma(a,b)$: for any $J$, express $\Phi(J)$ in the basis $u_i$ and use injectivity of $\Phi$ to recover the same linear combination of the $J_i$. They are independent because applying $\Phi$ to a vanishing linear combination gives a vanishing linear combination of the $u_i$. Thus $\mathcal K_\gamma(a,b)$ is finite-dimensional of dimension $d=\dim U\le n$, so the stated multiplicity is well-defined. [F2, F6, F9, F10, step 3.1]

5.1 Suppose $\gamma$ is nonconstant. By [F12], its speed is constant. If it vanished at any time, then $T=0$ throughout; in local charts the coordinate functions of $\gamma$ would have zero derivative and hence be locally constant by [F16], making $\gamma$ constant on the connected interval. Thus $T(a)$ and $T(b)$ are nonzero; in particular $n>0$. If $T(a)\in U$, there is $J\in\mathcal K_\gamma(a,b)$ with $D_tJ(a)=T(a)$. The Jacobi field $K(t)=(t-a)T(t)$ from [F13] has the same initial data, because [F11] gives $D_tK(a)=T(a)$. Uniqueness [F8] gives $J=K$, but $K(b)=(b-a)T(b)\ne0$, contradicting $J(b)=0$. Therefore $U$ is a proper subspace. By [F9], $\dim U\ne n$ and $\dim U\le n$; [F17] gives $\dim\mathcal K_\gamma(a,b)=\dim U\le n-1$. [F8, F9, F11, F12, F13, F16, F17, step 3.1, step 4.1]

6.1 The interval is nondegenerate because $a<b$. The zero field belongs to $\mathcal K$ but does not witness conjugacy, which requires a nonzero field. For $n=1$, step 5.1 gives dimension zero for the endpoint-vanishing space of a nonconstant geodesic. If $n=0$, every tangent fiber is zero by [F2], so $\dot\gamma=0$ and local coordinate functions are locally constant by [F16]; connectedness makes $\gamma$ constant, and step 1.2 applies. A supplied geodesic on $[a,b]$ rules out the empty-manifold case. All endpoint derivatives are one-sided by [F3], [F8], [F11], and [F14]. The proof uses one finite basis of a single tangent space and uniquely determined Jacobi and parallel fields; [F9] also uses no choice principle, so neither AC nor $\mathrm{AC}_\omega$ is assumed or used. By the stated definition, a nonzero $J\in\mathcal K_\gamma(a,b)$ gives conjugate endpoints; conversely, conjugate endpoints provide such a nonzero $J$. [F2, F3, F8, F9, F11, F14, F16, step 1.2, step 2.1, step 4.1, step 5.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, “Conjugate Points,” printed p.182 / PDF label P198, lines 7169–7179. Lee defines conjugacy by a nonzero Jacobi field vanishing at both endpoints and multiplicity as the dimension of that endpoint-vanishing space. The local proof above establishes that the space is finite-dimensional from the initial derivative map and proves the $n-1$ bound and constant-geodesic case without using Lee's compressed tangential-field argument.
