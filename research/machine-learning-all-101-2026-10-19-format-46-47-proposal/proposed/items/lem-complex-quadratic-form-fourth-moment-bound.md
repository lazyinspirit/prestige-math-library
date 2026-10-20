---
id: lem-complex-quadratic-form-fourth-moment-bound
kind: lemma
title: "Fourth-moment bound for a centered complex quadratic form"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
proof_strategy: direct
---

## Statement

Let $\xi=(\xi_1,\ldots,\xi_d)^\mathsf T$ have independent identically distributed complex coordinates with $\mathbb E\xi_i=0$, $\mathbb E|\xi_i|^2=1$, and $\mu_4:=\mathbb E|\xi_i|^4<\infty$. Let $A$ be an independent random complex $d\times d$ matrix with $\mathbb E\|A\|_F^2<\infty$, where $\|A\|_F^2:=\sum_{i,j}|A_{ij}|^2$. Put $\tau:=\mathbb E\xi_1^2$. Then
$$\mathbb E\left|\xi^*A\xi-\operatorname{tr}A\right|^2\le C_{\mu_4,\tau}\,\mathbb E\|A\|_F^2,\qquad C_{\mu_4,\tau}:=\max\{\mu_4-1,1+|\tau|^2\}.$$

## Statement references

Bai, Miao, and Pan, Lemma 1 in §2, printed p. 12 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

Bai and Silverstein, Chapter 3, §3.3, printed pp. 57–58 ([full book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Facts & Assumptions

**Given:** The independent vector and matrix, moment conditions, and Frobenius norm in the Statement.

[F1] IID means the coordinates are mutually independent and have one common law ([[def-identically-distributed-and-iid-random-variables]]).

[F2] The joint law of independent random elements is the product of their marginal laws ([[thm-independent-random-elements-have-product-joint-law]]).

[F3] Fubini's theorem permits integration in either order for an integrable function on a sigma-finite product space ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Given:** The moment hypotheses, independence, and finite Frobenius-norm second moment in the Statement.

1.1 First fix a deterministic complex matrix $A$. Centering the diagonal terms gives $$\xi^*A\xi-\operatorname{tr}A=\sum_iA_{ii}(|\xi_i|^2-1)+\sum_{i\ne j}\overline{\xi_i}A_{ij}\xi_j.$$ In the squared modulus, independence and $\mathbb E\xi_i=0$ make diagonal and off-diagonal parts uncorrelated; distinct diagonal terms are uncorrelated; and two off-diagonal terms have nonzero expectation only when their ordered index pairs agree or are reversed. Expanding those remaining terms yields $$\mathbb E|\xi^*A\xi-\operatorname{tr}A|^2=(\mu_4-1)\sum_i|A_{ii}|^2+\sum_{i\ne j}|A_{ij}|^2+|\tau|^2\sum_{i\ne j}A_{ij}\overline{A_{ji}}.$$ Here $\mu_4-1\ge0$ by Cauchy–Schwarz, and $|\tau|\le\mathbb E|\xi_1|^2=1$. Also $$\left|\sum_{i\ne j}A_{ij}\overline{A_{ji}}\right|\le\sum_{i\ne j}|A_{ij}||A_{ji}|\le\sum_{i\ne j}|A_{ij}|^2.$$ Thus the deterministic quadratic-form variance is at most $C_{\mu_4,\tau}\|A\|_F^2$. [given, F1, algebra]

2.1 By [F2], $(\xi,A)$ has product joint law. The integrand is integrable because $$|\xi^*A\xi-\operatorname{tr}A|^2\le2\|A\|_F^2\|\xi\|_2^4+2d\|A\|_F^2,$$ and $\mathbb E\|\xi\|_2^4<\infty$ in finite dimension. Integrate the deterministic inequality from step 1.1 over the law of $A$; [F3] justifies the order of integration and gives the stated bound. [given, F2, F3, step 1.1, algebra] ∎

## Proof references

Bai, Miao, and Pan, Lemma 1 in §2, printed p. 12 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).
