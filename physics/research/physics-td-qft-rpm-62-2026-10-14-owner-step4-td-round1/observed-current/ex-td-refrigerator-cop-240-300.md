---
id: ex-td-refrigerator-cop-240-300
kind: example
title: A symbolic 240 K and 300 K refrigerator bound
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A hypothetical ideal two-bath refrigerator calculation using the preceding conditional theorem; it reports no measured appliance coefficient or work.
deps:
  - pthm-td-refrigerator-bound
  - def-td-si-quantities
dependency_roles:
  pthm-td-refrigerator-bound: physical-result
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
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §2.5.2
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
dependency_level: 9
---

## Example

Consider a hypothetical refrigerator cycle with cold-bath temperature $T_c=240\,\mathrm K$, hot-bath temperature $T_h=300\,\mathrm K$, and $Q_c=1200\,\mathrm J$ extracted per cycle. In the ideal-bath model, its cooling coefficient of performance is at most $4$, so its work input is at least $300\,\mathrm J$. No appliance measurement is asserted.

## Facts & Assumptions

**Given:** The stipulated positive temperatures, $Q_c=1200\,\mathrm J$, and an admitted ideal-bath refrigerator cycle.

[F1] [[pthm-td-refrigerator-bound]]: $\mathrm{COP}_R=Q_c/W_{\mathrm{in}}\le T_c/(T_h-T_c)$.

[F2] [[def-td-si-quantities]]: $T$ is measured in kelvins and $Q_c,W_{\mathrm{in}}$ in joules.

## Verification

1.1 The temperature difference is $T_h-T_c=60\,\mathrm K>0$, so $T_c/(T_h-T_c)=240/60=4$. [given, F2, algebra]

2.1 By [F1], $Q_c/W_{\mathrm{in}}\le4$. Since $W_{\mathrm{in}}>0$, this implies $W_{\mathrm{in}}\ge Q_c/4=1200/4=300\,\mathrm J$. [given, F1, step 1.1, algebra] ∎
