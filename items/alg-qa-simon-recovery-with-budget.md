---
id: alg-qa-simon-recovery-with-budget
kind: algorithm
title: "Budgeted Simon recovery with explicit failure branch"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - alg-qa-simon-one-sample
  - def-qa-simon-rank-process
  - alg-qa-f2-gaussian-elimination
  - def-qa-classical-bit-cost
justified_by: []
axiom_use: "No Choice is used; every loop is finitely capped and all pivot choices use a fixed order."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3 §§3.1-3.3, PDF pp.35-39: Simon promise, one-sample derivation, uniform s-perp law, rank growth, expected queries and classical lower-bound proof."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp.11-13 and §6.5, PDF pp.27-33: independent Simon sample derivation and finite-abelian HSP context."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp.33-37: Simon as a finite-abelian hidden-subgroup instance and Fourier sampling context."
---
## Definition

**Input:** A promised Simon oracle with $n\ge1$, output width $m\ge n-1$, and a supplied rational failure tolerance $\delta=a/b$ with positive binary integers $a<b$. Set $d=n-1$.

**Instructions:**

1. If $d=0$, return the unique nonzero one-bit string $1$ immediately, using zero queries.
2. Otherwise form $u=2db$ by binary shift-and-add multiplication, divide $u$ by $a$ using binary long division $u=ha+r$ with $0\le r<a$, and set $M=h$ if $r=0$ and $M=h+1$ otherwise. Start with an empty reduced row-echelon basis.
3. For at most $M$ trials, run [[alg-qa-simon-one-sample]] once. Reduce its row against the current pivot rows in increasing pivot-column order. Discard it if the residual row is zero. Otherwise insert it at its least nonzero coordinate as a new pivot, clear that pivot column from the old rows by XOR, and maintain the pivot order. Stop sampling as soon as the basis reaches rank $d$.
4. If the basis reaches rank $d$, form the $(n-1)\times n$ matrix of its rows, call [[alg-qa-f2-gaussian-elimination]], and output the returned vector. If all $M$ trials are used before rank $d$ is reached, return FAIL.

Every execution has at most $M$ oracle queries. Each sample uses $2n$ Hadamard gates and two finite measurements; no controlled or inverse query is used. Under the [[def-qa-classical-bit-cost]] model, classical basis maintenance costs $O(Mn^2)$ bit operations, the final row reduction costs $O(n^3)$, and computing $M$ by schoolbook integer arithmetic costs $O((B+\log n)^2)$ bit operations, where $B$ is the total binary input length of $a,b$. The total classical bit bound is therefore $O(Mn^2+n^3+(B+\log n)^2)$. The correctness and failure bound are proved in [[thm-qa-simon-recovery-correctness-and-query-bound]].
