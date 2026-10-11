---
id: thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties
kind: theorem
title: "Hodge–Riemann bilinear relations for smooth projective varieties"
status: draft
origin: pipeline
dependency_level: 12
deps:
  - def-axiom-of-choice
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
  - lem-de-rham-top-integral-is-fundamental-class-evaluation
  - lem-first-chern-form-agrees-with-the-topological-line-class
  - lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity
  - lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds
  - lem-smooth-projective-analytification-has-rational-kahler-polarization
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - thm-general-stokes-theorem
  - thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 18 'The Hodge decomposition' (October 31), 6 pp.; Theorem 18.15 (Hodge–Riemann bilinear relations)"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"
    - title: "Pierre Deligne, Théorie de Hodge II, Publications mathématiques de l'IHÉS 40 (1971), 5-57; (2.1.15)-(2.1.17), printed pp. 26-27"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter VI §4.4-(4.6), printed pp. 296-297; the Fubini–Study metric and the submanifold restriction"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
analytic suppliers below. Let $X$ be a compact Kähler $n$-fold in the
conventions of
[[def-compact-kahler-manifold-and-hodge-polarization-conventions]], with
Kähler form $\omega$, and let $0\le k\le n$. For this proof also write $Q_k$ for the same form on all of $H^k$, and on the primitive space $P^k$ put
$$Q_k(a,b)=\epsilon(k)\int_Xa\wedge b\wedge\omega^{n-k},$$
where $a,b$ are closed smooth representatives of the classes and the integral
is independent of the representatives. This form is $(-1)^k$-symmetric, pairs
$P^{p,q}$ only with $P^{q,p}$, and for nonzero $a\in P^{p,q}$ satisfies
$$i^{p-q}Q_k(a,\bar a)=(n-k)!\,\|a_{\mathrm{harm}}\|_{L^2}^2>0.$$
If $[\omega]=\ell\in H^2(X;\mathbb Q)$, then $Q_k$ is a rational polarization
of $P^k$, and full $H^k$ is polarized by the orthogonal direct sum form $S_k$
that on $L^rP^{k-2r}$ is $(-1)^rQ_k$, equivalently
$S_k(L^ru,L^rv)=Q_{k-2r}(u,v)$ for $u,v\in P^{k-2r}$; degrees $k>n$ are
polarized by transporting the polarization of $H^{2n-k}$ along $L^{k-n}$, with
Tate shift. For every real Kähler class the same positivity and nondegeneracy
statements hold, without rationality. In particular this applies to smooth
closed complex projective submanifolds of projective space with a hyperplane
polarization, hence to smooth projective complex varieties through their smooth
projective analytifications; more generally it applies to every real Kähler
class, including $\ell+\epsilon\eta$ when represented by a positive closed
form. For any continuous family of Kähler classes the primitive kernels (of
every fixed degree $0\le k\le n$) vary continuously as subspaces; rational
primitive spaces are asserted only at rational classes.

## Facts & Assumptions

**Given:** A compact Kähler $n$-fold $X$ with Kähler form $\omega$ and a degree $0\le k\le n$.

[F1] The conventions for Kähler forms, the orientation, the Hodge star, the $L^2$ pairing $\langle\alpha,\beta\rangle=\int_X\alpha\wedge*\bar\beta$, the Weil operator $C$ and polarizations are those of [[def-compact-kahler-manifold-and-hodge-polarization-conventions]].

[F2] For a primitive form $u$ of type $(p,q)$ and degree $k$, the pointwise Weil star identity is $*u=\epsilon(k)i^{q-p}L^{n-k}u/(n-k)!$, and primitive harmonic forms are exactly the harmonic forms in $\ker\Lambda$ ([[lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity]]).

[F3] On the compact Kähler manifold the hard-Lefschetz maps $L^{n-j}:H^j\to H^{2n-j}$ are isomorphisms for $0\le j\le n$, $P^k=\ker\bigl(L^{n-k+1}\bigr)$ for $0\le k\le n$, $H^j=\bigoplus_{r\ge\max(0,j-n)}L^rP^{j-2r}$, a class of type $(p,q)$ has primitive components of type $(p-r,q-r)$, and if $[\omega]$ is rational these structures are rational ([[thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz]]).

[F4] Every de Rham class has a unique harmonic representative, the Hodge decomposition is by type, and $H^r(X;\mathbb Q)$ is a pure Hodge structure functorial for pullback and with Hodge-type cup product ([[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]]).

[F5] The top-integral lemma identifies $\int_X\alpha_1\wedge\dots\wedge\alpha_r$ with the Kronecker evaluation of the cup product of the de Rham classes against the real fundamental class $[X]$ ([[lem-de-rham-top-integral-is-fundamental-class-evaluation]]).

