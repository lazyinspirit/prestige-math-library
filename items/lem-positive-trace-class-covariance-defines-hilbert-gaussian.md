---
id: lem-positive-trace-class-covariance-defines-hilbert-gaussian
kind: lemma
title: Positive trace-class covariance defines a Hilbert Gaussian
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [cor-cauchy-schwarz-for-random-variables, cor-countable-independent-copies-exist, cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator, def-axiom-of-choice, def-countable-choice, def-dependent-choice, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-hilbert-space, def-real-and-complex-inner-product-space, def-separable-space, def-standard-normal-and-normal-laws, def-strongly-measurable-banach-valued-function, def-trace-class-operator, lem-ac-supplies-sequential-choices-for-probability-constructions, lem-characteristic-function-of-a-normal-law, thm-factorization-of-expectations-for-independent-variables, thm-spectral-theorem-for-compact-self-adjoint-operators, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues, thm-uniqueness-of-a-law-from-its-characteristic-function]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "L. Horváth, P. Kokoszka, and R. Reeder, Estimation of the Mean of Functional Time Series and a Two-Sample Problem, JRSS B 75 (2013), Theorem 1, printed pp.105–106 and Appendix A.1, printed pp.117–119"
      url: "https://www.stat.colostate.edu/~piotr/horvathKokoszkaReeder2013.pdf"
    - title: "S. Hörmann and P. Kokoszka, Functional Time Series, in Time Series Analysis: Methods and Applications, Handbook of Statistics 30 (2012), pp.157–186; bibliographic context, DOI 10.1016/B978-0-444-53858-1.00007-7"
      url: "https://doi.org/10.1016/B978-0-444-53858-1.00007-7"
---

## Statement

Assume AC. Let $H$ be a separable real Hilbert space and let $\Gamma:H\to H$ be positive, self-adjoint and trace class. Then there is a Borel $H$-valued random element $G$ such that every $\langle G,h\rangle_H$ is a centered real normal random variable and
$$\mathbb E[\langle G,h\rangle_H\langle G,k\rangle_H]=\langle\Gamma h,k\rangle_H\qquad(h,k\in H).$$
This is the centered Gaussian law with covariance operator $\Gamma$; it includes finite-rank and zero covariance.

## Facts & Assumptions

**Given:** AC, a separable real Hilbert space $H$, and a positive self-adjoint trace-class operator $\Gamma$ on $H$.

[A1] AC supplies Countable Choice and Dependent Choice, which are the weaker choice assumptions used for the countable independent normal family ([[def-axiom-of-choice]], [[lem-ac-supplies-sequential-choices-for-probability-constructions]], [[def-countable-choice]], [[def-dependent-choice]]).

[F1] A compact self-adjoint operator has an orthonormal eigenbasis under AC; for positive $\Gamma$ its eigenvalues are nonnegative ([[thm-spectral-theorem-for-compact-self-adjoint-operators]], [[cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator]]).

[F2] For positive trace-class $\Gamma$, its trace is the finite sum of its nonnegative eigenvalues with multiplicity ([[def-trace-class-operator]], [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]).

[F3] Under Countable Choice and Dependent Choice, a countable independent family with prescribed standard normal law exists; a standard normal has mean zero, variance one and characteristic function $e^{-t^2/2}$ ([[cor-countable-independent-copies-exist]], [[def-standard-normal-and-normal-laws]], [[lem-characteristic-function-of-a-normal-law]]).

[F4] Expectations of products of integrable functions of distinct independent real random variables factor, and a real law is determined by its characteristic function ([[thm-factorization-of-expectations-for-independent-variables]], [[thm-uniqueness-of-a-law-from-its-characteristic-function]]).

[F5] Tonelli interchanges the countable sum of nonnegative squared coordinates with expectation ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F6] A strongly measurable Banach-valued map is an almost-everywhere pointwise limit of measurable simple maps ([[def-strongly-measurable-banach-valued-function]]); separability supplies a dense sequence in $H$ ([[def-separable-space]]).

[F7] Cauchy--Schwarz makes products of square-integrable real random variables integrable and passes their expectations under $L^2$ limits ([[cor-cauchy-schwarz-for-random-variables]]).

## Proof

**Given:** The assumptions and facts in the Statement and Facts & Assumptions.

