---
id: lem-structure-sheaf-euler-characteristic-is-one-minus-genus
kind: lemma
title: The Euler characteristic of the structure sheaf is one minus the genus
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 10
deps:
  - cor-closed-differential-forms-are-locally-exact
  - cor-complex-analytic-functions-have-local-primitives
  - cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology
  - cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - cor-top-de-rham-cohomology-of-a-closed-connected-oriented-manifold-is-real
  - def-axiom-of-choice
  - def-cellular-homology
  - def-countable-choice
  - def-de-rham-cohomology
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-exact-sequence-sheaves
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-line-bundle-associated-to-a-divisor
  - def-polygonal-schema-and-edge-pairing
  - def-riemann-surface-and-holomorphic-atlas
  - def-singular-cochain-complex-with-coefficients
  - def-singular-simplex-and-singular-chain-group-with-coefficients
  - def-smooth-differential-k-form
  - def-smooth-manifold
  - lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions
  - prop-exterior-derivative-of-a-function-is-its-differential
  - thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces
  - thm-cellular-homology-computes-singular-homology
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann
  - thm-exactness-of-sheaves-stalkwise
  - thm-finiteness-cohomology-compact-riemann-surface
  - thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology
  - thm-local-maximum-modulus-principle
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-smooth-function-module-sheaves-are-acyclic
  - thm-topological-classification-compact-riemann-surfaces
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - thm-zero-complex-derivative-on-a-domain-implies-constant
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "Ch. 2 §§14.9–14.11, printed pp. 115–116: structure-sheaf finiteness and the analytic-genus convention; §§15.9(c), 15.12–15.15, printed pp. 123–126: the holomorphic de Rham sequence, Dolbeault and de Rham cohomology; §16.9(a), printed p. 130, defines the arithmetic genus and is not used to identify it with the topological genus."
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 3 §4, Corollary 3.32, printed p. 40: the Hodge–Weyl decomposition gives dim Ω(S)=g; this is an alternate route, while the item derives the same dimension from the holomorphic de Rham sequence and harmonic-star duality."
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 8, Theorem 8.10, printed pp. 81–82, and Ch. 9, Theorem 9.1, printed pp. 85–86: the structure-sheaf cohomology and χ(O)=1−g_a; Corollary 9.11, printed p. 88, later proves g_a=g using Riemann–Roch, so that identification is not used here."
    - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Université Grenoble Alpes)
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §3.1, (3.3′)–(3.7), printed pp. 291–292, defines the bundle-valued # map and its norm identity; §7, (7.1)–(7.4), printed pp. 309–310, proves Hodge finiteness and the nondegenerate Serre pairing by Stokes and the positive norm."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact Riemann surface of topological genus $g$ ([[def-riemann-surface-and-holomorphic-atlas]], [[def-genus-and-euler-characteristic-compact-riemann-surface]], [[thm-topological-classification-compact-riemann-surfaces]]). Identify $\mathcal O_X(0)$ with the structure sheaf $\mathcal O_X$ by the canonical trivialization ([[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[def-line-bundle-associated-to-a-divisor]]). Use the finite-dimensionality and notation $\chi(\mathcal O_X)=\ell(0)-i(0)$ from [[thm-finiteness-cohomology-compact-riemann-surface]].

1. The global holomorphic functions on $X$ are exactly the constants, so $\ell(0)=\dim H^0(X,\mathcal O_X)=1$.

2. For each $F\in\{\mathbb R,\mathbb C\}$,
$$\dim_F H^1_{\mathrm{sing}}(X;F)=\dim_F H^1_{\mathrm{dR}}(X;F)=2g,\qquad \dim_F H^2_{\mathrm{sing}}(X;F)=\dim_F H^2_{\mathrm{dR}}(X;F)=1.$$
Integration identifies $H^2_{\mathrm{dR}}(X;\mathbb R)$ with $\mathbb R$. The constant sheaf $\mathbb C_X$ has $\dim_{\mathbb C}H^1(X,\mathbb C_X)=2g$ and $\dim_{\mathbb C}H^2(X,\mathbb C_X)=1$.

