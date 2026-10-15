---
id: thm-no-universal-unbiased-k-fold-cv-variance-estimator
kind: theorem
title: "No universal unbiased estimator of K-fold cross-validation variance"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-cross-validation-split-and-risk-target
  - alg-holdout-loo-lpo-v-fold-and-repeated-cv
  - lem-kfold-cv-variance-covariance-decomposition
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - thm-factorization-of-expectations-for-independent-variables
  - def-bernoulli-and-binomial-random-variables
proof_strategy: direct
justified_by: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yoshua Bengio and Yves Grandvalet, No Unbiased Estimator of the Variance of K-Fold Cross-Validation, JMLR 5 (2004), §§2–4 and Theorem 6, pp. 1090–1098"
      url: "https://jmlr.org/papers/volume5/grandvalet04a/grandvalet04a.pdf"
    - title: "Sylvain Arlot and Alain Celisse, A survey of cross-validation procedures for model selection, §§5.2–5.2.3"
      url: "https://arxiv.org/pdf/0907.4728"
---

## Statement

Fix $K\ge2$, $m\ge1$, $n=Km$, and a fixed equal-fold partition of $[n]$. A **universal variance estimator** is a measurable procedure based on the observed sample and the known rule, loss, and split, but not the unknown law $P$; any auxiliary random seed must be independent of both $P$ and the sample. No such procedure is unbiased for the K-fold score variance on every IID law and every symmetric learning rule with measurable loss whenever that variance is finite. More strongly, even if an estimator is tailored to one fixed symmetric rule, no such estimator is unbiased for all $P=\operatorname{Bernoulli}(p)$, $0<p<1$, for the explicit rule and loss in the proof.

## Facts & Assumptions

**Given:** The fixed equal-fold design and the universal-estimator meaning above. Prove the nonexistence claim.

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID means a common marginal law and mutual independence.

[F2] [[thm-independent-random-elements-have-product-joint-law]]: the joint law of a finite independent sample is its finite product law.

[F3] [[thm-factorization-of-expectations-for-independent-variables]]: expectations of products of integrable functions of independent real variables factor into products of expectations.

[F4] [[def-cross-validation-split-and-risk-target]]: for a fixed equal-fold partition, $\widehat R_{CV}$ is the average of the held-out losses, with training sample size $n-m$.

[F5] [[alg-holdout-loo-lpo-v-fold-and-repeated-cv]]: K-fold evaluation uses the declared common partition and averages its held-out losses.

[F6] [[lem-kfold-cv-variance-covariance-decomposition]]: when the fold errors have common variance $\sigma^2$, common within-fold covariance $\omega$, and common between-fold covariance $\gamma$, the variance of their average is $\sigma^2/n+(m-1)\omega/n+(n-m)\gamma/n$.

[F7] [[def-bernoulli-and-binomial-random-variables]]: For $p\in[0,1]$, a **Bernoulli$(p)$ random variable** takes the value $1$ with probability $p$ and $0$ with probability $1-p$.

## Proof

1.1 By [F6], the K-fold score variance separates diagonal, within-fold, and between-fold covariance terms. [F6]

1.2 To test universality, take $\mathcal Z=\{0,1\}$, $Z_i\stackrel{IID}{\sim}\operatorname{Bernoulli}(p)$, predictor class $\mathcal H=\{0,1\}$, and loss $L(h,z)=hz$. By [F7], each $Z_i$ is one with probability $p$ and zero otherwise. For every training size $k$, let the symmetric rule $A_k(z_1,\ldots,z_k)=\prod_{q=1}^kz_q$. If $i\in I_j$, its fold error is $e_i=Z_i\prod_{\ell\in I_j^c}Z_\ell$, a product of $r:=n-m+1$ distinct Bernoulli variables. By [F1]–[F3], $\mathbb E[e_i]=p^r$, so $\mathbb E[\widehat R_{CV}]=p^r$. [F1, F2, F3, F4, F5, F7, construct]

2.1 For each fixed data vector $x\in\{0,1\}^n$, $\widehat R_{CV}(x)$ is a finite real number. Hence $g(p):=\mathbb E_p[\widehat R_{CV}^2]=\sum_{x\in\{0,1\}^n}\widehat R_{CV}(x)^2p^{s(x)}(1-p)^{n-s(x)}$, where $s(x)$ is the number of ones in $x$, is a polynomial of degree at most $n$. It follows that $\operatorname{Var}_p(\widehat R_{CV})=g(p)-p^{2r}$. Since $2r-n=m(K-2)+2>0$, the term $-p^{2r}$ has degree higher than $g$, so the variance polynomial has degree $2r>n$. [F1, F2, F7, step 1.2, algebra]

3.1 Any proposed estimator $T$ based on this sample, with no dependence on $p$, has conditional mean $t(x):=\mathbb E[T\mid Z=x]$ for each $x\in\{0,1\}^n$; this is finite if $T$ is unbiased with finite expectation for every $0<p<1$, since [F7] gives every such $x$ positive probability. The auxiliary random seed has a fixed law independent of $p$, so $t(x)$ is fixed. Therefore $\mathbb E_p[T]=\sum_x t(x)p^{s(x)}(1-p)^{n-s(x)}$ is a polynomial of degree at most $n$. It cannot equal the degree-$2r$ variance polynomial on the whole interval $(0,1)$, because two polynomials equal on an interval must be identical. This contradiction proves the claim. [F7, given, step 2.1, algebra] ∎

## Remarks

This finite-support argument does not assume that a candidate variance estimator is analytic and applies even when it may use the full observed sample. The theorem does not rule out biased, asymptotic, or law-specific procedures, and it does not apply to an estimator supplied with fresh independent data.
