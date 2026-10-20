---
id: lem-mean-classifier-loss-from-contrastive-loss
kind: lemma
title: "Jensen comparison with the average mean-classifier loss"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-latent-class-contrastive-learning
  - lem-contrastive-hinge-and-logistic-loss-properties
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-independent-random-elements-have-product-joint-law
  - thm-jensen-inequality-for-expectation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Nikunj Saunshi et al., A Theoretical Analysis of Contrastive Unsupervised Representation Learning, Lemma 4.3 and proof"
      url: "https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf"
---

## Statement

Assume the one-negative latent-class model has $\tau<1$. Let $C_+,C_-$ be independent with law $\rho$, conditioned on $C_+\ne C_-$, let $X,X^+$ be independent with law $D_{C_+}$, and let $X^-$ be independent with law $D_{C_-}$. For every measurable bounded representation $f$ and either source hinge or logistic loss, the average binary-task mean-classifier risk satisfies

$$L^\mu_{\rm sup}(f)\le L^\ne_{\rm un}(f).$$

Here each binary task uses a uniform label from its two classes, and $L^\ne_{\rm un}$ is the contrastive loss conditional on different positive and negative classes.

## Statement references

[[def-latent-class-contrastive-learning]]: defines the latent-class sampling laws, binary-task risk, mean classifier, and distinct-class contrastive loss.

[[lem-contrastive-hinge-and-logistic-loss-properties]]: establishes convexity of both source losses.

[Saunshi et al., Lemma 4.3 and complete proof](https://proceedings.mlr.press/v97/saunshi19a/saunshi19a.pdf): proves the same one-negative Jensen comparison for uniformly labeled binary tasks.

## Facts & Assumptions

**Given:** The sampling model in the Statement with $\tau<1$, one representation $f\in\mathcal F$, and either source loss $\ell$.

[F1] Conditional on $C_+=c_+$ and $C_-=c_-$, the positive pair is sampled independently from $D_{c_+}$ and the negative example independently from $D_{c_-}$. [[def-latent-class-contrastive-learning]]

[F2] The loss $\ell$ is convex, so for each integrable real random variable $Z$, $\ell(\mathbb E Z)\le\mathbb E\ell(Z)$. [[lem-contrastive-hinge-and-logistic-loss-properties]], [[thm-jensen-inequality-for-expectation]]

[F3] The mean-classifier margin for a positive-class input is $f(x)^\top(\mu_{c_+}-\mu_{c_-})$, and the contrastive score is $f(x)^\top(f(x^-)-f(x^+))$. [[def-latent-class-contrastive-learning]]

[F4] The ordered pair law of $(C_+,C_-)$ conditioned on inequality is invariant under swapping its coordinates; the two draws have joint law $\rho\otimes\rho$. [[thm-independent-random-elements-have-product-joint-law]]

[F5] The integral of integrable functions is linear, so conditional expectations of the bounded vector coordinates subtract to the difference of their means. [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

## Proof
**Given:** The hypotheses in the Statement and Facts & Assumptions.

1.1 Fix distinct classes $c_+,c_-$ and an anchor $x\in\mathcal X$. Conditional on these classes and $x$, the random score $Z=f(x)^\top(f(X^-)-f(X^+))$ is integrable and has mean $\mathbb E[Z]=f(x)^\top(\mu_{c_-}-\mu_{c_+})$ by independence and [F5] applied to the bounded coordinates. Jensen's inequality [F2] gives $\mathbb E[\ell(Z)]\ge\ell(f(x)^\top(\mu_{c_-}-\mu_{c_+}))$. Integrating over $x\sim D_{c_+}$ and then over distinct ordered class pairs shows that $L^\ne_{\rm un}(f)$ is at least the average mean-classifier loss on the positive label. [F1, F2, F3, F5, given]

2.1 By [F4], swapping $(c_+,c_-)$ preserves the conditional ordered-pair law. Therefore the average mean-classifier loss on the negative label equals its average on the positive label: swapping the classes turns its margin $f(x)^\top(\mu_{c_+}-\mu_{c_-})$ into the positive-label margin from step 1.1. Since the task label is uniform, the average of the two label risks is exactly the positive-label average. Thus $L^\mu_{\rm sup}(f)\le L^\ne_{\rm un}(f)$. [F3, F4, step 1.1, algebra] ∎
