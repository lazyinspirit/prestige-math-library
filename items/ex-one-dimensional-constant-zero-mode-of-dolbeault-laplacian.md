---
id: ex-one-dimensional-constant-zero-mode-of-dolbeault-laplacian
kind: example
title: One dimensional constant zero mode of dolbeault laplacian
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 9
deps:
- cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional
- cor-real-valued-holomorphic-function-is-constant
- def-axiom-of-choice
- def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
- def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
- def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface
- def-riemann-surface-and-holomorphic-atlas
- lem-dbar-adjoint-and-dolbeault-laplacian-local-formulas
- thm-dolbeault-laplacian-has-finite-dimensional-kernel-and-closed-range
- thm-elliptic-regularity-for-dolbeault-harmonic-forms
- thm-compactness-under-continuous-maps
- thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface
- thm-local-maximum-modulus-principle
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry (author manuscript, Universite Grenoble Alpes)
    url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    locator: 'Ch. VI §7, (7.1)–(7.2), printed p. 309: smooth Dolbeault decomposition and harmonic-representative isomorphism; (7.3)–(7.4), printed p. 310: Serre duality and conjugate-linear bundle-star comparison. The explicit torus and sphere computations are supplied locally.'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited through the finite-dimensional-kernel and ellipticity items used below. Let $X$ be a compact Riemann surface, $E=X\times\mathbb C$ the trivial holomorphic line bundle with the constant Hermitian metric $h_0(1,1)=1$, and $g$ any compatible Riemannian metric on $X$. Then the constant function $1$ satisfies $\Delta''1=0$, and the kernel of the Dolbeault Laplacian on functions is exactly
$$H^{0,0}(E)=\{u\in L^2(X):\ \bar\partial u=0\}=\mathbb C\cdot1 .$$
Thus the constant zero mode of the Dolbeault Laplacian is one-dimensional, and $H^{0,0}(X,E)=H^0(X,\mathcal O)=\mathbb C$: every holomorphic function on a compact connected Riemann surface is constant. The same conclusion holds for the trivial bundle with any Hermitian metric.

Here $H^{0,q}(E)$ denotes the harmonic space $\mathcal H^{0,q}(E)=\ker\Delta''_q$ with its smooth representatives, while $H^{0,q}(X,E)$ denotes smooth Dolbeault cohomology.

## Facts & Assumptions

**Given:** A compact connected Riemann surface, the trivial holomorphic bundle, any supplied positive smooth Hermitian metric and compatible metric, and full AC. The $L^2$ kernel denotes the kernel on the block-composition operator domain, with equality of functions understood almost everywhere.

[F1] The degree-zero kernel equals $\ker\bar D$, and its elements are smooth; conversely smooth sections killed by $\bar\partial_E$ are harmonic ([[def-maximal-dbar-operator-and-hilbert-adjoint-on-a-compact-riemann-surface]], [[thm-elliptic-regularity-for-dolbeault-harmonic-forms]]).

[F2] For the trivial holomorphic bundle, $\bar\partial_Eu=0$ means that $u$ is a holomorphic function. A Riemann surface is nonempty and connected ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[def-riemann-surface-and-holomorphic-atlas]]).

[F3] A continuous real function on a nonempty compact topological space attains its maximum; a holomorphic function with an interior local maximum of its modulus is constant on a connected plane domain ([[thm-compactness-under-continuous-maps]], [[thm-local-maximum-modulus-principle]]).

[F4] The Dolbeault degree-zero group is the holomorphic-section space, and is identified with the harmonic degree-zero space ([[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]]).

## Verification

**Given:** The data in the Example and Facts.

1.1 If $u\in\ker\Delta''_0$, [F1] supplies a smooth representative with $\bar\partial_Eu=0$, so [F2] makes it holomorphic. Its modulus attains a maximum $M$ at a point $p$ by compactness and [F3]. Put $c=u(p)$ and $S=\{x:u(x)=c\}$. This set is closed by continuity and nonempty. At each $x\in S$, $|u(x)|=M$, so a connected coordinate disk about $x$ has an interior maximum of $|u|$; [F3] makes $u=c$ on that disk. Hence $S$ is open, and connectedness forces $S=X$. Thus every element of the operator kernel is an almost-everywhere constant. [F1, F2, F3, given]

2.1 Every constant is smooth, has zero Dolbeault derivative, belongs to the maximal domain, and has zero image in the adjoint domain; therefore it lies in the degree-zero Laplacian domain with $\Delta''_0u=0$. In particular $\Delta''1=0$ and $\ker\Delta''_0=\mathbb C\cdot1$, a one-dimensional space since $X$ is nonempty. By [F4], this is also $H^{0,0}(X,E)=H^0(X,\mathcal O)$. The argument used no value of the Hermitian weight or of the compatible metric, so it proves the final assertion for every supplied smooth positive Hermitian metric. Full AC is inherited through [F1] and [F4]. [F1, F2, F4, step 1.1, given, algebra] ∎

## Source notes

Demailly’s Dolbeault results in §7 apply to a holomorphic Hermitian bundle; the flat-connection de Rham decomposition in §3.3 is contextual and is not used for a varying Hermitian weight. The verification above uses proved local operator interfaces and gives the concrete calculation itself.
