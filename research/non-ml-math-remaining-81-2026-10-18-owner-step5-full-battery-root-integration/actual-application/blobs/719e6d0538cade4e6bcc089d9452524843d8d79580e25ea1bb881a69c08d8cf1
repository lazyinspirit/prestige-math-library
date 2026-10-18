---
id: ex-null-conditional-kernel-version-does-not-change-information
kind: example
title: "Changing a conditional kernel on a null fiber leaves information unchanged"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-kullback-leibler-divergence
  - def-standard-borel-conditional-mutual-information
  - def-conditional-kl-for-probability-kernels
  - thm-conditional-kl-is-measurable
  - lem-same-marginal-conditional-product-law-well-defined
  - lem-it-finite-kl-agrees-with-measurable-kl
  - def-it-information-units-and-logarithm-base
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - lem-unit-interval-is-standard-borel
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-borel-sets-are-lebesgue-measurable
  - def-countable-choice
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-polish-space
  - def-separable-space
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
axiom_use: "Countable choice normalizes the uniform conditioning law; AC is inherited from measurable-space KL. The displayed kernels and their null-set modifications are constructed explicitly."
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 5 §§5.3 and 5.5"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "Yury Polyanskiy and Yihong Wu, MIT 6.441 Information Theory, Chapter 2 §§2.4 and 2.6"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/184197ca5d5418da2415d37e929860b9_MIT6_441S16_chapter_2.pdf"
---

## Statement

Assume AC. Let Z be uniform on the Borel unit interval and let X=Y=0 almost surely, with finite value space $\{0,1\}$. The regular conditional kernels $K(z)=L(z)=\delta_0$ may be replaced by $K'(0)=\delta_1$, $K'(z)=\delta_0$ for $z>0$, and $L'(z)=\delta_0$. The pointwise conditional KL between the conditional joint law of $(X,Y)$ and the product of these marginal kernels changes from zero everywhere to $+\infty$ at $z=0$, but its $P_Z$-integral and $I(X;Y\mid Z)$ remain zero.

## Facts & Assumptions

**Given:** AC (and hence countable choice), the uniform Borel probability $P_Z$ on $[0,1]$, and $X=Y=0$ almost surely.

[A1] Countable choice is required by the interval-volume formula used for $P_Z$ and its null singleton; AC is inherited by the KL definitions. [[def-countable-choice]] [[def-axiom-of-choice]]

[F1] $[0,1]$ and finite discrete spaces are standard Borel; the product of the two finite target spaces is also standard Borel. [[lem-unit-interval-is-standard-borel]] [[def-standard-borel-space]] [[def-polish-space]] [[def-separable-space]] [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]]

[F2] Under countable choice, Lebesgue measure is countably additive, so its Borel restriction is a measure. Borel subsets are Lebesgue measurable; the restriction to $[0,1]$ has mass one, the singleton $\{0\}$ has uniform measure zero, and its complement has measure one. [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] [[thm-lebesgue-measure-is-a-complete-measure]] [[thm-borel-sets-are-lebesgue-measurable]] [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F3] Supplied regular conditional distributions that agree outside a conditioning-null set give the same same-marginal conditional-product law; conditional mutual information is its KL from the joint law, and KL of equal probability laws is zero by the unit density. [[lem-same-marginal-conditional-product-law-well-defined]] [[def-standard-borel-conditional-mutual-information]] [[def-kullback-leibler-divergence]]

[F4] Conditional KL is the integral of the measurable pointwise kernel divergence. [[thm-conditional-kl-is-measurable]] [[def-conditional-kl-for-probability-kernels]]

[F5] For finite laws, KL is the atomwise sum with divergence $+\infty$ when the first law charges an atom the reference law misses. [[lem-it-finite-kl-agrees-with-measurable-kl]] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]] [[def-it-information-units-and-logarithm-base]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [F2], the restriction $P_Z$ is a probability and $P_Z(\{0\})=0$. On each finite target set, define distance 0 on equal points and 1 on distinct points; distinct endpoints force at least one intermediate distance to be 1, so the triangle inequality holds. Tolerance $1/2$ makes every Cauchy sequence eventually constant; the whole finite set is dense, and radius-$1/2$ balls are singletons, so the space is complete and discrete, hence Polish and standard Borel by [F1]. The product target is standard Borel by the finite-product supplier in [F1]. For any Borel $C\subseteq[0,1]$ and $A\subseteq\{0,1\}$, replacing $\delta_0$ by $K'$ changes $\int_C K(z,A)P_Z(dz)$ only at $z=0$, a null point. Thus both K and K' satisfy the conditional-law integral identity for X given Z; the constant kernel L satisfies it for Y, and $J(z)=\delta_{(0,0)}$ satisfies it for $(X,Y)$. These kernels are measurable because their only nonconstant set of values is the Borel singleton $\{0\}$. [A1, F1, F2, given]

2.1 Let $J(z)=\delta_{(0,0)}$ be a conditional law of $(X,Y)$ given Z. With the original kernels, $K(z)\otimes L(z)=\delta_{(0,0)}$ for every z, so the pointwise KL is zero. With the alternative kernels, the product is $\delta_{(1,0)}$ at z=0 and $\delta_{(0,0)}$ for z>0. By [F5], $D(J(0)\|K'(0)\otimes L'(0))=+\infty$ because the first law charges $(0,0)$ and the reference gives it mass zero; for z>0 the divergence is zero. Thus the pointwise integrands differ only at a null point, and both conditional-KL integrals in [F4] are zero. [F2, F4, F5, step 1.1]

3.1 The joint law $P_{ZXY}$ and the conditional-product reference law built from K,L agree. K' equals K $P_Z$-almost everywhere, so [F3] says the reference law built from K',L' is the same law. Consequently both versions give $I(X;Y\mid Z)=D(P_{ZXY}\|P_{ZXY})=0$. [A1, F3, step 1.1, step 2.1] ∎
