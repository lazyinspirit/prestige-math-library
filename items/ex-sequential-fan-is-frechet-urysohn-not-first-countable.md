---
id: ex-sequential-fan-is-frechet-urysohn-not-first-countable
kind: example
title: "The sequential fan is Fréchet–Urysohn and not first countable"
status: published
origin: session
deps: [def-frechet-urysohn-and-sequential-spaces, def-first-countable-top, def-topology-basis-subbasis, thm-recursion, lem-finite-set-has-max, thm-well-ordering-principle]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Sequential fan (nLab)"
      url: "https://ncatlab.org/nlab/show/sequential+fan"
pipeline_run: null
---

## Example

Let $S_\omega=(\mathbb N\times\mathbb N)\cup\{\infty\}$, with all $(n,m)$ isolated. A neighbourhood of $\infty$ contains $\infty$ and, for every $n$, all but finitely many $(n,m)$ on the $n$-th spoke. This is the sequential fan. It is Fréchet–Urysohn but not first countable.

## Facts & Assumptions

**Given:** The sequential fan and a subset $A\subseteq S_\omega$.

[A1] A space is Fréchet–Urysohn when closure points are limits of sequences from the set, and first countability means a countable local base ([[def-frechet-urysohn-and-sequential-spaces]], [[def-first-countable-top]]).

[L1] Every nonempty finite subset of $\mathbb N$ has a maximum, every nonempty subset of $\mathbb N$ has a least member, and recursion defines sequences from uniquely specified successive terms ([[lem-finite-set-has-max]], [[thm-well-ordering-principle]], [[thm-recursion]]).


## Verification

**Proof technique:** constructive.

1.1 Suppose $\infty\in\overline A$. If every spoke met $A$ only finitely, define $$ f(n)= \begin{cases} 0,&\{m:(n,m)\in A\}=\varnothing,\\ 1+\max\{m:(n,m)\in A\},&\text{otherwise}. \end{cases} $$ This is a canonically defined function by [L1], and the neighbourhood containing on spoke $n$ exactly the points $(n,m)$ with $m\ge f(n)$ misses $A$, a contradiction. Hence one spoke meets $A$ infinitely. [A1, L1, construct]

1.2 Suppose $(B_k)$ were a countable neighbourhood base at $\infty$. For each $k,n$, let $f_k(n)$ be the least threshold such that $(n,m)\in B_k$ for every $m\ge f_k(n)$; it exists and is unique by [L1]. Form the neighbourhood whose threshold on spoke $k$ is $g(k)=f_k(k)+1$. [A1, L1, construct]

2.1 On the infinite spoke supplied by step 1.1, recursion and least elements from [L1] list the second coordinates increasingly. The resulting sequence in $A$ is eventually beyond every threshold on that spoke, hence converges to $\infty$. Isolated closure points already lie in $A$, so $S_\omega$ is Fréchet–Urysohn. [step 1.1, A1, L1]

2.2 The point $(k,f_k(k))$ lies in $B_k$ but not in this neighbourhood, so no $B_k$ is contained in it. This contradicts the base property. [step 1.2, A1]

3.1 Therefore the sequential fan is Fréchet–Urysohn and not first countable. [step 2.1, step 2.2, discharge-construct] ∎
