---
id: thm-qc-generic-circuit-count-lower-bound
kind: theorem
title: "Generic Circuit Count Lower Bound"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - def-qc-bqp-promise-class
  - def-qc-quantum-acceptance-probability
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
proof_strategy: direct
---

## Statement

Fix a nonempty finite gate alphabet of $A\ge1$ gates, each of arity at most $k$ with $1\le k\le3$, and count circuits on $n\ge1$ classical input wires with zero-initialized ancillas and one designated measured output bit. No additional classical acceptance predicate is free. For a gate budget $C\ge n$, put $W=n+kC+1$. After deleting unused ancillas, every such circuit has at most $W$ wires, and there are at most
$$W\sum_{j=0}^{C}(AW^k)^j=\exp(O(C\log C))$$
output-designated gate-list descriptions. Each description computes at most one Boolean function with success probability at least $2/3$ on every input. Hence, for all sufficiently large $n$, at least $99\%$ of Boolean functions on $n$ bits require $\Omega(2^n/n)$ gates. If arbitrary classical postprocessing is allowed, its circuit or description cost must be included; otherwise this conclusion need not hold.


## Facts & Assumptions

**Given:** A fixed finite gate alphabet with $A\ge1$ gates and maximum arity $1\le k\le3$, $n\ge1$ classical input wires, zero-initialized ancillas, and one designated measured output bit. Count circuits with at most $C$ gate occurrences, where $C\ge n$; delete unused ancillas, retaining the output wire, so at most $W=n+kC+1$ wires remain. The acceptance event is that measured bit being $1$, with no free classical postprocessing.

[A1] [[def-qc-circuit-syntax-and-register-order]] gives finite ordered gate supports and chronological layers; [[def-qc-circuit-denotational-semantics]] gives the exact product denotation of those layers. Their current draft bodies were inspected. A layered circuit can therefore be serialized in its stated order with the same denotation.

[F1] [[def-qc-quantum-acceptance-probability]] defines $p_C(x)$ as the probability of the designated accepting output event for the circuit and input.

[F2] [[def-qc-bqp-promise-class]] uses acceptance at least $2/3$ on YES inputs and at most $1/3$ on NO inputs.

[F3] [[def-qc-elementary-circuit-resources]] defines circuit size as the number of gate occurrences and width as the number of all wires, including workspace.

## Proof

1.1 By [F3], gate budget $C$ counts gate occurrences and $W$ includes every workspace wire. A circuit with $j$ gate occurrences has at most $(AW^k)^j$ ordered gate-list descriptions on $W$ wire labels: there are $A$ gate types and at most $W^k$ ordered supports per type. By [A1], flattening each finite layer list in chronological order preserves its denotation, so every layered circuit of at most $C$ gates is represented by one of these lists. Choosing the designated output wire contributes a factor at most $W$. Thus the number of descriptions is at most $W\sum_{j=0}^{C}(AW^k)^j$. Since $A\ge1$, $W\ge1$, $C\ge n$, and $k$ is fixed, $W=O(C)$ for positive $C$ and $AW^k\ge1$. The sum is at most $(C+1)(AW^k)^C$, whose logarithm is $O(C\log C)$. Duplicate denotations only reduce the number of computed functions. [given, A1, F3, algebra]

1.2 By [F1], a fixed description has one acceptance probability $p_C(x)$ at each input. If it computed two distinct Boolean functions with success threshold [F2], some input $x$ would require the same number $p_C(x)$ to be both at least $2/3$ and at most $1/3$, which is impossible. Therefore one description accounts for at most one truth table. [F1, F2, algebra]

2.1 There are exactly $2^{2^n}$ Boolean functions on $n$ bits. For $C_n=\lfloor c2^n/n\rfloor$, the bound in step 1.1 has base-two logarithm at most $K C_n\log_2 C_n$ for a constant $K$ depending only on the fixed alphabet and arity. Since $\log_2 C_n\le n+O(1)$, choose $c>0$ so that this logarithm is at most $2^{n-1}$ for all sufficiently large $n$. Then the fraction with at most $C_n$ gates is at most $2^{2^{n-1}}/2^{2^n}<0.01$ eventually. By step 1.2, each description covers at most one function, so at least $99\%$ require more than $C_n=\Omega(2^n/n)$ gates. This is an almost-all lower bound, not a lower bound for each named function. [step 1.1, step 1.2, algebra]

2.2 The model in the statement charges the measured output-bit event and includes no free classical postprocessing, so the one-description/one-function count applies as stated. If a classical postprocessing circuit is admitted, it must be included in the finite description and gate count before this argument can be reused. [given, step 1.2, step 2.1] ∎