1.1 By [F1], choose an orthonormal eigenbasis $(e_j)_{j\in J}$ of $\Gamma$ with eigenvalues $\lambda_j\ge0$. This basis is finite or countable: take a dense sequence $(h_k)$ in $H$ and assign to each unit basis vector the least index $k$ with $\|e_j-h_k\|_H<1/4$. Distinct orthogonal unit vectors are separated by $\sqrt2$, so the assignment is injective. By [F2], $\sum_{j\in J}\lambda_j=\operatorname{tr}(\Gamma)<\infty$. [A1, F1, F2, given, choose]

1.2 By [A1] and [F3], take independent standard normal variables $(Z_j)_{j\in J}$ on a common probability space. Define $T=\sum_{j\in J}\lambda_jZ_j^2$ as a nonnegative extended random variable. Tonelli [F5] gives $\mathbb E T=\sum_j\lambda_j\mathbb E Z_j^2=\operatorname{tr}(\Gamma)<\infty$, so $T<\infty$ almost surely: if $\mathbb P(T=\infty)>0$, then $\mathbb E T\ge M\mathbb P(T=\infty)$ for every $M>0$, a contradiction. [A1, F2, F3, F5, algebra]

2.1 On $\{T<\infty\}$ the partial sums $G_N=\sum_{j\in J,\,j\le N}\sqrt{\lambda_j}Z_je_j$ are Cauchy in $H$, since orthonormality gives $\|G_M-G_N\|_H^2=\sum_{N<j\le M}\lambda_jZ_j^2$. Let $G$ be their limit there, and set $G=0$ on the measurable null complement. The convergence set is measurable by the Cauchy criterion. For $F=\varnothing$ the preimage is empty. For nonempty closed $F\subseteq H$, the set $\{G\in F\}$ is the union of $\{T<\infty,\ \operatorname{dist}(G_N,F)\to0\}$ and, when $0\in F$, $\{T=\infty\}$; the first set is measurable because each distance map is continuous and the second is measurable. Thus $G$ is Borel. To see strong measurability, let $(h_k)$ be a dense sequence in $H$ and, for each $N$, map $x$ to the first point among $h_1,\ldots,h_N$ minimizing distance to $x$. The finitely many tie-broken cells are Borel, so these are finite-valued Borel maps; their distances from $x$ tend to zero by density. Composing them with $G$ gives measurable simple maps converging pointwise to $G$, as required by [F6]. On $\{T<\infty\}$, $\|G-G_N\|_H^2=\sum_{j>N}\lambda_jZ_j^2$; [F5] gives $\mathbb E\|G-G_N\|_H^2=\sum_{j>N}\lambda_j\to0$ and $\mathbb E\|G\|_H^2=\sum_j\lambda_j=\operatorname{tr}(\Gamma)<\infty$. [F1, F2, F5, F6, given, step 1.2, construct]

3.1 Fix $h\in H$. The finite sum $\langle G_N,h\rangle_H$ is a sum of independent centered normal variables, so its characteristic function is $\exp(-t^2\sum_{j\le N}\lambda_j\langle e_j,h\rangle_H^2/2)$ by [F3] and [F4]. The series of variances increases to $\sum_j\lambda_j\langle e_j,h\rangle_H^2=\langle\Gamma h,h\rangle_H$, and $G_N\to G$ in $L^2$ by step 2.1. Since $|e^{itx}-e^{ity}|\le|t||x-y|$, the characteristic functions converge to $\exp(-t^2\langle\Gamma h,h\rangle_H/2)$; [F3]–[F4] identify $\langle G,h\rangle_H$ as the centered normal with that variance, including variance zero. [F1, F3, F4, step 2.1]

4.1 For $h,k\in H$, the finite-sum covariances are $\mathbb E[\langle G_N,h\rangle_H\langle G_N,k\rangle_H]=\sum_{j\le N}\lambda_j\langle h,e_j\rangle_H\langle e_j,k\rangle_H$ by independence, centering and [F3]–[F4]. The $L^2$ convergence from step 2.1 and [F7] pass the left side to the limit, while the eigen-expansion of $\Gamma$ makes the right side tend to $\langle\Gamma h,k\rangle_H$. Hence $G$ has the asserted covariance. [F1, F3, F4, F7, step 2.1] ∎