---
id: lem-gaussian-normal-prior-posterior
kind: lemma
title: Gaussian normal-prior posterior
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: adversarial-robustness-and-robust-risk
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - def-independent-random-elements
  - thm-independent-random-elements-have-product-joint-law
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
axiom_use: "AC is used through the multivariate-normal construction, its positive-definite density theorem, and the associated finite product laws. The posterior calculation itself is a finite density and square-completion argument."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Ludwig Schmidt, Shibani Santurkar, Dimitris Tsipras, Kunal Talwar, and Aleksander Madry, Adversarially Robust Generalization Requires More Data, arXiv:1804.11285v2, Appendix A.2, proof of Theorem 11"
      url: "https://arxiv.org/pdf/1804.11285v2"
---

## Statement

Assume AC. Let $d\ge1$, $\sigma>0$, and $n\ge1$. Let $\Theta\sim N_d(0,I_d)$, and, conditional on $\Theta$, let $Z_1,\ldots,Z_n$ be independent with law $N_d(\Theta,\sigma^2I_d)$. Let $Y_1,\ldots,Y_n$ be independent uniform signs, independent of $(\Theta,Z_1,\ldots,Z_n)$. Put $\bar Z=n^{-1}\sum_{i=1}^n Z_i$. The conditional law of $\Theta$ given $(Z_1,\ldots,Z_n,Y_1,\ldots,Y_n)$ is
$$N_d\!\left(\frac{n}{\sigma^2+n}\bar Z,\frac{\sigma^2}{\sigma^2+n}I_d\right).$$
For $n=0$, with no observations, the conditional law is the prior $N_d(0,I_d)$.

## Statement references

[[def-multivariate-normal-law]]: the finite-dimensional Gaussian laws and their singular-covariance convention.

[[thm-nondegenerate-multivariate-normal-law-has-density]]: the Lebesgue density formula for each positive-definite Gaussian law used here.

[Schmidt et al., Appendix A.2, proof of Theorem 11, PDF pp. 27–29](https://arxiv.org/pdf/1804.11285v2).

## Facts & Assumptions

**Given:** Assume AC and the Gaussian prior, conditionally independent observations, and independent labels in the Statement.

[A1] AC supplies the finite-dimensional multivariate-normal law construction and its positive-definite density formula. [[def-axiom-of-choice]], [[def-multivariate-normal-law]], [[thm-nondegenerate-multivariate-normal-law-has-density]].

[F1] Independent random elements have the finite product joint law. [[def-independent-random-elements]], [[thm-independent-random-elements-have-product-joint-law]].

[F2] A positive-definite $N_d(m,\Sigma)$ law has density proportional to $\det(\Sigma)^{-1/2}\exp(-\frac12(x-m)^T\Sigma^{-1}(x-m))$. [[thm-nondegenerate-multivariate-normal-law-has-density]].

[F3] Nonnegative product-measurable densities can be integrated in either order. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

## Proof

1.1 For $n\ge1$, the joint density of $(\Theta,Z_1,\ldots,Z_n)$ is proportional to $\exp\!\left(-\frac12\|\theta\|_2^2-\frac1{2\sigma^2}\sum_{i=1}^n\|z_i-\theta\|_2^2\right)$. Indeed, the prior density and each conditional Gaussian density are given by [F2], and their product is the joint density by conditional independence and [F1]. The independent labels contribute a constant factor $2^{-n}$, so conditioning on their observed values does not change the $\theta$-dependent factor. [A1, F1, F2, algebra]

2.1 Write $\bar z=n^{-1}\sum_i z_i$. Expanding squares gives $\sum_i\|z_i-\theta\|_2^2=\sum_i\|z_i-\bar z\|_2^2+n\|\theta-\bar z\|_2^2$. Completing the remaining square in $\theta$ yields $\|\theta\|_2^2+\frac n{\sigma^2}\|\theta-\bar z\|_2^2 =\frac{\sigma^2+n}{\sigma^2}\left\|\theta-\frac n{\sigma^2+n}\bar z\right\|_2^2 +\frac n{\sigma^2+n}\|\bar z\|_2^2$. The final term is independent of $\theta$. The normalized conditional density is therefore the Gaussian density in the Statement, with positive covariance $\frac{\sigma^2}{\sigma^2+n}I_d$. [step 1.1, F2, algebra]

3.1 The density ratio in step 2.1 defines a measurable probability kernel in the observed vectors because its mean is linear in $\bar z$ and its covariance is fixed; [F2] gives unit mass. Applying [F3] to the nonnegative joint density verifies the conditional-law identity on every pair of Borel sets. Since the labels are independent of $(\Theta,Z_1,\ldots,Z_n)$, the same kernel is the conditional law after adjoining the labels. [step 2.1, F1, F2, F3]

4.1 When $n=0$, the observed sigma-algebra contains no data, so conditioning leaves the prior law unchanged; the labels, if supplied, are independent of $\Theta$. [given, F1] ∎

## References

[[def-axiom-of-choice]]: AC is used by the Gaussian construction and density supplier.

[[thm-independent-random-elements-have-product-joint-law]]: finite independent samples have product joint law.

[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: justifies the density integrations defining the conditional kernel.
