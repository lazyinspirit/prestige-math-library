---
dependency_level: 6
id: thm-overlapping-batch-means-strong-consistency
kind: theorem
title: Strong consistency of overlapping batch means
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - alg-overlapping-batch-means-mcse
  - cor-canonical-markov-chain-on-path-space
  - cor-existence-and-scaling-of-d-dimensional-brownian-motion
  - def-axiom-of-choice
  - def-flegal-jones-obm-batch-size-conditions
  - def-geometric-and-uniform-ergodicity-for-mcmc-clt
  - def-long-run-variance-for-stationary-markov-chain
  - def-measure-kernel-and-probability-kernel
  - def-state-dependent-one-step-minorization
  - lem-geometric-total-variation-rate-controls-strong-mixing
  - lem-harris-geometric-ergodicity-has-integrable-rate-envelope
  - lem-measurable-observation-does-not-increase-mixing-coefficients
  - lem-obm-consistency-from-strong-brownian-approximation
  - lem-zero-variance-geometric-markov-sums-have-strong-rate
  - thm-geometrically-ergodic-chain-strong-invariance-principle
  - thm-invariant-initial-law-makes-the-chain-stationary
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-strong-mixing-clt-with-moment-conditions
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo, Theorem 2 and Appendix B.3
      url: https://arxiv.org/pdf/0811.1729
    - title: James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo, Corollary 1
      url: https://arxiv.org/pdf/0811.1729
axiom_use: Assume AC through the canonical-chain, geometric-envelope, strong-mixing CLT, Brownian, product-extension and strong-invariance suppliers. No further choice principle is used by the finite OBM comparison.
proof_strategy: direct
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

## Facts & Assumptions

**Given:** The geometrically ergodic chain, its arbitrary initial law, the real measurable observable $g$, the moment exponents $\delta,\varepsilon>0$, the supplied one-step minorization, and every displayed numerical batch-size hypothesis.

[A1] AC is assumed through the chain, Brownian, mixing and strong-approximation interfaces. [[def-axiom-of-choice]]

[F1] The canonical chain exists for each initial law, and choosing its invariant initial law $\pi$ makes it strictly stationary. [[cor-canonical-markov-chain-on-path-space]], [[thm-invariant-initial-law-makes-the-chain-stationary]]

[F2] An invariant kernel with an everywhere finite measurable common geometric total-variation bound admits a geometric envelope integrable under $\pi$, on the original arbitrary measurable space. [[lem-harris-geometric-ergodicity-has-integrable-rate-envelope]]

[F3] An integrable geometric total-variation envelope gives exponentially decaying stationary strong-mixing coefficients. A measurable observation preserves stationarity and does not increase those coefficients. [[lem-geometric-total-variation-rate-controls-strong-mixing]], [[lem-measurable-observation-does-not-increase-mixing-coefficients]]

[F4] For a centered stationary sequence with a finite $(2+\eta)$th absolute moment, $\eta>0$, summability of $\alpha(n)^{\eta/(2+\eta)}$ gives absolute covariance summability, a finite nonnegative covariance-sum variance, and a CLT with that variance, including zero. [[thm-strong-mixing-clt-with-moment-conditions]]

[F5] The covariance long-run variance is the stationary covariance sum when absolute summability and the CLT have been established; equality to the CLT variance is a theorem obligation, not a consequence of the definition alone. [[def-long-run-variance-for-stationary-markov-chain]]

[F6] Under the stated geometric-ergodicity, minorization and $(2+\delta+\varepsilon)$th moment hypotheses, with positive finite asymptotic standard deviation, the strong invariance principle supplies a Brownian approximation with error $O(n^{1/(2+\delta)}\log n)$ on an extension of the original chain. [[thm-geometrically-ergodic-chain-strong-invariance-principle]]

[F7] Under the everywhere common geometric total-variation bound, a finite centered $f\in L^q(\pi)$ with zero covariance sum has, for every $2<p<q$, the maximal partial-sum rate $o(n^{1/p})$ under every initial law, without a moment condition on that law. [[lem-zero-variance-geometric-markov-sums-have-strong-rate]]

[F8] A partial-sum approximation by $\sigma B(n)$ with error $O(n^\alpha\log n)$, $\sigma\ge0$ and $0<\alpha<1/2$, implies consistency of the exact OBM estimator when $b_n/n\to0$, $\sum_n(b_n/n)^c<\infty$, $(b_n/n)\log n\to0$, and $n^{2\alpha}(\log n)^2/b_n\to0$. It requires neither stationarity nor batch monotonicity and includes zero variance. [[lem-obm-consistency-from-strong-brownian-approximation]]

[F9] The corrected Flegal–Jones contract retains all numerical rate, summability and endpoint conditions. For $\delta>2/3$ and $2/(2+\delta)<\nu<3/4$, the integer sequence $\lfloor n^\nu\rfloor$ satisfies that contract; the definition supplies the floor bounds and each numerical limit. [[def-flegal-jones-obm-batch-size-conditions]]

