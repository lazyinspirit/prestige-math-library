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
  - thm-qa-30-smooth-fourier-approximation
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

For rational accuracy $\varepsilon>0$, under the normalized finite sparse-input promises and complete finite implementations of [[thm-qa-30-quantum-sdp-solver-guarantee]], the solver uses
$$\widetilde O\!\left(\sqrt{nm}\,s^2\max(1,Rr/\varepsilon)^8\right)$$
queries to the original matrix input oracles. For diagonal LPs its separate scalar flag implementation uses $\widetilde O(\sqrt{nm}\max(1,Rr/\varepsilon)^5)$ queries. Logarithms in dimensions, precision and confidence, including the outer threshold calls, are suppressed. The direct boundary branches require only their stated output costs.

The source's same-order gate conclusion holds in its stated computational model only when all actual nonquery costs fit that envelope. A standard-circuit implementation must charge the derived sparse-row scans/sorts and value arithmetic, simulator phase generation and precision synthesis, repeated reference preparation, coefficient tables and PREPARE, reversible probability rounding/division and comparisons, history and control, QRAM construction/update/access if used, output bits and classical preprocessing. Query complexity alone does not prove this gate bound. For arbitrary $n$, the reference price is repeated $\widetilde O(\sqrt{nm}\max(1,Rr/\varepsilon)^3)$ times per threshold run, rather than incurred once.

## Facts & Assumptions

**Given:** The normalized promises, finite raw matrix interfaces, actual controlled/inverse circuit implementations, declared precision budgets and successful certified simulation/rotation compilation of the algorithm.

[F1] [[alg-qa-30-quantum-sdp-solver]] specifies the finite rounds, sparse updates, frozen trace samplers, complete two-sparse oracle and capped outer search.

[F2] [[thm-qa-30-quantum-sdp-solver-guarantee]] proves that these implementations yield the claimed high-probability sparse feasible certificate under their explicit error budgets.

[F3] [[thm-qa-30-sparse-sdp-resource-substitution]] gives the aggregate general and diagonal matrix-query bounds, repeated reference count, and complete additive gate/time record under the algorithm's actual finite sparse-input and implementation promises.

[F4] [[def-qa-30-sdp-sparse-oracle-model]] separates queries, gates, coefficient precision, memory and preprocessing; [[def-qa-30-sdp-reference-state-access]] supplies the exact power-of-two preparation or an explicitly priced general-dimension circuit.

[F5] [[thm-qa-30-smooth-fourier-approximation]] gives the finite Taylor, arcsine-degree and frequency cutoffs and the truncated convolution construction for the coefficient list.

## Proof


1.1 Write $Q=\max(1,Rr/\varepsilon)$. On the nontrivial branch of [F1], $T=\widetilde O(Q^2)$, $\eta=\widetilde O(Q^{-1})$ and $\theta^{-1}=O(Q)$. Its rational finite data and certified implementations meet [F3]'s hypotheses. That supplier's aggregate bound is $\widetilde O(\sqrt{nm}s^2(Rr/\varepsilon)^8)$, already including derived sparse-row construction, spectral shifts, all coherent estimator/minimum caps and the outer threshold calls. Since $Rr/\varepsilon\le Q$, it is at most the claimed general query bound. [given, F1, F3, algebra]

1.2 For diagonal inputs, [F3] exports its separate scalar flag construction's aggregate query bound $\widetilde O(\sqrt{nm}(Rr/\varepsilon)^5)$. The inequality $Rr/\varepsilon\le Q$ gives $\widetilde O(\sqrt{nm}Q^5)$. That supplier includes finite scalar exponential and probability-rotation arithmetic, frozen approximate minima, the common-normalization ratio, and all threshold repetitions. This profile uses that separate diagonal construction rather than substituting $s=1$ in the general bound. [given, F1, F3, algebra]

2.1 The output guarantee is [F2]. No further factor for the outer search, Fourier frequency count or sparse-row construction multiplies the aggregate query bound in step 1.1: those costs are already included in [F3]. Nontrivial accuracy has $Rr/\varepsilon>1/2$, so replacing it by $Q$ only changes a fixed constant there. The boundary branches of [F1] precede the positive-$R$ formulas and retain their stated direct output costs. [given, F1, F2, F3, step 1.1, algebra]

2.2 Let $F_t$ be once-only factory generation/certification/storage, $N_{flag,t}=\widetilde O(\sqrt{nm}/\theta)$ and $N_{shift,t}=\widetilde O(\sqrt n)$ the complete preparation/inverse call counts, and $G_{flag,t},G_{shift,t}$ their actual nonquery gate prices excluding reference preparation. Let $A_t$ charge the remaining coherent AE/QFT arithmetic, rounding, division, comparison, histories, capped-minimum coins and classical control; let $G_{QRAM}$ and $W$ charge actual optional memory and output/record operations. [F3] gives the actual additive record $$\sum_t\!\left[F_t+N_{flag,t}(C_\Phi+G_{flag,t})+N_{shift,t}(C_\Phi+G_{shift,t})+A_t\right]+G_{QRAM}+W,$$ with the threshold repetition factor. Include input-query gate prices when translating queries to gates, and avoid double counting when a primitive already includes reference preparation. The summed reference term is $\widetilde O(\sqrt{nm}Q^3 C_\Phi)$; the Gibbs coefficient factory has the following direct count. At round $t$, [F1] bounds the exponent norm by $\eta t$, so its shifted Gibbs interval has radius $K_t=O(1+\eta t)$ and extension margin $1/2$. The cutoffs in [F5] have Taylor length $\widetilde O(K_t)$ and arcsine degree $\widetilde O(K_t^2)$. Computing each truncated convolution by its finite double sum, then all signed-binomial accumulations, takes $\widetilde O(K_t^5)$ arithmetic operations. Summing gives $\widetilde O(T+\eta^5T^6)=\widetilde O(Q^7)$; actual bit and phase-generation costs remain separately charged. Coherent operations in $A_t$ are quantum gates/work even when a classical description of their arithmetic is available. [given, F1, F3, F4, F5, step 1.1, algebra]

3.1 In the power-of-two case [F4] gives the explicit $O(\log n)$ reference circuit. In general retain the actual repeated $C_\Phi$ price and any separately allocated preparation error. The unit-cost QRAM profile and a direct reversible sorted-row implementation have different actual prices, each covered by step 2.2. Therefore the source's same-order gate profile follows precisely if these prices fit its stated envelope; otherwise step 1.1 and step 1.2 are query bounds with the explicit additional record of step 2.2. This retains the rich source scope and its computational-model qualification without treating expensive exact arithmetic or an undeclared oracle as free. [given, F3, F4, step 1.1, step 1.2, step 2.2, algebra] ∎

