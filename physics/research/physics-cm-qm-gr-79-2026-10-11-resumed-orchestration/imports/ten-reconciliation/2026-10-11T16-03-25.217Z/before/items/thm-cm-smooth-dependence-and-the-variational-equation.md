---
id: thm-cm-smooth-dependence-and-the-variational-equation
kind: theorem
title: "Smooth dependence of an autonomous flow on the initial condition, and the variational equation"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-local-flow-of-an-autonomous-system, def-variational-equation-along-an-ode-solution, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, thm-cm-compact-continuation-for-locally-lipschitz-odes, thm-picard-lindelof-local-existence-and-uniqueness, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-maximal-ode-solution, prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, thm-gronwall-integral-inequality, def-locally-lipschitz-in-the-state-variable, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability, thm-chain-rule-for-total-derivatives, thm-ftc-second-part, thm-norm-inequality-for-the-vector-valued-integral, thm-monotonicity-of-the-integral, def-vector-valued-derivative-and-integral, def-euclidean-inner-product, def-metric-ball, def-interval, thm-heine-borel-rn, thm-extreme-value-metric, thm-cauchy-schwarz-and-the-euclidean-norm]
dependency_roles:
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  def-variational-equation-along-an-ode-solution: mathematical-premise
  lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
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
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.4: Theorem 2.10 (the solution is C^k in the initial condition and satisfies the first variational equation), printed pages 45-48"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "J. Arino, MATH 8430 Fundamental Theory of Ordinary Differential Equations (University of Manitoba), Section 1.4 (continuous dependence and the variational equation), printed pages 32-40"
      url: "https://julien-arino.github.io/assets/pdf/courses/math8430_lecture_notes.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $F:U\to\mathbb R^n$ be of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), let $a_0\in U$, and let $T>0$, $R>0$ with $\overline B(a_0,R)\subseteq U$ ([[def-metric-ball]]). Put $M:=\sup_{\overline B(a_0,R)}\|F\|_2$ and $L:=\sup_{\overline B(a_0,R)}\|DF\|$, where $DF(x)$ is the total derivative of $F$ at $x$ with its operator norm ([[def-jacobian-matrix-and-gradient]]); both are finite. Let $0<\rho<R-MT$, so that in particular $MT<R$. Let $\Phi$ be the local flow of $x'=F(x)$ ([[def-cm-local-flow-of-an-autonomous-system]]).

Then:

1. For every $a\in\overline B(a_0,\rho)$ the maximal solution $x(\,\cdot\,;a)$ is defined on $[0,T]$ and satisfies $\|x(t;a)-a_0\|_2\le\rho+Mt<R$ for $t\in[0,T]$; moreover

$$\|x(t;a)-x(t;b)\|_2\le e^{Lt}\|a-b\|_2\qquad(a,b\in\overline B(a_0,\rho),\ t\in[0,T]),$$

and $(t,a)\mapsto x(t;a)$ is continuous on the compact set $[0,T]\times\overline B(a_0,\rho)$.

2. For every $a\in B(a_0,\rho)$ the variational equation along $x(\,\cdot\,;a)$,

$$Y'(t)=DF\bigl(x(t;a)\bigr)Y(t),\qquad Y(0)=I_n,$$

has a unique solution $Y_a:[0,T]\to M_n(\mathbb R)$ ([[def-variational-equation-along-an-ode-solution]]), and for every $t\in[0,T]$ the map $a\mapsto x(t;a)$ is differentiable on the open ball $B(a_0,\rho)$, with

$$D_a x(t;a)h=Y_a(t)h\qquad(h\in\mathbb R^n).$$

3. The map $(t,a)\mapsto Y_a(t)$ is continuous on $[0,T]\times B(a_0,\rho)$, and consequently $(t,a)\mapsto x(t;a)$ is $C^1$ there with

$$\partial_t x(t;a)=F\bigl(x(t;a)\bigr),\qquad D_a x(t;a)=Y_a(t).$$

## Facts & Assumptions

