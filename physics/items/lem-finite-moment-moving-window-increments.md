---
dependency_level: 0
id: lem-finite-moment-moving-window-increments
kind: lemma
title: Finite moments control increments over short moving windows
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - def-moments-variance-and-covariance
  - cor-markov-inequality-for-random-variables
  - thm-bernstein-independent-sums
  - cor-first-borel-cantelli-lemma-for-events
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Elena Bashtova and Alexey Shashkin, Strong Gaussian approximation for cumulative processes with heavy tails, Lemma 5 and its proof
      url: https://arxiv.org/pdf/2007.15481
      locator: PDF p. 7. The source treats moving windows through a probability bound using Nagaev's inequality; the spare-moment almost-sure version and one-dependent extension below are proved locally by truncation and the proved Bernstein inequality.
axiom_use: No additional choice principle is used; the random sequence is supplied and the proof uses finite sums, probability bounds, and countably many events.
---

## Statement

Fix $q>p>2$. Let $(Z_k)_{k\ge1}$ be identically distributed centered real random variables with $\mathbb E|Z_1|^q<\infty$. Assume either that they are independent, or that they are **one-dependent**, meaning that $\sigma(Z_1,\ldots,Z_k)$ and $\sigma(Z_{k+2},Z_{k+3},\ldots)$ are independent for every $k\ge1$. Put $S_0=0$ and $S_j=\sum_{k=1}^jZ_k$.

There is an event of probability one on which, for every $A>0$ and $d\ge0$, with $r_n=\lceil A n^{1/p}(\log n)^d\rceil$ for $n\ge2$,
$$\max_{\substack{0\le i<j\le n\\j-i\le r_n}}|S_j-S_i|=o(n^{1/p}).$$

## Facts & Assumptions

**Given:** $q>p>2$, the centered sequence, its common finite $q$th absolute moment, and one of the two dependence hypotheses in the Statement.

[F1] Independent centered real variables bounded by $b$ satisfy the two-sided Bernstein bound $\mathbb P(|\sum_iX_i|\ge x)\le2\exp(-x^2/[2(v+bx/3)])$ when the sum of their variances $v$ is positive; when $v=0$ the sum is zero almost surely. [[thm-bernstein-independent-sums]]

[F2] For a nonnegative random variable $Y$ and $t>0$, $\mathbb P(Y\ge t)\le\mathbb E Y/t$. [[cor-markov-inequality-for-random-variables]]

[F3] If the sum of event probabilities is finite, only finitely many of the events occur almost surely; independence is unnecessary. [[cor-first-borel-cantelli-lemma-for-events]]

[F4] Independence is independence of the generated sigma-algebras; iid means independence together with equality of marginal laws. [[def-independent-random-elements]], [[def-identically-distributed-and-iid-random-variables]]

[F5] For centered square-integrable $Z$, $\operatorname{Var}(Z)=\mathbb E Z^2$. [[def-moments-variance-and-covariance]]

## Proof

1.1 First assume independence and fix positive integers $A$ and $d$ with $d\ge0$. Choose $a$ strictly between $p$ and $q$, put $M_q=\mathbb E|Z_1|^q$, and, for dyadic integers $N=2^m\ge2$, put $b_N=N^{1/a}$, $\ell_N=\log N$, and $r_N=\lceil A N^{1/p}\ell_N^d\rceil$. The second moment $v=\mathbb E Z_1^2$ is finite since $|z|^2\le1+|z|^q$. If $v=0$, the nonnegative variable $Z_1^2$ has zero expectation and is zero almost surely: for each integer $h\ge1$, [F2] bounds $\mathbb P(Z_1^2\ge1/h)$ by zero, and the union of these events is $\{Z_1\ne0\}$. Equality of marginal laws and countable subadditivity make every $Z_k$ zero simultaneously almost surely. This proves the assertion in this case. Henceforth assume $v>0$. [given, F2, F5, choose]

2.1 The union bound and [F2] give $\mathbb P(\max_{k\le N}|Z_k|>b_N)\le M_qN^{1-q/a}$. Since $1-q/a<0$, these probabilities are summable over dyadic $N$. By [F3], eventually no one of the first $N$ variables is truncated at level $b_N$, almost surely along the dyadic horizons. Define $m_N=\mathbb E[Z_1\mathbf1_{\{|Z_1|\le b_N\}}]$ and $V_{N,k}=Z_k\mathbf1_{\{|Z_k|\le b_N\}}-m_N$. For each fixed $N$, these variables are independent and centered, $|V_{N,k}|\le2b_N$, and $\operatorname{Var}(V_{N,k})\le v$. Moreover centering of $Z_1$ gives $|m_N|\le\mathbb E[|Z_1|\mathbf1_{\{|Z_1|>b_N\}}]\le M_qb_N^{1-q}$. [given, F2, F3, F4, F5, step 1.1]

