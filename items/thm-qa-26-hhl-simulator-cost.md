---
id: thm-qa-26-hhl-simulator-cost
kind: theorem
title: "HHL cost under direct controlled-simulation access"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-26-hhl-phase-estimation
  - lem-qa-26-hhl-capped-amplification
  - def-qa-26-hhl-access-model
  - def-qa-20-simulation-error-and-cost-model
  - def-qc-circuit-cost-model
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the cost bound is a finite sum over the explicit circuit."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: https://arxiv.org/pdf/0811.3171
      locator: "Appendix A, especially §§A1–A3, PDF pp. 5–11; Hermitian embedding §A4, PDF pp. 11–12."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: https://arxiv.org/pdf/1511.02306
      locator: "QLSP oracle model and Theorem 2, PDF pp. 2–5; used to compare, not to replace a local sparse-simulation proof."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Complete 191-page notes; phase estimation §4.3, printed p. 19; amplitude amplification §19.3; Hamiltonian simulation chapters 27 and 29."
---

## Statement

Let $L=\log_2T$, $t_j=2^jt_0/T$, $K=\lceil4\kappa\rceil$, and $R=\lceil16\ln(1/\rho)\rceil+16$. The capped HHL circuit uses at most $RK$ calls to each of $V$ and $V^\dagger$, at most $RK$ calls to each supplied preparation form (the tagged $B_A$ in dilation mode) and its inverse, and one table construction $G_\Psi(T,\epsilon_\Psi)$. Each $V$ or $V^\dagger$ contains two sine-table preparation/unpreparation circuits, one forward and one inverse QFT, the flag circuit, and $2L$ controlled simulation calls at signed times $\pm t_j$; its absolute evolution times sum to less than $2t_0$. Therefore the total absolute simulation time is less than $4RKt_0=O(\kappa^2\epsilon^{-1}(1+\log(1/\rho)))$. More precisely, the simulation charge is the actual sum over all $V,V^\dagger$ calls of $\sum_{j<L}(C_{\rm sim}(t_j,\eta_j)+C_{\rm sim}(-t_j,\eta_j))$. The remaining charge is
$$G_\Psi(T,\epsilon_\Psi)+n_VC_B+n_{V^\dagger}C_{B^\dagger}+2(n_V+n_{V^\dagger})C_\Psi(T,\epsilon_\Psi)+(n_V+n_{V^\dagger})(C_{\rm QFT}^{+}(T)+C_{\rm QFT}^{-}(T)+C_{\rm flag}(\kappa,\eta_R)+C_{\rm arith}(T,\kappa,\epsilon))+N_{\rm ref}C_{\rm ref}+N_{\rm ver}C_{\rm ver},$$
where $n_V,n_{V^\dagger}\le RK$ and $N_{\rm ref},N_{\rm ver}$ are the actual reflection and verification counts. The table itself has $O(T\log(T/\epsilon_\Psi))$ data bits and $T-1$ controlled rotations; no polylogarithmic table-generation or finite-rotation synthesis bound is asserted.

## Facts & Assumptions

**Given:** The finite OP5 circuit and its declared simulator resource function.

[F1] [[alg-qa-26-hhl-phase-estimation]]: the attempt uses the signed times $t_j=2^jt_0/T$, reverses each phase and prepares/unprepares the sine table.

[F2] [[lem-qa-26-hhl-capped-amplification]]: at most $RK$ calls are made in each direction.

[F3] [[def-qa-20-simulation-error-and-cost-model]], [[def-qc-circuit-cost-model]], and [[def-qa-26-hhl-access-model]]: simulator, the actual supplied preparation form (including $B_A$ in dilation mode), QFT, table, reflection, verifier, and gate resources are separate additive cost coordinates.

## Proof


1.1 The geometric sum of forward times is $\sum_{j=0}^{L-1}2^jt_0/T=(T-1)t_0/T<t_0$. The reverse list has the same absolute times, so one $V$ or $V^\dagger$ call uses less than $2t_0$. By [F2], there are at most $RK$ calls in each direction, giving total absolute time below $4RKt_0$. Since $K\le5\kappa$, $R\le16\ln(1/\rho)+17$, and $t_0=2048\kappa/\epsilon$, the stated order follows. [F1, F2, algebra]

2.1 Each $V$ or $V^\dagger$ circuit contains one forward and one inverse QFT, two sine-table circuits, one flag circuit, and one forward/reverse simulation list by [F1]. Multiplying their actual counts by the separate cost functions in [F3] gives the displayed additive charge; the fixed table $G_\Psi$ is generated once, and every B, inverse B, reflection, and verifier use is counted in its own coordinate. [F1, F3, step 1.1, algebra] ∎

