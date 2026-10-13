---
id: thm-cm-finite-time-linearization-error-bound
kind: theorem
title: "Finite-time linearization error bound: quadratic remainder, exponential growth bound and the variation-of-constants estimate"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [lem-cm-continuous-dependence-on-initial-data, thm-cm-compact-continuation-for-locally-lipschitz-odes, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-maximal-ode-solution, cor-cm-variation-of-constants-for-linear-systems, def-operator-norm, thm-gronwall-integral-inequality, prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, thm-norm-inequality-for-the-vector-valued-integral, thm-monotonicity-of-the-integral, cor-vector-valued-ftc-and-lipschitz-bound, thm-mean-value-inequality, def-lipschitz-holder-contraction, def-vector-valued-derivative-and-integral, def-metric-ball, def-interval, thm-heine-borel-rn]
dependency_roles:
  lem-cm-continuous-dependence-on-initial-data: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  cor-cm-variation-of-constants-for-linear-systems: mathematical-premise
  def-operator-norm: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-mean-value-inequality: mathematical-premise
  def-lipschitz-holder-contraction: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: G. Teschl, Ordinary Differential Equations and Dynamical Systems (retrieved 365-page online edition), Section 2.4, Theorem 2.10, printed pp. 45-48 (smooth dependence and variational equation); Section 3.4, Theorem 3.12, printed pp. 83-84 (variation of constants). The explicit quadratic error estimate is derived locally.
    url: https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf
  - title: 'I. Stewart, Advanced Classical Mechanics (MIT 8.09 Fall 2014, complete course text), Chapter 7 Section 7.1.3: the linearised version of the damped oscillator and the limits of linear reasoning, printed pages 147-148'
    url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open with $0\in U$, let $F:U\to\mathbb R^n$ be continuous and locally Lipschitz in the state variable, and let $r>0$, $C\ge0$, $L\ge0$ and $A\in M_n(\mathbb R)$ satisfy $\overline B(0,r)\subseteq U$ ([[def-metric-ball]]) and

$$\|F(z)-Az\|_2\le C\|z\|_2^2,\qquad \|F(z)\|_2\le L\|z\|_2\qquad(\|z\|_2\le r),$$
where $Az$ and $\|A\|$ use the matrix-action and induced Euclidean operator-norm convention of [[cor-cm-variation-of-constants-for-linear-systems]].

Let $z_0\in\mathbb R^n$ with $\delta:=\|z_0\|_2>0$, let $T>0$ with $\delta e^{LT}<r$, and let $y:\mathbb R\to\mathbb R^n$ be the solution of the linear system $y'=Ay$, $y(0)=z_0$ ([[cor-cm-variation-of-constants-for-linear-systems]]). Then:

1. The maximal solution $z$ of $z'=F(z)$, $z(0)=z_0$ is defined on $[0,T]$ and satisfies $\|z(t)\|_2\le\delta e^{Lt}$ for $t\in[0,T]$ ([[def-maximal-ode-solution]]).
2. For every $t\in[0,T]$,
$$\|z(t)-y(t)\|_2\le C\delta^2\int_0^te^{\|A\|(t-s)}e^{2Ls}\,ds\le C\delta^2\,t\,e^{(\|A\|+2L)t},$$
where $\|A\|$ is the operator norm of $A$ for the Euclidean norm ([[def-operator-norm]]).

## Remarks

- **Where the quadratic remainder comes from.** If $DF$ is Lipschitz on $\overline B(0,r)$ with constant $\Lambda$ — equivalently, by the mean value inequality, if $\|DF(u)-DF(v)\|\le\Lambda\|u-v\|_2$ there — then for $F(0)=0$ and $A=DF(0)$ the identity $F(z)-Az=\int_0^1\bigl(DF(tz)-DF(0)\bigr)z\,dt$ (fundamental theorem for the vector-valued curve $t\mapsto F(tz)$, [[cor-vector-valued-ftc-and-lipschitz-bound]]) gives $\|F(z)-Az\|_2\le\frac{\Lambda}{2}\|z\|_2^2$, so the hypothesis holds with $C=\Lambda/2$ ([[thm-mean-value-inequality]], [[def-lipschitz-holder-contraction]]). For $C^2$ fields with $\|D^2F\|\le\Lambda$ on the ball this is the case.

- **Scope.** The bound is a finite-time statement on $[0,T]$ under the explicit smallness condition $\delta e^{LT}<r$; it asserts neither global validity of the linear approximation nor stability of the equilibrium, and it does not identify the nonlinear solution with the linear one beyond the displayed order-$\delta^2$ estimate.

## Facts & Assumptions

**Given:** The field $F$ and constants $A,r,C,L$ as in the statement, the datum $z_0$ with $\delta=\|z_0\|_2>0$, the time $T>0$ with $\delta e^{LT}<r$, and the linear solution $y(t)=E(t)z_0$ with $E(t)$ the matrix exponential of $A$.

[F1] $F$ is continuous and locally Lipschitz in the state variable ([[def-lipschitz-holder-contraction]] for the Lipschitz terminology); on the compact ball $\overline B(0,r)$ the field $F$ is bounded by $Lr$ and Lipschitz with some finite constant ([[thm-heine-borel-rn]], [[def-metric-ball]]). [given]

