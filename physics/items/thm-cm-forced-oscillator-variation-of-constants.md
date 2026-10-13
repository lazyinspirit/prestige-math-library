---
id: thm-cm-forced-oscillator-variation-of-constants
kind: theorem
title: "The forced oscillator with $k\\ge0$: unique global solution and the convolution (Green's function) formula"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-oscillator-model-and-phase-system, thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases, lem-cm-convolution-differentiation, cor-cm-variation-of-constants-for-linear-systems, def-derivative, def-interval]
dependency_roles:
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  prop-cm-oscillator-degenerate-and-repulsive-cases: mathematical-premise
  lem-cm-convolution-differentiation: mathematical-premise
  cor-cm-variation-of-constants-for-linear-systems: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: constructive
sources:
  references:
  - title: 'K. Likharev, Essential Graduate Physics, Classical Mechanics (complete 252-page volume), Chapter 5 Section 5.1, Eqs. (5.13)-(5.18) and (5.27)-(5.30): the forced equation, the response function and the temporal Green''s function $q(t)=\int f(t'')G(t-t'')\,dt''$, printed pages 3-7 of Chapter 5 (PDF pages 89-93)'
    url: https://essentialgraduatephysics.org/Files/CM%20merged.pdf
  - title: G. Teschl, Ordinary Differential Equations and Dynamical Systems (retrieved 365-page online edition), Section 3.4, Theorem 3.12 and Eqs. (3.92)-(3.97), printed pp. 83-84 (continuous inhomogeneous linear forcing).
    url: https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf
verification:
  precheck: pass
---

## Statement

Let $m>0$, $c\ge0$, $k\ge0$, let $I\subseteq\mathbb R$ be an interval with nonempty interior ([[def-interval]]) and let $f:I\to\mathbb R$ be continuous. Fix $t_0\in I$ and data $(x_0,v_0)\in\mathbb R^2$. Let $g:\mathbb R\to\mathbb R$ be the (unique) solution of the associated homogeneous model with time domain $\mathbb R$ and zero forcing, with $g(0)=0$ and $g'(0)=1/m$.

Then:

1. There is exactly one solution $x:I\to\mathbb R$ of the forced model $m\,x''+c\,x'+k\,x=f$ with $x(t_0)=x_0$ and $x'(t_0)=v_0$. It is twice differentiable on $I$, with derivatives at included endpoints taken relative to $I$, and $x''$ is continuous on $I$ in its relative topology.
2. If $x_h:\mathbb R\to\mathbb R$ is any homogeneous solution with $x_h(t_0)=x_0$ and $x_h'(t_0)=v_0$ (it exists and is unique by [[thm-cm-homogeneous-oscillator-solution-classification]] and [[prop-cm-oscillator-degenerate-and-repulsive-cases]]), then
$$x(t)=x_h(t)+\int_{t_0}^tg(t-s)f(s)\,ds\qquad(t\in I).$$

## Remarks

- **Explicit kernel.** For $k>0$ and $c=0$ one has $g(t)=\frac{\sin(\omega_0t)}{m\omega_0}$ with $\omega_0=\sqrt{k/m}$; for $k>0$, $c>0$ and $4mk>c^2$ one has $g(t)=\frac{e^{-\gamma t}\sin(\omega t)}{m\omega}$ with $\gamma=c/(2m)$ and $\omega=\sqrt{k/m-\gamma^2}$; for $k=0$, $c>0$ one has $g(t)=\frac{1-e^{-ct/m}}{c}$; and for $k=c=0$ one has $g(t)=t/m$. These are the solutions of the homogeneous initial value problem displayed in [[thm-cm-homogeneous-oscillator-solution-classification]] clauses 1-3 and [[prop-cm-oscillator-degenerate-and-repulsive-cases]] clauses 1-2, read off at the data $(0,1/m)$; the overdamped case $\Delta>0$ has the two-exponential form $g(t)=\frac{e^{\lambda_+t}-e^{\lambda_-t}}{m(\lambda_+-\lambda_-)}$.
- **Scope.** This is a statement about the linear model of [[def-cm-oscillator-model-and-phase-system]] only: $f$ is an arbitrary continuous real function, and no physical interpretation of $m,c,k$ or of the formula as a superposition of physical impulses is asserted. The name "Green's function" here denotes the kernel $g$ of the convolution formula, not a distribution-theoretic object.

## Facts & Assumptions

**Given:** The parameters $m>0$, $c\ge0$, $k\ge0$, the interval $I$ with nonempty interior, the continuous $f:I\to\mathbb R$, the point $t_0\in I$ and the data $(x_0,v_0)$. The homogeneous kernel $g$ and member $x_h$ solve the associated all-$\mathbb R$ homogeneous model; the forced model uses the given time domain $I$. No extension of $f$ outside $I$ is used.