3. Let $K=\Lambda^{1,0}T^*X$ be the canonical holomorphic line bundle and let $\Omega_X^1$ be its sheaf of holomorphic sections ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]). The holomorphic de Rham sequence
$$0\longrightarrow\mathbb C_X\longrightarrow\mathcal O_X\xrightarrow{\ d\ }\Omega_X^1\longrightarrow0$$
is exact.

4. The induced long exact sequence and harmonic-star duality give
$$\dim H^1(X,\mathcal O_X)=g,\qquad \chi(\mathcal O_X)=1-g.$$

## Facts & Assumptions

**Given:** Full AC, a compact Riemann surface $X$ of topological genus $g$, and the compatible metrics on $X$, $\mathcal O_X$, and $K$ required by the Hodge inputs.

[F1] Full AC is used by the surface-classification, universal-coefficient, derived-sheaf-cohomology, long-exact-sequence, finiteness, and Hodge inputs. Its consequences $\mathrm{AC}_\omega$ and DC supply the hypotheses of the real de Rham comparison and the smooth-module acyclicity argument ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] The genus $g$ is topological. For $g\ge1$, the polygonal model has one vertex, $2g$ one-cells, and one two-cell attached by $\prod_{i=1}^g a_i b_i a_i^{-1}b_i^{-1}$; for $g=0$, the model is $S^2$ ([[def-genus-and-euler-characteristic-compact-riemann-surface]], [[thm-topological-classification-compact-riemann-surfaces]], [[def-polygonal-schema-and-edge-pairing]]).

[F3] With coefficients in a field $F$, for $g\ge1$ the cellular chain groups are $C_2=F$, $C_1=F^{2g}$, $C_0=F$, and both boundary maps vanish: each one-cell begins and ends at the sole vertex, and each generator has exponent sum zero in the attaching commutator word. For $g=0$, the sphere's CW model has one zero-cell and one two-cell, with zero boundary maps. Cellular homology computes singular homology ([[def-cellular-homology]], [[thm-cellular-homology-computes-singular-homology]]).

