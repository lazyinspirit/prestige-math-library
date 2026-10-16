---
id: lem-qa-swap-is-three-cnot-circuit
kind: lemma
title: A SWAP Is Three CNOTs
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps: [def-qc-cnot-and-control-target-order, def-qc-tensor-register-and-permutation, lem-qc-tensor-product-basis-and-dimension]
axiom_use: "No choice axiom is used; the four computational-basis labels are checked directly."
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

On two ordered qubit wires, let $S$ be the wire-swap permutation $|a,b\rangle\mapsto|b,a\rangle$. Let $C_{12}$ be the CNOT with wire 1 controlling wire 2, so $C_{12}|a,b\rangle=|a,b\oplus a\rangle$, and define the reverse orientation by $C_{21}|a,b\rangle=|a\oplus b,b\rangle$, extending both actions linearly; here $\oplus$ is addition modulo two. The operator identity

$$S=C_{12}C_{21}C_{12}$$

holds, where products act right to left. Therefore the swap of two wires has an exact three-CNOT implementation with no ancillas.

## Facts & Assumptions

**Given:** Two ordered qubit factors with computational basis $|a,b\rangle$, $a,b\in\{0,1\}$.

[F1] The first-to-second CNOT has action $C_{12}|a,b\rangle=|a,b\oplus a\rangle$ ([[def-qc-cnot-and-control-target-order]]).

[F2] The swap wire permutation sends $|a,b\rangle$ to $|b,a\rangle$ ([[def-qc-tensor-register-and-permutation]]).

[F3] The four computational basis vectors form a basis of the two-qubit register ([[lem-qc-tensor-product-basis-and-dimension]]).

## Proof

**Proof technique:** direct finite verification.

**Given:** The basis actions in [F1]–[F3] and the explicit reverse CNOT action in the Statement.

1.1 Both CNOT maps are involutions: applying either twice uses $x\oplus x=0$ and returns every basis vector to itself, so their linear extensions permute the orthonormal basis [F3] and are exact unitary gates. Now for any $a,b\in\{0,1\}$, apply the three maps from right to left: $C_{12}|a,b\rangle=|a,b\oplus a\rangle$, then $C_{21}$ sends this to $|a\oplus(b\oplus a),b\oplus a\rangle=|b,b\oplus a\rangle$, and the final $C_{12}$ sends it to $|b,(b\oplus a)\oplus b\rangle=|b,a\rangle$. The last equalities use $a\oplus a=b\oplus b=0$. [given, F1, F3, algebra]

2.1 This is exactly the action of $S$ in [F2] on every vector of the basis [F3]. Two linear maps agreeing on a basis agree on every vector, so $S=C_{12}C_{21}C_{12}$. The displayed product contains three CNOTs on the same two wires and uses no ancillary register. [F2, F3, step 1.1, algebra] ∎
