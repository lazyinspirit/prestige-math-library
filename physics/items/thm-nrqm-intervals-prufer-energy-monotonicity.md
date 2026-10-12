---
id: thm-nrqm-intervals-prufer-energy-monotonicity
aliases: [nrqm-intervals-and-contacts-prufer-energy-monotonicity]
kind: theorem
domain: mathematics
title: "Prufer angle for the interval equation and strict monotonicity in the energy"
status: draft
origin: pipeline
dependency_level: 1
deps: [thm-nrqm-intervals-regular-ivp-parameter-series, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, thm-dominated-convergence, thm-continuous-implies-integrable, thm-gronwall-integral-inequality, def-countable-choice]
dependency_roles:
  thm-nrqm-intervals-regular-ivp-parameter-series: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.1 pp. 181-186 and Section 9.6 pp. 214-221 (Prufer angle, Sturm oscillation and monotonicity in the spectral parameter)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems (American Mathematical Society, Graduate Studies in Mathematics 140), Chapter 2 pp. 25-54 (first-order systems and comparison)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $0<L<\infty$ and let
$V\in C([0,L];\mathbb R)$. For $E\in\mathbb R$ let $u(\cdot,E)$ be the unique
$C^2$ solution of
$-u''+Vu=Eu,\qquad u(0,E)=0,\quad u'(0,E)=1,$
supplied by [[thm-nrqm-intervals-regular-ivp-parameter-series]] (with
$x_0=0$, $c_0=0$, $c_1=1$). Put
$r(x,E):=\bigl(u(x,E)^2+u'(x,E)^2\bigr)^{1/2}>0,\qquad
\theta(x,E):=\int_0^x\frac{u'(t,E)^2-u(t,E)u''(t,E)}{u(t,E)^2+u'(t,E)^2}\,dt .$
Then:

(a) $u=r\sin\theta$ and $u'=r\cos\theta$ on $[0,L]\times\mathbb R$, $\theta$ is
$C^1$ in $x$ with $\theta(0,E)=0$ and
$\partial_x\theta(x,E)=\cos^2\theta(x,E)+\bigl(E-V(x)\bigr)\sin^2\theta(x,E);$

(b) for every $x\in(0,L]$ the map $E\mapsto\theta(x,E)$ is differentiable on
$\mathbb R$ with
$\partial_E\theta(x,E)=\frac{\int_0^x u(t,E)^2\,dt}{u(x,E)^2+u'(x,E)^2}>0;$
in particular $E\mapsto\theta(L,E)$ is continuous and strictly increasing on
$\mathbb R$, and $E\mapsto\theta(x,E)$ is continuous on $[0,L]\times\mathbb R$;

(c) for every $E$, $\theta(x,E)>0$ for $0<x\le L$; whenever
$\theta(x_0,E)=k\pi$ for some $k\in\mathbb Z$ and $x_0\in(0,L]$, one has
$\partial_x\theta(x_0,E)=1$ and $\theta(x,E)>k\pi$ for all $x\in(x_0,L]$; if
additionally $0<k\pi<\theta(L,E)$, then the level $k\pi$ is attained at exactly
one point of $(0,L)$.

## Facts & Assumptions

**Given:** $0<L<\infty$; real continuous $V$; the solutions $u(\cdot,E)$; $r$ and $\theta$ as displayed.

[F1] For every complex $z$, the regular IVP supplier gives the unique $C^2$ solution, and $z\mapsto(u(\cdot;z),u'(\cdot;z))$ has entire dependence with locally uniform Picard series; its complex derivative satisfies $-w''+Vw-zw=u(\cdot;z)$ and $w(0)=w'(0)=0$ ([[thm-nrqm-intervals-regular-ivp-parameter-series]]). For real $E$, the coefficients and initial data are real, so complex conjugation gives another solution of the same IVP, and uniqueness implies that $u(\cdot;E)$ and $u'(\cdot;E)$ are real-valued.

[F2] Banach-valued fundamental theorem of calculus: a continuous integrand has a $C^1$ indefinite integral with derivative the integrand, and continuous functions are integrable ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]], [[thm-continuous-implies-integrable]]).

