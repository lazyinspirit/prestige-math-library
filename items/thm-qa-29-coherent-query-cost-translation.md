---
id: thm-qa-29-coherent-query-cost-translation
kind: theorem
title: "Coherent query-to-circuit cost translation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 27
deps:
  - alg-qa-29-quantum-expectation-estimation
  - thm-qa-29-quantum-expectation-error-cost
  - alg-qa-29-variance-aware-monte-carlo
  - thm-qa-29-variance-aware-guarantee
  - def-qa-29-coherent-sampler
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-circuit-cost-model
  - alg-qa-13-phase-estimation-amplitude-estimation
  - def-qa-13-amplitude-estimation-task
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; this is finite accounting of declared circuit operations."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, Section 4"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ashley Montanaro, Quantum speedup of Monte Carlo methods, Theorems 3 and 5"
      url: "https://arxiv.org/pdf/1504.06987v3"
verification:
  precheck: n/a
---

## Statement

For a QA29 execution, group its complete value-rotated sampler preparations into the distinct supplied unitaries $A_j$, and let $N_j$ be the number of fresh standalone preparations of $A_j$ and $Q_j$ the number of controlled Grover rounds using it. Also let $V_t$ range over the supplied unrotated sampler preparations used for coarse measurements, with $N_t^0$ such fresh preparations. If each controlled Grover round for $A_j$ is the explicit product of one controlled $A_j$ call, one controlled $A_j^\dagger$ call, one controlled initial-state reflection, one controlled good-state reflection, and its control phase, then the exact primitive-call cost is
$$\sum_jN_jC_{A_j,\rm prep}+\sum_tN_t^0C_{V_t,\rm prep}+\sum_jQ_j(C_{A_j,c}+C_{A_j^\dagger,c}+C_{S_{0,j},c}+C_{S_{{\rm good},j},c}+C_{{\rm phase},j}),$$
where every $C$ is the declared cost of that operation. The preparation counts exclude the controlled $A_j$ and $A_j^\dagger$ occurrences inside Grover rounds, which are already included in the $Q_j$ terms. With a single $A_q$, no unrotated coarse preparations, and $N_{\rm prep}=N_q$, this reduces to the homogeneous formula $N_{\rm prep}C_{A_q,\rm prep}+Q(C_{A_q,c}+C_{A_q^\dagger,c}+C_{S_0,c}+C_{S_{\rm good},c}+C_{\rm phase})$. Value decoding, band comparisons, reversible arithmetic, controlled rotations, uncomputation, phase estimation, ancilla workspace, circuit description, and classical output/median computations add their own declared gate, width, bit, or oracle costs. If a complete reflection is instead supplied as a named oracle, charge that oracle's declared cost separately and do not also expand it into its components. No bare query bound becomes a gate bound without these implementations.

## Facts & Assumptions

**Given:** The finite circuit and access model for [[def-qa-29-coherent-sampler]], the QA29 bounded-mean and variance-aware procedures, and the cost coordinates in [[def-qc-circuit-cost-model]].

[F1] [[def-qa-29-coherent-sampler]] requires explicit forward, inverse, controlled, data, value, rotation, and reflection access.

[F2] [[def-qc-controlled-unitary-access]]: controlled access is a separately declared operation and does not follow from ordinary access.

[F3] [[def-qc-inverse-unitary-access]]: inverse access and its charge are recorded separately from forward access.

[F4] [[def-qc-circuit-cost-model]] keeps named queries, ordinary gates, circuit description, width, ancillas, precision, and classical computation as separate coordinates.

[F5] [[alg-qa-13-phase-estimation-amplitude-estimation]] and [[def-qa-13-amplitude-estimation-task]] specify the Grover-iterate factors and separately declared controlled accesses. [[thm-qa-29-quantum-expectation-error-cost]] counts the exact median rounds for bounded expectation in repeated controlled-$Q$ access; [[thm-qa-29-variance-aware-guarantee]] counts copies in either mode and state-reflection uses in repeated access. Their supplied controlled-power alternatives retain separate declared prices.

## Proof

1.1 For each $A_j$, [F1]–[F3] show that one controlled Grover round contains exactly its five declared components. Repeating that product $Q_j$ times contributes $Q_j$ calls to each corresponding component cost. The standalone preparations contribute $\sum_jN_jC_{A_j,\rm prep}$, and the separate coarse sampler preparations contribute $\sum_tN_t^0C_{V_t,\rm prep}$. Summing these disjoint operation occurrences gives the displayed exact primitive-call cost. [given, F1, F2, F3, F5, algebra]

1.2 The remaining classical and quantum operations form finite subcircuits appended to or interleaved with those rounds. By [F4], their gate, width, ancilla, bit, and description costs are added in the corresponding coordinates, not absorbed into a unit-cost query. If the full reflection is a supplied oracle, the declared alternative counts that one oracle call rather than both implementations. [given, F1, F4, algebra]

2.1 Under the Statement’s explicit component-product hypothesis, applying the same occurrence-by-occurrence accounting to the repeated-access counts in [F5] proves the query-to-circuit translation for both QA29 estimators, including their distinct value-rotated preparations and any unrotated coarse samples. In supplied controlled-power mode, sum the actual power-query prices from [F5] instead of expanding them as $Q_j$ component rounds; the standalone and coarse preparations are still charged. Since no operation is omitted or assigned zero cost, the conclusion makes no gate-cost claim without a supplied implementation. [given, F4, F5, step 1.1, step 1.2] ∎
