---
id: cex-qc-tqc-gap-not-physical-protection
kind: counterexample
title: A finite toric gap does not imply arbitrary perturbation stability
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - thm-qc-tqc-toric-gap
  - thm-qc-tqc-toric-local-indistinguishability
  - thm-qc-tqc-toric-constant-barrier
  - thm-qc-tqc-toric-code-dimension
  - def-qc-tqc-toric-hamiltonian
justified_by: []
proof_strategy: direct
axiom_use: "None; the counterexample is a finite-dimensional spectral calculation."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alexei Kitaev, Fault-tolerant quantum computation by anyons"
      url: https://arxiv.org/pdf/quant-ph/9707021
    - title: "Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill, Topological quantum memory"
      url: https://arxiv.org/pdf/quant-ph/0110143
    - title: "John Preskill, Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
---

## Statement

For each finite $L\ge3$, the toric Hamiltonian has an exact positive gap,
contractible-disk local indistinguishability, and a constant upper bound on a
logical-string energy barrier. These unperturbed facts alone do not imply
stability under arbitrary perturbations: the explicit global-projector
perturbation $V_L=-\Delta_L(I-\Pi_L)$ closes the gap above the original
code space and enlarges the ground space, where $\Pi_L$ is the ground
projector and $\Delta_L=4\min(J_e,J_m)$. This does not refute
stability theorems for sufficiently small local perturbations, and it makes
no claim about thermal dynamics or a material realization.

## Facts & Assumptions

**Given:** The finite periodic toric Hamiltonian with $L\ge3$, couplings $J_e,J_m>0$, and its code projector $\Pi_L$.

[F1] [[thm-qc-tqc-toric-gap]]: the code is the ground space, the ground energy is $E_g=-L^2(J_e+J_m)$, and the exact gap is $\Delta_L=4\min(J_e,J_m)>0$.

[F2] [[thm-qc-tqc-toric-local-indistinguishability]]: every operator supported in the stated contractible disk has scalar compression to the code.

[F3] [[thm-qc-tqc-toric-constant-barrier]]: one noncontractible logical string has an unperturbed Pauli-path energy barrier at most $4\min(J_e,J_m)$.

[F4] [[thm-qc-tqc-toric-code-dimension]]: $\Pi_L$ has rank four, while the full Hilbert space has dimension $2^{2L^2}>4$.

[F5] [[def-qc-tqc-toric-hamiltonian]]: $H_L$ is a finite self-adjoint operator on the $2^{2L^2}$-dimensional register.

## Counterexample

1.1 Since [F1] identifies the code as the ground eigenspace of the self-adjoint finite operator [F5], its orthogonal projector $\Pi_L$ commutes with $H_L$: for $\psi$ in the code and $\eta\perp\mathcal C$, $\langle\psi,H_L\eta\rangle=\langle H_L\psi,\eta\rangle =E_g\langle\psi,\eta\rangle=0$. The complement is nonzero by [F4], so the restriction of $H_L$ to it has a least eigenvalue. By [F1] that eigenvalue is $E_g+\Delta_L$. The other finite-volume properties [F2] and [F3] concern this same unperturbed Hamiltonian and code. [F1, F2, F3, F4, F5, given, algebra]

2.1 Define $V_L=-\Delta_L(I-\Pi_L)$. The operator $I-\Pi_L$ is a nonzero orthogonal projection by [F4], so $V_L$ is self-adjoint and $\|V_L\|=\Delta_L$. It vanishes on the code and subtracts $\Delta_L$ from every eigenvalue on the orthogonal complement. The construction uses the global code projector and is not asserted to belong to a local perturbation class. [F1, F4, F5, step 1.1, construct, algebra]

3.1 The code eigenvalue remains $E_g$ after adding $V_L$. Every excited eigenvalue $E\ge E_g+\Delta_L$ becomes $E-\Delta_L\ge E_g$, and a nonzero eigenspace with $E=E_g+\Delta_L$ now also has eigenvalue $E_g$. Thus the original code is no longer the full ground space: the energy gap above that four-dimensional code space is zero and the perturbed ground space is strictly larger. The finite unperturbed gap, local indistinguishability, and barrier statements therefore do not by themselves prove stability against arbitrary perturbations. No thermal evolution or material model was specified, so no memory-lifetime or physical-phase conclusion follows from these finite operator facts. [F1, F2, F3, step 2.1, algebra] ∎
