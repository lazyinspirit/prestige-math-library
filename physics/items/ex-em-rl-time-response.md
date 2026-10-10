---
id: ex-em-rl-time-response
kind: example
title: "Exponential RL response under a constant terminal voltage"
domain: physics
status: draft
origin: session
dependency_level: 22
proof_strategy: direct
deps:
  - pthm-em-rl-lc-dynamics
  - def-em-si-conventions
  - def-interval
  - thm-derivative-of-exponential
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-exponential-limits-and-range
  - cor-exponential-reciprocal-and-positivity
dependency_roles:
  pthm-em-rl-lc-dynamics: physical-result
  def-em-si-conventions: formulation-prerequisite
  def-interval: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-exponential-limits-and-range: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: '§7.2.3 printed pp. 310-317 (the battery-plus-RL circuit: $I(t)=\frac{\mathcal E_0}{R}+k\mathrm e^{-Rt/L}$, the initial condition $I(0)=0$ giving $k=-\mathcal E_0/R$, and the time constant $\tau=L/R$); read in the stamped 596-page scan.'
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin; complete course book, 364 pp.)"
      url: http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf
      locator: '§7.5 printed pp. 225-231 (the RL circuit equation $V=L\,\mathrm dI/\mathrm dt+RI$ and its exponential approach to the steady current); read in the fetched complete 364-page course book.'
physical_scope: 'The exponential transient of the scalar RL circuit of the adopted lumped model under a constant source voltage and constant positive $L$ and $R$, with time constant $L/R$. It carries the model idealisations (fixed geometry, ideal elements, no radiation or distributed effects) and contains no measurement or empirical claim.'
---

## Example

In the RL branch of [[pthm-em-rl-lc-dynamics]] with the declared units of [[def-em-si-conventions]], let the source voltage be the constant $V_0\in\mathbb R$, let $R>0$ and $L>0$, let $t_0\in J$ and $I_0\in\mathbb R$, with $J$ an interval and derivatives read in the model's domain-relative convention, through the stated $C^1$ open-neighbourhood extension for a non-open $J$. For nondegenerate $J$ the unique $C^1$ solution of $L\dot I+RI=V_0$, $I(t_0)=I_0$, is
$$I(t)=\frac{V_0}{R}+\Bigl(I_0-\frac{V_0}{R}\Bigr)\exp\!\Bigl(-\frac{R(t-t_0)}{L}\Bigr),\qquad t\in J .$$
In particular $I(t)-V_0/R=(I_0-V_0/R)\exp(-R(t-t_0)/L)$ and hence $|I(t)-V_0/R|=|I_0-V_0/R|\exp(-R(t-t_0)/L)$ for every $t\in J$, with time constant $\tau=L/R$; $I\equiv V_0/R$ is the unique stationary solution (an extension with zero derivative, also in the singleton convention); if $J$ is unbounded above, then $I(t)\to V_0/R$ as $t\to+\infty$ along $J$; and the transient part is the free decay $\exp(-R(t-t_0)/L)$ of the initial deviation $I_0-V_0/R$. For $J=\{t_0\}$ the restriction is $I(t_0)=I_0$ and the jets are those of the same formula read through the stated extension, giving $\dot I(t_0)=(V_0-RI_0)/L$. The computation is conditional on the adopted lumped model, constant elements and fixed geometry; no measurement is involved.

## Verification

**Proof technique:** explicit differentiation of the candidate, with uniqueness inherited from the RL theorem.

**Given:** The RL branch data of the adopted lumped model with constants $V_0\in\mathbb R$, $R>0$, $L>0$, an interval $J$ with $t_0\in J$ and initial value $I_0\in\mathbb R$.

[F1] In the RL branch let $L>0$, $R\ge0$ and let $V:J\to\mathbb R$ be continuous. Then the initial value problem $L\dot I+RI=V$, $I(t_0)=I_0$, has exactly one $C^1$ solution on every nondegenerate interval $J$, namely $I(t)=\exp(-R(t-t_0)/L)\left[I_0+L^{-1}\int_{t_0}^t\exp(R(s-t_0)/L)V(s)\,ds\right]$; for $J=\{t_0\}$ the restriction is $I(t_0)=I_0$ and the canonical extension for the constant source $V(t_0)$ has jet $\dot I(t_0)=(V(t_0)-RI_0)/L$; the RL solution uses no choice principle. ([[pthm-em-rl-lc-dynamics]]).

[F2] The real exponential is $C^\infty$ and $\exp'=\exp$. ([[thm-derivative-of-exponential]]).

[F3] Sums, scalar multiples and products of differentiable functions are differentiable, with the sum, scalar and product rules; the derivative of a constant is $0$ and the derivative of the identity is $1$, since their difference quotients are respectively $0$ and $1$. ([[thm-algebra-of-derivatives]]).

