---
id: thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface
kind: theorem
title: "Hodge decomposition for Dolbeault forms on a compact Riemann surface"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-hilbert-orthogonal-projection
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-local-weak-solution-for-a-divergence-form-operator
  - def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
  - def-orthogonality-and-orthogonal-complement
  - def-uniformly-elliptic-divergence-form-operator
  - cor-smooth-data-give-smooth-interior-solutions
  - lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas
  - lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-dolbeault-laplacian-has-finite-dimensional-kernel-and-closed-range
  - thm-elliptic-regularity-for-dolbeault-harmonic-forms
  - thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §7, (7.1)–(7.2), printed pp. 309–310: states the Dolbeault decomposition for a compact Hermitian manifold and holomorphic Hermitian bundle, but refers back to §3.3 rather than giving a proof."
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 3 §4, Theorem 3.31 and the preceding discussion, printed pp. 38–40: the de Rham Hodge–Weyl splitting is stated without proof and is only an analogy for the Dolbeault argument here."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 6, Theorems 6.14–6.15, printed pp. 66–67: the smooth de Rham Hodge splitting and energy characterization are comparison results, not proofs for bundle-valued Dolbeault forms."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §3.3, (3.15)–(3.17), printed pp. 294–295: the analogous twisted de Rham decomposition assumes a flat Hermitian connection; this item does not use it for a general holomorphic line bundle."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Its countable-choice consequences are supplied by [[thm-choice-implies-dependent-implies-countable-choice]] for the Green, closed-range, and elliptic-regularity results used below. Let $X$ be a nonempty compact connected Riemann surface, let $E\to X$ be a holomorphic line bundle with Hermitian metric $h$, and let $g$ be a compatible Riemannian metric. Use the Hilbert spaces, maximal Dolbeault operator $\bar D$, adjoint $\bar D^*$, and block Laplacian $\Delta''=\Delta''_0\oplus\Delta''_1$ from [[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]. Put
$$\Omega^{0,q}(E):=C^\infty(X,\Lambda^{0,q}T^*X\otimes E),\qquad \mathcal H^{0,q}(E):=\ker\Delta''_q\subseteq L^2_q\quad(q=0,1).$$
The spaces $\mathcal H^{0,q}(E)$ are finite-dimensional and consist of smooth forms by the preceding items. Let $G:\mathcal H^\perp\to\operatorname{dom}\Delta''\cap\mathcal H^\perp$ be the Green operator of [[lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel]], where $\mathcal H=\mathcal H^{0,0}(E)\oplus\mathcal H^{0,1}(E)$. Using the orthogonal decomposition in [[thm-dolbeault-laplacian-has-finite-dimensional-kernel-and-closed-range]], extend it by zero on $\mathcal H$:
$$\widetilde G(h+v):=Gv\qquad(h\in\mathcal H,\ v\in\mathcal H^\perp).$$
Then the **harmonic projection** is
$$P_{\mathcal H}:=I-\Delta''\widetilde G:L^2_0\oplus L^2_1\longrightarrow\mathcal H.$$
For each integer $k\ge0$, let $H^k_q$ be the finite-chart Sobolev completion in [[thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface]].

1. **Smooth and $L^2$ decompositions.** The following are orthogonal direct sums:
$$\Omega^{0,0}(E)=\mathcal H^{0,0}(E)\oplus\bar\partial_E^*\bigl(\Omega^{0,1}(E)\bigr),\qquad \Omega^{0,1}(E)=\mathcal H^{0,1}(E)\oplus\bar\partial_E\bigl(\Omega^{0,0}(E)\bigr),$$
$$L^2_0=\mathcal H^{0,0}(E)\oplus\operatorname{ran}\bar D^*,\qquad L^2_1=\mathcal H^{0,1}(E)\oplus\operatorname{ran}\bar D.$$
The two Hilbert ranges are closed. On smooth forms $P_{\mathcal H}$ maps smooth total forms to smooth total forms.

2. **Sobolev topology.** For each $q\in\{0,1\}$ and $k\ge0$, the degree-$q$ harmonic projection extends boundedly to $H^k_q$. Hence
$$H^k_q=\mathcal H^{0,q}(E)\oplus\ker\!\left(P_{\mathcal H}|_{H^k_q}\right)$$
as a topological direct sum. The smooth range summand in part 1 is closed in the $H^k$ topology relative to $\Omega^{0,q}(E)$, and its closure in $H^k_q$ is $\ker(P_{\mathcal H}|_{H^k_q})$.

