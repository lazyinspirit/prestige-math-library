---
id: thm-mutual-information-chain-rule
kind: theorem
title: "Mutual-information chain rule without subtracting infinities"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-measure-theoretic-mutual-information
  - def-standard-borel-conditional-mutual-information
  - thm-general-kl-chain-rule-for-standard-borel-kernels
  - lem-same-marginal-conditional-product-law-well-defined
  - lem-product-of-two-probability-kernels
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - lem-kl-invariant-under-measurable-bijections
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited from measurable-space KL and standard-Borel disintegration; all conditional laws in the proof are supplied by those interfaces."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §§5.3 and 5.5"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 2 §2.1"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Assume AC. For standard-Borel random elements X,Y,Z,
$$I((Z,X);Y)=I(Z;Y)+I(X;Y\mid Z).$$
The right side is a sum in $[0,+\infty]$. This chain rule is asserted as an equality of extended nonnegative quantities; no difference of possibly infinite entropies or divergences occurs.

## Facts & Assumptions

**Given:** AC and standard-Borel random elements X,Y,Z on one probability space.

[A1] AC is required for the Radon–Nikodym divergences and standard-Borel conditional laws. [[def-axiom-of-choice]]

[F1] Mutual information is the KL divergence of a joint law from the product of its marginals. [[def-measure-theoretic-mutual-information]]

[F2] Conditional mutual information is the KL divergence from the same-Z-marginal conditionally independent product law. [[def-standard-borel-conditional-mutual-information]]

[F3] For disintegrated joint laws, KL equals the marginal KL plus the average conditional KL, as an extended sum. [[thm-general-kl-chain-rule-for-standard-borel-kernels]]

[F4] The same-marginal conditional-product law exists, has the stated rectangle formula, and is independent of kernel versions. [[lem-same-marginal-conditional-product-law-well-defined]]

[F5] Standard-Borel joint laws admit the regular conditional distributions and disintegration identities used below. [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]

[F6] The product of supplied probability kernels is a probability kernel, and KL is invariant under a measurable coordinate bijection. [[lem-product-of-two-probability-kernels]] [[lem-kl-invariant-under-measurable-bijections]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Let $K(z,\cdot)$ be a regular conditional law of X given Z and let $Q=P_{ZX}\otimes P_Y$ on $(Z\times X)\times Y$. In the coordinate order $Z,X,Y$, Q has Z marginal $P_Z$ and conditional law $K(z,\cdot)\otimes P_Y$ for $(X,Y)$. On every rectangle $C\times A\times B$, the law formed from this base and kernel has mass $$\int_CK(z,A)P_Y(B)P_Z(dz)=P_{ZX}(C\times A)P_Y(B),$$ so it equals Q by rectangle uniqueness. [A1, F1, F4, F5, F6, given]

2.1 Apply [F3] to the joint law of $(Z,X,Y)$ and Q using their common Z marginal. With $P_{XY|z}$ denoting the conditional law of $(X,Y)$ given Z=z, this gives $$I((Z,X);Y)=D(P_{ZXY}\|P_{ZX}\otimes P_Y)=\int D(P_{XY|z}\|P_{X|z}\otimes P_Y)P_Z(dz).$$ The formula is an extended sum of nonnegative KL values. [A1, F1, F3, step 1.1]

3.1 For $P_Z$-almost every z, disintegrate the two measures in step 2.1 over Y. Their Y marginals are $P_{Y|z}$ and $P_Y$, while their conditional X laws are $P_{X|Y,z}$ and $P_{X|z}$, respectively. [F3] gives $$D(P_{XY|z}\|P_{X|z}\otimes P_Y)=D(P_{Y|z}\|P_Y)+\int D(P_{X|Y=y,z}\|P_{X|z})P_{Y|z}(dy).$$ Applying [F3] with the common Y marginal $P_{Y|z}$ identifies the last integral as $D(P_{XY|z}\|P_{X|z}\otimes P_{Y|z})$. [A1, F2, F3, F5, step 2.1]

4.1 Integrate step 3.1 over $P_Z$. The first term becomes $D(P_{YZ}\|P_Y\otimes P_Z)$, which equals $I(Z;Y)$ by the measurable coordinate swap [F6]. Applying [F3] with the common Z marginal of the joint law and its conditional-product reference shows that the second term integrates to $I(X;Y\mid Z)$ as defined in [F2]. All terms are nonnegative KL divergences, so their extended sum is well-defined even when one or more are infinite. [A1, F2, F3, F6, step 3.1] ∎