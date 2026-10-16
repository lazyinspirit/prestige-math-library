---
id: thm-qa-26-hhl-state-correctness
kind: theorem
title: "OP5 HHL returns the QLSP state within the requested error"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - alg-qa-26-hhl-phase-estimation
  - lem-qa-26-hhl-success-amplitude
  - lem-qa-26-hhl-sine-window-kernel-moment
  - lem-qa-26-hhl-prefix-table-synthesis-error
  - lem-qa-26-hhl-filter-perturbation
  - lem-qa-26-postselection-normalization-bound
  - lem-qa-26-hhl-capped-amplification
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - lem-qa-26-hermitian-dilation
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument uses finite spectral sums, norm inequalities, and a finite amplification schedule."
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

Under the promises and precision allocations in [[alg-qa-26-hhl-phase-estimation]], let $u$ be the actual joint well-flag vector for one prepared attempt. Write $v_{\rm sys}=(2\kappa)^{-1}H^+|b\rangle$ and $v=v_{\rm sys}\otimes|g_B\rangle\otimes|0_{\rm alg}\rangle\otimes|\mathrm{well}\rangle$ for the ideal joint vector, including the unchanged preparation work and clean algorithmic registers. For $0<\epsilon\le1$ and $0<\rho<1$, the conditionally returned joint vector (including unchanged preparation work) is within vector norm $\epsilon$ of the normalized QLSP target tensored with the preparation work, clean algorithmic registers and well flag, and the capped amplification returns FAIL with probability at most $\rho$. The same assertion holds for the Hermitian dilation, with the output in its tagged domain summand.

## Facts & Assumptions

**Given:** The OP5 algorithm, a normalized input supported on $1/\kappa\le|\lambda|\le1$, and the stated ideal simulator and circuit-error contracts.

[F1] [[lem-qa-26-hhl-success-amplitude]]: $v_{\rm sys}=(2\kappa)^{-1}H^+|b\rangle$ and $\|v_{\rm sys}\|\ge1/(2\kappa)$; tensoring the unit work, clean-register and well-flag factors gives $\|v\|=\|v_{\rm sys}\|$.

[F2] [[lem-qa-26-hhl-sine-window-kernel-moment]]: conditional on each eigenvalue, the signed kernel obeys $\mathbb E\delta^2<300$.

[F3] [[lem-qa-26-hhl-filter-perturbation]]: the well/ill flag-amplitude perturbation is at most $10\kappa|\delta|/t_0$ times the ideal well amplitude.

[F4] [[lem-qa-26-hhl-capped-amplification]]: probability at least $1-\rho$ of a verified well outcome, and its normalized good component is preserved.

[L1] [[lem-qa-26-postselection-normalization-bound]]: relative flagged-vector error at most $9\epsilon/100$ gives normalized-vector error at most $\epsilon$.

[F5] [[alg-qa-26-hhl-phase-estimation]]: the forward and inverse simulation calls have total operator error at most $\epsilon/(4096\kappa)$ and the flag rotation has operator error at most this amount.

[F6] [[lem-qa-26-hhl-prefix-table-synthesis-error]]: the sine preparation and its inverse each have operator error at most $\epsilon_\Psi=\epsilon/(4096\kappa)$.


## Proof

1.1 First take the exact sine preparation, exact simulations and exact flag rotation. Before reversing phase estimation, different decoded labels are orthogonal. For a fixed eigenvalue $\lambda$, the squared norm of the difference between its filter output and the ideal constant output is the probability average of $\|m(\widetilde\lambda)-m(\lambda)\|_2^2$. By [F2] and [F3], this is at most $(10\kappa/t_0)^2\,300\,|f_\kappa(\lambda)|^2$. Summing with the eigenbasis weights shows that the exact-kernel flagged vector differs from $v$ by at most $(10\sqrt{300}\kappa/t_0)\|v\|$. Reversing the phase transform is unitary and preserves this norm bound. [F1, F2, F3, algebra]

1.2 Replacing the exact preparation, simulations and flag map by their implementations changes the full attempt by at most the sum of their norm errors: two sine-table preparation uses, the total forward/reverse simulation budget, and one flag map, at most $4\epsilon/(4096\kappa)$. Projection onto the well flag cannot increase norm, so
$$\frac{\|u-v\|}{\|v\|}\le\frac{10\sqrt{300}\kappa}{t_0}+\frac{4\epsilon/(4096\kappa)}{1/(2\kappa)}<\left(\frac{180}{2048}+\frac{1}{512}\right)\epsilon<0.09\epsilon=:q,$$
using $t_0=2048\kappa/\epsilon$ and $\sqrt{300}<18$. Hence $\|u\|\ge(1-q)\|v\|>1/(4\kappa)$ and the implemented well probability exceeds $1/(16\kappa^2)$. [F1, F5, F6, step 1.1, algebra]

1.3 The exact filter on supported eigenvalues is $v=(2\kappa)^{-1}H^+|b\rangle$, so $v/\|v\|$ is the target. The normalization inequality in [L1] applies because step 1.2 gives relative error below $0.09\epsilon$: directly, $\|u/\|u\|-v/\|v\|\|\le2q/(1-q)<\epsilon$. Finally [F4] makes failure at most $\rho$ and preserves the normalized well component. The preparation work factors as $|g_B\rangle$ and is untouched by the HHL circuit; the ideal uncomputation leaves the other algorithmic registers zero and the measured flag in $|\mathrm{well}\rangle$. Tensoring these unit vectors does not change any norm above. For a rectangular map, [[lem-qa-26-hermitian-dilation]] identifies the system component with the tagged domain vector $A^+b$; tracing out work gives the corresponding output density state. [F1, F4, L1, step 1.2, algebra] ∎
