---
title: Ramanujan and typical regular graphs synchronize for degree at least 600
status: draft
research_item: cor-expander-sync-cor-1-6
dependency_level: 11
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 1, Abstract; p. 7, Corollary 1.6 and proof; p. 28, Section 5
        opening
      statement: Every d-regular Ramanujan graph with d at least 600 is globally
        synchronizing; a uniformly random d-regular graph is globally
        synchronizing with high probability in the same degree range.
      hypotheses: Degree d at least 600; the random assertion is read at fixed d as
        the number of vertices tends to infinity.
      reading_limits: The extracted article text at the cited passages was inspected.
        This reference attributes the original claim; the proof below uses the
        declared mathematical suppliers.
---

PDF p. 1: ` Abstract `; PDF p. 7: ` Corollary 1.6 and its proof `; PDF p. 28: ` Section 5 opening `

## Prerequisites

- [def-expander-sync-ramanujan](item-def-expander-sync-ramanujan)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)
- [def-expander-sync-random-regular-model](item-def-expander-sync-random-regular-model)
- [thm-expander-sync-thm-1-4](item-thm-expander-sync-thm-1-4)
- [rem-expander-sync-friedman](item-rem-expander-sync-friedman)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume countable choice. Every $d$-regular Ramanujan graph with $d\ge600$ is globally synchronizing. For each fixed integer $d\ge600$, a uniformly random labelled simple $d$-regular graph is globally synchronizing with high probability as its number of vertices tends to infinity through feasible orders. In this range $2\sqrt{d-1}/d<0.0816$.

Here a graph is finite and undirected, with at most one edge between a pair of vertices; loops are allowed in the deterministic assertion and count once in degrees. Its adjacency matrix is $A$, its vertex count is $n>0$, and $J$ is the all-ones matrix. It is $d$-regular when each adjacency row sum is $d$, and it is Ramanujan in the article's convention when $\|A-(d/n)J\|_{\mathrm{op}}\le2\sqrt{d-1}$. The operator norm is induced by the Euclidean norm. Global synchrony means that, for phase-volume almost every initial state, the homogeneous Kuramoto trajectory in the rotating frame converges to a state with all phases equal.

In the random assertion, simple means no loops or repeated edges, the law is uniform over all labelled simple $d$-regular graphs on $\{1,\ldots,n\}$, and a feasible order is one for which this set is nonempty. With high probability means that the probability tends to one along feasible orders, with $d$ fixed.

## Statement references

[def-expander-sync-ramanujan](item-def-expander-sync-ramanujan)

[def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)

[def-expander-sync-random-regular-model](item-def-expander-sync-random-regular-model)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Facts & Assumptions

[F1] An $(n,d,\alpha)$-expander has $\|A-(d/n)J\|_{\mathrm{op}}\le\alpha d$. The stated Ramanujan convention gives this inequality with $\alpha=2\sqrt{d-1}/d$ ([def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander), [def-expander-sync-ramanujan](item-def-expander-sync-ramanujan)).

[F2] Under countable choice, every $d$-regular $(n,d,\alpha)$-expander with $d>0$ and $\alpha\le0.0816$ is globally synchronizing, including graphs with loops counted once in degrees ([thm-expander-sync-thm-1-4](item-thm-expander-sync-thm-1-4), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F3] For every fixed integer $d\ge3$ and fixed $\varepsilon>0$, a uniform labelled simple $d$-regular graph is, with high probability along feasible orders, an $(n,d,\alpha)$-expander for $\alpha=(2\sqrt{d-1}+\varepsilon)/d$ ([rem-expander-sync-friedman](item-rem-expander-sync-friedman), [def-expander-sync-random-regular-model](item-def-expander-sync-random-regular-model)).

## Proof

**Given:** Countable choice and an integer $d\ge600$; for the random assertion, $d$ remains fixed while feasible orders tend to infinity.

**Goal:** Prove the deterministic and high-probability synchronization assertions and the numerical inequality.

1.1 Since $d\ge600$, $(d-600)(599d-600)\ge0$. Expanding and dividing by $90000d^2>0$ gives $4(d-1)/d^2\le599/90000$. Moreover $599\cdot390625=233984375<234090000=2601\cdot90000$, so $599/90000<(51/625)^2=(0.0816)^2$. Both sides being nonnegative, $2\sqrt{d-1}/d<0.0816$. [given, algebra]

2.1 For a $d$-regular Ramanujan graph, [F1] gives the expander condition with $\alpha=2\sqrt{d-1}/d$. By step 1.1 this parameter is below $0.0816$, and $d>0$. Applying [F2] proves global synchrony. [F1, F2, step 1.1]

3.1 Set $\varepsilon=\tfrac d2(0.0816-2\sqrt{d-1}/d)$. By step 1.1 this is a fixed positive number, and $(2\sqrt{d-1}+\varepsilon)/d<0.0816$. By [F3], the corresponding expander event has probability tending to one. On that event [F2] gives global synchrony; therefore the probability of global synchrony also tends to one. This proves the random assertion. [F2, F3, step 1.1, algebra] ∎

## Source notes

The article's Corollary 1.6 and its proof state the two synchronization conclusions and use the threshold $0.0816$. The source reference is attribution; the argument above uses the declared suppliers.
