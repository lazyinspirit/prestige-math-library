---
id: thm-nrqm-intervals-regular-ivp-parameter-series
aliases: [nrqm-intervals-and-contacts-regular-ivp-parameter-series]
kind: theorem
domain: mathematics
title: "Regular interval IVP: existence, a priori bound and entire spectral-parameter dependence"
status: draft
origin: pipeline
dependency_level: 0
deps: [thm-banach-fixed-point, thm-gronwall-integral-inequality, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, thm-tonelli-and-fubini-for-completed-product-measures, thm-continuous-implies-integrable, def-banach-space, def-countable-choice]
dependency_roles:
  thm-banach-fixed-point: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-banach-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Theorem 9.1 p. 183 (existence, uniqueness and entire dependence on the spectral parameter for regular Sturm-Liouville problems)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems (American Mathematical Society, Graduate Studies in Mathematics 140), Chapter 2 pp. 25-54 (linear systems, Gronwall estimates and continuous dependence)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $0<L<\infty$ and let
$V\in C([0,L];\mathbb C)$ with $M:=\|V\|_{C^0}=\max_{[0,L]}|V|$. For
$z\in\mathbb C$, $x_0\in[0,L]$ and $c_0,c_1\in\mathbb C$ consider the
initial value problem
$\text{(IVP)}\qquad -u''+Vu=zu,\qquad u(x_0)=c_0,\quad u'(x_0)=c_1,$
for $u\in C^2([0,L];\mathbb C)$. Then:

(a) (IVP) has exactly one solution $u(\cdot\,;z,x_0,c_0,c_1)$; it is the
unique continuous solution of the Volterra equation
$u(x)=c_0+c_1(x-x_0)+\int_{x_0}^x(x-t)\bigl(V(t)-z\bigr)u(t)\,dt
\qquad(x\in[0,L]),$
the integral over $[x_0,x]$ for $x<x_0$ carrying the negative orientation, and
$\sup_{[0,L]}|u|\le\bigl(|c_0|+|c_1|L\bigr)e^{(M+|z|)L^2};$

(b) for fixed $x_0,c_0,c_1$, put $p(x):=c_0+c_1(x-x_0)$ and, for
$f\in C([0,L];\mathbb C)$, define
$\mathcal K_zf(x):=\int_{x_0}^x(x-t)(V(t)-z)f(t)\,dt$. Then
$$u(x;z)=\sum_{n=0}^{\infty}(\mathcal K_z^np)(x)$$
and the termwise $x$-derivative series converge uniformly on
$[0,L]\times\{z\in\mathbb C:|z|\le R\}$ for every $R>0$. In particular,
$(x,z)\mapsto(u(x;z),u'(x;z))$ is continuous, and for each fixed $x$ both
$u(x;\cdot)$ and $u'(x;\cdot)$ are entire functions of $z$. The derivative
$w:=\partial_zu(\cdot\,;z)$ is the unique $C^2$ solution on $[0,L]$ of
$-w''+Vw-zw=u(\cdot\,;z),\qquad w(x_0)=0,\quad w'(x_0)=0 .$
It satisfies the associated Volterra equation
$w(x)=\int_{x_0}^x(x-t)\bigl[(V(t)-z)w(t)-u(t)\bigr]dt$.

## Facts & Assumptions

**Given:** $0<L<\infty$; $V\in C([0,L];\mathbb C)$; $z\in\mathbb C$; $x_0\in[0,L]$; $c_0,c_1\in\mathbb C$; the Banach space $X=C([0,L];\mathbb C)$ with the supremum norm.

[F1] Banach fixed point theorem: a strict contraction of a nonempty complete metric space has exactly one fixed point ([[thm-banach-fixed-point]], [[def-banach-space]]).

[F2] Gronwall's integral inequality: if $u\ge0$ is continuous and $u(x)\le a+\int_{x_0}^xb(s)u(s)ds$ with $a\ge0$ and $b\ge0$ continuous, then $u(x)\le a\exp(\int_{x_0}^xb)$; the reflected orientation holds for $x<x_0$ ([[thm-gronwall-integral-inequality]]).

[F3] Banach-valued fundamental theorem of calculus: for continuous $f:[a,b]\to X$ the indefinite Bochner integral $G(t)=\int_a^tf$ is differentiable with $G'=f$, and if $\varphi$ is continuous with continuous derivative on $(a,b)$ extending continuously to $[a,b]$, then $\int_a^b\varphi'=\varphi(b)-\varphi(a)$ ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]). For continuous complex scalar integrands, the Bochner integral in this supplier is componentwise Lebesgue integration. Separately, [[thm-continuous-implies-integrable]] asserts Riemann integrability only for continuous real-valued functions on compact intervals; applying it to the two components gives componentwise Riemann integrability, not a general Banach-valued assertion.

