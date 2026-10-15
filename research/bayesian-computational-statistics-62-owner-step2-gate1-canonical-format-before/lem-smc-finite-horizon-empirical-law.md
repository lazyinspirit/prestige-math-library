---
id: lem-smc-finite-horizon-empirical-law
kind: lemma
title: "Finite-horizon SMC empirical laws converge for integrable tests"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-smc-clt-function-classes-and-variance-recursions
  - alg-sequential-importance-resampling
  - thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts
  - thm-khinchin-weak-law-for-iid-integrable-variables
  - cor-chebyshev-inequality-for-random-variables
  - cor-markov-inequality-for-random-variables
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - thm-measurability-of-integration-against-a-kernel
proof_strategy: direct
axiom_use: "AC is inherited through the BCS-41 finite particle-law construction. The induction, kernel integrations and resampling calculations add no choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §2.1"
      url: "https://arxiv.org/pdf/math/0508594"
    - title: "Hans R. Künsch, Recursive Monte Carlo Filters: Algorithms and Theoretical Analysis, §§3–4"
      url: "https://arxiv.org/pdf/math/0602211"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §§3.3–3.5"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Use the finite-horizon target, proposal and mutation sequence of [[def-smc-clt-function-classes-and-variance-recursions]], and run the SIR procedure of [[alg-sequential-importance-resampling]] with either multinomial or residual resampling at every selection. Let $X_t^{1:N}$ be the proposal particles after mutation and before correction, let $\eta_t^N=N^{-1}\sum_{i=1}^N\delta_{X_t^i}$, and let
$$\omega_t^N=\frac{\sum_{i=1}^N\upsilon_t(X_t^i)\delta_{X_t^i}}{\sum_{i=1}^N\upsilon_t(X_t^i)}$$
when the denominator is positive, using the algorithm's uniform fallback otherwise. Let $\check\eta_t^N$ be the empirical probability measure of one offspring selection from $\omega_t^N$; for nonterminal times this is the population carried into the next mutation. For each fixed $t\le T$,
$$\eta_t^N(h)\xrightarrow{P}\widetilde\pi_t(h)\quad(h\in L^1(\widetilde\pi_t)),\qquad \omega_t^N(\phi)\xrightarrow{P}\pi_t(\phi),\qquad \check\eta_t^N(\phi)\xrightarrow{P}\pi_t(\phi)\quad(\phi\in L^1(\pi_t))$$
as $N\to\infty$. The terminal selection in $\check\eta_t^N$ is an auxiliary resampling output; it is not an extra finite-particle accuracy claim.

## Facts & Assumptions

**Given:** AC, the finite-horizon target/proposal flow, the sequential SIR mutation/correction/selection procedure, and one of the two stated offspring laws.

[A1] [[def-axiom-of-choice]]: AC is the choice principle assumed by the finite-horizon path-law and particle-law construction.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $\widetilde\pi_t=\pi_{t-1}k_t$, $\widetilde\pi_t(\upsilon_t)=1$, and $\pi_t(dz)=\upsilon_t(z)\widetilde\pi_t(dz)$.

[F2] [[alg-sequential-importance-resampling]]: Particles are initially sampled from the proposal; each later mutation is conditionally independent given the selected parents; correction uses the incremental Radon–Nikodym weights; either named resampling scheme may be selected.

[F3] [[thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts]]: Conditional expected offspring counts equal $N$ times the normalized input weights.

[F4] [[thm-khinchin-weak-law-for-iid-integrable-variables]]: IID integrable real variables have sample means converging in probability to their expectation.

[F5] [[cor-chebyshev-inequality-for-random-variables]]: For any square-integrable real random variable on a probability space, the probability of an absolute centered deviation at least $a>0$ is at most its variance divided by $a^2$.

[F6] [[cor-markov-inequality-for-random-variables]]: For any nonnegative random variable $Z$ on a probability space and $a>0$, $P(Z\ge a)\le E[Z]/a$.

[F7] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: The finite sequence of probability kernels defining the particle procedure determines its ordered joint law and conditional kernel factors under AC.

[F8] [[thm-measurability-of-integration-against-a-kernel]]: Integrating a measurable nonnegative function against a probability kernel gives a measurable section integral.

## Proof

**Given:** The hypotheses in the Statement.

1.1 At time $0$, [F2] and the finite particle law [F7] give IID proposal particles with law $\widetilde\pi_0$. For $h\in L^1(\widetilde\pi_0)$, [F4] gives $\eta_0^N(h)\to\widetilde\pi_0(h)$. If $\phi\in L^1(\pi_0)$, then $\upsilon_0\phi$ is integrable under $\widetilde\pi_0$ and its integral is $\pi_0(\phi)$ by [F1]; also $\widetilde\pi_0(\upsilon_0)=1$. Applying [F4] to numerator and denominator and dividing on the event that the denominator is positive gives $\omega_0^N(\phi)\to\pi_0(\phi)$. That event has probability tending to one because the denominator average converges to $1$. [A1, F1, F2, F4, F7, given]

