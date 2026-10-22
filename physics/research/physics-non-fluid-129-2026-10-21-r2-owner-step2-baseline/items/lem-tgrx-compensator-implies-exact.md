---
id: lem-tgrx-compensator-implies-exact
kind: lemma
title: A global potential compensator makes the contracted field exact
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-tgr-charged-liouville-data
  - def-closed-and-exact-differential-forms
dependency_roles:
  def-tgr-charged-liouville-data: mathematical-premise
  def-closed-and-exact-differential-forms: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §VI.B, eqs. (262)-(268)"
      url: https://arxiv.org/pdf/2106.09235
    - title: "David Tong, General Relativity, complete Cambridge Part III lecture notes, §2.4.4"
      url: https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf
verification:
  precheck: pass
---

## Statement

Let $O$ be a smooth time-oriented Lorentzian domain, let $\xi$ be a smooth future-timelike Killing field on $O$, and let $A$ be a global smooth one-form with $F=dA$. Suppose a global smooth scalar $\Lambda_\xi$ satisfies $\mathcal L_\xi A=d\Lambda_\xi$. Define $\Psi_\xi:=\xi^aA_a-\Lambda_\xi$ and $\omega:=\iota_\xi F$, with $(\iota_\xi F)_a=\xi^bF_{ba}$. Then

$$\omega=-d\Psi_\xi,$$

so $\omega$ is exact. This identity uses the global potential symmetry and assumes no charged trajectory or conservation law.

## Statement references

[[def-tgr-charged-liouville-data]]

[[def-closed-and-exact-differential-forms]]

## Facts & Assumptions

**Given:** A smooth time-oriented Lorentzian domain $O$, a smooth future-timelike Killing field $\xi$, a global smooth one-form $A$ with $F=dA$, and a global smooth scalar $\Lambda_\xi$ satisfying $\mathcal L_\xi A=d\Lambda_\xi$.

[F1] [[def-tgr-charged-liouville-data]]: $F=dA$, $(\iota_\xi F)_a=\xi^bF_{ba}$, $(\mathcal L_\xi A)_a=\xi^b\partial_bA_a+A_b\partial_a\xi^b$, and $\Psi_\xi=\xi^aA_a-\Lambda_\xi$ for the supplied global potential data.

[F2] [[def-closed-and-exact-differential-forms]]: a one-form is exact when it is the exterior derivative of a globally defined smooth scalar.

[A1] The global compensator equation $\mathcal L_\xi A=d\Lambda_\xi$ holds on all of $O$.

## Proof

1.1 In any smooth chart, the definitions give $(\iota_\xi F)_a=\xi^b(\partial_bA_a-\partial_aA_b)$ and $\partial_a\Psi_\xi=A_b\partial_a\xi^b+\xi^b\partial_aA_b-\partial_a\Lambda_\xi$. By [A1] and [F1], $\partial_a\Lambda_\xi=\xi^b\partial_bA_a+A_b\partial_a\xi^b$. Substitution yields $(\iota_\xi F)_a=-\partial_a\Psi_\xi$. Since this calculation holds in every chart, it proves the stated one-form identity. [given, A1, F1, algebra]

2.1 The scalar $\Psi_\xi=\xi^aA_a-\Lambda_\xi$ is global and smooth because it is the contraction of globally defined smooth fields minus a global smooth scalar. Thus step 1.1 gives $\omega=-d\Psi_\xi=d(-\Psi_\xi)$ globally, which is exact by [F2]. [given, F2, step 1.1, algebra] ∎
