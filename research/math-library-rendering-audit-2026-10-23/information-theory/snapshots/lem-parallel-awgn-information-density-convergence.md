---
id: lem-parallel-awgn-information-density-convergence
kind: lemma
title: Parallel Gaussian information density obeys a finite-variance law of large numbers
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-parallel-gaussian-channel-with-power-constraint, lem-gaussian-noise-orthogonalization, lem-standard-normal-fourth-moment, thm-nondegenerate-multivariate-normal-law-has-density, def-multivariate-normal-law, def-standard-normal-and-normal-laws, def-axiom-of-choice, thm-gaussian-integral, thm-substitution-for-improper-integrals, thm-independent-random-elements-have-product-joint-law, thm-factorization-of-expectations-for-independent-variables, def-natural-logarithm, def-moments-variance-and-covariance, thm-chebyshev-markov-inequality-for-the-integral]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC is inherited from the Gaussian-law definition and orthogonalization supplier; Chebyshev's inequality and the moment calculation are choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.3"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §17.3.1"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
    - title: "David J. C. MacKay, Information Theory, Inference, and Learning Algorithms, Chapter 12 §12.3"
      url: https://www.geophysik.uni-muenchen.de/~igel/Inv-II/Others/Mackay/information_theory.pdf
---

## Statement

Assume AC. In orthogonal coordinates let the independent channel branches be $Y_j=X_j+Z_j$, where $X_j\sim N(0,p_j)$, $Z_j\sim N(0,\lambda_j)$, all coordinates are independent, $p_j\ge0$, and $\lambda_j>0$. Across channel uses take independent copies. Define the information density on the joint support by
$$\imath(X;Y)=\ln\frac{f_{Y|X}(Y|X)}{f_Y(Y)}.$$
Then
$$\frac1n\sum_{t=1}^n\imath(X_t;Y_t)\longrightarrow\frac12\sum_{j=1}^d\ln\left(1+\frac{p_j}{\lambda_j}\right)$$
in probability.

## Facts & Assumptions

**Given:** The Gaussian branch laws and their independence as stated.

[A1] [[def-axiom-of-choice]]: AC is inherited from [[def-multivariate-normal-law]].

[A2] [[def-parallel-gaussian-channel-with-power-constraint]]: each use adds an independent fresh Gaussian noise vector.

[F1] [[lem-gaussian-noise-orthogonalization]]: a positive-definite Gaussian noise covariance is reduced to independent scalar normal branches by an orthogonal transformation.

[F2] [[thm-nondegenerate-multivariate-normal-law-has-density]]: every positive-variance scalar Gaussian used here has its Gaussian density.

[F3] [[lem-standard-normal-fourth-moment]]: if $G\sim N(0,1)$ then $\mathbb E G^2=1$ and $\mathbb E G^4=3$; scaling gives the moments of each $X_j$ and $Z_j$.

[F4] [[thm-gaussian-integral]] and [[thm-substitution-for-improper-integrals]]: $\int_{\mathbb R}e^{-a(x-b)^2/2}\,dx=\sqrt{2\pi/a}$ for $a>0$.

[F5] [[thm-independent-random-elements-have-product-joint-law]]: independent coordinates have the product density used to form the branchwise output density.

[F6] [[def-natural-logarithm]]: $\ln$ is the natural logarithm.

[F7] [[def-moments-variance-and-covariance]]: variance is the expected squared deviation from the mean.

[F8] [[thm-chebyshev-markov-inequality-for-the-integral]]: Markov's integral inequality applies to nonnegative squared deviations.

[F9] [[def-standard-normal-and-normal-laws]]: $N(0,\lambda_j)$ is centered with variance $\lambda_j$.

[F10] [[thm-factorization-of-expectations-for-independent-variables]]: expectations of products of independent integrable real random variables factor.

## Proof

1.1 For $p_j>0$, completing the square gives $x^2/p_j+(y-x)^2/\lambda_j=((p_j+\lambda_j)/(p_j\lambda_j))(x-p_jy/(p_j+\lambda_j))^2+y^2/(p_j+\lambda_j)$, so [F4] yields $\int_{\mathbb R}\phi_{p_j}(x)\phi_{\lambda_j}(y-x)\,dx=(2\pi(p_j+\lambda_j))^{-1/2}e^{-y^2/(2(p_j+\lambda_j))}=\phi_{p_j+\lambda_j}(y)$. If $p_j=0$, then $X_j=0$ and $Y_j=Z_j$ has density $\phi_{\lambda_j}$. Independence across coordinates and uses gives product output densities by [F5]. [A1, A2, F1, F2, F4, F5, given, algebra, cases]

2.1 For $p_j>0$, substituting $Y_j=X_j+Z_j$ in the log-density ratio gives $\imath_j=\frac12\ln(1+p_j/\lambda_j)-Z_j^2/(2\lambda_j)+(X_j+Z_j)^2/(2(p_j+\lambda_j))$. By [F3] and [F9], the second moments are $p_j$ and $\lambda_j$ and the means are zero; [F5] factors the cross moment, so $\mathbb E\imath_j=\frac12\ln(1+p_j/\lambda_j)$. Its second moment is finite because $(a+b+c)^2\le3(a^2+b^2+c^2)$, $(x+z)^4\le8(x^4+z^4)$, and the Gaussian fourth moments in [F3] are finite. If $p_j=0$, the information density is identically zero, which agrees with the formula; for finitely many branches, $(\sum_j\imath_j)^2\le d\sum_j\imath_j^2$, so the summed density has mean $I=\frac12\sum_j\ln(1+p_j/\lambda_j)$ and finite variance. [F2, F3, F5, F6, F9, step 1.1, given, algebra, cases]

3.1 The pairs $(X_t,Y_t)$ are IID across uses because [A2] gives fresh independent noises and [F5] gives product coordinate laws. Their information densities are therefore IID with mean $I$ and finite variance $v$ by step 2.1. For $s\ne t$, [F10] factors the expectation of the product of their centered information densities, which is zero; expanding the squared sum gives $\mathbb E[(\sum_{t=1}^n\imath(X_t;Y_t)-nI)^2]=nv$. For every $\eta>0$, the normalized deviation event forces this square to be at least $n^2\eta^2$, so [F8] bounds its probability by $v/(n\eta^2)\to0$. [A2, F5, F7, F8, F10, step 2.1, given, algebra] ∎