[F2] Local existence on a Picard-Lindelof cylinder and the a priori Lipschitz estimate are provided by [[lem-cm-continuous-dependence-on-initial-data]]; every initial value problem has a unique maximal solution, and any solution is a restriction of it ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-maximal-ode-solution]]). [given]

[F3] Compact continuation: a solution whose graph stays in a compact subset of $U$ near a finite endpoint extends past that endpoint ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]]). [given]

[F4] A curve $z$ solves $z'=F(z)$ through $z_0$ exactly when $z(t)=z_0+\int_0^tF(z(s))\,ds$ for $t$ in its interval of definition, and moreover $\|\int_a^b\phi\|_2\le|\int_a^b\|\phi\|_2|$ ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]], [[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-monotonicity-of-the-integral]], [[def-vector-valued-derivative-and-integral]]). [given]

[F5] Gronwall: if continuous $u\ge0$ satisfies $u(t)\le A_0+K\int_0^tu$ on $[0,T]$, then $u(t)\le A_0e^{Kt}$ there ([[thm-gronwall-integral-inequality]]). [given]

[F6] Matrix exponential data ([[cor-cm-variation-of-constants-for-linear-systems]], [[def-operator-norm]]): $E$ is $C^1$, $E'(t)=AE(t)=E(t)A$, $E(t)E(s)=E(t+s)$, and $\|E(u)\|\le e^{\|A\||u|}$; in particular $y(t)=E(t)z_0$ is the global solution of $y'=Ay$, $y(0)=z_0$, obtained by taking the globally continuous forcing $b\equiv0$.

## Proof

**Proof technique:** direct; bound the maximal solution by Gronwall while it stays in the ball, extend it to $[0,T]$ by compact continuation, and derive the finite-interval comparison identity with an integrating factor.

1.1 Let $z$ be the maximal solution through $z_0$ and let $J\subseteq[0,\infty)$ be that part of its interval on which $\|z(t)\|_2\le r$; while $t\in J$, [F4] and the bound $\|F(z(s))\|_2\le L\|z(s)\|_2$ give $$\|z(t)\|_2\le\delta+\int_0^tL\|z(s)\|_2\,ds,$$ so [F5] yields $\|z(t)\|_2\le\delta e^{Lt}$ for all $t\in J$. In particular, if $t\in J$ and $t\le T$ then $\|z(t)\|_2\le\delta e^{LT}<r$. [F1, F4, F5, given]

2.1 The maximal solution is defined on all of $[0,T]$. Indeed, if its forward interval ended at some $\tau\le T$, then the graph of $z$ on $[0,\tau)$ would lie in the compact set $[0,T]\times\overline B(0,r)$ by step 1.1 applied on $J\cap[0,\tau)$ — more precisely, should $z$ reach $\|z\|_2=r$ at some first time $\tau_0$, step 1.1 would give $\|z(\tau_0)\|_2\le\delta e^{L\tau_0}\le\delta e^{LT}<r$ at that time, a contradiction; so $\|z(t)\|_2<r$ for all $t$ in the maximal forward interval that are $\le T$, and the graph stays in the compact subset $[0,T]\times\overline B(0,r)\subseteq[0,T]\times U$. By [F3] the solution extends past every finite endpoint below or at $T$, so it is defined on $[0,T]$ and step 1.1 gives $\|z(t)\|_2\le\delta e^{Lt}$ there; this is clause 1. [step 1.1, F2, F3, given]

3.1 Finite-interval comparison identity: on $[0,T]$ put $q:=z-y$ and $b(t):=F(z(t))-Az(t)$. The curve $b$ is continuous on $[0,T]$, and $q'=Aq+b$, $q(0)=0$. Define $r(t):=E(-t)q(t)$. By [F6], the chain rule and product rule, $$r'(t)=-AE(-t)q(t)+E(-t)(Aq(t)+b(t))=E(-t)b(t),$$ since $AE(-t)=E(-t)A$. The vector-valued fundamental theorem of calculus, applied on the actual interval $[0,T]$, gives $r(t)=\int_0^tE(-s)b(s)\,ds$; multiplying by $E(t)$ and using [F6]'s group law yields $$q(t)=\int_0^tE(t-s)b(s)\,ds.$$ This derivation uses only the continuous values of $b$ on $[0,T]$. Consequently, using $\|E(t-s)\|\le e^{\|A\|(t-s)}$ for $0\le s\le t$, the quadratic remainder hypothesis and clause 1, $$\|z(t)-y(t)\|_2\le\int_0^t e^{\|A\|(t-s)}\bigl\|F(z(s))-Az(s)\bigr\|_2\,ds\le C\delta^2\int_0^te^{\|A\|(t-s)}e^{2Ls}\,ds,$$ for every $t\in[0,T]$. [step 2.1, F6, given]

4.1 For the final estimate, $e^{\|A\|(t-s)}\le e^{\|A\|t}$ and $e^{2Ls}\le e^{2Lt}$ on $0\le s\le t$, so $\int_0^te^{\|A\|(t-s)}e^{2Ls}ds\le t\,e^{(\|A\|+2L)t}$; substituting into step 3.1 gives the displayed product bound. This proves clause 2. [step 3.1, algebra] ∎
