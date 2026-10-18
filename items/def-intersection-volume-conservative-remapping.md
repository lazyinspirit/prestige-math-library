---
id: def-intersection-volume-conservative-remapping
kind: definition
title: "Intersection-volume conservative remapping"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Devon Powell and Tom Abel, An exact general remeshing scheme applied to physically conservative voxelization"
      url: https://arxiv.org/pdf/1412.4941
    - title: "Zhengru Zhang, Moving Mesh Method with Conservative Interpolation Based on L2-Projection, Commun. Comput. Phys. 1 (2006), 930–944"
      url: https://www.global-sci.com/cicp/article/view/5434
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice. Let $\Omega\subset\mathbb R^d$ be a bounded Lebesgue-measurable domain of finite positive measure. Let $\mathcal S=(S_i)_{i=1}^m$ and $\mathcal T=(T_j)_{j=1}^n$ be finite measurable partitions of $\Omega$ up to null sets, with disjoint interiors modulo null sets and positive cell volumes. Define exact overlap weights $w_{ji}=|T_j\cap S_i|$. For source constants $v_i$, the intersection-volume remap is the target piecewise-constant field $Rv$ whose value on $T_j$ is $ (Rv)_j=|T_j|^{-1}\sum_i w_{ji}v_i$. All weights are exact measures; an approximate clipping weight is not silently substituted.

## Notes

The measurable sets and restricted set function are defined in [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]. Under Countable Choice ([[def-countable-choice]]), [[thm-lebesgue-measure-is-a-complete-measure]] makes that family a sigma-algebra and the set function a measure. Thus every $T_j\cap S_i$ is measurable, and its measure is finite because it lies in $\Omega$; every target denominator is finite and positive. Stable cell identifiers fix the finite summation order but do not affect the real-valued result. A target cell with zero volume is excluded because its average is undefined. The remap is a finite-volume $L^2$ projection once the conservation and orthogonality theorem below is proved.
