---
id: alg-qa-20-first-order-term-list-simulation
kind: algorithm
title: First-order term-list simulator
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-20-first-order-product-formula
  - def-qa-20-term-list-access-model
  - def-qc-circuit-denotational-semantics
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 27 §§27.2–27.3, printed pp. 133–135: finite time-independent Hamiltonian evolution, operator-norm simulation, and product formulas."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9 §§9.1–9.2, printed pp. 71–74: finite Hermitian evolution, operator-norm simulation, and Lie–Suzuki–Trotter methods."
---

## Definition

**Input:** A finite term-list access input with $H=\sum_{j=1}^m H_j$, a finite time code $t$ in the expression language of [[def-qa-20-term-list-access-model]], a rational tolerance $0<\epsilon<1$, a certified rational $C_2\ge0$ satisfying $C_2\ge\sum_{1\le j<\ell\le m}\|[H_j,H_\ell]\|$, and a supplied certified rational upper bound $R\ge0$ satisfying $R\ge t^2C_2/\epsilon$. For $t\ne0$, put $r=\max\{1,\lceil R\rceil\}$ and $h=t/r$; the access declarations must supply each term call at this exact signed code $h$, with its implementation and costs. A call may be directly supported at $h$ or supplied by separately declared inverse or time-reversed access, with that route's own costs. When $t\ne0$, every approximate call must have a certified error, and the sum of those errors over all $rm$ calls must be at most $\epsilon/2$. The time-code and call conventions are those of [[def-qa-20-term-list-access-model]].

**Output:** The composed unitary circuit for the declared product order, together with its query, gate, ancilla, coefficient-bit, description-bit, and classical-generation cost record.

**Instructions:**

1. Compare the exact value of the supplied time code with $0$. If it is $0$, return the identity circuit.
2. Otherwise set $r=\max\{1,\lceil R\rceil\}$ using rational arithmetic and set $h=t/r$ as a supported finite expression code.
3. For each of exactly $r$ repetitions, execute the declared term calls chronologically in order $m,m-1,\ldots,1$. By [[def-qc-circuit-denotational-semantics]], later executed gates multiply on the left. The ideal exact-call operator for one repetition is therefore $e^{-ihH_1}\cdots e^{-ihH_m}$ of [[def-qa-20-first-order-product-formula]]; with supplied implementations the actual operator is $V_1(h)\cdots V_m(h)$, with the declared call errors accumulated separately. If the call at $h$ is supplied through inverse or time-reversed access, use that separately declared route and its cost and error record; do not infer it from forward access alone.
4. Keep circuit-generation, coefficient, and all oracle costs in their separate declared coordinates. When $t\ne0$ and calls are approximate, retain their per-call error records; admissibility requires their sum over all $rm$ calls to be at most $\epsilon/2$.

The procedure makes no claim that the required term calls or their uniform generator exist for an arbitrary matrix.