[F4] For $F=\mathbb R$ or $\mathbb C$, the singular chain complex $C_*(X;F)$ is free over the PID $F$ and its dual cochain complex is the singular cochain complex with coefficients in $F$. The universal-coefficient exact sequence has zero Ext term because every $F$-module is free, so $H^q_{\mathrm{sing}}(X;F)\cong\operatorname{Hom}_F(H_q(X;F),F)$ ([[def-singular-simplex-and-singular-chain-group-with-coefficients]], [[def-singular-cochain-complex-with-coefficients]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

[F5] Under $\mathrm{AC}_\omega$, the real de Rham comparison identifies real de Rham cohomology with continuous real singular cohomology. Integration identifies top-degree real de Rham cohomology of a closed connected oriented surface with $\mathbb R$ ([[def-de-rham-cohomology]], [[cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology]], [[cor-top-de-rham-cohomology-of-a-closed-connected-oriented-manifold-is-real]]).

[F6] Complex-valued smooth forms are the complexification of real-valued smooth forms. Since the exterior derivative is real-linear, kernels, images, and cohomology commute with this scalar extension by the unique real-plus-imaginary decomposition.

[F7] Closed smooth forms of positive degree are locally exact ([[cor-closed-differential-forms-are-locally-exact]]).

[F8] The sheaves of smooth complex-valued $k$-forms are modules over the sheaf of real smooth functions; under full AC they are acyclic in positive sheaf-cohomology degrees ([[def-smooth-differential-k-form]], [[thm-smooth-function-module-sheaves-are-acyclic]]).

[F9] The constant sheaf $\mathbb C_X$ is the sheaf of locally constant complex-valued functions ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F10] Sheaf-sequence exactness is stalkwise, and a short exact sequence of sheaves gives a long exact sequence in sheaf cohomology ([[def-exact-sequence-sheaves]], [[thm-exactness-of-sheaves-stalkwise]], [[thm-long-exact-sequence-sheaf-cohomology]]).

[F11] In a holomorphic coordinate, the coordinate formula for $d$ and the Cauchy–Riemann equations give $dF=F'(z)\,dz$ for a holomorphic function $F$. Such functions have local holomorphic primitives, and a holomorphic function with zero derivative on a connected domain is constant ([[prop-exterior-derivative-of-a-function-is-its-differential]], [[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]], [[cor-complex-analytic-functions-have-local-primitives]], [[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

[F12] A holomorphic atlas gives the underlying smooth surface, and $K=\Lambda^{1,0}T^*X$ is its canonical holomorphic line bundle. Compatible metrics on $X$ and on each holomorphic line bundle exist by averaging smooth real metrics with the complex structures; this existence uses $\mathrm{AC}_\omega$, supplied by full AC ([[def-riemann-surface-and-holomorphic-atlas]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]], [[def-smooth-manifold]], [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

[F13] The global holomorphic sections and degree-one sheaf cohomology of $\mathcal O_X(D)$ are finite-dimensional, and $\chi(\mathcal O_X(D))=\ell(D)-i(D)$ ([[thm-finiteness-cohomology-compact-riemann-surface]]).

[F14] The global Dolbeault resolution identifies sheaf cohomology with smooth Dolbeault cohomology in degrees $0,1$ and gives $H^q(X,\mathcal O_X(E))=0$ for $q\ge2$, without a finite-cover hypothesis ([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]).

[F15] For a holomorphic Hermitian line bundle $G$ on compact $X$, the Dolbeault groups are finite-dimensional with unique harmonic representatives, and the perfect complex-bilinear Hodge pairing gives $H^{0,1}(X,G)^*\cong H^0(X,K\otimes G^*)$. In particular, for $G=\mathcal O_X$ and $G=K$, their dual holomorphic spaces are $H^0(X,K)$ and $H^0(X,\mathcal O_X)$ respectively ([[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]], [[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]]).

[F16] The zero-divisor bundle is canonically trivial, identifying $\mathcal O_X(0)$ with the structure sheaf $\mathcal O_X$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]], [[def-line-bundle-associated-to-a-divisor]]).

[F17] The local maximum-modulus principle says that if the modulus of a holomorphic function on a domain has an interior local maximum, then the function is constant ([[thm-local-maximum-modulus-principle]]).

## Proof

The proof computes the constant-sheaf groups from an acyclic smooth de Rham resolution and then uses the holomorphic de Rham sequence. The smooth-form sheaves are acyclic modules; they are not asserted to be flasque.

1.1 Let $f\in H^0(X,\mathcal O_X)$. Compactness makes $|f|$ attain a maximum, and the local maximum-modulus principle in [F17] on the connected surface makes $f$ constant. Conversely every constant is holomorphic, so $\ell(0)=\dim H^0(X,\mathcal O_X)=1$ by [F13] and [F16]. [F13, F16, F17, given]

1.2 Fix $F\in\{\mathbb R,\mathbb C\}$. If $g\ge1$, the cellular groups and zero differentials in [F3] give $H_1(X;F)=F^{2g}$ and $H_2(X;F)=F$. If $g=0$, the sphere cell model in [F3] gives $H_1(X;F)=0$ and $H_2(X;F)=F$, again the same formulas with $2g=0$. Applying [F4] over the field $F$ yields $\dim_F H^1_{\mathrm{sing}}(X;F)=2g$ and $\dim_F H^2_{\mathrm{sing}}(X;F)=1$. The real comparison in [F5] gives $\dim_{\mathbb R}H^1_{\mathrm{dR}}(X;\mathbb R)=2g$, while integration gives $H^2_{\mathrm{dR}}(X;\mathbb R)\cong\mathbb R$. Complexifying the real de Rham complex and using [F6] gives the complex de Rham dimensions. [F1, F2, F3, F4, F5, F6, given, algebra]

