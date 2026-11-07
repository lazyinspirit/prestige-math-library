---
id: def-doubling-gauge-and-locally-regular-hausdorff-measure
kind: definition
title: "Doubling gauge and local Hausdorff-measure regularity"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-hausdorff-dimension-function-and-gauge-measure
verification:
  precheck: n/a
sources:
  references:
    - title: "Beresnevich and Velani, A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures, §6.1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
---

## Definition

Let $g$ be a dimension function on a metric space $X$. The gauge $g$ is doubling at small scales if there are constants $C_D<\infty$ and $r_D>0$ such that $g(2r)\le C_Dg(r)$ for $0<r\le r_D$. The Hausdorff gauge measure $\mathcal H^g$ is locally regular on $(X,d)$ if there are constants $0<c_1\le c_2<\infty$ and $r_0>0$ such that

$$c_1g(r)\le\mathcal H^g(B(x,r))\le c_2g(r)$$

for every $x\in X$ and $0<r\le r_0$.

## Definition references

[Beresnevich and Velani, *A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures*, §6.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)
