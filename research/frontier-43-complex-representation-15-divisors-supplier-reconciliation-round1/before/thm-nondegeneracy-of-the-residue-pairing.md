---
id: thm-nondegeneracy-of-the-residue-pairing
kind: theorem
title: Nondegeneracy of the residue pairing
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 11
deps:
  - thm-residue-pairing-for-line-bundle-cohomology
  - thm-finiteness-cohomology-compact-riemann-surface
  - thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces
  - def-line-bundle-associated-to-a-divisor
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
  - thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology
  - cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional
  - def-riemannian-hodge-star
  - def-axiom-of-choice
sources:
  references:
    - title: Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan
      url: http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf
      locator: "Ch. 2 §§17.5–17.6, printed pp. 135–136: the residue pairing H⁰(X,Ω_{−D})×H¹(X,O_D) and Theorem 17.6's local principal-part construction proving injectivity in the differential variable."
    - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Ch. VI §7, (7.3)–(7.4), printed p. 310: the line-bundle-valued Serre pairing, Stokes factorization through Dolbeault cohomology, the conjugate-linear # map intertwining the Dolbeault Laplacians, and nondegeneracy from the positive norm identity."
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 8, Theorem 8.10 and Corollary 8.11, printed pp. 81–82: the H¹(O)–holomorphic-differential duality and scalar Hodge-star pairing; Ch. 11, “Pairings,” printed pp. 95–96: the general divisor product and residue functional. These passages corroborate the scalar and pairing conventions; the proof here uses the line-bundle Hodge-star input provisionally."
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 6 §4, Theorem 6.7, printed pp. 56–57: the classical residue duality statement. Its dimension proof uses Riemann–Roch and is not used in this earlier dependency-level proof."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact Riemann surface, $D$ a divisor, and $E=\mathcal O_X(D)$. Put $F:=K\otimes E^*$, where $K=\Lambda^{1,0}T^*X$ is the canonical bundle ([[thm-residue-pairing-for-line-bundle-cohomology]]); equip $F$ with the tensor metric induced by $g$ and the dual metric on $E^*$. Equivalently, the customary $K-D$ twist means $K\otimes\mathcal O_X(-D)\cong K\otimes E^*$ ([[def-line-bundle-associated-to-a-divisor]]). Let
$$B_D:H^1(X,\mathcal O_X(D))\times H^0(X,F)\longrightarrow\mathbb C$$
be the residue pairing of [[thm-residue-pairing-for-line-bundle-cohomology]]. Then $B_D$ is perfect:

1. For every nonzero $\xi\in H^1(X,\mathcal O_X(D))$, there is $\omega\in H^0(X,F)$ such that $B_D(\xi,\omega)\ne0$.
2. For every nonzero $\omega\in H^0(X,F)$, there is $\xi\in H^1(X,\mathcal O_X(D))$ such that $B_D(\xi,\omega)\ne0$.

Consequently the induced maps
$$H^1(X,\mathcal O_X(D))\longrightarrow H^0(X,F)^*,\qquad H^0(X,F)\longrightarrow H^1(X,\mathcal O_X(D))^*$$
are complex-linear isomorphisms between finite-dimensional vector spaces ([[thm-finiteness-cohomology-compact-riemann-surface]], [[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]]).

## Facts & Assumptions

**Given:** Full AC, a compact Riemann surface $X$, a divisor $D$, $E=\mathcal O_X(D)$, compatible supplied metrics on $X$ and $E$, the induced metrics on $E^*$ and $F=K\otimes E^*$, and the finite good cover and residue pairing of the preceding item.

[F1] The preceding residue-pairing theorem defines a well-defined bilinear pairing using $B_D(\xi,\omega)=(2\pi i)^{-1}\int_X\theta\wedge\omega$ for any smooth Dolbeault representative $\theta$ of $\xi$. Its item decision is stale after a final proof/contract edit and is owner-held; its use here is provisional ([[thm-residue-pairing-for-line-bundle-cohomology]]).

[F2] The canonical comparison identifies $H^1(X,\mathcal O_X(D))$ with the smooth Dolbeault quotient $H^{0,1}(X,E)$, naturally in the bundle; its item decision is owner-held/stale, so this use is provisional ([[thm-cech-dolbeault-comparison-for-line-bundles-on-compact-surfaces]]).

[F3] $H^1(X,\mathcal O_X(D))$ is finite-dimensional; the A8 theorem file is authored but remains escalated on its unfinished Hodge finite-dimensionality input ([[thm-finiteness-cohomology-compact-riemann-surface]]).

