---
id: def-qa-15-bit-oracle-query-complexity
kind: definition
title: "Local bounded-error bit-query complexity"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-15-bit-oracle-query-model
  - def-qa-task-and-promise-domain
  - lem-finite-set-has-max
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), Chapter 21, §§21.3–21.6"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

Let $f:D\to\{0,1\}$ be a promise function and $0\le\epsilon<1/2$. Its **local bounded-error bit-query complexity** is
$$Q^{\mathrm{bit}}_{\epsilon}(f;D):=\min\{T\in\mathbb N_0:\text{some local bit-query algorithm making at most }T\text{ queries has }|\Pr[A\text{ accepts }x]-f(x)|\le\epsilon\text{ for every }x\in D\}.$$
The feasible set is nonempty. Query the one-hot addresses $e_0,\ldots,e_{N-1}$ in order, measuring each target bit and copying its result to a fresh, initially zero output wire by a fixed outcome-controlled bit flip; the outcomes are deterministically $x_0,\ldots,x_{N-1}$. Fixed branch operations reset the target between calls and set the next one-hot address, so the terminal output tuple is exactly the recorded $N$-bit word. The fixed terminal accepting subset $\{y\in D:f(y)=1\}$ then accepts exactly on yes-inputs in $D$, so this is an exact $N$-query algorithm (for $N=0$, the fixed output predicate suffices without a query). Thus the minimum is finite and at most $N$; it exists because the feasible counts below this one form a nonempty finite set of naturals, which has a least element by [[lem-finite-set-has-max]] applied to their negatives. The query count is the minimum worst-branch query count and does not charge non-oracle operations. “Local” refers exactly to the oracle-only interface in [[def-qa-15-bit-oracle-query-model]]. If $D=\varnothing$, a zero-query algorithm is feasible and the minimum is $0$.


## Remarks

The coordinate in [[def-qa-quantum-query-complexity]] counts calls of one specified algorithm. The function-level quantity here minimizes that worst-branch coordinate over the oracle-only algorithms of [[def-qa-15-bit-oracle-query-model]] that meet the stated success condition. It does not minimize over the broader class with direct encoded-input access. No uniformity, gate-cost, or classical bit-time bound is part of this minimum.
