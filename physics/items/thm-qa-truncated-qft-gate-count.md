---
id: thm-qa-truncated-qft-gate-count
kind: theorem
title: Truncated QFT ideal gate count
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps: [alg-qa-truncated-binary-qft-circuit, def-qa-qft-gate-cost-model, lem-qa-swap-is-three-cnot-circuit, thm-qa-truncated-qft-operator-norm-error]
axiom_use: "No choice axiom is used; the gate loops and counts are finite."
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Statement

For $n\ge1$ and integer $m\ge1$, put $\widetilde m=\min\{m,n\}$. The truncated binary QFT uses $n$ Hadamards, $\sum_{s=2}^{\widetilde m}(n-s+1)$ controlled phases, $\lfloor n/2\rfloor$ SWAP gates and no ancillas. Its ideal gate count is therefore

$$n+\sum_{s=2}^{\widetilde m}(n-s+1)+\lfloor n/2\rfloor=O(n\widetilde m+n).$$

For fixed $c>0$, if $n\ge2$, $n^{-c}\le\varepsilon<1$, and $m=\min\{n,\lceil\log_2(2\pi n/\varepsilon)\rceil\}$, then $\widetilde m=O_c(\log n)$ and this count is $O_c(n\log n)$ ideal gates. Expanding the reversal replaces each SWAP by three exact CNOTs; no finite-set synthesis count is asserted here.

## Facts & Assumptions

**Given:** The truncated circuit with $n\ge1$ and integer cutoff $m\ge1$.

[F1] The truncated circuit retains every Hadamard, every controlled phase with $2\le s\le m$, every final reversal SWAP, and no ancillas ([[alg-qa-truncated-binary-qft-circuit]]).

[F2] Each retained Hadamard, controlled phase and SWAP has ideal cost one; a SWAP may instead be expanded to three exact CNOTs ([[def-qa-qft-gate-cost-model]]).

[F3] Each two-wire SWAP equals the exact three-CNOT sequence ([[lem-qa-swap-is-three-cnot-circuit]]).

[F4] For $0<\varepsilon<1$, choosing $m=\min\{n,\lceil\log_2(2\pi n/\varepsilon)\rceil\}$ gives the stated truncation error at most $\varepsilon$ ([[thm-qa-truncated-qft-operator-norm-error]]).

## Proof

**Proof technique:** direct.

**Given:** The circuit and counting convention above.

1.1 For each target $q_j$, the exact circuit has $j$ controlled phases. A retained denominator level $s$ corresponds to pairs with $j-i+1=s$, namely $i=0,\ldots,n-s$, and so has $n-s+1$ gates. The cutoff retains precisely $s=2,\ldots,\widetilde m$. If $m\ge n$, then $\widetilde m=n$ and every phase is retained. [F1, algebra]

2.1 There are $n$ target wires, $\lfloor n/2\rfloor$ final swaps, and no other gates or ancillas by [F1]. Summing their costs by [F2] gives the formula. Since $\sum_{s=2}^{\widetilde m}(n-s+1)\le n(\widetilde m-1)$ and $\lfloor n/2\rfloor\le n/2$, the total is at most $n\widetilde m+n/2$, hence $O(n\widetilde m+n)$. Under the cutoff in [F4] and $\varepsilon\ge n^{-c}$, $m\le\lceil\log_2(2\pi n^{c+1})\rceil=O_c(\log n)$, so $\widetilde m=O_c(\log n)$. The CNOT expansion is exact by [F3] and changes only the final reversal term; it does not compile any rotation. [F1, F2, F3, F4, step 1.1, algebra] ∎
