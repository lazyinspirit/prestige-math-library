---
id: thm-cm-dalembert-formula-and-string-solutions
kind: theorem
title: "d'Alembert's formula solves the wave equation, is the unique $C^2$ solution, and the fixed-end sine modes solve it exactly"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period, cor-trigonometric-parity-and-pythagorean-identity, def-the-integral-function, thm-ftc-first-part, thm-ftc-second-part, def-oriented-integral, lem-integrability-on-a-subinterval, thm-additivity-over-subintervals, thm-continuous-implies-integrable, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-derivative, def-ck-euclidean-maps-and-diffeomorphisms, def-interval, thm-linearity-of-the-integral]
dependency_roles:
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-the-integral-function: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-oriented-integral: mathematical-premise
  lem-integrability-on-a-subinterval: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis), Chapter 7, Section 7.1 (the wave equation and the d'Alembert solution)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Sections 6.4–6.5 (the wave equation, its general traveling-wave solution and standing waves)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Statement

Let $c>0$.

**(a) The formula.** For every $f\in C^2(\mathbb R)$ and $g\in C^1(\mathbb R)$, the function

$$u(t,x):=\frac{f(x-ct)+f(x+ct)}{2}+\frac{1}{2c}\int_{x-ct}^{x+ct}g(s)\,ds \qquad\bigl((t,x)\in\mathbb R^2\bigr)$$

is of class $C^2$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) and satisfies

$$u_{tt}=c^2u_{xx},\qquad u(0,x)=f(x),\qquad u_t(0,x)=g(x)$$

for every $x\in\mathbb R$ ([[def-oriented-integral]], [[def-derivative]]).

**(b) Uniqueness.** If $u\in C^2(\mathbb R^2)$ satisfies $u_{tt}=c^2u_{xx}$ with $u(0,\cdot)=f$ and $u_t(0,\cdot)=g$ for $f\in C^2(\mathbb R)$, $g\in C^1(\mathbb R)$, then $u$ equals the formula in (a).

**(c) Fixed ends and modes.** Let $L>0$ and, for each integer $n\ge1$,

$$u_n(t,x):=\sin\!\Bigl(\frac{n\pi x}{L}\Bigr)\cos\!\Bigl(\frac{n\pi ct}{L}\Bigr).$$

Then each $u_n$ is $C^\infty$ on $\mathbb R^2$, satisfies $u_{tt}=c^2u_{xx}$, vanishes at $x=0$ and $x=L$ for every $t$, and has $u_n(0,x)=\sin(n\pi x/L)$, $\partial_tu_n(0,x)=0$. Every finite sum $\sum_{n\le N}\alpha_nu_n+\beta_n v_n$ with the companion modes $v_n(t,x):=\sin(n\pi x/L)\sin(n\pi ct/L)/(n\pi c/L)$ also solves the equation, vanishes at both ends and has the corresponding finite initial data.

## Facts & Assumptions

**Given:** The wave speed $c>0$; data $f\in C^2(\mathbb R)$, $g\in C^1(\mathbb R)$ in (a), (b); $L>0$ and the modes in (c).

[F1] The integral function $F(x):=\int_0^xg$ is $C^2$ with $F'=g$, and for $a<b$ the oriented integral satisfies $\int_a^bg=F(b)-F(a)$, $\int_a^b=-\int_b^a$, and additivity over subintervals; continuous functions are integrable on compact intervals ([[def-the-integral-function]], [[thm-ftc-first-part]], [[thm-ftc-second-part]], [[def-oriented-integral]], [[thm-additivity-over-subintervals]], [[lem-integrability-on-a-subinterval]], [[thm-continuous-implies-integrable]], [[thm-linearity-of-the-integral]]).

[F2] Chain rule and algebra of derivatives for compositions with the affine maps $(t,x)\mapsto x\pm ct$ ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F3] Trigonometric values and derivatives: $\sin'=\cos$, $\cos'=-\sin$, $\sin(n\pi)=0$ and $\cos(0)=1$ ([[thm-sine-and-cosine-derivatives]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-sine-and-cosine-by-power-series]]).

[F4] If $q$ is $C^2$ on an open neighbourhood of a point $(t,x)$, then $q_{tx}=q_{xt}$ there. For small $h,k>0$, the divided rectangular increment of $q$ over $[t,t+h]\times[x,x+k]$ equals the average of each mixed partial in its corresponding iterated order, by the one-variable fundamental theorem; continuity of the second partials makes the two averages tend to the respective mixed partial values, which must therefore agree ([[thm-ftc-first-part]], [[thm-continuous-implies-integrable]]).

## Proof

**Proof technique:** direct; differentiate the explicit formula, then split the solution into the two characteristic combinations for uniqueness, and verify the modes by substitution.