**Given:** The open set $U$, the $C^1$ field $F$, the point $a_0\in U$, the numbers $T,R>0$ with $\overline B(a_0,R)\subseteq U$, the finite constants $M,L$, and $0<\rho<R-MT$.

[F1] $F$ is continuous (differentiability implies continuity) and locally Lipschitz in the state variable: on the compact convex cylinder $[0,T]\times\overline B(a_0,R)$ the derivative bound $L$ gives $\|F(x)-F(y)\|_2\le L\|x-y\|_2$, since $F$ is $C^1$ and the segment between two points of the ball lies in the ball; and $\|F\|\le M$ there. Also $\overline B(a_0,R)$ is compact, so both suprema are attained and finite ([[def-locally-lipschitz-in-the-state-variable]], [[thm-extreme-value-metric]], [[thm-heine-borel-rn]]).

[F2] Picard-Lindelöf and maximal solutions: local solutions exist uniquely through every initial point, and every initial value problem has a unique maximal solution, of which every other solution through the same data is a restriction ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-maximal-ode-solution]], [[def-cm-local-flow-of-an-autonomous-system]]).

[F3] Compact continuation: a solution of $x'=F(x)$ whose graph approaches a compact subset of $\mathbb R\times U$ at a finite endpoint extends past that endpoint; in the autonomous case it suffices that the solution values stay in a compact subset of $U$ near the endpoint ([[thm-cm-compact-continuation-for-locally-lipschitz-odes]]).

[F4] Solutions are equivalent to solutions of the Volterra equation $x(t)=a+\int_0^tF(x(r))\,dr$, and the integral is additive over subintervals ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]], [[def-vector-valued-derivative-and-integral]], [[def-interval]]).

[F5] Norm and integral estimates: $\bigl\|\int_r^sg\bigr\|_2\le\bigl|\int_r^s\|g\|_2\bigr|$, and if $\|g\|_2\le c$ on an interval then the norm of the integral is at most $c$ times the length; the Euclidean norm satisfies the triangle inequality, and for $u\ne0$ the supremum $\sup_{\|v\|_2=1}|\langle u,v\rangle_2|$ equals $\|u\|_2$ (the value $v=u/\|u\|_2$ gives $\|u\|_2$, and Cauchy-Schwarz bounds every value by $\|u\|_2$) ([[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-monotonicity-of-the-integral]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-euclidean-inner-product]]).

[F6] Gronwall: if continuous $u:[0,T]\to\mathbb R$, $u\ge0$, satisfies $u(t)\le a(t)+\int_0^tLu$ with $L\ge0$ and nondecreasing continuous $a\ge0$, then $u(t)\le a(t)e^{Lt}$; with a constant $A$ this reads $u(t)\le Ae^{Lt}$ ([[thm-gronwall-integral-inequality]]).

[F7] $F$ is $C^1$, so for $x,y$ with the segment $[x,y]\subseteq U$ one has $F(y)-F(x)=\int_0^1DF(x+\tau(y-x))(y-x)\,d\tau$, by the chain rule for $\tau\mapsto F(x+\tau(y-x))$ and the fundamental theorem; on the compact ball this gives the uniform remainder bound $\|F(y)-F(x)-DF(x)(y-x)\|_2\le\omega(\|y-x\|_2)\|y-x\|_2$, where $\omega(s):=\sup\{\|DF(u)-DF(w)\|:u,w\in\overline B(a_0,R),\|u-w\|_2\le s\}$ and $\omega(s)\to0$ as $s\downarrow0$ by uniform continuity of $DF$ on the compact ball ([[thm-chain-rule-for-total-derivatives]], [[thm-ftc-second-part]], [[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-extreme-value-metric]]).

[F8] The linear matrix initial value problem $Y'=C(t)Y$, $Y(0)=I_n$, with $C:[0,T]\to M_n(\mathbb R)$ continuous, has a unique solution on all of $[0,T]$ ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[F9] If the partial derivatives of a map exist on a neighbourhood of a point and are continuous there, the map is totally differentiable at that point ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

## Proof

