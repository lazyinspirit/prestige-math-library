---
id: ex-nonsummable-physical-dependence-linear-process
kind: example
title: A square-integrable linear shift with nonsummable physical dependence
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [cor-cauchy-schwarz-for-random-variables, cor-chebyshev-inequality-for-random-variables, cor-countable-independent-copies-exist, cor-first-borel-cantelli-lemma-for-events, def-countable-choice, def-dependent-choice, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-independent-random-elements, def-l2-m-approximable-causal-bernoulli-shift, def-l-p-space-as-a-quotient-by-null-functions, def-random-element-and-real-random-variable, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-factorization-of-expectations-for-independent-variables]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Statement

Assume Countable Choice and Dependent Choice, and let
$(\epsilon_t)_{t\in\mathbb Z}$ be iid Rademacher variables
($P(\epsilon_t=1)=P(\epsilon_t=-1)=1/2$), and let $e(u)=1$ in
$H=L^2([0,1],dt;\mathbb R)$, so $\|e\|_H=1$. Let $N_0$ be the least
$N\in\mathbb N$ such that
$$\sum_{k>N}(k+1)^{-2}<1.$$
For $r\ge1$, recursively choose $N_r$ as the least integer greater than
$N_{r-1}$ such that
$$\sum_{k>N_r}(k+1)^{-2}<2^{-4r}.$$
Define a causal Borel filter by
$$f(x_0,x_1,\ldots)=e\lim_{r\to\infty}\sum_{k=0}^{N_r}\frac{x_k}{k+1}$$
when this subsequence converges, and define $f=0$ otherwise. Then
$X_t=f(\epsilon_t,\epsilon_{t-1},\ldots)$ is centered and has finite second
moment, but its physical-dependence coefficients satisfy
$$\delta_m^2=2\sum_{k=m}^{\infty}\frac1{(k+1)^2},\qquad \delta_m\ge\sqrt{\frac{2}{m+1}}\quad(m\ge1).$$
Consequently $\sum_{m\ge1}\delta_m=\infty$: the sufficient summability
hypothesis in [[def-l2-m-approximable-causal-bernoulli-shift]] does not
apply to this shift. The example makes no claim that nonsummability alone
precludes every possible central limit theorem.

## Facts & Assumptions

**Given:** Countably many iid Rademacher innovations, the real Hilbert space $H=L^2([0,1],dt;\mathbb R)$, and the replacement convention in [[def-l2-m-approximable-causal-bernoulli-shift]].

[F1] The countable product carrying iid Rademacher variables exists under Countable Choice and Dependent Choice ([[cor-countable-independent-copies-exist]], [[def-countable-choice]], [[def-dependent-choice]]).

[F2] The scalar $L^2$ quotient is complete and its norm is induced by the integral inner product ([[def-l-p-space-as-a-quotient-by-null-functions]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F3] Chebyshev's inequality bounds the probability of a deviation by its variance divided by the squared threshold, and the first Borel--Cantelli lemma makes events with summable probabilities occur only finitely often ([[cor-chebyshev-inequality-for-random-variables]], [[cor-first-borel-cantelli-lemma-for-events]]).

[F4] The stated two-point Rademacher law gives $\mathbb E\epsilon_t=0$ and $\mathbb E\epsilon_t^2=1$ by the expectation definition. Independence is the independence of the generated sigma-algebras ([[def-independent-random-elements]]); expectations of products of integrable functions of distinct independent coordinates factor ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[thm-factorization-of-expectations-for-independent-variables]]).

[F5] Cauchy--Schwarz on a probability space gives $\mathbb E|Y|\le\|Y\|_2$; thus $L^2$ convergence implies convergence of means and of $L^2$ norms ([[cor-cauchy-schwarz-for-random-variables]]).

[F6] Since $x^{-2}$ is decreasing, $\sum_{j=2}^N j^{-2}\le\int_1^N x^{-2}\,dx\le1$, so $\sum_{j\ge1}j^{-2}<\infty$. Since $x^{-1/2}$ is decreasing, $\sum_{j=2}^N j^{-1/2}\ge\int_2^{N+1}x^{-1/2}\,dx\to\infty$, so $\sum_{j\ge2}j^{-1/2}=\infty$.

## Proof

