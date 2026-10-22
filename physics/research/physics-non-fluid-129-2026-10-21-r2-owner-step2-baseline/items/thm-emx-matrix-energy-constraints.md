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
  - cor-zero-derivative-implies-constant
justified_by: []
dependency_roles:
  def-emx-matrix-maxwell-system: mathematical-premise
  lem-xd-finite-matrix-exponential-series: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
physical_scope: "Pure mathematics; no physical premise."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
aliases: []
verification:
  precheck: pending
sources:
  references:
    - title: "Gilbert Strang, The Wave Equation and Staggered Leapfrog, MIT 18.086 lecture notes, §5.3"
      url: "https://math.mit.edu/classes/18.086/2006/am53.pdf"
      locator: "Section 5.3, first-order systems and Maxwell equations, PDF pp. 7–10."
    - title: "J. Zank, Topics in Finite Elements, Part I: Wave Equation, University of Vienna lecture notes"
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

[F4] The Riemann integral over a bounded Jordan measurable set is the integral of its zero extension over a bounding rectangle; in particular it defines the componentwise interval integrals below ([[def-riemann-integral-over-a-jordan-set]]).

[F5] A function continuous on an interval and differentiable with zero derivative at every interior point is constant on that interval ([[cor-zero-derivative-implies-constant]]).

## Proof

1.1 Put $z=(e,b)\in\mathbb R^{n_e+n_b}$ and define $A:=\begin{pmatrix}-M_e^{-1}S&M_e^{-1}C^TM_b\\-C&0\end{pmatrix}$ and $f(t):=\begin{pmatrix}-M_e^{-1}j(t)\\0\end{pmatrix}$. The inverses exist by positive definiteness in [F1]: if $M_ex=0$, then $x^TM_ex=0$ forces $x=0$, and an injective square map in finite dimensions is invertible; the same holds for $M_b$. Thus the system is exactly $z'=Az+f(t)$. [given, F1, algebra]

1.2 Let $g(s):=e^{-(s-t_0)A}f(s)$ and $H(t):=\int_{t_0}^t g(s)\,ds$, interpreting each coordinate as a Riemann integral and using the oriented convention $\int_a^b=-\int_b^a$ when $b<a$. If $n_e+n_b=0$, then $g(s)$ and $H(t)$ are the unique empty vector for all $s,t$, so $H'=g$ vacuously. Otherwise, on every compact segment in $I$, each coordinate of $g$ is continuous, so [F3] gives integrability and [F4] defines $H$. For $h\ne0$ with the segment from $t$ to $t+h$ in $I$, additivity of Riemann sums gives $\frac{H(t+h)-H(t)}{h}-g(t)=\frac1h\int_t^{t+h}(g(s)-g(t))\,ds$. For each coordinate the absolute value of the right side is at most $\sup_{s\text{ between }t\text{ and }t+h}|g(s)-g(t)|$, by the defining upper and lower sum bounds; this tends to zero by continuity of $g$. Hence $H'(t)=g(t)$ throughout $I$. [given, F3, F4, algebra]

2.1 Define $z(t):=e^{(t-t_0)A}(z_0+H(t))$, where $z_0=(e_0,b_0)$. By [F2] and step 1.2, the product rule gives $z'=Az+f(t)$, since $e^{(t-t_0)A}e^{-(t-t_0)A}=I$ by the commuting-product identity in [F2]; also $z(t_0)=z_0$. Thus a $C^1$ solution exists on all of $I$. If $n_e+n_b=0$, every state is the unique empty vector, so the solution is unique. Otherwise, if $\widetilde z$ is another solution with the same initial value, then $\xi(t):=e^{-(t-t_0)A}(\widetilde z(t)-z(t))$ has derivative zero by [F2] and the two differential equations. Each coordinate of $\xi$ is constant by [F5] and vanishes at $t_0$, so $\widetilde z=z$. [given, F2, F5, step 1.2, algebra]

3.1 Differentiate $W=\tfrac12(e^TM_ee+b^TM_bb)$ and substitute the system equations. Symmetry of $M_e,M_b$ gives $\dot W=e^T(C^TM_bb-Se-j)+b^TM_b(-Ce)=-e^TSe-e^Tj$, because the real scalar cross terms $e^TC^TM_bb$ and $b^TM_bCe$ are equal and cancel. [given, F1, step 2.1, algebra]

3.2 The magnetic quantity satisfies $(Db)'=D\dot b=-DCe=0$ by [F1]; each coordinate is constant by [F5], and its value at $t_0$ is $Db(t_0)$. [given, F1, F5, step 2.1, algebra]

4.1 Since $q=-G^TM_ee$, differentiation and the first system equation give $\dot q=-G^T(C^TM_bb-Se-j)=-(CG)^TM_bb+G^T(Se+j)=G^T(Se+j)$, using $CG=0$ from [F1]. This proves all three identities. [given, F1, step 2.1, algebra] ∎