[F4] If $f$ is totally differentiable at $a$ and $g$ is totally differentiable at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$. ([[thm-chain-rule-for-total-derivatives]]).

[F5] $\exp(x)\to+\infty$ as $x\to+\infty$ and $\exp(x)\to0$ as $x\to-\infty$. ([[thm-exponential-limits-and-range]]).

[F6] For every real $x$, $\exp(x)>0$ and $\exp(-x)=1/\exp(x)$. ([[cor-exponential-reciprocal-and-positivity]]).

[F7] The SI units are those of the framework: $V$ in volts, $I$ in amperes, $t$ in seconds, $R$ in ohms and $L$ in henries. ([[def-em-si-conventions]]).

[F8] A subset of $\mathbb R$ is an interval when it has one of the nine order-convex forms of the definition; an interval is unbounded above exactly when it contains a ray $[r,+\infty)$. ([[def-interval]]).

1.1 Define the candidate $\varphi(t):=\frac{V_0}{R}+\left(I_0-\frac{V_0}{R}\right)\exp\left(-\frac{R(t-t_0)}{L}\right)$ on $J$. The function $t\mapsto-\frac{R(t-t_0)}{L}$ is affine with derivative $-\frac RL$ by [F3], and $\exp'=\exp$ by [F2], so the chain rule [F4] gives $\varphi'(t)=\left(I_0-\frac{V_0}{R}\right)\left(-\frac RL\right)\exp\left(-\frac{R(t-t_0)}{L}\right)=-\frac RL\left(\varphi(t)-\frac{V_0}{R}\right)$. Therefore $L\varphi'(t)+R\varphi(t)=-R\left(\varphi(t)-\frac{V_0}{R}\right)+R\varphi(t)=V_0$ identically, and $\varphi(t_0)=\frac{V_0}{R}+\left(I_0-\frac{V_0}{R}\right)=I_0$. [F2, F3, F4, algebra]

1.2 Stationary solutions: if $I\equiv c$ is constant, then $L\dot I+RI=Rc$, so the equation $L\dot I+RI=V_0$ holds exactly when $c=V_0/R$; since $R>0$ there is exactly one such constant, namely $I\equiv V_0/R$. [F3, algebra]

1.3 Limit statement: if $J$ is unbounded above, then for $t\in J\cap[t_0,+\infty)$ the argument $-\frac{R(t-t_0)}{L}$ satisfies $-\frac{R(t-t_0)}{L}\to-\infty$ as $t\to+\infty$ because $R/L>0$, so [F5] gives $\exp\left(-\frac{R(t-t_0)}{L}\right)\to0$ and hence $I(t)\to V_0/R$ along that ray; the time constant is $\tau:=L/R$, so the decay factor is $\exp(-(t-t_0)/\tau)$. [F5, F8, algebra]

1.4 Deviation identity: subtracting $V_0/R$ from the displayed formula gives $I(t)-V_0/R=\left(I_0-\frac{V_0}{R}\right)\exp\left(-\frac{R(t-t_0)}{L}\right)$; since $\exp(x)>0$ for real $x$ by [F6], taking absolute values preserves the exponential factor, so $|I(t)-V_0/R|=\left|I_0-\frac{V_0}{R}\right|\exp\left(-\frac{R(t-t_0)}{L}\right)$ for every $t\in J$. [F6, algebra]

2.1 Identification of the solution: by step 1.1 the candidate $\varphi$ is a $C^1$ solution of the initial value problem (its derivative exists on all of $J$ through the stated extension convention) and by [F1] the initial value problem with the constant source $V\equiv V_0$ has exactly one $C^1$ solution on every nondegenerate $J$; hence the displayed $I$ equals $\varphi$ there and is the unique solution, and for $J=\{t_0\}$ the restriction and jets are those of [F1] with $V(t_0)=V_0$, namely $I(t_0)=I_0$ and $\dot I(t_0)=(V_0-RI_0)/L$. [F1, step 1.1, algebra, cases]

3.1 Steps 1.1-1.4 and 2.1 establish the formula, its uniqueness, the deviation identity with time constant $\tau=L/R$, the unique stationary solution, the limit behaviour on intervals unbounded above, and the singleton reading. The computation uses only the adopted lumped model and its constant positive elements, with units [F7]; no radiation, distributed-element, material or measurement claim is added, and the RL existence and uniqueness supplier is the choice-free clause (a) of [F1]. [F1, F7, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎

## Source notes

Griffiths §7.2.3, printed pp. 310-317, records the battery-plus-RL solution $I(t)=\mathcal E_0/R+k\mathrm e^{-Rt/L}$ with time constant $\tau=L/R$; Fitzpatrick §7.5, printed pp. 225-231, writes the RL equation and its exponential approach to the steady current. The example verifies the constant-source candidate by explicit differentiation and inherits uniqueness from the RL theorem; no other current history, transient measurement or numerical value is asserted.
