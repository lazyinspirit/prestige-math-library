---
id: cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional
kind: corollary
title: Dolbeault cohomology of a compact riemann surface is finite dimensional
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 8
deps:
- def-axiom-of-choice
- def-dolbeault-cohomology-domain
- def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
- thm-dolbeault-laplacian-has-finite-dimensional-kernel-and-closed-range
- thm-elliptic-regularity-for-dolbeault-harmonic-forms
- thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)
    url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    locator: 'Ch. V §11, (11.4)-(11.7), printed pp. 267-268: the Dolbeault complex, the groups $H^{p,q}(X,E)$ and the special case $H^{p,0}(X,E)=\Gamma(X,\Omega^p_X\otimes E)$'
  - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)
    url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    locator: 'Ch. VI §7, (7.2), printed p. 309: the Hodge isomorphism theorem $H^{p,q}(X,E)\simeq\mathcal H^{p,q}(X,E)$, in particular finite dimensionality'
  - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
    url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
    locator: 'Ch. 14, Theorem 14.2, printed p. 119: finite dimensionality of $H^1(X,L)$ for a line bundle on a Riemann surface'
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact Riemann surface and $E$ a holomorphic line bundle with Hermitian metric $h$ and compatible Riemannian metric $g$ as above. The **Dolbeault cohomology groups** of $E$ are
$$H^{0,0}(X,E):=\frac{\ker\bigl(\bar\partial_E:\Omega^{0,0}(E)\to\Omega^{0,1}(E)\bigr)}{\{0\}}=H^0(X,E),\qquad H^{0,1}(X,E):=\frac{\Omega^{0,1}(E)}{\bar\partial_E\bigl(\Omega^{0,0}(E)\bigr)},$$
where the second definition uses that on a curve every $(0,1)$-form is $\bar\partial$-closed because there are no $(0,2)$-forms; this is the kernel-modulo-image convention of [[def-dolbeault-cohomology-domain]], applied to the globally defined bundle Dolbeault complex. Write $\Omega^{0,q}(E)=C^\infty(X,\Lambda^{0,q}T^*X\otimes E)$ and $\mathcal H^{0,q}(E)=\ker\Delta''_q$ for the Hilbert harmonic kernels, whose elements are smooth by elliptic regularity. Then:

1. $H^{0,0}(X,E)=H^0(X,E)$ is the finite-dimensional space of holomorphic sections of $E$, and it equals the harmonic space $\mathcal H^{0,0}(E)$.
2. $H^{0,1}(X,E)$ is finite-dimensional, of dimension $h^{0,1}(X,E)=\dim \mathcal H^{0,1}(E)$, and the harmonic projection induces an isomorphism $H^{0,1}(X,E)\xrightarrow{\ \sim\ }\mathcal H^{0,1}(E)$ inverse to the inclusion: every class has a unique harmonic representative.
3. Both dimensions are independent of the Hermitian metric $h$ and of the compatible Riemannian metric $g$ used to define the harmonic spaces, since the quotient and kernel defining $H^{0,i}(X,E)$ involve only $\bar\partial_E$.

## Facts & Assumptions

**Given:** The compact Riemann surface, holomorphic line bundle, supplied compatible metrics and full Axiom of Choice in the Statement.

[F1] The globally defined smooth bundle Dolbeault operator has square zero and its degree-zero kernel consists exactly of holomorphic sections; on a curve the degree-two target vanishes ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F2] Dolbeault cohomology uses the quotient of the closed forms by the exact forms, with the degree-minus-one space zero ([[def-dolbeault-cohomology-domain]]). This supplier states the convention on Euclidean domains; the global bundle complex here is supplied by [F1].

[F3] The smooth decomposition is $\Omega^{0,1}(E)=\mathcal H^{0,1}(E)\oplus\bar\partial_E\Omega^{0,0}(E)$, the harmonic projection is complex-linear, and $\mathcal H^{0,0}(E)=H^0(X,E)$ ([[thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface]]).

[F4] The total Hilbert harmonic kernel is finite-dimensional and every harmonic form is smooth ([[thm-dolbeault-laplacian-has-finite-dimensional-kernel-and-closed-range]], [[thm-elliptic-regularity-for-dolbeault-harmonic-forms]]).

[F5] Full AC is assumed and carried through the Hodge, finite-kernel and elliptic-regularity interfaces; this quotient argument introduces no new choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The smooth complex supplied by [F1] has zero incoming space in degree zero and zero outgoing space in degree one. Thus [F2]'s kernel-modulo-image construction gives exactly the displayed groups, and the degree-zero group is $H^0(X,E)$. By [F3] it equals $\mathcal H^{0,0}(E)$; by [F4] this harmonic subspace of the finite-dimensional total kernel is finite-dimensional. [F1, F2, F3, F4, F5, given]

2.1 Let $P_1$ be the degree-one harmonic projection. By [F3], every smooth $u$ has a unique splitting $u=h+\bar\partial_Ef$ with $h\in\mathcal H^{0,1}(E)$, and $P_1u=h$. Hence $P_1$ vanishes on exact forms, so $[u]\mapsto P_1u$ is a well-defined complex-linear map from $H^{0,1}(X,E)$. It is surjective because each harmonic $h$ is smooth by [F4] and satisfies $P_1h=h$. Its kernel is zero because $P_1u=0$ forces $u=\bar\partial_Ef$. Inclusion of harmonic forms followed by passage to the quotient is its inverse. Thus the degree-one group is isomorphic to the finite-dimensional space $\mathcal H^{0,1}(E)$, proving the dimension formula and unique harmonic representation. [F3, F4, step 1.1, algebra]

3.1 The operator $\bar\partial_E$ and the smooth form spaces in [F1] are determined by the holomorphic structure, independently of $h,g$. Their fixed kernel and quotient therefore define the same two cohomology vector spaces for every choice of these metrics. Applying steps 1.1–2.1 to each choice identifies its harmonic spaces with these fixed finite-dimensional spaces, so both dimensions agree. Full AC is inherited exactly through [F5]. [F1, F5, step 1.1, step 2.1] ∎
