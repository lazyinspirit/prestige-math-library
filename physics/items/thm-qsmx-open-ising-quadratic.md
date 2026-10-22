---
id: thm-qsmx-open-ising-quadratic
kind: theorem
title: Exact quadratic reduction and Gibbs trace of the open Ising chain
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-countable-choice
  - def-qsmx-transverse-ising-majoranas
  - lem-qsm-matrix-state-calculus
  - lem-qsm-models-diagonal-occupation-trace
  - lem-qsmx-real-skew-orthogonal-normal-form
  - lem-qsmx-transverse-ising-majorana-car
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qsmx-transverse-ising-majoranas: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-models-diagonal-occupation-trace: mathematical-premise
  lem-qsmx-real-skew-orthogonal-normal-form: mathematical-premise
  lem-qsmx-transverse-ising-majorana-car: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "G. B. Mbeng, A. Russomanno, and G. E. Santoro, The quantum Ising chain for beginners, arXiv:2009.09208v2, §§1–2, 6.2, and 10"
      url: "https://arxiv.org/pdf/2009.09208"
    - title: "Pieter Claeys, Quench dynamics in the Transverse Field Ising Model, Many-body Quantum Dynamics @ TU Dresden lecture notes, §6"
      url: "https://www.pks.mpg.de/fileadmin/user_upload/MPIPKS/group_pages/DQI/TFIM_2024.pdf"
---

## Statement

Assume Countable Choice. Let $N\ge1$, use the open-chain Hilbert space and Hamiltonian $H_N(h,J)$ of the ordered Majorana definition, and let $\beta>0$ have units $\mathrm{J}^{-1}$ while $h,J$ have units joules. Define the real skew matrix $A_N\in M_{2N}(\mathbb R)$ by $ (A_N)_{2j-1,2j}=2h$ for $1\le j\le N$, $(A_N)_{2j,2j+1}=2J$ for $1\le j<N$, the opposite entries by skew-symmetry, and all other entries by zero. Let $\epsilon_1,\ldots,\epsilon_N\ge0$ be its real orthogonal block energies, including zero values. Then
$$H_N(h,J)=\frac{i}{4}\gamma^{\mathsf T}A_N\gamma=\sum_{r=1}^N\epsilon_r\left(b_r^*b_r-\frac12I\right)$$
for the transformed Majorana modes $b_r$ in the Proof, and its finite Gibbs trace is
$$Z_N(\beta;h,J):=\operatorname{Tr}_{\mathcal H_N}(e^{-\beta H_N(h,J)})=\prod_{r=1}^N2\cosh\!\left(\frac{\beta\epsilon_r}{2}\right).$$
Every zero mode contributes a factor two. The chain is open throughout; no periodic Jordan–Wigner parity boundary term is included.

## Statement references

[[def-qsmx-transverse-ising-majoranas]]

[[lem-qsmx-transverse-ising-majorana-car]]

[[lem-qsmx-real-skew-orthogonal-normal-form]]

## Facts & Assumptions

**Given:** Countable Choice; an integer $N\ge1$; real $h,J$ in joules; and $\beta>0$ in $\mathrm{J}^{-1}$.

[A1] Countable Choice is assumed exactly where the diagonal occupation-trace supplier is applied ([[def-countable-choice]]).

[F1] [[def-qsmx-transverse-ising-majoranas]]: $\mathcal H_N=(\mathbb C^2)^{\otimes N}$, $H_N=-h\sum_{j=1}^NZ_j-J\sum_{j=1}^{N-1}X_jX_{j+1}$, and $\gamma_{2j-1}=Z_1\cdots Z_{j-1}X_j$, $\gamma_{2j}=Z_1\cdots Z_{j-1}Y_j$.

[F2] [[lem-qsmx-transverse-ising-majorana-car]]: each $\gamma_a$ is Hermitian and $\{\gamma_a,\gamma_b\}=2\delta_{ab}I$.

[F3] [[lem-qsmx-real-skew-orthogonal-normal-form]]: a real skew matrix of size $2N$ has an orthogonal basis of two-dimensional blocks $\bigl(\begin{smallmatrix}0&\epsilon_r\\-\epsilon_r&0\end{smallmatrix}\bigr)$ with $\epsilon_r\ge0$.