**Proof technique:** direct; first trap the solutions in a compact ball and extend them by continuation, then estimate differences with Gronwall, then compare solutions with the variational equation.

1.1 Fix $a\in\overline B(a_0,\rho)$ and let $x=x(\,\cdot\,;a):[0,\beta)\to U$ be the maximal forward solution through $a$, with $\beta\le\infty$. I claim that if $\beta\le T$ then $\|x(t)-a_0\|_2\le\rho+Mt<R$ for every $t\in[0,\beta)$. Suppose the contrary and let $t_0\in(0,\beta)$ be the first time with $\|x(t_0)-a_0\|_2=\rho+MT$ (it exists by continuity if the curve ever reaches that radius). For $t<t_0$ the curve stays closer than $\rho+MT$ to $a_0$, hence in $\overline B(a_0,R)$, so [F4] and [F5] give $\|x(t)-a\|_2\le\int_0^t\|F(x(r))\|_2\,dr\le Mt$; continuity then gives $\|x(t_0)-a_0\|_2\le\|x(t_0)-a\|_2+\|a-a_0\|_2\le Mt_0+\rho\le MT+\rho$, with equality only if $t_0=T$; since $t_0<\beta\le T$ we have $t_0<T$, a contradiction. [given, F1, F2, F4, F5, algebra]

2.1 Consequently, if $\beta\le T$ the graph of $x$ stays in the compact set $[0,T]\times\overline B(a_0,\rho+MT)\subseteq\mathbb R\times U$; by [F3] $x$ extends past $\beta$, contradicting maximality of the maximal solution ([[def-maximal-ode-solution]]). Hence $\beta>T$, so $x(\,\cdot\,;a)$ is defined on $[0,T]$, and step 1.1 gives $\|x(t;a)-a_0\|_2\le\rho+Mt\le\rho+MT<R$ there. [step 1.1, F3]

3.1 For $a,b\in\overline B(a_0,\rho)$ put $e(t):=x(t;a)-x(t;b)$. By [F4] and [F5], $\|e(t)\|_2\le\|a-b\|_2+L\int_0^t\|e(r)\|_2\,dr$ for $t\in[0,T]$, because both graphs lie in $\overline B(a_0,R)$ by step 2.1 and $\|F(x)-F(y)\|\le L\|x-y\|$ there. By [F6] with $A=\|a-b\|_2$, $\|e(t)\|_2\le e^{Lt}\|a-b\|_2$. Adding the uniform bound $\|x(t;a)-x(s;a)\|_2\le M|t-s|$ obtained from [F4] and [F5] gives continuity of $(t,a)\mapsto x(t;a)$ on $[0,T]\times\overline B(a_0,\rho)$. This is clause 1. [step 1.1, 2.1, F1, F4, F5, F6, algebra]

4.1 Fix $a\in B(a_0,\rho)$ and let $Y_a$ be the unique solution of the variational equation on $[0,T]$, which exists by [F8] since $t\mapsto DF(x(t;a))$ is continuous (composition of the continuous map $DF$ with the continuous curve $x(\,\cdot\,;a)$). For $h\in\mathbb R^n$ with $a+h\in\overline B(a_0,\rho)$ put $e_h:=x(\,\cdot\,;a+h)-x(\,\cdot\,;a)$ and $$R_h(t):=F\bigl(x(t;a+h)\bigr)-F\bigl(x(t;a)\bigr)-DF\bigl(x(t;a)\bigr)e_h(t).$$ By [F7] applied to the pair $(x(t;a+h),x(t;a))$, whose segment lies in $\overline B(a_0,R)$ by convexity, $\|R_h(t)\|_2\le\omega(\|e_h(t)\|_2)\|e_h(t)\|_2$, and by step 3.1 $\|e_h(t)\|_2\le e^{LT}\|h\|_2$. [step 3.1, F7, F8, algebra]

