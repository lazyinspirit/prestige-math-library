---
title: Erdős–Rényi random graph and high probability
status: draft
research_item: def-expander-sync-erdos-renyi
dependency_level: 1
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 4, Section 1 and footnote 4; PDF p. 30, Section 6
      statement: The article uses G(n,p) for a graph on n vertices whose possible
        edges are independently present with probability p, and uses high
        probability for probability tending to one as n tends to infinity.
      hypotheses: The random graph has n vertices and a common edge probability p;
        high probability concerns a sequence indexed by n tending to infinity.
      reading_limits: The indicated passages of the extracted article text were
        inspected for attribution; this reference is not used to justify the
        definition.
---

PDF p. 4: ` Section 1 random graph paragraph and footnote 4 `; PDF p. 30: ` Section 6, Erdős–Rényi random graph `

## Prerequisites

- [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)


## Definition

For $n\in\mathbb N$ and $p\in[0,1]$, the Erdős–Rényi random graph $G(n,p)$ is a random simple graph on the labelled vertex set $[n]=\{1,\ldots,n\}$. A simple graph has an edge set consisting of unordered pairs of distinct vertices, so it has neither loops nor repeated edges. For each of the $\binom n2$ possible pairs, the indicator of its presence is $1$ with probability $p$ and $0$ with probability $1-p$; these indicators are mutually independent, meaning that every finite joint assignment has probability equal to the product of its individual probabilities.

For a sequence $p_n\in[0,1]$, let $E_n$ be an event, meaning a set of possible graphs on $[n]$, under the law of $G(n,p_n)$. The events $E_n$ hold with high probability if $\mathbb P(E_n)\to1$ as $n\to\infty$: for every $\varepsilon>0$ there is an $N$ such that $\mathbb P(E_n)>1-\varepsilon$ whenever $n\ge N$. The edge probability may therefore vary with $n$.

## Justification

The finite product of Bernoulli edge spaces gives exactly the stated independent indicators, including at $p=0$ and $p=1$; its outcomes correspond uniquely to simple graphs on $[n]$. Thus the graph law is well defined by [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph). The probability of an event is the sum of the weights of its graph outcomes. The high-probability convention is the ordinary limit of these event probabilities, even though the probability spaces vary with $n$, as specified in [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers).

## Source attribution

The article uses these conventions in Section 1 and Section 6. Its citation records attribution, not a proof of the definition.
