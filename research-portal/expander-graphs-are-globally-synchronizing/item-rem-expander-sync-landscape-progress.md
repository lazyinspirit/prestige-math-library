---
title: Reported progress on benign landscapes and an alternative synchronization proof
status: published
research_item: rem-expander-sync-landscape-progress
dependency_level: 12
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 39, Section 7, paragraph citing [38,44]
      statement: The article explains that its arguments repeatedly used nonnegative
        adjacency entries indirectly, obstructing extension to signed adjacency
        matrices; it describes a higher-rank result by McRae, Abdalla, Bandeira
        and Boumal, a near-optimal rank-reduction technique by Rakoto Endor and
        Waldspurger, and a subsequent combination by McRae yielding optimal
        estimates and an alternative proof of Theorem 1.2. It leaves unclear
        whether these techniques recover a general result like Theorem 1.10.
      hypotheses: The paragraph discusses generalization to statistical-inference
        landscapes, including community detection with signed adjacency
        matrices; it does not give the exact hypotheses or estimates of the
        cited results.
      reading_limits: The statistical-inference landscape paragraph on original PDF p.
        39 was read in extracted text and visually inspected. This reference
        attributes the article's report; it does not independently verify the
        reported theorems or their proofs.
---

PDF p. 39: ` Section 7, paragraph citing [38,44] `

## Prerequisites

- [thm-expander-sync-thm-1-2](item-thm-expander-sync-thm-1-2)
- [rem-expander-prereq-low-rank-progress-context](item-rem-expander-prereq-low-rank-progress-context)
- [def-expander-prereq-vector-spin-landscapes](item-def-expander-prereq-vector-spin-landscapes)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)
- [thm-expander-sync-thm-1-10](item-thm-expander-sync-thm-1-10)


## Statement

The article discusses extending its techniques to optimization landscapes in statistical inference, including a low-rank factorization used in community detection, where signed adjacency matrices introduce negative as well as nonnegative entries. The article explains that its arguments repeatedly used nonnegativity of adjacency entries indirectly, which creates an obstacle to this extension to signed adjacency matrices. A landscape describes an objective on its feasible configurations, including its local extrema and critical points. In a vector-spin factorization, the configurations are unit vectors arranged as the rows of a matrix $Y$, and their pairwise inner products form the Gram matrix $YY^T$; the number of columns of $Y$ bounds its rank.

The article reports that McRae, Abdalla, Bandeira and Boumal settled a higher-rank version using optimization tools; that Rakoto Endor and Waldspurger proposed a dual-certificate technique to reduce the rank with near-optimal estimates; and that McRae combined those techniques to obtain optimal estimates and an alternative proof of Theorem 1.2. The paragraph does not state the exact estimates or their hypotheses. It also says that whether this line of work can recover a general result like Theorem 1.10 is unclear.

Here Theorem 1.10 is the general two-sided spectral sufficient criterion for global synchrony, covering nonregular as well as regular graphs under its stated spectral and numerical hypotheses. Its local formulation assumes countable choice and a positive reference degree.

Here Theorem 1.2 is the article's Erdős–Rényi synchronization result: for every fixed $\varepsilon>0$, if $p\ge(1+\varepsilon)\log n/n$ eventually, a graph from $G(n,p)$ is globally synchronizing with probability tending to one as $n\to\infty$. The cited local formulation assumes countable choice. In $G(n,p)$ each of the possible edges between distinct vertices is independently present with probability $p$; globally synchronizing means that the rotating-frame Kuramoto trajectory from a uniformly random initial phase configuration converges to a fully synchronized state with probability one.

## Statement references

[def-expander-prereq-vector-spin-landscapes](item-def-expander-prereq-vector-spin-landscapes)

[rem-expander-prereq-low-rank-progress-context](item-rem-expander-prereq-low-rank-progress-context)

[thm-expander-sync-thm-1-2](item-thm-expander-sync-thm-1-2)

[thm-expander-sync-thm-1-10](item-thm-expander-sync-thm-1-10)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)

[def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)

## Remarks

The independent progress-context supplier records the underlying papers only at abstract level: it describes the specified models and the reported rank and conditioning results, without checking their full hypotheses or proofs. In particular, that supplier does not establish the identification of McRae's result with Theorem 1.2. The alternative-proof assertion above remains an attribution to the article, not a locally reconstructed proof or an independently verified transfer of hypotheses. The article does not specify the dual certificate or the metric in which the estimates are near-optimal in this paragraph.
