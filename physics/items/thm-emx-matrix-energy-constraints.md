---
id: thm-emx-matrix-energy-constraints
kind: theorem
title: "Energy, existence and algebraic constraints"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-emx-matrix-maxwell-system
  - lem-xd-finite-matrix-exponential-series
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - def-riemann-integral-over-a-jordan-set
  - def-jordan-inner-and-outer-content
  - def-multidimensional-darboux-integral
  - def-multidimensional-darboux-sums
  - def-multidimensional-grid-partition
  - def-multidimensional-rectangle-and-volume
  - thm-multidimensional-integral-properties
  - cor-zero-derivative-implies-constant
justified_by: []
dependency_roles:
  def-emx-matrix-maxwell-system: mathematical-premise
  lem-xd-finite-matrix-exponential-series: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  def-jordan-inner-and-outer-content: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  def-multidimensional-darboux-sums: mathematical-premise
  def-multidimensional-grid-partition: mathematical-premise
  def-multidimensional-rectangle-and-volume: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
physical_scope: "Pure mathematics; no physical premise."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
aliases: []
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Gilbert Strang, The Wave Equation and Staggered Leapfrog, MIT 18.086 lecture notes, §5.3"
      url: "https://math.mit.edu/classes/18.086/2006/am53.pdf"
      locator: "Section 5.3, first-order systems and Maxwell equations, PDF pp. 7–10."
    - title: "Marco Zank, Topics in Finite Elements, Part I: Introduction and Classical Methods for the Wave Equation, University of Vienna lecture notes"
      url: "https://www.mat.univie.ac.at/~zank/lehre/2020SS_lecture_notes_wave_equation.pdf"
      locator: "Chapter 2, §2.3, leapfrog method and discrete energy, PDF pp. 12–17."
---

## Statement

For the finite compatible matrix system on an open interval $I\subseteq\mathbb R$, let $t_0\in I$, choose initial data $e(t_0)=e_0$ and $b(t_0)=b_0$, and assume the forcing $j:I\to\mathbb R^{n_e}$ is continuous. There is a unique $C^1$ solution $(e,b)$ on all of $I$. At every $t\in I$ it satisfies

$$\frac{d}{dt}W(e(t),b(t))=-e(t)^TSe(t)-e(t)^Tj(t),\qquad Db(t)=Db(t_0),\qquad \dot q(t)=G^T(Se(t)+j(t)).$$

## Statement references

[[def-emx-matrix-maxwell-system]]

[[lem-xd-finite-matrix-exponential-series]]

## Facts & Assumptions

**Given:** The finite compatible matrix system of [[def-emx-matrix-maxwell-system]], an open interval $I$, a point $t_0\in I$, initial vectors $e_0,b_0$, and continuous forcing $j$.

[F1] The system matrices have the stated sizes, $M_e,M_b$ are symmetric positive definite, $S$ is symmetric positive semidefinite, and $DC=CG=0$ ([[def-emx-matrix-maxwell-system]]).

[F2] For a finite real square matrix $A$, $e^{tA}$ is differentiable with derivative $Ae^{tA}=e^{tA}A$, and $e^Ae^B=e^{A+B}$ when $A$ and $B$ commute ([[lem-xd-finite-matrix-exponential-series]]).

[F3] A continuous real function on a closed nondegenerate interval is Riemann integrable; apply this coordinatewise to continuous finite-dimensional vector functions ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]).

[F4] For a nondegenerate interval $J=[a,b]$, covering $J$ by itself gives outer Jordan content at most $\operatorname{vol}(J)$ and inscribing $J$ itself gives inner content at least $\operatorname{vol}(J)$; since inner content is at most outer content, $J$ is Jordan measurable ([[def-jordan-inner-and-outer-content]], [[def-multidimensional-rectangle-and-volume]]). The Riemann integral over a bounded Jordan measurable set is the integral of its zero extension over a bounding rectangle; taking $E=Q=J$ gives the rectangular integral used below ([[def-riemann-integral-over-a-jordan-set]]).

[F5] A function continuous on an interval and differentiable with zero derivative at every interior point is constant on that interval ([[cor-zero-derivative-implies-constant]]).

[F6] If $J=[a,b]$ is a nondegenerate closed interval and $\phi:J\to\mathbb R$ is continuous, then [F3] makes $\phi$ Riemann integrable and, taking $m=1$ and $Q=J$, [[thm-multidimensional-integral-properties]] gives linearity, monotonicity, integrability of $|\phi|$, $|\int_J\phi|\le\int_J|\phi|$, and additivity across any cut strictly inside $J$. By [F4], the Jordan-set integral over $J$ is this rectangular integral.

