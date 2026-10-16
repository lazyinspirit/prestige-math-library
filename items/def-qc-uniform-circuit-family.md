---
id: def-qc-uniform-circuit-family
kind: definition
title: "Full-list uniform quantum circuit family"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-effective-binary-encoding-and-decoder
  - def-deterministic-one-tape-turing-machine
  - def-partial-function-computed-by-a-machine
  - def-worst-case-time-and-space-complexity
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - def-qc-clifford-t-gate-library
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "John Watrous, Quantum Computational Complexity, Sections III.2 and IV.1"
      url: "https://arxiv.org/pdf/0804.3401"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 13, Section 13.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

A **full-list uniform quantum circuit family** is a sequence $(C_n)_{n\ge0}$ together with one fixed deterministic one-tape Turing machine $G$ and constants $c\ge1$ and $k\in\mathbb N$ such that, on input the unary word $1^n$, $G$ halts within $c(n+1)^k$ transitions and its final tape is a valid self-delimiting binary description of the entire circuit $C_n$. The machine output convention is that of [[def-deterministic-one-tape-turing-machine]] and [[def-partial-function-computed-by-a-machine]], and running time is as in [[def-worst-case-time-and-space-complexity]].

The following fixed-order code makes the full circuit and its designated input/output wires effective. A unary natural $r\in\mathbb N$ is written $1^r0$, including the one-symbol code $0$ for $r=0$. A self-delimiting binary natural $r$ is written $1^{|\operatorname{bin}(r)|}0\operatorname{bin}(r)$, where $\operatorname{bin}(r)$ is its ordinary binary numeral with no leading zeros and $\operatorname{bin}(0)=0$. The header gives the input-wire count $n$ and total wire count $m$ in unary, followed by the gate count $g$ as a self-delimiting natural; validity requires $m\ge n$.

Each gate record consists of a two-bit label ($00,01,10,11$ for $H,T,T^\dagger,\mathrm{CNOT}$ respectively), followed by one self-delimiting wire index for $H,T,T^\dagger$ and two ordered self-delimiting indices for CNOT. Every index is less than $m$; CNOT indices are distinct, with the first the control and the second the target. The list contains exactly $g$ records. After the gate list, an output-count self-delimiting natural is followed by that many ordered, pairwise distinct wire indices, each less than $m$. Parsing rejects every other label, malformed or out-of-range index, repeated output index, truncated field, or trailing bit. This defines a total decoder by returning a fixed malformed-code symbol on any invalid word; effective binary encodings and total decoders are as in [[def-effective-binary-encoding-and-decoder]].

The gate labels and matrices are the fixed finite library $H,T,T^\dagger,\mathrm{CNOT}$ of [[def-qc-clifford-t-gate-library]], with entries in $\mathbb Q(\zeta_8)=\mathbb Q(i,\sqrt2)$; CNOT is control-first. The remaining $m-n$ wires are auxiliary wires; their initial states are determined when a family is used in a computation model. This family convention adopts full-list generation. It makes no equivalence claim with indexed-gate uniformity and, in particular, does not assert that an indexed-gate generator can be expanded to the full list in polynomial time.

## Remarks

When a family is used in a promise computation, its output predicate is supplied separately by that computation model; the predicate is not an uncharged quantum gate ([[def-qc-promise-computation-model]]).