3.1 For an interval of at most $r_N$ indices, [F1] bounds the tail of its $V_{N,k}$ sum by $2\exp(-x^2/[2(vr_N+2b_Nx/3)])$; if its actual variance is zero the bound still holds because the tail is zero. Set $x_N=C(\sqrt{r_N\ell_N}+b_N\ell_N)$, where $C\ge\max\{\sqrt{20v},40/3,1\}$. Then $2vr_N\le x_N^2/(10\ell_N)$ and $4b_Nx_N/3\le x_N^2/(10\ell_N)$, so the bound is at most $2e^{-5\ell_N}=2N^{-5}$. There are at most $N^2$ intervals with integer endpoints in $[0,N]$. The probability that any interval of length at most $r_N$ violates the bound $x_N$ is therefore at most $2N^{-3}$, summable over dyadic $N$. By [F3], all such interval sums are bounded by $x_N$ eventually almost surely. [F1, F3, step 1.1, step 2.1, algebra]

4.1 On the eventual no-truncation event from step 2.1, every original interval sum differs from its centered truncated sum by at most $r_N|m_N|$. Now $\sqrt{r_N\ell_N}=o(N^{1/p})$ because $1/(2p)<1/p$, and $b_N\ell_N=o(N^{1/p})$ because $1/a<1/p$. Also $r_N|m_N|\le M_qr_NN^{(1-q)/a}=o(N^{1/p})$. Thus step 3.1 proves the claimed little-o bound at dyadic horizons. These comparisons follow by dividing by $N^{1/p}$: in each expression a strictly negative power of $N$ multiplies a fixed power of $\log N$, which tends to zero. [step 1.1, step 2.1, step 3.1, algebra]

5.1 For $2^{m-1}<n\le2^m=N$, monotonicity of $n^{1/p}(\log n)^d$ gives $r_n\le r_N$, so every admissible interval for $n$ is included among those for $N$. Since $N^{1/p}\le2^{1/p}n^{1/p}$, step 4.1 proves the assertion at every horizon $n$. Intersect the probability-one events obtained for the countably many integer pairs $A\ge1,d\ge0$. For arbitrary real $A>0,d\ge0$, choose integers $A'\ge A$ and $d'\ge d$; when $n\ge3$, $\log n\ge1$ makes the real-parameter window no longer than the integer-parameter window. The conclusion therefore holds on one event for every $A,d$ in the Statement. [F3, step 4.1, choose]

6.1 Under one-dependence, each parity subsequence is independent. Indeed, the sigma-algebra of any finite initial collection of even variables is contained in $\sigma(Z_1,\ldots,Z_{2h})$, which is independent of $Z_{2h+2}$ by the given separation; induction on the number of factors proves the finite rectangle factorization for all even variables. The identical argument applies to the odd variables. Both subsequences retain the common centered marginal and its $q$th moment. Apply step 5.1 to each subsequence and intersect their two probability-one events. An interval of at most $r_n$ original indices splits into one contiguous interval of each parity, each with at most $r_n$ terms and with its subsequence endpoints at most $n$. Each component is $o(n^{1/p})$ by the independent result, uniformly over the original intervals; their sum has the same bound. No independence between the parity subsequences is asserted or needed. All windows are nonempty by $i<j$; empty component windows contribute zero. This completes both dependence cases, including zero variance and every permitted window parameter. [given, F4, step 1.1, step 5.1, algebra] ∎

## Remarks

The estimate also controls short calendar-time reward increments once a genuine cycle decomposition is supplied. Suppose cycle lengths are positive integers, centered complete-cycle rewards satisfy the lemma, and each partial-cycle reward is bounded by an identically distributed nonnegative envelope $H_k$ with $\mathbb E H_1^q<\infty$. Dyadic Markov bounds as in step 1.2, at levels $N^{1/a}$ with $p<a<q$, give $\max_{k\le N+2}H_k=o(N^{1/p})$ almost surely. An interval of at most $r_n$ calendar steps crosses at most $r_n+2$ complete or partial cycles. Its full-cycle contribution is controlled by the lemma and its two endpoint pieces by twice the maximum envelope. Thus its centered reward increment is $o(n^{1/p})$ uniformly up to time $n$. This remark is conditional on the actual decomposition and its moment/dependence hypotheses; it asserts no regeneration theorem or Brownian coupling.

The cited full source's Lemma 5 was inspected. Its proof uses Nagaev's inequality for a probability estimate. The proof here instead uses the already proved local Bernstein supplier and the spare moment $q>p$; no unproved Nagaev or strong-approximation theorem is used.
