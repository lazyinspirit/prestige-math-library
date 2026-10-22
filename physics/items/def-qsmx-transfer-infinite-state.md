---
id: def-qsmx-transfer-infinite-state
kind: definition
title: Transfer-generated infinite-chain state and correlations
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-mps-and-transfer
  - def-qsm-local-spin-algebras
  - def-qsm-quasilocal-spin-algebra
  - def-qsm-infinite-algebraic-state
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - lem-qsm-matrix-state-calculus
  - lem-qsm-consistent-local-states
  - def-countable-choice
dependency_roles:
  def-qsmx-mps-and-transfer: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  def-qsm-infinite-algebraic-state: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-consistent-local-states: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: D. Pérez-García, F. Verstraete, M. M. Wolf, and J. I. Cirac, Matrix Product State Representations, §3.2.2 Eq. (15)
      url: https://arxiv.org/pdf/quant-ph/0608197
    - title: Grégoire Misguich, Introduction to matrix-product states and tensor networks, §2.5.3 and Appendix B.1
      url: https://arxiv.org/pdf/2606.24803
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.2.3, pp. 55–57
      url: https://arxiv.org/pdf/1311.2717v2
---

## Definition

Fix integers $d,D\ge1$ and a translation invariant tensor $A^1,\ldots,A^d\in M_D(\mathbb C)$ with transfer map $\mathcal E(X):=\sum_iA^iXA^{i*}$. A matrix is positive semidefinite when it is Hermitian with nonnegative quadratic form on every vector. Let $\rho,\ell\in M_D(\mathbb C)$ be positive semidefinite matrices satisfying

$$\operatorname{tr}\rho=1,\qquad \mathcal E(\rho)=\rho,\qquad \mathcal E^*(\ell)=\ell,\qquad \operatorname{tr}(\ell\rho)=1,$$

where $\mathcal E^*(Y):=\sum_iA^{i*}YA^i$, equivalently the trace-pairing adjoint determined by $\operatorname{tr}(Y\mathcal E(X))=\operatorname{tr}(\mathcal E^*(Y)X)$. For a contiguous block of $k\ge1$ sites, write $I=(i_1,\ldots,i_k)$ and $J=(j_1,\ldots,j_k)$ for physical multi-indices, let $e_I$ be its ordered standard product basis, put $O_{I,J}:=\langle Oe_J,e_I\rangle$ for $O\in M_{d^k}(\mathbb C)$, and set $A^I:=A^{i_1}\cdots A^{i_k}$. Define the transfer insertion map and local expectation by

$$\mathcal E_O(X):=\sum_{I,J}O_{I,J}A^JX(A^I)^*,\qquad \omega_k(O):=\operatorname{tr}(\ell\mathcal E_O(\rho)).$$

For any finite nonempty $\Lambda\subset\mathbb Z$ and local observable $O\in\mathcal A_\Lambda$, embed $O$ into the interval $[\min\Lambda,\max\Lambda]$ by inserting identities at missing sites and evaluate the same formula. For the empty region set $\omega_\varnothing(cI):=c$. These definitions give compatible positive normalized local functionals. Their unique density matrices $\rho_\Lambda$ obey $\operatorname{Tr}_{\Lambda'\setminus\Lambda}(\rho_{\Lambda'})=\rho_\Lambda$ whenever $\Lambda\subseteq\Lambda'$. Assume Countable Choice. The transfer-generated infinite-chain state is the unique infinite algebraic state $\omega$ on the norm-completed quasi-local spin algebra whose restriction to every finite region is the defined local functional. No infinite tensor-product Hilbert space is selected.

For observables $O_A\in M_{d^a}(\mathbb C)$ and $O_B\in M_{d^b}(\mathbb C)$ on two fixed consecutive blocks, with $g\ge0$ identity sites between the blocks, the connected correlation is

$$\omega(O_A\otimes I^{\otimes g}\otimes O_B)-\omega(O_A)\omega(O_B).$$

## Definition references

[[def-qsmx-mps-and-transfer]]

[[def-qsm-local-spin-algebras]]

[[def-qsm-quasilocal-spin-algebra]]

[[def-qsm-infinite-algebraic-state]]

[[lem-qsm-finite-matrix-cstar-and-state-duality]]

[[lem-qsm-matrix-state-calculus]]

