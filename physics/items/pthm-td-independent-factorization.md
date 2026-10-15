---
id: pthm-td-independent-factorization
kind: physics-theorem
domain: physics
title: Partition, Gibbs-entropy and free-energy factorization for independent finite systems
status: draft
origin: pipeline
library: physics
dependency_level: 6
deps: [def-td-finite-microstate-model, post-td-canonical-sampling, pthm-td-finite-canonical-identities]
dependency_roles:
  def-td-finite-microstate-model: formulation-prerequisite
  post-td-canonical-sampling: physical-assumption
  pthm-td-finite-canonical-identities: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: Finite composite models whose state set is explicitly the Cartesian product and whose microscopic energy is additive; no claim is made for interacting systems, interface terms, or experimental independence.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.3.1 (printed pp. 18–19)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.4.1 and 4.6 (printed pp. 205–217)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: pass
---

## Statement

Let two finite microstate models from [[def-td-finite-microstate-model]] have nonempty state sets $\Omega_A,\Omega_B$, energies $E_A,E_B$ in joules, and the same $T>0$. Assume their declared composite model has state set $\Omega_A\times\Omega_B$ and energy $E_{AB}(x,y)=E_A(x)+E_B(y)$, with no interaction term. Under the canonical sampling assumption [[post-td-canonical-sampling]], the partition function factorizes as $Z_{AB}=Z_AZ_B$, the joint canonical law is $P_{AB}=P_AP_B$, the Gibbs entropy satisfies $S_{AB}=S_A+S_B$, and the statistical free-energy value satisfies $F_{AB}=F_A+F_B$.

## Facts & Assumptions

**Given:** Two finite nonempty state sets, additive composite energy, fixed $T>0$, and the canonical preparations of both subsystems and their composite.

[F1] [[def-td-finite-microstate-model]]: each state set is finite and nonempty and the composite state set and additive energy are declared model data.

[F2] [[post-td-canonical-sampling]]: for each model, $P(x)=e^{-\beta E(x)}/Z$ with $\beta=(k_{\mathrm B}T)^{-1}$.

[F3] [[pthm-td-finite-canonical-identities]]: $S=-k_{\mathrm B}\sum_xP(x)\log P(x)$ and $F=\bar E-TS=-k_{\mathrm B}T\log Z$ for each finite model.

## Proof

**Given:** The finite product state set, additive energy, and the three canonical laws.

1.1 For every $(x,y)\in\Omega_A\times\Omega_B$, $e^{-\beta E_{AB}(x,y)}=e^{-\beta E_A(x)}e^{-\beta E_B(y)}$. Reindexing the finite sum over the Cartesian product therefore gives $Z_{AB}=(\sum_xe^{-\beta E_A(x)})(\sum_ye^{-\beta E_B(y)})=Z_AZ_B$. Dividing the product weight by $Z_AZ_B$ gives $P_{AB}(x,y)=P_A(x)P_B(y)$. [F1, F2, algebra]

2.1 Since each probability is positive, $\log P_{AB}(x,y)=\log P_A(x)+\log P_B(y)$. Summing against $P_A(x)P_B(y)$ and using the finite normalizations yields $S_{AB}=S_A+S_B$. The mean energy is $\bar E_{AB}=\bar E_A+\bar E_B$ by the same finite factorization, so $F_{AB}=\bar E_{AB}-TS_{AB}=F_A+F_B$. [F1, F2, F3, step 1.1, algebra] ∎
