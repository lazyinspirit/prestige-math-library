---
id: def-qa-15-bit-oracle-query-model
kind: definition
title: "Oracle-only bit-query algorithm"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qa-standard-bit-query
  - def-qa-finite-branch-output-law
  - def-qa-task-and-promise-domain
  - def-qc-ordered-bitstring-encoding
  - def-qc-register-and-computational-basis
  - def-qc-instrument-and-conditional-state
  - thm-qc-instrument-outcome-law-normalizes
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), Chapter 21, §§21.3–21.6"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

Fix an integer $N\ge0$ and a promise domain $D\subseteq\{0,1\}^N$ as in [[def-qa-task-and-promise-domain]]. For each full-cube input $x=(x_0,\ldots,x_{N-1})$, define the total address function $g_x:\{0,1\}^N\to\{0,1\}$ by $g_x(e_i)=x_i$ for the one-hot word $e_i$ ($0\le i<N$), and $g_x(a)=0$ for every other address. If $N=0$, the address set has only the empty word and $g_x$ is identically zero. A **local bit-query algorithm** is a finite rooted execution tree on one fixed finite ordered register, starting in the all-zero computational-basis state $|0^m\rangle$ for its fixed register length $m$. The tree topology and each node label are fixed independently of $x$. Each non-oracle node is either a fixed unitary or a fixed finite instrument, with its observed outcomes retained for later control; every such operation is independent of $x$. Each query node acts on a declared $N$-bit address register and a disjoint one-bit target register by the standard XOR oracle $U_{g_x}$ of [[def-qa-standard-bit-query]], tensored with the identity on all other wires. Every terminal node uses the same ordered output-wire tuple and the same fixed accepting subset $S\subseteq\{0,1\}^r$, independent of $x$; the output law sums over all unmeasured labels and all terminal branch histories as in [[def-qa-finite-branch-output-law]].

The **query count of a branch** is the number of query nodes on its root-to-terminal path. The algorithm makes at most $T$ queries when every such path contains at most $T$ query nodes. A local bit-query algorithm has **no direct input access**: there is no input register containing $x$, no $x$-dependent non-oracle operation or initial state, and no $x$-dependent terminal predicate. Thus $x$ enters only through the stated bit oracle. This is the oracle-only specialization used for the QA15 polynomial-method results.


## Remarks

The general encoded-input model in [[def-qa-quantum-query-algorithm]] permits direct input access. The specialization here forbids using it: to represent a local algorithm in that model, append the encoded input $|x\rangle$ as an untouched spectator to its all-zero working register, let every operation act as the identity on that spectator, and make the output predicate independent of it. At every history the spectator remains a trace-one basis projector tensored with the local branch operator, so summing over it in the terminal law leaves the local output probabilities unchanged. The number of oracle calls is unchanged. The polynomial-method claims concern the working-register algorithm specified above; they make no lower-bound claim for general algorithms allowed to read the encoded input.
