---
id: thm-it-finite-quantum-conditional-mutual-information-nonnegative
kind: theorem
title: Nonnegativity of finite-dimensional quantum conditional mutual information
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-it-von-neumann-entropy
  - def-it-finite-quantum-information-measures
  - thm-it-finite-strong-subadditivity
  - thm-qc-wire-permutation-is-unitary
  - def-qc-partial-trace
  - def-qc-tensor-register-and-permutation
  - thm-complex-spectral-theorem-for-normal-endomorphisms
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Chapter 5"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8 (2019)"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $\rho_{ABC}$ be a finite-dimensional tripartite state, with conditional mutual information defined by [[def-it-finite-quantum-information-measures]]. Then
$$I(A:B\mid C)_\rho=S(\rho_{AC})+S(\rho_{BC})-S(\rho_C)-S(\rho_{ABC})\ge0.$$

## Facts & Assumptions

**Given:** A density operator $\rho_{ABC}$ on a finite ordered tensor product $H_A\otimes H_B\otimes H_C$.

[F1] [[def-it-finite-quantum-information-measures]]: $I(A:B\mid C)=S(\rho_{AC})+S(\rho_{BC})-S(\rho_C)-S(\rho_{ABC})$, where $\rho_{AC}$ is obtained by permuting $A,B,C$ to $A,C,B$ and tracing out the last factor.

[F2] [[thm-it-finite-strong-subadditivity]]: every tripartite state $\omega_{UVW}$ satisfies $S(\omega_{UV})+S(\omega_{VW})\ge S(\omega_V)+S(\omega_{UVW})$.

[F3] [[thm-qc-wire-permutation-is-unitary]]: reordering tensor factors gives a unitary basis permutation.

[F4] [[def-qc-partial-trace]] and [[def-qc-tensor-register-and-permutation]]: partial traces sum matrix blocks in the displayed ordered product basis, and the tensor factors retain their specified order.

[F5] [[def-it-von-neumann-entropy]]: entropy is the sum $-\sum_{\lambda>0}\lambda\ln\lambda$ over positive eigenvalues.

[F6] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional self-adjoint operator has an orthonormal eigenbasis.

## Proof

1.1 Let $Q_{BC}:H_B\otimes H_C\to H_C\otimes H_B$ be the two-factor swap and let $P=I_A\otimes Q_{BC}:H_A\otimes H_B\otimes H_C\to H_A\otimes H_C\otimes H_B$. Put $\tau_{ACB}=P\rho_{ABC}P^\dagger$. By [F3], $P$ is unitary; therefore an orthonormal eigenbasis of $\rho_{ABC}$ is carried to an orthonormal eigenbasis of $\tau_{ACB}$ with the same eigenvalues, and [F5] gives $S(\tau_{ACB})=S(\rho_{ABC})$. The $AC$ marginal of $\tau$ is exactly $\rho_{AC}$ by the definition in [F1]. [given, F1, F3, F5, F6, construct, algebra]

2.1 In the product basis, tracing out A from $\tau$ gives $\tau_{CB}=Q_{BC}\rho_{BC}Q_{BC}^\dagger$: its $(c,b),(c',b')$ coefficient is the sum over $a$ of the $\rho$ coefficients with indices $(a,b,c),(a,b',c')$, which is precisely the swapped coefficient. Thus [F3] and the eigenvalue argument in step 1.1 give $S(\tau_{CB})=S(\rho_{BC})$. Tracing out both A and B gives the same C marginal $\tau_C=\rho_C$, since the finite sums over their basis indices are merely reordered. [given, F3, F4, F5, F6, step 1.1, algebra]

3.1 Apply [F2] to the tripartite state $\tau$ with middle register C. It yields $S(\tau_{AC})+S(\tau_{CB})-S(\tau_C)-S(\tau_{ACB})\ge0$. Substituting the equalities in steps 1.1 and 2.1 gives exactly the expression in [F1], so $I(A:B\mid C)_\rho\ge0$. [given, F1, F2, step 1.1, step 2.1, algebra] ∎