**Given:** The probability space and iid Rademacher innovations in the Statement, together with the independent replacement extension from [[def-l2-m-approximable-causal-bernoulli-shift]].

1.1 By [F6], the coefficient series $\sum_{k\ge0}(k+1)^{-2}$ converges and its tails tend to zero. Hence the set defining $N_0$ is nonempty, so its least element exists. For $r\ge1$, once $N_{r-1}$ is chosen, the tail tends to zero, so some integer $N>N_{r-1}$ satisfies the required bound $\sum_{k>N}(k+1)^{-2}<2^{-4r}$; thus the least such $N_r$ exists. For a deterministic sign sequence $x=(x_k)_{k\ge0}$, put $s_N(x)=\sum_{k=0}^{N}x_k/(k+1)$. Each $s_N$ is product-measurable. The set on which $(s_{N_r})_{r\ge0}$ is Cauchy is Borel, because the Cauchy condition is a countable combination of inequalities between these measurable real functions. On that set their limit is measurable, and extending it by zero on the complement is product-measurable. Thus $f$ is a total Borel map into the one-dimensional subspace $\mathbb Re\subset H$. [given, F1, F6, construct, algebra]

2.1 On the given probability space carrying the iid innovations, the partial sums $S_N=\sum_{k=0}^{N}\epsilon_{-k}/(k+1)$ are Cauchy in $L^2$, since for $M>N$ independence, centering and [F4] give $$\mathbb E|S_M-S_N|^2=\sum_{k=N+1}^{M}(k+1)^{-2}\longrightarrow0.$$ By [F2] they converge in $L^2$ to a random variable $S$. Each $S_N$ has mean zero and squared norm $\|S_N\|_2^2=\sum_{k=0}^N(k+1)^{-2}$; [F5] therefore gives $\mathbb ES=0$ and $\mathbb ES^2=\|S\|_2^2=\sum_{k=0}^{\infty}(k+1)^{-2}<\infty$ by [F6]. Choose increasing $N_r$ with $\sum_{k>N_r}(k+1)^{-2}<2^{-4r}$. Taking $M\to\infty$ in the finite tail-variance identity gives $\mathbb E|S_{N_r}-S|^2=\sum_{k>N_r}(k+1)^{-2}$. Thus [F3] gives $$P(|S_{N_r}-S|>2^{-r})\le 2^{2r}\mathbb E|S_{N_r}-S|^2<2^{-2r}.$$ These probabilities are summable, so [F3] implies $S_{N_r}\to S$ almost surely. Hence the defining subsequence filter equals $S e$ almost surely. In particular $X_0$ is centered and $$\mathbb E\|X_0\|_H^2=\mathbb ES^2=\sum_{k=0}^{\infty}(k+1)^{-2}<\infty.$$ The same argument applies to every shifted iid input sequence. [F2, F3, F4, F5, F6, step 1.1, choose, algebra]

3.1 For fixed $m\ge1$, the mixed sequence used by $X_{0,m}$ is itself iid Rademacher, so its filter is the corresponding $L^2$ limit. Subtracting its partial sums from those for $X_0$ cancels the terms $k<m$ and leaves $$X_0-X_{0,m}=e\sum_{k=m}^{\infty}\frac{\epsilon_{-k}-\epsilon'_{0,m,-k}}{k+1} \quad\text{in }L^2.$$ The summands are independent, centered, and have variance $2/(k+1)^2$ by [F4]; finite-tail variance computation followed by $L^2$ convergence therefore gives $\delta_m^2=2\sum_{k=m}^{\infty}(k+1)^{-2}$. [F1, F2, F4, step 2.1, algebra]

4.1 Since $x\mapsto x^{-2}$ is decreasing on $(0,\infty)$, $$\sum_{k=m}^{\infty}(k+1)^{-2} \ge\int_{m+1}^{\infty}x^{-2}\,dx=\frac1{m+1}.$$ Thus $\delta_m\ge\sqrt{2/(m+1)}$, and the decreasing-function integral comparison gives $$\sum_{m\ge1}\delta_m\ge\sqrt2\sum_{j\ge2}j^{-1/2}\ge\sqrt2\int_2^{\infty}x^{-1/2}\,dx=+\infty$$ by [F6]. The moment condition holds by step 2.1, but the required dependence-coefficient summability fails. [F6, step 2.1, step 3.1, algebra] ∎
