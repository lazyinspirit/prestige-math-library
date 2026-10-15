---
id: ex-td-carnot-engine-600-300
kind: example
title: A symbolic 600 K and 300 K engine bound
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A hypothetical two-ideal-bath engine calculation using the preceding conditional theorem; it reports no measured engine or empirical efficiency.
deps:
  - pthm-td-carnot-engine-bound
  - def-td-si-quantities
dependency_roles:
  pthm-td-carnot-engine-bound: physical-result
  def-td-si-quantities: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: David Tong, Statistical Physics, complete Chapter 4 lecture-note PDF, §4.3.1
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §2.5.3
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
dependency_level: 9
---

## Example

Consider a hypothetical ideal-reservoir engine cycle with $T_h=600\,\mathrm K$ and $T_c=300\,\mathrm K$, with all the assumptions of [[pthm-td-carnot-engine-bound]]. Its efficiency is at most $1/2$. This is a model calculation, not an observed performance.

## Facts & Assumptions

**Given:** $T_h=600\,\mathrm K$, $T_c=300\,\mathrm K$, and an admitted heat-engine cycle in the ideal-bath scope of the preceding theorem.

[F1] [[pthm-td-carnot-engine-bound]]: $\eta\le 1-T_c/T_h$; equality requires zero total entropy change.

[F2] [[def-td-si-quantities]]: thermodynamic temperature is measured in kelvins, so the ratio of two temperatures is dimensionless.

## Verification

1.1 The stipulated ratio is $T_c/T_h=300/600=1/2$. [given, F2, algebra]

2.1 Apply [F1] to obtain $\eta\le 1-1/2=1/2$. Equality is available only under the theorem's entropy-neutral condition; no experimental result is being reported. [F1, step 1.1, algebra] ∎
