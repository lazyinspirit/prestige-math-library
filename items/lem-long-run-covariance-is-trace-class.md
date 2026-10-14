---
id: lem-long-run-covariance-is-trace-class
kind: lemma
title: Long-run covariance of an L2-m-approximable shift is trace class
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [cor-cauchy-schwarz-for-random-variables, def-bochner-integrable-function, def-countable-choice, def-dependent-choice, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-hilbert-space, def-independent-random-elements, def-l2-m-approximable-causal-bernoulli-shift, def-real-and-complex-inner-product-space, def-strongly-measurable-banach-valued-function, def-trace-class-operator, lem-bochner-integral-norm-inequality, lem-measurable-functions-preserve-independence, lem-nuclear-series-characterizes-trace-norm, lem-product-rectangle-kernels-are-dense-in-product-l-two, lem-real-l-two-kernel-operator-is-bounded-and-rank-one-compatible, thm-bochner-integrability-criterion, thm-bounded-linear-maps-commute-with-bochner-integration, thm-factorization-of-expectations-for-independent-variables, thm-grouping-independent-sigma-algebras, thm-trace-class-is-a-two-sided-banach-operator-ideal]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "L. Horváth, P. Kokoszka, and R. Reeder, Estimation of the Mean of Functional Time Series and a Two-Sample Problem, JRSS B 75 (2013), Theorem 1, printed pp.105–106, and Appendix A.1, printed pp.117–119"
      url: "https://www.stat.colostate.edu/~piotr/horvathKokoszkaReeder2013.pdf"
    - title: "S. Hörmann and P. Kokoszka, Functional Time Series, in Time Series Analysis: Methods and Applications, Handbook of Statistics 30 (2012), pp.157–186; bibliographic context, DOI 10.1016/B978-0-444-53858-1.00007-7"
      url: "https://doi.org/10.1016/B978-0-444-53858-1.00007-7"
---

## Statement

Assume Countable Choice and Dependent Choice. Let $H=L^2([0,1],dt;\mathbb R)$,
let $(X_t)_{t\in\mathbb Z}$ be a centered causal Bernoulli shift as in
[[def-l2-m-approximable-causal-bernoulli-shift]], and suppose it is
$L^2$-$m$-approximable. Write $\sigma=(\mathbb E\|X_0\|_H^2)^{1/2}$,
let $S_1(H)$ be the trace-class Banach space with trace norm $\|\cdot\|_1$
([[def-trace-class-operator]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]),
write $\mathbb E_B$ for a Bochner integral, and define $x\otimes y:H\to H$ by
$(x\otimes y)h=\langle h,y\rangle_Hx$. The Bochner series
$$ \Gamma=\mathbb E_B[X_0\otimes X_0]+ \sum_{j=1}^{\infty}\bigl(\mathbb E_B[X_0\otimes X_j] +\mathbb E_B[X_j\otimes X_0]\bigr) $$
converges absolutely in trace norm to a positive self-adjoint trace-class
operator. For $S_n=\sum_{t=1}^nX_t$, the Bochner covariance operators
$\Gamma_n=n^{-1}\mathbb E_B[S_n\otimes S_n]$ satisfy
$\|\Gamma_n-\Gamma\|_1\to0$. If $\boxtimes$ is the product-kernel class from
[[lem-real-l-two-kernel-operator-is-bounded-and-rank-one-compatible]], then
$$ \kappa_j=\mathbb E_B[X_0\boxtimes X_j],\qquad \widetilde\kappa_j=\mathbb E_B[X_j\boxtimes X_0] $$
are well-defined elements of $K=L^2([0,1]^2,dt\times dt;\mathbb R)$, and
$$ c=\kappa_0+\sum_{j=1}^{\infty}(\kappa_j+\widetilde\kappa_j) $$
converges absolutely in $K$ and satisfies $T_c=\Gamma$. Equivalently, $c$ is
the design's long-run covariance-kernel series interpreted as an
$L^2([0,1]^2)$ equivalence class; no pointwise representatives are fixed.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, and a centered $L^2$-$m$-approximable causal Bernoulli shift $(X_t)_{t\in\mathbb Z}$ in $H$.

