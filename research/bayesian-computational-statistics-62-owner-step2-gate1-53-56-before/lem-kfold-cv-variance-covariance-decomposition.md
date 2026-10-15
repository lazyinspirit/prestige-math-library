---
id: lem-kfold-cv-variance-covariance-decomposition
kind: lemma
title: "The covariance decomposition of a fixed K-fold score"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-cross-validation-split-and-risk-target
  - alg-holdout-loo-lpo-v-fold-and-repeated-cv
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - def-moments-variance-and-covariance
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yoshua Bengio and Yves Grandvalet, No Unbiased Estimator of the Variance of K-Fold Cross-Validation, JMLR 5 (2004), §§2.5–3, pp. 1094–1096"
      url: "https://jmlr.org/papers/volume5/grandvalet04a/grandvalet04a.pdf"
    - title: "Sylvain Arlot and Alain Celisse, A survey of cross-validation procedures for model selection, §§5.2–5.2.2"
      url: "https://arxiv.org/pdf/0907.4728"
---

## Statement

Let $n=Km$ with integers $K\ge2$ and $m\ge1$. Let $Z_1,\ldots,Z_n$ be IID, let $I_1,\ldots,I_K$ be a fixed partition into folds of size $m$, and let $A_k$ be a permutation-symmetric measurable learning rule with a measurable loss. For $i\in I_j$, write $e_i=L(A_{n-m}(Z_{I_j^c}),Z_i)$ and assume $\mathbb E[e_i^2]<\infty$. For a paired comparison, $e_i$ may instead be the difference of the two rules' losses evaluated using the same fold; assume both rules are symmetric and the differences are square-integrable. Define $\sigma^2:=\operatorname{Var}(e_i)$, $\omega:=\operatorname{Cov}(e_i,e_{i'})$ for distinct indices in one fold, and $\gamma:=\operatorname{Cov}(e_i,e_{i'})$ for indices in different folds. When $m=1$, set $\omega=0$ because there is no within-fold pair. These values are well-defined, and

$$\operatorname{Var}\!\left(\frac1n\sum_{i=1}^n e_i\right)=\frac{\sigma^2}{n}+\frac{m-1}{n}\omega+\frac{n-m}{n}\gamma.$$

## Facts & Assumptions

**Given:** The fixed equal-fold design, IID data, symmetric learning rule(s), and finite second moments in the statement. Prove the covariance classes and variance formula.

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID observations are mutually independent with a common law.

[F2] [[thm-independent-random-elements-have-product-joint-law]]: the joint sample law is $P^{\otimes n}$, whose rectangle probabilities are products of marginal probabilities.

[F3] [[def-moments-variance-and-covariance]]: for square-integrable real variables, variance is $\mathbb E[(X-\mathbb E X)^2]$ and covariance is $\mathbb E[(X-\mathbb E X)(Y-\mathbb E Y)]$.

[F4] [[def-cross-validation-split-and-risk-target]]: a fixed partition score is the average of the held-out fold losses.

[F5] [[alg-holdout-loo-lpo-v-fold-and-repeated-cv]]: paired comparison uses the same split schedule for both rules and averages their foldwise loss differences.

## Proof

1.1 By [F1], reordering the sample coordinates preserves their common law and mutual independence: the probability of any coordinate rectangle is the product of the same marginal probabilities in either order. Applying [F2] to the original and permuted tuples therefore gives the same joint law $P^{\otimes n}$, so the sample distribution is invariant under every coordinate permutation. [F1, F2]

2.1 Consider a permutation of indices that maps every fold onto a fold. The product law is invariant under it by step 1.1. Because each learning rule is symmetric, permuting a training tuple within or between folds leaves its fitted predictor unchanged, while the held-out observation is relabelled with its fold loss. Thus the vector $(e_1,\ldots,e_n)$ is invariant in law under all such block permutations. These permutations act transitively on single indices, on ordered distinct pairs in one fold, and on ordered pairs from different folds. Therefore all marginal variances equal $\sigma^2$, all within-fold covariances equal $\omega$, and all between-fold covariances equal $\gamma$. [F1, F4, F5, step 1.1, algebra]

3.1 By [F3], the variance of the average is $n^{-2}\sum_{i=1}^n\sum_{i'=1}^n\operatorname{Cov}(e_i,e_{i'})$. There are $n$ diagonal ordered pairs, $K m(m-1)=n(m-1)$ within-fold off-diagonal ordered pairs, and $n(n-m)$ ordered pairs from different folds. Substitution of the three covariance values from step 2.1 gives $\frac1{n^2}\{n\sigma^2+n(m-1)\omega+n(n-m)\gamma\}=\frac{\sigma^2}{n}+\frac{m-1}{n}\omega+\frac{n-m}{n}\gamma$. For $m=1$, the within-fold count is zero, so the declared value $\omega=0$ contributes nothing. [F3, step 2.1, algebra] ∎

## Remarks

The formula includes the within-fold dependence from a common training set and the between-fold dependence from overlapping training sets. It applies to foldwise paired differences under the same symmetry and moment hypotheses.
