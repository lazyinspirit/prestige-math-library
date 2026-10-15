---
id: lem-smc-mutation-and-weighted-correction-clt
kind: lemma
title: "Conditional mutation and weighted correction CLT"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - thm-dominated-convergence
  - def-axiom-of-choice
  - def-smc-clt-function-classes-and-variance-recursions
  - alg-sequential-importance-resampling
  - lem-smc-finite-horizon-empirical-law
  - thm-lindeberg-feller-central-limit-theorem-sufficiency
  - thm-slutsky-for-real-random-variables
  - cor-chebyshev-inequality-for-random-variables
proof_strategy: direct
axiom_use: "AC is used through the finite particle laws and the cited Lindeberg–Feller theorem; conditional characteristic-function calculations add no choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, Appendix A.1, Lemma A.1–A.2"
      url: "https://arxiv.org/pdf/math/0508594"
    - title: "Hans R. Künsch, Recursive Monte Carlo Filters: Algorithms and Theoretical Analysis, §4, Theorem 4"
      url: "https://arxiv.org/pdf/math/0602211"
---

## Statement

Fix $t\ge1$. Suppose the selected empirical array at time $t-1$ has the CLT with covariance $\widehat V_{t-1}$ for $k_t\psi$. Let $\psi:\Theta_t\to\mathbb R$ satisfy $\widetilde\pi_t(|\psi|^{2+\delta})<\infty$ for some $\delta>0$ and $k_t\psi\in\Phi_{t-1}^{(1)}$. Then the proposal empirical mean after mutation satisfies
$$\sqrt N\left(\eta_t^N(\psi)-\widetilde\pi_t(\psi)\right)\Rightarrow N\!\left(0,\widehat V_{t-1}(k_t\psi)+\pi_{t-1}\!\left(\operatorname{Var}_{k_t}(\psi)\right)\right)=N(0,\widetilde V_t(\psi)).$$
For weighted correction, take $\psi=\upsilon_t(\phi-\pi_t(\phi))$ and explicitly require the preceding selected-population CLT for $k_t\psi=E_t(\phi-\pi_t(\phi))$. In particular, if $\phi\in\Psi_t^{(1)}$, $1\in\Phi_s^{(1)}$ for $0\le s\le t$, and this preceding selected CLT holds, the weighted corrected estimate satisfies
$$\sqrt N\left(\omega_t^N(\phi)-\pi_t(\phi)\right)\Rightarrow N(0,V_t(\phi)).$$
At $t=0$, a separate weighted-only conclusion holds whenever $\pi_0(|\phi|)<\infty$ and $Z=\upsilon_0(\phi-\pi_0\phi)\in L^2(\widetilde\pi_0)$: the weighted estimate has the ratio CLT with variance $V_0(\phi)=\widetilde\pi_0(Z^2)$. No target second moment, proposal second moment of $\phi$, or denominator second moment is required for this weighted-only conclusion. The stronger $\Psi_0$ assumptions imply it and support subsequent selected-population conclusions.

## Facts & Assumptions

**Given:** The finite-horizon particle scheme, the previous selected-population CLT, and the function-class hypotheses in the Statement.

[A1] [[def-axiom-of-choice]]: AC is inherited through the finite-horizon particle-law construction and the Lindeberg–Feller supplier.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $\widetilde\pi_t=\pi_{t-1}k_t$, $\pi_t=\upsilon_t\widetilde\pi_t$, and $\Psi_t$ supplies a target second moment and recursive membership of $k_t(\upsilon_t(\phi-\pi_t\phi))$ in $\Psi_{t-1}$.

[F2] [[alg-sequential-importance-resampling]]: Conditional on the selected parents, the next proposal particles are drawn independently through $k_t$ and are then corrected by the incremental RN weights.

[F3] [[lem-smc-finite-horizon-empirical-law]]: Integrable proposal and selected empirical averages converge in probability to their target-law integrals at each fixed time.

[F4] [[thm-lindeberg-feller-central-limit-theorem-sufficiency]]: A centered independent triangular array with positive total variance and the Lindeberg condition, divided by its row standard deviation, converges to $N(0,1)$.

[F5] [[thm-slutsky-for-real-random-variables]]: If $X_N\Rightarrow X$ and $Y_N\to c$ in probability, then $X_NY_N\Rightarrow cX$; for $c\ne0$, the corresponding ratio converges to $X/c$.

[F6] [[cor-chebyshev-inequality-for-random-variables]]: For a square-integrable variable on any probability space, the probability of an absolute centered deviation at least $a>0$ is at most its variance divided by $a^2$.

[F7] [[thm-dominated-convergence]]: integrable domination permits passage to limits under the integral.

## Proof

**Given:** The hypotheses in the Statement.

