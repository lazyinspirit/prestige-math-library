---
id: lem-finite-population-permutation-clt
kind: lemma
title: Conditional CLT for a random subset of an IID finite population
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-independent-random-elements
  - def-moments-variance-and-covariance
  - thm-martingale-central-limit-theorem
  - def-square-integrable-martingale-difference-array-and-variance-clock
  - lem-conditional-hoeffding-bound-for-bounded-martingale-differences
  - def-axiom-of-choice
  - def-finite-population-and-sampling-design
  - def-simple-random-sampling-without-replacement
  - thm-srswor-mean-variance-and-finite-population-correction
  - thm-tower-property-of-conditional-expectation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, §3.1–3.2"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
    - title: "Péter Major, Some Results About U-statistics, in On the Estimation of Multiple Random Integrals and U-Statistics, Lecture Notes in Mathematics 2079, Chapter 9"
      url: "https://static.renyi.hu/~major/articles/lect-note1.pdf"
---

## Statement

Assume the Axiom of Choice. For each $N$, let $W_{N,1},\ldots,W_{N,N}$ be IID real variables with mean $0$, variance $\sigma_N^2\to\sigma^2>0$, and uniformly integrable squares:

$$\lim_{K\to\infty}\sup_N E\!\left[W_{N,1}^2\mathbf 1_{\{|W_{N,1}|>K\}}\right]=0.$$

Let integer sample sizes $m_N,n_N$ satisfy $m_N+n_N=N$ and
$m_N/N\to p\in(0,1)$, and put $q=1-p$. It is enough to consider sufficiently
large $N$, for which $N>1$ and $1\le m_N,n_N\le N-1$; for each such $N$, choose
a uniformly random $m_N$-element subset $A_N\subseteq\{1,\ldots,N\}$
independently of the row. Set

$$\bar W_N=N^{-1}\sum_{i=1}^N W_{N,i},\qquad S_N^2=(N-1)^{-1}\sum_{i=1}^N(W_{N,i}-\bar W_N)^2.$$

Define

$$T_N=\frac{\sum_{i\in A_N}(W_{N,i}-\bar W_N)}{\sqrt{m_Nn_N S_N^2/N}},$$

and set $T_N=0$ if $S_N^2=0$. Then the conditional distribution of $T_N$ given the finite population converges in probability to $N(0,1)$, uniformly in its real argument.

## Facts & Assumptions

**Given:** IID rows with mean zero, variances $\sigma_N^2\to\sigma^2>0$, uniformly integrable squares, and a uniform sample without replacement of size $m_N$ with $m_N/N\to p\in(0,1)$.

[F1] [[thm-martingale-central-limit-theorem]]: a square-integrable martingale-difference array whose predictable variance clock tends to $1$ in probability and satisfies Lindeberg has a standard-normal terminal limit, assuming AC.

[F2] [[lem-conditional-hoeffding-bound-for-bounded-martingale-differences]]: if a conditionally centered increment has conditional range of width at most $c$, its conditional exponential moment is at most $e^{\lambda^2c^2/8}$.

[F3] [[def-square-integrable-martingale-difference-array-and-variance-clock]]: for martingale differences $D_k$, the predictable clock is $\sum_k E[D_k^2\mid\mathcal F_{k-1}]$.

[F4] [[def-simple-random-sampling-without-replacement]]: every subset of the given size is sampled with equal probability.

[F5] [[thm-srswor-mean-variance-and-finite-population-correction]]: for fixed population values with finite-population variance $S_N^2$, a size-$m_N$ sample sum has variance $m_Nn_NS_N^2/N$.

[F6] [[def-independent-random-elements]]: the random subset is independent of the IID row, so conditional on the row its design law is uniform SRSWOR.

[F7] [[thm-tower-property-of-conditional-expectation]]: iterated conditioning preserves conditional-expectation identities.

[A1] The Axiom of Choice is assumed exactly for the martingale CLT and the conditional-expectation interfaces in [F1]–[F3]. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses in the Statement. Prove conditional normal convergence for the displayed random-subset statistic.

1.1 Since $E W_{N,1}=0$ and $\sigma_N^2$ is bounded, Chebyshev gives $\bar W_N\to0$ in probability. To show $N^{-1}\sum_iW_{N,i}^2-\sigma_N^2\to0$, first truncate $W^2$ at a fixed $K$: the truncated variables are bounded, so Chebyshev gives convergence of their row average to its expectation. The expected tail average is at most $\sup_NE[W_{N,1}^2\mathbf1_{\{|W_{N,1}|>\sqrt K\}}]$, which tends to zero as $K\to\infty$ by uniform integrability. Hence the untruncated average converges to $\sigma^2$, and $S_N^2\to\sigma^2$. [given, algebra]

