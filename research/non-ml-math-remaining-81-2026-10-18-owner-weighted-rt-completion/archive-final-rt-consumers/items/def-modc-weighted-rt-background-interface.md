---
id: def-modc-weighted-rt-background-interface
kind: definition
title: Conditional weighted RT background interface for Mod(C)
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
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

The batch-78 carrier `items/thm-weighted-rt-tqft-and-factorization.md` is now present at declared dependency level 9 and was read. Its statement fixes the weighted surgery normalization and factorization map, but its own Unresolved proof obligation says relative Kirby invariance, colored handle slides/coupon cancellation, bordism-map composition, cylinder identity, and sewing coherence remain unproved. The level-10 consumer therefore remains escalated; it also conflicts with this dispatch's scheduled batch level 7. The supplier depends on the modular Gauss-sum/Kirby-color lemma, weighted Lagrangian bordisms, Maslov coherence, relative surgery, RT state spaces, handlebody pairing/gluing, rigid duality, full choice, and countable choice. The supplier records full AC through the boundary-kernel/Poincaré–Lefschetz branch and AC_omega through framed-tangle evaluation and relative Morse suppliers.
