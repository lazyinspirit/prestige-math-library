---
id: thm-circuit-value-is-p-complete
kind: theorem
title: "Circuit Value is P-complete"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-p-complete-under-logspace-reductions, lem-polynomial-time-computations-have-logspace-uniform-circuits]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Theorem 6.27"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Statement

Let CIRCUIT-VALUE contain pairs $\langle C,x\rangle$ where $C$ is a valid
topologically ordered single-output Boolean circuit and its output on $x$ is
one. Then CIRCUIT-VALUE is P-complete under logspace reductions.

## Facts & Assumptions

**Given:** a circuit-value instance, or an arbitrary language $A\in\mathrm P$.

[L1] A P-completeness proof needs membership in P and a logspace reduction from every language in P ([[def-p-complete-under-logspace-reductions]]).

[L2] Every fixed deterministic P machine has a polynomial-size logspace-uniform computation-circuit family ([[lem-polynomial-time-computations-have-logspace-uniform-circuits]]).

## Proof

**Proof technique:** evaluation and uniform compilation.

1.1 Evaluate a valid circuit in its topological order, retaining its gate values in an array and applying the fixed basis operation at each gate. This takes time polynomial in the encoding length, so CIRCUIT-VALUE is in P. [given, construct]

1.2 For $A\in\mathrm P$, choose its fixed P decider $M$ and the family $(C_n)$ supplied by [L2]. On $x$ of length $n$, output $\langle C_n,x\rangle$ by streaming the uniform circuit description and then copying $x$. [L2, construct]

2.1 The transducer keeps only an $O(\log n)$-bit circuit-query index and its output position; [L2] answers each requested gate query in logspace. Thus $x\mapsto\langle C_{|x|},x\rangle$ is a logspace reduction, and it preserves acceptance. [L2, step 1.2, algebra]

3.1 Step 1.1 gives membership and step 2.1 gives hardness for arbitrary $A\in\mathrm P$; [L1] therefore gives P-completeness. [L1, step 1.1, step 2.1] ∎