1.2 Conditional on the row, list its centered values in a uniformly random order $a_{N,\pi(1)},\ldots,a_{N,\pi(N)}$ and write $S_j=\sum_{i\le j}a_{N,\pi(i)}$. For $j<N$, $E[a_{N,\pi(j+1)}\mid\mathcal F_j]=-S_j/(N-j)$, since the remaining values sum to $-S_j$. Therefore $M_j:=S_j/(N-j)$ is a martingale for $j\le m_N$, and its increments are bounded by $2\max_i|a_{N,i}|/(N-j-1)$. For $j\le m_N-1$, the denominator is at least $n_N$, which is bounded below by a positive multiple of $N$. [F3, F4, F6, given, construct]

2.1 For every $\varepsilon>0$, a union bound and $W^2\ge \varepsilon^2N$ on $\{|W|>\varepsilon\sqrt N\}$ give $P\!\left(\max_{i\le N}|W_{N,i}|>\varepsilon\sqrt N\right)\le \varepsilon^{-2}E\!\left[W_{N,1}^2\mathbf1_{\{|W_{N,1}|>\varepsilon\sqrt N\}}\right]\longrightarrow0.$ Together with $\bar W_N=O_P(1)$, this implies $\max_i|a_{N,i}|/\sqrt N\to0$ for $a_{N,i}=W_{N,i}-\bar W_N$. [given, step 1.1, algebra]

2.2 First consider any fixed finite population $c_1,\ldots,c_N$ with $\sum_i c_i=0$ and $|c_i|\le L$. For its random order, the martingale $S_j/(N-j)$ from step 1.2 has increments of absolute value at most $C_pL/N$ through $j\le m_N$, for all sufficiently large $N$. Iterating the conditional Hoeffding bound [F2] with [F7] gives, for each fixed $u>0$, $P_\pi(|S_j|/N>u)\le 2\exp(-c_pu^2N/L^2)$ uniformly in $j\le m_N$; here $|S_j|/N>u$ implies $|S_j/(N-j)|>u$ because $N-j\le N$. A union bound over at most $N$ prefixes makes the maximum divided by $N$ tend to zero. Apply this argument first to the clipped values $W_{N,i}^{(K)}-\overline W_N^{(K)}$, and then to the centered clipped squares $(W_{N,i}^{(K)}-\overline W_N^{(K)})^2-\overline{(W_N^{(K)}-\overline W_N^{(K)})^2}$. For fixed $K$, both are bounded arrays. The average absolute first-power truncation error is at most twice the average of $|W_{N,i}|\mathbf1_{\{|W_{N,i}|>K\}}$; its expectation is at most $2K^{-1}\sup_NE[W_{N,1}^2\mathbf1_{\{|W_{N,1}|>K\}}]$. The average absolute difference of the centered squares tends to zero in probability as $K\to\infty$: Cauchy--Schwarz bounds it by the square root of the average squared truncation error times the square root of the average $(|a_{N,i}|+|W_{N,i}^{(K)}-\overline W_N^{(K)}|)^2$, whose first factor is small by uniform integrability and whose second is bounded in probability by step 1.1. Thus, taking $N\to\infty$ and then $K\to\infty$, we obtain both $\max_{j\le m_N}\frac{|S_j|}{N}\to0,\qquad \max_{j\le m_N}\frac{\left|\sum_{i\le j}(a_{N,\pi(i)}^2-\overline{a_N^2})\right|}{N}\to0$ in probability. [F2, F7, given, step 1.1, step 1.2, algebra]

2.3 Let $R_{N,k}$ be the mean of the values remaining before draw $k$, let $s_{N,k-1}^2$ be their finite-population variance, and let $\mathcal F_{N,k}$ reveal the first $k$ draws. The Doob martingale for the final sample sum has increments $D_{N,k}=\frac{n_N}{N-k}\bigl(a_{N,\pi(k)}-R_{N,k}\bigr),\qquad 1\le k\le m_N.$ Indeed, after draw $k$ the conditional expected contribution of the remaining $m_N-k$ draws is $(m_N-k)$ times the new remaining mean; subtracting the previous conditional expectation gives the displayed coefficient. The increments are centered and square-integrable. [F3, F4, step 1.2, algebra]

3.1 Before draw $j+1$, the remaining set has size $N-j\ge n_N\asymp N$. Its mean is $-S_j/(N-j)$, and its raw second moment is $\overline{a_N^2}-\frac{1}{N-j}\sum_{i\le j}(a_{N,\pi(i)}^2-\overline{a_N^2}).$ Both differ uniformly from $0$ and $\overline{a_N^2}$, respectively, by $o_P(1)$ by step 2.2. The remaining finite-population variance therefore differs uniformly from $S_N^2=N\overline{a_N^2}/(N-1)$ by $o_P(1)$; the factors $(N-j)/(N-j-1)$ tend uniformly to $1$ because $N-j\ge n_N\asymp N$. Hence $\max_{j\le m_N}|s_{N,j}^2-S_N^2|\to0$. [step 1.1, step 2.2, algebra]

