---
id: ex-euler-discretization-bias-and-path-variance
kind: example
title: "Euler discretization bias and path-to-path variance"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-statistical-and-computational-error-ledger
  - thm-pathwise-error-ledger-decomposition
  - thm-independent-replicate-variance-estimator
  - cor-mean-value-theorem
  - def-real-exponential-function-and-e
  - thm-derivative-of-exponential
  - thm-chain-rule
  - def-identically-distributed-and-iid-random-variables
  - cor-differentiable-implies-continuous
  - lem-measurable-functions-preserve-independence
  - thm-arithmetic-and-lattice-operations-preserve-measurability
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Let $X_0$ take values in $\{1,2\}$ with probability $1/2$ each, and consider the random-initial-value ODE $x'(t)=x(t)$ on $0\le t\le1$. Its exact endpoint is $X_1=eX_0$, and the target is $\theta=\mathbb E[X_1^2]$. Define the one-step explicit Euler rule at $h=1$ by $X_1^h=X_0+hX_0=2X_0$. For an integer $M\ge2$, independently simulate initial values $X_0^{(1)},\ldots,X_0^{(M)}$ with this law, set $Y_r:=(2X_0^{(r)})^2$, and return $\overline Y_M:=M^{-1}\sum_{r=1}^M Y_r$.

## Facts & Assumptions

**Given:** The ODE, initial-value law, one-step Euler rule, and independent path simulations specified in the Example. Compute the discretized-target bias and the path-simulation variance.

[F1] A scalar error ledger uses successive same-scale references and defines each stage error as the adjacent difference. ([[def-statistical-and-computational-error-ledger]])

[F2] The total error along a finite scalar reference chain is the sum of its signed stage errors. ([[thm-pathwise-error-ledger-decomposition]])

[F3] For $M\ge2$ IID finite-variance replicate outputs with variance $\tau^2$, the variance of their average is $\tau^2/M$. ([[thm-independent-replicate-variance-estimator]])

[F4] For real $a<b$, a real function continuous on $[a,b]$ and differentiable on $(a,b)$ satisfies $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$. ([[cor-mean-value-theorem]])

[F5] $e=\exp(1)$ for $\exp(x)=\sum_{k=0}^{\infty}x^k/k!$. ([[def-real-exponential-function-and-e]])

[F6] $\exp$ is differentiable with $(\exp)'=\exp$. ([[thm-derivative-of-exponential]])

[F7] The derivative of a differentiable composition is given by the chain rule. ([[thm-chain-rule]])

[F8] IID means common distribution and mutual independence. ([[def-identically-distributed-and-iid-random-variables]])

[F9] A function differentiable at a limit point is continuous there. ([[cor-differentiable-implies-continuous]])

[F10] Applying measurable maps coordinatewise to independent random variables preserves independence. ([[lem-measurable-functions-preserve-independence]])

[F11] Products of measurable real-valued functions and their real scalar multiples are measurable. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[A1] $X_0$ equals $1$ and $2$ with probabilities $1/2$ each; an ODE solution $x$ is defined and differentiable on an open interval containing $[0,1]$, satisfies $x'=x$, and has initial value $x(0)=X_0$.

[A2] The discretization is the explicitly defined one-step rule $X_1^h=X_0+hX_0$ at $h=1$; the $M$ simulated initial values are IID copies of $X_0$.

## Verification

1.1 By [F5] and [F6], $x_*(t)=X_0\exp(t)$ solves the stated initial-value problem. For any solution $x$, put $f(t)=\exp(-t)$ and $u(t)=f(t)x(t)$. By [F6] and [F7], $f'(t)=-f(t)$. For $h\ne0$ with $t+h\in[0,1]$, $\frac{u(t+h)-u(t)}h=f(t+h)\frac{x(t+h)-x(t)}h+x(t)\frac{f(t+h)-f(t)}h$. As $h\to0$, continuity of $f$ and differentiability of $x,f$ make the right side tend to $f(t)x'(t)+x(t)f'(t)=0$ because $x'=x$. Thus $u'=0$ on $(0,1)$. The solution $x$ is continuous at $0,1$ by [F9], so $u$ is continuous on $[0,1]$; [F4] gives $u(1)=u(0)=X_0$. The same derivative calculation applied to the continuous product $v(t)=f(t)\exp(t)$ gives $v'=0$ on $(0,1)$; [F4] then yields $\exp(-1)e=v(1)=v(0)=1$, since $\exp(0)=1$ by [F5]. Multiplying $u(1)=X_0$ by $e$ therefore gives $x(1)=eX_0$. By [F5] and $\mathbb E[X_0^2]=(1+4)/2=5/2$, the exact target is $\theta=e^2\mathbb E[X_0^2]=(5/2)e^2$. [given, A1, F4, F5, F6, F7, F9, algebra]

1.2 The Euler update gives $X_1^h=2X_0$, so the exact-arithmetic discretized target is $\theta_h=\mathbb E[4X_0^2]=10$. Since $e=\sum_{k=0}^{\infty}1/k!>2$, its bias is $10-(5/2)e^2<0$. [given, A1, A2, F5, algebra]

1.3 By [F8] and [A2], a single simulated squared Euler endpoint is $4X_0^2$, equal to $4$ or $16$ with equal probability. Its mean is $10$ and its variance is $((4-10)^2+(16-10)^2)/2=36$. [given, A1, A2, F8, algebra]

2.1 By [F11], $z\mapsto4z^2$ is measurable; by [F8] and [A2] the initial values are IID, so [F10] makes the outputs independent. Their common two-point law is computed in step 1.3, hence they are IID. Then [F3] gives variance $36/M$ for their average, while the discretization bias in step 1.2 remains $10-(5/2)e^2$ for every $M$. [F3, F8, F10, F11, step 1.2, step 1.3, A2, algebra]

3.1 For a realized path average $\overline Y_M$, the ledger chain $\theta,\theta_h,\overline Y_M$ gives $\overline Y_M-\theta=(\theta_h-\theta)+(\overline Y_M-\theta_h)$ by [F1] and [F2], separating discretization bias from path-simulation error. [F1, F2, step 1.1, step 1.2, step 2.1, algebra] ∎
