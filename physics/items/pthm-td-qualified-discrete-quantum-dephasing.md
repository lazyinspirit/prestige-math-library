---
id: pthm-td-qualified-discrete-quantum-dephasing
kind: physics-theorem
domain: physics
title: Cesaro dephasing for a discrete trace-class quantum model
status: draft
origin: pipeline
library: physics
dependency_level: 4
deps: [def-axiom-of-choice, def-countable-choice, def-nrqm-autonomous-dynamics-framework-evolution, post-nrqm-framework-autonomous-dynamics, post-nrqm-many-body-canonical-equilibrium-ensemble, pthm-td-general-quantum-canonical-identities, thm-tdmath-discrete-quantum-cesaro-dephasing]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-many-body-canonical-equilibrium-ensemble: physical-assumption
  pthm-td-general-quantum-canonical-identities: physical-result
  thm-tdmath-discrete-quantum-cesaro-dephasing: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: A trace-class initial density and a self-adjoint quantum Hamiltonian with a complete discrete energy eigenfamily of finite multiplicity under the declared unitary dynamics; the result is a time-averaged state limit, not Gibbs preparation or pointwise relaxation.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.3.1 (printed pp. 18–19)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.3.1 and 4.4.1 (printed pp. 199–206)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: pass
---

## Statement

Assume AC and Countable Choice. Let $H$ be a self-adjoint quantum Hamiltonian bounded below with a complete discrete energy eigenfamily of finite multiplicity, and let $\rho_0$ be any positive trace-class density operator of trace one. Let $\hbar>0$ be the assigned action constant in $\mathrm{J\,s}$, adopt the unitary dynamics $U_t=e^{-itH/\hbar}$ of [[post-nrqm-framework-autonomous-dynamics]], and assume the trace-class Gibbs and local moment conditions of [[pthm-td-general-quantum-canonical-identities]] that supply this discrete eigenfamily. Then, conditional on the current batch-12 draft theorem [[thm-tdmath-discrete-quantum-cesaro-dephasing]], the Cesaro state
$$\bar\rho_\tau:=\frac1{\tau}\int_0^\tau U_t\rho_0U_t^*\,dt$$
converges in trace norm as $\tau\to\infty$ to $\rho_{\mathrm{diag}}=\sum_E P_E\rho_0P_E$, where $P_E$ is the spectral projection onto the full eigenspace of energy $E$. Coherences inside degenerate energy blocks remain. The limit need not be Gibbs, and no pointwise-in-time convergence or thermalization is asserted.

## Facts & Assumptions

**Given:** A discrete self-adjoint Hamiltonian with finite-multiplicity energy eigenspaces, a trace-class density $\rho_0$, the declared unitary dynamics, and $\hbar$ in $\mathrm{J\,s}$.

[F1] [[post-nrqm-framework-autonomous-dynamics]] and [[def-nrqm-autonomous-dynamics-framework-evolution]]: the declared closed-system state evolves by $\rho(t)=U_t\rho_0U_t^*$ with $U_t=e^{-itH/\hbar}$ and unitary group law.

[F2] [[pthm-td-general-quantum-canonical-identities]]: under the semibounded self-adjoint and trace-class Gibbs hypotheses with the stated local moment envelope, the Gibbs operator has a complete countable energy eigenfamily with finite multiplicity for each energy; this conclusion remains conditional on its current draft mathematical supplier.

[L1] [[thm-tdmath-discrete-quantum-cesaro-dephasing]] (current batch 12 draft): under AC, a complete finite-or-countable orthonormal eigenbasis of a semibounded self-adjoint operator, finite-dimensional energy eigenspaces, $\hbar>0$, and a positive trace-one trace-class density, the trace-norm Cesaro average converges to $\sum_E P_E\rho_0P_E$. The complete current proof was inspected; its Step 1 readiness is missing, so this premise remains conditional.

[A1] AC and Countable Choice are assumed through [F2] and the quantum preparation postulate; $\tau>0$ is elapsed time in seconds and every phase $(E_i-E_j)t/\hbar$ is dimensionless.

[A2] $\rho_0$ is positive trace class with trace one, and $\hbar>0$ is the fixed action constant in $\mathrm{J\,s}$.

## Proof

**Given:** The trace-class state, the discrete energy basis, the unitary dynamics, and the current draft trace-norm Cesaro theorem.

1.1 By [F2], the trace-class Gibbs and local moment assumptions supply a complete countable energy eigenbasis with finite-dimensional eigenspaces; [A1] supplies AC and [A2] supplies the positive trace-one initial density and action-unit convention. Together with the semibounded self-adjoint Hamiltonian in the Statement, these are the hypotheses of [L1], and [F1] specifies the same unitary orbit. [F1, F2, L1, A1, A2]

2.1 Apply the current draft result [L1] to the matched inputs in step 1.1. It yields $\bar\rho_\tau\to\sum_E P_E\rho_0P_E$ in trace norm with the entire degenerate blocks retained. The limit depends on $\rho_0$, so no Gibbs or pointwise-time conclusion follows. This use remains conditional until [L1] has current Step 1 readiness. [F1, F2, L1, step 1.1] ∎
