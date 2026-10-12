---
id: thm-cm-averaging-for-fast-periodic-oscillations
kind: theorem
title: "Averaging for fast periodic oscillations: order-$\\varepsilon$ agreement on the $O(1/\\varepsilon)$ time scale"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-averaging-data-and-averaged-field, lem-cm-averaging-data-basic-bounds, thm-cm-compact-continuation-for-locally-lipschitz-odes, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-maximal-ode-solution, thm-gronwall-integral-inequality, prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, thm-norm-inequality-for-the-vector-valued-integral, thm-monotonicity-of-the-integral, thm-chain-rule-for-total-derivatives, def-vector-valued-derivative-and-integral, def-operator-norm, def-metric-ball, def-interval]
dependency_roles:
  def-cm-averaging-data-and-averaged-field: mathematical-premise
  lem-cm-averaging-data-basic-bounds: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-operator-norm: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.3, Eqs. (5.52)-(5.57): the reduced (averaged) equations for a weakly perturbed oscillator, obtained to first order in the small parameter, printed pages 12-14 of Chapter 5 (PDF pages 99-101)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 5 Sections 5.2-5.3, Eqs. (5.22)-(5.28): splitting a perturbation into periodic and secular parts and averaging over one period, printed pages 96-98"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $P>0$, let $O\subseteq\mathbb R^n$ be open, and let $f:\mathbb R\times O\to\mathbb R^n$ be continuous, continuously partially differentiable in the second variable and $P$-periodic in time, with average $\bar f$ and deviation $g$ as in [[def-cm-averaging-data-and-averaged-field]]. Let $x_0\in O$, let $0<\rho<R$ with $\overline B(x_0,R)\subseteq O$ ([[def-metric-ball]]), and let $M,L\ge0$ satisfy

$$\|f(t,x)\|_2\le M,\qquad \|D_xf(t,x)\|\le L\qquad\bigl(t\in\mathbb R,\ x\in\overline B(x_0,R)\bigr),$$

$\|\cdot\|$ being the operator norm ([[def-operator-norm]]). Put

$$B:=2MP,\qquad B_1:=2LP,\qquad K:=e^{LA}\bigl[B+(LB+B_1M)A\bigr],$$

where $\varepsilon>0$ and $A>0$ are parameters. Suppose $y:[0,A/\varepsilon]\to\overline B(x_0,R-\rho)$ is a solution of the averaged system

$$y'(t)=\varepsilon\bar f(y(t)),\qquad y(0)=x_0 .$$

If $\varepsilon K<\rho$, then the solution $x$ of $x'(t)=\varepsilon f(t,x(t))$, $x(0)=x_0$ exists on all of $[0,A/\varepsilon]$ and satisfies, for every $t\in[0,A/\varepsilon]$,

$$\|x(t)-y(t)\|_2\le\varepsilon K=\varepsilon\,e^{LA}\bigl[B+(LB+B_1M)A\bigr].$$

## Remarks

- **Scaling.** The two curves agree to order $\varepsilon$ on the time interval of length $A/\varepsilon$, i.e. on a fixed number of oscillation periods: $A/\varepsilon$ is the number of periods divided by the fast frequency. The constant is explicit and grows like $A e^{LA}$; no claim is made for times longer than $A/\varepsilon$ or beyond the trapping radius $\rho$.
- **Scope.** $f$, $y$, $g$, $\varepsilon$, $A$ are mathematical objects; no physical identification or empirical claim is made. The theorem compares two explicitly specified ODE solutions; the averaged system is a different model, not an exact description.

## Facts & Assumptions

**Given:** The data $n,P,O,f,x_0,\rho,R,M,L$, the derived $\bar f,g,B,B_1$, and the parameters $\varepsilon>0$, $A>0$, with a solution $y:[0,A/\varepsilon]\to\overline B(x_0,R-\rho)$ of the averaged system.

[F1] Elementary bounds ([[lem-cm-averaging-data-basic-bounds]]): $\|\bar f(x)\|_2\le M$ and $\|\bar f(x)-\bar f(y)\|_2\le L\|x-y\|_2$ on $\overline B(x_0,R)$; $\|g(t,x)\|_2\le B=2MP$ for all $(t,x)$ and $\|D_xg(t,x)\|\le B_1=2LP$ for $t\in\mathbb R$, $x\in\overline B(x_0,R)$; $\partial_tg(t,x)=f(t,x)-\bar f(x)$; and $g$ is totally differentiable on $\mathbb R\times O$ with the displayed continuous partial derivatives. [given]

[F2] The curve $x$ is a solution of $x'=\varepsilon f(t,x)$ exactly when it satisfies the Volterra equation $x(t)=x_0+\int_0^t\varepsilon f(s,x(s))\,ds$ on its interval of definition; every initial value problem has a unique maximal solution, and a solution whose graph stays in a compact subset of $[0,\infty)\times O$ extends past every finite endpoint ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-maximal-ode-solution]], [[thm-cm-compact-continuation-for-locally-lipschitz-odes]]). [given]

