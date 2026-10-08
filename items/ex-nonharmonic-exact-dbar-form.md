---
id: ex-nonharmonic-exact-dbar-form
kind: example
title: Nonharmonic exact dbar form
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 8
deps:
- def-axiom-of-choice
- def-complex-domain
- def-covering-space-action
- def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
- def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
- def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
- def-riemann-surface-and-holomorphic-atlas
- def-riemannian-metric-and-riemannian-manifold
- def-wirtinger-derivatives
- lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas
- thm-elliptic-regularity-for-dolbeault-harmonic-forms
- thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface
- thm-orbit-map-of-a-covering-space-action-is-a-covering
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)
    url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    locator: 'Ch. VI §7, (7.1)–(7.2), printed p. 309: smooth Dolbeault decomposition and harmonic-representative isomorphism; (7.3)–(7.4), printed p. 310: Serre duality and conjugate-linear bundle-star comparison. The explicit torus and sphere computations are supplied locally. Ch. VI §4, (4.5), printed p. 297: the compact complex torus and metrics with constant coefficients.'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited through the Hodge-decomposition and elliptic-regularity items used below. Let $X=\mathbb C/(\mathbb Z\oplus i\mathbb Z)$ be the square flat torus with its trivial holomorphic line bundle $E=X\times\mathbb C$, constant Hermitian metric and flat compatible metric, and let $f(x,y):=\sin(2\pi x)$ regarded as a smooth function on $X$. Then
$$\bar\partial f=\pi\cos(2\pi x)\,d\bar z$$
is a nonzero $\bar\partial$-exact $(0,1)$-form which is not harmonic, and no nonzero $\bar\partial$-exact $(0,1)$-form is harmonic: the harmonic summand of the Hodge decomposition of $\Omega^{0,1}(E)$ meets $\bar\partial_E(\Omega^{0,0}(E))$ only at $0$.

## Facts & Assumptions

**Given:** The square torus, its flat metric, the trivial holomorphic bundle with constant positive Hermitian weight, and full AC as in the Example. All exact forms below are smooth exact forms.

[F1] The Wirtinger formula is $\partial_{\bar z}=\tfrac12(\partial_x+i\partial_y)$, and $\bar\partial f=(\partial_{\bar z}f)d\bar z$ in the trivial frame ([[def-wirtinger-derivatives]], [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F2] Smooth sections belong to the maximal domain; the Hilbert adjoint identity is $\langle\bar Df,a\rangle=\langle f,\bar D^*a\rangle$, and $\ker\Delta''_1=\ker\bar D^*$ ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]]).

[F3] The smooth degree-one Hodge decomposition is the orthogonal sum of harmonic forms and smooth exact forms ([[thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface]]).

[F4] A covering-space action has a covering quotient, and a Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas ([[def-covering-space-action]], [[thm-orbit-map-of-a-covering-space-action-is-a-covering]], [[def-riemann-surface-and-holomorphic-atlas]]).

## Verification

**Given:** The data in the Example and Facts.

1.1 Translation by $m+in$ preserves the Euclidean metric, $d\bar z$, and $\sin(2\pi x)$, so these descend to the square torus. The lattice translation action is a covering-space action: disks of radius less than $1/2$ have disjoint nontrivial lattice translates, so [F4] gives a covering quotient and holomorphic charts with translation transitions. The quotient map is open because the preimage of the image of an open set is the union of its translates. For inequivalent $z,w$, the distance from $z-w$ to the square lattice is positive: only finitely many lattice points lie in any bounded disk, and none equals $z-w$. Small disks about $z,w$ therefore project to disjoint neighborhoods, proving Hausdorffness. Images of a countable base of plane disks form a countable base of the quotient; it is nonempty and connected as a continuous image of $\mathbb C$. The image of the closed unit square covers the quotient and is compact, so these charts make it a compact Riemann surface. By [F1], $\partial_{\bar z}\sin(2\pi x)=\pi\cos(2\pi x)$; this coefficient equals $\pi$ at $z=0$. Thus $\bar\partial f$ is a nonzero smooth exact form. [F1, F4, given, construct, algebra]

2.1 If a smooth exact form $a=\bar\partial_E b$ on any compact Riemann surface with the stated metrics is harmonic, [F2] gives $\bar D^*a=0$ and $\bar Db=a$. The first-variable-linear adjoint identity yields $\|a\|^2=\langle\bar Db,a\rangle=\langle b,\bar D^*a\rangle=0$, so $a=0$. Applying this to step 1.1 proves that its exact form is not harmonic. The harmonic and exact summands therefore intersect only at zero, as also expressed by [F3]. Full AC is inherited through those operator and Hodge interfaces; the calculation selects no new family. [F2, F3, step 1.1, given, algebra] ∎

## Source notes

Demailly’s Dolbeault results in §7 apply to a holomorphic Hermitian bundle; the flat-connection de Rham decomposition in §3.3 is contextual and is not used for a varying Hermitian weight. The verification above uses proved local operator interfaces and gives the concrete calculation itself.
