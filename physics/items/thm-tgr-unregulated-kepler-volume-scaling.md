---
id: thm-tgr-unregulated-kepler-volume-scaling
kind: theorem
title: "Unregulated bound Kepler phase-volume scaling"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-tgr-unregulated-kepler-bound-phase-volume
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-chain-rule
  - def-countable-choice
  - thm-monotone-convergence-for-the-integral
dependency_roles:
  def-tgr-unregulated-kepler-bound-phase-volume: mathematical-premise
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §§1.3.2–1.3.3 and §§2.1–2.2, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, §§III.A–E"
      url: "https://arxiv.org/pdf/1908.10806"
---

## Statement

For the unregulated bound Kepler model of [[def-tgr-unregulated-kepler-bound-phase-volume]], write $E=-e$ with $e>0$ and
$$
J_0=\int_0^1s^{1/2}(1-s)^{3/2}\,ds,\qquad
K_0=\frac{16\pi^2(2\mu)^{3/2}A^3J_0}{3h_*^3}>0.
$$
Then
$$
\Omega_0(-e)=K_0e^{-3/2},\qquad
\omega_0(-e):=\frac{d\Omega_0}{dE}(-e)=\frac32K_0e^{-5/2}>0.
$$

## Facts & Assumptions

**Given:** $\mu,A,h_*>0$, $E=-e<0$, and the phase-volume definition of [[def-tgr-unregulated-kepler-bound-phase-volume]].

[A1] The relative point-Kepler Hamiltonian, measure $dq\,dp/h_*^3$, and $\Omega_0(E)$ are exactly as defined in [[def-tgr-unregulated-kepler-bound-phase-volume]].

[F1] [[thm-change-of-variables-for-compact-jordan-sets]], Statement: on compact Jordan truncations, polar coordinates change the integral by the absolute Jacobian; nonnegative increasing truncations recover the full phase volume.

[F2] [[thm-chain-rule]], Statement: differentiating the explicit composite $e=-E$ multiplies the one-variable derivatives by $de/dE=-1$.

## Proof

1.1 At fixed radius $r=|q|$, the bound-energy condition is $|p|\le\sqrt{2\mu(A/r-e)}$ for $0<r<A/e$ and has no solutions for $r\ge A/e$. Radial integration of the position volume and momentum ball, first on compact truncations away from $r=0$ and $r=A/e$ using the Jacobians $r^2\sin\theta$ and $p^2\sin\vartheta$ from [F1], gives
$$
\Omega_0(-e)=\frac{16\pi^2(2\mu)^{3/2}}{3h_*^3}
\int_0^{A/e}r^2(A/r-e)^{3/2}dr,
$$
after increasing the truncations to the full nonnegative domain. The substitution $s=er/A$ transforms this to $K_0e^{-3/2}$. The integral $J_0$ is finite because its integrand is bounded by $1$ on $(0,1)$, and positive because it is strictly positive there. Thus $\Omega_0(-e)$ is finite and positive. [given, A1, F1, construct, algebra]

1.2 Differentiating the explicit formula by [F2] gives $\omega_0(-e)=(3/2)K_0e^{-5/2}$, which is finite and positive for every $e>0$. [step 1.1, F2, algebra] ∎