1.1 By [F1] write $F(x)=\int_0^xg$; then $u(t,x)=\frac{f(x-ct)+f(x+ct)}{2}+\frac{F(x+ct)-F(x-ct)}{2c}$. By [F2] (affine chain rule) and [F1], this is $C^2$ in $(t,x)$ and $$u_t=\frac{-cf'(x-ct)+cf'(x+ct)}{2}+\frac{g(x+ct)+g(x-ct)}{2},\qquad u_x=\frac{f'(x-ct)+f'(x+ct)}{2}+\frac{g(x+ct)-g(x-ct)}{2c}.$$ [given, F1, F2, algebra]

1.2 (Uniqueness.) For a $C^2$ solution $u$ set $v:=u_t+cu_x$ and $w:=u_t-cu_x$. By [F2] and the mixed-partial identity [F4], $v_t-cv_x=u_{tt}+cu_{xt}-cu_{tx}-c^2u_{xx}=0$ and $w_t+cw_x=u_{tt}-cu_{xt}+cu_{tx}-c^2u_{xx}=0$. Hence $s\mapsto v(s,x_0-cs)$ is constant for every fixed $x_0$: its derivative is $v_t-cv_x=0$ by [F2], so $v(t,x)=v(0,x+ct)=g(x+ct)+cf'(x+ct)$ for every $(t,x)$. Likewise $w(t,x)=w(0,x-ct)=g(x-ct)-cf'(x-ct)$. [given, F2, F4, algebra]

2.1 Differentiating again by [F2] and [F1], $$u_{tt}=\frac{c^2f''(x-ct)+c^2f''(x+ct)}{2}+\frac{c\,g'(x+ct)-c\,g'(x-ct)}{2},\qquad u_{xx}=\frac{f''(x-ct)+f''(x+ct)}{2}+\frac{g'(x+ct)-g'(x-ct)}{2c}.$$ Hence $u_{tt}=c^2u_{xx}$. Evaluating step 1.1 at $t=0$ gives $u(0,x)=f(x)$ and $u_t(0,x)=\frac{-cf'(x)+cf'(x)}{2}+\frac{g(x)+g(x)}{2}=g(x)$. This proves (a). [step 1.1, F1, F2, algebra]

2.2 From step 1.2, $u_t=\frac{v+w}{2}=\frac{g(x+ct)+g(x-ct)}{2}+\frac{c\,f'(x+ct)-c\,f'(x-ct)}{2}$. Since $s\mapsto u(s,x)$ is differentiable with derivative $u_t(s,x)$, the fundamental theorem [F1] gives $u(t,x)-f(x)=\int_0^tu_t(s,x)\,ds$. Substituting step 1.2 and integrating with [F1] (the substitutions $y=x+cs$ and $y=x-cs$ are affine) yields $$\int_0^t\frac{g(x+cs)+g(x-cs)}{2}ds=\frac{F(x+ct)-F(x-ct)}{2c},\qquad \int_0^t\frac{c\,f'(x+cs)-c\,f'(x-cs)}{2}ds=\frac{f(x+ct)+f(x-ct)}{2}-f(x).$$ Adding and cancelling $f(x)$ identifies $u$ with the formula of (a). This proves (b). [step 1.2, F1, F2, algebra]

3.1 (Modes.) Fix $n\ge1$ and put $\theta:=n\pi x/L$, $\varphi:=n\pi ct/L$. By [F2], $u_n$ is $C^\infty$ with $u_{n,tt}=-(n\pi c/L)^2u_n$ and $u_{n,xx}=-(n\pi/L)^2u_n$, so $u_{n,tt}=c^2u_{n,xx}$. By [F3], $u_n(t,0)=\sin0=0$ and $u_n(t,L)=\sin(n\pi)\cos\varphi=0$; $u_n(0,x)=\sin\theta\cos0=\sin\theta$ and $\partial_tu_n(0,x)=-(n\pi c/L)\sin\theta\sin0=0$. The companion mode $v_n=(L/(n\pi c))\sin\theta\sin\varphi$ satisfies $v_{n,tt}=-(n\pi c/L)^2v_n$ and $v_{n,xx}=-(n\pi/L)^2v_n$ by the same computation, has $v_n(0,x)=0$ and $\partial_tv_n(0,x)=\sin\theta$, and vanishes at both ends. Finite sums solve the linear equation and the boundary conditions because derivatives and finite sums commute; they have the corresponding finite initial data. This proves (c). [given, F2, F3, algebra] ∎

## Remarks

- Parts (a) and (b) are stated on all of $\mathbb R^2$ for $C^2$ data; no weaker regularity, no distributional solutions, and no boundary conditions enter. The formula requires $f\in C^2$, $g\in C^1$ exactly so that the displayed second derivatives exist and are continuous.

- The modes in (c) are exact solutions of the equation and of the two endpoint conditions; they are not asserted to exhaust the solutions with fixed ends, and no infinite-series representation is claimed here. The companion modes $v_n$ are normalized so that $\partial_tv_n(0,\cdot)=\sin(n\pi x/L)$; their amplitude factor has time units divided by the corresponding velocity when units are declared in a consuming model.
