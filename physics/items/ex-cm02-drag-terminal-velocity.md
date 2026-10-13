---
id: ex-cm02-drag-terminal-velocity
kind: example
title: "Motion under linear drag and a constant applied force: explicit global solution and approach to the terminal velocity"
status: published
origin: session
domain: physics
dependency_level: 11
deps: [post-cm02-drag, post-cm02-force-superposition, def-cm02-newtonian-flow, pthm-cm02-ivp, def-cm01-units, def-cm-oscillator-model-and-phase-system, thm-cm-forced-oscillator-variation-of-constants, prop-cm-oscillator-degenerate-and-repulsive-cases, def-vector-valued-derivative-and-integral, def-derivative, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-limits-at-infinity, lem-exponential-dominates-one-plus-x, lem-of-inverse-positive, cor-exponential-reciprocal-and-positivity]
dependency_roles:
  post-cm02-drag: physical-assumption
  post-cm02-force-superposition: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  def-cm01-units: formulation-prerequisite
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-cm-forced-oscillator-variation-of-constants: mathematical-premise
  prop-cm-oscillator-degenerate-and-repulsive-cases: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-limits-at-infinity: mathematical-premise
  lem-exponential-dominates-one-plus-x: mathematical-premise
  lem-of-inverse-positive: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked computation inside the linear drag model of [[post-cm02-drag]] with a constant applied force: for a stated initial position and velocity the explicit motion is verified, it is the unique maximal motion and exists for all real times, and its velocity converges to the terminal velocity $(m/c)\\mathbf g$ with an explicit exponential bound. The item is a conditional computation inside the model; the coefficient and field parameters are declared model data, no measured value is asserted, and the phenomenological and regime qualifications of the drag postulate are preserved."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, chapter pages 1-3 (PDF pages 87-89), Eqs. (5.1)-(5.9) and footnote 4: the damped harmonic oscillator's linear drag model and solution; the fluctuation qualification is specific to that oscillator"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.4, printed pages 20-21 (PDF pages 23-24): the low-velocity fluid friction force -b v, its phenomenological character, and the worked Stokes-sphere equation with its particular and homogeneous solution"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): the equation of motion with velocity-dependent force terms"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Work in the linear drag model of [[post-cm02-drag]] with one label of mass
$m>0$, coefficient $c>0$, time window $\mathbb R$, configuration domain
$Q=\mathbb R^{3}$, and a declared constant vector
$\mathbf g\in\mathbb R^{3}$ of dimension $\ell\tau^{-2}$, so that the force
map is $F(t,x,v)=m\mathbf g-c\,v$ and the equation of motion is

$$m\,\ddot x(t)=m\,\mathbf g-c\,\dot x(t).$$

Define the **terminal velocity**

$$v_{\infty}:=\frac{m}{c}\,\mathbf g,\qquad [v_{\infty}]=\ell\tau^{-1},$$

and fix the initial datum $x(0)=x_{0}$, $\dot x(0)=v_{0}$. Verify:

1. the explicit curve

   $$x(t)=x_{0}+v_{\infty}t+\frac{m}{c}\bigl(v_{0}-v_{\infty}\bigr) \bigl(1-e^{-ct/m}\bigr)$$

   is a motion of the model on $\mathbb R$ with the stated datum, and by
   uniqueness it is the maximal motion;
2. its velocity satisfies
   $\dot x(t)=v_{\infty}+\bigl(v_{0}-v_{\infty}\bigr)e^{-ct/m}$ for all $t$,
   so that
   $\lvert\dot x(t)-v_{\infty}\rvert_{2}\le\lvert v_{0}-v_{\infty}\rvert_{2}\,e^{-ct/m}$
   and $\dot x(t)\to v_{\infty}$ as $t\to+\infty$: the velocity approaches the
   terminal velocity exponentially in time.

## Facts & Assumptions

**Given:** The drag model with its parameters $m,c>0$ and $\mathbf g$, the datum $(0,x_{0},v_{0})$, and the terminal velocity $v_{\infty}=(m/c)\mathbf g$.

[L1] The model is a force map of [[post-cm02-force-superposition]] clause (iii) by [[post-cm02-drag]] clause (iii); motions, maximal motions and their uniqueness are [[def-cm02-newtonian-flow]] and [[pthm-cm02-ivp]] clauses 1, 2 and 4.

[L2] Scalar model and its solvability: for $m>0$, $c\ge0$, $k=0$ and constant forcing $f\equiv f_{0}$ the equation $m\xi''+c\xi'=f_{0}$ is the damped driven oscillator model [[def-cm-oscillator-model-and-phase-system]] with $k=0$; by [[thm-cm-forced-oscillator-variation-of-constants]] clause 1 there is exactly one solution on $\mathbb R$ through any datum $(\xi(0),\xi'(0))$, and by [[prop-cm-oscillator-degenerate-and-repulsive-cases]] clause 2, for $c>0$ the homogeneous solutions are $\xi_{\mathrm h}(t)=A+Be^{-ct/m}$ with $A=\xi_{\mathrm h}(0)+\frac{m}{c}\xi_{\mathrm h}'(0)$ and $B=-\frac{m}{c}\xi_{\mathrm h}'(0)$.

[L3] Differentiation and limits: $\frac{d}{dt}e^{\mu t}=\mu e^{\mu t}$ ([[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-vector-valued-derivative-and-integral]] for componentwise differentiation); $\exp(s)\ge1+s$ for every real $s$ ([[lem-exponential-dominates-one-plus-x]]); $e^{-ct/m}=1/e^{ct/m}>0$ ([[cor-exponential-reciprocal-and-positivity]]); and $0<a<b$ implies $0<1/b<1/a$ ([[lem-of-inverse-positive]]); limits at infinity are read through [[def-limits-at-infinity]].

