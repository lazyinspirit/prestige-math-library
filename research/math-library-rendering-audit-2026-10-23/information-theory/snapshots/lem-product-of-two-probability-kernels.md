---
id: lem-product-of-two-probability-kernels
kind: lemma
title: "The product of two probability kernels is a probability kernel"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-measure-kernel-and-probability-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-dynkin-pi-lambda
proof_strategy: direct
axiom_use: "No choice axiom is used: each finite product probability is uniquely determined by its rectangle values."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, MIT 6.441 Information Theory, Chapter 2 §§2.2 and 2.6"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/184197ca5d5418da2415d37e929860b9_MIT6_441S16_chapter_2.pdf"
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §5.3"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
---

## Statement

Let $(Z,\mathcal Z)$, $(E,\mathcal E)$, and $(F,\mathcal F)$ be measurable spaces, and let $K:Z\rightsquigarrow E$ and $L:Z\rightsquigarrow F$ be probability kernels. For each $z$, let $\Pi_z=K(z,\cdot)\otimes L(z,\cdot)$ be the finite product probability on $(E\times F,\mathcal E\otimes\mathcal F)$. Then $z\mapsto\Pi_z$ is a probability kernel.

## Facts & Assumptions

**Given:** The spaces and probability kernels in the Statement.

[F1] Every kernel section is a measure; each event evaluation is measurable, and probability-kernel sections have total mass one. [[def-measure-kernel-and-probability-kernel]]

[F2] For probability measures, the finite product measure exists uniquely and satisfies $(\mu\otimes\nu)(A\times B)=\mu(A)\nu(B)$. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[F3] Rectangles form a pi-system generating the product sigma-algebra, and a lambda-system containing them contains that sigma-algebra. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] [[thm-dynkin-pi-lambda]]

**Given:** The hypotheses in the Statement.

## Proof

1.1 For fixed $z$, [F2] gives the probability measure $\Pi_z$. [F2, given]
If $A\in\mathcal E$ and $B\in\mathcal F$, then
$$\Pi_z(A\times B)=K(z,A)L(z,B),$$
which is a measurable function of z by the two kernel assumptions in [F1]. Also $\Pi_z(E\times F)=1$ for every z. [F1, F2, F3, given]

2.1 Let $\mathcal D$ be the class of product-measurable $C\subseteq E\times F$ for which $z\mapsto\Pi_z(C)$ is measurable. Step 1.1 shows every rectangle belongs to $\mathcal D$, and the whole product does as well. If $C\in\mathcal D$, then $\Pi_z(C^c)=1-\Pi_z(C)$, so $C^c\in\mathcal D$. If $C_j$ are pairwise disjoint members, then $\Pi_z(\bigcup_j C_j)=\lim_n\sum_{j=1}^n\Pi_z(C_j)$ by countable additivity, a pointwise limit of measurable functions. Thus $\mathcal D$ is a lambda-system. [F1, F3, step 1.1]

3.1 Rectangles are a pi-system generating $\mathcal E\otimes\mathcal F$, so [F3] implies $\mathcal D=\mathcal E\otimes\mathcal F$. Every section $\Pi_z$ is a probability by step 1.1; hence z↦$\Pi_z$ is the claimed probability kernel. All constructions are pointwise and use no choice axiom. [F1, F3, step 1.1, step 2.1] ∎
