---
id: thm-overlapping-batch-means-strong-consistency
kind: theorem
title: Strong consistency of overlapping batch means
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
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

Let $(b_n)$ be positive integer batch sizes with $1\le b_n<n$ for all sufficiently large $n$, $b_n\to\infty$, $n/b_n\to\infty$, and both sequences monotonically nondecreasing. Suppose there is $c\ge1$ such that
$$\sum_{n=1}^{\infty}(b_n/n)^c<\infty,$$
and suppose
$$\frac{b_n}{n}\log n\to0,\qquad \frac{n^{2/(2+\delta)}(\log n)^3}{b_n}\to0,$$
there are $n_0$ and $c_1<\infty$ with $\log n/b_n\le c_1$ for every $n\ge n_0$, and
$$b_n^2n^{-2}\log\log n\to0,\qquad b_n^4n^{-3}\log\log n\to0.$$

For $\bar g_n=n^{-1}\sum_{i=1}^ng(X_i)$ and $\bar g_{n,j}(b_n)=b_n^{-1}\sum_{i=j}^{j+b_n-1}g(X_i)$, define
$$\widehat\sigma^2_{\mathrm{OBM},n}=\frac{nb_n}{(n-b_n)(n-b_n+1)}\sum_{j=1}^{n-b_n+1}\bigl(\bar g_{n,j}(b_n)-\bar g_n\bigr)^2.$$
Then the source theorem states that
$$\widehat\sigma^2_{\mathrm{OBM},n}\longrightarrow\sigma_g^2\quad\text{almost surely},$$
where $\sigma_g^2$ is the covariance long-run variance defined by [[def-long-run-variance-for-stationary-markov-chain]]. The batch sequence is required to satisfy the exact Flegal–Jones contract in [[def-flegal-jones-obm-batch-size-conditions]] for the displayed exponent $\delta$; these conditions are written out above.

As a source corollary, if $\delta>2/3$ and $(1+\delta/2)^{-1}<\nu<3/4$, then $b_n=\lfloor n^\nu\rfloor$ satisfies the batch-size hypotheses and has the same strong-consistency conclusion.

## Proof status

No complete local proof is supplied. Flegal–Jones Appendix B.3 reduces the claim to their strong invariance principle, Brownian increment bounds, a quadratic-form comparison, and the Lemma 8 estimates; the strong-invariance lemma itself cites Bednorz–Latuszyński and Jones et al. The requested local regeneration/block proof is not present in that route. There is also an unresolved zero-variance boundary: the source's strong-invariance-principle definition requires $0<\sigma_g<\infty$, while Theorem 2's statement does not state strict positivity. These are owner escalations; the source statement is retained without claiming its proof is complete.
