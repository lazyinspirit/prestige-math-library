---
id: lem-scaffold-convex-server-variance
kind: lemma
title: Convex SCAFFOLD server-update second moment
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-scaffold
  - def-scaffold-analysis-trajectory-and-errors
  - lem-scaffold-control-tracking-identity
  - lem-finite-martingale-difference-sum-variance
  - lem-uniform-client-sampling-moments
  - lem-smooth-convex-gradient-difference
  - lem-finite-sum-gradient-is-average
  - lem-relaxed-euclidean-squared-norm
  - def-euclidean-inner-product
  - def-axiom-of-choice
  - def-filtration-and-filtered-probability-space
  - def-conditional-expectation-as-an-ae-class
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-taking-out-what-is-known
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-linearity-monotonicity-and-modulus-bound
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix E.1, Lemma 10"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $f_i:\mathbb R^d\to\mathbb R$ be convex, differentiable and
$\beta$-smooth, with equal-client objective $f=N^{-1}\sum_i f_i$ attaining
$f^\star=f(x^\star)$. At round $r$, run Option II SCAFFOLD with $S$ clients
sampled uniformly without replacement, $K$ local steps and effective step
$\widetilde\eta=K\eta_l\eta_g$. Assume $c=N^{-1}\sum_i c_i$, initialize
$c_i^0=\nabla f_i(x_0)$ and $c^0=N^{-1}\sum_i c_i^0$, and assume local
stochastic gradients are conditionally unbiased with within-client variance
at most $\sigma^2$. All expectations are unconditional over the round
history, client sample and local stochastic-gradient draws. With $E_r$ and
$C_{r-1}$ as in the SCAFFOLD analysis-trajectory definition,
$$ \mathbb E\|x_r-x_{r-1}\|_2^2 \le6\widetilde\eta^2\beta^2E_r +12\widetilde\eta^2C_{r-1} +6\widetilde\eta^2\beta\mathbb E[f(x_{r-1})-f^\star] +\frac{18\widetilde\eta^2\sigma^2}{KS}. $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix E.1, Lemma 10 and its proof](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions

**Given:** The Option II SCAFFOLD round, controls, convex equal-client objective and stochastic-gradient assumptions in the Statement.

[F1] [[alg-scaffold]]: the server displacement is $-\widetilde\eta(KS)^{-1}\sum_{i\in\mathcal S,k} (g_i(y_{i,k-1})-c_i+c)$ and $c=N^{-1}\sum_i c_i$.

[F2] [[def-scaffold-analysis-trajectory-and-errors]]: $E_r$ averages the expected squared displacement of the current gradient-query points from $x_{r-1}$; $C_{r-1}$ averages the expected squared error of the mean full gradient at each stored anchor from $\nabla f_i(x^\star)$.

[F3] [[lem-uniform-client-sampling-moments]]: conditional on fixed client vectors, the sample mean is unbiased and its centered second moment is at most $2(1-S/N)/S$ times their population second moment; this also applies conditionally on the history before the fresh round sample.

[F4] [[lem-smooth-convex-gradient-difference]] and [[lem-finite-sum-gradient-is-average]]: $\nabla f(x^\star)=0$ and $N^{-1}\sum_i\|\nabla f_i(x)-\nabla f_i(x^\star)\|_2^2\le 2\beta(f(x)-f^\star)$.

[F5] [[lem-scaffold-control-tracking-identity]]: if $m_i=K^{-1}\sum_k\nabla f_i(\alpha_{i,k}^{r-1})$ and $e_i=c_i-m_i$, then $N^{-1}\sum_i\mathbb E\|e_i\|_2^2\le\sigma^2/K$.

[F6] [[lem-finite-martingale-difference-sum-variance]]: for the current chronologically ordered oracle errors $\xi_j$, with predictable conditional means $d_j$, the normalized local-query average obeys $\mathbb E\| (KS)^{-1}\sum_j(d_j+\xi_j)\|_2^2 \le2\mathbb E\|(KS)^{-1}\sum_jd_j\|_2^2+2\sigma^2/(KS)$.

[F7] [[lem-relaxed-euclidean-squared-norm]] and [[def-euclidean-inner-product]]: for three vectors, $\|u+v+w\|_2^2\le3(\|u\|_2^2+\|v\|_2^2+\|w\|_2^2)$.

[F8] [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-as-an-ae-class]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: the local conditional moments, current-round conditioning and integrable inequalities are valid under the stated filtration.

[A1] The uniform client sample in round $r$ is fresh and independent of the history and oracle draws preceding that sample.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F8].

