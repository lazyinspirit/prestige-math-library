---
id: thm-dp-postprocessing
kind: theorem
title: Differential privacy is preserved under randomized postprocessing
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-differential-privacy-and-adjacency
  - lem-dp-test-function-extension
  - def-composition-of-probability-kernels
  - lem-kernel-composition-is-well-defined-and-associative
  - def-measure-kernel-and-probability-kernel
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Statement

Let $\varepsilon\ge0$ and $0\le\delta\le1$. Let $K$ be an $(\varepsilon,\delta)$-differentially private probability kernel from databases to a measurable space $Y$, and let $L$ be a data-independent probability kernel from $Y$ to a measurable space $Z$. Then the composed kernel $KL$ is $(\varepsilon,\delta)$-differentially private.

## Statement references

[[def-differential-privacy-and-adjacency|The event inequality for probability-kernel mechanisms]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Proposition 2.1, printed p. 19.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §2.1, Lemma 2.1.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** An $(\varepsilon,\delta)$-differentially private probability kernel $K$ and a data-independent probability kernel $L$.

[F1] [[def-differential-privacy-and-adjacency|Differential privacy]] means $K(D,A)\le e^\varepsilon K(D',A)+\delta$ for every ordered neighboring pair and every measurable event.

[F2] [[def-measure-kernel-and-probability-kernel|Probability kernels]] have measurable event evaluations with probability-measure sections.

[F3] [[lem-dp-test-function-extension|Bounded-function extension]]: the one-sided event inequality for probability measures extends to every measurable $g:Y\to[0,1]$ with the same parameters.

[F4] [[def-composition-of-probability-kernels|Kernel composition]] is $(KL)(D,B)=\int_Y L(y,B)K(D,dy)$.

[F5] [[lem-kernel-composition-is-well-defined-and-associative|Kernel composition theorem]] ensures the displayed composition is a probability kernel.

## Proof

1.1 Fix ordered neighboring databases $D\sim D'$ and an event $B$ in the output sigma-algebra of $Z$. The function $g(y)=L(y,B)$ is measurable and takes values in $[0,1]$ by [F2]. [F1, F2, given, choose]

2.1 Apply [F3] to the event inequality for $K(D,\cdot)$ and $K(D',\cdot)$ with this $g$. Then [F4] identifies the two integrals with $(KL)(D,B)$ and $(KL)(D',B)$, giving $(KL)(D,B)\le e^\varepsilon(KL)(D',B)+\delta$. The pair and event were arbitrary, and [F5] makes $KL$ a probability kernel, so [F1] proves the claim. [F1, F3, F4, F5, step 1.1, algebra] ∎
