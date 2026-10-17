---
id: thm-qsm-dt-choi-kraus
kind: theorem
title: Complete finite Choi-Kraus equivalence
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsm-dt-channel-definition
  - lem-qsm-matrix-state-calculus
  - lem-qsm-dt-finite-trace-pairing-cyclicity
dependency_roles:
  def-qsm-dt-channel-definition: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-dt-finite-trace-pairing-cyclicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §2.2.2, Theorem 2.22
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapter 3, §3.2
      url: https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf
---

## Statement

Let $d,e\geq1$ and let $\Phi:M_d(\mathbb C)\to M_e(\mathbb C)$ be complex-linear. Choose the standard input basis $(|i\rangle)_{i=1}^d$, let $E_{ij}=|i\rangle\langle j|$, and use the ordered tensor convention input-reference $\otimes$ output. Define the (unnormalized) Choi matrix

$$J(\Phi):=\sum_{i,j=1}^{d}E_{ij}\otimes\Phi(E_{ij})\in M_d(\mathbb C)\otimes M_e(\mathbb C).$$ Then $\Phi$ is completely positive if and only if $J(\Phi)\geq0$, and this holds if and only if there are $q\leq de$ matrices $K_1,\ldots,K_q:\mathbb C^d\to\mathbb C^e$ such that $$\Phi(X)=\sum_{a=1}^{q}K_aXK_a^*\qquad(X\in M_d(\mathbb C)).$$

The empty sum is allowed when $\Phi=0$. For any such Kraus representation, $\Phi$ is trace-preserving if and only if $\sum_{a=1}^{q}K_a^*K_a=I_d$.

## Facts & Assumptions

**Given:** Integers $d,e\geq1$, a complex-linear map $\Phi:M_d(\mathbb C)\to M_e(\mathbb C)$, the standard ordered bases, and the input-reference $\otimes$ output Choi convention in the Statement.

[F1] [[def-qsm-dt-channel-definition]]: complete positivity means that $\operatorname{id}_r\otimes\Phi$ preserves positive semidefinite matrices for every finite $r\geq1$; trace preservation means $\operatorname{Tr}\Phi(X)=\operatorname{Tr}X$ for every $X$.

[F2] [[lem-qsm-matrix-state-calculus]]: every finite Hermitian matrix has an orthonormal eigenbasis with real eigenvalues, and positive square roots are defined by its finite spectral projections.

[F3] [[lem-qsm-dt-finite-trace-pairing-cyclicity]]: for rectangular factors, $\operatorname{Tr}_e(AB)=\operatorname{Tr}_d(BA)$; the square bilinear trace pairing is nondegenerate.

## Proof




1.1 Let $\Omega=\sum_{i=1}^{d}|i\rangle\otimes|i\rangle$ in the input-reference and input tensor factors. Then $\Omega\Omega^*=\sum_{i,j}E_{ij}\otimes E_{ij}\geq0$, and $(\operatorname{id}_d\otimes\Phi)(\Omega\Omega^*)=J(\Phi)$. If $\Phi$ is completely positive, [F1] applied with ancilla dimension $d$ gives $J(\Phi)\geq0$. [given, F1, algebra]

1.2 Suppose $J(\Phi)\geq0$. By [F2], choose an orthonormal eigenbasis of $J(\Phi)$, absorb each positive eigenvalue's square root into its eigenvector, and write $J(\Phi)=\sum_{a=1}^{q}|w_a\rangle\langle w_a|$, where $q=\operatorname{rank}J(\Phi)\leq de$; if $J(\Phi)=0$, take $q=0$. For each $a$, uniquely define $K_a:\mathbb C^d\to\mathbb C^e$ by $w_a=\sum_i|i\rangle\otimes K_a|i\rangle$. [given, F2, construct]

2.1 Expanding each rank-one term gives $|w_a\rangle\langle w_a|=\sum_{i,j}E_{ij}\otimes K_aE_{ij}K_a^*$. Comparing the coefficients of the linearly independent first-factor matrix units in $J(\Phi)$ yields $\Phi(E_{ij})=\sum_aK_aE_{ij}K_a^*$. Since $(E_{ij})$ is a basis and both sides are linear in the input, $\Phi(X)=\sum_aK_aXK_a^*$ for every $X$. [step 1.2, algebra]

3.1 For any $r\geq1$ and any $P\geq0$ on $\mathbb C^r\otimes\mathbb C^d$, the Kraus formula gives $(\operatorname{id}_r\otimes\Phi)(P)=\sum_a(I_r\otimes K_a)P(I_r\otimes K_a)^*\geq0$; hence $\Phi$ is completely positive. For a Kraus representation, cyclicity [F3] gives $\operatorname{Tr}\Phi(X)=\operatorname{Tr}(X\sum_aK_a^*K_a)$. Thus $\sum_aK_a^*K_a=I_d$ implies trace preservation, and if trace preservation holds then testing $\operatorname{Tr}(X(\sum_aK_a^*K_a-I_d))=0$ on every matrix unit $X=E_{ij}$ forces every entry of the difference to vanish. [given, F1, F3, step 2.1, algebra] ∎

## Remarks

The input-reference $\otimes$ output order is fixed here. Watrous writes the output factor first; the two Choi matrices are related by the tensor-factor swap unitary, which preserves positivity. This finite result asserts neither an infinite-dimensional classification nor a physical bath limit.