[L4] The Euclidean norm satisfies the triangle inequality and absolute homogeneity ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-euclidean-inner-product]]).

## Verification

**Proof technique:** direct; decompose the vector equation into scalar coordinate equations of the solved scalar model, verify the explicit formula by differentiation, and estimate the velocity difference.

1.1 The vector equation $m\ddot x=m\mathbf g-c\dot x$ is, in the frame's coordinates, the three scalar equations $m\ddot x_{j}=m g_{j}-c\dot x_{j}$ for $j=1,2,3$, each the scalar model of [L2] with $k=0$, $c>0$ and constant forcing $f_{0}=mg_{j}$; in particular each scalar initial value problem has exactly one solution on $\mathbb R$ by [L2]. [given, L1, L2, algebra]

2.1 Candidate and its derivatives: set $v_{\infty}=(m/c)\mathbf g$ and $$\xi_{j}(t):=x_{0,j}+v_{\infty,j}t+\frac{m}{c}\bigl(v_{0,j}-v_{\infty,j}\bigr)\bigl(1-e^{-ct/m}\bigr);$$ then by [L3] $\xi_{j}'(t)=v_{\infty,j}+(v_{0,j}-v_{\infty,j})e^{-ct/m}$ and $\xi_{j}''(t)=-\frac{c}{m}(v_{0,j}-v_{\infty,j})e^{-ct/m}$, so $$m\xi_{j}''+c\xi_{j}'=-c(v_{0,j}-v_{\infty,j})e^{-ct/m}+c v_{\infty,j}+c(v_{0,j}-v_{\infty,j})e^{-ct/m}=cv_{\infty,j}=mg_{j},$$ the scalar equation of step 1.1; moreover $\xi_{j}(0)=x_{0,j}$ and $\xi_{j}'(0)=v_{\infty,j}+(v_{0,j}-v_{\infty,j})=v_{0,j}$. [step 1.1, L2, L3, algebra]

3.1 By uniqueness in [L2] each $\xi_{j}$ is the unique scalar solution on $\mathbb R$ with the datum, so the vector curve $x(t):=(\xi_{1}(t),\xi_{2}(t),\xi_{3}(t))$ displayed in the Example satisfies the vector equation for all $t\in\mathbb R$ with values in $Q=\mathbb R^{3}$ and the stated datum; by [[def-cm02-newtonian-flow]] clause (c) it is a motion of the model, and it is defined on all of the time window. By [[pthm-cm02-ivp]] clauses 2 and 4 every motion with the same datum is the restriction of this one, so it is the unique maximal motion, with maximal interval $\mathbb R$; this proves claim 1. [step 2.1, L1, L2, algebra]

4.1 Velocity and approach to the terminal velocity: from step 2.1, $\dot x(t)-v_{\infty}=(v_{0}-v_{\infty})e^{-ct/m}$, so by [L4] $\lvert\dot x(t)-v_{\infty}\rvert_{2}=\lvert v_{0}-v_{\infty}\rvert_{2}\,e^{-ct/m}$ for every $t$. The factor decays to $0$: given $\varepsilon>0$, for $t>\frac{m}{c}\cdot\frac{1}{\varepsilon}$ one has $\frac{ct}{m}>\frac{1}{\varepsilon}$ and hence, using $\exp(s)\ge1+s$ at $s=\frac{ct}{m}>0$, the reciprocal comparison of [L3] and $\frac{m}{ct}<\varepsilon$, $$0<e^{-ct/m}=\frac{1}{e^{ct/m}}\le\frac{1}{1+ct/m}<\frac{m}{ct}<\varepsilon.$$ Therefore $\lvert\dot x(t)-v_{\infty}\rvert_{2}\le\lvert v_{0}-v_{\infty}\rvert_{2}\,e^{-ct/m}\to0$ as $t\to+\infty$, i.e. $\dot x(t)\to v_{\infty}$ ([[def-limits-at-infinity]]); this proves claim 2. [step 2.1, L3, L4, algebra] ∎

## Remarks

- **Terminal velocity is a model quantity.** $v_{\infty}=(m/c)\mathbf g$ is the velocity at which the drag force balances the applied force in this model; it is not asserted as a measured value, and both $c$ and $\mathbf g$ are declared model parameters subject to the regime qualifications of [[post-cm02-drag]].

- **Position and compact trapping.** If $\mathbf g\ne0$, then $v_{\infty}\ne0$ and $x(t)=v_{\infty}t+O(1)$ as $t\to+\infty$, so the state is unbounded and the forward compact-trapping hypothesis of [[pthm-cm02-continuation]] clause 3 is unavailable. If $\mathbf g=0$, then $x(t)\to x_0+(m/c)v_0$ and $\dot x(t)\to0$; the forward state is bounded and lies in a compact subset of the full state space. For $\mathbf g=0$ and $v_0=0$, the motion is stationary. In every case the explicit all-time formula establishes global existence.

- **Strict positivity of $c$.** The formula for $v_{\infty}$ and the computation above require $c>0$. For $c=0$ the equation instead gives $\dot x(t)=v_0+\mathbf g t$: there is no finite limiting velocity when $\mathbf g\ne0$, while for $\mathbf g=0$ the velocity is constant.
