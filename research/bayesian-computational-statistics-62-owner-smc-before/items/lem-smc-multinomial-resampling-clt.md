---
id: lem-smc-multinomial-resampling-clt
kind: lemma
title: "Conditional multinomial resampling central limit theorem"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-smc-clt-function-classes-and-variance-recursions
  - alg-multinomial-and-residual-offspring-resampling
  - lem-smc-finite-horizon-empirical-law
  - thm-lindeberg-feller-central-limit-theorem-sufficiency
  - cor-chebyshev-inequality-for-random-variables
  - thm-slutsky-for-real-random-variables
proof_strategy: direct
axiom_use: "AC is inherited through the finite particle laws and the stated IID triangular-array CLT; conditioning and the covariance addition are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, Appendix A.1, Lemma A.3"
      url: "https://arxiv.org/pdf/math/0508594"
    - title: "Hans R. Künsch, Recursive Monte Carlo Filters: Algorithms and Theoretical Analysis, §4, Theorem 4"
      url: "https://arxiv.org/pdf/math/0602211"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §3.6"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Fix a time $t$ in the finite-horizon SIR system of [[def-smc-clt-function-classes-and-variance-recursions]]. Let $\omega_t^N$ be its corrected weighted empirical law and let $\check\eta_t^N$ be the empirical law after multinomial offspring resampling. Suppose $\phi\in\Psi_t^{(1)}$, the empirical-law conclusions of [[lem-smc-finite-horizon-empirical-law]] hold, and
$$\sqrt N\{\omega_t^N(\phi)-\pi_t(\phi)\}\Rightarrow N(0,V)$$
for a finite $V\ge0$. Then
$$\sqrt N\{\check\eta_t^N(\phi)-\omega_t^N(\phi)\}\Rightarrow N(0,\operatorname{Var}_{\pi_t}(\phi)),$$
asymptotically independently of the weighted-estimator fluctuation, and
$$\sqrt N\{\check\eta_t^N(\phi)-\pi_t(\phi)\}\Rightarrow N\!\left(0,V+\operatorname{Var}_{\pi_t}(\phi)\right).$$

## Facts & Assumptions

**Given:** The corrected weighted empirical law, the multinomial selection rule, the target-moment condition $\phi\in\Psi_t^{(1)}$, and the weighted-estimator CLT in the Statement.

[A1] [[def-axiom-of-choice]]: AC is inherited through the finite-horizon particle-law construction and the cited probability limit theorem.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $\Psi_t^{(1)}$ gives $\pi_t(|\phi|^{2+\epsilon})<\infty$ for some $\epsilon>0$.

[F2] [[alg-multinomial-and-residual-offspring-resampling]]: Conditional on the corrected particles, multinomial offspring are IID draws from $\omega_t^N$.

[F3] [[lem-smc-finite-horizon-empirical-law]]: For every $\pi_t$-integrable test $h$, $\omega_t^N(h)\to\pi_t(h)$ in probability.

[F4] [[thm-lindeberg-feller-central-limit-theorem-sufficiency]]: A centered independent triangular array with positive total variance and the Lindeberg condition, divided by its row standard deviation, converges to $N(0,1)$.

[F5] [[cor-chebyshev-inequality-for-random-variables]]: For a square-integrable variable on any probability space, the probability of an absolute centered deviation at least $a>0$ is at most its variance divided by $a^2$.

[F6] [[thm-slutsky-for-real-random-variables]]: Multiplying a distributionally convergent real variable by one converging in probability to a constant gives the scaled limit.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Let $\mathcal F_N$ contain the corrected particles and their weights. By [F2], conditionally on $\mathcal F_N$ the selected values $Y_1^N,\ldots,Y_N^N$ are IID with law $\omega_t^N$. Their centered conditional variance is $s_N^2=\omega_t^N(\phi^2)-\omega_t^N(\phi)^2$, which converges in probability to $s^2=\operatorname{Var}_{\pi_t}(\phi)$ by [F1] and [F3]. [A1, F1, F2, F3, given]

1.2 Put $\xi_i^N=\phi(Y_i^N)-\omega_t^N(\phi)$. Since $\pi_t(|\phi|^{2+\epsilon})<\infty$, [F3] gives $\omega_t^N(|\phi|^{2+\epsilon})=O_P(1)$ and $\omega_t^N(|\phi|)=O_P(1)$. Jensen's inequality and $|a-b|^{2+\epsilon}\le 2^{1+\epsilon}(|a|^{2+\epsilon}+|b|^{2+\epsilon})$ then give $\omega_t^N(|\phi-\omega_t^N(\phi)|^{2+\epsilon})=O_P(1)$. For every $a>0$, the conditional Lindeberg sum is bounded by
$$\frac1N\sum_{i=1}^N\mathbb E\!\left[(\xi_i^N)^2\mathbf1_{\{|\xi_i^N|>a\sqrt N\}}\middle|\mathcal F_N\right]\le a^{-\epsilon}N^{-\epsilon/2}\omega_t^N(|\phi-\omega_t^N(\phi)|^{2+\epsilon}),$$
which tends to zero in probability. [F1, F2, F3, step 1.1, algebra]

2.1 Along any subsequence, choose a further subsequence on which $s_N\to s$ almost surely. If $s>0$, then eventually $s_N>s/2$; the normalized Lindeberg sum for draws divided by $s_N\sqrt N$ is bounded by step 1.2 at threshold $as/2$, divided by $s_N^2$. It therefore tends to zero in probability, and a further subsequence makes that convergence almost sure. Apply [F4] to obtain a standard-normal limit for the normalized row. Slutsky [F6] with $s_N\to s$ gives convergence of the conditional characteristic function of $N^{-1/2}\sum_i\xi_i^N$ to $e^{-u^2s^2/2}$. If $s=0$, conditional [F5] gives $P(|N^{-1/2}\sum_i\xi_i^N|>a\mid\mathcal F_N)\le\min(1,s_N^2/a^2)\to0$, giving the degenerate characteristic-function limit. The subsequence criterion therefore gives convergence in probability of these conditional characteristic functions along the full sequence. [F4, F5, F6, step 1.1, step 1.2]

2.2 The conditional characteristic functions are bounded by one, so their differences from $e^{-u^2s^2/2}$ converge to zero in $L^1$. Multiplying by the bounded factor $e^{iu\sqrt N(\omega_t^N(\phi)-\pi_t(\phi))}$ and taking expectations shows that the joint limiting characteristic function factors into the weighted-estimator Gaussian characteristic function and $e^{-u^2s^2/2}$. Thus the resampling fluctuation is asymptotically independent of the weighted fluctuation, and their sum has variance $V+s^2$. [step 2.1, given, algebra] ∎
