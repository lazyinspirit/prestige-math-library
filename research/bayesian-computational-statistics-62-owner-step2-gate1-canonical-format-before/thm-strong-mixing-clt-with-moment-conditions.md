---
dependency_level: 3
id: thm-strong-mixing-clt-with-moment-conditions
kind: theorem
title: Strong-mixing CLTs under bounded, moment, and logarithmic-moment conditions
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-moments-variance-and-covariance
  - lem-zero-long-run-variance-gives-degenerate-clt
  - thm-bounded-summable-strong-mixing-clt
  - lem-strong-mixing-quantile-covariance-bound
  - lem-measurable-observation-does-not-increase-mixing-coefficients
  - thm-dominated-convergence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-holder-inequality-for-integrals
  - cor-cauchy-schwarz-for-random-variables
  - lem-characteristic-function-of-a-normal-law
  - cor-characteristic-function-criterion-for-weak-convergence
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Galin L. Jones, On the Markov Chain Central Limit Theorem, Theorems 5 and 6
      url: https://arxiv.org/pdf/math/0409112
    - title: P. Doukhan, P. Massart and E. Rio, The functional central limit theorem for strongly mixing processes, Lemma 1, Theorem 1 and applications
      url: https://www.numdam.org/item/AIHPB_1994__30_1_63_0.pdf
axiom_use: AC is inherited through the bounded CLT, normal-law characteristic function and characteristic-function convergence criterion. The truncation proof uses no independent-copy or two-sided extension.
proof_strategy: direct
---

## Statement

Assume AC. Let $(Y_k)_{k\ge0}$ be a centered strictly stationary real sequence with $\mathbb E[Y_0^2]<\infty$, and define $S_n=\sum_{k=1}^nY_k$. Each of the following is sufficient:

1. There is $B<\infty$ with $|Y_0|\le B$ almost surely and $\sum_{n\ge1}\alpha_Y(n)<\infty$.
2. For some $\delta>0$, $\mathbb E|Y_0|^{2+\delta}<\infty$ and $\sum_{n\ge1}\alpha_Y(n)^{\delta/(2+\delta)}<\infty$.
3. For some $a\in(0,1)$, $\alpha_Y(n)=O(a^n)$ and $\mathbb E[Y_0^2\log^+|Y_0|]<\infty$, where $\log^+u=\max(0,\log u)$ for $u>0$ and $0\log^+0:=0$.

In each case the covariance series
$$\sigma_Y^2:=\mathbb E[Y_0^2]+2\sum_{k=1}^{\infty}\operatorname{Cov}(Y_0,Y_k)$$
converges absolutely and is nonnegative, and
$$n^{-1/2}S_n\Rightarrow N(0,\sigma_Y^2).$$
This includes the degenerate law $N(0,0)$ when $\sigma_Y^2=0$, as in [[lem-zero-long-run-variance-gives-degenerate-clt]]. The coefficient $\alpha_Y$ and strict stationarity have the meanings in [[def-mixing-coefficients-for-stationary-markov-chain]].

## Facts & Assumptions

**Given:** AC, the centered strictly stationary square-integrable real sequence, and one of the three sufficient regimes.

[A1] AC is assumed for the bounded CLT, normal-law characteristic function and characteristic-function convergence criterion. ([[def-axiom-of-choice]])

[F1] A centered bounded stationary real sequence with summable strong-mixing coefficients has an absolutely summable covariance series and a CLT with its nonnegative covariance-sum variance, including variance zero. ([[thm-bounded-summable-strong-mixing-clt]])

[F2] Absolute tail quantiles have the original absolute-value law under uniform Lebesgue measure; square-integrable variables from fields with event coefficient $a$ satisfy $|\operatorname{Cov}(U,V)|\le4\int_0^aQ_UQ_V$. ([[lem-strong-mixing-quantile-covariance-bound]])

[F3] A measurable scalar observation preserves strict stationarity and does not increase the strong-mixing coefficients. ([[lem-measurable-observation-does-not-increase-mixing-coefficients]])

[F4] Dominated convergence applies on arbitrary measure spaces and therefore also to absolutely dominated covariance series. ([[thm-dominated-convergence]])

[F5] Tonelli interchanges nonnegative product integrals, including integration against counting measure. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F6] Holder's integral inequality holds for conjugate finite exponents on every measure space. ([[thm-holder-inequality-for-integrals]])

