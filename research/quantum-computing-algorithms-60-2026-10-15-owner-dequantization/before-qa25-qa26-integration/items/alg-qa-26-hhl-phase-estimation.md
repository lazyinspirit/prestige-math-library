---
id: alg-qa-26-hhl-phase-estimation
kind: algorithm
title: "HHL finite sine-window phase-estimation algorithm"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-26-qlsp-task
  - lem-qa-26-qlsp-target-is-well-defined
  - lem-qa-26-hermitian-dilation
  - def-qa-26-hhl-access-model
  - lem-qa-26-phase-to-eigenvalue-unwrapping
  - def-qa-26-hhl-reciprocal-filter
  - lem-qa-26-hhl-filter-geometry
  - def-qa-26-hhl-sine-window
  - lem-qa-26-hhl-sine-window-prefix-masses
  - lem-qa-26-hhl-prefix-table-synthesis-error
  - alg-qa-quantum-phase-estimation
  - thm-qa-exact-binary-qft-circuit-correct
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-dirac-notation-conversion
  - alg-qa-12-amplitude-amplification
  - lem-qa-26-hhl-sine-window-kernel-moment
  - lem-qa-26-hhl-capped-amplification
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
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

## Definition

Input a self-adjoint $H$ with $\|H\|\le1$, a unit input state $|b\rangle$ supported only on eigenvalues satisfying $1/\kappa\le|\lambda|\le1$, costed $B,B^\dagger$ and controlled/inverse simulation access as in [[def-qa-26-hhl-access-model]], $0<\epsilon\le1$, and $0<\rho<1$. Rectangular systems use [[lem-qa-26-hermitian-dilation]] and tagged summands. The algorithm is the finite OP5 program:

1. Apply the supplied $B$ to prepare $|b\rangle|g_B\rangle$ and set $t_0=2048\kappa/\epsilon$, choose the least power of two $T\ge8(t_0+1)$, and let $L=\log_2T$. This carrier chooses OP5's explicit table variant for preparing [[def-qa-26-hhl-sine-window]]. Build the complete binary prefix tree on the $T$ leaves. For each of its $T-1$ internal intervals $[a,b)$, compute the two child masses $W_T(a,\mathrm{mid})$ and $W_T(\mathrm{mid},b)$ from the formula in that definition and store the conditional split $r=W_T(a,\mathrm{mid})/W_T(a,b)$. Put $\epsilon_\Psi=\epsilon/(4096\kappa)$. Each nonempty mass is at least $T^{-2}$ by [[lem-qa-26-hhl-sine-window-prefix-masses]]. Use certified interval arithmetic with absolute mass error at most $\epsilon_\Psi^2/(10^6L^2T^4)$; refine until each stored angle $2\arcsin\sqrt r$ and its finite gate synthesis together give controlled-rotation operator error at most $\epsilon_\Psi/(100T)$. Ratios $r=0$ and $r=1$ use the identity and $\pi$ rotations. Store each other angle with at least $\lceil\log_2(100\pi T/\epsilon_\Psi)\rceil+2$ bits and apply its prefix-controlled $Y$ rotation. There are $T-1$ rotations; [[lem-qa-26-hhl-prefix-table-synthesis-error]] bounds their total operator error by $\epsilon_\Psi/100$ from the displayed combined per-node operator tolerance. The table contains $O(T\log(T/\epsilon_\Psi))$ bits and $T-1$ controlled rotations. Charge its one-time construction/data cost $G_\Psi(T,\epsilon_\Psi)$ and each forward/inverse preparation cost $C_\Psi(T,\epsilon_\Psi)$ from [[def-qa-26-hhl-access-model]], including reversible lookup, control and finite gate synthesis. Thus the sine-preparation unitary and its inverse each have operator error at most $\epsilon_\Psi$; this variant pays linear-in-$T$ table and rotation resources rather than assuming a loaded amplitude table.

2. For $j=0,\ldots,L-1$, apply controlled $S_H(2^jt_0/T,\eta_j)$; choose tolerances with sum over all forward and inverse calls at most $\epsilon/(4096\kappa)$. Apply the negative-sign QFT, decode $y$ to signed $k=y$ for $y<T/2$ and $k=y-T$ otherwise, and set $\widetilde\lambda=2\pi k/t_0$. The total forward evolution time is $t_0(1-1/T)<t_0$. This uses the signed convention in [[lem-qa-26-phase-to-eigenvalue-unwrapping]].

3. Append a three-outcome flag and, conditioned on $\widetilde\lambda$, apply the amplitudes $(h(\widetilde\lambda),f_\kappa(\widetilde\lambda),g_\kappa(\widetilde\lambda))$ from [[def-qa-26-hhl-reciprocal-filter]]. The nothing, well and ill labels are orthogonal; the unused fourth two-qubit label is fixed. The flag map is extended to a unitary on the full register, with uniform operator error at most $\eta_R:=\epsilon/(4096\kappa)$.

4. Reverse the QFT, every controlled simulation, and sine preparation, retaining the flag. This gives a unitary flagged preparation $V$ and its exact circuit inverse $V^\dagger$. Let $p$ be the well-flag probability. Apply the finite capped amplification procedure proved in [[lem-qa-26-hhl-capped-amplification]] with lower bound $p_{\mathrm{low}}=1/(16\kappa^2)$ and failure target $\rho$. Measure the well flag and return its conditional state, tagged output and success bit; return FAIL otherwise.

The circuit uses no uniform-register phase-tail estimate: its phase distribution is the sine-window kernel proved in [[lem-qa-26-hhl-sine-window-kernel-moment]]. Its $G_\Psi,C_\Psi,C_{\rm sim},C_{\rm QFT}^{+/-},C_{\rm flag}$, reflection, verification and $B/B^\dagger$ costs remain separate inputs.
