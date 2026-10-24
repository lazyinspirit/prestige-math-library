---
id: ex-na-two-site-tt-truncation-can-increase-energy
kind: example
title: "A two-site TT truncation can increase energy after an exact solve"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-na-finite-mps-state-and-hermitian-hamiltonian
  - lem-na-finite-hermitian-ground-vector-with-deterministic-tie
  - alg-na-alternating-tensor-optimization-and-effective-eigenproblems
  - alg-tensor-train-rounding
  - thm-na-dmrg-sweep-truncation-energy-increase-bound
verification:
  precheck: pass
aliases: []
dependency_level: 6
---

## Example

Let
$$\psi=\frac{2\sqrt2}{3}|00\rangle+\frac13|11\rangle,\qquad H=I_4-2\psi\psi^*.$$
Take the initial state $|00\rangle$ with rank-one open-boundary TT cores $G_k(1,i_k,1)=1_{\{i_k=1\}}$ for $k=1,2$, and run one width-two sweep with rank cap $c_1=1$. The exact two-site solve returns the deterministically selected unit ground vector $\psi$ with energy $-1$. The post-sweep rank-one TT rounding keeps the larger Schmidt term, returns the normalized state $|00\rangle$, and raises the energy to $-7/9$, an increase of $2/9$.

## Facts & Assumptions

**Given:** The target state $\psi$, initial $|00\rangle$ core list, Hermitian reflection Hamiltonian, and one width-two sweep with rank cap $c_1=1$ specified above.

[F1] [[def-na-finite-mps-state-and-hermitian-hamiltonian]]: states use the Frobenius norm and a finite Hamiltonian input is Hermitian.

[F2] [[alg-na-alternating-tensor-optimization-and-effective-eigenproblems]]: an exact width-two update solves the full local Hermitian problem, then rank-cap rounding may be applied after the completed sweep.

[F3] [[lem-na-finite-hermitian-ground-vector-with-deterministic-tie]]: the exact ground rule projects standard basis vectors in order and returns the normalized first nonzero projection.

[F4] [[alg-tensor-train-rounding]]: TT rounding applies its exact truncated SVDs at the prescribed rank caps and records each discarded singular-value tail.

[F5] [[thm-na-dmrg-sweep-truncation-energy-increase-bound]]: when the total TT tail $\tau<1$, the energy increase from the unrounded exact-sweep output to the normalized rounded output is at most $4\|H\|_{\mathrm{op}}\tau$.

## Verification


1.1 The squared norm of $\psi$ is $8/9+1/9=1$. Since $\psi\psi^*$ is the orthogonal projection onto $\operatorname{span}\{\psi\}$, $H\psi=-\psi$ and $Hx=x$ for every $x\perp\psi$. Thus $H$ is Hermitian, its unique ground energy is $-1$, and $\|H\|_{\mathrm{op}}=1$. Also $\mathcal E_H(|00\rangle)=1-2(8/9)=-7/9$. [given, F1, algebra]

2.1 The width-two center spans all four coordinates, so $H_{\mathrm{eff}}=H$. Its ground eigenspace is $\operatorname{span}\{\psi\}$, and its ground projection sends $|00\rangle$ to $(2\sqrt2/3)\psi$; [F3]'s rule therefore returns exactly $\psi$. The backward pass leaves it unchanged. Reshaping $\psi$ into a $2\times2$ matrix gives $\operatorname{diag}(2\sqrt2/3,1/3)$; its singular values are distinct and ordered as written, so rank-one rounding in [F4] retains $(2\sqrt2/3)|00\rangle$, records discarded tail $\tau=1/3$, and after normalization gives $|00\rangle$. [given, F2, F3, F4, step 1.1, algebra]

3.1 The rounded energy is the value from step 1.1, so its increase from the exact-sweep energy is $-7/9-(-1)=2/9>0$. The bound in [F5] permits at most $4\cdot1\cdot(1/3)=4/3$, which indeed exceeds $2/9$. This exhibits a possible post-truncation increase while satisfying the discarded-weight estimate. [F5, step 1.1, step 2.1, algebra] ∎