[F4] Fubini-Tonelli for the completed product measure permits the interchange of iterated integrals of absolutely integrable functions on $[0,L]^2$ ([[thm-tonelli-and-fubini-for-completed-product-measures]]).

## Proof

1.1 [Equivalence with the Volterra equation] Let $u\in C^2([0,L])$. If $u$ solves (IVP), then $(u')'=(V-z)u$; [F3] gives $u'(x)=c_1+\int_{x_0}^x(V-z)u$ and, integrating once more and applying [F4] to interchange the order of integration on the triangle $\{x_0\le t\le s\le x\}$ (and its mirror image for $x<x_0$), $u(x)-c_0-c_1(x-x_0)=\int_{x_0}^x(x-t)(V(t)-z)u(t)\,dt .$ Conversely, if $u\in C([0,L])$ satisfies this Volterra equation, then [F3] applied to the integrand $t\mapsto(V(t)-z)u(t)$ shows that $x\mapsto\int_{x_0}^x(x-t)(V(t)-z)u(t)dt$ is $C^1$ with derivative $\int_{x_0}^x(V(t)-z)u(t)dt$, hence $u\in C^1$ with $u'(x)=c_1+\int_{x_0}^x(V-z)u$ and, applying [F3] once more, $u\in C^2$ and $u''=(V-z)u$; the initial conditions hold at $x=x_0$. Thus (IVP) is equivalent to the Volterra equation for $C^2$ functions. [F3, F4, given]

1.2 [Contraction] The space $X$ is complete: a supremum-norm Cauchy sequence converges pointwise in $\mathbb C$, its Cauchy bounds imply uniform convergence, and its uniform limit is continuous by the triangle inequality. Fix $z$ and put $\alpha:=M+|z|$. For $\lambda>\alpha L$ define on $X=C([0,L])$ the equivalent norm $\|u\|_\lambda:=\sup_x|u(x)|e^{-\lambda|x-x_0|}$ and the map $(Tu)(x):=c_0+c_1(x-x_0)+\int_{x_0}^x(x-t)(V(t)-z)u(t)\,dt .$ For $u,v\in X$ and $x\in[0,L]$, with $r:=|x-x_0|$, substituting $t=x_0\pm s$ in the Volterra integral gives $|Tu(x)-Tv(x)|\le\alpha\int_0^r(r-s)|u-v|(x_0\pm s)\,ds$, and $|(x_0\pm s)-x_0|=s$ gives $|u-v|(x_0\pm s)\le\|u-v\|_\lambda e^{\lambda s}$; hence $|Tu(x)-Tv(x)|\le\alpha\|u-v\|_\lambda\int_0^r(r-s)e^{\lambda s}ds =\alpha\|u-v\|_\lambda\frac{e^{\lambda r}-1-\lambda r}{\lambda^2} \le\frac{\alpha r}{\lambda}e^{\lambda r}\|u-v\|_\lambda \le\frac{\alpha L}{\lambda}e^{\lambda r}\|u-v\|_\lambda,$ since $e^{\lambda r}-1-\lambda r\le\lambda re^{\lambda r}$ for $r\ge0$. Hence $\|Tu-Tv\|_\lambda\le(\alpha L/\lambda)\|u-v\|_\lambda$, a strict contraction because $\lambda>\alpha L$. By [F1] $T$ has exactly one fixed point $u\in X$. [F1, given, algebra]

2.1 [The fixed point is the solution, and the a priori bound] The fixed point satisfies the Volterra equation, so by step 1.1 it is the unique $C^2$ solution of (IVP): uniqueness follows because any $C^2$ solution satisfies the Volterra equation by step 1.1 and hence is a fixed point of $T$, and [F1] gives at most one fixed point. For the bound, put $m(r):=\sup_{x\in[0,L],\ |x-x_0|\le r}|u(x)|$ for $r\in[0,L]$; this is continuous, since uniform continuity of $u$ bounds the change when the interval endpoints move; the Volterra equation gives, for $r=|x-x_0|$, $|u(x)|\le|c_0|+|c_1|L+\alpha\int_0^r(r-s)m(s)\,ds \le|c_0|+|c_1|L+\alpha L\int_0^rm(s)\,ds,$ so $m(r)\le|c_0|+|c_1|L+\alpha L\int_0^rm(s)ds$ by taking suprema, and [F2] gives $m(r)\le(|c_0|+|c_1|L)e^{\alpha Lr}\le(|c_0|+|c_1|L)e^{\alpha L^2}$. This proves (a). [step 1.1, step 1.2, F2, algebra]

3.1 [Uniform bounds on a parameter disc] Fix $R>0$ and let $|z|\le R$; put $\alpha_R:=M+R$ and $C_R:=(|c_0|+|c_1|L)e^{\alpha_RL^2}$. By step 2.1, $\sup_{[0,L]}|u(\cdot\,;z)|\le C_R$. [step 2.1, given]

4.1 [Locally uniform Picard series] Put $p(x):=c_0+c_1(x-x_0)$ and $u_n(\cdot;z):=\mathcal K_z^np$ for $n\ge0$. Each $u_n(x;\cdot)$ is a polynomial in $z$ with continuous coefficients in $x$. For $r:=|x-x_0|$ and $|z|\le R$, induction in the Volterra integral, using its reversed orientation when $x<x_0$, gives $$|u_n(x;z)|\le (|c_0|+|c_1|L)\frac{\alpha_R^n r^{2n}}{(2n)!}.$$ For $n\ge1$, differentiating the Volterra integral gives $$|u_n'(x;z)|\le (|c_0|+|c_1|L)\frac{\alpha_R^n r^{2n-1}}{(2n-1)!}.$$ The two majorant series converge uniformly for $r\le L$, so $\sum_{n\ge0}u_n$ and $c_1+\sum_{n\ge1}u_n'$ converge uniformly on $[0,L]\times\{|z|\le R\}$. Their sums satisfy the Volterra equation and its first-derivative equation by uniform convergence under the integrals [F3]; step 2.1 identifies the first sum with $u(\cdot;z)$, and the derivative equation identifies the second with $u'(\cdot;z)$. Since this holds for every $R>0$, both are locally uniform Picard series in $z$. Uniform convergence on each product compact, whose summands are continuous in $(x,z)$, also gives joint continuity. [step 1.1, step 2.1, step 3.1, F3, given, algebra]

5.1 [Entire dependence and derivative equation] Fix $z\in\mathbb C$ and choose $R>|z|+1$. For sufficiently small complex $h$, both $z$ and $z+h$ lie in $|\zeta|\le R$. Put $e:=u(\cdot;z+h)-u(\cdot;z)$. Subtracting the two Volterra equations gives $e=\mathcal K_ze-hJu(\cdot;z+h)$, where $J:C([0,L];\mathbb C)\to C([0,L];\mathbb C)$ is defined by $(Jf)(x):=\int_{x_0}^x(x-t)f(t)\,dt$, and $e(x_0)=e'(x_0)=0$. By step 3.1 and the kernel bound, for the continuous running supremum $m(r):=\sup_{x\in[0,L],\ |x-x_0|\le r}|e(x)|$ we have $m(r)\le |h|C_RL^2/2+\alpha_RL\int_0^rm(s)\,ds$. Gronwall [F2] yields $\|e\|_\infty\le |h|C_RL^2e^{\alpha_RL^2}/2$. The differentiated equation $e'(x)=\int_{x_0}^x[(V(t)-z)e(t)-hu(t;z+h)]\,dt$ then gives $\|e'\|_\infty\le\alpha_RL\|e\|_\infty+|h|LC_R$. Let $w$ be the unique continuous solution of $w=\mathcal K_zw-Ju(\cdot;z)$, which exists by the contraction argument of step 1.2; step 1.1 makes it $C^2$ and gives $-w''+Vw-zw=u(\cdot;z)$ with zero initial data. The quotient $q_h:=e/h$ satisfies $q_h=\mathcal K_zq_h-Ju(\cdot;z+h)$. Thus $d_h:=q_h-w$ obeys $d_h=\mathcal K_zd_h-Je$. Applying the same kernel estimate and [F2] gives $\|d_h\|_\infty\le (L^2/2)\|e\|_\infty e^{\alpha_RL^2}\le |h|C_RL^4e^{2\alpha_RL^2}/4\to0$. Hence the complex derivative $\partial_zu(\cdot;z)$ exists in the supremum norm and equals $w$. Finally, $$q_h'(x)=\int_{x_0}^x[(V(t)-z)q_h(t)-u(t;z+h)]\,dt,\qquad w'(x)=\int_{x_0}^x[(V(t)-z)w(t)-u(t;z)]\,dt,$$ so $\|q_h'-w'\|_\infty\le\alpha_RL\|q_h-w\|_\infty+L\|e\|_\infty\to0$. Therefore $\partial_zu'=w'$ as well; since $z$ was arbitrary, both $u(x;\cdot)$ and $u'(x;\cdot)$ are entire, and the derivative is exactly the stated solution $w$. [step 3.1, step 4.1, step 1.2, F2, F3, algebra] ∎

