---
id: thm-overlap-remap-l2-projection-conservation-positivity
kind: theorem
title: "Overlap remapping is an L2 projection, conservative and positive"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-intersection-volume-conservative-remapping
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-holder-inequality-for-integrals
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Devon Powell and Tom Abel, An exact general remeshing scheme applied to physically conservative voxelization"
      url: https://arxiv.org/pdf/1412.4941
    - title: "Zhengru Zhang, Moving Mesh Method with Conservative Interpolation Based on L2-Projection, Commun. Comput. Phys. 1 (2006), 930–944"
      url: https://www.global-sci.com/cicp/article/view/5434
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Under the finite partition hypotheses of [[def-intersection-volume-conservative-remapping]], let $P_0(\mathcal T)$ be the target cellwise-constant subspace of $L^2(\Omega)$. For every source piecewise-constant $v$, $Rv$ is the $L^2$ orthogonal projection of $v$ onto $P_0(\mathcal T)$, hence $\|Rv\|_2\le\|v\|_2$. It preserves total mass, $\int_\Omega Rv=\int_\Omega v$, and if all $v_i\ge0$ then every target value $(Rv)_j\ge0$.

## Facts & Assumptions

**Given:** Countable Choice; a finite-measure domain, finite source and target partitions up to null sets, positive target volumes, and source cell values $v_i$.

[F1] [[def-intersection-volume-conservative-remapping]]: $w_{ji}=|T_j\cap S_i|$ and $(Rv)_j=|T_j|^{-1}\sum_iw_{ji}v_i$.

[F2] [[thm-holder-inequality-for-integrals]]: Cauchy–Schwarz makes products of $L^2$ functions integrable and gives the $L^2$ inner-product inequality.

[F3] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is linear on integrable functions.

[F4] [[thm-lebesgue-measure-is-a-complete-measure]]: under Countable Choice, Lebesgue measure is a countably additive measure.

[A1] Countable Choice is assumed for [F4] ([[def-countable-choice]]).

## Proof

1.1 By [F4], Lebesgue measure is countably additive and hence finitely additive. The partition hypotheses therefore give $\sum_iw_{ji}=|T_j|$ for every target cell and $\sum_jw_{ji}=|S_i|$ for every source cell; omitted partition boundaries are null and do not change these measures. The same finite additivity gives $\int_{T_j}v=\sum_iw_{ji}v_i$. [F1, F4, A1, given]

2.1 For any target cellwise-constant $z$, sum over target cells: $\int_\Omega(v-Rv)z=\sum_j z_j(\sum_iw_{ji}v_i-|T_j|(Rv)_j)=0$ by [F1] and step 1.1. Thus $v-Rv$ is orthogonal to the target subspace. [F1, F3, F4, A1, step 1.1, algebra]

3.1 Orthogonality with $z=Rv$ gives $\|v\|_2^2=\|Rv\|_2^2+\|v-Rv\|_2^2$, so $\|Rv\|_2\le\|v\|_2$. All terms are finite because the partitions are finite, cells have finite volume, and $v$ is piecewise constant. [F2, step 2.1, algebra]

4.1 By the column-sum identity in step 1.1, $\int Rv=\sum_j|T_j|(Rv)_j=\sum_i|S_i|v_i=\int v$. If each $v_i\ge0$, every overlap weight is nonnegative, so the defining finite weighted average is nonnegative. [F1, F3, F4, A1, step 1.1, algebra] ∎
