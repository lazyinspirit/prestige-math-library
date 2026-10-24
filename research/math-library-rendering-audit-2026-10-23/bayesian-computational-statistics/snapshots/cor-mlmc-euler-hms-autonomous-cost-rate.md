---
id: cor-mlmc-euler-hms-autonomous-cost-rate
kind: corollary
title: "Autonomous all-moment Euler MLMC logarithmic cost"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-mlmc-hierarchy-and-coupled-corrections
  - thm-mlmc-complexity-under-rate-assumptions
  - alg-euler-maruyama-autonomous
  - thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses
  - def-axiom-of-choice
  - cor-cauchy-schwarz-for-random-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Michael B. Giles, Multilevel Monte Carlo Path Simulation, §§2–3"
      url: "https://people.maths.ox.ac.uk/gilesm/files/opre.pdf"
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §4, Assumptions 3.1/4.1/4.2 and Theorem 4.4"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
---

## Statement

Assume the Axiom of Choice. Use the autonomous SDE and Euler scheme contract of [[thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses]]: finite-dimensional state and Brownian noise, $C^1$ drift and diffusion, a one-sided Lipschitz drift, globally Lipschitz diffusion, polynomial local-Lipschitz drift, and the stipulated uniform moments of every order for the exact solution and Euler step and interpolation processes. In particular, retain that theorem's all-moment premise; an $L^2$ initial condition alone is not a substitute.

Fix $0<T\le1$, an integer $M\ge2$, and for every $\ell\ge0$ set $h_\ell=T M^{-\ell}$ and $P_\ell=\varphi(Y_T^{h_\ell})$, for a globally Lipschitz real payoff $\varphi$ with constant $L_\varphi$. These levels of the same SDE give the infinite compatible family required by [[thm-mlmc-complexity-under-rate-assumptions]], with target $\mathbb E\varphi(X_T)$. At each level pair, use the same initial value and Brownian path for the fine and coarse Euler paths, summing the $M$ fine Brownian increments to form each coarse increment. Use independent sample blocks across levels as in [[def-mlmc-hierarchy-and-coupled-corrections]]. For $\ell\ge1$, the coupled correction variance is $O(h_\ell)$; the finest-level payoff bias is $O(h_L^{1/2})$; and one coupled path-pair sample costs $O(h_\ell^{-1})$. At level $0$, $P_0\in L^2$ by the all-moment premise and the Lipschitz payoff, and one Euler path has finite work. Since $h_0=T$ is fixed, enlarge the rate constants to include $\operatorname{Var}(P_0)=O(h_0)$ and the level-zero work $O(h_0^{-1})$. Hence $(\alpha,\beta)=(1/2,1)$ and the MLMC estimator has MSE at most $\epsilon^2$ with work $O(\epsilon^{-2}(\log\epsilon^{-1})^2)$.

## Facts & Assumptions

**Given:** The exact autonomous all-moment SDE/Euler contract above; $0<T\le1$; fixed $M\ge2$; a globally Lipschitz payoff; the sequence of levels from the same SDE; nested fine/coarse increments from a common Brownian path; and independent level sample blocks. The level-zero correction is $P_0$.

[F1] [[thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses]]: under its exact $C^1$, one-sided-Lipschitz, globally-Lipschitz-diffusion, polynomial-drift, and uniform all-moment hypotheses, $\mathbb E\sup_{t\le T}|X_t-Y_t^h|^2\le Ch$ for $0<h\le1$ on an integral grid.

[F2] [[alg-euler-maruyama-autonomous]]: the Euler step and continuous interpolation use the left-endpoint coefficient values and the Brownian increments on each uniform interval.

[F3] [[cor-cauchy-schwarz-for-random-variables]]: for square-integrable real $Z$, $\mathbb E|Z|\le(\mathbb E|Z|^2)^{1/2}$.

[F4] [[thm-mlmc-complexity-under-rate-assumptions]]: with bias order $\alpha\ge1/2$, correction variance order $\beta>0$, and work order $h_\ell^{-1}$, the case $\beta=1$ has cost $O(\epsilon^{-2}(\log\epsilon^{-1})^2)$.

[A1] This corollary assumes AC, as does the exact Euler strong-rate supplier. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For $\ell\ge1$, $h_{\ell-1}=Mh_\ell\le1$. Couple the fine and coarse paths using the same exact solution $X$ and the common Brownian path specified in the Statement. Then $|Y_T^{h_\ell}-Y_T^{h_{\ell-1}}|^2 \le2|Y_T^{h_\ell}-X_T|^2+2|Y_T^{h_{\ell-1}}-X_T|^2.$ Taking expectations and applying [F1] at both step sizes gives $\mathbb E|Y_T^{h_\ell}-Y_T^{h_{\ell-1}}|^2\le2C(1+M)h_\ell$. [A1, F1, F2, given, algebra]

1.2 Again by the Lipschitz bound and [F3], $|\mathbb E\varphi(X_T)-\mathbb E\varphi(Y_T^{h_L})| \le L_\varphi\,\mathbb E|X_T-Y_T^{h_L}| \le L_\varphi\bigl(\mathbb E|X_T-Y_T^{h_L}|^2\bigr)^{1/2} \le C^{1/2}L_\varphi h_L^{1/2}.$ Thus $\alpha=1/2$. [A1, F1, F3, given, algebra]

2.1 Put $D_\ell=\varphi(Y_T^{h_\ell})-\varphi(Y_T^{h_{\ell-1}})$. The Lipschitz bound gives $|D_\ell|\le L_\varphi|Y_T^{h_\ell}-Y_T^{h_{\ell-1}}|$, and $\operatorname{Var}(D_\ell)\le\mathbb E D_\ell^2$. Step 1.1 therefore implies $\operatorname{Var}(D_\ell)\le2C(1+M)L_\varphi^2h_\ell$, so $\beta=1$. [given, step 1.1, algebra]

3.1 A level-$\ell$ fine path has $T/h_\ell$ steps and its coarse partner has $T/(Mh_\ell)$ steps. For fixed $T,M$, dimension, and unit-cost coefficient and payoff evaluations, their total work is $O(h_\ell^{-1})$ for $\ell\ge1$. At level $0$, $Y_T^{h_0}$ has finite second moment by the all-moment premise, so the Lipschitz payoff gives $P_0\in L^2$; the single Euler path has finite work. Since $h_0=T$ is fixed, enlarge the constants so that the level-zero variance and work also satisfy the rate bounds required by [F4]. Applying [F4] with $\alpha=1/2$, $\beta=1$, and $\gamma=1$ gives the stated MSE and work bound. AC is inherited only from [A1]; no choice principle is used in the rate estimates. [A1, F4, step 1.2, step 2.1, given] ∎
