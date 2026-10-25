---
dependency_level: 2
id: lem-obm-consistency-from-strong-brownian-approximation
kind: lemma
title: Strong Brownian approximation implies overlapping-batch consistency
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - alg-overlapping-batch-means-mcse
  - cor-markov-inequality-for-random-variables
  - def-axiom-of-choice
  - def-brownian-motion
  - lem-gaussian-quadratic-form-centered-even-moment-bound
  - lem-reverse-triangle-inequality-in-a-normed-space
  - lem-two-sided-mills-bounds-for-standard-normal-tail
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-first-borel-cantelli
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo, Appendix B.3 and Lemma 4
      url: https://arxiv.org/pdf/0811.1729
axiom_use: AC is inherited from Brownian motion, normal laws and the Gaussian quadratic-form supplier; no further choice or stationarity assumption is used.
---

## Statement

Assume AC. Let $Y_1,Y_2,\ldots$ be real random variables and $S_k=\sum_{i=1}^kY_i$, with $S_0=0$. Suppose on a probability-space extension with the original process as marginal there are a standard Brownian motion $B$, constants $\sigma\ge0$ and $0<\alpha<1/2$, and finite random constants $K,N$ such that almost surely
$$|S_k-\sigma B(k)|\le K k^\alpha\log k\qquad(k\ge N).$$
Let $(b_n)$ be deterministic positive integers with $b_n<n$ eventually and
$$\frac{b_n}{n}\to0,\qquad \sum_{n=2}^\infty(b_n/n)^c<\infty\quad\text{for some real }c\ge1,$$
$$\frac{b_n\log n}{n}\to0,\qquad\frac{n^{2\alpha}(\log n)^2}{b_n}\to0.$$
For the exact estimator of [[alg-overlapping-batch-means-mcse]], applied to $Y_1,\ldots,Y_n$,
$$\widehat\sigma_{\mathrm{OBM},n}^2=\frac{nb_n}{(n-b_n)(n-b_n+1)}\sum_{j=0}^{n-b_n}\left(\frac{S_{j+b_n}-S_j}{b_n}-\frac{S_n}{n}\right)^2\longrightarrow\sigma^2\quad\text{almost surely}.$$
No stationarity, independence of $B$ from $(Y_i)$, or monotonicity of $b_n$ or $n/b_n$ is required. The conclusion includes $\sigma=0$.

## Facts & Assumptions

**Given:** AC, the original process and its Brownian approximation on the stated extension, the constants $\sigma,\alpha$, and the deterministic batch sequence with all displayed numerical hypotheses.

[A1] AC is assumed as in [[def-axiom-of-choice]] and the Brownian and Gaussian interfaces.

[F1] Brownian motion starts at zero and has independent normal increments with variance equal to interval length. [[def-brownian-motion]]

[F2] A centered Gaussian quadratic form satisfies the dimension-free even-moment bound for every positive integer $r$. [[lem-gaussian-quadratic-form-centered-even-moment-bound]]

[F3] For a nonnegative random variable $X$ and $a>0$, $\Pr(X\ge a)\le EX/a$. [[cor-markov-inequality-for-random-variables]]

[F4] Events with summable probabilities occur only finitely often almost surely. [[thm-first-borel-cantelli]]

[F5] The standard-normal Mills upper bound $\Pr(Z>x)\le e^{-x^2/2}/(x\sqrt{2\pi})$, together with symmetry and the normal density, gives $\Pr(|Z|\ge x)\le2e^{-x^2/2}$ for $x\ge1$. [[lem-two-sided-mills-bounds-for-standard-normal-tail]]

[F6] The Euclidean norm is a norm and satisfies $|\|x\|_2-\|y\|_2|\le\|x-y\|_2$. [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[lem-reverse-triangle-inequality-in-a-normed-space]]

[F7] The finite OBM algorithm uses the displayed denominator and overlapping batch means. [[alg-overlapping-batch-means-mcse]]

## Proof

