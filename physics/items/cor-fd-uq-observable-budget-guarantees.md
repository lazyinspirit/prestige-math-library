---
id: cor-fd-uq-observable-budget-guarantees
kind: corollary
title: Execution and conditional error guarantees of the fluid UQ budget algorithm
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
deps:
  - alg-fd-uq-observable-budget
  - thm-fd-observable-sampling-bias-split
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - thm-change-of-variables-for-expectation
  - def-independent-random-elements
  - def-independent-sigma-algebras-and-events
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used for the finite execution and error
  claims. The optional infinite-sequence Gaussian interpretation carries exactly
  the additional AC assumption of the sampling theorem.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
dependency_roles:
  alg-fd-uq-observable-budget: mathematical-premise
  thm-fd-observable-sampling-bias-split: mathematical-premise
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  thm-change-of-variables-for-expectation: mathematical-premise
  def-independent-random-elements: mathematical-premise
  def-independent-sigma-algebras-and-events: mathematical-premise
  def-axiom-of-choice: mathematical-premise
dependency_level: 5
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Statement

Let $(\Theta,\mathcal A,\mu)$ be a probability space of inputs and let $Y:\Theta\to\mathbb R$ be the supplied measurable exact scalar observable. Put $\theta=\mathbb E_\mu Y$ whenever $Y\in L^1(\mu)$. Consider the two modes of the failure-aware fluid UQ callback and certified sampling-budget algorithm, using exact real arithmetic, with every requested input draw delivered in finite time and the supplied finite-return callback or oracle contracts. Probability statements are conditional on the truth of the supplied law, measurability and mathematical certificates; the algorithm does not verify those premises.

In fixed-size callback mode, take an integer $N\ge2$ and independent measurable input draws $\theta_1,\ldots,\theta_N$ with common law $\mu$ on a sampling probability space $(\Omega_s,\mathcal F_s,\mathbb P_s)$. Write $\mathbb P=\mathbb P_s$ and $\mathbb E=\mathbb E_s$ for sampling probability and expectation. The total callback, with its supplied finite budget per invocation, has a measurable success set $A\in\mathcal A$ and measurable successful output and certificate maps $q_h:A\to\mathbb R$ and $b:A\to[0,\infty)$, for the restricted input sigma-algebra on $A$. Its supplied pointwise certificate is $|Y(v)-q_h(v)|\le b(v)$ for $v\in A$. Put $p=\mu(A)$ and $C=\{(\theta_1,\ldots,\theta_N)\in A^N\}$. Only on $C$, define $q_i=q_h(\theta_i)$ and $b_i=b(\theta_i)$ for $1\le i\le N$, and define the returned diagnostics by
$$\bar q_h=N^{-1}\sum_{i=1}^N q_i,\qquad \bar b=N^{-1}\sum_{i=1}^N b_i,\qquad s_N^2=(N-1)^{-1}\sum_{i=1}^N(q_i-\bar q_h)^2,\qquad s_N=\sqrt{s_N^2},\qquad \widehat{se}_N=s_N/\sqrt N.$$
The algorithm makes exactly $N$ callback invocations, including after any failure, and returns `complete` exactly on $C$, with these diagnostics and the additional `zero-sample-variance` flag precisely when $s_N^2=0$. Otherwise it returns `incomplete` with exactly the failed indices and available outputs. In particular,
$$\mathbb P(C)=p^N,\qquad \mathbb P(C^c)=1-p^N\le N(1-p).$$
For $p>0$, conditional on $C$ the inputs are independent with common law $\mu(\cdot\mid A)$; for $p=0$, $C$ is null and this corollary supplies no conditional-on-completion certificate. If $0<p<1$, completing the run does not give IID draws from the original $\mu$.

If $p=1$, extend $q_h,b$ by zero off $A$ and assume $Y\in L^1(\mu)$ and $q_h\in L^2(\mu)$. Set $\theta_h=\mathbb E_\mu q_h$, $\sigma_h^2=\operatorname{Var}_\mu(q_h)$ and $b_h=\theta_h-\theta$. The formulas below use these extensions and agree with the returned complete diagnostics almost surely. The complete outputs obey
$$\mathbb E\bar q_h=\theta_h,\qquad \mathbb E[(\bar q_h-\theta)^2]=\sigma_h^2/N+b_h^2,\qquad \mathbb E s_N^2=\sigma_h^2,\qquad \mathbb E\widehat{se}_N^2=\sigma_h^2/N.$$
When also $\mathbb E_\mu b<\infty$ and the supplied pointwise certificate holds on $A$, $|b_h|\le\mathbb E_\mu b$ and $\mathbb E\bar b=\mathbb E_\mu b$. The realized $\bar b$ need not bound that expectation and zero realized $s_N^2$ need not imply zero population variance or error. An infinite sequence of these IID successful outputs has the sample-variance and, under the sampling theorem's additional AC and positive-variance hypotheses, studentized Gaussian limits stated there. No finite-sample normal confidence assertion follows.

