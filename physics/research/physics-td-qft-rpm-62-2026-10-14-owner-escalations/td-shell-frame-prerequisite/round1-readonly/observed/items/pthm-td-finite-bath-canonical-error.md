---
id: pthm-td-finite-bath-canonical-error
kind: physics-theorem
domain: physics
title: Finite-bath canonical error under a smooth shell-entropy model
status: draft
origin: pipeline
library: physics
dependency_level: 5
deps: [def-td-finite-microstate-model, def-td-si-quantities, post-td-canonical-sampling, post-td-microcanonical-sampling, thm-tdmath-finite-bath-error-bound]
dependency_roles:
  def-td-finite-microstate-model: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  post-td-canonical-sampling: physical-assumption
  post-td-microcanonical-sampling: physical-assumption
  thm-tdmath-finite-bath-error-bound: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: A finite subsystem weakly coupled additively to a bath whose dimensionless shell entropy is twice continuously differentiable with bounded curvature on the full exchanged-energy interval; this is a conditional model bound, not a universal finite-size estimate.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.3 (printed pp. 17–20)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.2 and 4.4 (printed pp. 192–198 and 205–208)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: pass
---

## Statement

Let the subsystem have a finite nonempty state set $\Omega$ and internal energies $E_x$ in joules with $|E_x|\le L$. A bath has a dimensionless shell entropy $s_B(u)$, defined on an open interval containing $[u_0-L,u_0+L]$ in joules, with $s_B\in C^2$ and $|s_B''(u)|\le M$ there; the model adopts $\beta=s'_B(u_0)>0$ in $\mathrm{J^{-1}}$ and $T=(k_{\mathrm B}\beta)^{-1}$. Assume weak additive coupling and microcanonical shell sampling induce subsystem weights $P_B(x)\propto e^{s_B(u_0-E_x)}$. Let $P_C(x)=e^{-\beta E_x}/Z$ be the corresponding canonical law. With $\delta=ML^2/2$ (dimensionless), the shell log-weight remainder obeys
$$|s_B(u_0-E_x)-s_B(u_0)+\beta E_x|\le\delta,$$
and the normalized laws satisfy
$$\sum_{x\in\Omega}|P_B(x)-P_C(x)|\le e^{2\delta}-1.$$
This is an $\ell^1$ probability-vector bound; it does not assert a universal error or a thermodynamic limit.

## Facts & Assumptions

**Given:** The finite subsystem, the bath entropy and curvature bound, the adopted energy-additive shell model, and the two normalized laws.

[F1] [[def-td-finite-microstate-model]]: $\Omega$ is finite and nonempty and each $E_x$ is a fixed internal energy in joules.

[F2] [[post-td-canonical-sampling]]: the canonical comparison law has weights $e^{-\beta E_x}/Z$ when $Z>0$ is finite.

[F3] [[post-td-microcanonical-sampling]]: the microcanonical joint-shell model assigns the subsystem marginal induced by the bath shell weights when the weak-additive-coupling and shell hypotheses are imposed.

[L1] [[thm-tdmath-finite-bath-error-bound]] (current batch 11 draft): for finite energies $|E_x|\le L$, $s_B\in C^2$ on the stated interval, $|s_B''|\le M$, $\beta=s'_B(u_0)$, and normalized weights proportional to $e^{s_B(u_0-E_x)}$, the Taylor remainder is at most $\delta=ML^2/2$ and the canonical comparison law has $\ell^1$ error at most $e^{2\delta}-1$. Its full current proof was inspected; its draft status remains conditional.

[A1] $L,M\ge0$, $\beta>0$, the bath interval contains every $u_0-E_x$, and the physical energy unit is joules, so $\beta E_x$, $s_B$, and $\delta$ are dimensionless.

## Proof

**Given:** The finite-system energies, the smooth bath shell-entropy model, and the weak-additive microcanonical marginal stipulated in the Statement.

1.1 With $|E_x|\le L$, every bath argument $u_0-E_x$ lies in the stated interval. The curvature bound and $\beta=s'_B(u_0)$ therefore match the hypotheses of [L1], including the dimensionless remainder scale $\delta=ML^2/2$. The shell weights in [F3] are exactly the weights required by [L1], and the finite canonical comparison is [F2]. [F1, F2, F3, L1, A1]

2.1 Applying [L1] to these matched inputs gives $|s_B(u_0-E_x)-s_B(u_0)+\beta E_x|\le\delta$ for each state and $\sum_x|P_B(x)-P_C(x)|\le e^{2\delta}-1$. The claim is conditional on the actual shell-weight rule and the draft mathematical supplier, not on bath size alone. [F2, F3, L1, step 1.1] ∎
