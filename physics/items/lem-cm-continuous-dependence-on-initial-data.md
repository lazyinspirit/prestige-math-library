---
id: lem-cm-continuous-dependence-on-initial-data
kind: lemma
title: "Continuous and Lipschitz dependence on the initial condition on a Picard-Lindelof cylinder"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-first-order-ode-initial-value-problem-and-solution, def-locally-lipschitz-in-the-state-variable, thm-picard-lindelof-local-existence-and-uniqueness, prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, thm-gronwall-integral-inequality, def-vector-valued-derivative-and-integral, thm-norm-inequality-for-the-vector-valued-integral, thm-monotonicity-of-the-integral, thm-additivity-over-subintervals, def-euclidean-inner-product, def-metric-ball, def-interval, thm-heine-borel-rn, thm-extreme-value-metric, thm-cauchy-schwarz-and-the-euclidean-norm]
dependency_roles:
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Lemma 2.7 (generalized Gronwall inequality) and Theorem 2.8 with estimate (2.43), printed pages 42-44"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "J. Arino, MATH 8430 Fundamental Theory of Ordinary Differential Equations (University of Manitoba), Section 1.4 (continuous dependence on the initial data), printed pages 32-36, and Appendix A.7 (Gronwall)"
      url: "https://julien-arino.github.io/assets/pdf/courses/math8430_lecture_notes.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open and let $F:U\to\mathbb R^n$ be continuous and locally Lipschitz in the state variable ([[def-locally-lipschitz-in-the-state-variable]]). Let $a_0\in U$, let $h>0$ and $R>0$ satisfy $\overline B(a_0,R)\subseteq U$ ([[def-metric-ball]]), put

$$M:=\sup_{x\in\overline B(a_0,R)}\|F(x)\|_2,\qquad L:=\text{a state-Lipschitz constant of }F\text{ on }\overline B(a_0,R),$$

so that $\|F(x)-F(y)\|_2\le L\|x-y\|_2$ for all $x,y\in\overline B(a_0,R)$ ([[def-euclidean-inner-product]]), and let $0\le\rho<R$ satisfy

$$hM\le R-\rho,\qquad Lh<1 .$$

Then for every $a\in\overline B(a_0,\rho)$ the initial value problem

$$x'(t)=F(x(t)),\qquad x(0)=a$$

has exactly one solution $x(\,\cdot\,;a)$ on $[-h,h]$ whose graph lies in $[-h,h]\times\overline B(a_0,R)$, and for all $a,b\in\overline B(a_0,\rho)$ and all $s,t\in[-h,h]$:

1. $\|x(t;a)-x(t;b)\|_2\le e^{L|t|}\|a-b\|_2$;
2. $\|x(t;a)-x(s;a)\|_2\le M\,|t-s|$;
3. $\|x(t;a)-x(s;b)\|_2\le e^{Lh}\|a-b\|_2+M\,|t-s|$; in particular the map $(t,a)\mapsto x(t;a)$ is Lipschitz, hence continuous, on the compact set $[-h,h]\times\overline B(a_0,\rho)$.

## Facts & Assumptions

**Given:** The open set $U$, the continuous and locally Lipschitz field $F$, the point $a_0\in U$, the numbers $h,R>0$ with $\overline B(a_0,R)\subseteq U$, the constants $M,L$ and the radius $\rho$ with $hM\le R-\rho$ and $Lh<1$.

[F1] Picard-Lindelöf: if $[t_0-h,t_0+h]\times\overline B(x_0,r)\subseteq\mathbb R\times U$, if $\|F\|_2\le M$ and $F$ has state-Lipschitz constant $L$ on that cylinder, and if $hM\le r$ and $Lh<1$, then exactly one solution of $x'=F(x)$, $x(t_0)=x_0$ exists on $[t_0-h,t_0+h]$ with graph in the cylinder; any two solutions through the same initial data agree on every common subinterval containing the initial time ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[def-first-order-ode-initial-value-problem-and-solution]]).

[F2] $F$ is locally Lipschitz in the state variable: every compact time-state cylinder carries a finite state-Lipschitz constant ([[def-locally-lipschitz-in-the-state-variable]]); in particular $L$ as chosen in the statement is finite and the inequality $\|F(x)-F(y)\|_2\le L\|x-y\|_2$ holds on $\overline B(a_0,R)$.

[F3] For $\rho=0$ the notation $\overline B(a_0,\rho)$ means the singleton $\{a_0\}$, as follows from the inequality defining a closed ball. $\overline B(a_0,R)$ is closed and bounded, hence compact in $\mathbb R^n$ ([[def-metric-ball]], [[thm-heine-borel-rn]]), so the continuous function $\|F\|_2$ attains its maximum there and $M<+\infty$ ([[thm-extreme-value-metric]]).

