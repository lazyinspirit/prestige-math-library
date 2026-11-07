---
id: thm-first-algebraic-derham-betti-comparison-for-complex-abelian-varieties
kind: theorem
title: First algebraic de Rham–Betti comparison for complex abelian varieties
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- thm-abelian-variety-dual-and-polarization
- thm-complex-abelian-variety-uniformizes-as-complex-torus
- lem-smooth-projective-analytification-has-rational-kahler-polarization
- lem-integral-riemann-form-defines-a-positive-holomorphic-line-bundle
- thm-rational-riemann-form-makes-complex-torus-projective
- lem-embedded-analytic-torus-operation-graphs-are-algebraic
- thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic
- thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
- thm-liouville-bounded-entire-function
- def-axiom-of-choice
- def-dependent-choice
- lem-invariant-differentials-of-a-group-scheme
- thm-global-functions-proper-integral-variety
- thm-first-hypercohomology-spectral-sequence
- lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {}
---

## Statement

Assume AC and DC. Let $A/\mathbb C$ be an abelian variety. The natural analytification and holomorphic de Rham maps give an isomorphism
$$H^1_{\mathrm{dR}}(A/\mathbb C)\xrightarrow{\sim}H^1(A^{\mathrm{an}},\mathbb C).$$
It is natural in algebraic homomorphisms and identifies the Hodge filtration piece $F^1$ with $H^0(A,\Omega_A^1)$. This is a fibrewise degree-one assertion; no relative connection or higher-degree comparison is claimed.

## Facts & Assumptions

**Given:** AC, DC and the complex abelian variety in the Statement.

[F1] The degree-zero rigidified Picard functor is represented by a dual abelian variety of the same dimension, and an ample line bundle induces an isogeny to that dual ([[thm-abelian-variety-dual-and-polarization]]).

[F2] A complex abelian variety analytifies to a complex torus $V/\Lambda$; an ample line bundle gives a positive closed real $(1,1)$ form with integral cohomology class ([[thm-complex-abelian-variety-uniformizes-as-complex-torus]], [[lem-smooth-projective-analytification-has-rational-kahler-polarization]]).

[F3] A positive integral Riemann form gives the explicit Appell–Humbert factors, and a positive tensor power of the resulting bundle embeds the torus; the embedded torus image and holomorphic group isomorphism are algebraic ([[lem-integral-riemann-form-defines-a-positive-holomorphic-line-bundle]], [[thm-rational-riemann-form-makes-complex-torus-projective]], [[lem-embedded-analytic-torus-operation-graphs-are-algebraic]], [[thm-holomorphic-group-homomorphisms-between-complex-abelian-varieties-are-algebraic]]).

[F4] On a compact Kähler manifold, $H^1(\mathcal O)$ is the space of harmonic $(0,1)$ classes; bounded entire functions are constant ([[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]], [[thm-liouville-bounded-entire-function]]).

[F5] Invariant differentials trivialize the cotangent bundle of a group scheme; global functions on a proper geometrically integral variety are the base field ([[lem-invariant-differentials-of-a-group-scheme]], [[thm-global-functions-proper-integral-variety]]).

[F6] The first hypercohomology spectral sequence has $E_1^{p,q}=H^q(\Omega^p)$ and is natural under DC; on locally contractible metric spaces the cohomology of the constant sheaf is singular cohomology ([[thm-first-hypercohomology-spectral-sequence]], [[lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology]]).

## Proof

**Proof technique:** compare $H^1(\mathcal O)$ through the Picard tangent, then use invariant differentials and the degree-one hypercohomology spectral sequence.

1.1 By [F1], the rigidified degree-zero Picard functor is represented by an abelian variety $\widehat A$ of dimension $g=\dim A$. A first-order deformation of the trivial rigidified line bundle over $\mathbb C[\varepsilon]/(\varepsilon^2)$ has transition functions $1+\varepsilon f_{ij}$ on an affine cover; the cocycle and change-of-trivialization equations are exactly the additive Čech $1$-cocycle and coboundary equations. The rigidification removes pullback of a line bundle from the base, which is trivial on the local dual-number scheme. Thus the tangent space at the identity of the represented Picard functor is $H^1(A,\mathcal O_A)$. Such a first-order deformation has trivial special fibre and hence lies in the degree-zero subfunctor. Therefore $H^1(A,\mathcal O_A)$ has dimension $g$. The same transition calculation in holomorphic charts identifies analytic first-order line-bundle deformations with $H^1(A^{\mathrm{an}},\mathcal O)$, and analytification sends the algebraic cocycle to the identical holomorphic cocycle. [F1, given, construct, algebra]

1.2 By [F2], identify $A^{\mathrm{an}}$ with $V/\Lambda$ and choose an ample bundle with positive closed form $\omega$ representing an integral class. Average $\omega$ over translations of the compact real torus, using normalized Lebesgue measure on a lattice parallelepiped. The average is a translation-invariant positive closed $(1,1)$ form in the same cohomology class because every translation is homotopic to the identity. Its constant alternating form $\psi$ on $V_\mathbb R$ has integral lattice periods, as those periods evaluate the integral class on the corresponding two-dimensional subtori. Thus $\psi$ is a positive integral Riemann form. By [F3], its explicit semicharacter factors define a holomorphic line bundle $L_0$ and some $L_0^{\otimes m}$ has a projective embedding. The embedding identifies its image with an algebraic abelian variety by [F3], and the induced holomorphic group isomorphism from the original $A$ is algebraic by [F3]. Hence the embedding is an algebraic closed immersion of $A$, and $L=L_0^{\otimes m}$ is the analytification of the algebraic ample bundle obtained by pulling back $\mathcal O(1)$. [F2, F3, given, choose, construct, algebra]