[F4] The divisor construction gives $E^*\cong\mathcal O_X(-D)$, so $F=K\otimes E^*$ is the canonical twist denoted by $K-D$ ([[def-line-bundle-associated-to-a-divisor]]). The A3 item is authored but remains escalated.

[F5] The supplied Hermitian and compatible Riemannian metrics define the conjugate-linear bundle Hodge map $\#=\star_E$ and the positive identity $u\wedge\#u=|u|^2\,dV_g$; the batch-9 metric-definition file exists but its gates remain open ([[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

[F6] The maximal Dolbeault operator defines the harmonic space $\mathcal H^{0,1}(X,E)=\ker\bar D^*$ and the Dolbeault Laplacian; the batch-9 file exists but its gates remain open ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).

[F7] For the supplied metrics, $\#$ is a conjugate-linear isomorphism from $\mathcal H^{0,1}(X,E)$ onto the holomorphic sections of $F=K\otimes E^*$, and $u\wedge\#u=|u|^2\,dV_g$. This is the claim of the Hodge-page harmonic-star theorem's current manifest row; its item file is missing, so the claim is used provisionally ([[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]]).

[F8] The Dolbeault group $H^{0,1}(X,E)$ is finite-dimensional, and every class has a unique harmonic representative. The Hodge-page corollary's file is missing; this input is used provisionally for $E$. By [F7], the harmonic space is conjugate-linearly isomorphic to $W$, so $W$ is finite-dimensional as well ([[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]]).

[F9] The scalar Hodge star on an oriented Riemannian manifold is characterized by $\alpha\wedge *\beta=\langle\alpha,\beta\rangle_g\operatorname{vol}_g$ ([[def-riemannian-hodge-star]]).

[F10] Full AC is assumed by the sheaf-cohomology, finiteness, and Hodge inputs. No further choice is made in the pairing or the kernel arguments ([[def-axiom-of-choice]]).

## Proof

Transfer the pairing to the smooth Dolbeault model. The Hodge-star map identifies harmonic representatives with the dual holomorphic space; its positive norm identity proves both nondegeneracy directions.

1.1 Put $V:=H^{0,1}(X,E)$ and $W:=H^0(X,F)$. By [F10], the cohomology and Hodge inputs below inherit the stated full Axiom of Choice. By [F2], the comparison isomorphism identifies $H^1(X,\mathcal O_X(D))$ with $V$. The finite-dimensionality of $H^1(X,\mathcal O_X(D))$ follows from [F3], while [F8] gives a unique harmonic representative in $\mathcal H^{0,1}(X,E)$ for each class; [F7] carries that finite-dimensional harmonic space onto $W$. These Hodge uses are provisional until the missing Hodge suppliers and their proofs are reconciled. [F2, F3, F4, F6, F7, F8, F10, given]

2.1 Let $0\ne\xi\in H^1(X,\mathcal O_X(D))$, and let $0\ne u\in\mathcal H^{0,1}(X,E)$ be its harmonic representative under [F8]. By [F7], $\omega:=\#u$ lies in $W$. The Hodge identity [F5, F7, F9] gives $\int_Xu\wedge\omega=\int_X|u|^2\,dV_g=\|u\|_{L^2}^2>0$. Using $u$ as the Dolbeault representative in [F1], $B_D(\xi,\omega)=(2\pi i)^{-1}\|u\|_{L^2}^2\ne0$. Thus the induced map $H^1(X,\mathcal O_X(D))\to W^*$ is injective. [F1, F5, F6, F7, F8, F9, step 1.1, algebra]

2.2 Let $0\ne\omega\in W$. By the isomorphism in [F7], there is a unique harmonic $0\ne u\in\mathcal H^{0,1}(X,E)$ with $\#u=\omega$. Let $\xi$ be its class under the inverse comparison [F2]. Then [F1] and the same positive norm identity give $B_D(\xi,\omega)=(2\pi i)^{-1}\|u\|_{L^2}^2\ne0$. Thus the induced map $W\to H^1(X,\mathcal O_X(D))^*$ is injective. [F1, F2, F5, F6, F7, F8, F9, step 1.1, algebra]

3.1 The conjugate-linear isomorphism in [F7] and the harmonic-representative identification in [F8] give $\dim_{\mathbb C}V=\dim_{\mathbb C}W$. Both are finite-dimensional by [F3, F7, F8]. The two induced maps are complex-linear because $B_D$ is bilinear by [F1]; steps 2.1 and 2.2 show each is injective. An injective linear map between finite-dimensional spaces of equal dimension is surjective, so both maps are isomorphisms and $B_D$ is perfect. [F1, F3, F6, F7, F8, step 2.1, step 2.2, algebra] ∎
