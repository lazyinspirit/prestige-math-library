---
id: alg-qc-controlled-t-clean-ancilla-circuit
kind: algorithm
title: Controlled T using a clean ancilla
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-clifford-t-gate-library
  - def-qc-clean-and-dirty-ancillas
  - def-qc-toffoli-and-fredkin
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-controlled-unitary-access
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits"
      url: https://arxiv.org/pdf/1206.5236
dependency_level: 10
---

## Definition

Input two data bits $a,b$ and a third clean work bit $t=0$. On the ordered
register $(a,b,t)$, apply the following chronological word:

1. $H_t$.
2. $\operatorname{CNOT}_{b,t},T_t^\dagger,\operatorname{CNOT}_{a,t},T_t,
   \operatorname{CNOT}_{b,t},T_t^\dagger,\operatorname{CNOT}_{a,t}$.
3. $T_b,T_t,H_t$.
4. $\operatorname{CNOT}_{a,b},T_a,T_b^\dagger,\operatorname{CNOT}_{a,b}$.
5. $T_t$.
6. Apply the same 15-gate word from steps 1–4 again.

The 15-gate word in steps 1–4 is the specified three-wire block. The output
is the complete three-wire circuit, with no implicit fourth wire.

## Remarks

The source's controlled-$T$ construction computes $ab$ into the clean bit,
applies $T$ there, and uncomputes. The target operation $C(T)$ is the
control-first block in [[def-qc-controlled-unitary-access]]. Its exact
correctness and restoration claim is the separate proposition above.

## Unresolved supplier checks

The actual QC09 syntax/denotational-semantics and QC10 Toffoli/ancilla
carriers were inspected. Their ordered-wire and clean-return interfaces
agree with this circuit. This is interface reconciliation, not acceptance of
the supplier drafts.
