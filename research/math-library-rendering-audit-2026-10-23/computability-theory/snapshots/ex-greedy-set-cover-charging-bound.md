---
id: ex-greedy-set-cover-charging-bound
kind: example
title: "A four-element greedy set-cover charge calculation"
status: published
origin: pipeline
deps:
  - def-greedy-set-cover
  - def-harmonic-number-for-set-cover-analysis
  - lem-greedy-set-cover-charging-bound
  - thm-greedy-set-cover-is-an-h-n-approximation
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §1.6 Algorithm 1.2 and Theorem 1.11, printed pp. 25–26"
      url: "https://designofapproxalgs.com/book.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Take $U=\{1,2,3,4\}$, $S_1=\{1,2\}$ of cost $2$, $S_2=\{3,4\}$ of cost $2$,
and $S_3=U$ of cost $5$. Greedy chooses $S_1$ then $S_2$ (input-order tie),
charges each element $1$, and costs $4=\mathrm{OPT}$. The pointwise bounds
$\mathrm{OPT}/4$, $\mathrm{OPT}/3$, $\mathrm{OPT}/2$, $\mathrm{OPT}$ are
conservative: the actual charges satisfy them with equality only at the first
index, and the correct uncovered count must be used at each round.

## Facts & Assumptions

**Given:** The weighted set-cover instance with universe $U=\{1,2,3,4\}$, listed sets $S_1=\{1,2\}$, $S_2=\{3,4\}$, $S_3=U$ of costs $2,2,5$, and the weighted greedy algorithm run in the listed order.

[F1] The greedy algorithm chooses a listed set of positive newly covered count minimizing cost divided by that count, ties going to the smallest input index, and charges every newly covered element that same ratio; the total cost of the chosen cover is the sum of all charges. ([[def-greedy-set-cover]])

[F2] With $r\ge1$ elements uncovered before a step, the chosen price is at most $\mathrm{OPT}/r$, and the $j$-th element in first-coverage order receives charge at most $\mathrm{OPT}/(n-j+1)$ for a universe of size $n$. ([[lem-greedy-set-cover-charging-bound]])

[F3] For this instance the greedy cover has total cost at most $H_n\,\mathrm{OPT}$ with $H_n=\sum_{j=1}^{n}1/j$ and $H_0=0$. ([[thm-greedy-set-cover-is-an-h-n-approximation]], [[def-harmonic-number-for-set-cover-analysis]])

## Verification

**Proof technique:** direct.

1.1 The cover $\{S_1,S_2\}$ has cost $2+2=4$. Every cover containing $S_3$ costs at least $5$, since costs are nonnegative; every cover not containing $S_3$ must contain $S_1$ to cover element $1$ and $S_2$ to cover element $3$, hence costs at least $4$. Therefore the minimum cover cost is $\mathrm{OPT}=4$. [F1, given, algebra]

2.1 Initially all four elements are uncovered, so $r=4$ and the ratios are $2/2=1$ for $S_1$, $2/2=1$ for $S_2$ and $5/4$ for $S_3$; the minimum $1$ is attained by both $S_1$ and $S_2$, and the input-order tie rule selects $S_1$, which charges $2/2=1$ to each of the elements $1$ and $2$. With $r=2$ elements $\{3,4\}$ uncovered, the ratios are $2/2=1$ for $S_2$ and $5/2$ for $S_3$; the algorithm selects $S_2$ and charges $1$ to each of $3$ and $4$. The uncovered set is then empty, so the algorithm stops with cover $\{S_1,S_2\}$ of total cost $4=\mathrm{OPT}$. [F1, step 1.1, algebra]

3.1 At the first round $r=4$ and the chosen price $1$ satisfies $1\le\mathrm{OPT}/4=1$; at the second round $r=2$ and $1\le\mathrm{OPT}/2=2$. Ordering the elements by first coverage, ties by input order, gives $1,2,3,4$, so the four charges are all $1$ and satisfy $1\le\mathrm{OPT}/(4-j+1)$ for $j=1,2,3,4$, namely $1\le4/4$, $1\le4/3$, $1\le4/2$, $1\le4/1$; the first of these is an equality and the other three are strict. The sum of the charges is $4\le H_4\,\mathrm{OPT}=(25/12)\cdot4=25/3$ by [F3]. [F2, F3, step 2.1, algebra]

4.1 Thus the total greedy cost here equals the optimum $4$, the pointwise charge bound of [F2] holds at each element with the remaining count actually in force, and the harmonic bound $H_4\,\mathrm{OPT}=25/3$ is strictly larger than both the greedy cost and the optimum; the example also shows the two bound forms at work: the per-round bound $\mathrm{OPT}/r$ uses the remaining count $r$ of that round, while the per-element bound $\mathrm{OPT}/(n-j+1)$ is the index-based consequence. [F2, step 3.1, algebra] ∎
