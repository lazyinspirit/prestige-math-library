---
id: thm-csm-frontier-finite-jarzynski
kind: theorem
title: Jarzynski identity for a finite-state driven rate process
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-frontier-finite-rate-process
  - lem-csm-frontier-finite-jump-feynman-kac
  - def-countable-choice
  - def-natural-logarithm
  - thm-exponential-addition-formula
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-ftc-second-part
  - thm-linearity-of-the-integral
dependency_roles:
  def-csm-frontier-finite-rate-process: mathematical-premise
  lem-csm-frontier-finite-jump-feynman-kac: mathematical-premise
  def-countable-choice: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice is carried from the local path-density and Feynman-Kac argument.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Christopher Jarzynski, Equilibrium free-energy differences from nonequilibrium measurements: A master-equation approach"
      url: https://arxiv.org/pdf/cond-mat/9707325
      locator: Sections I–II, PDF pp. 3–7, detailed-balance assumptions and weighted master-equation derivation.
    - title: "Udo Seifert, Stochastic thermodynamics: From principles to the cost of precision (lecture notes, 2017)"
      url: https://arxiv.org/pdf/1707.03759
      locator: Sections 2.4 and 4.4, PDF pp. 3–4 and 7–8, driven systems, reversed protocols and Jarzynski identity.
    - title: Gavin E. Crooks, Entropy production fluctuation theorem and the nonequilibrium work relation for free energy differences
      url: https://journals.aps.org/pre/pdf/10.1103/PhysRevE.60.2721
      locator: Sections I–III, PDF pp. 1–3, work relation under microscopic reversibility and time-reversed driving.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $E$ be a finite nonempty state set and $T\ge0$. Fix $\beta>0$. If $T>0$, for each $x\in E$ let $E_x\in C^1([0,T],\mathbb R)$ be an energy function; if $T=0$, let each $E_x(0)$ be finite. Let $\kappa_{xy}:[0,T]\to[0,\infty)$ be bounded continuous transition rates for $x\ne y$, and let $X_t$ be the associated finite-state Markov jump process. Define

$$Z_t:=\sum_{x\in E}e^{-\beta E_x(t)},\qquad \pi_t(x):=\frac{e^{-\beta E_x(t)}}{Z_t}.$$

Assume instantaneous detailed balance:

$$\pi_t(x)\kappa_{xy}(t)=\pi_t(y)\kappa_{yx}(t)\qquad(x\ne y,\ 0\le t\le T),$$

and initial law $\mathbb P(X_0=x)=\pi_0(x)$. The path work and free-energy difference are

$$W_T:=\begin{cases}0,&T=0,\\ \int_0^T E'_{X_t}(t)\,dt,&T>0,\end{cases}\qquad \Delta F:=-\beta^{-1}\log(Z_T/Z_0).$$

Then

$$\mathbb E[e^{-\beta W_T}]=\frac{Z_T}{Z_0}=e^{-\beta\Delta F}.$$

If energy is measured in joules, then $\beta$ has units $\mathrm J^{-1}$, $W_T$ and $\Delta F$ have units joules, and the exponent is dimensionless. Under a common $C^1$ energy shift $E_x(t)\mapsto E_x(t)+a(t)$ for all $x$, both $W_T$ and $\Delta F$ change by $a(T)-a(0)$, so the identity is unchanged.

## Statement references

[[def-csm-frontier-finite-rate-process]]

[[lem-csm-frontier-finite-jump-feynman-kac]]

[[def-countable-choice]]

[[def-natural-logarithm]]

[[thm-exponential-addition-formula]]

## Facts & Assumptions

**Given:** A finite nonempty state set, $T\ge0$, finite energies at $T=0$ or $C^1$ energies for $T>0$, bounded continuous rates, $\beta>0$, instantaneous detailed balance, and initial distribution $\pi_0$.

[F1] [[def-csm-frontier-finite-rate-process]]: the process is Markov, has row generator $Q(t)$ with off-diagonal entries $\kappa_{xy}(t)$, and has finitely many jumps on the finite interval.

[F2] [[lem-csm-frontier-finite-jump-feynman-kac]]: the weighted endpoint masses for potential $V_x(t)$ solve the finite-dimensional ODE $G_y'=\sum_{x\ne y}G_x\kappa_{xy}-G_y\lambda_y-V_yG_y$, uniquely for their initial vector.

[F3] [[def-natural-logarithm]]: $\log$ is the inverse of the exponential on $(0,\infty)$.

[F4] [[thm-ftc-second-part]]: for $T>0$ and $a\in C^1([0,T],\mathbb R)$, including one-sided endpoint derivatives, the continuous derivative is integrable and $\int_0^T a'(t)\,dt=a(T)-a(0)$.

