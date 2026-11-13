---
title: Synchronization for nonuniform and geometric random graph models
status: draft
research_item: op-expander-sync-other-random-graphs-question
dependency_level: 7
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 39, Section 7, second paragraph; PDF pp. 4 and 8, Theorems 1.2
        and 1.10
      statement: The authors suggest generalizing their results to other graph
        classes, including random graphs with non-uniform edge distribution or
        edges distributed according to an underlying geometric structure. Their
        results include a high-probability global-synchronization theorem for
        Erdős–Rényi graphs and a deterministic expander criterion.
      hypotheses: The question in Section 7 specifies neither a particular nonuniform
        or geometric graph law nor a proposed threshold. Theorem 1.2 assumes p
        at least (1+ε) log(n)/n for fixed ε>0; Theorem 1.10 has its stated
        expander hypotheses.
      reading_limits: The extracted article text at the cited question and theorem
        statements was inspected for formulation and attribution. No later
        literature search, proof review, or claim that every instance remains
        unsolved is made.
---

PDF p. 39: ` Section 7, second paragraph `

## Prerequisites

- [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)


## Open problem

Assume countable choice and use the article's finite undirected graph convention: a graph has a nonempty finite vertex set, at most one edge per vertex pair, and may have self-loops. A graph is globally synchronizing when, for the homogeneous Kuramoto system, the rotating-frame trajectory from a uniformly chosen initial phase state converges to a fully synchronized state with probability one; fully synchronized means that all phase coordinates agree.

Can the article's results be generalized to other random graph classes, including graphs with non-uniform edge distributions or edges distributed according to an underlying geometric structure? In particular, what hypotheses on such graph laws yield global synchronization with high probability as the number of vertices tends to infinity? Here a random graph law is a probability distribution on graphs of a specified order, and high probability means that the probability of the stated graph property tends to one. A non-uniform edge distribution allows the edge probabilities or joint edge law to vary with the vertex pairs; a geometric model may determine edges using positions of vertices in an underlying space and their geometric relationships.

## Open problem references

[def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)

## Status

In Section 7 of the 2026 article, the authors suggest these graph classes as possible generalizations and cite references [1, 16, 19, 31] as related work. They do not specify a particular graph law, generalization theorem, or threshold in that passage. The question is recorded at that level of generality; no solution or current status for every specific model is asserted here.

## Source notes

The question and the contextual description of the article's results are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), Section 7 and Theorems 1.2 and 1.10. The reference is attribution, not a proof of a proposed generalization.