[[lem-qsm-consistent-local-states]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Integers $d,D\ge1$, a translation invariant tensor $A^i\in M_D(\mathbb C)$, positive semidefinite $\rho,\ell$, and the four displayed fixed-point, normalization, and pairing equations.

[A1] [[def-countable-choice]]: every sequence of nonempty sets has a choice function. This is the only choice assumption used to complete the compatible local-state family.

[F1] [[def-qsmx-mps-and-transfer]]: $\mathcal E(X)=\sum_iA^iXA^{i*}$ is the completely positive transfer map of the tensor.

[F2] [[def-qsm-local-spin-algebras]]: on the lattice $\mathbb Z$ with on-site dimension $d$, each finite-region algebra is the matrix algebra on its ordered configuration space, and inclusions insert identity factors.

[F3] [[def-qsm-quasilocal-spin-algebra]]: the quasi-local algebra is the norm completion of the directed union of finite-region observable algebras; it selects no infinite tensor-product Hilbert space.

[F4] [[lem-qsm-finite-matrix-cstar-and-state-duality]]: a positive normalized functional on a finite matrix algebra has a unique trace-one positive density matrix, and its value on $O$ is $\operatorname{tr}(\rho O)$.

[F5] [[def-qsm-infinite-algebraic-state]]: partial trace satisfies $\operatorname{Tr}_\Lambda(A\operatorname{Tr}_{\Delta}(T))=\operatorname{Tr}_{\Lambda'}((A\otimes I_\Delta)T)$ for $A\in\mathcal A_\Lambda$ and $T\in\mathcal A_{\Lambda'}$, where $\Lambda'=\Lambda\cup\Delta$.

[F6] [[lem-qsm-consistent-local-states]]: under Countable Choice, a consistent family of positive trace-one matrices on all finite regions extends uniquely to an infinite algebraic state on the quasi-local algebra.

[F7] [[lem-qsm-matrix-state-calculus]]: a finite positive semidefinite matrix has an orthonormal eigenbasis with nonnegative eigenvalues, and the finite trace is basis independent.

## Proof

1.1 The finite coefficient sum defining $\mathcal E_O(X)$ is complex-linear in both $O$ and $X$. For $O\ge0$, write its spectral decomposition as $O=\sum_\alpha|v_\alpha\rangle\langle v_\alpha|$, absorbing the square roots of the nonnegative eigenvalues into $v_\alpha$, and put $v_{\alpha,I}=\langle v_\alpha,e_I\rangle$. Then $O_{I,J}=\sum_\alpha v_{\alpha,I}\overline{v_{\alpha,J}}$, so with $K_\alpha:=\sum_J\overline{v_{\alpha,J}}A^J$ the insertion map satisfies $\mathcal E_O(X)=\sum_\alpha K_\alpha X K_\alpha^*\ge0$ whenever $X\ge0$. Diagonalizing $\ell$ by [F7] and expanding $\operatorname{tr}(\ell\mathcal E_O(\rho))$ as a weighted sum of nonnegative diagonal expectations shows $\omega_k(O)\ge0$. For $O=I_{d^k}$, $O_{I,J}=1$ if $I=J$ and $0$ otherwise, so the insertion sums over all length-$k$ words and equals $\mathcal E^k$. The fixed-point equations and $\operatorname{tr}(\ell\rho)=1$ give $\omega_k(I)=\operatorname{tr}(\ell\mathcal E^k(\rho))=1$. Thus each contiguous-block functional is positive and normalized. [given, F1, F7, algebra]

2.1 Tensor-factor order in the definition gives $\mathcal E_{O\otimes P}=\mathcal E_O\circ\mathcal E_P$ for consecutive blocks: expanding both sides gives the same ordered product $A^{J_O}A^{J_P}X(A^{I_P})^*(A^{I_O})^*$. Inserting an identity site on the right composes with $\mathcal E$ on the input, which leaves $\rho$ fixed; inserting one on the left composes with $\mathcal E$ on the output, which leaves the trace pairing with $\ell$ fixed. Repeating these identities shows that the value is independent of the chosen containing interval and that restrictions to nested finite regions agree. A positive observable remains positive when identity factors are inserted, so the local functionals on arbitrary finite regions are positive and normalized as well. The empty-region convention is consistent because every local functional assigns one to the identity. [given, F1, step 1.1, algebra]

3.1 By [F2]–[F4] each local positive normalized functional has a unique trace-one density $\rho_\Lambda$. For nested regions, step 2.1 gives $\operatorname{tr}_{\Lambda'}((O\otimes I)\rho_{\Lambda'})=\operatorname{tr}_\Lambda(O\rho_\Lambda)$ for every $O\in\mathcal A_\Lambda$. Applying the defining partial-trace pairing [F5] shows $\operatorname{tr}_\Lambda(O\operatorname{Tr}_{\Lambda'\setminus\Lambda}(\rho_{\Lambda'}))=\operatorname{tr}_\Lambda(O\rho_\Lambda)$ for all $O$. Taking $O$ to be each matrix unit makes every matrix entry of the two matrices equal, so the density family is consistent. [given, F2, F4, F5, step 2.1, algebra]

4.1 Apply [F6] to the consistent finite-region density family from step 3.1. Its hypotheses hold by [A1], [F2], [F3], and the positive trace-one property just proved. It yields a unique infinite algebraic state on the specified quasi-local algebra, with exactly these local restrictions and no chosen global Hilbert-space representation. This establishes that the transfer contractions in the Definition are well defined. [given, A1, F2, F3, F6, step 3.1] ∎
