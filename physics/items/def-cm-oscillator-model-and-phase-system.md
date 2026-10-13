---
id: def-cm-oscillator-model-and-phase-system
kind: definition
title: "The damped driven oscillator model: second-order equation, phase-plane system and characteristic data"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-first-order-ode-initial-value-problem-and-solution, def-vector-valued-derivative-and-integral, def-derivative, def-continuity-real, def-interval, thm-picard-lindelof-local-existence-and-uniqueness]
dependency_roles:
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.1, Eqs. (5.1)-(5.13a): harmonic oscillator, linear drag force, damping coefficient and the forced equation $m\\ddot q+\\eta\\dot q+\\kappa q=F(t)$; printed pages 1-3 of Chapter 5 (PDF pages 87-89)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 7 Section 7.1.3, Eq. (7.15): the linearised forced damped oscillator and the underdamped, critically damped and overdamped solution cases, printed pages 147-148"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Definition

Let $m>0$, $c\ge0$ and $k\in\mathbb R$ be given real numbers, let $I\subseteq\mathbb R$ be an interval with nonempty interior ([[def-interval]]) and let $f:I\to\mathbb R$ be continuous ([[def-continuity-real]]). The **damped driven oscillator model** with data $(m,c,k,f)$ is the second-order equation

$$m\,x''(t)+c\,x'(t)+k\,x(t)=f(t),\qquad t\in I .$$

A **solution** of the model on an interval $J\subseteq I$ with nonempty interior is a twice differentiable $x:J\to\mathbb R$ such that the identity holds for every $t\in J$, derivatives being ordinary real derivatives ([[def-derivative]], [[def-vector-valued-derivative-and-integral]]). The model is called **homogeneous** when $f\equiv 0$, **undamped** when $c=0$, and **strictly damped** when $c>0$.

The **phase-plane equation** of the model has right-hand side

$$G_f:I\times\mathbb R^2\longrightarrow\mathbb R^2,\qquad G_f(t,x,v):=\Bigl(v,\ \frac{f(t)-c\,v-k\,x}{m}\Bigr).$$

Here $\mathbb R^2$ is the **phase plane**, with coordinates $(x,v)$, where $x$ is the **displacement** and $v$ the **velocity**. For an interval $J\subseteq I$ with nonempty interior, a differentiable curve $z=(x,v):J\to\mathbb R^2$ solves the phase-plane equation when $z'(t)=G_f(t,z(t))$ for every $t\in J$, using the domain-relative derivative at any included endpoint ([[def-derivative]]). If $x$ is a solution of the model on $J$, then $t\mapsto(x(t),x'(t))$ solves this equation; conversely, if $t\mapsto(x(t),v(t))$ solves it, then $v=x'$ and $x$ is a solution of the model on $J$. When $J$ is open, this is the first-order system of [[def-first-order-ode-initial-value-problem-and-solution]] on the open domain $J\times\mathbb R^2$. For the homogeneous model the right-hand side is written $G_0(x,v)=(v,-(cv+kx)/m)$.

The **characteristic polynomial** of the model is

$$p(\lambda):=m\lambda^2+c\lambda+k,$$

with **discriminant** $\Delta:=c^2-4mk$. When $k>0$ define the **undamped frequency** $\omega_0:=\sqrt{k/m}$, the **damping rate** $\gamma:=c/(2m)$ and, when $4mk>c^2$, the **damped frequency** $\omega:=\sqrt{k/m-\gamma^2}=\sqrt{4mk-c^2}/(2m)$; the corresponding square roots are the nonnegative real ones.

## Remarks

- **Equilibrium of the homogeneous phase system.** A point $(x,v)\in\mathbb R^2$ satisfies $G_0(x,v)=(0,0)$ if and only if $v=0$ and $kx=0$; hence the zero set of $G_0$ is $\{(0,0)\}$ when $k\ne0$ and the whole line $\{(x,0):x\in\mathbb R\}$ when $k=0$. For the forced model, $G_f(t,x,v)=(0,0)$ holds if and only if $v=0$ and $kx=f(t)$.

- **Interpretation.** This item is a purely mathematical model: $m,c,k$ are real parameters, $f$ an arbitrary continuous real function, and no physical units, force law, constitutive assumption or empirical claim is made. The classical-mechanical reading of $m,c,k,f$ and any identification with measured data belong to the consuming physics item, not to this definition.

- **Regularity.** $G_f$ is continuous relative to $I\times\mathbb R^2$ and, for each $t$, Lipschitz in $(x,v)$ with constant $L:=\max(1,(c+|k|)/m)\sqrt2$, since $|{-c\Delta v-k\Delta x}|\le c|\Delta v|+|k||\Delta x|$ and $|a|+|b|\le\sqrt2\sqrt{a^2+b^2}$. At every interior time $t\in I^\circ$, its restriction to a sufficiently small open time interval about $t$ satisfies the Picard-Lindelof hypotheses of [[thm-picard-lindelof-local-existence-and-uniqueness]]. If $I$ includes an endpoint, this item does not assert existence across that endpoint unless $f$ is also defined on an open time neighborhood there.
