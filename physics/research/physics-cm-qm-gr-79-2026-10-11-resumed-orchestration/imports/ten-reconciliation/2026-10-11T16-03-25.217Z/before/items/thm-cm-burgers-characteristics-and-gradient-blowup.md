---
id: thm-cm-burgers-characteristics-and-gradient-blowup
kind: theorem
title: "The method of characteristics for $u_t+uu_x=0$ and the finite blow-up time of the gradient"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-ck-euclidean-maps-and-diffeomorphisms, cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image, def-metric-ball, thm-intermediate-value, thm-ftc-second-part, def-oriented-integral, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, def-derivative, thm-extreme-value-metric, thm-heine-borel-rn, def-interval]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-intermediate-value: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "L. C. Evans, Entropy and Partial Differential Equations (lecture notes), Chapter V, Section B (single conservation law: characteristics, shock formation and entropy solutions)"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics (lecture notes, TUM, Winter term 2021/22), Chapters 2–3 (characteristics and strong solutions; weak solutions)"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"

  precheck: pass
---

## Statement

Let $f\in C^2(\mathbb R)$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) be bounded (so $\|f\|_\infty<+\infty$, [[thm-extreme-value-metric]], [[thm-heine-borel-rn]]) and suppose that

$$f'(a)\ge -K\quad\text{for every }a\in\mathbb R,\qquad\text{and}\qquad f'(a_*)=-K\ \text{for some }a_*\in\mathbb R,$$

with $K>0$. Put $T_0:=1/K$, and for $0\le t<T_0$ define $\varphi_t(a):=a+t f(a)$.

**(i)** For every $t\in[0,T_0)$ the map $\varphi_t:\mathbb R\to\mathbb R$ is a $C^1$ diffeomorphism onto $\mathbb R$ ([[cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image]]), and with $a(t,x):=\varphi_t^{-1}(x)$ the **characteristic label**,

$$u(t,x):=f\bigl(a(t,x)\bigr),\qquad (t,x)\in[0,T_0)\times\mathbb R,$$

is $C^1$ jointly in $(t,x)$, satisfies $u(0,x)=f(x)$ and solves Burgers' equation

$$u_t(t,x)+u(t,x)\,u_x(t,x)=0\qquad\text{on }(0,T_0)\times\mathbb R . \tag{B}$$

