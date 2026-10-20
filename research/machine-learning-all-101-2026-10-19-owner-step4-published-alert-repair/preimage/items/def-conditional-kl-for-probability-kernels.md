---
id: def-conditional-kl-for-probability-kernels
kind: definition
title: "Conditional KL for supplied probability kernels"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-kullback-leibler-divergence
  - def-measure-kernel-and-probability-kernel
  - def-standard-borel-space
  - thm-conditional-kl-is-measurable
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "AC is inherited from measurable-space KL and the countable determining-algebra interface used for standard-Borel kernels."
verification:
  precheck: n/a
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §5.3"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "Yury Polyanskiy and Yihong Wu, MIT 6.441 Information Theory, Chapter 2 §§2.2 and 2.6"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/184197ca5d5418da2415d37e929860b9_MIT6_441S16_chapter_2.pdf"
---

## Definition

Let $(Z,\mathcal Z)$ and $(E,\mathcal E)$ be standard-Borel spaces, let $\mu$ be a probability measure on $Z$, and let $K,L:Z\rightsquigarrow E$ be supplied probability kernels. Define their **conditional KL divergence with base $\mu$** by
$$D_\mu(K\|L):=\int_Z D(K(z,\cdot)\|L(z,\cdot))\,\mu(dz)\in[0,+\infty].$$
The integrand is measurable by [[thm-conditional-kl-is-measurable]], so this is a well-defined nonnegative extended integral. No absolute-continuity assumption is imposed on individual fibers; a singular fiber has divergence $+\infty$. Changing supplied kernel versions on a $\mu$-null set does not change the integral.

