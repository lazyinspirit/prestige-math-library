---
id: lem-csm-frontier-finite-jump-feynman-kac
kind: lemma
title: Finite-state Feynman-Kac evolution for continuous jump rates
status: published
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
  - thm-ftc-second-part
  - thm-chain-rule
  - thm-derivative-of-exponential
dependency_roles:
  def-csm-frontier-finite-rate-process: mathematical-premise
  lem-csm-frontier-finite-jump-path-density: mathematical-premise
  def-countable-choice: mathematical-premise
  def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
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
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
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

[F5] [[thm-ftc-second-part]]: a function differentiable on a nondegenerate closed interval, with one-sided endpoint derivatives and an integrable derivative, has integral of its derivative equal to its endpoint increment.

[A1] [[def-countable-choice]]: Countable Choice, used through the Lebesgue path-density construction in [F2].

## Proof





**Given:** The process, rates, initial law, and functions $V_x$ from the Statement.

1.1 If $T=0$, the single endpoint value is $G_y(0)=\rho_y$. Suppose $T>0$ and put $K:=\max_x\sup_{s\in[0,T]}|V_x(s)|$ and $M:=\max_x\sup_{s\in[0,T]}\lambda_x(s)$. Write $w(t):=\exp(-\int_0^t V_{X_s}(s)\,ds)$. Almost surely the path has finitely many jumps by [F2], so the integrand is piecewise continuous; its integral is the limit of coordinate-measurable Riemann sums. Thus the weights are measurable (assign any bounded value on the measurable exceptional null set) and satisfy $0<w(t)\le e^{KT}$. For $0\le u<v\le T$ and $h:=v-u$, $|w(v)-w(u)|\le e^{KT}(e^{Kh}-1)$, while [F1] gives $\mathbb P(N_{(u,v]}\ge1)\le1-e^{-Mh}\le Mh$. Since an endpoint indicator can change only if a jump occurs, $$|G_y(v)-G_y(u)|\le e^{KT}\bigl(e^{Kh}-1+Mh\bigr).$$ This bound tends to zero with $h$, uniformly in $u,v$, proving continuity on the entire closed interval. [A1, F1, F2, F3, F4, algebra]

2.1 For $0\le t\le T-h$, condition on the history through $t$. Starting at $y$, the contribution of no jump to the additional weighted endpoint indicator is $\exp(-\int_t^{t+h}(\lambda_y(s)+V_y(s))\,ds)=1-(\lambda_y(t)+V_y(t))h+o(h)$. Starting at $x\ne y$, exactly one jump to $y$ contributes $$\int_t^{t+h}H_x(t,s)\kappa_{xy}(s)H_y(s,t+h)\exp\left(-\int_t^s V_x(r)\,dr-\int_s^{t+h}V_y(r)\,dr\right)\,ds=\kappa_{xy}(t)h+o(h).$$ The conditional bound from [F2], obtained by restarting the first-jump rule at $t$, bounds the probability of two or more jumps by $(Mh)^2$ when $Mh<1$; their weighted contribution is at most $e^{Kh}(Mh)^2$. The finitely many continuous rates and potentials have a common modulus of continuity $\omega(h)\to0$ on $[0,T]$. Hence the preceding remainders are $O(h\omega(h)+h^2)$ uniformly in the starting time and state. Multiply by $w(t)$ and average, using the Markov property and the bound in step 1.1, to obtain $$G_y(t+h)=G_y(t)+hR_y(t)+r_y(t,h),\qquad R_y(t):=\sum_{x\ne y}G_x(t)\kappa_{xy}(t)-G_y(t)\lambda_y(t)-V_y(t)G_y(t),$$ where $\sup_{0\le t\le T-h,\ y\in E}|r_y(t,h)|/h\to0$. [A1, F1, F2, F3, F4, step 1.1, algebra]

3.1 By step 1.1 and continuity of the rates and potentials, $R$ is continuous. Step 2.1 gives the right derivative $G_y'(t+)=R_y(t)$ for $t<T$. For $t>0$, apply its uniform expansion at $t-h$ to get $(G_y(t)-G_y(t-h))/h=R_y(t-h)+r_y(t-h,h)/h\to R_y(t)$. Thus the full derivative exists on $(0,T)$, extends continuously as the stated one-sided derivatives at the endpoints, and satisfies the claimed equation. The defining expectation at zero gives $G_y(0)=\rho_y$. [step 1.1, step 2.1, algebra]

4.1 If $G$ and $\widetilde G$ are two solutions with the same initial vector, their difference $D$ satisfies $D(0)=0$ and $D(t)=\int_0^t A(s)D(s)\,ds$ by [F5], applied componentwise, where $A(s)=Q(s)^{\mathsf T}-\operatorname{diag}(V(s))$ in column convention. Its coefficients and $D$ are continuous on $[0,T]$. Define $\|z\|_\infty:=\max_y|z_y|$, $B:=\sup_s\max_y\sum_x|A_{yx}(s)|<\infty$, and $C:=\sup_s\|D(s)\|_\infty<\infty$. Then $\|A(s)z\|_\infty\le B\|z\|_\infty$. Starting from $\|D(t)\|_\infty\le C$, induction in the integral equation gives $\|D(t)\|_\infty\le C(Bt)^n/n!$ for every $n\ge1$; the induction integrates $s^n$, whose primitive is $s^{n+1}/(n+1)$, by [F5]. For each fixed $t$ these bounds tend to zero, since successive terms have ratio $Bt/(n+1)$, eventually at most $1/2$. Hence $D=0$ and the solution is unique. [F5, step 3.1, algebra] ∎

