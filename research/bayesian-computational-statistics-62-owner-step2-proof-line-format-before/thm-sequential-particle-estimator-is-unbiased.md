---
id: thm-sequential-particle-estimator-is-unbiased
kind: theorem
title: "The sequential particle estimator is unbiased for Feynman–Kac path integrals"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-feynman-kac-path-targets-and-normalizers
  - alg-sequential-importance-resampling
  - thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts
  - lem-feynman-kac-path-measures-satisfy-forward-recursion
  - thm-feynman-kac-path-radon-nikodym-weight
  - thm-measurability-of-integration-against-a-kernel
  - thm-conditional-expectation-exists-by-radon-nikodym
  - thm-tower-property-of-conditional-expectation
  - def-conditional-expectation-as-an-ae-class
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-change-of-variables-for-expectation
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-integration-against-a-radon-nikodym-derivative
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
proof_strategy: direct
axiom_use: "Assume AC through the path Radon–Nikodym, kernel-law, and conditional-expectation suppliers. The finite resampling count calculation itself is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §§3.3–3.5"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., §§11.2–11.5"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §§2.1–2.2"
      url: "https://arxiv.org/pdf/math/0508594"
---

## Statement

Assume AC and the finite-horizon setup of [[def-feynman-kac-path-targets-and-normalizers]] and [[alg-sequential-importance-resampling]]. Fix $N\ge1$ and $t\le T$. Suppose every prefix normalizer satisfies $0<Z_k<\infty$ for $0\le k\le t$. For any nonnegative measurable $\varphi:\mathsf X_{0:t}\to[0,\infty]$ with $\gamma_t(\varphi)<\infty$, define $\widehat\gamma_t^N(\varphi)=\int\varphi\,d(\widehat Z_t\widehat\pi_t^N)$. Then
$$\mathbb E[\widehat\gamma_t^N(\varphi)]=\gamma_t(\varphi).$$
In particular, with $\varphi=1$, the product-of-average-incremental-weights estimator in the algorithm satisfies $\mathbb E[\widehat Z_t]=Z_t$. At each time either multinomial or residual offspring resampling may be used. The theorem asserts no unbiasedness for the normalized empirical measure $\widehat\pi_t^N$ by itself.

## Facts & Assumptions

**Given:** AC, the finite-horizon target/proposal assumptions, $N\ge1$, finite positive prefix normalizers, and a nonnegative test function with finite target integral.

[A1] [[def-axiom-of-choice]]: AC is used through the path-law, kernel Radon–Nikodym, and conditional-expectation suppliers.

[F1] [[alg-sequential-importance-resampling]]: The initial and incremental weights, normalized fallback, resampling-propagation order, and product normalizer estimate are specified there.

[F2] [[def-conditional-expectation-given-a-sigma-algebra]]: A conditional-expectation version is measurable, integrable, and satisfies its defining event-integral identities.

[F3] [[thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts]]: Conditional expected offspring counts equal $N$ times the input normalized weights for either scheme.

[F4] [[lem-feynman-kac-path-measures-satisfy-forward-recursion]]: $\gamma_k(\varphi)=\gamma_{k-1}(M_k(G_k\varphi))$ for nonnegative measurable $\varphi$.

[F5] [[thm-feynman-kac-path-radon-nikodym-weight]]: Under its support hypotheses, the theorem supplies a nonnegative measurable initial version $\rho_0=d\mu_0/d\nu_0$ and jointly measurable nonnegative transition versions $r_k(x,\cdot)=dM_k(x,\cdot)/dR_k(x,\cdot)$ for almost every preceding proposal state, with the setwise Radon–Nikodym identities. Each derivative has reference integral one on the relevant conull set.

[F6] [[thm-change-of-variables-for-expectation]]: Expectation of a nonnegative random element function is integration against its law.

[F7] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: Finite sums of integrable random variables have the sum of their expectations.

[F8] [[thm-conditional-expectation-exists-by-radon-nikodym]]: AC and an integrable real random variable give an $L^1$ conditional-expectation version for any sub-sigma-algebra.

[F9] [[thm-tower-property-of-conditional-expectation]]: For nested sigma-algebras and an $L^1$ variable, iterated conditional expectations agree almost surely.

[F10] [[def-conditional-expectation-as-an-ae-class]]: Conditional expectations are integrable measurable equivalence classes with the defining event integrals.

[F11] [[thm-measurability-of-integration-against-a-kernel]]: Integrating a nonnegative product-measurable function against a probability kernel gives a measurable section integral.

[F12] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: The finite sequence of conditional particle and proposal kernels has a joint law with the stated iterated integrals.

[F13] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: A nonnegative function with zero integral vanishes almost everywhere.

[F14] [[thm-integration-against-a-radon-nikodym-derivative]]: A setwise Radon–Nikodym identity also gives the corresponding integration identity for nonnegative simple functions whose level sets have finite total variation.

[F15] [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]: Every nonnegative measurable function is an increasing pointwise limit of nonnegative simple functions.

[F16] [[thm-monotone-convergence-for-the-integral]]: Integrals commute with increasing limits of nonnegative measurable functions.

## Proof

**Given:** The hypotheses in the Statement. For the induction step at $k\ge1$, assume the asserted identity holds at time $k-1$ for every nonnegative test function with finite $\gamma_{k-1}$-integral.

