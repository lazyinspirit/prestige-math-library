---
id: thm-cm-compact-continuation-for-locally-lipschitz-odes
kind: theorem
title: "Compact continuation for locally Lipschitz ODEs: a solution whose graph stays in a compact subset of the domain near a finite endpoint extends past it"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-first-order-ode-initial-value-problem-and-solution, def-locally-lipschitz-in-the-state-variable, def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, def-metric-continuity, def-metric-topology, def-metric-ball, def-complete-metric-space, def-interval, thm-picard-lindelof-local-existence-and-uniqueness, prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, thm-additivity-over-subintervals, thm-norm-inequality-for-the-vector-valued-integral, thm-monotonicity-of-the-integral, thm-euclidean-space-complete, thm-cauchy-schwarz-and-the-euclidean-norm, lem-reverse-triangle-inequality-in-a-normed-space, thm-extreme-value-metric, thm-compact-subset-is-closed-and-bounded, thm-componentwise-limits-and-continuity, cor-differentiable-implies-continuous, cor-archimedean-reciprocal]
dependency_roles:
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-metric-topology: mathematical-premise
  def-metric-ball: mathematical-premise
  def-complete-metric-space: mathematical-premise
  def-interval: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  lem-reverse-triangle-inequality-in-a-normed-space: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-compact-subset-is-closed-and-bounded: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  cor-archimedean-reciprocal: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, §2.6 Extensibility of solutions, printed pp. 50-53: gluing, Corollary 2.15 (compact continuation) and Corollary 2.16 (escape of every compact set)"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Julien Arino, MATH 8430 Fundamental Theory of Ordinary Differential Equations (University of Manitoba), §1.3 Continuation of solutions, printed pp. 24-28: Lemma 1.3.1, Theorem 1.3.3 and Theorem 1.3.7"
      url: "https://julien-arino.github.io/assets/pdf/courses/math8430_lecture_notes.pdf"
---

## Statement

Let $n\ge1$, let $D\subseteq\mathbb R\times\mathbb R^n$ be open, and let $F:D\to\mathbb R^n$ be continuous and locally Lipschitz in the state variable, locally uniformly in time, in the sense of [[def-locally-lipschitz-in-the-state-variable]]. Let $t_0<b$ be reals, let $x_0\in\mathbb R^n$ with $(t_0,x_0)\in D$, and let $x:[t_0,b)\to\mathbb R^n$ be a solution of the initial value problem

$$x'(t)=F\bigl(t,x(t)\bigr),\qquad x(t_0)=x_0$$

on $[t_0,b)$ ([[def-first-order-ode-initial-value-problem-and-solution]]). Suppose there is a compact set $K\subseteq D$ and a real $\delta>0$ such that

$$\bigl(t,x(t)\bigr)\in K\qquad\text{for every }t\in(b-\delta,b).$$

Then:

1. there is $\varepsilon>0$ and a solution $\tilde x:[t_0,b+\varepsilon)\to\mathbb R^n$ of the same initial value problem with $\tilde x(t)=x(t)$ for all $t\in[t_0,b)$; in particular $\tilde x(b)=\lim_{t\uparrow b}x(t)$ exists and lies in the state projection of $K$;
2. if moreover $D=\mathbb R\times U$ for an open $U\subseteq\mathbb R^n$ and $F$ is autonomous, $F(t,z)=G(z)$ with $G:U\to\mathbb R^n$ continuous and locally Lipschitz in the state variable ([[def-locally-lipschitz-in-the-state-variable]]), and if there is a compact $K_0\subseteq U$ with $x(t)\in K_0$ for every $t\in(b-\delta,b)$, then the extension conclusion of clause 1 holds as well.

## Facts & Assumptions

**Given:** The data of the statement: open $D\subseteq\mathbb R\times\mathbb R^n$, a continuous $F$ that is locally Lipschitz in the state variable in the sense of [L2], a solution $x$ of the initial value problem on $[t_0,b)$, and a compact $K\subseteq D$ with $(t,x(t))\in K$ for all $t\in(b-\delta,b)$.

[L1] Picard-Lindelöf: at every point $(t_*,y_*)\in D$ there are $h>0$, $r>0$ with $[t_*-h,t_*+h]\times\overline B(y_*,r)\subseteq D$ and exactly one solution through $(t_*,y_*)$ on $[t_*-h,t_*+h]$ whose graph lies in that cylinder; any two solutions through the same initial data agree on every common subinterval containing the initial time ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[def-first-order-ode-initial-value-problem-and-solution]]).

[L2] $F$ is locally Lipschitz in the state variable when every compact time-state cylinder $C\subseteq D$ carries a finite $L$ with $\lVert F(t,u)-F(t,w)\rVert_2\le L\lVert u-w\rVert_2$ for $(t,u),(t,w)\in C$ ([[def-locally-lipschitz-in-the-state-variable]]).

[L3] A curve solves the initial value problem on an interval exactly when it is continuous there, has graph in $D$, and satisfies the Volterra equation $x(t)=x_0+\int_{t_0}^tF(s,x(s))\,ds$; the oriented integral is additive over subintervals ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]], [[def-vector-valued-derivative-and-integral]], [[thm-additivity-over-subintervals]]).

