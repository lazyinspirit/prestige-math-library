---
id: lem-smc-residual-resampling-clt-away-from-integer-weights
kind: lemma
title: "Conditional residual resampling central limit theorem away from integer weights"
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
axiom_use: "AC is inherited through the finite particle laws and the stated IID triangular-array CLT; the floor-continuity and residual covariance estimates are choice-free."
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
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, Theorem 2 and Appendix A.1, Lemma A.4"
      url: "https://arxiv.org/pdf/math/0508594"
    - title: "Hans R. Künsch, Recursive Monte Carlo Filters: Algorithms and Theoretical Analysis, §4, Theorem 4"
      url: "https://arxiv.org/pdf/math/0602211"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §3.6"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Fix a time $t$ in the finite-horizon SIR system of [[def-smc-clt-function-classes-and-variance-recursions]]. Let $X_t^{1:N}$ have proposal empirical law $\eta_t^N$, corrected law $\omega_t^N$, and residual-resampled law $\check\eta_t^N$. Assume the proposal empirical law converges in probability for every integrable test as in [[lem-smc-finite-horizon-empirical-law]], the weighted estimate has a finite-variance CLT
$$\sqrt N\{\omega_t^N(\phi)-\pi_t(\phi)\}\Rightarrow N(0,V),$$
and $\pi_t(\phi^2)<\infty$. Write $u=\upsilon_t$ and assume either $u=1$ $\widetilde\pi_t$-almost everywhere, or
$$\widetilde\pi_t(u\in\{1,2,\ldots\})=0.$$
In the second case $c=\widetilde\pi_t(r(u))>0$. Then, with
$$R_t(\phi)=\widetilde\pi_t(r(u)\phi^2)-\frac{\widetilde\pi_t(r(u)\phi)^2}{c},$$
where $R_t(\phi)=0$ in the constant-weight case,
$$\sqrt N\{\check\eta_t^N(\phi)-\omega_t^N(\phi)\}\Rightarrow N(0,R_t(\phi)),$$
asymptotically independently of the weighted-estimator fluctuation, and
$$\sqrt N\{\check\eta_t^N(\phi)-\pi_t(\phi)\}\Rightarrow N(0,V+R_t(\phi)).$$

## Facts & Assumptions

**Given:** The proposal empirical-law convergence, the weighted-estimator CLT, the target second-moment condition, and the residual offspring algorithm in the Statement.

[A1] [[def-axiom-of-choice]]: AC is inherited through the finite-horizon particle-law construction and the cited probability limit theorem.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $u=d\pi_t/d\widetilde\pi_t$, $\widetilde\pi_t(u)=1$, $r(v)=v-\lfloor v\rfloor$, and the formal residual candidate is assigned as $R_t$ only in the no-positive-integer-atom branch or the constant-weight branch.

[F2] [[alg-multinomial-and-residual-offspring-resampling]]: For normalized weights $\rho_i$, residual resampling gives each particle $\lfloor N\rho_i\rfloor$ deterministic copies and fills the remaining count with IID draws proportional to $r(N\rho_i)$.

[F3] [[lem-smc-finite-horizon-empirical-law]]: The proposal and corrected empirical laws converge in probability for integrable tests.

[F4] [[thm-lindeberg-feller-central-limit-theorem-sufficiency]]: A centered independent triangular array with positive total variance and the Lindeberg condition, divided by its row standard deviation, converges to $N(0,1)$.

[F5] [[cor-chebyshev-inequality-for-random-variables]]: For a square-integrable variable on any probability space, the probability of an absolute centered deviation at least $a>0$ is at most its variance divided by $a^2$.

[F6] [[thm-slutsky-for-real-random-variables]]: Multiplying a distributionally convergent real variable by one converging in probability to a constant gives the scaled limit.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $\bar u_N=\eta_t^N(u)$ and $b_i^N=r(u(X_t^i)/\bar u_N)$ on the event $\bar u_N>0$, whose probability tends to one by [F3]. If $u=1$ almost everywhere, exclude all earlier zero-weight fallback events; their union has probability tending to zero by [F3] and the fixed horizon. On the remaining event every proposal particle avoids proposal-null sets almost surely: initially particles have the proposal law, and inductively positive-weight selection avoids target-null sets, after which mutation avoids $\widetilde\pi_s$-null sets since $\widetilde\pi_s=\pi_{s-1}k_s$. Thus all sampled $u$ values equal one almost surely there, so residual selection is deterministic. The resampling fluctuation is zero outside an event of probability tending to zero, proving the constant-weight branch. In the other case, for the three tests $a=1,\phi,\phi^2$, where $\pi_t(\phi^2)<\infty$, one has $\frac1N\sum_i b_i^Na(X_t^i)\xrightarrow{P}\widetilde\pi_t(r(u)a).$ To verify this triangular empirical limit, fix $M$ and first restrict to $u\le M$ and $|\phi|\le M$. The compact $u$ interval meets only finitely many positive-integer discontinuities of $r$. Delete open $\gamma$-neighborhoods of those integers. On the remaining compact set, $r(u/\bar u_N)\to r(u)$ uniformly as $\bar u_N\to1$, and $|a|\le \max(1,M,M^2)$, so [F3] gives convergence of the restricted averages. Each deleted neighborhood has proposal integral of $|a|$ tending to zero as $\gamma\downarrow0$: it lies where $u\ge1/2$, and $\widetilde\pi_t(u|a|)=\pi_t(|a|)<\infty$; the no-atom condition gives the limit zero. [F3] controls its empirical average for each fixed $\gamma$. For the tails, when $\bar u_N\in[1/2,2]$, $b_i^N\le2u(X_t^i)$; hence the $|\phi|>M$ contribution is bounded by $2\eta_t^N(u|a|\mathbf1_{\{|\phi|>M\}})$, whose limit tends to zero by target integrability. On $u>M$, use $b_i^N\le1$ and $\widetilde\pi_t(|a|\mathbf1_{\{u>M\}})\le M^{-1}\pi_t(|a|)$, with [F3] again controlling the empirical average. The corresponding target tails obey the same bounds because $r(u)\le u$ and $r(u)\le1$. Taking first $N\to\infty$, then $\gamma\downarrow0$ and $M\to\infty$, proves the claim. [F1, F3, given, algebra]

