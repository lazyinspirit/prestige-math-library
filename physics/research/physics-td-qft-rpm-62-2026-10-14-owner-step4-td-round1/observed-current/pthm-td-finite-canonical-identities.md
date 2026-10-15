---
id: pthm-td-finite-canonical-identities
kind: physics-theorem
domain: physics
title: Finite canonical partition, energy, variance, entropy and free-energy identities
status: draft
origin: pipeline
library: physics
dependency_level: 5
deps: [def-natural-logarithm, def-td-finite-microstate-model, post-td-canonical-sampling, thm-derivative-of-exponential, thm-logarithm-derivative-and-integral]
dependency_roles:
  def-natural-logarithm: mathematical-premise
  def-td-finite-microstate-model: formulation-prerequisite
  post-td-canonical-sampling: physical-assumption
  thm-derivative-of-exponential: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: Exact finite-sum predictions for the adopted canonical law on a fixed finite microstate list with fixed internal energies; the statistical free-energy value is not automatically identified with a macroscopic Legendre potential or an empirical thermodynamic measurement.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§1.3.1–1.3.4 (printed pp. 18–26)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.4–4.6 (printed pp. 205–217)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: pass
---

## Statement

Let $(\Omega,\epsilon)$ be a finite microstate model with energies $E_x=\epsilon(x)\,\mathrm J$ from [[def-td-finite-microstate-model]]. Let $T>0$, $\beta=(k_{\mathrm B}T)^{-1}$, and $P_\beta(x)=e^{-\beta E_x}/Z(\beta)$ be the adopted preparation of [[post-td-canonical-sampling]]. With $\bar E_\beta=\sum_xP_\beta(x)E_x$, $\operatorname{Var}_\beta(E)=\sum_xP_\beta(x)(E_x-\bar E_\beta)^2$, and $S_\beta=-k_{\mathrm B}\sum_xP_\beta(x)\log P_\beta(x)$, the finite partition sum is positive and
$$-\partial_\beta\log Z=\bar E_\beta,\qquad \partial_\beta^2\log Z=\operatorname{Var}_\beta(E),\qquad S_\beta=k_{\mathrm B}(\log Z+\beta\bar E_\beta).$$
Consequently the statistical free-energy value $F_{\mathrm{stat}}:=-k_{\mathrm B}T\log Z$ satisfies $F_{\mathrm{stat}}=\bar E_\beta-TS_\beta$. The derivatives hold the finite state set and its energy list fixed. No equivalence with a macroscopic entropy or Helmholtz potential is asserted.

## Facts & Assumptions

**Given:** A finite nonempty state set, a fixed energy list in joules, $T>0$, the fixed SI value of $k_{\mathrm B}$, and the adopted canonical weights.

[F1] [[def-td-finite-microstate-model]]: $\Omega$ is finite and nonempty and each $E_x$ is a fixed energy in joules.

[F2] [[post-td-canonical-sampling]]: $P_\beta(x)=e^{-\beta E_x}/Z$ with $Z=\sum_xe^{-\beta E_x}$ and $\beta=1/(k_{\mathrm B}T)>0$ in $\mathrm{J^{-1}}$.

[F3] [[thm-derivative-of-exponential]]: $\frac{d}{d\beta}e^{-\beta E_x}=-E_xe^{-\beta E_x}$ for each fixed $E_x$.

[F4] [[thm-logarithm-derivative-and-integral]] and [[def-natural-logarithm]]: for differentiable positive $Z$, $(\log Z)'=Z'/Z$.

## Proof

**Given:** The finite canonical model and its fixed energy values.

1.1 Since $\Omega$ is finite and nonempty and every $e^{-\beta E_x}>0$, the finite sum $Z=\sum_xe^{-\beta E_x}$ is strictly positive and finite. The weights $P_\beta(x)$ therefore sum to one by their definition. [F1, F2, algebra]

2.1 Differentiating the finite sum term by term using [F3] gives $Z'=-\sum_xE_xe^{-\beta E_x}$ and $Z''=\sum_xE_x^2e^{-\beta E_x}$. Applying [F4] yields $-\partial_\beta\log Z=-(Z'/Z)=\bar E_\beta$ and $\partial_\beta^2\log Z=Z''/Z-(Z'/Z)^2=\sum_xP_\beta(x)E_x^2-\bar E_\beta^2=\operatorname{Var}_\beta(E)$. [F2, F3, F4, step 1.1]

3.1 For each $x$, $\log P_\beta(x)=-\beta E_x-\log Z$. Substituting this into the finite entropy sum gives $S_\beta=-k_{\mathrm B}\sum_xP_\beta(x)\log P_\beta(x)=k_{\mathrm B}(\beta\bar E_\beta+\log Z)$. Since $\beta k_{\mathrm B}=1/T$, rearrangement gives $\bar E_\beta-TS_\beta=-k_{\mathrm B}T\log Z=F_{\mathrm{stat}}$. [F2, step 1.1, algebra] ∎
