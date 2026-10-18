---
id: def-modc-weighted-rt-background-interface
kind: definition
title: Weighted RT background interface for Mod(C)
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 15
deps:
  - thm-weighted-rt-tqft-and-factorization
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.19 (algebraic background)
      url: https://arxiv.org/pdf/1812.11933
verification:
  precheck: n/a
---

## Definition

Suppose a modular ribbon fusion category $\mathcal C$ satisfies the hypotheses of [[thm-weighted-rt-tqft-and-factorization]], including its weighted-Lagrangian bordism convention and proved state-space, composition, and factorization maps. The **weighted RT background interface** for the present page means using those TQFT state spaces and bordism maps as a separate 2+1-dimensional mathematical background alongside the algebraic defect 2-category $\operatorname{Mod}(\mathcal C)$. The interface asserts no canonical functor from a module category, module functor, or module-natural transformation to a physical defect, and no classification of 3+1-dimensional phases.

## Remarks

The actual supplier [[thm-weighted-rt-tqft-and-factorization]] now proves the full marked weighted-Lagrangian RT functor and geometric factorization, including presentation/coupon independence, exact cap normalization, signature–Maslov composition, cylinders, duality, disconnected and empty cases, and both sewing inverses. Its weight action is $\kappa^{+n}$ for the prescribed $+\mu_W$ composition, with the actual cap-reference correction for arbitrary real object Lagrangians. This establishes the background used in the Definition for every category satisfying the stated modular hypotheses. Full AC enters through the boundary duality/topology suppliers and countable choice through framed coupon evaluation. The algebraic $\operatorname{Mod}(\mathcal C)$ construction remains independently defined; no canonical physical realization or phase classification is inferred.
