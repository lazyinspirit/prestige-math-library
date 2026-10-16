---
id: thm-qa-simon-recovery-correctness-and-query-bound
kind: theorem
title: "Simon recovery succeeds with probability at least 1-delta"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - alg-qa-simon-recovery-with-budget
  - def-qa-simon-rank-process
  - thm-qa-simon-rank-growth-probability
  - thm-qa-f2-gaussian-elimination-correct-and-cost
  - def-finite-probability-space-and-event
  - thm-geometric-series
  - def-qa-expected-query-cost
  - thm-markov-inequality
  - def-qa-classical-bit-cost
justified_by: []
proof_strategy: direct
axiom_use: "No Choice is used; almost-sure termination is derived from finite-prefix tail probabilities, with no measure on infinite histories."
provenance:
  statement: literature-derived
  proof: ai-altered
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
## Statement

Fix a Simon oracle with $n\ge1$, let $d=n-1$, and let $\delta\in\mathbb Q\cap(0,1)$. The unbounded rank-collection process terminates almost surely in the sense that its finite-prefix tail probability $\Pr(T>R)$ tends to zero as $R\to\infty$; its expected query cost, defined as the supremum over finite query prefixes, is at most $2d$. For the finite algorithm with $M=\lceil2d/\delta\rceil$, the probability of returning the hidden mask is at least $1-\delta$, and its worst-case query count is at most $M=O(n/\delta)$. For fixed constant $\delta$, the query count is $O(n)$. The finite algorithm's classical postprocessing has bit cost $O(Mn^2+n^3+(B+\log n)^2)$ when $\delta=a/b$ is supplied in binary with total numerator/denominator length $B$.

Here the tail probabilities are computed from the finite prefix experiments of the rank process. When $d\ge1$, the induced stopping-time law assigns mass $\Pr(T=t)=\Pr(T>t-1)-\Pr(T>t)$ to $t\ge1$ and mass $\lim_R\Pr(T>R)$ to $T=\infty$; the proof shows the latter is zero. When $d=0$, $T=0$ and the process is already complete. No measure on an infinite execution-history space is assumed.

## Facts & Assumptions
**Given:** A fixed promised Simon oracle, $n\ge1$, $d=n-1$, and a rational $\delta\in(0,1)$.

[F1] [[def-qa-simon-rank-process]]: samples are fresh and independent, one query is made per sample, and the process stops at rank $d$.

[F2] [[thm-qa-simon-rank-growth-probability]]: at every rank $k<d$, a new sample raises rank with probability $p_k\ge1/2$, and the finite-prefix expected waiting count at that rank is at most $2$.

[F3] [[def-qa-expected-query-cost]]: expected query cost is the supremum of the expectations of query counts on finite execution prefixes; query-indexed sample rounds are cofinal.

[F4] [[alg-qa-simon-recovery-with-budget]]: the cap is $M=\lceil2d/\delta\rceil$, rank $d$ returns a kernel solution, and a missing rank at the cap returns FAIL.

[F5] [[thm-qa-f2-gaussian-elimination-correct-and-cost]]: full-rank independent rows in $s^\perp$ yield the unique nonzero kernel vector $s$.

[F6] [[def-finite-probability-space-and-event]]: each finite-prefix experiment has a finite outcome set with nonnegative weights summing to one.

[F7] [[thm-markov-inequality]]: for a nonnegative variable on a finite probability space and threshold $a>0$, $\Pr(X\ge a)\le\mathbb E[X]/a$.

[F9] [[def-qa-classical-bit-cost]]: classical bit work is measured by transitions of the stated finite-alphabet Turing-machine model.

## Proof


1.1 If $d=0$, the unique nonzero element of $\mathbb F_2^1$ is $1$, so the budgeted algorithm returns the correct mask with zero queries. The rank process has already reached its target rank zero. [given, F1, F4, algebra]

1.2 Suppose $d\ge1$. For each finite horizon $R$, use the finite $R$-round experiment of [F1] and let $Q_R$ count the samples actually taken before reaching rank $d$, capped at $R$. Decompose $Q_R=\sum_{k<d}V_{k,R}$, where $V_{k,R}$ counts the trials spent at rank $k$ and is zero if that rank is not reached within the prefix. Condition on each finite history at the first time rank $k$ is reached, with $r\le R$ rounds remaining. If $r=0$, its remaining contribution is zero; if $r\ge1$, the rank-growth theorem [F2] gives expected truncated wait at most $2$ on that continuation. If rank $k$ is not reached, the contribution is zero. Summing over these disjoint first-arrival histories gives $\mathbb E[V_{k,R}]\le2$ for every $k<d$, hence $\mathbb E[Q_R]\le2d$. Since $Q_R$ is the query count on the finite $R$-round prefix, [F3] gives expected query cost at most $2d$. [given, F1, F2, F3, algebra]

2.1 Let $A_R$ be the event, in the finite $R$-round experiment, that the rank is still below $d$ after all $R$ samples. On $A_R$ the process has used all $R$ queries, so $Q_R=R$ and $R\Pr(A_R)\le\mathbb E[Q_R]\le2d$. Therefore $\Pr(T>R):=\Pr(A_R)\le2d/R$ for every $R\ge1$, which tends to zero. This tail argument uses only finite-prefix events and expectations. [given, F1, F2, step 1.2, F6, algebra]

2.2 In the finite $M$-sample experiment, failure is the event $A_M$ that rank remains below $d$ after all $M$ samples. On $A_M$, $Q_M=M$, so $\Pr(\text{FAIL})\le\Pr(Q_M\ge M)$. The variable $Q_M$ is nonnegative and bounded, and Markov's inequality [F7] gives $\Pr(\text{FAIL})\le\mathbb E[Q_M]/M\le2d/M\le\delta$. [given, F4, F6, F7, step 1.2, algebra]

3.1 For $d\ge1$, let $A_R$ be as in step 2.1, with $A_0$ the whole zero-round experiment. By consistency of finite-prefix probabilities, extending the $(t-1)$-round experiment to $t$ rounds partitions $A_{t-1}$ into histories that first reach rank $d$ at round $t$ and histories in $A_t$. Define the mass at $T=t$ to be $\Pr(A_{t-1})-\Pr(A_t)$; these masses are nonnegative. Their partial sums telescope to $1-\Pr(A_R)$, and step 2.1 makes the residual mass at infinity zero. The resulting countable masses sum to one. For $d=0$, step 1.1 gives $T=0$. Thus the process terminates almost surely without assuming a measure on infinite histories. [step 1.1, step 2.1, F4, F6, algebra]

4.1 If rank $d$ is reached, all collected rows are independent and lie in $s^\perp$ by [F1]–[F2]. The recovery routine therefore returns $s$ by [F5]. Combining this with step 2.2 proves success probability at least $1-\delta$. The finite cap makes at most $M$ sampling rounds. In each round, reducing an incoming row against at most $d$ pivot rows and clearing a new pivot from at most $d-1$ rows requires $O(n^2)$ bit operations; so basis maintenance costs $O(Mn^2)$. The final reduction costs $O(n^3)$ by [F5]. To compute $M$, the algorithm multiplies binary integers of total length $O(B+\log n)$ and performs long division on integers of at most that length; the schoolbook multiplication, comparisons, shifts, and long division each use $O((B+\log n)^2)$ bit operations. These counts use the finite-alphabet Turing-machine convention [F9], giving the stated postprocessing bound. [given, F1, F2, F4, F5, F9, step 2.2, algebra] ∎

