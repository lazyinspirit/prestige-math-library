---
id: ex-paired-kfold-model-comparison-uncertainty
kind: example
title: "Paired K-fold comparison retains correlated fold errors"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-cross-validation-split-and-risk-target
  - alg-holdout-loo-lpo-v-fold-and-repeated-cv
  - lem-kfold-cv-variance-covariance-decomposition
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
  - thm-factorization-of-expectations-for-independent-variables
  - def-bernoulli-and-binomial-random-variables
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Yoshua Bengio and Yves Grandvalet, No Unbiased Estimator of the Variance of K-Fold Cross-Validation, JMLR 5 (2004), §§2–3"
      url: "https://jmlr.org/papers/volume5/grandvalet04a/grandvalet04a.pdf"
    - title: "Sylvain Arlot and Alain Celisse, A survey of cross-validation procedures for model selection, §5.2"
      url: "https://arxiv.org/pdf/0907.4728"
---

## Example

Let $n=4$, $K=2$, $I_1=\{1,2\}$, $I_2=\{3,4\}$, and $Z_i\stackrel{IID}{\sim}\operatorname{Bernoulli}(1/2)$. Compare $A_k(z_1,\ldots,z_k)=\prod_qz_q$ with the zero predictor $B_k=0$ under loss $L(h,z)=hz$, using the same folds for both procedures. Write $\widehat\Delta$ for the paired difference of their cross-validation scores.

## Facts & Assumptions

**Given:** The two-fold partition, IID Bernoulli observations, product and zero rules, and loss above. Compute the covariance terms and the variance of the paired difference.

[F1] [[def-cross-validation-split-and-risk-target]]: the equal-fold score is the average of the four held-out losses.

[F2] [[alg-holdout-loo-lpo-v-fold-and-repeated-cv]]: paired comparison applies the same split schedule and averages within-fold loss differences.

[F3] [[def-identically-distributed-and-iid-random-variables]]: the four observations are mutually independent with a common Bernoulli law.

[F4] [[thm-factorization-of-expectations-for-independent-variables]]: expectations of products of functions of distinct observations factor.

[F5] [[def-moments-variance-and-covariance]]: variance and covariance are the centered second moments.

[F6] [[lem-kfold-cv-variance-covariance-decomposition]]: for $K$ equal folds, the average-error variance is $\sigma^2/n+(m-1)\omega/n+(n-m)\gamma/n$.

[F7] [[def-bernoulli-and-binomial-random-variables]]: For $p\in[0,1]$, a **Bernoulli$(p)$ random variable** takes the value $1$ with probability $p$ and $0$ with probability $1-p$.

## Verification

1.1 Since the zero rule has zero loss, the four paired errors are $e_1=Z_1Z_3Z_4$, $e_2=Z_2Z_3Z_4$, $e_3=Z_3Z_1Z_2$, and $e_4=Z_4Z_1Z_2$, and $\widehat\Delta=\frac14\sum_{i=1}^4e_i$. [given, F1, F2]

2.1 Each $e_i$ is a product of three independent Bernoulli$(1/2)$ variables, so [F3]–[F5] and [F7] give $\mathbb E e_i=1/8$ and $\operatorname{Var}(e_i)=1/8-(1/8)^2=7/64$. For any distinct $i,j$, the product $e_ie_j$ equals $Z_1Z_2Z_3Z_4$ because $Z_q^2=Z_q$; hence $\mathbb E[e_ie_j]=1/16$ and $\operatorname{Cov}(e_i,e_j)=1/16-(1/8)^2=3/64$. Thus $\omega=\gamma=3/64$. [F3, F4, F5, F7, step 1.1, algebra]

3.1 Substituting $n=4,m=2,\sigma^2=7/64,\omega=\gamma=3/64$ into [F6] gives $\operatorname{Var}(\widehat\Delta)=\frac{7}{256}+\frac{3}{256}+\frac{6}{256}=\frac1{16}$. Treating the four errors as independent would keep only $7/256$, omitting the two positive covariance contributions. [F5, F6, step 2.1, algebra]

4.1 Directly, if all four observations are one then $\widehat\Delta=1$; if exactly three are one then $\widehat\Delta=1/4$; with at most two ones it is zero. By [F7] these events have probabilities $1/16$, $4/16$, and $11/16$, respectively, so $\mathbb E\widehat\Delta=1/8$, $\mathbb E\widehat\Delta^2=5/64$, and the direct variance is $5/64-(1/8)^2=1/16$, confirming step 3.1. [F3, F4, F5, F7, step 3.1, algebra] ∎
