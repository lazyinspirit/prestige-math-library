---
id: thm-thresholded-sparse-covariance-minimax-rate
kind: theorem
title: "Capped thresholded minimax rate for weak-lq sparse covariance"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - alg-entrywise-thresholded-sample-covariance
  - def-minimax-squared-operator-risk
  - def-sample-covariance-and-operator-norm-loss
  - def-axiom-of-choice
  - def-weak-lq-sparse-covariance-class
  - cor-layer-cake-formulas-for-random-variables
  - lem-symmetric-matrix-operator-norm-rayleigh
  - lem-weak-lq-thresholded-covariance-expected-risk
  - lem-diagonal-covariance-minimax-lower-bound
  - lem-gaussian-sparse-covariance-mixture-lower-bound
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "T. Tony Cai and Harrison H. Zhou, Optimal Rates of Convergence for Sparse Covariance Matrix Estimation, Theorem 1"
      url: "https://arxiv.org/pdf/1302.3030"
---

## Statement

Assume AC. Fix $\beta>1$, $M,\tau>0$, and $0\le q<1$. For all integers
$n\ge1$, $p\ge2$ with $p\ge n^\beta$, and every radius
$$0\le c=c_{n,p}\le M n^{(1-q)/2}(\log p)^{-(3-q)/2},$$
put $a=\log(p)/n$ and $r_{n,p}=c^2a^{1-q}+a$. Over the law class
$\mathcal P_q(\tau,c)$ of [[def-weak-lq-sparse-covariance-class]], the
minimax squared operator risk of [[def-minimax-squared-operator-risk]] satisfies
$$C_1\min\{1,r_{n,p}\}\le\mathfrak R_n(\mathcal P_q(\tau,c))\le C_2\min\{1,r_{n,p}\},$$
where $0<C_1\le C_2<\infty$ depend only on $\beta,M,\tau,q$.
For $a\le1$, the unmodified estimator of
[[alg-entrywise-thresholded-sample-covariance]], with
$\lambda=8192\tau\sqrt a$, has expected squared operator risk at most
$C(q,\tau)r_{n,p}$. A rule attaining the capped upper bound in every
dimension is explicit: use that estimator when $r_{n,p}<1$, and output
the zero matrix when $r_{n,p}\ge1$. All original dimension regimes,
including super-exponential $p$, are retained; the risk saturates instead
of diverging. The raw threshold estimator alone is not claimed to attain
the cap outside its stated regime.

## Facts & Assumptions

**Given:** The fixed parameters, nonnegative radius, dimension growth, law class and risk conventions in the statement.

[F1] In the regime $a\le1$, under the n-fold product sample law $P^{\otimes n}$, the raw threshold estimator with divisor $n$ and sample centering has expected risk at most $C(q,\tau)(c^2a^{1-q}+a)$. [[def-minimax-squared-operator-risk]] [[lem-weak-lq-thresholded-covariance-expected-risk]].

[F2] The diagonal Gaussian subfamily gives risk at least $b\tau^2\min\{1,a\}$, for every radius including zero. [[lem-diagonal-covariance-minimax-lower-bound]].

[F3] For fixed parameters, sufficiently large $p$ and $c/[2(sv\sqrt a)^q]\ge2$, the explicit sparse Gaussian mixture gives risk at least $b_1 c^2a^{1-q}$, with $s=\tau/4$ and fixed $v>0$. [[lem-gaussian-sparse-covariance-mixture-lower-bound]].

[F4] The class imposes the unit-direction tail bound $P(|v^{\mathsf T}(X-EX)|>t)\le e^{-t^2/(2\tau)}$. [[def-weak-lq-sparse-covariance-class]].

[F5] The covariance matrix is $\Sigma=E[(X-EX)(X-EX)^{\mathsf T}]$, so it is symmetric and positive semidefinite. [[def-sample-covariance-and-operator-norm-loss]].

[F6] For nonnegative $T$, $E[T]=\int_0^\infty P(T>u)\,du$. [[cor-layer-cake-formulas-for-random-variables]].

[F7] For a real symmetric matrix, the operator norm is the maximum absolute Rayleigh quotient. [[lem-symmetric-matrix-operator-norm-rayleigh]].

## Proof



1.1 For any unit vector $v$, put $Y=v^{\mathsf T}(X-EX)$. By [F4] and layer cake [F6], $v^{\mathsf T}\Sigma v=E[Y^2]=\int_0^\infty P(Y^2>u)\,du\le\int_0^\infty e^{-u/(2\tau)}\,du=2\tau$. By [F5], $\Sigma$ is symmetric positive semidefinite, so [F7] gives $\|\Sigma\|_{\mathrm{op}}\le2\tau$. The constant zero estimator therefore has squared loss at most $4\tau^2$. If $r_{n,p}\ge1$, this proves the capped upper bound for the specified switch. If $r_{n,p}<1$, then $a<1$, and [F1] proves it for the threshold branch. The switch is measurable, since its branch depends only on the known dimensions and class radius; the threshold operations are measurable entrywise. [given, F1, F4, F5, F6, F7, algebra]

1.2 Let $P_0$ and $v$ be the fixed constants in [F3]. For $p<P_0$, $n\le p^{1/\beta}<P_0^{1/\beta}$, so $a\ge\log2/P_0^{1/\beta}$. Thus [F2] is bounded below by a positive fixed-parameter constant, which dominates a constant multiple of $\min\{1,r_{n,p}\}\le1$. For $a\ge1$, [F2] likewise gives this constant lower bound, regardless of $p$. These arguments cover all finite-size and saturated-dimension cases without a hidden asymptotic restriction. [given, F2, F3, algebra]

2.1 It remains to consider $p\ge P_0$ and $a<1$. If $c/[2(sv\sqrt a)^q]<2$, then $c^2a^{1-q}<16(sv)^{2q}a$, and [F2] alone bounds the risk below by a positive fixed-parameter multiple of $r_{n,p}$; this includes all effective sparse counts rounding to zero and $q=0$. Otherwise [F3] supplies the sparse term, while [F2] supplies the $a$ term. The maximum of two nonnegative lower bounds is at least half their sum, giving a fixed-parameter multiple of $r_{n,p}$ and hence of its cap. Combining with step 1.2 and the upper bound proves the result. [given, F2, F3, step 1.1, step 1.2, algebra] ∎

## Remarks

The uncapped claim copied from the source fails when $\log p/n$ diverges;
[[cex-thresholded-sparse-covariance-rate-unbounded-at-superexponential-dimension]]
retains the precise obstruction. The cap corrects that claim without
removing any dimension regime. The local sparse-mixture lemma proves its
technical remainder estimate directly; no source supplement lemma is used
without proof.
