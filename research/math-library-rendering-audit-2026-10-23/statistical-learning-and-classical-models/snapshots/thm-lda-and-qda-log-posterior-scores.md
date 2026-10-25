---
id: thm-lda-and-qda-log-posterior-scores
kind: theorem
title: Common-covariance LDA scores are affine and QDA scores are quadratic
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-linear-score-classifier
  - def-generative-lda-and-qda-models
  - thm-nondegenerate-multivariate-normal-law-has-density
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Stanford CS229 Spring 2022 lecture notes"
      url: "https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$ and $K\ge2$ be finite, let $\pi_k>0$ with $\sum_{k=1}^K\pi_k=1$, let $\mu_k\in\mathbb R^d$, and let each real symmetric matrix $\Sigma_k\in\mathbb R^{d\times d}$ be positive definite, meaning $v^T\Sigma_kv>0$ for every nonzero $v$. Define
$$
f_k(x)=(2\pi)^{-d/2}\det(\Sigma_k)^{-1/2}\exp\!\left(-\tfrac12(x-\mu_k)^T\Sigma_k^{-1}(x-\mu_k)\right),\qquad p_k(x)=\frac{\pi_k f_k(x)}{\sum_{j=1}^K\pi_jf_j(x)}.
$$
For LDA, assume $\Sigma_k=\Sigma$ for all $k$; then $\log p_k(x)$ differs by a term independent of $k$ from the affine score
$$
\delta_k^{\mathrm L}(x)=x^T\Sigma^{-1}\mu_k-\tfrac12\mu_k^T\Sigma^{-1}\mu_k+\log\pi_k.
$$
For QDA, allow the $\Sigma_k$ to vary with $k$; then $\log p_k(x)$ differs by a term independent of $k$ from the quadratic score
$$
\delta_k^{\mathrm Q}(x)=-\tfrac12\log\det(\Sigma_k)-\tfrac12(x-\mu_k)^T\Sigma_k^{-1}(x-\mu_k)+\log\pi_k.
$$
Thus maximizing the posterior probabilities uses affine scores in LDA and scores of degree at most two in QDA; ties are resolved by the smallest class index.

## Statement references

[[def-generative-lda-and-qda-models]]

[[def-linear-score-classifier]]

[[thm-nondegenerate-multivariate-normal-law-has-density]]

[[def-axiom-of-choice]]

[Hastie, Tibshirani, and Friedman, ESL, §4.3, equations (4.7)–(4.12)](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Stanford CS229 Spring 2022 lecture notes, §4.1](https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf)

## Facts & Assumptions

**Given:** AC, finite $d\ge1$ and $K\ge2$, positive priors summing to one, means $\mu_k$, symmetric positive-definite covariance matrices, and the LDA common-covariance or QDA class-specific-covariance premise in the Statement.

[A1] AC is the assumption used by the multivariate-normal law and its positive-definite density theorem. [[def-axiom-of-choice]]

[F1] The generative model has priors $\pi_k$ and conditional laws $N_d(\mu_k,\Sigma_k)$; LDA shares $\Sigma$ and QDA permits distinct positive-definite $\Sigma_k$. [[def-generative-lda-and-qda-models]]

[F2] Under AC, a finite-dimensional multivariate normal law with positive-definite covariance has the displayed Lebesgue density. [[thm-nondegenerate-multivariate-normal-law-has-density]]

[F3] A finite ordered family of affine class scores predicts the smallest label index attaining the maximum. [[def-linear-score-classifier]]

## Proof

1.1 For each $x$, [F2] gives $f_k(x)>0$ and finite because $\Sigma_k$ is positive definite; since $\pi_k>0$, the denominator $m(x)=\sum_j\pi_jf_j(x)$ is positive. The density Bayes formula $p_k(x)=\pi_kf_k(x)/m(x)$ is therefore well-defined, positive, and sums to one. [A1, F1, F2, given, algebra]

2.1 Taking logarithms gives $\log p_k(x)=\log\pi_k-\tfrac d2\log(2\pi)-\tfrac12\log\det(\Sigma_k)-\tfrac12(x-\mu_k)^T\Sigma_k^{-1}(x-\mu_k)-\log m(x)$. The terms $-\tfrac d2\log(2\pi)$ and $-\log m(x)$ do not depend on $k$, so the remaining class-dependent expression is exactly $\delta_k^{\mathrm Q}(x)$. [step 1.1, F2, algebra]

3.1 Under the LDA premise $\Sigma_k=\Sigma$, the determinant term in step 2.1 is also independent of $k$. Symmetry of $\Sigma^{-1}$ gives $(x-\mu_k)^T\Sigma^{-1}(x-\mu_k)=x^T\Sigma^{-1}x-2x^T\Sigma^{-1}\mu_k+\mu_k^T\Sigma^{-1}\mu_k$. Removing the terms independent of $k$ leaves $\delta_k^{\mathrm L}(x)$. The LDA score is affine in $x$, whereas the QDA score in step 2.1 has degree at most two. [step 2.1, F1, F2, algebra]

4.1 For LDA, the affine scores in step 3.1 have a maximizing index and use the smallest-index tie rule by [F3]. For QDA, each $\delta_k^{\mathrm Q}(x)$ is finite because $\Sigma_k$ is positive definite and $\pi_k>0$; since $K$ is finite, the maximizing set is nonempty and finite, so it has a unique smallest index. In either model, adding the same finite quantity to every score preserves the maximizing indices, and the log-posterior scores in steps 2.1 and 3.1 differ from the displayed scores by such a quantity. Thus the posterior argmax has the stated deterministic tie rule for both LDA and QDA. [step 1.1, step 2.1, step 3.1, F3, algebra] ∎
