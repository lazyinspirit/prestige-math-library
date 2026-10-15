---
id: thm-overlapping-batch-means-strong-consistency
kind: theorem
title: Strong consistency of overlapping batch means
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - alg-overlapping-batch-means-mcse
  - def-flegal-jones-obm-batch-size-conditions
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-long-run-variance-for-stationary-markov-chain
  - def-measure-kernel-and-probability-kernel
  - def-state-dependent-one-step-minorization
  - thm-geometrically-ergodic-chain-strong-invariance-principle
  - thm-mcmc-clt-sufficient-regimes
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo, Theorem 2 and Appendix B.3"
      url: "https://arxiv.org/pdf/0811.1729"
    - title: "James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo, Corollary 1"
      url: "https://arxiv.org/pdf/0811.1729"
verification:
  precheck: n/a
axiom_use: "The imported strong invariance principle proof uses a probability-space extension; its full construction is not supplied locally."
---

## Statement

Let $P$ be a geometrically ergodic Markov chain with invariant probability $\pi$, and let the initial distribution be arbitrary. Let $g$ be real Borel and suppose $\pi(|g|^{2+\delta+\varepsilon})<\infty$ for some $\delta,\varepsilon>0$. Assume the state-dependent one-step minorization [[def-state-dependent-one-step-minorization]]: there are measurable $s:\mathsf X\to[0,1]$ and a probability measure $Q$ such that $P(x,A)\ge s(x)Q(A)$ for all $x,A$.

Let $(b_n)$ be positive integer batch sizes with $1\le b_n<n$ for all sufficiently large $n$, $b_n\to\infty$, and $n/b_n\to\infty$. Suppose there is $c\ge1$ such that
$$\sum_{n=1}^{\infty}(b_n/n)^c<\infty,$$
and suppose
$$\frac{b_n}{n}\log n\to0,\qquad \frac{n^{2/(2+\delta)}(\log n)^3}{b_n}\to0,$$
there are $n_0$ and $c_1<\infty$ with $\log n/b_n\le c_1$ for every $n\ge n_0$, and
$$b_n^2n^{-2}\log\log n\to0,\qquad b_n^4n^{-3}\log\log n\to0.$$

For $\bar g_n=n^{-1}\sum_{i=1}^ng(X_i)$ and $\bar g_{n,j}(b_n)=b_n^{-1}\sum_{i=j}^{j+b_n-1}g(X_i)$, define
$$\widehat\sigma^2_{\mathrm{OBM},n}=\frac{nb_n}{(n-b_n)(n-b_n+1)}\sum_{j=1}^{n-b_n+1}\bigl(\bar g_{n,j}(b_n)-\bar g_n\bigr)^2.$$
The strong-consistency conclusion is
$$\widehat\sigma^2_{\mathrm{OBM},n}\longrightarrow\sigma_g^2\quad\text{almost surely},$$
where $\sigma_g^2$ is the covariance long-run variance defined by [[def-long-run-variance-for-stationary-markov-chain]]. The batch sequence satisfies [[def-flegal-jones-obm-batch-size-conditions]] for the displayed exponent $\delta$; these conditions are written out above. This corrects the source's incompatible requirement that both integer $b_n$ and $n/b_n$ be nondecreasing, retaining every numerical batch-size hypothesis.

As in the intended source corollary, if $\delta>2/3$ and $(1+\delta/2)^{-1}<\nu<3/4$, then $b_n=\lfloor n^\nu\rfloor$ satisfies these corrected batch-size hypotheses and has the same strong-consistency conclusion. No monotonicity of $n/\lfloor n^\nu\rfloor$ is asserted.

## Proof status

The complete local proof remains pending. The Gaussian quadratic-form and pathwise approximation comparison have been proved separately in the local supplier `lem-obm-consistency-from-strong-brownian-approximation`. For $\alpha=1/(2+\delta)$ its batch-rate requirements follow from those above, including the stronger displayed logarithmic rate. It treats approximation constants $\sigma\ge0$ without division by $\sigma$ and requires no stationarity or batch monotonicity.

What remains is a local Markov-chain approximation theorem under this statement's exact chain hypotheses and arbitrary initial law, identifying its variance constant with the covariance long-run variance and supplying the approximation or an adequate partial-sum rate when that variance is zero. The current positive-variance-only strong-invariance statement does not settle that boundary. A degenerate CLT by itself does not give the needed almost-sure rate. Those upstream proof obligations remain owner escalations; this theorem is not claimed complete.
