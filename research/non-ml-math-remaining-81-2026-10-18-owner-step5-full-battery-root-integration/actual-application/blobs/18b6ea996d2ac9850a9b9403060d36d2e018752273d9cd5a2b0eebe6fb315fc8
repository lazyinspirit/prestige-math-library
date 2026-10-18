---
id: lem-same-marginal-conditional-product-law-well-defined
kind: lemma
title: "The same-marginal conditional-product law is well-defined"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - lem-product-of-two-probability-kernels
  - lem-prior-and-model-kernel-define-joint-law
  - def-conditional-law-given-a-random-element
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-dynkin-pi-lambda
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC supplies standard-Borel conditional-law existence and simultaneous almost-everywhere uniqueness. Finite product kernels and joint laws use no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §§5.3 and 5.5"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "Yury Polyanskiy and Yihong Wu, MIT 6.441 Information Theory, Chapter 2 §§2.4 and 2.6"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/184197ca5d5418da2415d37e929860b9_MIT6_441S16_chapter_2.pdf"
---

## Statement

Assume AC. Let $X,Y,Z$ be random elements with standard-Borel value spaces, and let $K(z,\cdot)$ and $L(z,\cdot)$ be supplied conditional laws of $X$ and $Y$ given $Z=z$. The product kernels $M(z,\cdot)=K(z,\cdot)\otimes L(z,\cdot)$ form a probability kernel. The joint law
$$R(C\times A\times B)=\int_C K(z,A)L(z,B)\,P_Z(dz)$$
exists uniquely on the product sigma-algebra and does not depend on the chosen versions of $K,L$. It has $Z$ marginal $P_Z$ and conditional law $M$ for $(X,Y)$ given $Z$.

## Facts & Assumptions

**Given:** AC, standard-Borel random elements $X,Y,Z$, and regular conditional laws $K,L$ given $Z$.

[A1] AC supplies the existence and simultaneous almost-everywhere uniqueness interfaces for standard-Borel regular conditional laws. [[def-axiom-of-choice]]

[F1] The product of two supplied probability kernels is a probability kernel, with rectangle evaluations $K(z,A)L(z,B)$. [[lem-product-of-two-probability-kernels]]

[F2] A probability measure and a probability kernel define a unique joint probability law with the iterated-integral formula. [[lem-prior-and-model-kernel-define-joint-law]]

[F3] Conditional laws of the same standard-Borel random element agree as measures outside one null set. [[lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions]]

[F4] Measurable rectangles generate the product sigma-algebra and determine a probability measure by the pi-lambda theorem. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] [[thm-dynkin-pi-lambda]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F1], $M(z,\cdot)=K(z,\cdot)\otimes L(z,\cdot)$ is a probability kernel into the standard-Borel product of the X and Y spaces. Apply [F2] with base law $P_Z$ and kernel M. It gives a unique probability law R and the displayed rectangle formula; taking $A$ and $B$ equal to their whole value spaces gives $R(C\times E_X\times E_Y)=P_Z(C)$ for every measurable $C$, so its Z marginal is $P_Z$. The same rectangle identity is the conditional-law identity for M given Z. [A1, F1, F2, given]

2.1 Let $K',L'$ be alternative versions. By [F3], there are P_Z-null sets $N_X,N_Y$ such that $K(z,\cdot)=K'(z,\cdot)$ for $z\notin N_X$ and $L(z,\cdot)=L'(z,\cdot)$ for $z\notin N_Y$. Their product measures agree for every $z$ outside $N_X\cup N_Y$. Thus the two joint laws have the same rectangle values $R(C\times A\times B)$ for every measurable C,A,B; [F4] then makes the laws equal. This establishes version independence. [A1, F1, F2, F3, F4, step 1.1] ∎