[F4] A curve solves the initial value problem on an interval exactly when it is continuous there, has graph in $U$, and satisfies the Volterra equation $x(t)=a+\int_0^tF(x(r))\,dr$; the oriented integral is additive over subintervals ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]], [[def-vector-valued-derivative-and-integral]], [[thm-additivity-over-subintervals]], [[def-interval]]).

[F5] The Euclidean norm satisfies the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]). For an integrable $\mathbb R^n$-valued curve $g$ on an interval and reals $r\le s$ one has $\bigl\|\int_r^sg\bigr\|_2\le\bigl|\int_r^s\|g\|_2\bigr|$, and if a real integrable $u$ satisfies $u\le c$ on a nondegenerate interval then $\int u\le c\,(\text{length})$ ([[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-monotonicity-of-the-integral]]).

[F6] Gronwall: if continuous $u:[0,T]\to\mathbb R$ and constants $A\ge0$, $L\ge0$ satisfy $u(t)\le A+L\int_0^tu$ for $t\in[0,T]$, then $u(t)\le Ae^{Lt}$ there; the reflected form for an integral oriented as $\int_t^0$ gives $u(t)\le Ae^{L|t|}$ for $t\le0$ ([[thm-gronwall-integral-inequality]]).

## Proof

**Proof technique:** direct; construct the solutions on a common cylinder and estimate their difference with Gronwall's inequality.

1.1 Fix $a\in\overline B(a_0,\rho)$ and put $r_a:=R-\|a-a_0\|_2$, so that $r_a\ge R-\rho>0$. Then $[{-h},h]\times\overline B(a,r_a)\subseteq[-h,h]\times\overline B(a_0,R)\subseteq\mathbb R\times U$: if $\|x-a\|_2\le r_a$ then $\|x-a_0\|_2\le\|x-a\|_2+\|a-a_0\|_2\le r_a+\|a-a_0\|_2=R$. Moreover $hM\le R-\rho\le r_a$ and $Lh<1$, and the bounds $M$ and $L$ hold on the larger cylinder $[-h,h]\times\overline B(a_0,R)$ by [F2] and [F3]. By [F1] with $t_0=0$, $x_0=a$, $r=r_a$, exactly one solution $x(\,\cdot\,;a)$ on $[-h,h]$ exists whose graph lies in $[-h,h]\times\overline B(a,r_a)\subseteq[-h,h]\times\overline B(a_0,R)$. [given, F1, F2, F3, algebra]

2.1 For $a,b\in\overline B(a_0,\rho)$ put $e:=x(\,\cdot\,;a)-x(\,\cdot\,;b)$. By [F4], for $t\in[0,h]$, $$e(t)=a-b+\int_0^t\bigl(F(x(r;a))-F(x(r;b))\bigr)dr .$$ The integrand is continuous because $F$ and the two solutions are continuous, so [F5] gives $\|e(t)\|_2\le\|a-b\|_2+L\int_0^t\|e(r)\|_2\,dr$: the Lipschitz estimate applies on $\overline B(a_0,R)$ since both graphs lie there by step 1.1. [F4, F5, step 1.1, algebra]

2.2 For $s,t\in[-h,h]$, [F4] gives $x(t;a)-x(s;a)=\int_s^tF(x(r;a))\,dr$, and the graph of $x(\,\cdot\,;a)$ lies in $\overline B(a_0,R)$ by step 1.1, where $\|F\|\le M$; hence $\|x(t;a)-x(s;a)\|_2\le M|t-s|$ by [F5]. This is clause 2. [step 1.1, F4, F5, algebra]

3.1 Applying [F6] with $u=\|e\|_2$, $A=\|a-b\|_2$ gives $\|e(t)\|_2\le e^{Lt}\|a-b\|_2$ for $t\in[0,h]$. For $t\in[-h,0]$ apply the same argument to the reflected curves $\tilde x(s):=x(-s;a)$, $\tilde x(s):=x(-s;b)$ on $[0,-t]$: their difference obeys the same integral inequality, so $\|e(t)\|_2\le e^{-Lt}\|a-b\|_2=e^{L|t|}\|a-b\|_2$. This is clause 1. [step 2.1, F1, F4, F5, F6, algebra]

4.1 Combining clauses 1 and 2 with the triangle inequality, $\|x(t;a)-x(s;b)\|_2\le\|x(t;a)-x(s;a)\|_2+\|x(s;a)-x(s;b)\|_2\le M|t-s|+e^{Lh}\|a-b\|_2$ for all $(t,a),(s,b)\in[-h,h]\times\overline B(a_0,\rho)$; this is clause 3. The domain of the map is a closed bounded subset of $\mathbb R\times\mathbb R^n$, hence compact ([[thm-heine-borel-rn]]), and the displayed inequality exhibits it as Lipschitz. [step 3.1, 2.2, algebra] ∎
