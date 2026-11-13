---
title: General amplification for signed optimization landscapes
status: published
research_item: op-expander-sync-signed-landscape-question
dependency_level: 11
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 39, Section 7, paragraph on Burer–Monteiro landscapes; PDF p. 8,
        Theorem 1.10
      statement: The authors ask whether their techniques generalize to
        statistical-inference landscapes with signed adjacency matrices and
        whether the newer line of work can recover a result as general as their
        Theorem 1.10.
      hypotheses: The question is a research direction, not a specified theorem for
        every signed matrix. Theorem 1.10 concerns an unsigned graph satisfying
        its two-sided spectral expansion and numerical hypotheses.
      reading_limits: The Section 7 paragraph and the extracted theorem formulation
        were inspected for attribution. The article is not used as proof of the
        question or of a prerequisite.
    - title: Nonconvex landscapes for Z₂ synchronization and graph clustering are
        benign near exact recovery thresholds
      url: https://arxiv.org/abs/2407.13407
      locator: Abstract
      statement: For the models studied, the authors report asymptotically benign
        nonconvex landscapes near previously established exact-recovery
        thresholds, approachable to arbitrary precision with a sufficiently
        large finite rank parameter.
      hypotheses: The result is model-specific and asymptotic in problem size; the
        rank must be sufficiently large for the desired precision.
      reading_limits: Only the abstract was consulted for this contextual status
        statement; the proofs, full hypotheses and subsequent literature were
        not checked.
---

PDF p. 39: ` Section 7, paragraph on Burer–Monteiro landscapes `

## Prerequisites

- [def-expander-prereq-vector-spin-landscapes](item-def-expander-prereq-vector-spin-landscapes)
- [thm-expander-sync-thm-1-10](item-thm-expander-sync-thm-1-10)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)
- [` Nonconvex landscapes for Z₂ synchronization and graph clustering are benign near exact recovery thresholds · Abstract `](https://arxiv.org/abs/2407.13407)


## Open problem

Can the expansion and amplification techniques used for synchronization be generalized to control optimization landscapes arising in statistical inference when the adjacency matrix has signed entries? In particular, can such techniques address Burer–Monteiro relaxations for community detection, and can the newer line of work described by the authors recover a result as general as their Theorem 1.10?

For a concrete formulation of the signed landscape, let $B$ be a real symmetric $n\times n$ matrix, possibly with negative entries, and let $Y\in\mathbb R^{n\times r}$ have unit-length rows $u_i$. One considers the objective $F_B(Y)=\operatorname{Tr}(Y^TBY)=\sum_{i,j}B_{ij}u_i\cdot u_j$ on these configurations. The matrix $X=YY^T$ is their Gram matrix, with $X_{ij}=u_i\cdot u_j$; using such a factor to parametrize a positive-semidefinite matrix with diagonal entries one is the Burer–Monteiro factorization, with rank at most $r$. A landscape describes the objective’s local extrema and critical points on the feasible configurations. Community detection is the inference of groups of vertices from graph data; the exact statistical model, desired landscape conclusion, rank and signed spectral hypotheses must be specified in any proposed theorem.

The comparison theorem gives a sufficient two-sided spectral expansion criterion for global synchronization of an unsigned graph. Global synchronization means that, outside a phase-measurable set of phase-volume zero, the trajectory from every initial phase configuration converges to a common phase in the rotating frame of the homogeneous Kuramoto system; the limiting common phase may depend on the initial configuration. The local supplier states the criterion under countable choice and positive reference degree. A signed analogue is not asserted by that theorem.

## Open problem references

[def-expander-prereq-vector-spin-landscapes](item-def-expander-prereq-vector-spin-landscapes)

[thm-expander-sync-thm-1-10](item-thm-expander-sync-thm-1-10)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)

## Status

The question remains unresolved in this item as of 2026-11-14; no solution or exhaustive current literature assessment is claimed. On PDF page 39, the article identifies its repeated indirect use of nonnegative adjacency entries as an obstacle. It reports higher-rank progress by Abdalla, Bandeira, Boumal and McRae using different optimization tools; it also describes rank reduction by Rakoto Endor and Waldspurger and subsequent work by McRae. The article says it is unclear whether that newer line recovers a result as general as Theorem 1.10.

The abstract of McRae, Abdalla, Bandeira and Boumal reports model-specific asymptotically benign landscapes near exact-recovery thresholds when the finite rank is sufficiently large. This is contextual partial progress, not a solution of the general question stated above. No proof of that result was examined here.

## Source notes

The question and the article’s description of the obstacle and subsequent progress are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 39, Section 7. The contextual partial result is described in the abstract of [Nonconvex landscapes for Z₂ synchronization and graph clustering are benign near exact recovery thresholds](https://arxiv.org/abs/2407.13407). Neither citation proves a general signed analogue.