[F4] [[lem-qsm-models-diagonal-occupation-trace]]: under Countable Choice, for a finite fermionic mode set with energies $\epsilon_r$, $\beta>0$, and $q_r=e^{-\beta\epsilon_r}>0$, the diagonal occupation trace is $\prod_r(1+q_r)$; its finite-mode case allows zero energies and hence $q_r=1$.

[F5] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have orthonormal eigenbases, and the ordinary finite trace is basis-independent.

## Proof

1.1 For every site, $\gamma_{2j-1}\gamma_{2j}=X_jY_j=iZ_j$, so $ih\gamma_{2j-1}\gamma_{2j}=-hZ_j$. For $j<N$, $\gamma_{2j}\gamma_{2j+1}=Y_jZ_jX_{j+1}=iX_jX_{j+1}$, so $iJ\gamma_{2j}\gamma_{2j+1}=-JX_jX_{j+1}$. Summing exactly these terms gives the open-chain $H_N$ of [F1], with no $j=N$ bond. [given, F1, F2, algebra]

2.1 For any paired indices $a<b$ with coefficient $c$, setting $(A_N)_{ab}=2c$ and $(A_N)_{ba}=-2c$ contributes $(i/4)(2c\gamma_a\gamma_b-2c\gamma_b\gamma_a)=ic\gamma_a\gamma_b$ by [F2]. Applying this to $c=h$ on $(2j-1,2j)$ and $c=J$ on $(2j,2j+1)$ yields $H_N=(i/4)\gamma^{\mathsf T}A_N\gamma$. [step 1.1, F2, algebra]

3.1 By [F3], choose a real orthogonal $O$ with $OA_NO^{\mathsf T}$ in the displayed $2\times2$ blocks, and put $\eta=O\gamma$. Since $O$ is real and orthogonal, [F2] gives $\{\eta_a,\eta_b\}=2\delta_{ab}I$. Define $b_r=(\eta_{2r-1}+i\eta_{2r})/2$. Direct expansion using these anticommutators gives $\{b_r,b_s^*\}=\delta_{rs}I$, $\{b_r,b_s\}=0$, and $b_r^*b_r=\tfrac12I+\tfrac{i}{2}\eta_{2r-1}\eta_{2r}$. Using the matrix expression from step 2.1, substitution into the block expression gives $H_N=\sum_r\epsilon_r(b_r^*b_r-\tfrac12I)$. [given, F2, F3, step 2.1, algebra]

4.1 The projections $n_r=b_r^*b_r$ commute by the CAR in step 3.1 and are simultaneously diagonalizable: diagonalize $n_1$ using [F5], restrict the remaining commuting Hermitian matrices to its invariant eigenspaces, and continue through the finite list. Their joint eigenvalues lie in $\{0,1\}^N$. If a joint eigenspace has occupancy $0$ in coordinate $r$, $b_r^*$ maps it isometrically into the eigenspace with that bit changed to $1$, since $\|b_r^*\psi\|^2=\langle\psi,(I-n_r)\psi\rangle=\|\psi\|^2$; when the bit is $1$, $b_r$ is the inverse isometry. Hence all $2^N$ joint eigenspaces have the same positive dimension. Their orthogonal sum is $\mathcal H_N$, whose dimension is $2^N$, so each eigenspace is one-dimensional. The resulting ordered occupation basis identifies the $b_r$ representation unitarily with the finite fermionic Fock occupation basis. [step 3.1, F5, algebra]

5.1 In that occupation basis, $\sum_r\epsilon_r b_r^*b_r$ is the diagonal finite-mode Hamiltonian with energies $\epsilon_r$. Apply [F4] with mode set $\{1,\ldots,N\}$, chemical potential $0$, and $q_r=e^{-\beta\epsilon_r}$ to obtain trace $\prod_r(1+e^{-\beta\epsilon_r})$. The scalar shift $-\tfrac12\sum_r\epsilon_r I$ multiplies this trace by $e^{\beta\sum_r\epsilon_r/2}$, and [F5] permits the unitary change back to $\mathcal H_N$. Thus $Z_N=\prod_r(e^{\beta\epsilon_r/2}+e^{-\beta\epsilon_r/2})=\prod_r2\cosh(\beta\epsilon_r/2)$. If $\epsilon_r=0$, its factor is $2$. [A1, F4, F5, step 3.1, step 4.1, algebra] ∎
