---
id: ex-dolbeault-cohomology-is-independent-of-hermitian-metric
kind: example
title: Dolbeault cohomology is independent of hermitian metric
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 10
deps:
- cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional
- def-axiom-of-choice
- def-complex-domain
- def-countable-choice
- def-covering-space-action
- def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
- def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
- def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
- def-riemann-surface-and-holomorphic-atlas
- def-riemannian-metric-and-riemannian-manifold
- def-wirtinger-derivatives
- lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas
- thm-elliptic-regularity-for-dolbeault-harmonic-forms
- thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology
- thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface
- thm-liouville-bounded-entire-function
- thm-orbit-map-of-a-covering-space-action-is-a-covering
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)
    url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    locator: 'Ch. VI §7, (7.1)–(7.2), printed p. 309: smooth Dolbeault decomposition and harmonic-representative isomorphism; (7.3)–(7.4), printed p. 310: Serre duality and conjugate-linear bundle-star comparison. The explicit torus and sphere computations are supplied locally. Ch. VI §4, (4.5), printed p. 297: the compact complex torus and metrics with constant coefficients.'
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited through the Hodge-decomposition and finiteness items used below. Let $\Lambda=\mathbb Z\omega_1\oplus\mathbb Z\omega_2$ have real-linearly independent periods and keep the flat torus $X=\mathbb C/\Lambda$ with its trivial holomorphic line bundle $E=X\times\mathbb C$ and flat metric, and let $h_0$ be the constant Hermitian metric $h_0(1,1)=1$ and $h_1$ the Hermitian metric $h_1(1,1)=e^{\varphi}$ for a nonconstant smooth real function $\varphi$ on $X$. Then:

1. The harmonic spaces differ: with $h_0$, the harmonic $(0,1)$-forms are $\mathbb C\cdot d\bar z$, while with $h_1$ they are $\mathbb C\cdot e^{-\varphi}d\bar z$, so the harmonic representative of the class $[d\bar z]$ is $d\bar z$ for $h_0$ and the suitable multiple of $e^{-\varphi}d\bar z$ for $h_1$.
2. The Dolbeault cohomology does not depend on the metric: $H^{0,1}(X,E)$ and $H^{0,0}(X,E)$ are computed from $\bar\partial_E$ alone, and the harmonic-representative isomorphisms for $h_0$ and for $h_1$ show
$$H^{0,1}(X,E)\cong\mathbb C\ \ (\text{dimension }1),\qquad H^{0,0}(X,E)=\mathbb C,$$
for both choices.
3. Consequently the numbers $h^{0,0}(X,E)$ and $h^{0,1}(X,E)$ are invariants of the holomorphic line bundle; the dependence on the Hermitian metric lies entirely in the choice of harmonic representative.

Here $H^{0,q}(E)$ denotes the harmonic space $\mathcal H^{0,q}(E)=\ker\Delta''_q$ with its smooth representatives, while $H^{0,q}(X,E)$ denotes smooth Dolbeault cohomology.

## Facts & Assumptions

**Given:** A rank-two lattice $\Lambda\subset\mathbb C$, its flat compact torus, the trivial holomorphic bundle, weights $\psi_0=1$, $\psi_1=e^\varphi$ with smooth nonconstant real $\varphi$, and full AC. Write $dA=dx\,dy$, $A=\int_XdA>0$ and $J=\int_Xe^{-\varphi}dA>0$.

[F1] Smooth degree-one harmonic forms are exactly those with zero Hilbert adjoint; the adjoint on a smooth form in a flat chart is $\bar\partial_h^*(u\,d\bar z)=-2\psi^{-1}\partial_z(\psi u)$. Harmonic forms are smooth ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]], [[lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas]], [[thm-elliptic-regularity-for-dolbeault-harmonic-forms]]).

[F2] A bounded entire function is constant. A smooth function satisfies $\partial_{\bar z}f=0$ exactly when it is holomorphic ([[thm-liouville-bounded-entire-function]], [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F3] Smooth degree-one forms split orthogonally into harmonic and smooth exact forms; every Dolbeault class has one harmonic representative. The cohomology groups are the smooth Dolbeault kernel and quotient, and their dimensions are finite ([[thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface]], [[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]]).

[F4] The first-variable-linear degree-one pairing in flat charts is $\langle u\,d\bar z,v\,d\bar z\rangle_{L^2}=2\int_X\psi u\bar v\,dA$ ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

## Verification

**Given:** The data in the Example and Facts.

1.1 Translation charts on $X$ have identity derivatives, so $d\bar z$ is a global nonvanishing form and every smooth $(0,1)$-form is $u\,d\bar z$ with a smooth lattice-periodic coefficient on the cover. For any positive smooth weight $\psi$, [F1] says it is harmonic precisely when $\partial_z(\psi u)=0$. Then $\overline{\psi u}$ lifts to an entire function, bounded because it is periodic and bounded on the closed fundamental parallelogram. By [F2] it is constant. Conversely $u=c/\psi$ is smooth and satisfies that adjoint equation, hence is harmonic. Thus the two spaces are $\mathbb C d\bar z$ and $\mathbb C e^{-\varphi}d\bar z$; they differ because their equality would force the positive function $e^{-\varphi}$ to be constant. Holomorphic functions on this torus likewise lift to bounded entire functions and are constant. [F1, F2, given, algebra]

2.1 Set $b=e^{-\varphi}d\bar z$. By [F4], $\langle d\bar z,b\rangle_{h_1}=2A$ and $\langle b,b\rangle_{h_1}=2J$. Hence the orthogonal projection of $d\bar z$ onto $\mathbb C b$ is $(A/J)b$ in the first-variable-linear convention. By [F3] the projection differs from $d\bar z$ by a smooth exact form, so the harmonic representative of $[d\bar z]$ for $h_1$ is precisely $(A/J)e^{-\varphi}d\bar z$. For $h_0$ it is $d\bar z$ itself. In particular the class is nonzero, since its harmonic representative is nonzero. [F3, F4, step 1.1, given, algebra]

3.1 The smooth operator $\bar\partial_E$ is determined by the holomorphic transitions, so the same vector space $\ker\bar\partial_E$ in degree zero and the same quotient $\Omega^{0,1}(E)/\bar\partial_E\Omega^{0,0}(E)$ in degree one define the cohomology for both metrics. The harmonic isomorphisms of [F3] and step 1.1 therefore give $H^{0,0}(X,E)=\mathbb C$ and $\dim H^{0,1}(X,E)=1$ for either metric. For any compact Riemann surface and fixed holomorphic bundle the same kernel/quotient observation proves that $h^{0,0},h^{0,1}$ are invariant under changing either supplied metric; only the harmonic representative can change. Full AC is inherited through [F1] and [F3]; the explicit projection uses no additional choice. [F2, F3, step 1.1, step 2.1, given] ∎

## Source notes

Demailly’s Dolbeault results in §7 apply to a holomorphic Hermitian bundle; the flat-connection de Rham decomposition in §3.3 is contextual and is not used for a varying Hermitian weight. The verification above uses proved local operator interfaces and gives the concrete calculation itself.
