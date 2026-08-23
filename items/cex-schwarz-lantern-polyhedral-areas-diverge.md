---
id: cex-schwarz-lantern-polyhedral-areas-diverge
kind: counterexample
title: 'Schwarz lanterns can have mesh tending to zero while their polyhedral areas diverge'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cross-product-in-r3, def-admissible-regular-parametrized-surface-patch, def-surface-area-and-scalar-surface-integral-of-a-patch, thm-surface-area-density-is-cross-product-norm, thm-triangle-content-and-base-height-formula, cor-sin-x-over-x-limit, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-and-cosine-addition-formulas, thm-algebra-of-limits, thm-sequential-criterion-for-function-limits, cor-archimedean-reciprocal, lem-reciprocal-of-null-diverges, def-divergence-to-infinity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'L. Brewin, Curvature corrected estimates for geodesic arc-length, Section 3.2'
      url: 'https://arxiv.org/pdf/1512.03461'
pipeline_run: null
---

## Statement refuted

Inscribed triangulated surfaces with mesh tending to zero need not have areas tending to the surface-integral area of the cylinder; their areas can diverge to infinity.

## Facts & Assumptions

**Given:** A cylinder of radius $r>0$ and height $H>0$; integers $n\ge2$ and $m\ge1$; and the Schwarz lantern with $m$ horizontal bands, $n$ vertices per ring, and successive rings staggered by angle $\pi/n$.

[L1] An affine parametrization of a nondegenerate triangle over the standard parameter triangle is a regular patch with constant cross-product density; its area is the density times the standard triangle's content $1/2$ ([[def-admissible-regular-parametrized-surface-patch]], [[def-surface-area-and-scalar-surface-integral-of-a-patch]], [[thm-surface-area-density-is-cross-product-norm]], [[thm-triangle-content-and-base-height-formula]]). The cross product has its coordinate formula ([[def-cross-product-in-r3]]), and $1-\cos x=2\sin^2(x/2)$ follows from the trigonometric addition and Pythagorean identities ([[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-and-cosine-addition-formulas]]).

[L2] One has $\sin x/x\to1$ as $x\to0$, and the algebra and sequential criterion for limits transfer this to the sequences used below ([[cor-sin-x-over-x-limit]], [[thm-algebra-of-limits]], [[thm-sequential-criterion-for-function-limits]], [[cor-archimedean-reciprocal]]).

[L3] The reciprocal of a positive null sequence diverges to $+\infty$ in the stated sense ([[lem-reciprocal-of-null-diverges]], [[def-divergence-to-infinity]]).

## Counterexample

**Proof technique:** direct.

1.1 Every vertex lies on the cylinder. Parametrize each triangular face affinely over the standard parameter triangle. Its constant parameter tangents are two edge vectors, so [L1] makes its area one half of their cross-product norm. Each of the $m$ bands contains $2n$ congruent triangles; expanding those edge-vector cross products gives total area $$A_{m,n}=2rn\sin(\pi/n)\sqrt{H^2+m^2r^2(1-\cos(\pi/n))^2}.$$ [given, L1, algebra]

1.2 Take $m=n^3$. The maximum edge length is bounded by the sum of the vertical step $H/n^3$ and a circular chord of angle at most $2\pi/n$, so the mesh tends to zero by [L2]. [given, L2, algebra]

2.1 By [L1], $n^2(1-\cos(\pi/n))=2(n\sin(\pi/(2n)))^2\to\pi^2/2$ using [L2]. Hence $n^3(1-\cos(\pi/n))$ grows like $(\pi^2/2)n$ and diverges by [L3]. [step 1.2, L1, L2, L3, algebra]

3.1 Also $n\sin(\pi/n)\to\pi$ by [L2]. Substitution in step 1.1 and step 2.1 shows $A_{n^3,n}\to+\infty$. [step 1.1, step 2.1, L2, L3, algebra]

4.1 Thus these inscribed lanterns have mesh tending to zero while their areas diverge, proving the stated counterexample. [step 1.2, step 3.1] ∎