[A1] Countable Choice is used for the Banach-space completeness of $S_1(H)$; Dependent Choice is among the assumptions used to construct the countable replacement extension in [[def-l2-m-approximable-causal-bernoulli-shift]]. ([[def-countable-choice]], [[def-dependent-choice]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]])

[F1] The definition supplies $\mathbb E\|X_0\|_H^2<\infty$, $\delta_m=(\mathbb E\|X_0-X_{0,m}\|_H^2)^{1/2}$ with $\sum_{m\ge1}\delta_m<\infty$, $\delta_0\le2\sigma$, and $\|X_j-X_{j,m}\|_{L^2(H)}=\delta_m$. For $j\ge1$, the innovations used by $X_0$ are disjoint from those used by $X_{j,j-1}$; for $j=1$, $X_{1,0}$ is the full independent replacement. The original and replacement innovation families together are independent, so grouping their disjoint coordinate sigma-algebras and applying measurable maps makes these two random elements independent; $X_{j,j-1}$ has the same centered law as $X_0$. ([[def-l2-m-approximable-causal-bernoulli-shift]], [[thm-grouping-independent-sigma-algebras]], [[lem-measurable-functions-preserve-independence]])

[F2] For $x,y\in H$, $x\otimes y$ is trace class with $\|x\otimes y\|_1=\|x\|_H\|y\|_H$; $S_1(H)$ is Banach and $\|T\|\le\|T\|_1$ ([[def-trace-class-operator]], [[lem-nuclear-series-characterizes-trace-norm]], [[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[F3] A strongly measurable Banach-valued function with integrable norm has a Bochner integral, $\|\int U\|\le\int\|U\|$, and bounded linear maps commute with that integral ([[def-strongly-measurable-banach-valued-function]], [[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[thm-bounded-linear-maps-commute-with-bochner-integration]]). Cauchy--Schwarz for real random variables bounds the expectations of products of the two norms ([[cor-cauchy-schwarz-for-random-variables]]).

[F4] For independent real random variables, expectations of integrable products factor ([[thm-factorization-of-expectations-for-independent-variables]]); measurable functions of independent random elements remain independent ([[lem-measurable-functions-preserve-independence]]).

[F5] Under Countable Choice, $K$ is a real Hilbert space. The product-kernel map $x\boxtimes y$ is continuous bilinear into $K$, $\|x\boxtimes y\|_K=\|x\|_H\|y\|_H$, and its integral operator is $x\otimes y$; moreover $\langle x\boxtimes y,g\boxtimes h\rangle_K= \langle x,g\rangle_H\langle y,h\rangle_H$ ([[lem-real-l-two-kernel-operator-is-bounded-and-rank-one-compatible]]). Finite complex linear combinations of rectangle kernels are dense in complex product $L^2$; taking real parts shows that their finite real span is dense in $K$ ([[lem-product-rectangle-kernels-are-dense-in-product-l-two]]).

**Proof technique:** direct.

## Proof

**Given:** The assumptions in the Statement and Facts & Assumptions.

1.1 Put $\sigma=(\mathbb E\|X_0\|_H^2)^{1/2}$. For each $j\ge0$, the map $(x,y)\mapsto x\otimes y$ is continuous into $S_1(H)$, since [F2] and the triangle inequality give $$ \|x\otimes y-x'\otimes y'\|_1 \le \|x-x'\|_H\|y\|_H+\|x'\|_H\|y-y'\|_H. $$ Likewise $(x,y)\mapsto x\boxtimes y$ is continuous into $K$ by [F5]. Strong simple approximants to $X_0$ and $X_j$ therefore make both tensor-valued maps strongly measurable. Their norms have expectations at most $(\mathbb E\|X_0\|^2)^{1/2}(\mathbb E\|X_j\|^2)^{1/2}=\sigma^2$ by Cauchy–Schwarz and stationarity. [F1, F2, F3, F5, algebra]

1.2 Fix $j\ge1$ and put $Z_j=X_{j,j-1}$. For any $h,g\in H$, the scalar maps $x\mapsto\langle x,g\rangle_H$ and $y\mapsto\langle h,y\rangle_H$ are continuous. By [F1] and [F4] their values at $X_0$ and $Z_j$ are independent, and the first has mean zero. The bounded linear functional $L_{h,g}(T)=\langle Th,g\rangle_H$ on $S_1(H)$ commutes with Bochner integration by [F2]–[F3], so $$ L_{h,g}(\mathbb E_B[X_0\otimes Z_j]) =\mathbb E[\langle h,Z_j\rangle_H\langle X_0,g\rangle_H]=0. $$ For each $h$, taking $g=\mathbb E_B[X_0\otimes Z_j]h$ shows that this vector has zero squared norm, so $\mathbb E_B[X_0\otimes Z_j]=0$; reversing the tensor factors gives $\mathbb E_B[Z_j\otimes X_0]=0$ as well. For the kernel expectation, pair $\mathbb E_B[X_0\boxtimes Z_j]$ with any product kernel $g\boxtimes h$. By [F3] and [F5], the scalar pairing is $\mathbb E[\langle X_0,g\rangle_H\langle Z_j,h\rangle_H]$, which is zero by independence and centering. Such product kernels span a dense subspace of $K$ by [F5], so $\mathbb E_B[X_0\boxtimes Z_j]=0$; similarly $\mathbb E_B[Z_j\boxtimes X_0]=0$. [F1, F2, F3, F4, F5]

2.1 By step 1.2, stationarity, and [F1], for every $j\ge1$, $$ \begin{aligned} \|\mathbb E_B[X_0\otimes X_j]\|_1 &=\|\mathbb E_B[X_0\otimes(X_j-Z_j)]\|_1\\ &\le \mathbb E[\|X_0\|_H\|X_j-Z_j\|_H]\le\sigma\delta_{j-1}. \end{aligned} $$ The same bound holds for $\mathbb E_B[X_j\otimes X_0]$. It also holds for $\|\kappa_j\|_K$ and $\|\widetilde\kappa_j\|_K$ by [F3] and [F5]. Since $\delta_0\le2\sigma$ and $\sum_{m\ge1}\delta_m<\infty$, both series of trace-class terms and product-kernel terms are absolutely summable. The Banach property of $S_1(H)$ in [F2] and the Hilbert completeness of $K$ in [A1], [F5] give their norm limits. [A1, F1, F2, F3, F5, step 1.2]

3.1 For $n\ge1$, set $S_n=\sum_{t=1}^nX_t$ and $\Gamma_n=n^{-1}\mathbb E_B[S_n\otimes S_n]$. Step 1.1 makes this Bochner expectation well-defined. It is positive and self-adjoint because for every $h\in H$, $$ \langle\Gamma_n h,h\rangle_H=n^{-1}\mathbb E\langle S_n,h\rangle_H^2\ge0. $$ Expanding the finite sum and using stationarity gives $$ \Gamma_n=\mathbb E_B[X_0\otimes X_0] +\sum_{j=1}^{n-1}\left(1-\frac jn\right) \left(\mathbb E_B[X_0\otimes X_j]+\mathbb E_B[X_j\otimes X_0]\right). $$ Absolute summability from step 2.1 implies $\Gamma_n\to\Gamma$ in trace norm: for any fixed finite lag cutoff the coefficients tend to $1$, and the remaining trace-norm tail is uniformly bounded by the tail of the absolutely convergent series. Since $\|T\|\le\|T\|_1$, positivity and self-adjointness pass to the limit. Thus $\Gamma$ is positive self-adjoint and trace class. [F1, F2, step 1.1, step 2.1, algebra]

4.1 For $f,g\in H$, define the bounded linear functional $\Lambda_{f,g}(k)=\langle T_k f,g\rangle_H$ on $K$; [F5] gives $|\Lambda_{f,g}(k)|\le\|k\|_K\|f\|_H\|g\|_H$. For each $j\ge0$, [F5] and [F3] therefore give $$ \Lambda_{f,g}(\kappa_j) =\mathbb E\langle (X_0\otimes X_j)f,g\rangle_H =\langle (\mathbb E_B[X_0\otimes X_j])f,g\rangle_H, $$ and the same identity holds for the reversed terms. Passing to the absolutely convergent kernel and trace-norm series in step 2.1 yields $\langle T_c f,g\rangle_H=\langle\Gamma f,g\rangle_H$ for every $f,g$. Hence $T_c=\Gamma$, and $c$ is exactly the design's $L^2$ covariance-kernel equivalence class. [F2, F3, F5, step 2.1] ∎