[F6] The general Stokes theorem requires only $\mathrm{AC}_\omega$, which the standing Axiom of Choice supplies by [[thm-choice-implies-dependent-implies-countable-choice]] ([[thm-general-stokes-theorem]]).

[F7] For a smooth closed complex submanifold of projective space, the Fubini–Study form restricts to a positive closed real $(1,1)$-form whose class is the real image of the integral hyperplane class, by the first-Chern comparison ([[lem-first-chern-form-agrees-with-the-topological-line-class]]); for a smooth projective complex variety, the ample class is realized by a positive closed $(1,1)$-form on the compact Kähler analytification ([[lem-smooth-projective-analytification-has-rational-kahler-polarization]]).

[F8] The de Rham, real and rational comparisons are compatible with pullback and cup product, and rational primitive spaces are rational subspaces of the rational cohomology ([[lem-rational-cohomology-scalar-comparison-for-compact-smooth-manifolds]]).

## Proof

1.1 Let $a,b$ be closed smooth representatives of classes in $P^k$. Replacing $a$ by $a+du$ changes the integrand by $du\wedge b\wedge\omega^{n-k}$, which is $d(u\wedge b\wedge\omega^{n-k})$ up to sign because $b$ and $\omega$ are closed; the general Stokes theorem [F6] on the compact boundaryless $X$ gives $\int_Xd(\,\cdot\,)=0$, and the same argument applies in the second variable, so $Q_k$ depends only on the classes. Since $\deg a=\deg b=k$, one has $b\wedge a=(-1)^k a\wedge b$, hence $Q_k(b,a)=(-1)^kQ_k(a,b)$. If $a$ has type $(p,q)$ and $b$ type $(r,s)$ with $p+q=r+s=k$, the top form $a\wedge b\wedge\omega^{n-k}$ has type $(p+r+n-k,\,q+s+n-k)$, which can equal $(n,n)$ only if $p+r=k=q+s$, that is $(r,s)=(q,p)$; so $Q_k$ pairs $P^{p,q}$ only with $P^{q,p}$. For nonzero $a\in P^{p,q}$ let $a$ also denote its harmonic representative, which is primitive of type $(p,q)$ by [F2, F3, F4] and satisfies the displayed positivity: the conjugate form $\bar a$ is primitive of type $(q,p)$, so the pointwise Weil star identity [F2] gives $*\bar a=\epsilon(k)i^{p-q}L^{n-k}\bar a/(n-k)!$, whence $a\wedge*\bar a=\epsilon(k)i^{p-q}a\wedge\bar a\wedge\omega^{n-k}/(n-k)!$ and, integrating with the $L^2$ pairing of [F1], $i^{p-q}Q_k(a,\bar a)=(n-k)!\langle a,a\rangle=(n-k)!\|a_{\mathrm{harm}}\|_{L^2}^2>0$. Distinct types are $L^2$-orthogonal, so for $x=\sum_{p+q=k}x^{p,q}$ the Hermitian form $h(x,y)=Q_k(Cx,\bar y)$ of [F1] evaluates as $h(x,x)=\sum_{p+q=k}i^{p-q}Q_k(x^{p,q},\bar x^{p,q})=\sum_{p+q=k}(n-k)!\|x^{p,q}\|^2>0$; hence $Q_k$ is nondegenerate and satisfies the polarization conditions of [F1], the rationality clause aside. [F1, F2, F3, F4, F6, given, algebra]

2.1 Assume now that $[\omega]=\rho(\ell)$ with $\ell\in H^2(X;\mathbb Q)$. By the rationality clause of [F3] the primitive space $P^k=\ker L^{n-k+1}$ is a rational subspace of $H^k(X;\mathbb Q)$ and its complexification is preserved by the Weil operator, and by [F8] the rational and de Rham structures are the natural ones compatible with cup product. For rational classes $a,b\in P^k$ the top-integral lemma [F5] and the compatibility of the de Rham comparison with cup product identify $Q_k(a,b)=\epsilon(k)\int_Xa\wedge b\wedge\omega^{n-k}$ with $\epsilon(k)\langle a\smile b\smile\ell^{n-k},[X]\rangle$, the Kronecker evaluation of a rational cohomology class against the integral fundamental class, hence a rational number; step 1.1 then exhibits $Q_k$ as a rational polarization of the pure Hodge structure $P^k$ in the sense of [F1, F4]. [F1, F3, F4, F5, F8, step 1.1, given, algebra]