## Proof

1.1 Put $x=x_{r-1}$ and $g_i^\star=\nabla f_i(x^\star)$. For the stored [given] controls define $m_i=K^{-1}\sum_k\nabla f_i(\alpha_{i,k}^{r-1})$, $a_i=m_i-g_i^\star$, and $e_i=c_i-m_i$. Set $b_i=c_i-g_i^\star=a_i+e_i$, and denote population and selected means by a bar and a subscript $\mathcal S$. Since $N^{-1}\sum_i g_i^\star=0$ and $c=N^{-1}\sum_i c_i$, the corrected server direction has the exact three-term decomposition $$ \frac1{KS}\sum_{i\in\mathcal S,k} (g_i(y_{i,k-1})-c_i+c) =A+D+Q, $$ where $$ A=\frac1{KS}\sum_{i\in\mathcal S,k} (g_i(y_{i,k-1})-\nabla f_i(x)),\quad D=\frac1S\sum_{i\in\mathcal S} (\nabla f_i(x)-g_i^\star),\quad Q=\bar b-b_{\mathcal S}. $$ Indeed, adding the three displayed terms cancels the sampled client gradients at $x$ and $x^\star$ and leaves $c-b_{\mathcal S}$ in the control terms. [F1, F2, F5, given, algebra]

2.1 Conditional on the pre-sample history, apply [F3] to the vectors [given] $b_i$. Then use $b_i=a_i+e_i$, [F2], [F5], and the two-vector relaxed square inequality to obtain $$ \mathbb E\|Q\|_2^2 \le2\left(1-\frac SN\right)\frac1S \frac1N\sum_i\mathbb E\|b_i\|_2^2 \le4\left(1-\frac SN\right)\frac{C_{r-1}+\sigma^2/K}{S} \le4C_{r-1}+\frac{4\sigma^2}{KS}. $$ This also holds when $N=1$ or $S=N$, when $Q=0$. [F2, F3, F5, F8, A1, A2, step 1.1, algebra]

2.2 Write each summand of $A$ as $d_{i,k}+\xi_{i,k}$ with $d_{i,k}=\nabla f_i(y_{i,k-1})-\nabla f_i(x)$ and $\xi_{i,k}=g_i(y_{i,k-1})-\nabla f_i(y_{i,k-1})$. Chronologically order the $KS$ current oracle draws and apply [F6]. Jensen's inequality and $\beta$-Lipschitzness give $\mathbb E\|A\|_2^2\le2\beta^2E_r+2\sigma^2/(KS)$. For $D$, conditional Jensen over the uniform subset and then [F4] give $\mathbb E\|D\|_2^2\le2\beta\mathbb E[f(x)-f^\star]$. [F2, F3, F4, F6, F8, A1, A2, step 1.1, algebra]

3.1 Apply [F7] to the decomposition in step 1.1, multiply by [given] $\widetilde\eta^2$, and substitute the bounds from steps 2.2 and 2.1. Collecting terms yields $$ \mathbb E\|x_r-x_{r-1}\|_2^2 \le6\widetilde\eta^2\beta^2E_r +12\widetilde\eta^2C_{r-1} +6\widetilde\eta^2\beta\mathbb E[f(x_{r-1})-f^\star] +\frac{18\widetilde\eta^2\sigma^2}{KS}, $$ which is the Statement. [F1, F2, F7, step 2.2, step 2.1, algebra] ∎
