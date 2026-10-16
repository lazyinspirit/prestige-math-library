---
id: alg-qa-14-one-marked-search-with-verification
kind: algorithm
title: Fixed-one Grover search with candidate verification
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - def-qa-14-search-promise
  - def-qa-14-boolean-search-query-model
  - alg-qa-14-zero-completion-query-simulation
  - thm-qa-14-zero-completion-query-simulation-correct
  - alg-qa-11-grover-iterate
  - def-qa-standard-bit-query
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-elementary-circuit-resources
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
axiom_use: None; the procedure uses finite registers, a finite rational recurrence, and the declared query oracle.
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§7.2, printed pp.53–56 (PDF pp.65–68): Grover search and integer iteration."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§19.1, printed pp.87–89 (PDF pp.96–98): the unstructured-search query model and Grover upper bound."
---

## Definition

**Input:** An integer $N\ge1$, standard Boolean XOR-query access $O_x|q,b,w\rangle=|q,b\oplus x_{q+1},w\rangle$ on the ordered $N$-level address register of [[def-qa-14-boolean-search-query-model]], with $x\in P_N$ from [[def-qa-14-search-promise]], and no information about whether $x=0^N$ or $x=e_i$. Any auxiliary registers used by the procedure start in their declared clean states; the procedure returns all subroutine workspace clean before reuse or termination.

**Gate model:** Inherit the nonoracle model of [[alg-qa-11-grover-iterate]]: exact $H$ and $X$ are callable, with each occurrence charged as one elementary gate, including the $m$ Hadamards preparing the uniform address state and all response preparations. The exact reflection $R_s$ on the $M$ padded addresses is supplied either as an explicitly costed primitive or by a declared costed exact circuit over the selected alphabet. All preparation and reflection costs are counted separately from raw oracle queries.

**Output:** The symbol no and no candidate if verification fails; otherwise yes and a verified marked coordinate.

**Instructions:**

1. Set $m=\lceil\log_2N\rceil$, $M=2^m$, so $N\le M<2N$, and hard-code the schedule parameter $t_0=1$. This is a fixed schedule; it is not an assertion that the actual input has one mark.
2. Set $K=\lceil\sqrt M\rceil$ and $q=1-2/M$. Compute exactly $T_0(q)=1$, $T_1(q)=q$, and $T_{r+1}(q)=2qT_r(q)-T_{r-1}(q)$ for $1\le r<2K+1$. For $k=0,\ldots,K$, compute $p_k=(1-T_{2k+1}(q))/2$ and choose the least $k$ maximizing this finite list.
3. Prepare the uniform state on $M$ addresses and apply the Grover iterate of [[alg-qa-11-grover-iterate]] exactly $k$ times, implementing each padded bit query by [[alg-qa-14-zero-completion-query-simulation]]. Allocate the clean raw-address, comparison, and routing workspace required by each call; return it clean before the next call. The iterate's phase-kickback response is supplied in $| - \rangle$ as specified by that iterate.
4. Measure the padded address $j$. Prepare a fresh response bit in $|0\rangle$ and use [[alg-qa-14-zero-completion-query-simulation]] for the candidate-verification query, with its required clean workspace. Measure the response bit. If $j<N$ and this bit is $1$, output yes and original coordinate $j+1$. Otherwise output no and no candidate. Return all clean workspace to zero.

The schedule is defined on every input in $P_N$ and never receives an actual marked count. The recurrence and gate costs are classical/nonoracle costs; every simulated Grover or verification query uses one standard raw bit query.
