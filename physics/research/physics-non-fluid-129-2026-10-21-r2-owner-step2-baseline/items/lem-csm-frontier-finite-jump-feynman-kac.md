---
id: lem-csm-frontier-finite-jump-feynman-kac
kind: lemma
title: Finite-state Feynman-Kac evolution for continuous jump rates
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-frontier-finite-rate-process
  - lem-csm-frontier-finite-jump-path-density
  - def-countable-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-oriented-integral
  - thm-ftc-first-part
  - thm-chain-rule
  - thm-derivative-of-exponential
dependency_roles:
  def-csm-frontier-finite-rate-process: mathematical-premise
  lem-csm-frontier-finite-jump-path-density: mathematical-premise
  def-countable-choice: mathematical-premise
  def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice enters through the Lebesgue path densities used to bound multiple jumps on short time intervals.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Christopher Jarzynski, Equilibrium free-energy differences from nonequilibrium measurements: A master-equation approach"
      url: https://arxiv.org/pdf/cond-mat/9707325
      locator: Section II, PDF pp. 6–7, weighted master-equation evolution for the exponential work average.
    - title: Udo Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines
      url: https://arxiv.org/pdf/1205.4176
      locator: Sections 3.2.1 and 4.3, PDF pp. 19–20 and 26, the Jarzynski relation and weighted evolution approach.
---

## Statement

Let $X_t$ be a finite-state continuous-time Markov jump process on $[0,T]$ with initial law $\rho$ and bounded continuous rates $\kappa_{xy}(t)$. Let $V_x:[0,T]\to\mathbb R$ be continuous for every state. For $y\in E$, define the weighted endpoint mass

$$G_y(t):=\mathbb E\left[\exp\left(-\int_0^t V_{X_s}(s)\,ds\right)\mathbf 1_{\{X_t=y\}}\right].$$

Then $G(0)=\rho$. If $T>0$, $G$ is continuously differentiable on $(0,T)$ with the corresponding one-sided derivatives at the endpoints, and it is the unique solution of

$$G_y'(t)=\sum_{x\ne y}G_x(t)\kappa_{xy}(t)-G_y(t)\lambda_y(t)-V_y(t)G_y(t).$$

If $T=0$, the unique function on the singleton time interval is $G(0)=\rho$, and no differential equation is asserted.

## Statement references

[[def-csm-frontier-finite-rate-process]]

[[lem-csm-frontier-finite-jump-path-density]]

## Facts & Assumptions

**Given:** A finite-state Markov jump process with bounded continuous rates, initial law $\rho$, and continuous functions $V_x$.

[F1] [[def-csm-frontier-finite-rate-process]]: conditional on state $x$ at time $t$, no-jump survival over $[t,t+h]$ is $\exp(-\int_t^{t+h}\lambda_x(s)\,ds)$, and the first-jump density to state $y$ is survival times $\kappa_{xy}$.

[F2] [[lem-csm-frontier-finite-jump-path-density]]: on any interval of sufficiently small length, the probability of at least two jumps is bounded by a constant times the square of its length; the path has finitely many jumps almost surely.

[F3] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation of a nonnegative or integrable random variable is its integral with respect to the probability law.

[F4] [[def-oriented-integral]], [[thm-ftc-first-part]], [[thm-chain-rule]], and [[thm-derivative-of-exponential]]: continuous potentials and rates have the usual short-interval integral and exponential expansions.

[A1] [[def-countable-choice]]: Countable Choice, used through the Lebesgue path-density construction in [F2].

## Proof





**Given:** The process, rates, initial law, and functions $V_x$ from the Statement.

1.1 If $T=0$, the single endpoint value is $G_y(0)=\rho_y$. Suppose $T>0$. Since the state set is finite and the rates and potentials are bounded on $[0,T]$, the path weight in the definition of $G$ is bounded by $\exp(T\max_x\|V_x\|_\infty)$. Fix $t<T$ and take $h\downarrow0$. If $X_t=y$ and no jump occurs before $t+h$, the additional weight is $1-V_y(t)h+o(h)$ by [F4]. If $X_t=x\ne y$, the first-jump law [F1], including survival after that jump, gives probability $\kappa_{xy}(t)h+o(h)$ for exactly one jump $x\to y$ and its additional weight is $1+O(h)$. By [F2], paths with at least two jumps contribute only $O(h^2)$. Summing over the finite state set and conditioning on $X_t$ gives $$G_y(t+h)=G_y(t)+h\left(\sum_{x\ne y}G_x(t)\kappa_{xy}(t)-G_y(t)\lambda_y(t)-V_y(t)G_y(t)\right)+o(h).$$ [A1, F1, F2, F3, F4, algebra]

2.1 Rates and potentials are continuous, and the finite-state weighted masses are continuous by step 1.1. The expansion from step 1.1 gives the right derivative at each $t<T$; applying the same expansion on $[t-h,t]$ gives the left derivative at each $t>0$, with both limits equal to the displayed continuous right-hand side. Thus the full derivative exists on $(0,T)$, the endpoints have the stated one-sided derivatives, and the initial value is $G_y(0)=\rho_y$. [step 1.1, algebra]

3.1 If $G$ and $\widetilde G$ are two solutions with the same initial vector, their difference $D$ satisfies $D(0)=0$ and $D(t)=\int_0^t A(s)D(s)\,ds$ for the bounded coefficient matrix $A(s)=Q(s)^{\mathsf T}-\operatorname{diag}(V(s))$ in column convention. Let $B:=\sup_s\|A(s)\|_\infty$ and $C:=\sup_s\|D(s)\|_\infty$. Iterating the integral equation yields $\|D(t)\|_\infty\le C(Bt)^n/n!$ for every $n\ge1$, which tends to zero. Hence $D=0$ and the solution is unique. [F1, F2, F4, step 2.1, algebra] ∎