[L4] For $s<t$ and an integrable curve $g$ with values in $\mathbb R^n$ one has $\lVert\int_s^tg\rVert_2\le\int_s^t\lVert g\rVert_2$, and for a real integrable $u\le M$ on $[s,t]$ one has $\int_s^tu\le M(t-s)$ ([[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-monotonicity-of-the-integral]]).

[L5] The Euclidean norm is a norm on $\mathbb R^n$, so it satisfies the triangle inequality $\lVert u+w\rVert_2\le\lVert u\rVert_2+\lVert w\rVert_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]) and the reverse triangle inequality $\bigl|\lVert u\rVert_2-\lVert w\rVert_2\bigr|\le\lVert u-w\rVert_2$ ([[lem-reverse-triangle-inequality-in-a-normed-space]]); moreover $(\mathbb R^n,d_2)$ is complete: every Cauchy sequence in $\mathbb R^n$ converges ([[thm-euclidean-space-complete]], [[def-complete-metric-space]], [[def-vector-valued-functions-limits-and-continuity]]).

[L6] A continuous real-valued function on a nonempty compact metric space is bounded and attains its bounds ([[thm-extreme-value-metric]]); a compact subset of a metric space is closed ([[thm-compact-subset-is-closed-and-bounded]]), and closed means open complement ([[def-metric-topology]], [[def-metric-ball]]).

[L7] Continuity conventions: differentiability implies continuity, and vector-valued continuity is componentwise ([[cor-differentiable-implies-continuous]], [[thm-componentwise-limits-and-continuity]], [[def-metric-continuity]]). For every positive real $\eta$ there is a natural $k\ge1$ with $1/k<\eta$ ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 If $\delta>b-t_0$ replace $\delta$ by $b-t_0$; then the interval $(b-\delta,b)\cap[t_0,b)$ is nonempty. The norm function $z\mapsto\lVert F(z)\rVert_2$ is continuous on the compact metric subspace $K$: given $z_0\in K$ and $\varepsilon>0$, continuity of $F$ at $z_0$ [L7] gives $\delta_0>0$ with $\lVert F(z)-F(z_0)\rVert_2<\varepsilon$ whenever $d_2(z,z_0)<\delta_0$, and the reverse triangle inequality [L5] then gives $\bigl|\lVert F(z)\rVert_2-\lVert F(z_0)\rVert_2\bigr|\le\lVert F(z)-F(z_0)\rVert_2<\varepsilon$. Hence [L6] gives $M:=\max\{\lVert F(z)\rVert_2:z\in K\}<+\infty$. [given, L5, L6, L7]


2.1 For $s,t$ with $b-\delta<s<t<b$: since $x$ solves the initial value problem, [L3] gives $x(t)=x_0+\int_{t_0}^tF(u,x(u))\,du$ and $x(s)=x_0+\int_{t_0}^sF(u,x(u))\,du$, hence $x(t)-x(s)=\int_s^tF(u,x(u))\,du$; the integrand is continuous in $u$ on $[s,t]$ because $u\mapsto F(u,x(u))$ is a composition of continuous maps (the components of $x$ are continuous by differentiability, [L7]) and $(u,x(u))\in K$ on this interval. By [L4], $\lVert x(t)-x(s)\rVert_2\le\int_s^t\lVert F(u,x(u))\rVert_2\,du\le M(t-s)$. [step 1.1, given, L3, L4, L7]


3.1 The limit $x_b:=\lim_{t\uparrow b}x(t)$ exists. Indeed, choose $k_0\ge1$ with $1/k_0<\min\{\delta,b-t_0\}$ [L7] and put $y_k:=x(b-1/k)$ for $k\ge k_0$; by step 2.1, $\lVert y_k-y_l\rVert_2\le M\,|1/k-1/l|$ for all $k,l\ge k_0$, so $(y_k)$ is a Cauchy sequence in $\mathbb R^n$ and converges, by [L5], to some $x_b\in\mathbb R^n$. Given $\eta>0$, choose $k\ge k_0$ with $1/k<\eta/(4(M+1))$ and $\lVert y_k-x_b\rVert_2<\eta/2$; then for every $t\in(b-\eta/(4(M+1)),b)$, step 2.1 gives $\lVert x(t)-x_b\rVert_2\le\lVert x(t)-y_k\rVert_2+\lVert y_k-x_b\rVert_2\le M\bigl(|t-b|+1/k\bigr)+\eta/2<M\cdot\eta/(2(M+1))+\eta/2<\eta$. Hence $\lim_{t\uparrow b}x(t)=x_b$. [step 2.1, L5, L7, algebra]


4.1 The point $(b,x_b)$ lies in $K$, hence in $D$: for $t\in(b-\delta,b)$ the points $(t,x(t))$ lie in $K$ and converge to $(b,x_b)$ as $t\uparrow b$ (in the product metric, the first coordinate trivially and the second by step 3.1); since $K$ is closed [L6], its complement is open, so a point outside $K$ would have a ball around it disjoint from $K$, which is impossible for $(b,x_b)$ because every such ball contains some $(t,x(t))$. [step 3.1, L6]


