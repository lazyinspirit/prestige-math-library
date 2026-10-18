---
id: thm-mutual-information-and-conditional-mutual-information-equality-conditions
kind: theorem
title: "Zero information is exactly independence"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-measure-theoretic-mutual-information
  - def-standard-borel-conditional-mutual-information
  - thm-kullback-leibler-is-nonnegative
  - def-conditional-independence-given-a-sigma-algebra
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-conditional-fatou-and-dominated-convergence
  - lem-same-marginal-conditional-product-law-well-defined
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-dynkin-pi-lambda
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited from general KL and regular-conditional-law existence; the conditional-independence class convention also assumes AC."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 2 §2.5 and Chapter 5 §5.5"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "Yury Polyanskiy and Yihong Wu, MIT 6.441 Information Theory, Chapter 2 §2.4, Theorem 2.5"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/184197ca5d5418da2415d37e929860b9_MIT6_441S16_chapter_2.pdf"
---

## Statement

Assume AC. Let X,Y,Z be standard-Borel random elements. Then $I(X;Y)=0$ if and only if $P_{XY}=P_X\otimes P_Y$ (independence). Also $I(X;Y\mid Z)=0$ if and only if X and Y are conditionally independent given $\sigma(Z)$ in the sense of [[def-conditional-independence-given-a-sigma-algebra]].

## Facts & Assumptions

**Given:** AC and standard-Borel random elements X,Y,Z with their joint law.

[A1] AC is inherited from KL, standard-Borel regular conditional laws, and the conditional-independence convention. [[def-axiom-of-choice]]

[F1] KL divergence is nonnegative and equals zero exactly when the two probability laws agree. [[thm-kullback-leibler-is-nonnegative]]

[F2] $I(X;Y)=D(P_{XY}\|P_X\otimes P_Y)$. [[def-measure-theoretic-mutual-information]]

[F3] $I(X;Y\mid Z)$ is the KL divergence of the joint law from its same-Z-marginal conditional-product law R. [[def-standard-borel-conditional-mutual-information]]

[F4] Conditional independence given $\mathcal G$ means $\mathbb E[f(X)g(Y)\mid\mathcal G]=\mathbb E[f(X)\mid\mathcal G]\mathbb E[g(Y)\mid\mathcal G]$ almost surely for all bounded measurable real f,g. [[def-conditional-independence-given-a-sigma-algebra]]

[F5] Equality of conditional-expectation versions is characterized by their integrals on every conditioning event. [[def-conditional-expectation-given-a-sigma-algebra]]

[F6] Conditional dominated convergence passes bounded pointwise limits through conditional expectations. [[thm-conditional-fatou-and-dominated-convergence]]

[F7] Measurable rectangles generate the finite product sigma-algebra and determine probability measures by pi-lambda. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] [[thm-dynkin-pi-lambda]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F2] and [F1], $I(X;Y)=0$ exactly when $P_{XY}=P_X\otimes P_Y$, which is the stated independence condition. [A1, F1, F2, given]

1.2 By [F3] and [F1], $I(X;Y\mid Z)=0$ exactly when the joint law $P_{ZXY}$ of $(Z,X,Y)$ equals the conditional-product reference law R. [A1, F1, F3, given]

2.1 Suppose $P_{ZXY}=R$, using the coordinate order $(Z,X,Y)$ of [F3]. For all measurable A,B,C the rectangle formula for R gives $P(X\in A,Y\in B,Z\in C)=\int_C K(z,A)L(z,B)P_Z(dz).$ By the regular conditional law identities, $K(Z,A)$ and $L(Z,B)$ are versions of the two conditional expectations in [F4]. The displayed identity says their product is the conditional-expectation version of $\mathbf1_{\{X\in A,Y\in B\}}$ by [F5]. Thus [F4] holds for indicators. Linearity gives it for bounded simple functions; bounded measurable functions follow by bounded simple approximation and [F6]. Conversely, [F4] applied to indicators gives the same rectangle identity, so $P_{ZXY}$ and R agree on every rectangle $C\times A\times B$. These rectangles determine the probability law by [F7], hence $P_{ZXY}=R$. [F3, F4, F5, F6, F7, given, step 1.2] ∎ 