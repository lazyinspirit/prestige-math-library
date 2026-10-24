---
id: cex-qa-18-query-cost-is-not-gate-cost
kind: counterexample
title: "One oracle query can require many ordinary gates"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-18-random-access-gate-model
  - def-qc-coherent-function-oracle
  - def-qc-elementary-circuit-resources
justified_by: []
proof_strategy: direct
axiom_use: "None; the counterexample is a finite circuit-support argument."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andris Ambainis, Quantum walk algorithm for element distinctness, §6"
      url: "https://arxiv.org/pdf/quant-ph/0311001"
---
## Statement refuted

For each $m\ge1$, let $f_m:\{0,1\}^m\to\{0,1\}$ be parity, $f_m(i)=i_1\oplus\cdots\oplus i_m$, and consider its coherent XOR oracle

$$O_{f_m}|i,b\rangle=|i,b\oplus f_m(i)\rangle.$$

In the value-oracle query model this is one oracle call. In the ordinary circuit model with bounded-arity two-wire gates, every exact implementation using product clean ancillas requires at least $m$ two-wire gate occurrences that connect the $m$ address wires to the target component. By contrast, in the declared random-access-memory model of [[def-qa-18-random-access-gate-model]], one addressed swap reads the precomputed parity bit into a clean scratch location; two such calls with an intermediate copy restore memory and implement the XOR action, with the constant number of RAM calls charged separately. Memory construction and maintenance remain separate costs. Thus a query count alone does not bound ordinary gate count, and unit-cost QRAM access is a distinct model.

## Facts & Assumptions

**Given:** The coherent function-oracle action, the ordinary finite circuit gate-occurrence convention, and the separate random-access memory gate model.

[F1] [[def-qc-coherent-function-oracle]]: the value oracle maps $|i,b\rangle$ to $|i,b\oplus f(i)\rangle$ and one declared oracle call is one query.

[F2] [[def-qc-elementary-circuit-resources]]: ordinary gate size counts each gate occurrence separately, and a bounded-arity gate acts on only its declared wires.

[F3] [[def-qa-18-random-access-gate-model]]: a random-access memory gate swaps the addressed memory bit with a target in one model-defined gate-time unit, with memory construction and updates separately charged.

## Proof


1.1 The parity oracle is exactly one application of the supplied $O_{f_m}$, so its query count is one by [F1]. In an ordinary circuit, form the interaction graph whose vertices are all circuit wires and whose edges join the two wires acted on by each two-wire gate occurrence. If the target's connected component omitted an address bit, then no gate couples that bit to the target or to any intermediary on its component; the circuit factors across this separation, making the target output independent of the omitted bit. This contradicts parity's dependence on each input bit: fixing the other bits and changing the omitted bit changes the target. Hence the graph contains a connected subgraph joining the target and all $m$ address wires. Any connected graph containing these $m+1$ distinct terminals has at least $m$ edges, even if it also contains ancilla vertices; each edge comes from a gate occurrence. [F1, F2, given, algebra]

2.1 For the explicit upper-bound constructions, choose an ordinary gate alphabet containing CNOT, with basis action $|a,b\rangle\mapsto|a,b\oplus a\rangle$; this is an additional model choice, not a consequence of [F2]. Applying the $m$ CNOT gates from each address bit to the target computes parity into that target and gives an exact $m$-gate implementation. In QRAM, store $z_i=f_m(i)$ and use one addressed swap to move $z_i$ to a clean scratch bit, copy it by CNOT into the oracle target, and use a second addressed swap to restore the memory and clear the scratch. This is a constant number of RAM calls by [F3], but it still requires the table to have been constructed and maintained. The online gate models therefore count one oracle call versus at least $m$ ordinary two-wire gates for this function, with RAM construction cost recorded separately. [F1, F2, F3, step 1.1, construct] ∎