1.3 In a holomorphic coordinate, [F11] gives $dF=F'(z)\,dz$, so the kernel sheaf of $d:\mathcal O_X\to\Omega_X^1$ is locally constant by the zero-derivative assertion in [F11]. Every holomorphic $1$-form is locally $a(z)\,dz$ with $a$ holomorphic, and [F11] supplies a local holomorphic primitive of $a$, making $d:\mathcal O_X\to\Omega_X^1$ surjective on stalks. With the inclusion of constants, stalkwise exactness [F10] proves the holomorphic de Rham sequence in statement 3. [F9, F10, F11, F12, given]

2.1 Let $\mathcal E^k_{\mathbb C}$ be the sheaf of smooth complex-valued $k$-forms on the smooth surface from [F12] and put $\mathcal Z^1_{\mathbb C}:=\ker(d:\mathcal E^1_{\mathbb C}\to\mathcal E^2_{\mathbb C})$. On a connected coordinate disk, $\ker(d:\mathcal E^0_{\mathbb C}\to\mathcal E^1_{\mathbb C})=\mathbb C_X$ because a smooth function with zero differential is constant along line segments. The first sequence $0\to\mathbb C_X\to\mathcal E^0_{\mathbb C}\to\mathcal Z^1_{\mathbb C}\to0$ is stalkwise exact by this kernel calculation and [F7]. Every smooth $2$-form is closed by dimension, so [F7] also makes $\mathcal E^1_{\mathbb C}\to\mathcal E^2_{\mathbb C}$ surjective on stalks; by definition its kernel is $\mathcal Z^1_{\mathbb C}$. Thus $0\to\mathcal Z^1_{\mathbb C}\to\mathcal E^1_{\mathbb C}\to\mathcal E^2_{\mathbb C}\to0$ is stalkwise exact. Both sequences are exact by [F10]. The smooth-form terms are acyclic by [F8], so their long exact sequences identify $H^1(X,\mathbb C_X)$ with closed complex $1$-forms modulo exact ones and $H^2(X,\mathbb C_X)$ with complex $2$-forms modulo exact ones. Step 1.2 gives their dimensions $2g$ and $1$. [F1, F7, F8, F9, F10, F12, step 1.2, algebra]

3.1 Apply the sheaf-cohomology long exact sequence [F10] to statement 3. Since $H^0(X,\mathbb C_X)=\mathbb C$ by connectedness and [F9], the map $H^0(X,\mathbb C_X)\to H^0(X,\mathcal O_X)$ is the identity by step 1.1; also $H^2(X,\mathcal O_X)=0$ by [F14]. The resulting exact segment is $0\to H^0(X,\Omega_X^1)\to H^1(X,\mathbb C_X)\to H^1(X,\mathcal O_X)\to H^1(X,\Omega_X^1)\to H^2(X,\mathbb C_X)\to0$. Set $h:=\dim H^1(X,\mathcal O_X)$, finite by [F13]. The Čech–Dolbeault comparison in [F14] identifies the sheaf groups in degrees $0,1$ with Dolbeault groups for the trivial bundle and $K$. With the supplied compatible metrics in [F12], apply [F15] to the trivial bundle and $K$; all terms are finite-dimensional, $\dim H^0(X,\Omega_X^1)=h$, and $\dim H^1(X,\Omega_X^1)=\dim H^0(X,\mathcal O_X)=1$. Alternating dimensions, using [F9] and step 2.1, give $h-2g+h-1+1=0$, hence $h=g$. By step 1.1 and [F13], $\chi(\mathcal O_X)=\ell(0)-i(0)=1-g$. [F1, F9, F10, F12, F13, F14, F15, step 1.1, step 2.1, step 1.3, algebra] ∎
