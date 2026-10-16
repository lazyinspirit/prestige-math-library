---
id: thm-qa-19-continuous-walk-resource-accounting
kind: theorem
title: Continuous-time walk resource accounting
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - alg-qa-19-hypercube-state-transfer
  - thm-qa-19-hypercube-transfer-correctness
  - alg-qa-19-complete-graph-spatial-search
  - lem-qa-19-hadamard-uniform-state-preparation
  - def-qa-19-hamiltonian-access-cost-model
  - def-qc-circuit-cost-model
  - def-qc-projective-measurement
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.2
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.2, PDF p.82 (printed p.74): commuting one-qubit hypercube terms; all cost sums below follow from the declared local access model."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: Hamiltonian evolution versus its circuit-simulation cost."
---

## Statement

Suppose a declared access model assigns query/gate/description-bit cost triples
$C_{\rm in}=(q_{\rm in},g_{\rm in},b_{\rm in})$,
$C_H=(q_H,g_H,b_H)$, and $C_{\rm out}=(q_{\rm out},g_{\rm out},b_{\rm out})$
to the initial-state preparation, Hamiltonian evolution or simulator, and final
measurement/readout of a continuous-time walk. If the model charges serial
composition componentwise, the composed cost is
$$C_{\rm in}+C_H+C_{\rm out}=(q_{\rm in}+q_H+q_{\rm out},\ g_{\rm in}+g_H+g_{\rm out},\ b_{\rm in}+b_H+b_{\rm out}),$$
plus separately declared classical processing. The number of measured output
bits is reported separately.

For the exact $n$-dimensional hypercube transfer, the initial state $|0^n\rangle$
requires no preparation gates. On the local-operation branch of
[[alg-qa-19-hypercube-state-transfer]], the evolution factors into $n$ one-qubit
operations $U_X(\pi/2)=e^{-i\pi X/2}$; this branch uses $n$ local evolution
calls and $n$ gates when those operations are primitive in the declared gate
model. A different finite gate set must charge its supplied synthesis cost. On
the whole-operation branch, the procedure makes one call to the supplied
$U_{A_n}(\pi/2)$ and its query, gate, and description-bit costs are those
declared by the access contract; the factorization identity alone does not
imply $n$ such calls or gates. Either branch reads out $n$ bits.

For complete-graph search on arbitrary $N\ge2$, the total includes the supplied
preparation cost $C_s=(q_s,g_s,b_s)$, the declared ideal-or-simulated Hamiltonian-evolution
cost, and the final readout cost. When $N=2^n$ with standard binary encoding,
$A_s=H^{\otimes n}$ is verified to prepare the uniform state; it has zero oracle
queries and $n$ Hadamard gates when $H$ is primitive, and otherwise its declared
synthesis costs are charged. The readout produces $n$ bits. For a general $m$-bit encoding it produces $m$ bits before
any separately charged classical decoding. Simulator precision, oracle access,
and description bits remain in their declared coordinates; a matrix alone
gives no cost bound.

## Facts & Assumptions

**Given:** The cost triples, the three serial stages, and the algorithms and
access models stated above.

[F1] [[def-qa-19-hamiltonian-access-cost-model]]: each stage declares its
separate query, gate, and description-bit costs, and serial composition adds
these coordinates.

[F2] [[def-qc-circuit-cost-model]]: finite gate count, named-oracle query
counts, and full circuit-description length are separate resource coordinates.

[F3] [[alg-qa-19-hypercube-state-transfer]]: the input is $|0^n\rangle$ and
the generator is $A_n=\sum_{j<n}X_j$; the access contract supplies either the
whole evolution or the local one-qubit evolutions, and the procedure uses the
corresponding whole-operation or local-operation branch.

[F4] [[thm-qa-19-hypercube-transfer-correctness]]: at time $\pi/2$ the
evolution factors as $U_{A_n}(\pi/2)=\bigotimes_{j<n}U_X(\pi/2)$.

[F5] [[alg-qa-19-complete-graph-spatial-search]]: for arbitrary $N$, $A_s$
is supplied and charged; for $N=2^n$, $A_s=H^{\otimes n}$ is the
standard-binary preparation when $H$ is primitive (otherwise charge its supplied
synthesis cost).

[F6] [[def-qc-projective-measurement]]: the final register is measured in its
specified computational basis and the output word consists of the measured
register bits.

[F7] [[lem-qa-19-hadamard-uniform-state-preparation]]: for $N=2^n$ and
standard binary labels, $H^{\otimes n}|0^n\rangle$ is the uniform state; it
uses $n$ one-qubit Hadamard gates when $H$ is primitive, otherwise the declared
synthesis costs apply.

## Proof

**Proof technique:** direct.

1.1 Serial execution places the preparation, evolution, and readout costs in sequence. By the serial-composition rule [F1], each of the three coordinates is the sum of its corresponding stage coordinates; the finite gate and oracle coordinates remain separate as required by [F2]. [given, F1, F2, algebra]

1.2 In the hypercube instance, [F3] says the initial register is already $|0^n\rangle$, so no preparation gates are applied. If the procedure takes the local-operation branch, [F4] gives one one-qubit evolution operation for each of the $n$ tensor factors, hence $n$ local calls and $n$ gates exactly when those operations are primitive in the chosen gate model. If it takes the whole-operation branch, it calls the supplied $U_{A_n}(\pi/2)$ once and its contract declares that call's resource cost. The factorization theorem [F4] is an operator identity and does not turn a whole-operation call into $n$ calls. In either branch, measurement acts on the $n$ register wires, so its output word has $n$ bits by [F6]. [F3, F4, F6, algebra]

2.1 In the complete-graph procedure, [F5] supplies a preparation with cost $C_s$, and the declared Hamiltonian and readout stages contribute their specified triples. Step 1.1 adds these triples; for $N=2^n$, [F7] verifies the standard-binary preparation with $n$ Hadamard gates (and zero oracle calls for that gate-only preparation). The measured encoding has $m$ bits by [F6]; classical decoding is charged separately. No preparation or simulation cost is inferred from $H$ itself. [F1, F2, F5, F6, F7, step 1.1, algebra] ∎