[F3] Chain rule: for a totally differentiable curve $G$ on $\mathbb R\times O$ and a differentiable curve $t\mapsto x(t)$, the composite $t\mapsto G(t,x(t))$ is differentiable with derivative $\partial_tG+D_xG\cdot x'$ ([[thm-chain-rule-for-total-derivatives]]). [given]

[F4] Integral inequalities: $\|\int_a^b\phi\|_2\le|\int_a^b\|\phi\|_2|$ and monotonicity for real integrands ([[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-monotonicity-of-the-integral]], [[def-vector-valued-derivative-and-integral]]); Gronwall: if continuous $u\ge0$ satisfies $u(t)\le L_0+M_0t+K_0\int_0^tu$ on $[0,T]$ with constants $\ge0$, then $u(t)\le(L_0+M_0t)e^{K_0t}$ (this is the standard constant-coefficient form obtained from [[thm-gronwall-integral-inequality]] by comparing with $v(t)=(L_0+M_0t)+\int_0^t(K_0v+M_0)$). [given]

## Proof

**Proof technique:** direct; conjugate the fast curve by the periodic deviation, apply Gronwall to the difference with the averaged curve, and control the trapping radius by the final constant.

1.1 Set $T_*:=\min\bigl(A/\varepsilon,\ \inf\{t\in[0,A/\varepsilon]:\|x(t)-x_0\|_2=R\}\bigr)$, where $x$ is the maximal solution of $x'=\varepsilon f(t,x)$, $x(0)=x_0$; for $t\le T_*$ the phase point lies in $\overline B(x_0,R)$, so all bounds of [F1] apply, and the deviation $g$ is totally differentiable in a neighbourhood of every such point by [F1] and [F3]. The datum satisfies $\varepsilon f$ bounded by $\varepsilon M$, so [F2] gives local existence and a maximal solution on an interval starting at $0$. [F1, F2, F3, given]

2.1 Estimate on $[0,T_*]$. Put $d(t):=x(t)-\varepsilon g(t,x(t))$ and $w:=d-y$. By [F3] and $\partial_tg=f-\bar f$, $$d'=\varepsilon f-\varepsilon\bigl(\partial_tg+D_xg\cdot x'\bigr)=\varepsilon f-\varepsilon(f-\bar f)-\varepsilon^2D_xg\cdot f=\varepsilon\bar f(x)-\varepsilon^2D_xg(t,x)f(t,x),$$ so $w'=\varepsilon\bigl(\bar f(x)-\bar f(y)\bigr)-\varepsilon^2D_xg(t,x)f(t,x)$ on $[0,T_*]$. Using [F1], $\|\bar f(x)-\bar f(y)\|_2\le L\|x-y\|_2\le L\|w\|_2+\varepsilon LB$ because $\|x-y\|_2\le\|x-d\|_2+\|d-y\|_2=\varepsilon\|g(t,x(t))\|_2+\|w\|_2\le\varepsilon B+\|w\|_2$, and $\|\varepsilon^2D_xg\cdot f\|_2\le\varepsilon^2B_1M$. Therefore, by [F4] for $t\in[0,T_*]$, $$\|w(t)\|_2\le\int_0^t\bigl(\varepsilon L\|w(s)\|_2+\varepsilon^2(LB+B_1M)\bigr)ds,$$ and the Gronwall inequality of [F4] with $L_0=0$, $M_0=\varepsilon^2(LB+B_1M)$, $K_0=\varepsilon L$ gives $\|w(t)\|_2\le\varepsilon^2(LB+B_1M)\,t\,e^{\varepsilon Lt}\le\varepsilon(LB+B_1M)A\,e^{LA}$ for $t\le T_*\le A/\varepsilon$. Hence $$\|x(t)-y(t)\|_2\le\|w(t)\|_2+\varepsilon B\le\varepsilon\bigl[B+(LB+B_1M)Ae^{LA}\bigr]\le\varepsilon K.$$ [step 1.1, F1, F3, F4, algebra]

3.1 No exit and conclusion. If $T_*<A/\varepsilon$, then $\|x(T_*)-x_0\|_2=R$ by continuity of $x$, while step 2.1 and the hypothesis on $y$ give $$\|x(T_*)-x_0\|_2\le\|x(T_*)-y(T_*)\|_2+\|y(T_*)-x_0\|_2\le\varepsilon K+(R-\rho)<R,$$ a contradiction; hence $T_*=A/\varepsilon$, the graph of $x$ over $[0,A/\varepsilon]$ stays in the compact set $[0,A/\varepsilon]\times\overline B(x_0,R)\subseteq[0,\infty)\times O$, and [F2] extends the maximal solution to $[0,A/\varepsilon]$. The estimate of step 2.1 then holds on the whole interval, which is the assertion. [step 2.1, F1, F2, given] ∎