4.1 A uniform draw from the $N-k+1$ remaining values has variance $((N-k)/(N-k+1))s_{N,k-1}^2$. On $\{S_N^2>0\}$, the predictable clock of $\sum_{k\le m_N}D_{N,k}/\sqrt{m_Nn_NS_N^2/N}$ is $\frac{1}{m_Nn_NS_N^2/N}\sum_{k=1}^{m_N}\frac{n_N^2s_{N,k-1}^2}{(N-k)(N-k+1)}.$ Define the normalized increments and their clock to be zero on $\{S_N^2=0\}$. By step 1.1, $S_N^2\to_P\sigma^2>0$, so this zero-variance event has probability tending to zero. On its complement, step 3.1 permits replacing each $s_{N,k-1}^2$ uniformly by $S_N^2$ with relative $o_P(1)$ error. The remaining deterministic sum telescopes: $n_N^2\sum_{k=1}^{m_N}\frac1{(N-k)(N-k+1)}=n_N^2\left(\frac1{n_N}-\frac1N\right)=\frac{m_Nn_N}{N}.$ Thus the defined normalized clock tends to $1$ in probability, in agreement with the finite-population variance in [F5]. The normalized terminal sum equals $T_N$ also on $\{S_N^2=0\}$ by the statement's convention. [F3, F5, step 1.1, step 3.1, algebra]

5.1 On $\{S_N^2>0\}$, since $n_N/(N-k)\le1$ and $|R_{N,k}|\le\max_i|a_{N,i}|$, step 2.1 gives $\max_{k\le m_N}\frac{|D_{N,k}|}{\sqrt{m_Nn_NS_N^2/N}}\le\frac{2\max_i|a_{N,i}|}{\sqrt{m_Nn_NS_N^2/N}}\longrightarrow0$ in probability. Under the zero-variance convention of step 4.1, the normalized increments are zero on $\{S_N^2=0\}$ as well; since $S_N^2\to_P\sigma^2>0$, the maximum normalized increment tends to zero in probability. Therefore, for each fixed $\eta>0$, every term in the normalized martingale Lindeberg sum is zero with probability tending to one. [given, step 1.1, step 2.1, step 4.1, algebra]

6.1 Suppose conditional convergence failed along a subsequence. From steps 1.1 and 2.1, choose a further subsequence on which $S_N^2\to\sigma^2>0$ and $\max_i|a_{N,i}|/\sqrt N\to0$ almost surely. For each positive rational $\eta$, the probability that the normalized clock differs from $1$ by more than $\eta$ tends to zero by step 4.1. Its conditional probability given the row therefore tends to zero in probability by Markov's inequality. A diagonal further subsequence makes all those conditional probabilities tend to zero almost surely. For almost every resulting sequence of rows, the conditional clock converges in probability to $1$; the normalized increments have a deterministic uniform bound tending to zero by step 5.1, so for every fixed $\eta>0$ the Lindeberg sum on that row's permutation space is exactly zero for all sufficiently large rows.  The conditional permutation spaces may vary with $N$, whereas the array definition [F3] is stated on one fixed probability space. To justify using the martingale CLT in this setting, repeat the proof of [F1] with the row-specific conditional laws $\mathbb P_N^\pi$ and expectations $\mathbb E_N^\pi$. Every conditional expectation and variance estimate is formed within one row, and no joint event involving different rows is used. In particular, the only bounded-convergence step in [F1]'s proof can be read rowwise: if $\Gamma_N\to1$ in probability under laws $\mathbb P_N$, then for bounded continuous $f$ and any $\delta>0$, $\left|\mathbb E_N f(\Gamma_N)-f(1)\right|\le \sup_{|x-1|\le\delta}|f(x)-f(1)|+2\|f\|_\infty\mathbb P_N(|\Gamma_N-1|>\delta),$ which tends to zero after $N\to\infty$ and then $\delta\downarrow0$. All other steps of the proof of [F1], including the Lindeberg estimate and the predictable-clock truncation, are already rowwise; hence that characteristic-function proof yields the martingale CLT for these finite permutation rows. Pad each row with zero increments. The conditional CDF converges to $\Phi$ at every $t$, contradicting the assumed failure. Thus it converges in probability at each $t$. [A1, F1, step 1.1, step 2.1, step 4.1, step 5.1, algebra]

7.1 Finally, choose $T$ so that $\Phi(-T)$ and $1-\Phi(T)$ are small, and partition $[-T,T]$ into finitely many points where adjacent $\Phi$ values differ by at most $\varepsilon$. Monotonicity of each conditional CDF bounds its deviation between grid points by the endpoint deviations plus $\varepsilon$. Pointwise convergence at the finite grid and the tail bounds yield uniform convergence in probability. The convention when $S_N^2=0$ affects an event whose probability tends to zero by step 1.1 and $\sigma^2>0$. [step 1.1, step 6.1, algebra] ∎