**(ii)** For every $a_0\in\mathbb R$ the function $t\mapsto u(t,\varphi_t(a_0))=f(a_0)$ is constant, and the gradient along this characteristic, $q(t):=u_x(t,\varphi_t(a_0))$, satisfies $q'=-q^2$ and $q(t)=f'(a_0)/(1+tf'(a_0))$ for $0\le t<T_0$.

**(iii)** Put $x_*:=\varphi_{T_0}(a_*)=a_*+T_0f(a_*)$ and let $a(t):=a(t,x_*)$ for $0\le t<T_0$. Then $a(t)\to a_*$ and

$$\sup_{x\in\mathbb R}|u_x(t,x)|\ \ge\ |u_x(t,x_*)|\ =\ \frac{|f'(a(t))|}{1+t\,f'(a(t))}\ \longrightarrow\ +\infty\qquad(t\uparrow T_0),$$

while $|u(t,x_*)|=|f(a(t))|\le\|f\|_\infty$ stays bounded. Thus the smooth solution obtained by characteristics has a gradient blow-up at the finite time $T_0$ although the solution values and the characteristic locations remain finite; $C^1$ solvability up to time $T_0$ is not asserted.

## Facts & Assumptions

**Given:** The bounded $f\in C^2(\mathbb R)$, the constant $K>0$ with $f'\ge-K$ and $f'(a_*)=-K$, and $T_0=1/K$.

[F1] For $a<b$, $f(b)-f(a)=\int_a^bf'(s)\,ds\ge-K(b-a)$ ([[thm-ftc-second-part]], [[def-oriented-integral]]).

[F2] A continuous function on $\mathbb R$ with limits $+\infty$ and $-\infty$ at the two ends is surjective onto $\mathbb R$ ([[thm-intermediate-value]]); a $C^1$ injective map with nowhere-vanishing derivative is a $C^1$ diffeomorphism onto its image ([[cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F3] Chain rule in two variables and the algebra of derivatives ([[thm-chain-rule-for-total-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]], [[def-derivative]]).

## Proof

**Proof technique:** direct; invert the characteristic map for $t<T_0$ and differentiate the implicit relation.

1.1 Fix $t\in[0,T_0)$. If $a<b$ and $\varphi_t(a)=\varphi_t(b)$, then $b-a=-t(f(b)-f(a))\le tK(b-a)<b-a$ by [F1] and $tK<1$, a contradiction; hence $\varphi_t$ is injective. Moreover $\varphi_t(a)=a+tf(a)\to\pm\infty$ as $a\to\pm\infty$ because $f$ is bounded and $a\to\pm\infty$; by [F2] it is surjective. Finally $\varphi_t'(a)=1+tf'(a)\ge1-tK>0$, so [F2] makes $\varphi_t$ a $C^1$ diffeomorphism onto $\mathbb R$. [given, F1, F2, F3, algebra]

2.1 By step 1.1 and the construction, the map $\Phi(t,a):=(t,\varphi_t(a))$ is a $C^1$ bijection from $[0,T_0)\times\mathbb R$ onto itself with $\partial_a\varphi_t>0$; hence $a(t,x)=\varphi_t^{-1}(x)$ is well defined and, by differentiating the identity $\varphi_t(a(t,x))=x$ with [F3], $$\partial_xa(t,x)=\frac{1}{1+tf'(a(t,x))},\qquad \partial_ta(t,x)=-\frac{f(a(t,x))}{1+tf'(a(t,x))}$$ (the second identity from differentiating $a(t,x)+tf(a(t,x))=x$ in $t$). Hence $u=f\circ a$ is $C^1$ jointly, $u(0,x)=f(x)$, and by [F3] $$u_t=-f'(a)\frac{f(a)}{1+tf'(a)},\qquad u_x=\frac{f'(a)}{1+tf'(a)},\qquad u_t+u\,u_x=\frac{f'(a)}{1+tf'(a)}\bigl(-f(a)+f(a)\bigr)=0 .$$ This proves (i). [step 1.1, F3, algebra]

3.1 Fix $a_0\in\mathbb R$ and put $x(t):=\varphi_t(a_0)=a_0+tf(a_0)$; then $a(t,x(t))=a_0$, so $u(t,x(t))=f(a_0)$ is constant. By step 2.1, $q(t)=u_x(t,x(t))=f'(a_0)/(1+tf'(a_0))$, and differentiating this quotient with [F3], $$q'(t)=-\frac{f'(a_0)^2}{(1+tf'(a_0))^2}=-q(t)^2 .$$ This proves (ii). [step 2.1, F3, algebra]

4.1 For (iii), let $a(t)$ solve $a(t)+tf(a(t))=x_*$ for $0\le t<T_0$; equivalently $a(t)=\varphi_t^{-1}(x_*)$. As $t\to T_0$, $|x_*-a(t)|=t|f(a(t))|\le T_0\|f\|_\infty$, so $a(t)$ stays in the compact interval $[x_*-T_0\|f\|_\infty,x_*+T_0\|f\|_\infty]$; any limit point $a_0$ of a sequence $t_n\to T_0$ passes to the limit in $x_*=a(t_n)+t_nf(a(t_n))$, giving $x_*=a_0+T_0f(a_0)$, so $a_0=a_*$ by injectivity of $\varphi_{T_0}$ (step 1.1 with $t=T_0$). Hence $a(t)\to a_*$ and, by continuity of $f'$, $f'(a(t))\to-K$. Therefore the denominator $1+tf'(a(t))\to1-T_0K=0$ while the numerator tends to $-K\ne0$, and $|u_x(t,x_*)|=|f'(a(t))|/|1+tf'(a(t))|\to+\infty$ by step 2.1. Since this is one value of $|u_x(t,\cdot)|\le\sup_x|u_x(t,x)|$, the supremum blows up, while $|u(t,x_*)|=|f(a(t))|\le\|f\|_\infty$ remains bounded. This proves (iii). [step 2.1, step 3.1, given, algebra] ∎

## Remarks

- The hypothesis that the minimum of $f'$ is attained at $a_*$ and equals $-K$ is used only to locate the blow-up; for merely $f'\ge-K$ the solution still exists for $t<1/K$, and the bound is sharp in general.

- After $T_0$ the characteristic map is not injective (two characteristics meet), so the construction stops. The theorem constructs a classical $C^1$ solution on $[0,T_0)$ with unbounded gradient; it does not claim that no weak continuation exists, and the weak solutions are treated separately.

- The statement is purely mathematical; no physical identification of $u$ with a fluid velocity or of the blow-up with an observed phenomenon is made.
