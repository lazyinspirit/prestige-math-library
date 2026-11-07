---
id: ex-jarnik-besicovitch-dimension-at-two-exponents
kind: example
title: "Line and matrix Jarník–Besicovitch exponents at two rates"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-countable-choice
  - thm-jarnik-besicovitch-dimension-on-the-line
  - thm-jarnik-besicovitch-dimension-for-linear-forms
proof_strategy: direct
verification:
  precheck: n/a
---

## Example

For line approximation the Jarník–Besicovitch dimensions at exponents $\tau=2$ and $\tau=3$ are $2/3$ and $1/2$. For the homogeneous system with $n=2$ variables and $m=1$ form, the corresponding dimensions at $\tau=2$ and $\tau=3$ are $2$ and $7/4$; the first is the ambient dimension at the critical threshold $\tau=n/m=2$.

## Facts & Assumptions

**Given:** Countable Choice, the line formula, and the homogeneous linear-forms formula.

[A1] Countable Choice is assumed in the Hausdorff-dimension supplier. ([[def-countable-choice]])

[F1] $\dim_H W(\tau)=2/(\tau+1)$ for $\tau\ge1$. ([[thm-jarnik-besicovitch-dimension-on-the-line]])

[F2] For $nm>1$, the homogeneous formula is $m(n-1)+(n+m)/(\tau+1)$ when $\tau\ge n/m$, and ambient dimension $nm$ below the threshold. ([[thm-jarnik-besicovitch-dimension-for-linear-forms]])

## Verification

1.1 Substituting $\tau=2$ and $\tau=3$ into [F1] gives $2/3$ and $2/4=1/2$. [A1, F1, algebra]

2.1 For $n=2,m=1$, the threshold is $2$. At $\tau=2$, the linear-forms formula gives $1+3/3=2$; at $\tau=3$, it gives $1+3/4=7/4$. The value $2$ equals the ambient dimension $nm$. [A1, F2, algebra] ∎