4.2 The map $(t,a)\mapsto Y_a(t)$ is continuous on $[0,T]\times B(a_0,\rho)$. First, $\|Y_a(t)\|_2\le e^{Lt}\le e^{LT}$ by the Volterra equation and [F6]. Second, for $a,b$ the difference $\Delta:=Y_a-Y_b$ satisfies $\Delta'=DF(x(t;a))\Delta+\bigl(DF(x(t;a))-DF(x(t;b))\bigr)Y_b$ with $\Delta(0)=0$, so [F4], [F5], [F6] and $\|Y_b\|\le e^{LT}$ give $$\|\Delta(t)\|_2\le e^{LT}\cdot T\cdot\sup_{r\in[0,T]}\|DF(x(r;a))-DF(x(r;b))\|_2\cdot e^{LT},$$ which tends to $0$ as $b\to a$ because $x(r;b)\to x(r;a)$ uniformly in $r$ by step 3.1 and $\|DF(u)-DF(w)\|\le\omega(\|u-w\|_2)$ with $\omega(s)\to0$. Finally, $Y_a$ is Lipschitz in $t$ since $Y_a(t)-Y_a(s)=\int_s^tDF(x(r;a))Y_a(r)\,dr$. Combining these three estimates proves continuity. [step 3.1, F4, F5, F6, F7, algebra]

5.1 Define $\delta_h(t):=e_h(t)-Y_a(t)h$. Differentiating and using the definitions of $e_h$, $R_h$ and $Y_a$ gives $\delta_h'(t)=DF(x(t;a))\delta_h(t)+R_h(t)$ with $\delta_h(0)=0$; hence, by [F4] applied to the curve $\delta_h$ and [F5], $$\|\delta_h(t)\|_2\le\int_0^t\|R_h(r)\|_2\,dr+L\int_0^t\|\delta_h(r)\|_2\,dr .$$ Since $r\mapsto\int_0^r\|R_h\|_2$ is nondecreasing, [F6] gives $\|\delta_h(t)\|_2\le e^{Lt}\int_0^t\|R_h(r)\|_2\,dr\le e^{2LT}T\,\omega(e^{LT}\|h\|_2)\,\|h\|_2$ for $\|h\|_2\le e^{-LT}$; dividing by $\|h\|_2$ and letting $h\to0$ yields $\|x(t;a+h)-x(t;a)-Y_a(t)h\|_2/\|h\|_2\to0$ uniformly in $t\in[0,T]$. Hence $a\mapsto x(t;a)$ is differentiable on $B(a_0,\rho)$ with $D_ax(t;a)h=Y_a(t)h$ for every $t$. This is clause 2. [step 4.1, F4, F5, F6, F7, algebra]

6.1 On $[0,T]\times B(a_0,\rho)$ the map $(t,a)\mapsto x(t;a)$ has continuous partial derivative in $t$, namely $F(x(t;a))$ (composition of continuous maps, using that the curve $t\mapsto x(t;a)$ solves the equation), and continuous partial derivative in the $a$-variable, namely $Y_a(t)$, by step 4.2; here we view $D_ax(t;a)$ as the matrix $Y_a(t)$. By [F9] the map is totally differentiable at every point of the open set, and its total derivative depends continuously on $(t,a)$; that is, it is $C^1$ there in the sense of [[def-ck-euclidean-maps-and-diffeomorphisms]], with the displayed partial derivatives. This is clause 3. [step 5.1, 4.2, F9] ∎

## Remarks

- The hypothesis $\rho+MT<R$ is a genuine trapping condition: it keeps the whole graph of every considered solution in a compact subset of the domain, which is what lets [[thm-cm-compact-continuation-for-locally-lipschitz-odes]] extend the maximal solution to the full interval $[0,T]$. The conclusion is local in the initial condition and in time, and no claim is made that $D_ax(t;a)$ is defined at the boundary of the ball or for $t$ outside $[0,T]$.

- The proof actually shows more than stated: $\|x(t;a+h)-x(t;a)-Y_a(t)h\|_2\le e^{2LT}T\omega(e^{LT}\|h\|_2)\|h\|_2$, an explicit first-order error bound. The nonautonomous analogue (with $F=F(t,x)$ and the variational equation along a solution on a compact interval) is the same computation with the time variable kept, and is not needed in this batch.