1.1 At $t=0$, the centered weighted numerator $Z=\upsilon_0(\phi-\pi_0\phi)$ has mean zero and finite second moment under the weighted-only assumptions; the $\Psi_0$ assumptions are sufficient for them. If its variance $\sigma_Z^2$ is positive, its IID row satisfies Lindeberg because $\sigma_Z^{-2}E[Z^2\mathbf1_{\{|Z|>a\sigma_Z\sqrt N\}}]\to0$ by [F7] for each $a>0$. Thus [F4] gives the IID CLT; if its variance is zero, [F6] gives convergence of its centered sample mean to zero. The denominator $\eta_0^N(\upsilon_0)$ converges to one by [F3], since $\widetilde\pi_0(\upsilon_0)=1$. Slutsky [F5] gives the ratio CLT with variance $V_0(\phi)$. For $t\ge1$, $\Phi_t$ is closed under finite linear combinations: use the smaller moment exponent, the $L^p$ triangle inequality, and linearity of kernel integration. The same arguments together with the target-moment condition show closure of $\Psi_t$. If $\phi\in\Psi_t$, then $\psi=\upsilon_t(\phi-\pi_t\phi)$ has a finite proposal $2+\delta$ moment because $\phi,1\in\Phi_t$, and $k_t\psi=E_t(\phi-\pi_t\phi)\in\Psi_{t-1}$ by the recursive $\Psi_t$ condition. [A1, F1, F3, F4, F5, F6, F7, given, algebra]

2.1 For the mutation part, condition on the selected parent paths $\check X_{t-1}^{1:N}$ and set $m_i=k_t\psi(\check X_{t-1}^i)$. Under the product kernel in [F2], $D_{i,N}=\psi(X_t^i)-m_i$ are independent and centered. Their row variance is $s_N^2=\frac1N\sum_{i=1}^N\operatorname{Var}_{k_t(\check X_{t-1}^i)}(\psi),$ which converges in probability to $\sigma^2=\pi_{t-1}(\operatorname{Var}_{k_t}(\psi))$ by [F3], because $0\le\operatorname{Var}_{k_t}(\psi)\le k_t(\psi^2)$ and $\pi_{t-1}(k_t|\psi|^{2+\delta})=\widetilde\pi_t(|\psi|^{2+\delta})<\infty$. When $\sigma^2>0$, normalize the array by $s_N\sqrt N$, where $s_N^2$ is the displayed variance. For every $a>0$, the resulting conditional Lindeberg sum is at most $C_\delta a^{-\delta}N^{-\delta/2}s_N^{-(2+\delta)}\,\check\eta_{t-1}^N(k_t|\psi|^{2+\delta}),$ where $C_\delta$ is a finite constant from $|a-b|^{2+\delta}\le2^{1+\delta}(|a|^{2+\delta}+|b|^{2+\delta})$ and Jensen's inequality. Since $s_N\to\sigma>0$ and [F3] makes the average factor converge in probability to a finite value, this conditional Lindeberg sum tends to zero. [A1, F1, F2, F3, given]

2.2 Along any subsequence, choose a further subsequence on which $s_N\to\sigma$ almost surely. If $\sigma>0$, a further subsequence makes the normalized Lindeberg sums converge almost surely; [F4] gives a standard-normal limit for the normalized row, and Slutsky [F5] with $s_N\to\sigma$ gives the conditional characteristic-function limit $e^{-u^2\sigma^2/2}$. If $\sigma=0$, conditional [F6] gives $P\!\left(\left|N^{-1/2}\sum_iD_{i,N}\right|>a\,\middle|\,\check X_{t-1}^{1:N}\right)\le\min(1,s_N^2/a^2)\longrightarrow0$ for every $a>0$, yielding the same characteristic-function limit with variance zero. The subsequence criterion therefore gives convergence in probability of the conditional characteristic functions along the full sequence. They are bounded by one, so their $L^1$ differences from that limit also tend to zero. [F4, F5, F6, step 2.1, algebra]

2.3 The conditional mean part is $P_N=\sqrt N\left(\check\eta_{t-1}^N(k_t\psi)-\pi_{t-1}(k_t\psi)\right),$ and has the previous selected-population CLT by the hypothesis of the Statement. The total proposal error is $P_N+N^{-1/2}\sum_iD_{i,N}$. Multiplying the conditional characteristic function from step 2.2 by the bounded factor $e^{iuP_N}$ and integrating shows that its limit is the product of the previous Gaussian characteristic function and $e^{-u^2\sigma^2/2}$. Hence the two covariance contributions add, giving $\widetilde V_t(\psi)$. [F1, F2, step 2.2, given]

3.1 For $\phi\in\Psi_t$, apply the mutation result to $\psi=\upsilon_t(\phi-\pi_t\phi)$ using step 1.1 and the preceding selected CLT for $k_t\psi\in\Psi_{t-1}$. By [F3], $\eta_t^N(\upsilon_t)\to\widetilde\pi_t(\upsilon_t)=1$ in probability, and the event of a zero denominator has probability tending to zero. On its complement, $\sqrt N\left(\omega_t^N(\phi)-\pi_t(\phi)\right)=\frac{\sqrt N\,\eta_t^N(\upsilon_t(\phi-\pi_t\phi))}{\eta_t^N(\upsilon_t)}.$ Slutsky [F5] gives the stated limit with covariance $\widetilde V_t(\upsilon_t(\phi-\pi_t\phi))=V_t(\phi)$. The fallback on a zero empirical weight sum changes the ratio only on an event whose probability tends to zero. [F1, F3, F5, step 1.1, step 2.3, algebra] ∎
