---
id: def-qc-circuit-cost-model
kind: definition
title: "Circuit-family and computation cost model"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - def-qc-clean-and-dirty-ancillas
  - def-effective-binary-encoding-and-decoder
  - def-deterministic-one-tape-turing-machine
  - def-partial-function-computed-by-a-machine
  - def-worst-case-time-and-space-complexity
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

Fix the finite circuit syntax and its complete self-delimiting binary description ([[def-qc-circuit-syntax-and-register-order]], [[def-effective-binary-encoding-and-decoder]]). For a circuit $C$, let $L(C)$ be the number of bits in that complete description, $g(C)$ its number of gate occurrences, and $w(C)$ its total number of wires.

Each clean or dirty ancilla coordinate additionally requires a declared ordered partition of the circuit wires into data register $D$ and ancilla register $A$, and a declared target unitary $V$ on $D$. In that factor order, the complete circuit unitary must satisfy the corresponding exact contract of [[def-qc-clean-and-dirty-ancillas]]. For such a supplied clean contract set $a_{\rm clean}(C)=|A|$, and for such a supplied dirty contract set $a_{\rm dirty}(C)=|A|$; the notation suppresses the declared interface, which is part of the cost instance and may differ between the two coordinates. If no corresponding contract is supplied, mark that coordinate not applicable. These are counts of declared contract registers, not maxima over possible partitions. Zero initialization alone supplies neither return contract. Every auxiliary wire remains counted in $w(C)$ ([[def-qc-elementary-circuit-resources]]).

The gate sequence and supports determine a finite dependency order: each earlier gate occurrence must precede every later occurrence that acts on a shared wire. A **layering** assigns a positive integer layer to each gate occurrence, strictly increasing along those shared-wire precedence relations. Gates in one layer therefore have pairwise disjoint supports. Define the depth $d(C)$ to be the least number of layers in such a layering; if $C$ has no gates, set $d(C)=0$. If layers are written $L_1,\ldots,L_d$ in chronological order, the denotation is $U_{L_d}\cdots U_{L_1}$, as in [[def-qc-circuit-denotational-semantics]].

For a family $(C_n)$ with a specified full-list generator $G$, let $t_G(n)$ be the worst-case number of Turing-machine transitions used by $G$ on unary input $1^n$. For a total acceptance predicate $A_n(x,z)$, let $t_A(n)$ and $s_A(n)$ be its worst-case deterministic transition count and tape-space use over all valid length-$n$ inputs and measured outputs, using a fixed effective encoding of the pair $(x,z)$. Any effective input description, classical preprocessing, or threshold computation has its own bit length and time/space bounds; these costs are not included in $t_G$ or $t_A$ unless the same machine performs them. The machine conventions are those of [[def-deterministic-one-tape-turing-machine]], [[def-partial-function-computed-by-a-machine]], and [[def-worst-case-time-and-space-complexity]].

If the access model explicitly supplies a named oracle gate $\mathcal O$, let $q_{\mathcal O}(C)$ be the number of calls to it. With several named oracles, record a separate query coordinate for each. Ordinary finite-basis gates, oracle calls, circuit-description length, generator time, and classical bit costs remain separate; no oracle, controlled-oracle, inverse-oracle, or data-loading operation is assigned zero cost unless its interface explicitly says so.

For an approximate task with declared rational tolerance $0<\epsilon<1$, let $\ell(\epsilon)$ be the bit length of that exact binary-rational encoding. Exact finite-gate computations have no precision field. The **cost record** consists of all applicable coordinates
$$\bigl(L(C_n),g(C_n),d(C_n),w(C_n),a_{\rm clean}(C_n),a_{\rm dirty}(C_n),t_G(n),t_A(n),s_A(n),q_{\mathcal O}(C_n),\epsilon,\ell(\epsilon)\bigr).$$
An inapplicable coordinate is marked not applicable, not silently charged as zero. This definition records the resource model; separate theorems establish polynomial bounds.

## Remarks

The minimum-layer quantity $d(C)$ above may also be denoted $d_{\min}(C)$. It differs from the declared depth $d_{\rm decl}(C)$ in [[def-qc-elementary-circuit-resources]], which counts the layers actually written in the supplied circuit. Its written layering is one admissible layering of the same gate word, so $d_{\min}(C)\le d_{\rm decl}(C)$. The inequality can be strict: two gates on disjoint wire sets written in two successive layers have declared depth $2$ and minimum-layer depth $1$. Empty written layers also contribute to declared depth, while a gate-free word has minimum-layer depth $0$. These are separate resource quantities; a cost statement must specify which one it bounds.
