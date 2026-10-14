---
id: lem-finite-multiset-randomized-rank-is-uniform
kind: lemma
title: "Tied upper ranks on a finite multiset"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-independent-random-elements
  - def-random-element-and-real-random-variable
  - def-uniform-finite-probability-space
  - lem-finite-set-has-max
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jesse Hemerik and Jelle Goeman, Exact testing with random permutations, randomized p-value result"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6405018/"
---

## Statement

Let $a_1,\ldots,a_m\in\mathbb R$ with $m\ge1$. Let $J$ be uniform on $\{1,\ldots,m\}$ and let $U$ be independent of $J$ and uniform on $[0,1]$. Set
$$R_0:=\frac{\#\{i:a_i\ge a_J\}}{m},\qquad R_U:=\frac{\#\{i:a_i>a_J\}+U\#\{i:a_i=a_J\}}{m}.$$
Then $R_U$ is uniform on $[0,1]$, while $R_0$ is superuniform: $P(R_0\le u)\le u$ for every $u\in[0,1]$.

## Facts & Assumptions

**Given:** A nonempty finite list of real numbers, a uniform random index $J$, and an independent uniform variable $U$.

[F1] A uniform law on a nonempty finite set assigns equal weight $1/m$ to each point. [[def-uniform-finite-probability-space]]

[F2] Every nonempty finite list of real values has a maximum; repeatedly removing all indices at that maximum sorts the distinct values. [[lem-finite-set-has-max]]

[F3] The tie breaker is independent of the selected index. [[def-independent-random-elements]]

[A1] $U$ has the uniform Borel law on $[0,1]$, so its probability on an interval is that interval's length.

## Proof

1.1 Starting from the given list, repeatedly take the maximum of the remaining entries and remove every index carrying that value. By [F2] each nonempty remaining list has a maximum, and each iteration removes at least one of the original $m$ indices, so the process ends after at most $m$ iterations. It produces distinct values $b_1>b_2>\cdots>b_k$ with block sizes $r_j$. Put $c_j:=\sum_{\ell<j}r_\ell$, so $\sum_jr_j=m$. By [F1], the event that $a_J=b_j$ has probability $r_j/m$. On that event, $R_0=(c_j+r_j)/m$ and, by [A1] and [F3], $R_U=(c_j+r_jU)/m$, uniform on the interval $I_j=[c_j/m,(c_j+r_j)/m]$ of length $r_j/m$. [F1, F2, F3, A1, given, construct]

2.1 By step 1.1, the intervals $I_j$ are consecutive, begin at $0$, and end at $1$. Conditional on $a_J=b_j$, $R_U=(c_j+r_jU)/m$, so for $u\in[0,1]$ its conditional CDF is $0$ below the left endpoint, $(mu-c_j)/r_j$ between the endpoints, and $1$ above the right endpoint, by [A1]. Multiplying each conditional CDF contribution by $P(a_J=b_j)=r_j/m$ gives the length of $I_j\cap[0,u]$. These lengths sum to $u$ because the intervals partition $[0,1]$ up to shared endpoints. Hence $P(R_U\le u)=u$ for every $u\in[0,1]$, so $R_U$ is uniform. [A1, step 1.1, algebra]

3.1 For $u\in[0,1]$, $P(R_0\le u)$ is the sum of $r_j/m$ over those blocks whose right endpoint $(c_j+r_j)/m$ is at most $u$. These blocks form an initial segment; if the last is $j$, the sum telescopes to $(c_j+r_j)/m\le u$, and if there is no such block the sum is zero. Hence $P(R_0\le u)\le u$. [step 1.1, step 2.1, algebra] ∎
