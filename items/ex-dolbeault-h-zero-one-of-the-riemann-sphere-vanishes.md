---
id: ex-dolbeault-h-zero-one-of-the-riemann-sphere-vanishes
kind: example
title: Dolbeault h zero one of the riemann sphere vanishes
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 10
deps:
- cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional
- def-axiom-of-choice
- def-chordal-metric-riemann-sphere
- def-complex-domain
- def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
- def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
- def-isolated-singularity-types
- def-meromorphic-differential-on-a-riemann-surface
- def-riemann-sphere-holomorphic-charts
- rem-riemann-sphere-one-point-compactification
- thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology
- thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface
- thm-liouville-bounded-entire-function
- thm-meromorphic-functions-riemann-sphere-are-rational
- thm-stereographic-projection-riemann-sphere-homeomorphism
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

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited through the harmonic-star duality and finiteness items used below. Let $X=\widehat{\mathbb C}$ be the Riemann sphere with its holomorphic charts ([[def-riemann-sphere-holomorphic-charts]], [[thm-stereographic-projection-riemann-sphere-homeomorphism]], [[rem-riemann-sphere-one-point-compactification]]), let $E=X\times\mathbb C$ be the trivial holomorphic line bundle with the constant Hermitian metric, and let $g$ be any compatible Riemannian metric. Then

$$H^{0,0}(X,E)=\mathbb C\cdot1,\qquad H^{0,1}(X,E)=0,$$
so the Dolbeault group $H^{0,1}$ of the trivial bundle on the sphere vanishes in every degree $q=1$; equivalently the space $H^0(X,K)$ of holomorphic differentials is zero, so there is no nonzero holomorphic $1$-form on the sphere. In particular every $\bar\partial$-closed $(0,1)$-form on the sphere is $\bar\partial$-exact.

## Facts & Assumptions

**Given:** The compact Riemann sphere, the trivial holomorphic line bundle with constant positive weight, any compatible metric, and full AC.

[F1] The sphere has charts $z$ on $\mathbb C$ and $w=1/z$ about infinity. A holomorphic differential has holomorphic chart coefficients with the differential transition law ([[def-riemann-sphere-holomorphic-charts]], [[def-meromorphic-differential-on-a-riemann-surface]], [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F2] Every bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

[F3] Harmonic-star duality is a conjugate-linear isomorphism $\mathcal H^{0,1}(E)\to H^0(X,K\otimes E^*)$; Dolbeault cohomology is identified with harmonic representatives, and degree zero is the holomorphic-section space ([[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]], [[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]], [[thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface]]).

## Verification

**Given:** The data in the Example and Facts.

1.1 A holomorphic function on the sphere is entire in the $z$ chart and bounded near infinity, since its $w$-chart expression is continuous at $0$. It is also bounded on each closed disk, so is bounded on all of $\mathbb C$. By [F2] it is constant, and all constants are global holomorphic sections of the trivial bundle. Thus [F3] gives $H^{0,0}(X,E)=\mathbb C\cdot1$. [F1, F2, F3, given]

1.2 Write a global holomorphic differential as $f(z)dz$ on $\mathbb C$, with $f$ entire. In the other chart it is $a(w)dw$, where $a(w)=-w^{-2}f(1/w)$ for $w\ne0$ by [F1]. Holomorphy at $w=0$ bounds $a$ on a small closed disk. Consequently $|f(z)|\le C|z|^{-2}$ for sufficiently large $|z|$. The entire function $f$ is bounded on a closed disk and on its exterior, so [F2] makes it constant; the displayed decay forces that constant to vanish. Therefore $H^0(X,K)=0$. [F1, F2, given, algebra]

2.1 The trivial dual bundle identifies $K\otimes E^*$ holomorphically with $K$. By [F3] and step 1.2, the degree-one harmonic space and hence $H^{0,1}(X,E)$ are zero. Every smooth $(0,1)$-form on a curve is closed because there are no $(0,2)$-forms; its zero cohomology class says exactly that it is $\bar\partial_E$ of a global smooth function. This proves the stated exactness for any supplied compatible metric. Full AC is inherited through duality and the harmonic representative interfaces. [F1, F3, step 1.1, step 1.2, given] ∎

## Source notes

Demailly’s Dolbeault results in §7 apply to a holomorphic Hermitian bundle; the flat-connection de Rham decomposition in §3.3 is contextual and is not used for a varying Hermitian weight. The verification above uses proved local operator interfaces and gives the concrete calculation itself.
