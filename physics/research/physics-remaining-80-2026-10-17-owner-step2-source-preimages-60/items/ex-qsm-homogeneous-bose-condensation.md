---
id: ex-qsm-homogeneous-bose-condensation
kind: example
title: "Grand condensate variance remains macroscopic"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - pthm-qsm-homogeneous-bose-condensation
dependency_roles:
  pthm-qsm-homogeneous-bose-condensation: physical-result
physical_scope: "The grand-ensemble ground-mode variance and tail at a fixed positive excess density above the ideal critical density, as a direct instance of the linked theorem. It makes no canonical or interacting-gas claim."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "David Tong, Statistical Physics, §3.5.3, Bose condensation and grand-canonical fluctuations"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
---

## Example

In the three-dimensional ideal Bose grand ensemble at fixed density $\rho>\rho_c$, put $\rho_0=\rho-\rho_c>0$. The ground-mode mean is asymptotic to $\rho_0V$, but its variance divided by $V^2$ tends to $\rho_0^2$, and its density tail satisfies $\mathbb P(N_0/V\ge x)\to e^{-x/\rho_0}$. Thus the condensate density does not concentrate at its mean limit in this grand ensemble.

## Verification

**Given:** $V=L^3$, $\rho_0>0$, and the grand geometric ground-mode law in [[pthm-qsm-homogeneous-bose-condensation]].

[F1] [[pthm-qsm-homogeneous-bose-condensation]], Statement: $\mathbb E N_0/V\to\rho_0$, $\operatorname{Var}(N_0/V)\to\rho_0^2$, and $\mathbb P(N_0/V\ge x)\to e^{-x/\rho_0}$.

1.1 The linked theorem gives $\mathbb E N_0=\rho_0V+o(V)$. Substitution into the geometric variance $\bar n_0(1+\bar n_0)$ and division by $V^2$ gives limit $\rho_0^2$. [given, F1, algebra]

2.1 At $x=2\rho_0$, the probability of a density at least $2\rho_0$ tends $e^{-2}>0$. Every such event differs from the limiting mean density $\rho_0$ by at least $\rho_0$, so convergence in probability to $\rho_0$ is impossible. This conclusion is specific to the grand preparation; a fixed-number state has $N_0$ constrained by total number. [given, F1, algebra] ∎
