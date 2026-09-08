---
id: ex-density-measure-on-a-nonorientable-manifold
title: "Flat Mobius strip density measure"
kind: example
status: draft
origin: pipeline
deps: ["thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure", "thm-density-measure-is-independent-of-the-chart-gluing", "fs-a-smooth-density-is-the-same-thing-as-a-top-form-on-a-nonorientable-manifold", "thm-lebesgue-measure-of-a-box-of-every-kind", "fs-orientation-is-required-for-a-density-measure"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Lee Proposition 16.45 and proof pp.432\u2013433, specialized to the explicit flat strip"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: direct
---

## Example

Let $M=(\mathbb R\times(-1,1))/\langle T\rangle$, $T(s,t)=(s+1,-t)$, be the open Möbius strip. The quadratic form $ds^2+dt^2$ and density $|ds\,dt|$ descend to $M$. The density takes value one on every orthonormal frame of this metric, defines a Radon measure, and has total mass two.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Flat open Möbius strip; normalized density and seam-area computation.

[F1] [[fs-orientation-is-required-for-a-density-measure]]: The stated counterexample is the smooth nonorientable open Möbius strip with this seam.

[F2] [[thm-density-measure-is-independent-of-the-chart-gluing]]: Borel subsets of a chart have coefficient integrals.

[F3] [[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]: Finite positive smooth coefficients define a Radon measure.

[F4] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: Rectangles have their geometric area and degenerate rectangles are null.

## Verification

1.1 The quoted strip construction gives a Hausdorff second-countable smooth nonorientable surface. Its chart transitions are powers of $T$, with derivative $\operatorname{diag}(1,(-1)^k)$. Thus $(ds)^2+((-1)^kdt)^2=ds^2+dt^2$ and $|\det DT^k|=1$; both the quadratic form and the unit density agree on overlaps and descend smoothly. [F1]

2.1 In such a chart an orthonormal frame has column matrix $A$ satisfying $A^{\mathsf T}A=I$. Taking determinants gives $(\det A)^2=1$, so the density on that frame is $|\det A|=1$. Conversely a density with this normalization must have coefficient one on the coordinate frame, which is orthonormal. This verifies the claimed normalization directly without a general Riemannian volume theorem. The positive finite coefficient also gives a Radon measure. [F3, step 1.1]

3.1 Let $q$ be the quotient map. The set $W=q((0,1)\times(-1,1))$ is a chart: no two points in this open strip are related by a nonzero power of $T$. Its mass is $1\cdot2=2$. Its complement is the seam $S=q(\{0\}\times(-1,1))$, a Borel set because $W$ is open. In the seam chart $q((-1/4,1/4)\times(-1,1))$, $S$ is the coordinate line $s=0$; it has measure zero (or cover it by rectangles of arbitrarily small width). Hence $\mu_r(M)=\mu_r(W)+\mu_r(S)=2$. The omitted edges $t=\pm1$ are not points of $M$. [F2, F4, step 1.1] ∎