3. **Harmonic representatives.** Every $\bar\partial$-cohomology class in degree $(0,1)$ has exactly one representative in $\mathcal H^{0,1}(E)$. Moreover, $\mathcal H^{0,0}(E)=H^0(X,E)$, the space of holomorphic sections, so every smooth $E$-valued function splits uniquely as a holomorphic section plus a $\bar\partial_E^*$-image.

## Facts & Assumptions

**Given:** the Axiom of Choice, a nonempty compact connected Riemann surface $X$, a holomorphic line bundle $E$ with the supplied Hermitian metric, and the compatible metric $g$.

[F1] The maximal Dolbeault operator is closed and densely defined; its Hilbert adjoint satisfies $\langle\bar Du,w\rangle=\langle u,\bar D^*w\rangle$ on the adjoint domains and $\ker\bar D^*=(\operatorname{ran}\bar D)^\perp$ ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).

[F2] The Laplacian kernel is $\ker\Delta''=(\ker\bar D)\oplus(\ker\bar D^*)$ ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).

[F3] Orthogonal complements are defined by vanishing of the Hilbert pairing, and orthogonality is symmetric ([[def-orthogonality-and-orthogonal-complement]]).

[F4] The total Laplacian has finite-dimensional kernel and $L^2=\mathcal H\oplus\operatorname{ran}\Delta''$ orthogonally. The Green operator satisfies $\Delta''Gv=v$ on $\mathcal H^\perp$ and maps that complement into $\operatorname{dom}\Delta''$ ([[lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel]], [[thm-dolbeault-laplacian-has-finite-dimensional-kernel-and-closed-range]]).

[F5] The orthogonal projection onto a closed Hilbert subspace is the component in its orthogonal decomposition ([[def-hilbert-orthogonal-projection]]).

[F6] Harmonic forms and the harmonic projection are smooth; smooth degree-one elements of $\operatorname{ran}\bar D$ have smooth preimages; and smooth coefficients and data give smooth interior solutions ([[thm-elliptic-regularity-for-dolbeault-harmonic-forms]], [[cor-smooth-data-give-smooth-interior-solutions]]).

[F7] On smooth sections $\bar D=\bar\partial_E$, the smooth Hilbert adjoint agrees with $\bar\partial_E^*$, and $\bar\partial_Es=0$ exactly when $s$ is holomorphic ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas]]).

[F8] The degree-one Laplacian has a smooth-coefficient divergence-form expression; on relatively compact chart domains its positive principal coefficient is uniformly elliptic, and the local weak-solution definition is the corresponding compact-test sesquilinear identity ([[lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas]], [[def-uniformly-elliptic-divergence-form-operator]], [[def-local-weak-solution-for-a-divergence-form-operator]]).

[F9] The graph domain $\operatorname{dom}\bar D\oplus\operatorname{dom}\bar D^*$ is the finite-chart $H^1$ space ([[thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface]]).

[F10] For every $k\ge0$, the finite-chart $H^k_q$ spaces are completions of smooth forms, embed continuously into $L^2_q$, and contain every smooth form ([[thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface]]).

[F11] The first-variable-linear Hermitian pairing satisfies $|\langle u,v\rangle_{L^2}|\le\|u\|_{L^2}\|v\|_{L^2}$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F12] Full AC supplies DC for the closed-range result and AC$_\omega$ for the Green, Sobolev, local weak-solution, and smooth-data regularity interfaces ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Given:** the data and choice assumption in the Statement.

1.1 If $f$ has degree $q$ and lies in $\mathcal H^{0,q}(E)^\perp$, then $\Delta''Gf=f$ and $Gf\perp\mathcal H$. Its other-degree component is therefore harmonic and orthogonal to the harmonic space, so it vanishes; thus $Gf$ has degree $q$. For $q=0$ the Green identity gives $f=\Delta''_0Gf=\bar D^*\bar D Gf$, so $f\in\operatorname{ran}\bar D^*$. Conversely, if $f=\bar D^*v$ and $u\in\ker\bar D=\mathcal H^{0,0}(E)$, the adjoint identity gives $\langle u,f\rangle=\langle\bar Du,v\rangle=0$. Thus $\operatorname{ran}\bar D^*=\mathcal H^{0,0}(E)^\perp$. For $q=1$, the Green identity gives $f=\Delta''_1Gf=\bar D\bar D^*Gf\in\operatorname{ran}\bar D$; and $\ker\bar D^*=(\operatorname{ran}\bar D)^\perp$ implies $\operatorname{ran}\bar D\subseteq\mathcal H^{0,1}(E)^\perp$. Hence $\operatorname{ran}\bar D=\mathcal H^{0,1}(E)^\perp$. Both ranges are closed and give the stated degreewise $L^2$ splittings. [F1, F2, F3, F4, F12, given]

