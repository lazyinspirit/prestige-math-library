---
id: def-standard-borel-conditional-mutual-information
kind: definition
title: "Conditional mutual information by a same-marginal product law"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-kullback-leibler-divergence
  - def-it-information-units-and-logarithm-base
  - def-axiom-of-choice
  - lem-same-marginal-conditional-product-law-well-defined
  - def-conditional-law-given-a-random-element
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - def-standard-borel-space
  - def-law-or-distribution-of-a-random-element
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "AC is required for regular conditional law existence and uniqueness on standard-Borel spaces and for the Radon–Nikodym KL definition."
verification:
  precheck: n/a
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, MIT 6.441 Information Theory, Chapter 2 §2.4"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/184197ca5d5418da2415d37e929860b9_MIT6_441S16_chapter_2.pdf"
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §5.5"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
---

## Definition

Assume AC. Let X,Y,Z be random elements with standard-Borel value spaces and write $P_{ZXY}$ for the joint law of $(Z,X,Y)$ in that coordinate order. Let $K(z,\cdot)$ and $L(z,\cdot)$ be regular conditional laws of X and Y given Z=z. Let R be the probability law on the same product space whose rectangle values are
$$R(C\times A\times B)=\int_C K(z,A)L(z,B)\,P_Z(dz).$$
Its existence, uniqueness, and independence of the versions K,L are established in [[lem-same-marginal-conditional-product-law-well-defined]]. Define the **conditional mutual information** by
$$I(X;Y\mid Z):=D(P_{ZXY}\|R)\in[0,+\infty].$$
The reference R has the same Z marginal as the joint law and makes X,Y independent conditionally on Z. The logarithm is natural, so finite values are measured in nats under [[def-it-information-units-and-logarithm-base]]. The definition is a divergence between full probability laws; it does not subtract two possibly infinite entropies.