[F1] The model and its phase-plane system are those of [[def-cm-oscillator-model-and-phase-system]]; $x$ solves the forced model on $I$ exactly when $t\mapsto(x(t),x'(t))$ solves $z'=G_f(t,z)$ on $I$. [given]

[F2] For $k>0$ the homogeneous model has exactly one global solution for every initial datum, and its three explicit solution families are those of [[thm-cm-homogeneous-oscillator-solution-classification]] clauses 1-3; in particular the solution $g$ with data $(0,1/m)$ exists, is unique and is defined on all of $\mathbb R$. [given]

[F3] For $k=0$ the homogeneous model has exactly the solution families of [[prop-cm-oscillator-degenerate-and-repulsive-cases]] clauses 1-2, and every interval solution extends to a global member; in particular $g$ with data $(0,1/m)$ exists, is unique and is defined on all of $\mathbb R$. [given]

[F4] Convolution differentiation ([[lem-cm-convolution-differentiation]]): if $I$ is an interval, $t_0\in I$, $U$ is open with $I-I\subseteq U$, $G:U\to M_n(\mathbb R)$ is $C^1$ and $b:I\to\mathbb R^n$ is continuous, then $t\mapsto\int_{t_0}^tG(t-s)b(s)\,ds$ is differentiable with derivative $G(0)b(t)+\int_{t_0}^tG'(t-s)b(s)\,ds$. Here $n=1$, $U=\mathbb R$, $G=g$; when $g$ is $C^2$, the same application with $G=g'$ is legitimate. [given]

[F5] Homogeneous uniqueness from [[cor-cm-variation-of-constants-for-linear-systems]]: for a fixed $A\in M_2(\mathbb R)$ and the globally continuous forcing $b_0(t)\equiv0$, the global solution of $z'=Az+b_0$ with zero datum is $z\equiv0$, and every differentiable solution on an interval containing its initial time with that datum is its restriction. [given]

## Proof

**Proof technique:** constructive; build the solution as homogeneous solution plus convolution with the kernel $g$, verify the equation by two applications of the convolution lemma, and invoke the variation-of-constants uniqueness.

1.1 The kernel $g$ exists, is unique and is defined on all of $\mathbb R$ by [F2] (case $k>0$) and [F3] (case $k=0$), with $g(0)=0$ and $g'(0)=1/m$. Since $g$ solves $m\,g''+c\,g'+k\,g=0$, we have $g''=-(c\,g'+k\,g)/m$; the right-hand side is continuous because $g$ and $g'$ are, so $g''$ is continuous and $g$ is of class $C^2$ on $\mathbb R$. [F2, F3]

2.1 Put $F(t):=\int_{t_0}^tg(t-s)f(s)\,ds$ for $t\in I$. Applying [F4] with kernel $g$ and $b:=f$ gives, at every interior point, $$F'(t)=g(0)f(t)+\int_{t_0}^tg'(t-s)f(s)\,ds=\int_{t_0}^tg'(t-s)f(s)\,ds,$$ and applying [F4] once more with the $C^1$ kernel $g'$ (legitimate by step 1.1) gives $$F''(t)=g'(0)f(t)+\int_{t_0}^tg''(t-s)f(s)\,ds=\frac{f(t)}{m}+\int_{t_0}^tg''(t-s)f(s)\,ds .$$ If $I$ includes an endpoint, the same split-difference-quotient argument as in the proof of [[lem-cm-convolution-differentiation]] applies with increments $h$ restricted to the side lying in $I$; it gives these formulas for the domain-relative endpoint derivatives, first for $F$ with kernel $g$ and then for $F'$ with kernel $g'$. The displayed right-hand sides are continuous on $I$, since $f,g,g',g''$ are continuous and the integrals vary continuously on compact subintervals. In particular $F(t_0)=0$ and $F'(t_0)=0$. [step 1.1, F4]

3.1 Let $x_h$ be a homogeneous solution with the data $(x_0,v_0)$ (existing by [F2], [F3]) and set $x:=x_h+F$ on $I$. [construct] Then $x$ is twice differentiable on $I$ with continuous second derivative, using domain-relative derivatives at included endpoints, and, by step 2.1 and the linearity of the differential expression, $$m\,x''+c\,x'+k\,x=(m\,x_h''+c\,x_h'+k\,x_h)+m\,F''+c\,F'+k\,F=f(t)+\int_{t_0}^t\bigl(m\,g''+c\,g'+k\,g\bigr)(t-s)f(s)\,ds=f(t),$$ because the bracket vanishes identically by step 1.1. Moreover $x(t_0)=x_h(t_0)+F(t_0)=x_0$ and $x'(t_0)=x_h'(t_0)+F'(t_0)=v_0$. [step 2.1, F1, F2, F3, construct]

4.1 Uniqueness: let $\widetilde x:I\to\mathbb R$ be any other solution with the prescribed data and put $u:=\widetilde x-(x_h+F)$, where $x_h+F$ is the constructed solution of step 3.1. By linearity, $u$ solves the homogeneous equation on $I$ with $u(t_0)=u'(t_0)=0$. Its phase curve $U(t):=(u(t),u'(t))$ therefore solves $U'=AU$ on $I$ with $U(t_0)=0$, where $A=\begin{pmatrix}0&1\\-k/m&-c/m\end{pmatrix}$. Apply [F5] with the globally continuous forcing $b_0\equiv0$: the unique global solution from zero data is zero, and clause 3 of the matrix variation-of-constants result makes every interval solution with the same data its restriction. Thus $U=0$ and $\widetilde x=x_h+F$. This proves uniqueness using only a forcing defined on its actual domain $I$ for the constructed solution. [step 3.1, F1, F5, discharge-construct: the constructed convolution is the unique solution] ∎