2.1 Let $H(v,w)=\psi(v,Jw)-i\psi(v,w)$, complex-linear in the first variable. With the factors of [F3], translation by $x\in V$ changes the factors of $L$ by the constant multiplier $e^{m\pi H(x,\lambda)}$ at $\lambda\in\Lambda$. Thus the analytic first-order deformation $t_{\varepsilon v}^*L\otimes L^{-1}$ is represented on the universal cover by the additive factor cocycle $\lambda\mapsto m\pi H(v,\lambda)$. If its class in $H^1(A^{\mathrm{an}},\mathcal O)$ were zero, the deformation would admit a global holomorphic trivialization; pulling it to $V$ gives an entire function $F$ with $F(z+\lambda)-F(z)=m\pi H(v,\lambda)$. Every derivative of $F$ is $\Lambda$-periodic, hence bounded on $V$ by compactness of a fundamental parallelepiped, and is constant by [F4] applied on complex lines. Thus $F$ is affine complex-linear. Its linear part and $m\pi H(v,-)$ agree on the real-spanning lattice and hence on $V_\mathbb R$, but the former is complex-linear and the latter conjugate-linear. Both can agree only when $H(v,-)=0$, and positivity of $H$ forces $v=0$. Hence the derivative of the analytic Mumford map $x\mapsto t_x^*L\otimes L^{-1}$ into $H^1(A^{\mathrm{an}},\mathcal O)$ is injective. [F3, F4, given, step 1.2, construct, algebra]

3.1 The isogeny $\varphi_L:A\to\widehat A$ from [F1] has invertible differential in characteristic zero. Its derivative followed by the algebraic-to-analytic map of step 1.1 is the analytic derivative computed in step 2.1. Therefore the comparison map is injective on the $g$-dimensional algebraic source. The target also has dimension $g$: on the flat translation-invariant Kähler torus, [F4] identifies $H^1(\mathcal O)$ with harmonic $(0,1)$ forms, and Fourier expansion on the real torus shows that only the zero-frequency constant $(0,1)$ forms are harmonic. Thus the injective map is an isomorphism. Naturality follows from functoriality of analytification and pullback on Čech cocycles. The point abelian variety has both groups zero. [F1, F4, given, step 1.1, step 1.2, step 2.1, algebra]

4.1 By [F5], invariant algebraic differentials trivialize $\Omega^1_A$ as $\mathcal O_A\otimes V^*$, where $V$ is the tangent space at the identity, and exterior powers trivialize $\Omega^p_A$. Since $H^0(A,\mathcal O_A)=\mathbb C$ by [F5], all global algebraic $p$-forms are invariant. Analytically, the coefficients of any holomorphic $p$-form in the constant coordinates on $V$ are $\Lambda$-periodic entire functions and are constant by [F4]. Hence analytification identifies $H^0(A,\Omega_A^p)$ with the holomorphic global $p$-forms for every $p$, and all these forms are closed. The same invariant basis identifies $H^1(A,\Omega_A^1)$ with $H^1(A,\mathcal O_A)\otimes V^*$ and its analytic counterpart similarly. Step 3.1 therefore makes their comparison an isomorphism. [F4, F5, given, step 3.1, construct, algebra]

5.1 Apply [F6] to the algebraic and holomorphic de Rham complexes. On the compact analytic Kähler torus, [F4] says the holomorphic Hodge-to-de Rham spectral sequence degenerates at $E_1$. Therefore the analytic $d_1:H^1(\mathcal O)\to H^1(\Omega^1)$ is zero. The comparison square commutes, and step 4.1 identifies the target, so the algebraic $d_1$ is zero as well. The only later differential leaving $E_2^{0,1}$ is $d_2$ to $E_2^{2,0}$. By step 4.1, global $1$-forms are closed and algebraic global $2$-forms compare injectively, so $E_2^{2,0}$ compares injectively to its analytic counterpart. Analytic degeneration makes the analytic $d_2$ zero, hence the algebraic $d_2$ is zero. There are no further outgoing differentials in nonnegative bidegrees. [F4, F6, given, step 4.1, algebra]

6.1 Since global functions are constant and global $1$-forms are closed, [F6] now gives a short exact sequence $$0\longrightarrow H^0(A,\Omega_A^1)\longrightarrow H^1_{\mathrm{dR}}(A/\mathbb C)\longrightarrow H^1(A,\mathcal O_A)\longrightarrow0,$$ and the analogous analytic sequence. The comparison maps on both end terms are isomorphisms by steps 3.1 and 4.1, so the middle map is an isomorphism by a direct diagram chase. Locally on a complex ball, radial integration contracts the positive-degree holomorphic de Rham complex: for a holomorphic $p$-form use $K\omega(z)=\int_0^1t^{p-1}\iota_{\mathrm{rad}}\omega(tz)\,dt$ and verify $dK+Kd=1$ in positive degree. Thus the holomorphic de Rham complex resolves the constant sheaf $\mathbb C$; by [F6] its hypercohomology is singular cohomology. This identifies the middle analytic term with $H^1(A^{\mathrm{an}},\mathbb C)$ and proves the comparison. It respects the $F^1$ subspace of global $1$-forms and is natural under algebraic homomorphisms because analytification and all constructions commute with pullback. The dimension-zero case is immediate. [F5, F6, given, step 3.1, step 4.1, step 5.1, construct, algebra] ∎

## Boundary

Only the fibrewise first de Rham comparison is proved; relative Gauss–Manin and higher-degree comparisons remain separate.
