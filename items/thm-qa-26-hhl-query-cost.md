---
id: thm-qa-26-hhl-query-cost
kind: theorem
title: "HHL sparse-query and state-preparation cost"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - alg-qa-26-hhl-phase-estimation
  - thm-qa-26-hhl-state-correctness
  - thm-qa-26-hhl-simulator-cost
  - def-qa-20-sparse-hamiltonian-oracle-model
  - def-qa-20-simulation-error-and-cost-model
  - def-qc-circuit-cost-model
  - lem-qa-25-sorted-xor-sparse-access-isometries
  - lem-qa-25-clean-subspace-unitary-hybrid
  - alg-qa-25-small-time-aware-simulator
  - thm-qa-25-small-time-aware-simulator-correctness
  - thm-qa-25-qubitized-simulation-resource-bound
  - thm-qa-19-matrix-exponential-unitary-properties
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-triangle-inequality-for-inner-product-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
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

With the exact sorted QA20 XOR location/value interface and separately supplied uniform preparation, value-decoding, flag arithmetic and the certified QA25 phase-generation mode, the sparse-oracle specialization is: for a $d$-sparse Hermitian instance with $\|H\|\le1$, supported gap $1/\kappa$, and target state error $\epsilon$, the phase-estimation HHL method uses $O(d\kappa^2\epsilon^{-1}\operatorname{polylog}(2+d\kappa/\epsilon))$ sparse-row/value queries and $O(\kappa(1+\log(1/\rho)))$ calls to $B$ and separately to $B^\dagger$, multiplied by their supplied costs. For fixed constant $\rho$, this specializes to the displayed query order without an additional failure logarithm; for variable $\rho$, include the factor $1+\log(1/\rho)$. Arithmetic, gate/bit time, phase generation, uniform preparation, reflections and the OP5 sine table remain separately charged; the displayed asymptotic concerns sparse-oracle calls. Padding to the register of the sorted-access construction extends $H$ by zero, and the supplied input preparation remains supported on the original labels. Under direct simulation access, the simulator contribution is instead the explicit sum in [[thm-qa-26-hhl-simulator-cost]].

## Facts & Assumptions

**Given:** The finite OP5 parameters, exact sorted sparse access, norm/gap promise, and separately charged operations in the Statement.

[F1] [[lem-qa-25-sorted-xor-sparse-access-isometries]] constructs an exact block encoding of $H\oplus0$ with normalization $d$ by taking entry bound $h=1$, using $O(\log(d+1))$ location calls and $O(1)$ value calls per encoding, adjoint or coherent control.

[F2] [[thm-qa-25-qubitized-simulation-resource-bound]] and [[thm-qa-25-small-time-aware-simulator-correctness]] give clean-input simulation error at most $\eta$ and $O(d|t|+\log(1/\eta))$ signal calls for each nontrivial signed time, with exact identity on the stated small-time branch. Classical phase generation and other gate costs are separate.

[F3] [[lem-qa-25-clean-subspace-unitary-hybrid]] supplies coherent-control, reference and actual-adjoint bounds and a hybrid along the ideal clean-work trajectory.

[F4] [[alg-qa-26-hhl-phase-estimation]] and [[thm-qa-26-hhl-simulator-cost]] give $t_0=2048\kappa/\epsilon$, $T$ the least power of two at least $8(t_0+1)$, $L=\log_2T$, $K=\lceil4\kappa\rceil$, $R=\lceil16\ln(1/\rho)\rceil+16$, fewer than $2t_0$ absolute simulation time per $V$ or $V^\dagger$, and at most $RK$ calls in each direction.

[F5] [[thm-qa-26-hhl-state-correctness]] gives the requested state and amplification success guarantee with the declared OP5 precision budgets, including clean-workspace simulation.

[F6] [[thm-qa-19-matrix-exponential-unitary-properties]]: $e^{+iHt}=U_H(-t)$ is unitary and differentiable with derivative $iHe^{+iHt}$. With $\|H\|\le1$, the inner-product norm triangle inequality ([[cor-triangle-inequality-for-inner-product-norm]]) gives $\|e^{+iHt}-e^{+iHq}\|_{\rm op}\le|t-q|$ by integrating the derivative on each unit vector and taking the operator-norm supremum.

[F7] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|H\|\le1$ bounds $\|H\psi\|$ for every unit vector $\psi$.

## Proof


1.1 Apply [F1] with $h=1$, valid because $|H_{ij}|\le\|H\|\le1$. The extra padded system labels carry zero eigenvalues; the input remains in the original supported subspace, so its nonzero gap and inverse-state target do not change. The full unitary oracle circuits, controls and reversals act on all physical labels, including invalid labels, as constructed in [F1]; no padded-branch overlap contributes a matrix value. [given, F1, algebra]

2.1 Put $\eta=\epsilon/(8192\kappa L)$. For each phase time $t_j$, certified arithmetic selects a rational $q_j\in[0,t_j]$ with $t_j-q_j\le\eta/2$ and a rational simulator tolerance $\zeta_j$ with $\eta/4\le\zeta_j\le\eta/2$; their construction cost remains in the separately charged arithmetic/phase-generation coordinates. Invoke QA25 at rational signed time $-q_j$ and tolerance $\zeta_j$. By [F2], its clean-input error from $e^{+iHq_j}$ is at most $\zeta_j$, and by [F6]–[F7] the time-rounding error from $e^{+iHt_j}$ is at most $t_j-q_j$. Thus each effective forward call has clean-input error at most $\eta$. Use its actual adjoint for the reverse call; [F3] gives the same clean-input error without assuming full-space accuracy on dirty inputs. The $2L$ effective errors sum to $\epsilon/(4096\kappa)$ as required in OP5, so [F5] applies with the stated state and failure guarantees. [F2, F3, F4, F5, F6, F7, step 1.1, algebra]

3.1 In one $V$ or $V^\dagger$, sum the loose signal-call bound in [F2] over all signed rational times $\pm q_j$. Since $q_j\le t_j$, their absolute values sum to less than $2t_0$ by [F4], so this uses $O(dt_0+L\log(32768\kappa L/\epsilon))$ signal calls; also $\zeta_j\ge\eta/4$ makes $\log(1/\zeta_j)=O(\log(1/\eta))$. Multiplying by [F1]'s location/value conversion and then by the at most $2RK$ preparation/inverse-preparation calls gives $$O\!\left(R\kappa\left[dt_0+L\log(32768\kappa L/\epsilon)\right]\log(d+1)\right)$$ sparse-oracle calls, with a possibly smaller constant value-query count. Literal reversals and coherent controls change only constants already covered by [F1]–[F3]. [F1, F2, F3, F4, step 2.1, algebra]

4.1 Since $T<16(t_0+1)$, $L=O(\log(2+\kappa/\epsilon))$. With $d,\kappa\ge1$, $0<\epsilon\le1$, and $t_0=2048\kappa/\epsilon$, the expression in step 3.1 is $O(d\kappa^2\epsilon^{-1}(1+\log(1/\rho))\operatorname{polylog}(2+d\kappa/\epsilon))$. For fixed constant $\rho$ this gives the displayed order. The separate $B$ and $B^\dagger$ counts are at most $RK$ each by [F4]. Padding only appends clean high index bits to their input/output register convention; no extra sparse query is needed for this embedding. Their actual implementation and any controls used remain charged as supplied costs. All other direct-simulation resource coordinates stay in [F4]'s explicit sum, so no table, phase-generation, gate or bit-time claim is inferred from the sparse-query bound. [given, F1, F4, F5, step 3.1, algebra] ∎