2.1 Taking $a=1$ in step 1.1 gives $N^{-1}\sum_i b_i^N\to c$. Here $c>0$: if $c=0$, then $u$ is integer-valued almost surely; the no-positive-integer-atom assumption would force $u=0$ almost surely, contradicting $\widetilde\pi_t(u)=1$. Thus the number $M_N=\sum_i b_i^N$ of residual draws diverges and $M_N/N\to c$. Their conditional sampling probabilities are $b_i^N/M_N$. [F1, F2, step 1.1, algebra]

3.1 Let $m_N=M_N^{-1}\sum_i b_i^N\phi(X_t^i)$. Given the particles, the residual offspring contribution to the centered, $\sqrt N$-scaled empirical mean is $N^{-1/2}\sum_{\ell=1}^{M_N}(\phi(Y_\ell^N)-m_N)$, with IID conditional draws $Y_\ell^N$ from probabilities $b_i^N/M_N$. By step 1.1 its conditional variance converges in probability to $c\left\{\frac{\widetilde\pi_t(r(u)\phi^2)}c-\left(\frac{\widetilde\pi_t(r(u)\phi)}c\right)^2\right\}=R_t(\phi).$ The residual draw mean $m_N$ is bounded in probability by the $a=\phi$ limit in step 1.1 and $M_N/N\to c>0$. Fix a threshold $a_0>0$ and fixed $K$, then $R\ge K$. On $\{|m_N|\le K,\ \bar u_N\in[1/2,2]\}$, for sufficiently large $N$ with $a_0\sqrt N>R+K$, the conditional Lindeberg sum for $N^{-1/2}\sum_{\ell=1}^{M_N}(\phi(Y_\ell^N)-m_N)$ is at most $4N^{-1}\sum_i b_i^N\phi(X_t^i)^2\mathbf1_{\{|\phi(X_t^i)|>R\}}$. Since $b_i^N\le2u(X_t^i)$ on this event, it is at most $8\eta_t^N(u\phi^2\mathbf1_{\{|\phi|>R\}})$. For fixed $R$, [F3] makes this converge to $8\widetilde\pi_t(u\phi^2\mathbf1_{\{|\phi|>R\}})=8\pi_t(\phi^2\mathbf1_{\{|\phi|>R\}})$, which tends to zero as $R\to\infty$. Choosing $K$, then $R$, then $N$ controls the exceptional mean event and the integrable fixed tail; $\bar u_N\to1$ handles the normalization event. Thus conditional Lindeberg holds under target $L^2$, with no target higher moment. [F1, F2, F3, F4, step 1.1, step 2.1, given, algebra]

4.1 Along any subsequence, choose a further subsequence on which the conditional residual variance converges almost surely. If $R_t(\phi)>0$, the conditional standard deviation is eventually greater than $\sqrt{R_t(\phi)}/2$. Apply the bound in step 3.1 at threshold $a\sqrt{R_t(\phi)}/2$ and divide by the conditional variance; this gives the Lindeberg condition after normalizing the residual sum by its conditional standard deviation. Conditional [F4] gives a standard-normal limit, and Slutsky [F6] with the conditional standard deviation converging to $\sqrt{R_t(\phi)}$ gives the characteristic-function limit $e^{-u_0^2R_t(\phi)/2}$. If $R_t(\phi)=0$, conditional [F5] bounds the deviation probability by the conditional variance divided by the squared threshold, giving the same degenerate limit. AC is inherited only through the particle law and conditional CLT supplier [F4]; the finite residual calculation adds no choice. The subsequence criterion gives convergence in probability along the full sequence. These conditional characteristic functions are bounded by one. For arbitrary real $v,u_0$, multiply this conditional characteristic function at $u_0$ by $e^{iv\sqrt N(\omega_t^N(\phi)-\pi_t(\phi))}$ and integrate. The limit is $e^{-v^2V/2}e^{-u_0^2R_t(\phi)/2}$, proving joint asymptotic independence and adding $R_t(\phi)$ to $V$. The deterministic-floor part is centered at its conditional expectation, so the conditional mean of the selected empirical law is exactly $\omega_t^N(\phi)$. [A1, F2, F4, F5, F6, given, step 3.1, algebra] ∎
