---
id: def-measure-theoretic-mutual-information
kind: definition
title: "Measure-theoretic mutual information"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-kullback-leibler-divergence
  - def-it-information-units-and-logarithm-base
  - def-axiom-of-choice
  - def-law-or-distribution-of-a-random-element
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "AC is inherited from the measurable-space KL definition through its Radon–Nikodym density; no additional choice is used."
verification:
  precheck: n/a
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §§5.2–5.5"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "Yury Polyanskiy and Yihong Wu, MIT 6.441 Information Theory, Chapter 2 §§2.1–2.4"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/184197ca5d5418da2415d37e929860b9_MIT6_441S16_chapter_2.pdf"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 2 §2.1"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Definition

Let $(E,\mathcal E)$ and $(F,\mathcal F)$ be measurable spaces and let $P$ be a probability measure on $(E\times F,\mathcal E\otimes\mathcal F)$. Its marginals are $P_E(A)=P(A\times F)$ and $P_F(B)=P(E\times B)$. The product probability $P_E\otimes P_F$ exists by the finite product-measure theorem. Define the **measure-theoretic mutual information** of the joint law $P$ by
$$I(P):=D(P\|P_E\otimes P_F)\in[0,+\infty].$$
For random elements $X,Y$ with joint law $P_{XY}$, write $I(X;Y):=I(P_{XY})$. The logarithm convention is the natural logarithm, so finite values are in nats as fixed by [[def-it-information-units-and-logarithm-base]]. The divergence is directional in its two law arguments and is $+\infty$ when $P_{XY}\not\ll P_X\otimes P_Y$.

This definition uses only the joint law, not a choice of density or a difference of entropy quantities.