In certified-budget mode, missing certificates/oracles or invalid numeric inputs produce the prescribed guard output before sampling. For admissible finite numeric inputs and a true certificate, put
$$N=\max\{1,\lceil V_h/(\delta\epsilon_s^2)\rceil\}.$$
Let $Y_h:\Theta\to\mathbb R$ be the supplied measurable numerical observable. The total IID oracle contract returns independent finite real random variables $Q_1,\ldots,Q_N$ with the law of $Y_h$ under $\mu$, on a sampling probability space, again using $\mathbb P,\mathbb E$ for its probability and expectation. If that contract holds, exactly $N$ samples are requested and `conditional-budget` returns their arithmetic mean $\widehat\theta_{h,N}:=N^{-1}\sum_{i=1}^N Q_i$ with the advertised bounds
$$\mathbb P\bigl(|\widehat\theta_{h,N}-\theta|>\epsilon_b+\epsilon_s\bigr)\le\delta,\qquad \bigl(\mathbb E[(\widehat\theta_{h,N}-\theta)^2]\bigr)^{1/2}\le\sqrt{V_h/N+\epsilon_b^2}.$$
Here $\epsilon_b,V_h\ge0$, $\epsilon_s>0$, $0<\delta<1$, the certificate states $Y\in L^1(\mu)$, $Y_h\in L^2(\mu)$, $|\mathbb E_\mu Y_h-\theta|\le\epsilon_b$, $\operatorname{Var}_\mu(Y_h)\le V_h$, and the samples have the IID law of $Y_h$. The case $V_h=0$ gives $N=1$ and a zero sampling deviation almost surely; $N=1$ never supplies a sample variance. If the oracle instead violates its finite-return contract by reporting failure, the procedure returns `incomplete` without these guarantees. A nonreturning invocation violates the hypotheses, so no termination claim is made for it. Callback implementations of the certified mode require almost-sure callback success, as stipulated by the algorithm.

Apart from the supplied sampling and callback/oracle work, the sampling loop and output reductions require finitely many operations, with a number bounded by a constant times $N$. This count uses exact real arithmetic and finite evaluations of the displayed square root and ceiling, and makes no floating-point error bound or empirical fluid-model adequacy claim.

## Statement references

[[alg-fd-uq-observable-budget]]

[[thm-fd-observable-sampling-bias-split]]

## Facts & Assumptions

**Given:** The selected mode, finite inputs, supplied finite-return subroutine, and, for each probability/error claim, exactly the measurable law and moment/certificate assumptions in the Statement.

[F1] [[alg-fd-uq-observable-budget]] specifies the fixed-size loop, failure-index output, complete diagnostics, input guards, certified ceiling budget and oracle-failure branch. Successful callback outputs and their success set are measurable.

[F2] [[thm-fd-observable-sampling-bias-split]] proves the finite-independent-family MSE formula, the finite-sample bias-plus-sampling probability bound, the expectation bias certificate, and the separately qualified infinite-IID sample-variance and studentized limits. It also distinguishes success-conditioned input laws from the original law.

[F3] [[cor-expectation-linearity-monotonicity-and-modulus-bound]] gives finite expectation linearity and monotonicity. [[thm-change-of-variables-for-expectation]] identifies expectations of measurable outputs with their common-law integrals.

[F4] [[def-independent-random-elements]] defines independence through generated sigma-algebras; [[def-independent-sigma-algebras-and-events]] gives the product formula for every finite intersection of independent events.

## Proof

**Given:** The mode and its stated hypotheses; all arithmetic below is exact.

1.1 In fixed-size mode the index set is $\{1,\ldots,N\}$. By [F1] the callback is invoked once at each index and failures do not shorten or restart this loop. Each requested draw is delivered in finite time by hypothesis, and each callback invocation has its supplied finite budget and returns one of its two allowed outcomes. Thus the loop finishes with exactly $N$ outcomes, and comparing their failure flags gives exactly the failed-index set. If it is empty, the definitions use only finite sums, $N>0$, $N-1>0$, and the nonnegative square root of a finite sum of squares, so all reported diagnostics are defined. Otherwise the prescribed output is `incomplete`. There are a bounded number of arithmetic and flag operations per index; the reductions have the same linear count. [F1, given, algebra]

