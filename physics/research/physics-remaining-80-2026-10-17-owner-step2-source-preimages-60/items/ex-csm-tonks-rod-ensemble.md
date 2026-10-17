---
id: ex-csm-tonks-rod-ensemble
kind: example
title: "Packing boundary and exact truncated virial error"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-csm-tonks-rod-ensemble
dependency_roles:
  pthm-csm-tonks-rod-ensemble: physical-result
physical_scope: "Finite one-dimensional Tonks gas at half the close-packing density; exact pressure and geometric virial remainder only."
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
---

## Example

Fix rod length $a>0$ in metres and $N\ge1$, and set box length $L=2Na$ in metres. Then $L>Na$ and number density $\rho=N/L=1/(2a)$ in m$^{-1}$, so $a\rho=1/2$. The exact force-conjugate pressure is $\beta p_{1D}=2\rho$. Truncating its virial series after the first two terms gives $\rho+a\rho^2=3\rho/2$, with exact remainder $\rho/2$.

## Facts & Assumptions

**Given:** The one-dimensional hard-rod model and virial formula from [[pthm-csm-tonks-rod-ensemble]], with $a>0$, $L>Na$, and $\rho=N/L$.

[F1] [[pthm-csm-tonks-rod-ensemble]]: $\beta p_{1D}=\rho/(1-a\rho)$ and the remainder after $M$ terms is $\rho(a\rho)^M/(1-a\rho)$.

[A1] Choose $L=2Na$ and truncate after $M=2$ terms.

## Verification

1.1 The choices give $\rho=N/(2Na)=1/(2a)$ and therefore $a\rho=1/2$. [A1, algebra]

2.1 The exact equation in [F1] gives $\beta p_{1D}=\rho/(1-1/2)=2\rho$. The first two series terms are $\rho+a\rho^2=\rho+\rho/2=3\rho/2$. Applying the remainder formula in [F1] with $M=2$ gives $\rho(1/2)^2/(1-1/2)=\rho/2$, exactly the difference. [F1, step 1.1, A1, algebra] ∎

## Remarks

This is a finite-parameter illustration of the exact one-dimensional model. It is not a numerical measurement or an all-fluid virial expansion.