[F5] [[thm-exponential-addition-formula]]: $\exp(u+v)=\exp(u)\exp(v)$ for all real $u,v$.

[F6] [[thm-derivative-of-exponential]] and [[thm-chain-rule]]: differentiating $t\mapsto\exp(-\beta E_y(t))$ gives $-\beta E'_y(t)\exp(-\beta E_y(t))$.

[F7] [[thm-linearity-of-the-integral]]: the integral of a sum of Riemann-integrable functions is the sum of their integrals, including with oriented limits.


[A1] [[def-countable-choice]]: Countable Choice, carried by the path-density construction used in [F2].

## Proof




**Given:** The finite-state driven process and assumptions in the Statement.

1.1 If $T=0$, then $W_T=0$ by definition and $Z_T/Z_0=1$, so $\mathbb E[e^{-\beta W_T}]=1=Z_T/Z_0$; the definition of $\Delta F$ and the inverse relation [F3] give $e^{-\beta\Delta F}=Z_T/Z_0$ as well. Now suppose $T>0$. For each $t$, $\pi_t$ is a strictly positive probability vector because $E$ is finite and every exponential is positive. Instantaneous detailed balance gives, for each $y$,
$$\sum_{x\ne y}\pi_t(x)\kappa_{xy}(t) =\pi_t(y)\sum_{x\ne y}\kappa_{yx}(t) =\pi_t(y)\lambda_y(t).$$
Thus the column inflow from the distribution $\pi_t$ equals the generator outflow at $y$. [F3, given, algebra]

1.2 Apply [F2] with potential $V_y(t)=\beta E'_y(t)$ and initial law $\pi_0$. The weighted endpoint masses $G_y(t):=\mathbb E[e^{-\beta W_t}\mathbf 1_{\{X_t=y\}}]$ satisfy
$$G_y'(t)=\sum_{x\ne y}G_x(t)\kappa_{xy}(t)-G_y(t)\lambda_y(t)-\beta E'_y(t)G_y(t),\qquad G_y(0)=\pi_0(y),$$
where $W_t:=\int_0^tE'_{X_s}(s)\,ds$. [F1, F2, A1]

2.1 Define $C_y(t):=e^{-\beta E_y(t)}/Z_0=(Z_t/Z_0)\pi_t(y)$. Then $C_y(0)=\pi_0(y)$ and [F6] gives $C_y'(t)=-\beta E'_y(t)C_y(t)$. By step 1.1, the generator inflow and outflow terms evaluated at $C(t)$ cancel, so $C$ satisfies the same ODE and initial vector as $G$. Uniqueness in [F2] gives $G_y(t)=C_y(t)$ for every $y,t$. [F2, F3, F6, step 1.1, step 1.2, algebra]

3.1 Summing step 2.1 over the finite state set at $t=T$ yields
$$\mathbb E[e^{-\beta W_T}]=\sum_{y\in E}G_y(T) =\frac{1}{Z_0}\sum_{y\in E}e^{-\beta E_y(T)} =\frac{Z_T}{Z_0}.$$
By [F3] and the definition of $\Delta F$, $e^{-\beta\Delta F}=Z_T/Z_0$, proving the identity. [F3, step 2.1, algebra]

4.1 For a common shift $a(t)$, put $\delta:=a(T)-a(0)$. If $T=0$, then $\delta=0$ and both $W_T$ and $Z_T/Z_0$ are unchanged, so the claimed invariance holds. Suppose $T>0$. Then $Z_T^\sharp/Z_0^\sharp=e^{-\beta\delta}(Z_T/Z_0)$. Since $Z_T/Z_0>0$, [F3] and [F5] give
$$\exp\!\left(\log(Z_T/Z_0)-\beta\delta\right)=e^{-\beta\delta}(Z_T/Z_0),$$
so the inverse relation in [F3] implies $\Delta F^\sharp=\Delta F+\delta$. By [F7] the shifted path work is $W_T^\sharp=W_T+\int_0^T a'(t)\,dt=W_T+\delta$, with the last equality from [F4]. Therefore $W_T^\sharp-\Delta F^\sharp=W_T-\Delta F$. [F3, F4, F5, F7, given, step 3.1, algebra] ∎

## Remarks

The theorem is a conditional mathematical identity under the stated finite-state rates and instantaneous detailed balance. It does not derive detailed balance or local detailed balance for an arbitrary nonequilibrium reservoir, and it does not establish that a physical apparatus realizes these rates. The exact exponential average can be dominated by rare paths, so the identity alone gives no low-variance or finite-sample guarantee.