1.2 The certified numeric guards ensure that $a=V_h/(\delta\epsilon_s^2)$ is a finite nonnegative real. Its ceiling is finite, so $N\ge1$ is finite and $N\ge a$. Under the total-return IID oracle contract, [F1]'s loop requests exactly $N$ finite samples and computes their finite mean. If an invocation instead reports a failure, its explicit branch returns `incomplete`; no assertion above requires an actual nonreturning oracle to terminate. The input-guard branches perform no sampling. [F1, given, algebra]

2.1 Let $C_i=\{\theta_i\in A\}$. These are measurable and independent by [F4], each with probability $p$. Step 1.1 makes $C=\bigcap_{i=1}^NC_i$, so $\mathbb P(C)=p^N$. The identity $1-p^N=(1-p)\sum_{j=0}^{N-1}p^j$ and $0\le p\le1$ give $1-p^N\le N(1-p)$. For $p>0$ and measurable $B_1,\ldots,B_N\subseteq\Theta$, independence gives
$$\mathbb P\left(\bigcap_{i=1}^N\{\theta_i\in B_i\}\,\middle|\,C\right)=\frac{\prod_{i=1}^N\mu(B_i\cap A)}{p^N}=\prod_{i=1}^N\mu(B_i\mid A).$$
This rectangle identity says precisely that the conditional coordinates are independent with the asserted marginals. If $0<p<1$, the conditional probability of $A$ in one coordinate is $1$ rather than $p$, so its law differs from $\mu$. For $p=0$ the conditioning event is null; for $p=1$ it has probability one. [F1, F4, step 1.1, given, algebra]

3.1 For $p=1$, zero extensions of the measurable successful maps are measurable, and modifications on $A^c$ affect no law or expectation. Their values on independent inputs are independent: the preimages of output events belong to the independent input sigma-algebras [F4]. Their common law is the law of $q_h$ under $\mu$ by [F3]. Equal-law integration and finite linearity [F3] give $\mathbb E\bar q_h=N^{-1}\sum_{i=1}^N\mathbb E q_i=\theta_h$. All moment hypotheses of [F2] now hold with $n=N$, $Y_h=q_h$, and the supplied integrable target $Y$, so [F2] gives the stated MSE identity. It also gives $|b_h|\le\mathbb E b$ when the pointwise certificate and its integrability premise hold, while finite linearity and equal-law integration [F3] give $\mathbb E\bar b=\mathbb E b$. [F2, F3, F4, step 2.1, given]

4.1 Algebra gives $\sum_{i=1}^N(q_i-\bar q_h)^2=\sum_{i=1}^N(q_i-\theta_h)^2-N(\bar q_h-\theta_h)^2$. These terms are integrable by the assumed second moment. Applying [F2] with the identical exact and approximate observable $q_h$ gives $\mathbb E[(\bar q_h-\theta_h)^2]=\sigma_h^2/N$. Equal-law integration [F3] gives $\mathbb E(q_i-\theta_h)^2=\sigma_h^2$. Therefore the expectation of the right side is $N\sigma_h^2-N(\sigma_h^2/N)=(N-1)\sigma_h^2$. Divide by $N-1$ and then by $N$ to obtain the remaining two moment identities. For the diagnostic warnings, a Bernoulli output with parameter $r\in(0,1)$ has probability $(1-r)^N>0$ of an all-zero sample, with zero sample variance and mean but positive population variance and mean. Taking a Bernoulli certificate likewise shows its all-zero empirical average cannot bound its positive expectation. Finally, [F2] supplies precisely the stated infinite-IID limits when their extra hypotheses hold; a single finite tuple is not extended implicitly. [F2, F3, F4, step 3.1, given, algebra]

5.1 A true certificate supplies exactly [F2]'s finite-sample hypotheses with $B_h=\epsilon_b$ and variance bound $V_h$, hence the probability is at most $V_h/(N\epsilon_s^2)\le\delta$ by step 1.2. Its MSE identity is at most $V_h/N+\epsilon_b^2$; monotonicity of the nonnegative square root gives the RMS bound. If $V_h=0$, the variance is zero and $N=1$. The centered square has expectation zero, so it vanishes almost surely: for each positive integer $m$, its being greater than $1/m$ has probability at most $m$ times that zero expectation by [F3]; the union of these events is its positivity event. Thus sampling error is zero almost surely, without any division by a variance or by $N-1$. The algorithm does not report sample variance in this branch. For a callback implementation, step 2.1 and its conditional-law distinction explain the separate almost-sure-success premise. These arguments prove only the certified model guarantees and do not validate the certificate or quantify floating-point/model error. [F1, F2, F3, step 2.1, step 1.2, given, algebra] ∎