1.2 The selected-law base at time zero follows as well. For bounded $\phi$, [F3] makes the conditional selected mean equal to $\omega_0^N(\phi)$. Under multinomial selection its conditional variance is at most $\|\phi\|_\infty^2/N$; under residual selection the deterministic floor counts have no variance and the at most $N$ remaining categorical draws give the same bound. By [F5] and step 1.1, $\check\eta_0^N(\phi)\to\pi_0(\phi)$ in probability. For integrable $\phi$, truncate at $M$. The conditional expected selected average of $|\phi|\mathbf1_{\{|\phi|>M\}}$ is its weighted empirical average by [F3], which converges to the target tail integral by step 1.1. Conditional Markov [F6], using $P(\text{tail average}>\epsilon)\le E[\min(1,\omega_0^N(\text{tail})/\epsilon)]$ and bounded continuity of $x\mapsto\min(1,x/\epsilon)$, makes the limiting tail probability vanish as $M\to\infty$. Combining with the bounded truncations proves the selected convergence for all $\pi_0$-integrable tests. [F3, F5, F6, step 1.1, algebra]

2.1 Fix $t\ge1$ and suppose the three convergences hold at $t-1$. First let $h$ be bounded. By [F2] and [F7], conditional on the selected parents, the $X_t^i$ are independent with laws $k_t(\check X_{t-1}^i,\cdot)$; measurability of $k_th$ follows from [F8]. Thus $\eta_t^N(h)-\check\eta_{t-1}^N(k_th)$ has conditional mean zero and conditional variance at most $\|h\|_\infty^2/N$. By [F5] this difference tends to zero in probability. Since $k_th$ is bounded and $\pi_{t-1}(k_th)=\widetilde\pi_t(h)$ by [F1], the induction hypothesis proves $\eta_t^N(h)\to\widetilde\pi_t(h)$. [A1, F1, F2, F5, F7, F8, given]

2.2 For general $h\in L^1(\widetilde\pi_t)$, let $h_M=h\mathbf1_{\{|h|\le M\}}$. The conditional mean of $\eta_t^N(|h-h_M|)$ is $Y_N=\check\eta_{t-1}^N(k_t|h-h_M|)$, measurable by [F8]. The function inside this last empirical average is integrable under $\pi_{t-1}$ and its integral is $a_M=\widetilde\pi_t(|h-h_M|)$. The induction hypothesis gives $Y_N\to a_M$ in probability. Conditional Markov [F6] bounds $P(\eta_t^N(|h-h_M|)>\epsilon)$ by $E[\min(1,Y_N/\epsilon)]$. For fixed $M$, bounded continuity of $y\mapsto\min(1,y/\epsilon)$ and convergence in probability to the constant $a_M$ imply that this expectation tends to $\min(1,a_M/\epsilon)$: for any $\eta>0$, split on $|Y_N-a_M|\le\eta$ and its complement, use continuity on the first event and convergence in probability on the second. Since $a_M\to0$ by integrability, the limiting tail probability vanishes. Applying the same truncation to the target integral and combining with step 2.1 proves the proposal empirical convergence for every integrable $h$. [A1, F1, F2, F6, F7, F8, step 2.1]

3.1 Apply step 2.2 to $h=\upsilon_t$ and $h=\upsilon_t\phi$, where $\phi\in L^1(\pi_t)$. Their limiting integrals are $1$ and $\pi_t(\phi)$ by [F1]. The ratio consequently converges to $\pi_t(\phi)$ whenever its denominator is positive; the denominator-zero event has probability tending to zero because its normalized sum converges to $1$. The uniform fallback in [F2] on that event cannot change convergence in probability. [F1, F2, step 2.2, algebra]

4.1 For bounded $\phi$, the conditional expectation of $\check\eta_t^N(\phi)$ is $\omega_t^N(\phi)$ by [F3]. In multinomial resampling the conditional variance is at most $\|\phi\|_\infty^2/N$. In residual resampling the deterministic floor counts contribute no variance, and the remaining $R\le N$ categorical draws give conditional variance at most $\|\phi\|_\infty^2/N$ as well. Chebyshev [F5] and step 3.1 prove $\check\eta_t^N(\phi)\to\pi_t(\phi)$ for bounded $\phi$. [F3, F5, step 3.1]

4.2 For $\phi\in L^1(\pi_t)$, truncate to $\phi_M=\phi\mathbf1_{\{|\phi|\le M\}}$. By [F3], the conditional expected selected average of $|\phi-\phi_M|$ is exactly $\omega_t^N(|\phi-\phi_M|)$. Step 3.1 applied to this integrable tail and conditional Markov [F6] make the limiting probability of a tail deviation at most $\min(1,\pi_t(|\phi-\phi_M|)/\epsilon)$, which tends to zero as $M\to\infty$. Combining with step 4.1 proves the selected empirical convergence for all integrable $\phi$. [F3, F6, step 3.1, step 4.1]

5.1 Steps 2.1–2.2, 3.1, and 4.1–4.2 establish the induction step from $t-1$ to $t$. Steps 1.1–1.2 give the base case, so the assertions hold for every fixed finite time. No conclusion is uniform in $t$. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 4.2] ∎