[F7] Cauchy–Schwarz bounds absolute product expectations of square-integrable real variables. ([[cor-cauchy-schwarz-for-random-variables]])

[F8] Under AC the characteristic function of $N(0,s^2)$ is $e^{-s^2t^2/2}$, including $s=0$. ([[lem-characteristic-function-of-a-normal-law]])

[F9] Under AC, weak convergence to a specified probability law is equivalent to pointwise convergence of characteristic functions to that of the law. ([[cor-characteristic-function-criterion-for-weak-convergence]])

[F10] Zero covariance-sum variance and absolute covariance summability give convergence of normalized sums in $L^2$ and in distribution to $N(0,0)$. ([[lem-zero-long-run-variance-gives-degenerate-clt]])

[F11] Variance and covariance are centered product expectations. ([[def-moments-variance-and-covariance]])

[F12] The coefficient $\alpha_Y(n)$ is the event supremum for the past and the future separated by $n$. ([[def-mixing-coefficients-for-stationary-markov-chain]])

## Proof

1.1 Write $Q=Q_{Y_0}$ for the absolute tail quantile in [F2], and put $w(u)=1+\sum_{r\ge1}\mathbf1_{\{u<\alpha_Y(r)\}}$ and $J=\int_0^1w(u)Q(u)^2\,du$. We first show in every stated regime that $J<\infty$ and $\sum_r\alpha_Y(r)<\infty$. In regime 1, $Q\le B$ and [F5] give $J\le B^2(1+\sum_r\alpha_Y(r))<\infty$. This regime also already follows directly from [F1]. [A1, F1, F2, F5, given, algebra]

1.2 In regime 2 put $p=2+\delta$ and $\theta=1-2/p=\delta/(2+\delta)\in(0,1)$. Holder's inequality [F6] with exponents $p/2$ and $p/(p-2)$, followed by the quantile identity [F2], gives $\int_0^{\alpha_Y(r)}Q(u)^2\,du\le\alpha_Y(r)^\theta\left(\int_0^1Q(u)^p\,du\right)^{2/p}=\alpha_Y(r)^\theta(\mathbb E|Y_0|^p)^{2/p}.$ Tonelli [F5] and the assumed summability yield $J<\infty$. Also $0\le\alpha_Y(r)\le1$ by its event definition, so $\alpha_Y(r)\le\alpha_Y(r)^\theta$, proving unweighted summability. [F2, F5, F6, F12, step 1.1, given, algebra]

1.3 In regime 3, choose constants $C<\infty$ and $a\in(0,1)$ so $\alpha_Y(r)\le Ca^r$ outside a finite set of lags. Counting the positive integers satisfying $u<Ca^r$ shows $w(u)\le C_1+C_2\log(1/u)$ for $0<u<1$, with finite nonnegative constants $C_1,C_2$; also $\sum_r\alpha_Y(r)<\infty$. The elementary inequality $xv\le x\log^+x+e^v$ for $x,v\ge0$ follows for $x>0$ by maximizing $xv-x\log x+x$ as a function of $x$, whose maximum is $e^v$; $x=0$ is immediate. Set $x=Q(u)^2$ and $v=\tfrac12\log(1/u)$, then integrate and use [F2]: $\int_0^1Q(u)^2\log(1/u)\,du\le2\int_0^1Q(u)^2\log^+(Q(u)^2)\,du+2\int_0^1u^{-1/2}\,du=4\mathbb E[Y_0^2\log^+|Y_0|]+4<\infty.$ Together with the assumed second moment this proves $J<\infty$. Thus the two properties announced in step 1.1 hold in all three regimes, without imposing a power moment in regime 3. [F2, step 1.1, given, algebra]

2.1 Let $\gamma_r=\operatorname{Cov}(Y_0,Y_r)$. By [F2], [F12] and [F5], $\sum_{r\ge1}|\gamma_r|\le4\sum_{r\ge1}\int_0^{\alpha_Y(r)}Q(u)^2\,du=4\int_0^1(w(u)-1)Q(u)^2\,du<\infty.$ Set $D_Y=\gamma_0+2\sum_{r\ge1}|\gamma_r|$. Expanding a finite centered sum over $I\subseteq\mathbb N_0$ and counting at most $|I|$ pairs at each positive lag gives $\mathbb E(\sum_{i\in I}Y_i)^2\le D_Y|I|$. For consecutive sums the exact expression is $\operatorname{Var}(S_n)/n=\gamma_0+2\sum_{r=1}^{n-1}(1-r/n)\gamma_r$. The summable majorant and [F4] prove convergence to the stated $\sigma_Y^2$, which is nonnegative as a limit of nonnegative variances. [F2, F4, F5, F11, F12, step 1.1, step 1.2, step 1.3, algebra]

