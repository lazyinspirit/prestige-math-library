---
id: ex-csm-tonks-rod-ensemble
kind: example
title: "Packing boundary and exact truncated virial error"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-csm-tonks-rod-ensemble
  - def-countable-choice
dependency_roles:
  pthm-csm-tonks-rod-ensemble: physical-result
  def-countable-choice: mathematical-premise
physical_scope: "Conditional on ACω for the Euclidean Lebesgue product reference; finite one-dimensional Tonks gas with common positive rod length, positive mass, inverse temperature and action reference at half the close-packing density; exact force-conjugate pressure and geometric virial remainder only."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "University of Warwick, PX439/CO904 Statistical Mechanics of Complex Systems, lecture notes, §3.5 The Tonks gas"
      url: "https://warwick.ac.uk/fac/cross_fac/complexity/study/msc_and_phd/co904/lecture_notes_co904px439.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Assume $\mathrm{AC}_\omega$ as required by [[pthm-csm-tonks-rod-ensemble]]. Use the one-species hard-rod model of [[pthm-csm-tonks-rod-ensemble]] with $N\ge1$, rod length $a>0$ in metres, mass $m>0$ in kg, inverse temperature $\beta>0$ in J$^{-1}$, and fixed action reference $h_0>0$ in J s. Set box length $L=2Na$ in metres. Then $L>Na$ and number density $\rho=N/L=1/(2a)$ in m$^{-1}$, so $a\rho=1/2$. The exact force-conjugate pressure is $\beta p_{1D}=2\rho$. Truncating its virial series after the first two terms gives $\rho+a\rho^2=3\rho/2$, with exact remainder $\rho/2$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and the one-dimensional hard-rod model from [[pthm-csm-tonks-rod-ensemble]] with $N\ge1$, $a>0$ metres, $L>Na$ metres, $m>0$ kg, $\beta>0$ J$^{-1}$, $h_0>0$ J s, and $\rho=N/L$ in m$^{-1}$.

[F1] [[pthm-csm-tonks-rod-ensemble]]: under those full hard-rod hypotheses, $\beta p_{1D}=\rho/(1-a\rho)$ and the remainder after $M$ terms is $\rho(a\rho)^M/(1-a\rho)$.

[A1] Choose $L=2Na$ and truncate after $M=2$ terms.

## Verification

1.1 The choices give $\rho=N/(2Na)=1/(2a)$ and therefore $a\rho=1/2$. [A1, algebra]

2.1 The exact equation in [F1] gives $\beta p_{1D}=\rho/(1-1/2)=2\rho$. The first two series terms are $\rho+a\rho^2=\rho+\rho/2=3\rho/2$. Applying the remainder formula in [F1] with $M=2$ gives $\rho(1/2)^2/(1-1/2)=\rho/2$, exactly the difference. [F1, step 1.1, A1, algebra] ∎

## Remarks

This is a finite-parameter illustration of the exact one-dimensional model. It is not a numerical measurement or an all-fluid virial expansion.

