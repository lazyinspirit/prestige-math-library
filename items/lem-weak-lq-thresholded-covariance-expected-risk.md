---
id: lem-weak-lq-thresholded-covariance-expected-risk
kind: lemma
title: "Expected squared operator error of thresholded sparse covariance"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - alg-entrywise-thresholded-sample-covariance
  - def-minimax-squared-operator-risk
  - def-sample-covariance-and-operator-norm-loss
  - def-weak-lq-sparse-covariance-class
  - lem-weak-lq-thresholded-covariance-row-sum
  - thm-weak-lq-sample-covariance-entrywise-deviation
  - cor-layer-cake-formulas-for-random-variables
  - cor-cauchy-schwarz-for-random-variables
  - lem-symmetric-matrix-operator-norm-rayleigh
  - thm-cauchy-schwarz-finite
  - thm-holder-finite
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Cai and Zhou, Optimal Rates of Convergence for Sparse Covariance Matrix Estimation"
      url: "https://arxiv.org/pdf/1302.3030"
---

## Statement

Fix $\tau>0$, $0\le q<1$ and $\beta>1$. Let $n\ge1$, $p\ge2$,
$p\ge n^\beta$ and $a=\log(p)/n\le1$. For iid observations from
$\mathcal P_q(\tau,c)$ of [[def-weak-lq-sparse-covariance-class]], use
[[alg-entrywise-thresholded-sample-covariance]] with
$\lambda=8192\tau\sqrt a$. There is $C=C(q,\tau)<\infty$ such that
$$\sup_{P\in\mathcal P_q(\tau,c)}\mathbb E_{P^{\otimes n}}\|\widehat\Sigma-\Sigma(P)\|_{\mathrm{op}}^2\le C\{c^2a^{1-q}+a\}.$$
The estimator uses sample centering and divisor $n$, including unknown means;
no independence between coordinates is assumed. This is the unmodified
threshold estimator, not a clipped version.

## Facts & Assumptions

**Given:** The sample, class, dimension and threshold hypotheses in the statement.

[F1] The directional tail is $P(|v^{\mathsf T}(X-EX)|>t)\le e^{-t^2/(2\tau)}$. [[def-weak-lq-sparse-covariance-class]].

[F2] Under the n-fold sample law $P^{\otimes n}$, for every $u>0$ the centered sample covariance entrywise error is at most $192\tau(\sqrt{u/n}+u/n)$ except with probability $2pe^{-u}+2p^2e^{-2u}$. [[thm-weak-lq-sample-covariance-entrywise-deviation]].

[F3] On entrywise error at most $\lambda/2$, thresholding has operator error at most $C_q(c\lambda^{1-q}+\lambda)$. [[lem-weak-lq-thresholded-covariance-row-sum]].

[F4] Nonnegative moments can be integrated from their tails. [[cor-layer-cake-formulas-for-random-variables]].

[F5] The algorithm uses the sample-centered covariance with divisor $n$, keeps the diagonal and never increases the absolute value of an entry. [[def-sample-covariance-and-operator-norm-loss]] [[alg-entrywise-thresholded-sample-covariance]].

[F6] Cauchy–Schwarz for square-integrable random variables gives $|\mathbb E UV|\le(\mathbb E U^2)^{1/2}(\mathbb E V^2)^{1/2}$, including covariance entries and an indicator of a bad event. [[cor-cauchy-schwarz-for-random-variables]].

[F7] Finite-sum Cauchy–Schwarz gives $|\sum_j a_jb_j|^2\le(\sum_j a_j^2)(\sum_j b_j^2)$. [[thm-cauchy-schwarz-finite]].

[F8] Finite-sum Hölder with conjugate exponents $4$ and $4/3$ gives $(n^{-1}\sum_i y_i)^4\le n^{-1}\sum_i y_i^4$ for nonnegative $y_i$. [[thm-holder-finite]].

## Proof



1.1 Put $u=\log(8p^{10})\le13\log p$. Since $a\le1$, $192\tau(\sqrt{u/n}+u/n)\le192\tau(\sqrt{13}+13)\sqrt a<4096\tau\sqrt a=\lambda/2$. The failure bound in [F2] is $1/(4p^9)+1/(32p^{18})\le p^{-8}$. Thus an event $G$ has $P^{\otimes n}$-probability at least $1-p^{-8}$, and on it [F3] bounds squared loss by $C(q,\tau)(c^2a^{1-q}+a)$. [given, F2, F3, algebra]

1.2 Write $U_{ij}=X_{ij}-EX_{ij}$. By [F1] and [F4], $E_{P^{\otimes n}}|U_{ij}|^8\le(2\tau)^4\,4!=384\tau^4$. Also, for unit $v$, $v^{\mathsf T}\Sigma v\le\int_0^\infty e^{-t/(2\tau)}dt=2\tau$; applying [F6] to centered coordinates gives $|\sigma_{jk}|\le2\tau$. The sample-centered diagonal obeys $0\le\widehat\sigma^*_{jj}\le n^{-1}\sum_iU_{ij}^2$. Applying [F7] to the two centered coordinate sample vectors gives $|\widehat\sigma^*_{jk}|^2\le\widehat\sigma^*_{jj}\widehat\sigma^*_{kk}$. Therefore $$E_{P^{\otimes n}}|\widehat\sigma^*_{jk}|^4\le\tfrac12 E_{P^{\otimes n}}[(\widehat\sigma^*_{jj})^4+(\widehat\sigma^*_{kk})^4]\le384\tau^4,$$ where the final inequality uses [F8] with $y_i=U_{ij}^2$ (and likewise for $k$). These bounds are independent of the unknown means. [given, F1, F4, F6, F7, F8, algebra]

2.1 By [F5], $E_{P^{\otimes n}}|\widehat\sigma_{jk}-\sigma_{jk}|^4\le8E_{P^{\otimes n}}(|\widehat\sigma^*_{jk}|^4+|\sigma_{jk}|^4)\le C\tau^4$. For any matrix $A$, [F7] gives $\|A\|_{\mathrm{op}}^2\le\sum_{jk}|A_{jk}|^2$ by applying finite Cauchy–Schwarz to each row against a unit vector; [F7] also gives $(\sum_{jk}|A_{jk}|^2)^2\le p^2\sum_{jk}|A_{jk}|^4$. Thus $E_{P^{\otimes n}}\|\widehat\Sigma-\Sigma\|_{\mathrm{op}}^4\le C\tau^4p^4$. Applying [F6] to $\|\widehat\Sigma-\Sigma\|_{\mathrm{op}}^2$ and $\mathbf1_{G^c}$ and using step 1.1 gives $$E_{P^{\otimes n}}[\|\widehat\Sigma-\Sigma\|_{\mathrm{op}}^2;G^c]\le C\tau^2p^2p^{-4}=C\tau^2p^{-2}.$$ Since $p\ge n^\beta$ implies $n\le p^{1/\beta}\le p$ and $1/p\le\log p$, we have $p^{-2}\le\log p/n=a$. Adding the good-event bound proves the claim uniformly over the class. [given, F5, F6, F7, step 1.1, step 1.2, algebra] ∎

