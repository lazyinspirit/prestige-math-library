---
title: Counts of vertices of each degree
status: draft
research_item: def-expander-sync-degree-counts
dependency_level: 2
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 35, Section 6.2 opening
      statement: The article defines X_k, X_{≤k} and X_{≥k} as vertex degree counts
        and f_k as the probability that a Bin(n−1,p) variable equals k.
      hypotheses: G(n,p) is the random graph under discussion, and k is a degree threshold.
      reading_limits: The opening of Section 6.2 was inspected in the supplied
        extracted article text. This reference attributes the notation; it is
        not used as a proof.
---

PDF p. 35: ` Section 6.2 opening `

## Prerequisites

- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)
- [math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)


## Definition

Let $n\ge 1$ be an integer, $p\in[0,1]$, and $G(n,p)$ be the random simple graph on $[n]=\{1,\ldots,n\}$ in which distinct possible edges occur independently with probability $p$. For a vertex $v$, its degree $d(v)$ is the number of vertices adjacent to it. For each integer $k$, define $X_k=\sum_{v=1}^n\mathbf1_{\{d(v)=k\}}$, $X_{\le k}=\sum_{v=1}^n\mathbf1_{\{d(v)\le k\}}$, and $X_{\ge k}=\sum_{v=1}^n\mathbf1_{\{d(v)\ge k\}}$. Here an indicator is one when its displayed event occurs and zero otherwise. Thus these variables count vertices of degree exactly $k$, at most $k$, and at least $k$, respectively.

Put $f_k=\mathbb P(\operatorname{Bin}(n-1,p)=k)$, where $\operatorname{Bin}(n-1,p)$ denotes the law of the sum of $n-1$ independent Bernoulli$(p)$ variables; each such variable is one with probability $p$ and zero with probability $1-p$. When $n=1$, the sum is zero.

## Definition references

[def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)

[math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)

## Facts & Assumptions

**Given:** An integer $n\ge1$, $p\in[0,1]$, and the random graph and integer threshold $k$ in the definition.

**Goal:** Verify that the counts and $f_k$ are well defined.

[F1] The law of $G(n,p)$ is a probability law on the finite set of simple graphs on $[n]$ ([def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)). The degree of a vertex is the finite row sum of its adjacency matrix ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)).

[F2] An event indicator is one on its event and zero otherwise ([math:def-indicator-random-variable](https://alphabetamath.cc/item/def-indicator-random-variable)).

[F3] The binomial$(n-1,p)$ law is the law of a sum of $n-1$ independent Bernoulli$(p)$ variables, with the empty sum equal to zero ([math:def-bernoulli-and-binomial-random-variables](https://alphabetamath.cc/item/def-bernoulli-and-binomial-random-variables)).

## Justification

**Given:** The data in Facts & Assumptions.

**Goal:** Establish that the displayed notation has the stated meaning.

1.1 By [F1], every graph outcome has a definite degree at each of its finitely many vertices. Each degree comparison therefore determines an event. By [F2], its indicator is defined and contributes one exactly for a vertex satisfying the comparison. The three finite sums consequently give the three stated counts on every outcome. [F1, F2]

2.1 Since $n-1$ is a nonnegative integer, [F3] defines the binomial law, including the empty-sum case. Its probability of the event that the sum equals $k$ is therefore a well-defined number $f_k$. Together with step 1.1 this establishes the notation. [given, F3, step 1.1] ∎





## Source notes

The degree-count and $f_k$ notation is attributed to the article, Section 6.2 opening. The justification above uses the stated mathematical suppliers.
