---
id: thm-qsm-dt-reduced-unitary
kind: theorem
title: Independent-preparation reduced unitary channel
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-qc-partial-trace
  - def-qsm-dt-channel-definition
  - lem-qsm-matrix-state-calculus
  - thm-qsm-dt-finite-unitary
  - cor-finite-dimensional-normed-spaces-are-banach
  - lem-exponential-series-of-a-bounded-operator
  - thm-qc-partial-trace-characterization-and-basis-independence
  - thm-qsm-dt-choi-kraus
dependency_roles:
  def-qc-partial-trace: mathematical-premise
  def-qsm-dt-channel-definition: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-qsm-dt-finite-unitary: mathematical-premise
  cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  thm-qc-partial-trace-characterization-and-basis-independence: mathematical-premise
  thm-qsm-dt-choi-kraus: mathematical-premise
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
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1.3 and 2.2.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Lin Lin and Nathan Wiebe, Quantum Algorithms for Scientific Computation, Chapters 3 and 21
      url: https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf
---

## Statement

Let $H_S=\mathbb C^d$ and $H_E=\mathbb C^m$, with $d,m\geq1$, in fixed ordered orthonormal bases. For a bounded operator $A$ on a complex Banach space, define $e^A:=\sum_{n=0}^{\infty}A^n/n!$ by its operator-norm convergent series ([[cor-finite-dimensional-normed-spaces-are-banach]], [[lem-exponential-series-of-a-bounded-operator]]). Let $H_{\mathrm{tot}}=H_{\mathrm{tot}}^*$ be a matrix on $H_S\otimes H_E$ with energy units joules, let $\hbar>0$ have units joule-seconds, and set $U_t=e^{-itH_{\mathrm{tot}}/\hbar}$ for $t\in\mathbb R$ measured in seconds. Let $\sigma_E\geq0$ with $\operatorname{Tr}\sigma_E=1$, and define

$$\Phi_t(\rho):=\operatorname{Tr}_E\!\left(U_t(\rho\otimes\sigma_E)U_t^*\right)\qquad(\rho\in M_d(\mathbb C)).$$

For each $t$, $\Phi_t:M_d(\mathbb C)\to M_d(\mathbb C)$ is a finite quantum channel. The theorem concerns the product preparation $\rho\otimes\sigma_E$; it makes no claim that a correlated initial joint state defines a map of the system marginal alone.

## Facts & Assumptions

**Given:** Finite dimensions $d,m\geq1$, a Hermitian $H_{\mathrm{tot}}$, $\hbar>0$, a positive trace-one matrix $\sigma_E$, and the ordered product basis $H_S\otimes H_E$.

[F1] [[def-qsm-dt-channel-definition]]: a channel is a complex-linear map that is completely positive on every finite ancilla extension and preserves the trace of every input matrix.

[F2] [[lem-qsm-matrix-state-calculus]]: finite positive matrices have orthonormal eigenbases with nonnegative eigenvalues, and finite traces are cyclic.

[F3] [[thm-qsm-dt-finite-unitary]]: for a finite Hermitian Hamiltonian $H$, the matrix $e^{-itH/\hbar}$ is unitary for every real $t$. Its current carrier is a draft; this use is conditional on that exact finite-dimensional statement.

[F4] [[def-qc-partial-trace]]: in ordered orthonormal bases $(e_a)$, $(f_j)$, the finite partial trace is defined by $(\operatorname{Tr}_E R)_{ab}=\sum_jR_{(a,j),(b,j)}$.

[F5] [[thm-qc-partial-trace-characterization-and-basis-independence]]: the preceding coordinate map is the unique map characterized by the finite trace pairing and is independent of the chosen environment basis.

[F6] [[thm-qsm-dt-choi-kraus]]: a finite completely positive map has a Kraus representation, and it is trace-preserving when the Kraus adjoint-square sum is the identity.

[F7] [[lem-exponential-series-of-a-bounded-operator]]: the operator-norm series defines $e^{tA}$, differentiates to $Ae^{tA}$, and satisfies $e^{tA}e^{sA}=e^{(t+s)A}$ on a complex Banach space.

[F8] [[cor-finite-dimensional-normed-spaces-are-banach]]: a finite-dimensional complex normed space is Banach.

## Proof

1.1 Let $A_t=-itH_{\mathrm{tot}}/\hbar$, a bounded operator on the finite-dimensional complex space $H_S\otimes H_E$; boundedness follows from the finite matrix-coordinate estimate.  By [F8], that space is Banach; [F7] defines $U_t=e^{A_t}$ by an operator-norm convergent series. Since $A_t^*=-A_t$, termwise adjunction gives $U_t^*=e^{-A_t}$, and [F7] gives $U_t^*U_t=e^{-A_t}e^{A_t}=e^0=I$. By [F2], choose an orthonormal eigenbasis $(|k\rangle)_{k=1}^m$ of $\sigma_E$, with $\sigma_E=\sum_kp_k|k\rangle\langle k|$, $p_k\geq0$, and $\sum_kp_k=1$. [given, F2, F3, F7, F8, choose]

2.1 For system basis indices $a,b$, environment indices $j,k$, and the matrix entries of $U_t$, define $(K_{jk})_{ab}:=\sqrt{p_k}\,(U_t)_{(a,j),(b,k)}$. Applying the coordinate formula [F4] to $R=U_t(\rho\otimes\sigma_E)U_t^*$ gives $$ (\Phi_t(\rho))_{ab}=\sum_{j,k,c,d}(K_{jk})_{ac}\rho_{cd}\overline{(K_{jk})_{bd}} =\left(\sum_{j,k}K_{jk}\rho K_{jk}^*\right)_{ab}. $$ Thus $\Phi_t(\rho)=\sum_{j,k}K_{jk}\rho K_{jk}^*$ for every matrix $\rho$. The basis independence in [F5] ensures that this is the same partial-trace map if a different environment basis is used. [given, F4, F5, step 1.1, algebra]

3.1 For any system indices $b,d$, unitarity in step 1.1 gives $$ \left(\sum_{j,k}K_{jk}^*K_{jk}\right)_{bd} =\sum_kp_k\sum_{a,j}\overline{(U_t)_{(a,j),(b,k)}}(U_t)_{(a,j),(d,k)} =\sum_kp_k\delta_{bd} =\delta_{bd}. $$ Hence $\sum_{j,k}K_{jk}^*K_{jk}=I_d$; by [F6], the Kraus formula in step 2.1 is completely positive and trace-preserving, which is the channel property in [F1]. [step 1.1, step 2.1, F1, F6, algebra] ∎

## Remarks

The finite construction is shown schematically below. $\operatorname{Ad}_{U_t}$ means conjugation $R\mapsto U_tRU_t^*$; the arrows depict the defined composition and are not used as a proof.

```tikzcd
\rho\otimes\sigma_E \arrow[r,"\operatorname{Ad}_{U_t}"] \arrow[dr,"\Phi_t"'] & U_t(\rho\otimes\sigma_E)U_t^* \arrow[d,"\operatorname{Tr}_E"] \\
& \Phi_t(\rho)
```

This finite calculation does not imply a semigroup law for $t\mapsto\Phi_t$ or a weak-coupling/Markov limit.