2.1 Write $f=h+v$ with $h\in\mathcal H$ and $v\in\mathcal H^\perp$. The Green identity gives $\Delta''\widetilde Gf=v$, so $P_{\mathcal H}f=h$; thus the displayed formula is the orthogonal projection. By [F6], it preserves smooth forms and the harmonic summands are smooth. If $w\in\Omega^{0,0}(E)$ is orthogonal to $\mathcal H^{0,0}(E)$, step 1.1 gives $w=\bar D^*u$ for some $u\in\operatorname{dom}\bar D^*$. Since $w$ is smooth, it lies in $\operatorname{dom}\bar D$; hence $u\in\operatorname{dom}\Delta''_1$ and $\Delta''_1u=\bar Dw$ is smooth. Also $u\in H^1$ by [F9]; the smooth-coefficient formula in [F8] is uniformly elliptic on compactly contained chart patches, and testing its distributional equation by integration by parts gives the local weak-solution identity. The smooth-data regularity in [F6] gives a smooth representative on each such patch. These representatives agree on overlaps because they represent the same section almost everywhere and are continuous, so they glue to a smooth section $\widetilde u$ with $w=\bar\partial_E^*\widetilde u$ by [F7]. Conversely every smooth $\bar\partial_E^*$-image is orthogonal to $\ker\bar D$ by the adjoint identity. For degree one, step 1.1 gives every smooth form orthogonal to $\mathcal H^{0,1}(E)$ in $\operatorname{ran}\bar D$, and [F6] upgrades it to a smooth $\bar\partial_E$-image; the adjoint identity gives the reverse orthogonality. This proves both smooth decompositions. [F1, F4, F5, F6, F7, F8, F9, F12, step 1.1]

3.1 Fix $q$ and $k$, and choose a finite $L^2$-orthonormal basis $e_1,\ldots,e_m$ of $\mathcal H^{0,q}(E)$; if this space is zero, take the empty basis. Each $e_j$ is smooth by [F6], so $P_qf=\sum_{j=1}^m\langle f,e_j\rangle_{L^2}e_j$ and [F10]–[F11] give $\|P_qf\|_{H^k}\le\sum_j\|f\|_{L^2}\|e_j\|_{L^2}\|e_j\|_{H^k}\le C_{k,q}\|f\|_{H^k}$. Thus $P_q$ extends to a bounded projection on $H^k_q$, whose range is $\mathcal H^{0,q}(E)$ and whose kernel is closed. The smooth complement is exactly the smooth range from step 2.1, so it is closed in the relative $H^k$ topology. If $f\in\ker P_q\subset H^k_q$, approximate it in $H^k$ by smooth $f_n$ and set $g_n=f_n-P_qf_n$; boundedness gives $g_n\to f$, and each $g_n$ is in that smooth complement. Therefore its $H^k$ closure is precisely $\ker P_q$, proving the topological splitting. [F6, F10, F11, step 2.1]

4.1 On a Riemann surface every smooth $(0,1)$-form is $\bar\partial$-closed, so its degree-one Dolbeault class is taken modulo $\bar\partial_E\Omega^{0,0}(E)$. The degree-one smooth decomposition from step 2.1 gives a harmonic representative for each class. If two harmonic forms represent the same class, their difference lies both in $\mathcal H^{0,1}(E)$ and in its orthogonal complement, so its squared norm is zero and the representatives agree. By [F1], [F2], and [F7], $\mathcal H^{0,0}(E)=\ker\bar D\cap\Omega^{0,0}(E)=H^0(X,E)$; the degree-zero splitting in step 2.1 is therefore the asserted unique holomorphic-section decomposition. [F1, F2, F3, F7, step 1.1, step 2.1] ∎

## Source notes

Demailly's Theorem 7.1 states the smooth Dolbeault decomposition for a compact Hermitian manifold and a holomorphic Hermitian bundle, but says only that it follows in a way similar to §3.3; this item supplies the Hilbert-domain range argument, the smooth preimage step, and the $H^k$ topology from its local suppliers. Demailly §3.3 (3.15)–(3.17) assumes a flat Hermitian connection and is not proof for the arbitrary holomorphic line bundle here. Theorem 3.31 in Looijenga and Theorems 6.14–6.15 in McMullen are de Rham comparison statements; Looijenga explicitly does not prove Theorem 3.31. Their passages are contextual only.