3.1 For a class of degree $k\le n$ write $a=\sum_rL^ra_r$, $b=\sum_sL^sb_s$ with $a_r\in P^{k-2r}$ and $b_s\in P^{k-2s}$ by the Lefschetz decomposition of [F3], and set $S_k(a,b):=\sum_r(-1)^rQ_k(L^ra_r,L^rb_r)$. Since $\epsilon(k)=\epsilon(k-2r+2r)=(-1)^r\epsilon(k-2r)$, one has $(-1)^rQ_k(L^ru,L^rv)=Q_{k-2r}(u,v)$ for $u,v\in P^{k-2r}$: both sides are integrals of $u\wedge v\wedge\omega^{n-k+2r}$ with the respective constants. Hence on the summand $L^rP^{k-2r}$ the form $S_k$ is the transport of the polarization $Q_{k-2r}$ via $L^r$, and distinct summands are orthogonal, because for $r<s$ the integral of $L^ra_r\wedge L^sb_s\wedge\omega^{n-k}$ equals $\int_Xa_r\wedge b_s\wedge\omega^{n-k+r+s}$ up to sign and $n-k+r+s\ge n-(k-2r)+1$, so the integral vanishes: on harmonic primitive representatives, $L^{n-(k-2r)+1}a_r=0$ by [F2], and changing to those representatives does not change the integral by step 1.1. Since $L$ shifts both Hodge indices by $1$ and commutes with the Weil operator, which acts by type scalars, the positivity of step 1.1 transfers to every summand, so $S_k$ is nondegenerate, $(-1)^k$-symmetric, type-orthogonal with positive definite Weil form, and rational when $\ell$ is rational: a rational polarization of the pure Hodge structure $H^k$. For $n<k\le2n$ hard Lefschetz [F3] gives the rational isomorphism $L^{k-n}:H^{2n-k}\to H^k$, which shifts both Hodge indices by $k-n$, and the transported form $S_k(a,b):=S_{2n-k}(L^{-(k-n)}a,L^{-(k-n)}b)$ is again a polarization, of the Tate twist $H^{2n-k}(-(k-n))$. For $k>2n$, [F4] computes cohomology by a de Rham complex with no degree-$k$ forms, so $H^k=0$ and its unique bilinear form is a vacuous polarization. This proves the polarization clauses; replacing the rational class by an arbitrary real Kähler class keeps the positivity and nondegeneracy arguments of steps 1.1 and 2.1 for that metric but drops only rationality. [F1, F2, F3, F4, step 1.1, step 2.1, given, algebra]

4.1 Let $Y\subseteq\mathbb P^M$ be a smooth closed complex submanifold; the restriction of the Fubini–Study form is a Kähler form on $Y$, and its class is the real image of the integral hyperplane class $c_1(\mathcal O(1)|_Y)$ by [F7], so the hyperplane class is rational and steps 1.1-3.1 apply to $Y$. For a smooth projective complex variety $X$ with ample class $\ell$, the analytification $X^{\mathrm{an}}$ is compact Kähler and [F7] supplies a positive closed real $(1,1)$-form $\eta$ representing $\rho(\ell)$; $\eta$ is the fundamental form of a Kähler metric on $X^{\mathrm{an}}$ (its $(1,1)$-form is positive and closed), and applying steps 1.1-3.1 to $(X^{\mathrm{an}},\eta)$ proves the smooth projective clauses. The same argument applies to every real Kähler class, since such a class is by definition represented by a Kähler form, and to $\ell+\epsilon\eta$ whenever that class is represented by a positive closed form; in these last cases no rationality is claimed. [F7, F8, step 1.1, step 2.1, step 3.1, given, algebra]

5.1 Fix $0\le k\le n$ and a continuous family $t\mapsto\ell_t$ of real Kähler classes on the fixed $X$, and put $A(t):=L(t)^{n-k+1}:H^k(X;\mathbb R)\to H^{2n-k+2}(X;\mathbb R)$, cup product with $\ell_t^{n-k+1}$. In fixed bases of the finite-dimensional real cohomology spaces the matrix of $A(t)$ depends continuously on $t$, and its rank is the topological constant $\dim H^{k-2}(X;\mathbb R)$: the Lefschetz decomposition of [F3] writes $H^k=P^k\oplus L\,H^{k-2}$ with $P^k=\ker A(t)$, and $L:H^{k-2}\to H^k$ is injective by hard Lefschetz for $k-2\le n$, the cases $k=0,1$ having $H^{-2}=H^{-1}=0$. At any parameter $t_0$ choose a nonvanishing maximal minor of the matrix of $A(t_0)$; by continuity it stays invertible for $t$ near $t_0$, and solving the corresponding pivot equations expresses $\ker A(t)=P^k(t)$ as the graph of a continuously varying matrix over the complementary coordinate subspace. Hence the primitive kernels of every fixed degree $0\le k\le n$ vary continuously as subspaces. For each parameter a Kähler representative exists by the definition of Kähler class; positivity at that parameter is that of step 1.1 for this representative and is not inferred by continuity at a limiting non-Kähler class, and rationality of primitive spaces is asserted only at rational classes by step 2.1. [F3, step 1.1, step 2.1, given, algebra] ∎
