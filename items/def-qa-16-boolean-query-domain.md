---
id: def-qa-16-boolean-query-domain
kind: definition
title: Finite Boolean query problem and error model for adversary bounds
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-task-and-promise-domain
  - def-qa-standard-bit-query
  - def-qa-quantum-query-complexity
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition


Fix an integer N≥1, a nonempty finite set D⊆{0,1}^N, and a Boolean function f:D→{0,1}. A Boolean query problem is the tuple (N,D,f) with input x∈D and standard XOR oracle
$$O_x|i,b,w\rangle=|i,b\oplus x_i,w\rangle\quad (i\in[N],\ b\in\{0,1\}).$$
The local address register is $\mathbb C^N$ with ordered basis $|i\rangle=e_{i-1}$, $i\in[N]$. For its qubit realization, set $a=\lceil\log_2N\rceil$ and encode $i$ by the $a$-bit binary word for $i-1$. Define the total bit function $\widetilde x$ on all $a$-bit words by $\widetilde x(j)=x_{j+1}$ for $0\le j<N$ and $\widetilde x(j)=0$ for $N\le j<2^a$. The standard bit-flip query for $\widetilde x$ restricts to $O_x$ on the encoded local register and acts as the identity on unused address codewords. Algorithms in the local model use the $N$-address register at query calls.

For 0≤ε<1/2, Q_ε(f) is the least worst-case number of these oracle calls of an algorithm outputting f(x) with probability at least 1−ε for every x∈D. The input promise does not restrict the oracle address. Only query calls are counted here; no gate-efficiency assertion is part of this definition.

## Facts & Assumptions

**Given:** A finite Boolean query problem and its fixed standard XOR query convention.



[F1] [[def-qa-task-and-promise-domain]]: a finite promise task specifies a domain and a Boolean decision function on that domain.

[F2] [[def-qa-standard-bit-query]]: a total bit function on an ordered bit-string address register defines a unitary, involutive XOR query.

[F3] [[def-qa-quantum-query-complexity]]: the general query-cost interface counts the worst-case number of designated oracle calls; its bounded-error convention uses the fixed 2/3 success threshold.

[F4] [[def-qc-dirac-notation-conversion]]: computational-basis kets use the stated Dirac pairing.

## Proof

1.1 The declared finite set D and map f give the promised decision problem. The extension $\widetilde x$ is defined on every $a$-bit address, so [F2] gives its total XOR unitary. The span of the first $N$ address basis states is invariant, and identifying its word for $i-1$ with $|i\rangle$ gives exactly the displayed $O_x$; unused codewords are fixed because their extension bit is zero. Thus the local oracle is total on its $N$-address register, including when $N=1$ and $a=0$. The promise restricts x, not which address in $[N]$ may be queried. [given, F1, F2, construct]

2.1 The local Q_ε clause in the Definition counts the least worst-case number of designated calls to this oracle among algorithms correct with probability at least 1−ε on every promised input; [F3] supplies the general worst-case query-cost convention and excludes nonoracle gates. Equation (F4)'s ket convention fixes all later matrix and state formulas. [given, F2, F3, F4] ∎