5.1 Extend $x$ to the continuous curve $\bar x:[t_0,b]\to\mathbb R^n$ by $\bar x(t):=x(t)$ for $t<b$ and $\bar x(b):=x_b$; it is continuous by step 3.1. Let $0<h_0<\delta$. For $s\in(b-h_0,b)$ and $t\in(s,b)$, step 2.1 and additivity of the integral [L3] give $\bigl(x(t)-x(s)\bigr)-\int_s^bF(u,\bar x(u))\,du=-\int_t^bF(u,\bar x(u))\,du$; since $(u,\bar x(u))\in K$ for every $u\in[s,b]$ (for $u<b$ by hypothesis, for $u=b$ by step 4.1), one has $\lVert F(u,\bar x(u))\rVert_2\le M$ there, and the norm inequality [L4] gives $\bigl\lVert\bigl(x(t)-x(s)\bigr)-\int_s^bF(u,\bar x(u))\,du\bigr\rVert_2\le\int_t^b\lVert F(u,\bar x(u))\rVert_2\,du\le M(b-t)\to0$ as $t\uparrow b$. With $x(t)\to x_b$ (step 3.1) this yields $x_b-x(s)=\int_s^bF(u,\bar x(u))\,du$. Hence the left difference quotient satisfies $$\Bigl\lVert\frac{\bar x(b)-\bar x(s)}{b-s}-F\bigl(b,x_b\bigr)\Bigr\rVert_2\le\sup_{s\le u\le b}\bigl\lVert F\bigl(u,\bar x(u)\bigr)-F\bigl(b,x_b\bigr)\bigr\rVert_2\longrightarrow0\qquad(s\uparrow b)$$ because $F$ is continuous at $(b,x_b)$ and $(u,\bar x(u))\to(b,x_b)$ as $u\uparrow b$. So $\bar x$ is differentiable at every point of $[b-h_0,b]$ as a function on that interval, with $\bar x'(t)=F(t,\bar x(t))$ for $t<b$ and left derivative $F(b,x_b)$ at $t=b$; it is therefore, for every such $h_0$, a solution of the initial value problem $z'=F(t,z)$, $z(b)=x_b$ on $[b-h_0,b]$ in the sense of [L1] and [L3]. [step 2.1, step 3.1, step 4.1, given, L3, L4, algebra]


5.2 Apply Picard-Lindelöf [L1] at $(b,x_b)\in D$, whose hypotheses on $F$ are exactly the assumed continuity and local Lipschitz continuity in the state variable [L2]: choose $h>0$, $r>0$ with $[b-h,b+h]\times\overline B(x_b,r)\subseteq D$ and let $y$ be the unique solution on $[b-h,b+h]$ through $(b,x_b)$ with graph in that cylinder. [step 4.1, L1, L2]


6.1 Let $h':=\min\{h,\delta/2\}>0$, where $h$ is the Picard-Lindelöf half-length of step 5.2; by step 5.2 the curve $\bar x$ is a solution on $[b-h',b]$ through $(b,x_b)$, and the restriction of $y$ is a solution on $[b-h,b]\supseteq[b-h',b]$ through the same point; by the uniqueness clause of [L1] they agree on $[b-h',b]$. Define $\tilde x:[t_0,b+h)\to\mathbb R^n$ by $\tilde x(t):=\bar x(t)$ for $t\le b$ and $\tilde x(t):=y(t)$ for $b<t<b+h$. Then $\tilde x$ is continuous, and it is differentiable with $\tilde x'(t)=F(t,\tilde x(t))$ at every $t\in[t_0,b+h)$: for $t<b$ and for $t>b$ this is the respective solution property, while at $t=b$ the left difference quotient tends to $F(b,x_b)$ by step 5.1 and the right difference quotient is the two-sided derivative $y'(b)=F(b,x_b)$ of the solution $y$; the two agree, so the derivative of $\tilde x$ at $b$ exists and equals $F(b,x_b)=F(b,\tilde x(b))$. With $\varepsilon:=h$ this is an extension as asserted in clause 1. [step 5.2, step 5.1, L1, algebra]


7.1 Under the hypotheses of clause 2, the argument of steps 1.1-6.1 applies with $K$ replaced by the given compact $K_0\subseteq U$: the bound of step 1.1 is $M:=\max\{\lVert G(z)\rVert_2:z\in K_0\}<+\infty$ by [L6], the Lipschitz estimate of step 2.1 becomes $\lVert x(t)-x(s)\rVert_2\le M(t-s)$ because $F(u,x(u))=G(x(u))$ and $x(u)\in K_0$ for $u\in(b-\delta,b)$, the limit point of step 4.1 lies in $K_0$ since $K_0$ is compact hence closed [L6], and $(b,x_b)\in\mathbb R\times U=D$ because $x_b\in K_0\subseteq U$; the local solution of step 5.2 and the gluing of step 6.1 are then carried out for the same field $F(t,z)=G(z)$ at $(b,x_b)$. This proves clause 2 with the same $\varepsilon=h$. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.2, step 5.1, step 6.1, given, L6, algebra] ∎