2.2 For an integer $M\ge1$ put $c_M(y)=\max(-M,\min(y,M))$, $Z_k^{(M)}=c_M(Y_k)-\mathbb Ec_M(Y_0)$, and $H_M(y)=y-c_M(y)$. Then $R_k^{(M)}=Y_k-Z_k^{(M)}=H_M(Y_k)-\mathbb EH_M(Y_0)$. Both processes are strictly stationary by [F3], and $Z^{(M)}$ is centered and bounded by $2M$. Its coefficients are bounded by $\alpha_Y$, whose sum is finite by steps 1.1–1.3. Thus [F1] gives an absolutely convergent covariance series with nonnegative sum $\sigma_M^2$, normalized variance convergence to $\sigma_M^2$, and $n^{-1/2}\sum_{k=1}^nZ_k^{(M)}\Rightarrow N(0,\sigma_M^2)$. [A1, F1, F3, step 1.1, step 1.2, step 1.3, construct]

2.3 Put $t_M=\mathbb P(|Y_0|>M)$ and let $Q_{H_M}$ be the absolute quantile of $H_M(Y_0)$. Since $|H_M(Y_0)|=(|Y_0|-M)_+\le|Y_0|$, monotonicity of tail probabilities gives $Q_{H_M}(u)\le Q(u)$, while $Q_{H_M}(u)=0$ for $u\ge t_M$ by its defining infimum. The centering in $R^{(M)}$ does not change any covariance, and $\operatorname{Var}(H_M(Y_0))\le\mathbb EH_M(Y_0)^2$. Applying [F2] to the raw, uncentered $H_M(Y_k)$, followed by [F5], therefore gives $D_{R^{(M)}}:=\mathbb E(R_0^{(M)})^2+2\sum_{r\ge1}|\operatorname{Cov}(R_0^{(M)},R_r^{(M)})|\le8\int_0^{t_M}w(u)Q(u)^2\,du=:e_M^2.$ Here the integrand is integrable by steps 1.1–1.3, and $t_M\to0$ because $Y_0$ is finite almost surely; hence [F4] makes $e_M\to0$. The same finite covariance expansion as in step 2.1 now gives $\sup_n\|n^{-1/2}\sum_{k=1}^nR_k^{(M)}\|_2\le e_M$. This bound uses the raw remainder quantile, without asserting that the centered remainder has that quantile. [F2, F4, F5, F11, F12, step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, algebra]

3.1 The reverse triangle inequality for $L^2$ norms gives $|\|S_n/\sqrt n\|_2-\|n^{-1/2}\sum_{k=1}^nZ_k^{(M)}\|_2|\le e_M$ by step 2.3. This norm inequality follows by expanding a square and applying [F7] to its mixed term. Using the variance limits in steps 2.1 and 2.2 yields $|\sigma_Y-\sigma_M|\le e_M$, where the square roots are nonnegative. Therefore $\sigma_M\to\sigma_Y$. [F7, step 2.1, step 2.2, step 2.3, algebra]

3.2 For fixed real $t$, $|e^{ix}-e^{iy}|\le|x-y|$, obtained by integrating the unit-modulus derivative along the real interval, and [F7] give $|\mathbb Ee^{itS_n/\sqrt n}-\mathbb Ee^{it\sum_{k=1}^nZ_k^{(M)}/\sqrt n}|\le |t|e_M$. By the CLT in step 2.2 and [F9], the second characteristic function tends to $e^{-t^2\sigma_M^2/2}$, identified by [F8]. Consequently $\limsup_{n\to\infty}|\mathbb Ee^{itS_n/\sqrt n}-e^{-t^2\sigma_Y^2/2}|\le |t|e_M+|e^{-t^2\sigma_M^2/2}-e^{-t^2\sigma_Y^2/2}|.$ Let $M\to\infty$ and apply step 3.1. Under [A1], [F8]–[F9] prove $S_n/\sqrt n\Rightarrow N(0,\sigma_Y^2)$. The case $\sigma_Y^2=0$ is also independently supplied by [F10] using absolute covariance summability from step 2.1. All three regimes and the degenerate case follow. [A1, F7, F8, F9, F10, step 2.1, step 2.2, step 2.3, step 3.1] ∎
