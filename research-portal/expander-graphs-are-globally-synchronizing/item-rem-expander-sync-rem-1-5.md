---
title: Analytic versus numerical regular-expander bounds — Remark 1.5
status: draft
research_item: rem-expander-sync-rem-1-5
dependency_level: 11
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 7, Remark 1.5; p. 29, paragraph following the numerical table
      statement: The article contrasts the numerical regular-expander bound alpha at
        most 0.0816 with the weaker bound alpha at most 0.0068 obtained from
        Theorem 1.10, and states that applying that theorem gives degree at
        least 85730 for Ramanujan graphs.
      hypotheses: The comparison concerns regular adjacency expanders and the
        article's Ramanujan convention.
      reading_limits: The supplied article text at the cited passages was inspected
        for attribution. The article is not used as proof of the local
        deductions or the rational certificate below.
---

PDF p. 7: ` Remark 1.5 `; PDF p. 29: ` Section 5, paragraph following the numerical table `

## Prerequisites

- [thm-expander-sync-thm-1-10](item-thm-expander-sync-thm-1-10)
- [prop-expander-sync-regular-two-sided](item-prop-expander-sync-regular-two-sided)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-ramanujan](item-def-expander-sync-ramanujan)
- [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-real-exponential-function-and-e](https://alphabetamath.cc/item/def-real-exponential-function-and-e)
- [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm)
- [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing)


## Statement

Assume countable choice: every countable family of nonempty sets has a choice function. Let $G=(V,E)$ be a finite undirected graph with $n=|V|>0$ vertices, at most one edge between each pair, and self-loops allowed. Its binary symmetric adjacency matrix $A$ has $A_{xy}=1$ when $x$ and $y$ are adjacent and $0$ otherwise; a diagonal entry records a self-loop. Assume $G$ is $d$-regular with $d>0$: every row sum $\sum_{y\in V}A_{xy}$ equals $d$, so a loop contributes once to its vertex degree. Write $J$ for the all-ones matrix. An $(n,d,\alpha)$-expander satisfies $\|A-(d/n)J\|\le\alpha d$, in the Euclidean operator norm. The graph is globally synchronizing if, for phase-volume almost every initial state of the homogeneous Kuramoto system, the rotating-frame trajectory converges to a state in which all phases agree.

If $G$ is an $(n,d,\alpha)$-expander with $\alpha\le0.0068$, then it is globally synchronizing. In the article's convention, a $d$-regular Ramanujan graph is an $(n,d,2\sqrt{d-1}/d)$-expander; it is globally synchronizing when $d\ge85730$.

The article contrasts the $0.0068$ consequence of Theorem 1.10 with its stronger $0.0816$ regular-expander bound, whose proof uses numerical computations. The degree conclusion follows by applying Theorem 1.10 directly at a slightly larger parameter, not by asserting that $2\sqrt{d-1}/d\le0.0068$ at $d=85730$.

## Statement references

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)

[def-expander-sync-ramanujan](item-def-expander-sync-ramanujan)

[def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)

## Facts & Assumptions

[F1] A $d$-regular $(n,d,a)$-expander is an $(n,d,a,-a,a)$-expander ([prop-expander-sync-regular-two-sided](item-prop-expander-sync-regular-two-sided)). The adjacency predicate remains true if its nonnegative parameter is enlarged ([def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)).

[F2] Under countable choice, Theorem 1.10 makes an $(n,d,a,c^-,c^+)$-expander globally synchronizing when $d>0$, $c^->-1$, $0<a\le1/5$, and $\frac{32a(1+4c^+-3c^-)}{(1+c^-)^2}\log\!\left(\frac{1+c^++a}{2a}\right)<1$ ([thm-expander-sync-thm-1-10](item-thm-expander-sync-thm-1-10), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F3] For real $t$, $\exp(t)=\sum_{k=0}^{\infty}t^k/k!$; $\log$ is its inverse on positive reals, and $\exp$ is strictly increasing ([math:def-real-exponential-function-and-e](https://alphabetamath.cc/item/def-real-exponential-function-and-e), [math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm), [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing)).

## Proof

**Given:** The graph and hypotheses in the Statement, with countable choice.

**Goal:** Establish the two consequences of Theorem 1.10 and distinguish the parameter calculations.

1.1 Put $b=85383/12500000$ and $t=107669/25000$. Exact rational arithmetic gives $0.0068<b<1/5$, $\sum_{k=0}^{20}t^k/k!>(1+2b)/(2b)$, and $\frac{32b(1+7b)}{(1-b)^2}t=\frac{481633281478542348}{481633485177153125}<1$. All terms after the twentieth in the exponential series are positive, so [F3] gives $\log((1+2b)/(2b))<t$. Hence $\frac{32b(1+7b)}{(1-b)^2}\log((1+2b)/(2b))<1$. [F3, algebra]

2.1 If the graph is an $(n,d,\alpha)$-expander with $\alpha\le0.0068$, its norm inequality and $d>0$ force $\alpha\ge0$; enlargement makes it an $(n,d,b)$-expander. By [F1] it is an $(n,d,b,-b,b)$-expander. The hypotheses of [F2] hold: $d>0$, $-b>-1$, $0<b<1/5$, and the numerical expression is the one bounded in step 1.1. Thus the graph is globally synchronizing. [given, F1, F2, step 1.1, algebra]

3.1 Let $D=85730$ and $d\ge D$. Since $d$ and $D$ are positive integers and $D\ge2$, $(d-1)/d^2\le(D-1)/D^2$: after multiplying by the positive denominators, the difference is $(d-D)((D-1)d-D)\ge0$. Also $b^2D^2-4(D-1)=854109194681/1562500000000>0$. Consequently $2\sqrt{d-1}/d<b$. The Ramanujan definition therefore supplies an $(n,d,b)$-expander, and the same application of [F1] and [F2] as in step 2.1 gives global synchrony. At $d=D$, the separate inequality $25000000(D-1)>289D^2$ shows $2\sqrt{D-1}/D>17/2500=0.0068$, explaining why the degree conclusion uses the direct application. [given, F1, F2, step 1.1, algebra] ∎

## Source notes

The comparison of the numerical and analytic bounds and the degree threshold are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), Remark 1.5 and the opening of Section 5. The proof above is a local application of the stated suppliers; the article's $0.0816$ proof is mentioned for context and is not a premise of this deduction.