1.1 First, extend each setwise density identity needed here to nonnegative measurable integrands. If $P(A)=\int_Au\,dQ$ for every measurable $A$, with $u\ge0$, choose simple $g_n\uparrow g$ by [F15]. The simple-function identity [F14] gives $\int g_n\,dP=\int g_nu\,dQ$ for each $n$, and [F16] on both sides yields $\int g\,dP=\int gu\,dQ$, allowing infinity. This applies to the initial law pair and, for almost every preceding proposal state, to each transition-kernel pair in [F5]. At time zero, the algorithm gives $\widehat\gamma_0^N(\varphi)=N^{-1}\sum_{i=1}^NG_0(X_0^i)\rho_0(X_0^i)\varphi(X_0^i)$, with zero-weight terms interpreted by the nonnegative-integral convention $0\cdot\infty=0$. Each $X_0^i$ has law $\nu_0$, so [F6], finite-sum linearity [F7], and the just-proved extension give $\mathbb E[\widehat\gamma_0^N(\varphi)]=\int G_0\rho_0\varphi\,d\nu_0=\gamma_0(\varphi)$. The finite target integral makes this random variable integrable. [A1, F1, F5, F6, F7, F14, F15, F16, given]

1.2 Every time-zero particle path has law $Q_0$. Inductively, resampling copies only paths already present. If $Q_k(A)=0$, its iterated-kernel formula from [F12] and [F13] gives $R_k(x,A_x)=0$ for $Q_{k-1}$-almost every history; propagation therefore avoids $A$ almost surely whenever every previous particle path avoids each fixed $Q_{k-1}$-null set. Thus sampled parent states lie in the proposal-marginal full sets where the kernel derivatives apply. Each initial or kernel derivative has reference integral one by [F5]. If such a nonnegative derivative were infinite on a set of positive reference measure, its integral would exceed every finite bound; hence all these derivatives are finite almost everywhere. The potentials are finite-valued, so all particle weights are finite almost surely. [A1, F1, F5, F12, F13, given]

2.1 Write $\mathcal F_{k-1}$ for the previous particle histories and weights. Let $H_k$ be the integral of $\widehat\gamma_k^N(\varphi)$ against the algorithm's conditional finite-step transition law. By [F3], the expected number of children from parent $j$ is $N\bar w_{k-1}^j$. For each parent outside the exceptional proposal-marginal null set, apply the simple-approximation extension in step 1.1 to the nonnegative measurable function $x_k\mapsto G_k(x_k)\varphi(x_{0:k})$; the setwise identity in [F5] then gives $\int G_k\varphi\,r_k\,dR_k=\int G_k\varphi\,dM_k$, including infinite values. Integrating each child's incremental weight and summing the expected counts therefore gives $H_k=\widehat\gamma_{k-1}^N(g_k)$, where $g_k(x_{0:k-1})=\int G_k(x_k)\varphi(x_{0:k})M_k(x_{k-1},dx_k)$. If the previous normalizer estimate is zero, both sides vanish by the algorithm's zero-weight convention. Measurability follows from [F11]. This is initially a nonnegative conditional-kernel integral, not yet an $L^1$ conditional expectation. [A1, F1, F3, F5, F11, F12, step 1.1, step 1.2, given]

3.1 By [F4], the target integral of $g_k$ is $\gamma_{k-1}(g_k)=\gamma_k(\varphi)<\infty$. The induction hypothesis therefore gives $\mathbb E[H_k]=\gamma_k(\varphi)$. For every prior event $B\in\mathcal F_{k-1}$, the ordered joint law of the prior histories and the algorithm's conditional finite-step transition law [F12], integrated with the nonnegative integrand $\mathbf1_B\widehat\gamma_k^N(\varphi)$, gives
$$\mathbb E[\mathbf1_B\widehat\gamma_k^N(\varphi)]=\mathbb E[\mathbf1_BH_k].$$
This identity is valid before any integrability assumption, by nonnegative iterated integration. Taking $B=\Omega$ shows that $\widehat\gamma_k^N(\varphi)$ has finite expectation $\gamma_k(\varphi)$, so it is in $L^1$; $H_k$ is also in $L^1$ by its finite expectation. Thus the event identities and measurability make $H_k$ a version of $\mathbb E[\widehat\gamma_k^N(\varphi)\mid\mathcal F_{k-1}]$ by [F2] and [F10]. The tower property [F9] now yields $\mathbb E[\widehat\gamma_k^N(\varphi)]=\gamma_k(\varphi)$, completing the induction step. [A1, F2, F4, F8, F9, F10, F12, step 2.1]

4.1 Apply the established identity at $k=t$ to the constant function $\varphi=1$. Then $\widehat\gamma_t^N(1)=\widehat Z_t\widehat\pi_t^N(1)=\widehat Z_t$, while $\gamma_t(1)=Z_t$, proving the stated normalizer unbiasedness. [F1, step 3.1, algebra] ∎

## Remarks

The proof is finite-horizon and uses precisely the specified full resampling-propagation scheme with unbiased expected offspring counts. It does not imply an unbiased normalized empirical target, a particle-count central limit theorem, a finite-$N$ error bound, or a bound uniform in time.