[F3] Dominated convergence permits passing to the limit under an integral whenever the integrands converge pointwise and are dominated by an integrable function ([[thm-dominated-convergence]]).

[F4] Gronwall's integral inequality: if $u\ge0$ is continuous on $[0,L]$ and $u(x)\le a+\int_0^xb(s)u(s)\,ds$ with $a\ge0$ and $b\ge0$ continuous, then $u(x)\le ae^{\int_0^xb}$ ([[thm-gronwall-integral-inequality]]).

## Proof

1.1 [The angle identity] Put $R(x):=\bigl(u(x)^2+u'(x)^2\bigr)^{1/2}$. Since $(u,u')(0)=(0,1)$, $R(0)=1$; and $R$ never vanishes: if $u(x_0)=u'(x_0)=0$ for some $x_0$, uniqueness in [F1] forces $u\equiv0$, contradicting $u'(0)=1$. Define $A(x):=u(x)\cos\theta(x)-u'(x)\sin\theta(x);$ we show $A\equiv0$. Differentiating and using $\theta'=(u'^2-uu'')/(u^2+u'^2)$, $D:=u^2+u'^2$, $A'=u'\cos\theta-u\sin\theta\,\theta'-u''\sin\theta-u'\cos\theta\,\theta' =u'\cos\theta\,(1-\theta')-(u''+u\theta')\sin\theta .$ Now $1-\theta'=(D-u'^2+uu'')/D=u(u+u'')/D$ and $u''+u\theta'=u''+\frac{u(u'^2-uu'')}{D} =\frac{u''D+uu'^2-u^2u''}{D}=\frac{u'^2(u''+u)}{D}$. Hence $A'=\frac{u'(u+u'')}{D}\bigl(u\cos\theta-u'\sin\theta\bigr) =\frac{u'(u+u'')}{D}A=:c(x)A$ with $c$ continuous, and $A(0)=0\cdot1-1\cdot0=0$; by [F2], $A(x)=\int_0^xcA$, so $|A(x)|\le\int_0^x|c|\,|A|$ and [F4] with $a=0$ gives $A\equiv0$. Therefore $u=R\sin\theta$ and $u'=R\cos\theta$: the rotation matrix identity $\begin{pmatrix}u\\u'\end{pmatrix} =\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix} \begin{pmatrix}A\\B\end{pmatrix}$ with $B:=u\sin\theta+u'\cos\theta$ gives $u=B\sin\theta$, $u'=B\cos\theta$ and $B^2=R^2-A^2=R^2$; since $B$ is continuous, $B^2=R^2>0$ and $B(0)=u(0)\sin0+u'(0)\cos0=1=R(0)$, the continuous function $B/R$ has square $1$ and value $1$ at $0$, so $B/R\equiv1$ and $B=R$. This proves the first part of (a). [F1, F2, F4, given, algebra]

1.2 [Differentiability in $E$] Let $R>0$ and consider $[0,L]\times[-R,R]$. By [F1] the maps $(x,E)\mapsto u,u'$ are continuous, so $(x,E)\mapsto q(x,E):=(u'^2-uu'')/(u^2+u'^2)$ is continuous on the compact set and, since $u^2+u'^2$ is continuous and strictly positive there, its denominator has a positive lower bound. By [F1] $u,u'$ are differentiable in $E$ with derivatives $v,v'$ continuous on $[0,L]\times[-R,R]$; hence $\partial_Eq$ is continuous on the compact set, and the difference quotients of $q$ in $E$ converge uniformly to $\partial_Eq$. Since $\theta(x,E)=\int_0^xq(t,E)dt$, the standard differentiation under the integral sign (difference quotients, [F2] for the inner integration, [F3] for the limit) gives $\partial_E\theta(x,E)=\int_0^x\partial_Eq(t,E)\,dt .$ [F1, F2, F3, algebra]

2.1 [The Prufer equation] From the integral definition, $\theta$ is $C^1$ in $x$ with $\theta(0)=0$ and $\theta'=(u'^2-uu'')/(u^2+u'^2)$. Substituting $uu''=u(V-E)u=(V-E)u^2$ and the identities of step 1.1, $\theta'=\frac{u'^2+(E-V)u^2}{u^2+u'^2} =\cos^2\theta+(E-V)\sin^2\theta,$ which completes (a). [step 1.1, F1, algebra]

2.2 [Wronskian identity] Fix $E$ and let $v:=\partial_Eu(\cdot,E)$, so $-v''+Vv-Ev=u$ and $v(0)=v'(0)=0$ by [F1]. Then $\bigl(u'v-uv'\bigr)'=u''v-uv''=(V-E)uv-u\bigl((V-E)v-u\bigr)=u^2,$ using $u''=(V-E)u$ and $v''=(V-E)v-u$. Since $u(0)=v(0)=0$, $u'(x)v(x)-u(x)v'(x)=\int_0^xu(t)^2\,dt\qquad(x\in[0,L]).$ [step 1.2, F1, F2, algebra]

3.1 [Energy derivative] Differentiate the relations $u=r\sin\theta$ and $u'=r\cos\theta$ of step 1.1 in $E$: writing $\dot r=\partial_Er$ and $\dot\theta=\partial_E\theta$, $v=\dot r\sin\theta+r\cos\theta\,\dot\theta,\qquad v'=\dot r\cos\theta-r\sin\theta\,\dot\theta .$ Multiplying the first identity by $u'=r\cos\theta$ and the second by $-u=-r\sin\theta$ and adding eliminates $\dot r$ and gives $u'v-uv'=r^2\dot\theta$, so by step 2.2 $\partial_E\theta(x,E)=\frac{u'(x)v(x)-u(x)v'(x)}{u(x)^2+u'(x)^2} =\frac{\int_0^x u(t,E)^2\,dt}{u(x,E)^2+u'(x,E)^2} .$ The denominator is the strictly positive endpoint value $r(x,E)^2$, independent of the integration variable. The numerator has nonnegative integrand and is positive for every $x>0$: $u(t,E)=t+O(t^2)$ near $t=0$ because $u(0)=0$, $u'(0)=1$ and $u'$ is continuous, so $u(t,E)^2>0$ for small $t>0$. Hence $\partial_E\theta(x,E)>0$ for every $x\in(0,L]$: $E\mapsto\theta(x,E)$ is strictly increasing, and it is continuous on $[0,L]\times\mathbb R$ by [F1] and step 1.2. This proves (b). [step 1.1, step 2.2, F1, algebra]

4.1 [Crossing structure] By (a), at a point with $\theta(x_0,E)=k\pi$ one has $\sin\theta=0$, $\cos\theta=\pm1$, hence $\partial_x\theta(x_0,E)=\cos^2\theta=1>0$. Also $\theta(0,E)=0$ and $\partial_x\theta(0,E)=1>0$, so $\theta(x,E)>0$ for all small $x>0$. We claim $\theta(x,E)>0$ for every $x\in(0,L]$: otherwise let $x_1$ be the first point in $(0,L]$ with $\theta(x_1,E)=0$; then $\theta>0$ on $(0,x_1)$ and continuity gives $\theta(x_1)=0$, so the left difference quotient of $\theta$ at $x_1$ is at most $0$, whence $\partial_x\theta(x_1,E)\le0$, contradicting $\partial_x\theta(x_1,E)=1$. The same argument at level $k\pi$ shows that once $\theta$ has crossed the level $k\pi$ from below it stays strictly above: suppose $\theta(x_0,E)=k\pi$ and there is $x_2>x_0$ with $\theta(x_2,E)\le k\pi$; let $x_1:=\inf\{x>x_0:\theta(x,E)\le k\pi\}$. Then $\theta(x_1,E)=k\pi$ and $\theta>k\pi$ on $(x_0,x_1)$, so the left difference quotient at $x_1$ is $\le0$ and $\partial_x\theta(x_1,E)\le0$, contradicting $\partial_x\theta(x_1,E)=1$. Hence $\theta(x,E)>k\pi$ for every $x\in(x_0,L]$. If $0<k\pi<\theta(L,E)$, the intermediate value theorem applied to the continuous function $\theta(\cdot,E)$ on $[0,L]$ gives some $x$ with $\theta(x,E)=k\pi$, and the just-proved strict monotonicity above the level makes this $x$ unique. This proves (c). [step 2.1, algebra] ∎