[F7] For every constant $c\in\mathbb R$, each lower and upper Darboux sum on $J=[a,b]$ equals $c(b-a)$: on each cell its infimum and supremum are $c$, the cell volumes sum to $\operatorname{vol}(J)$, and $\operatorname{vol}(J)=b-a$ for $m=1$. Thus $\int_J c=c(b-a)$ by [[def-multidimensional-darboux-sums]], [[def-multidimensional-grid-partition]], [[def-multidimensional-rectangle-and-volume]], and [[def-multidimensional-darboux-integral]].

## Proof

1.1 Put $z=(e,b)\in\mathbb R^{n_e+n_b}$ and define $A:=\begin{pmatrix}-M_e^{-1}S&M_e^{-1}C^TM_b\\-C&0\end{pmatrix}$ and $f(t):=\begin{pmatrix}-M_e^{-1}j(t)\\0\end{pmatrix}$. The inverses exist by positive definiteness in [F1]: if $M_ex=0$, then $x^TM_ex=0$ forces $x=0$, and an injective square map in finite dimensions is invertible; the same holds for $M_b$. Thus the system is exactly $z'=Az+f(t)$. [given, F1, algebra]

1.2 Let $g(s):=e^{-(s-t_0)A}f(s)$ and $H(t):=\int_{t_0}^t g(s)\,ds$, interpreting each coordinate as a Riemann integral and using the oriented convention $\int_a^b=-\int_b^a$ when $b<a$ and $\int_a^a=0$. If $n_e+n_b=0$, then $g(s)$ and $H(t)$ are the unique empty vector for all $s,t$, so $H'=g$ vacuously. Otherwise, on every nondegenerate compact segment in $I$, each coordinate of $g$ is continuous, so [F3] gives integrability and [F4] defines $H$. For each coordinate $k$, the cut-additivity in [F6], together with the oriented convention, gives $H_k(t+h)-H_k(t)=\int_t^{t+h}g_k(s)\,ds$ whenever $t,t+h\in I$: positive-oriented additivity follows by splitting at an interior point, and reversing endpoints or using a zero-length interval gives the other endpoint orders. Thus, for $h\ne0$, $\frac{H_k(t+h)-H_k(t)}{h}-g_k(t)=\frac1h\int_t^{t+h}(g_k(s)-g_k(t))\,ds$, where [F7] evaluates the integral of the constant $g_k(t)$. Given $\varepsilon>0$, continuity of $g_k$ at $t$ gives $\delta>0$ such that $|g_k(s)-g_k(t)|<\varepsilon$ whenever $|s-t|<\delta$; since $I$ is open, reduce $\delta$ so $[t-\delta,t+\delta]\subset I$. If $0<|h|<\delta$, then on $J=[\min(t,t+h),\max(t,t+h)]$ the absolute-value estimate and monotonicity in [F6], followed by [F7], give $\left|\frac1h\int_t^{t+h}(g_k(s)-g_k(t))\,ds\right|\le\frac1{|h|}\int_J|g_k(s)-g_k(t)|\,ds\le\varepsilon$. Therefore each coordinate has derivative $g_k(t)$ and $H'(t)=g(t)$ throughout $I$. [given, F3, F4, F6, F7, algebra]

2.1 Define $z(t):=e^{(t-t_0)A}(z_0+H(t))$, where $z_0=(e_0,b_0)$. By [F2] and step 1.2, the product rule gives $z'=Az+f(t)$, since $e^{(t-t_0)A}e^{-(t-t_0)A}=I$ by the commuting-product identity in [F2]; also $z(t_0)=z_0$. Thus a $C^1$ solution exists on all of $I$. If $n_e+n_b=0$, every state is the unique empty vector, so the solution is unique. Otherwise, if $\widetilde z$ is another solution with the same initial value, then $\xi(t):=e^{-(t-t_0)A}(\widetilde z(t)-z(t))$ has derivative zero by [F2] and the two differential equations. Each coordinate of $\xi$ is constant by [F5] and vanishes at $t_0$, so $\widetilde z=z$. [given, F2, F5, step 1.2, algebra]

3.1 Differentiate $W=\tfrac12(e^TM_ee+b^TM_bb)$ and substitute the system equations. Symmetry of $M_e,M_b$ gives $\dot W=e^T(C^TM_bb-Se-j)+b^TM_b(-Ce)=-e^TSe-e^Tj$, because the real scalar cross terms $e^TC^TM_bb$ and $b^TM_bCe$ are equal and cancel. [given, F1, step 2.1, algebra]

3.2 The magnetic quantity satisfies $(Db)'=D\dot b=-DCe=0$ by [F1]; each coordinate is constant by [F5], and its value at $t_0$ is $Db(t_0)$. [given, F1, F5, step 2.1, algebra]

4.1 Since $q=-G^TM_ee$, differentiation and the first system equation give $\dot q=-G^T(C^TM_bb-Se-j)=-(CG)^TM_bb+G^T(Se+j)=G^T(Se+j)$, using $CG=0$ from [F1]. This proves all three identities. [given, F1, step 2.1, algebra] ∎
