---
id: lem-em-global-retarded-root
kind: lemma
domain: mathematics
title: "Global existence, uniqueness and differentiability of the retarded root"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 0
deps: [lem-test-function-cutoffs-and-euclidean-localization, thm-extreme-value-metric, thm-heine-borel-rn, def-vector-valued-derivative-and-integral, cor-vector-valued-ftc-and-lipschitz-bound, thm-intermediate-value, thm-parametrized-implicit-function-theorem-with-higher-regularity, def-ck-euclidean-maps-and-diffeomorphisms, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-euclidean-inner-product, lem-reverse-triangle-inequality-in-a-normed-space, thm-cauchy-schwarz-and-the-euclidean-norm, thm-algebra-of-continuous-functions, cor-differentiable-implies-continuous, thm-componentwise-limits-and-continuity, thm-higher-regularity-of-local-inverses, thm-real-power-continuity-and-derivatives, thm-algebra-of-derivatives]
dependency_roles:
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-intermediate-value: mathematical-premise
  thm-parametrized-implicit-function-theorem-with-higher-regularity: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-reverse-triangle-inequality-in-a-normed-space: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  thm-higher-regularity-of-local-inverses: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (University of California, Davis; revised 6/18/2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Ch. 2.6-2.7 (fundamental solution and Newtonian potential, printed pp. 32-40), context for the Euclidean-distance kernels only; the implicit-function step uses the exact local supplier cited in L5; the all-time uniformly subluminal existence/uniqueness, the squared-equation formulation and the C^1 non-improvement witness are proved locally here."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $c>0$, $0\le v_*<c$, and $z:\mathbb R\to\mathbb R^3$ be $C^1$ with $|z'(s)|\le v_*$ for all $s$. For every $(x,t)\in\mathbb R^3\times\mathbb R$ there is exactly one real root $s=s(x,t)$ of $t-s=|x-z(s)|/c$, and $s\le t$. Equality holds exactly when $x=z(t)$. Thus on the open off-instantaneous-worldline domain $D=\{(x,t):x\ne z(t)\}$ one has $s<t$, $r=|x-z(s)|=c(t-s)>0$, and the root is $C^1$. With $n=(x-z(s))/r$, $\beta=z'(s)/c$, and $\kappa=1-n\cdot\beta$, its derivatives are $\partial_t s=1/\kappa$ and $\nabla_xs=-n/(c\kappa)$, where $1-v_*/c\le\kappa\le1+v_*/c$. If $z$ is $C^k$, for an integer $k\ge1$, the root is $C^k$ on $D$; in particular a $C^3$ trajectory gives a $C^3$ root. A smooth trajectory gives a smooth root. No higher regularity follows from a merely $C^1$ trajectory. These claims concern an all-time uniformly subluminal prescribed history; no finite-history or nonuniform-light-speed-limit assertion is made.

## Facts & Assumptions

**Given:** Reals $c>0$ and $0\le v_*<c$, a $C^1$ map $z:\mathbb R\to\mathbb R^3$ with $|z'(s)|\le v_*$ for all $s$, and a point $(x,t)\in\mathbb R^3\times\mathbb R$. The Euclidean norm $|\cdot|$ is that of [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]].

[L1] [[cor-vector-valued-ftc-and-lipschitz-bound]]: if $f:[a,b]\to\mathbb R^m$ is continuous on $[a,b]$, differentiable at every point of $(a,b)$ and $\|f'\|\le M$ there, then $\|f(u)-f(v)\|\le M|u-v|$ for all $u,v\in[a,b]$; and if $f'$ is integrable then $\int_a^bf'=f(b)-f(a)$.

[L2] [[lem-reverse-triangle-inequality-in-a-normed-space]]: $\bigl|\|u\|-\|v\|\bigr|\le\|u-v\|$; [[thm-cauchy-schwarz-and-the-euclidean-norm]] makes $|\cdot|$ a norm on $\mathbb R^3$, so this reverse triangle inequality and the ordinary triangle inequality hold for $|\cdot|$.

[L3] Continuity of the data and of $g$: [[def-vector-valued-derivative-and-integral]] and [[def-ck-euclidean-maps-and-diffeomorphisms]] make $C^k$ maps and their derivatives componentwise, and [[thm-componentwise-limits-and-continuity]] with [[cor-differentiable-implies-continuous]] make a differentiable $\mathbb R^3$-valued map continuous. [[thm-algebra-of-continuous-functions]] gives continuity of sums and scalar multiples on real domains. For maps on a Euclidean domain, continuity of sums follows directly from $|a+b|\le|a|+|b|$; continuity of a composite follows by first taking the outer continuity tolerance and then the inner continuity radius. In particular $z$ is continuous, $s\mapsto x-z(s)$ is continuous, the norm is $1$-Lipschitz and continuous, and $g_x(s)=s+|x-z(s)|/c$ is continuous on $\mathbb R$.

[L4] [[thm-intermediate-value]]: a continuous real function on a closed bounded interval takes every value between its endpoint values.

[L5] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: for $k,m,n\ge1$, $p\in\mathbb N$, open $U\subseteq\mathbb R^{m+n+p}$ and $F:U\to\mathbb R^n$ of class $C^k$, if $F(a,b,\lambda_0)=0$ and $D_yF(a,b,\lambda_0)$ is invertible, then near $(a,\lambda_0)$ the equation $F(x,y,\lambda)=0$ is equivalent to $y=\varphi(x,\lambda)$ for a unique $C^k$ map $\varphi$, and $D\varphi=-D_yF^{-1}D_{(x,\lambda)}F$. [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]: finite sums, products and composites of $C^k$ Euclidean maps are $C^k$.

[L6] [[thm-higher-regularity-of-local-inverses]]: a $C^k$ map with invertible derivative at a point has $C^k$ local inverses there. [[thm-real-power-continuity-and-derivatives]]: $(x^\alpha)'=\alpha x^{\alpha-1}$ on $(0,\infty)$, in particular $(d/dh)h^{3/2}=(3/2)h^{1/2}$ for $h>0$; [[thm-algebra-of-derivatives]]: sums, scalar multiples, products and quotients of differentiable functions are differentiable with the usual rules.


[L7] **Cutoffs and compact bounds.** In ZF, for compact $K\subseteq\Omega\subseteq\mathbb R$ with $\Omega$ open there is $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ on a neighbourhood of $K$ ([[lem-test-function-cutoffs-and-euclidean-localization]]). Closed bounded real intervals are compact ([[thm-heine-borel-rn]]), and a continuous real function on a nonempty compact metric space attains finite extrema ([[thm-extreme-value-metric]]). These supply the cutoff and the bounds on $f,f'$ in the sharpness branch.

## Proof

1.1 For all $s_1,s_2\in\mathbb R$ the restriction of $z$ to the interval with endpoints $s_1,s_2$ is continuous with derivative bounded by $v_*$ at interior points, so [L1] gives $|z(s_2)-z(s_1)|\le v_*|s_2-s_1|$; consequently $z$, and by [L3] each map $s\mapsto g_x(s)=s+|x-z(s)|/c$, is continuous. [L1, L3]

2.1 For $s_2>s_1$ the reverse triangle inequality [L2] gives $|x-z(s_2)|\ge|x-z(s_1)|-|z(s_2)-z(s_1)|$, so by step 1.1 $g_x(s_2)-g_x(s_1)\ge(s_2-s_1)-\frac{v_*}{c}(s_2-s_1)=(s_2-s_1)\bigl(1-\frac{v_*}{c}\bigr)>0$: the map $g_x$ is strictly increasing and $g_x(s)\ge s$ for every $s$. Moreover $|x-z(s)|\le|x-z(0)|+|z(s)-z(0)|\le|x-z(0)|+v_*|s|$, so for $s<0$ one has $g_x(s)\le s+\frac{|x-z(0)|-v_*s}{c}=s\bigl(1-\frac{v_*}{c}\bigr)+\frac{|x-z(0)|}{c}$. [step 1.1, L2, algebra]

3.1 Given $t$, put $C=|x-z(0)|/c$ and choose $s_+=\max(t,0)+1$ and $s_-=\min\bigl(0,t,\frac{t-C}{1-v_*/c}\bigr)-1$, so that $s_-<t<s_+$; step 2.1 gives $g_x(s_+)\ge s_+>t$ and $g_x(s_-)<t$. Since $g_x$ is continuous by step 1.1, [[thm-intermediate-value]] on the nondegenerate interval $[s_-,s_+]$ supplies a root $s$ of $g_x(s)=t$, i.e. of $t-s=|x-z(s)|/c$. If $s_1<s_2$ were two roots then $g_x(s_1)=g_x(s_2)$ would contradict the strict increase of step 2.1, so this root is unique; it satisfies $s\le t$ because $g_x(s)\ge s$, with $s=t$ if and only if $|x-z(t)|=0$, that is if and only if $x=z(t)$. Hence off the instantaneous trajectory, where $x\ne z(t)$, one has $s<t$ and $r=|x-z(s)|=c(t-s)>0$, and the set $D=\{(x,t):x\ne z(t)\}$ is open because $z$ is continuous. [step 1.1, step 2.1, L3, L4, algebra]

4.1 Fix $(x_0,t_0)\in D$, let $s_0=s(x_0,t_0)$, $r_0=|x_0-z(s_0)|=c(t_0-s_0)>0$, $n_0=(x_0-z(s_0))/r_0$, $\beta_0=z'(s_0)/c$ and $\kappa_0=1-n_0\cdot\beta_0$. Since $|n_0|=1$ and $|\beta_0|\le v_*/c<1$, one has $1-v_*/c\le\kappa_0\le1+v_*/c$ and $\kappa_0>0$. [step 3.1, L1, algebra]

5.1 Define $F(x,\tau,y)=c^2(\tau-y)^2-|x-z(y)|^2$ on $\mathbb R^5$. Each component of $z$ is $C^k$ and the expression is a finite sum of products of $C^k$ functions composed with $z$, so $F$ is $C^k$ by [L5]. At the base point of step 4.1, $F(x_0,t_0,s_0)=c^2(t_0-s_0)^2-r_0^2=0$, and computing the partial $y$-derivative along the differentiable curve $y\mapsto z(y)$ gives $\partial_yF(x_0,t_0,s_0)=-2c^2(t_0-s_0)+2(x_0-z(s_0))\cdot z'(s_0)=-2cr_0+2r_0\,c\,\beta_0\cdot n_0=-2cr_0\kappa_0\ne0$. The parametrized implicit function theorem [L5] (with $y=s$, parameters $(x,\tau)$) therefore gives open neighbourhoods $P\ni(x_0,t_0)$, $Q\ni s_0$ and a unique $C^k$ map $\varphi:P\to Q$ with $F(x,\tau,\varphi(x,\tau))=0$ on $P$ and $D\varphi=-D_yF^{-1}D_{(x,\tau)}F$. [step 4.1, L5, algebra]

6.1 By [L3] the map $(x,\tau)\mapsto\varphi(x,\tau)-\tau$ is continuous and negative at $(x_0,t_0)$ because $\varphi$ is continuous with $\varphi(x_0,t_0)=s_0<t_0$; shrinking $P$ if necessary, $\varphi(x,\tau)<\tau$ there. On that neighbourhood $F=0$ reads $c^2(\tau-\varphi)^2=|x-z(\varphi)|^2$ with $\tau-\varphi>0$, hence $\tau-\varphi=|x-z(\varphi)|/c$, that is $g_x(\varphi)=\tau$; by uniqueness of the root (step 3.1) $\varphi=s$. Thus $s$ is $C^k$ on a neighbourhood of $(x_0,t_0)$; since $(x_0,t_0)\in D$ and $k\ge1$ were arbitrary (and a smooth $z$ is $C^k$ for every $k$), $s$ is $C^k$ on $D$, and smooth when $z$ is smooth. [step 5.1, step 3.1, L3, L5]

6.2 Reading off the displayed derivative formula at the base point of step 5.1, $\partial_\tau F(x_0,t_0,s_0)=2c^2(t_0-s_0)=2cr_0$ and $\partial_{x_i}F(x_0,t_0,s_0)=-2(x_0-z(s_0))_i=-2r_0n_{0,i}$, so $\partial_ts=\partial_\tau\varphi=-\partial_\tau F/\partial_yF=1/\kappa_0$ and $\partial_{x_i}s=-\partial_{x_i}F/\partial_yF=-n_{0,i}/(c\kappa_0)$; since the point was arbitrary in $D$, the same formulas hold on all of $D$, with $1-v_*/c\le\kappa\le1+v_*/c$ by step 4.1. [step 4.1, step 5.1, L1, algebra]

7.1 For the sharpness clause use [L7] with $K=[-1,1]\subset(-2,2)$ to choose $\chi\in C^\infty(\mathbb R)$ with $0\le\chi\le1$, $\chi=1$ on $(-1,1)$ and $\chi=0$ outside $(-2,2)$, and put $f(s)=\chi(s)|s|^{3/2}$. Then $f$ is $C^1$: on $(0,1)$ it equals $s^{3/2}$ with derivative $(3/2)s^{1/2}$, on $(-1,0)$ it equals $(-s)^{3/2}$ with derivative $-\frac32(-s)^{1/2}$ by [L6]; away from $0$ it is the smooth product of $\chi$ and $|s|^{3/2}$, and its derivative vanishes outside the compact cutoff support, and at $0$ the difference quotient is $|h|^{3/2}/h=\operatorname{sgn}(h)|h|^{1/2}\to0$, so $f'(0)=0$; $f'$ is continuous on the compact interval $[-2,2]$ and zero outside it, so [L7] gives a finite bound $C_f:=\max_{[-2,2]}|f'|$; the same supplier bounds $f$ globally. Choose $\varepsilon>0$ with $\varepsilon C_f<c/2$ and set $z(s)=(\varepsilon f(s),0,0)$, a $C^1$ trajectory with $|z'|\le v_*:=\varepsilon C_f<c$; fix $L>2\varepsilon\sup_s f(s)$ and $x=(L,0,0)$, so $|x-z(s)|=L-\varepsilon f(s)$ and the equation $g_x(s)=t$ reads $s+\bigl(L-\varepsilon f(s)\bigr)/c=:g(s)=t$. One has $g'(s)=1-\varepsilon f'(s)/c\ge1-\varepsilon C_f/c>1/2>0$, so $g$ is strictly increasing, and the root map $s$ is the inverse of $g$. At $0$ one has $g(0)=L/c=:t_0$ and $g'(0)=1-\varepsilon f'(0)/c=1$, hence $s'(t_0)=1/g'(0)=1\ne0$; if $s$ were $C^2$ near $t_0$, then by [L6] (applied to the $C^2$ map $s$ with invertible derivative $1$ at $t_0$) its local inverse, namely $g$, would be $C^2$ near $0$. But $f'(h)=(3/2)h^{1/2}$ for small $h>0$, so $\bigl(g'(h)-g'(0)\bigr)/h=-\frac{\varepsilon}{c}\cdot\frac{(3/2)h^{1/2}}{h}=-\frac{3\varepsilon}{2c}h^{-1/2}\to-\infty$ as $h\downarrow0$: $g$ is not twice differentiable at $0$, a contradiction. Hence a merely $C^1$ trajectory need not give a $C^2$ root. [step 6.2, L6, L7, algebra]

8.1 Collecting: existence, uniqueness, $s\le t$ with equality exactly on $x=z(t)$, and the open domain $D$ with $s<t$, $r>0$ are step 3.1; $C^k$ (hence $C^1$, and smooth for smooth $z$) regularity on $D$ is step 6.1; the derivative formulas and the bound $1-v_*/c\le\kappa\le1+v_*/c$ are steps 4.1 and 6.2; the non-improvement witness for a merely $C^1$ trajectory is step 7.1. No Choice principle is used anywhere. [step 3.1, step 4.1, step 6.1, step 6.2, step 7.1] ∎
