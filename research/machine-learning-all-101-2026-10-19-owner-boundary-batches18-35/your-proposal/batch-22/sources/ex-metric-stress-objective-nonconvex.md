---
id: ex-metric-stress-objective-nonconvex
kind: example
title: "The metric stress objective is not convex even for two points"
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [def-metric-stress-mds]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
verification:
  precheck: pass
---

## Example

Let two objects have dissimilarity $D_{12}=1$ and use one-dimensional centered coordinates $Y(t)=(t,-t)$, $t\in\mathbb R$. The metric stress is $f(t)=(1-2|t|)^2$, which is not convex: $f(0)=1$ while $\bigl(f(-1/4)+f(1/4)\bigr)/2=1/4$.

## Example references

[Hastie, Tibshirani, and Friedman, ESL II, §14.8, printed pp. 570–571](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

## Facts & Assumptions

**Given:** Two objects with dissimilarity $D_{12}=1$, target dimension one, and the centered coordinates $Y(t)=(t,-t)$.

[F1] Metric stress is $S_D(Y)=\sum_{i<j}(D_{ij}-\|y_i-y_j\|_2)^2$ on centered coordinates ([[def-metric-stress-mds]]).

## Verification

1.1 For $Y(t)=(t,-t)$, the sole distance is $|t-(-t)|=2|t|$, so [F1] gives $f(t)=(1-2|t|)^2$. [given, F1, algebra]

2.1 A convex function must satisfy the midpoint inequality $f(0)\le\tfrac12f(-a)+\tfrac12f(a)$. At $a=1/4$, $f(0)=1$ and $f(-a)=f(a)=(1-1/2)^2=1/4$, so the midpoint inequality fails. Hence this valid stress objective is nonconvex. [step 1.1, algebra] ∎