1.1 Work first on the extension. For each sufficiently large $n$ write $b=b_n$, $m=n-b+1$, $U_i=B(i)-B(i-1)$ for $1\le i\le n$, and $D_j=B(j+b)-B(j)$ for $0\le j\le n-b$. By [F1], the $U_i$ are independent standard normals. If $h_j$ indicates coordinates $j+1,\ldots,j+b$, then $Q_n=(nb)^{-1}\sum_jD_j^2=U^TA_nU$ where $A_n=(nb)^{-1}\sum_jh_jh_j^T$. At most $b$ windows contain a fixed pair of coordinates, and none does if their separation is at least $b$. Hence $0\le(A_n)_{ik}\le1/n$, $(A_n)_{ik}=0$ when $|i-k|\ge b$, $\operatorname{tr}A_n=m/n$, and $\sum_{i,k}(A_n)_{ik}^2\le(2b-1)/n\le2b/n$. [A1, F1, given, construct, algebra]

2.1 Choose an integer $r\ge c$. By [F2] and [F3], for every $\eta>0$, $\Pr(|Q_n-m/n|>\eta)\le C_r\eta^{-2r}(2b_n/n)^r$. These probabilities are summable since $b_n/n<1$ eventually, $r\ge c$ and $\sum_n(b_n/n)^c<\infty$. Applying [F4] for each $\eta=1,1/2,1/3,\ldots$ and intersecting the resulting countable family of full-probability events gives $Q_n-m/n\to0$ almost surely. Since $m/n\to1$, $Q_n\to1$ almost surely. No independence between different $n$ is used. [F2, F3, F4, step 1.1, given, choose, algebra]

3.1 By [F1] and [F5], $\Pr(|B(n)|>\sqrt{6n\log n})\le2n^{-3}$ for $n\ge2$. Thus [F4] gives $B(n)^2/n\le6\log n$ eventually almost surely. Put $V_j=D_j-(b/n)B(n)$ and $W_n=(nb)^{-1}\sum_jV_j^2$. Applying [F6] to the vectors $(V_j)/\sqrt{nb}$ and $(D_j)/\sqrt{nb}$ gives $|\sqrt{W_n}-\sqrt{Q_n}|\le[(m/n)(b/n)(B(n)^2/n)]^{1/2}\to0$, using $(b_n/n)\log n\to0$. Consequently $W_n\to1$ almost surely. [F1, F4, F5, F6, step 1.1, step 2.1, given, algebra]

4.1 Set $R_k=S_k-\sigma B(k)$ and $R_0=0$. On the full event of the given approximation, enlarge its finite random constant to absorb all finitely many early errors. Since $k^\alpha\log k$ is increasing for integers $k\ge2$, this gives a finite random $K'$ with $\max_{0\le k\le n}|R_k|\le K'n^\alpha\log n$ for every sufficiently large $n$. For every window, $S_{j+b}-S_j-(b/n)S_n=\sigma V_j+E_{n,j}$ where $E_{n,j}=R_{j+b}-R_j-(b/n)R_n$. Therefore $|E_{n,j}|\le3K'n^\alpha\log n$ simultaneously for all windows, and $H_n=(nb)^{-1}\sum_jE_{n,j}^2\le9(K')^2(m/n)n^{2\alpha}(\log n)^2/b_n\to0$. [step 3.1, given, construct, algebra]

5.1 Put $T_n=(nb)^{-1}\sum_j(S_{j+b}-S_j-(b/n)S_n)^2$. By [F6] and $\sigma\ge0$, $|\sqrt{T_n}-\sigma\sqrt{W_n}|\le\sqrt{H_n}\to0$. Hence $T_n\to\sigma^2$ almost surely. This argument divides neither by $\sigma$ nor by $T_n$, so it also proves the zero-variance case. [F6, step 3.1, step 4.1, given, algebra]

6.1 By [F7], $\widehat\sigma_{\mathrm{OBM},n}^2=n^2T_n/[(n-b_n)(n-b_n+1)]$. This deterministic multiplier tends to one because $b_n/n\to0$, and step 5.1 proves the desired limit on the extension. The event that this sequence of finite measurable functions of $(Y_i)$ converges to $\sigma^2$ depends only on the original process. Its probability under the extension equals its probability under the original marginal, so that probability is one for the original process as well. Arbitrarily defining the estimator at any finitely many indices with inadmissible batches does not affect its limit. [F7, step 5.1, given, algebra] ∎
