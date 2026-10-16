---
id: thm-qa-30-quantum-sdp-solver-cost
kind: theorem
title: "Quantum SDP query bound and QRAM cost boundary"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 28
deps:
  - alg-qa-30-quantum-sdp-solver
  - thm-qa-30-quantum-sdp-solver-guarantee
  - thm-qa-30-sparse-sdp-resource-substitution
  - def-qa-30-sdp-sparse-oracle-model
  - def-qa-30-sdp-reference-state-access
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof sums finite circuit costs and explicit finite error budgets."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
---

## Statement

Under the normalized finite sparse-input promises and complete finite implementations of [[thm-qa-30-quantum-sdp-solver-guarantee]], the solver uses
$$\widetilde O\!\left(\sqrt{nm}\,s^2\max(1,Rr/\varepsilon)^8\right)$$
queries to the original matrix input oracles. For diagonal LPs its separate scalar flag implementation uses $\widetilde O(\sqrt{nm}\max(1,Rr/\varepsilon)^5)$ queries. Logarithms in dimensions, precision and confidence, including the outer threshold calls, are suppressed. The direct boundary branches require only their stated output costs.

The source's same-order gate conclusion holds in its stated computational model only when all actual nonquery costs fit that envelope. A standard-circuit implementation must charge the derived sparse-row scans/sorts and value arithmetic, simulator phase generation and precision synthesis, repeated reference preparation, coefficient tables and PREPARE, reversible probability rounding/division and comparisons, history and control, QRAM construction/update/access if used, output bits and classical preprocessing. Query complexity alone does not prove this gate bound. For arbitrary $n$, the reference price is repeated $\widetilde O(\sqrt{nm}\max(1,Rr/\varepsilon)^3)$ times per threshold run, rather than incurred once.

## Facts & Assumptions

**Given:** The normalized promises, finite raw matrix interfaces, actual controlled/inverse circuit implementations, declared precision budgets and successful certified simulation/rotation compilation of the algorithm.

[F1] [[alg-qa-30-quantum-sdp-solver]] specifies the finite rounds, sparse updates, frozen trace samplers, complete two-sparse oracle and capped outer search.

[F2] [[thm-qa-30-quantum-sdp-solver-guarantee]] proves that these implementations yield the claimed high-probability sparse feasible certificate under their explicit error budgets.

[F3] [[thm-qa-30-sparse-sdp-resource-substitution]] proves the raw scan/sort and listed-zero support bridge, finite Hermitian decoded-value budget, binary-time Fourier SELECT, general and diagonal round costs, exponent sums and complete additional resource record.

[F4] [[def-qa-30-sdp-sparse-oracle-model]] separates queries, gates, coefficient precision, memory and preprocessing; [[def-qa-30-sdp-reference-state-access]] supplies the exact power-of-two preparation or an explicitly priced general-dimension circuit.

## Proof

1.1 Write $Q=\max(1,Rr/\varepsilon)$. On the nontrivial branch of [F1], $T=\widetilde O(Q^2)$, $\eta=\widetilde O(Q^{-1})$ and $\theta^{-1}=O(Q)$. By [F3], a derived sorted-row query costs $O(st)$ original input queries, retaining distinct support-union columns even when their decoded sum is zero. Finite common-coefficient rounding preserves exact decoded Hermiticity; its norm error and the controlled-evolution errors are allocated before the circuit runs. The binary signed-time Fourier implementation pays total evolution time $O(\log(1/e_f))$, without multiplying by its number of frequencies. Thus the complete round costs $\widetilde O(\sqrt{nm}s^2\theta^{-1}t^2(1+\eta t))$ raw queries, including the once-measured spectral shift. [given, F1, F3, algebra]

1.2 Summing step 1.1 gives $\widetilde O(\sqrt{nm}s^2Q(T^3+\eta T^4))=\widetilde O(\sqrt{nm}s^2Q^8)$. The outer search adds its logarithmic number of threshold calls. Every coherent estimation/minimum cap has already been charged in the round bound, with confidence logarithms; [F2] supplies its output guarantee. This proves the general query profile. [given, F1, F2, F3, step 1.1, algebra]

2.1 For diagonal inputs use [F3]'s scalar alternative: evaluate one finite round energy using $O(t)$ input values, find a robust approximate minimum once and freeze its shift. Its explicit cutoff/factorial Taylor and finite rotation schedule computes the scalar exponential flag to the probability error budget with no matrix-query factor depending on the largest energy. The common baseline and probability floors yield trace cost $\widetilde O(\sqrt n\,t/\theta)$ and round cost $\widetilde O(\sqrt{nm}\,t/\theta)$. Hence the sum is $\widetilde O(\sqrt{nm}\,Q T^2)=\widetilde O(\sqrt{nm}Q^5)$. This separate diagonal construction, rather than merely setting $s=1$ in step 1.2, proves the LP profile. [given, F1, F3, algebra]

3.1 Let $F_t$ be once-only factory generation/certification/storage, $N_{flag,t}=\widetilde O(\sqrt{nm}/\theta)$ and $N_{shift,t}=\widetilde O(\sqrt n)$ the complete preparation/inverse call counts, and $G_{flag,t},G_{shift,t}$ their actual nonquery gate prices excluding reference preparation. Let $A_t$ charge the remaining coherent AE/QFT arithmetic, rounding, division, comparison, histories, capped-minimum coins and classical control; let $G_{QRAM}$ and $W$ charge actual optional memory and output/record operations. [F3] gives the actual additive record
$$\sum_t\!\left[F_t+N_{flag,t}(C_\Phi+G_{flag,t})+N_{shift,t}(C_\Phi+G_{shift,t})+A_t\right]+G_{QRAM}+W,$$
with the threshold repetition factor. Include input-query gate prices when translating queries to gates, and avoid double counting when a primitive already includes reference preparation. The summed reference term is $\widetilde O(\sqrt{nm}Q^3 C_\Phi)$; the Gibbs coefficient factory uses $\widetilde O(Q^7)$ arithmetic operations, with its actual bit and phase-generation costs additionally charged. Coherent operations in $A_t$ are quantum gates/work even when a classical description of their arithmetic is available. [given, F3, F4, step 1.1, algebra]

3.2 In the power-of-two case [F4] gives the explicit $O(\log n)$ reference circuit. In general retain the actual repeated $C_\Phi$ price and any separately allocated preparation error. The unit-cost QRAM profile and a direct reversible sorted-row implementation have different actual prices, each covered by step 3.1. Therefore the source's same-order gate profile follows precisely if these prices fit its stated envelope; otherwise steps 1.2 and 2.1 are query bounds with the explicit additional record of step 3.1. This retains the rich source scope and its computational-model qualification without treating expensive exact arithmetic or an undeclared oracle as free. [given, F3, F4, step 1.2, step 2.1, step 3.1, algebra] ∎