[F10] A standard scalar Brownian motion exists, and the product of its probability space with the original probability space gives an extension preserving the original marginal. [[cor-existence-and-scaling-of-d-dimensional-brownian-motion]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

## Proof

1.1 Put $q=2+\delta+\varepsilon$, $\mu=\pi(g)$ and $f=g-\mu$. The moment hypothesis gives $\pi|g|<\infty$, since $|g|\le1+|g|^q$, so $\mu$ is finite. The elementary bound $|g-\mu|^q\le2^q(|g|^q+|\mu|^q)$ gives $\pi|f|^q<\infty$, and $\pi f=0$. For variance identification consider the canonical chain with initial law $\pi$, which is stationary by [F1]. The given geometric bound has an everywhere finite measurable common envelope, so the stronger arbitrary-measurable-space clause of [F2] supplies an integrable such envelope. By [F3], this stationary chain and its observation $f$ have a strong-mixing bound $\alpha_f(n)\le Cr^n$ with $C<\infty$ and $r\in(0,1)$. This construction is only for identifying the stationary covariance parameter; the observed initial law remains arbitrary. [A1, F1, F2, F3, given, construct, algebra]

1.2 Take $\eta=q-2=\delta+\varepsilon>0$. The geometric bound in step 1.1 makes $\sum_n\alpha_f(n)^{\eta/(2+\eta)}$ finite. Apply [F4] to the stationary observed sequence. Its covariance series is absolutely convergent, its sum $v=\pi(f^2)+2\sum_{k\ge1}\operatorname{Cov}_\pi(f(X_0),f(X_k))$ is finite and nonnegative, and its CLT has precisely variance $v$. Thus [F5] identifies $v=\sigma_g^2$, without using the stationary Harris-only formulation of a separate MCMC regime theorem. Write $\sigma=\sqrt v\ge0$ and $\alpha=1/(2+\delta)\in(0,1/2)$. [F4, F5, step 1.1, given, algebra]

2.1 If $v>0$, the original $g$, the given $\delta,\varepsilon$, geometric ergodicity and supplied minorization meet [F6] with the finite positive standard deviation from step 1.2. Hence, for the original arbitrary initial law, on an extension there are a standard Brownian motion $B$ and finite random constants for which $|\sum_{i=1}^n f(X_i)-\sigma B(n)|=O(n^\alpha\log n)$ almost surely. The same moment exponents and the same covariance variance are used; no stronger moment assumption is introduced. [F6, step 1.1, step 1.2, given]

2.2 If $v=0$, choose a real $p$ with $2+\delta<p<q$, possible because $\varepsilon>0$. Apply the all-start geometric-envelope clause of [F7] to $f$; its moment and zero covariance hypotheses were established in steps 1.1–1.2. Use the chain indexed from $X_1$ as its time-zero chain, whose initial law is still arbitrary. Then $\max_{j\le n}|\sum_{i=1}^j f(X_i)|=o(n^{1/p})$ almost surely. Since $1/p<\alpha$, this implies $|\sum_{i=1}^n f(X_i)|=O(n^\alpha\log n)$. Adjoin a standard Brownian motion on the product extension supplied by [F10] and set $\sigma=0$. The same approximation as in step 2.1 now holds, with zero Brownian coefficient. No division by $\sigma$ or implication from a degenerate CLT to an almost-sure rate is used. [F7, F10, step 1.1, step 1.2, choose, construct, algebra]

3.1 In either variance branch the hypotheses of [F8] hold with this $\sigma,\alpha$. Indeed $n/b_n\to\infty$ gives $b_n/n\to0$, while the summability and $(b_n/n)\log n\to0$ assumptions are displayed in the Statement. Moreover $n^{2\alpha}(\log n)^2/b_n=[n^{2/(2+\delta)}(\log n)^3/b_n]/\log n\to0$. The other stated numerical endpoint and growth conditions are retained and impose no additional requirement in this reduction. Thus [F8] gives convergence to $\sigma^2=v$ for the exact OBM estimator applied to $Y_i=f(X_i)$. [F8, step 1.2, step 2.1, step 2.2, given, algebra]

3.2 Centering the observations by the constant $\mu$ does not change this finite estimator: $\bar f_n=\bar g_n-\mu$ and $\bar f_{n,j}(b_n)=\bar g_{n,j}(b_n)-\mu$, so their difference equals $\bar g_{n,j}(b_n)-\bar g_n$. The indexing $j=0,\ldots,n-b_n$ in [F8] is exactly $j=1,\ldots,n-b_n+1$ after adding one to the starting index, and its denominator is $(n-b_n)(n-b_n+1)$ as here. Therefore its estimator is the displayed $\widehat\sigma^2_{\mathrm{OBM},n}$, and steps 1.2 and 3.1 prove its almost-sure convergence to $\sigma_g^2$ under the original arbitrary initial law. [F8, step 1.1, step 1.2, step 3.1, algebra]

4.1 Finally, the source-corollary range is $2/(2+\delta)<\nu<3/4$. By [F9], $b_n=\lfloor n^\nu\rfloor$ satisfies every corrected numerical batch hypothesis, so steps 1.1–3.2 apply to it as well. This verifies the intended floor-power conclusion without asserting the incompatible ratio monotonicity. The proof includes $v=0$, finite early inadmissible batch indices, and arbitrary initial laws without additional moment hypotheses, as allowed by [F7]–[F8]. [F7, F8, F9, step 1.1, step 1.2, step 2.2, step 3.2, given] ∎
