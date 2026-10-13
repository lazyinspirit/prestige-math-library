---
id: prop-cm-oscillator-boundary-value-nonuniqueness
kind: proposition
title: "The undamped oscillator: Dirichlet non-uniqueness at $T=n\\pi/\\omega$ despite unique initial-value solutions"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-oscillator-model-and-phase-system, thm-cm-homogeneous-oscillator-solution-classification, def-cm-time-dependent-lagrangian-and-action, thm-cm-stationarity-iff-euler-lagrange, thm-of-square-roots, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period, thm-chain-rule-for-total-derivatives, def-derivative, def-interval]
dependency_roles:
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-cm-homogeneous-oscillator-solution-classification: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics (complete volume), Chapter 5 Section 5.1, Eqs. (5.1)-(5.3): the harmonic oscillator equation and its two-constant oscillatory solution, printed pages 1-2 of Chapter 5 (PDF pages 87-88)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.6 and the start of Section 2.6.1, printed pages 37-41: linearised oscillations about an equilibrium with arbitrary two-constant families, and the statement that the solution of a linearised system matches prescribed initial data uniquely"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $m>0$ and $k>0$, put $\omega:=(k/m)^{1/2}>0$ ([[thm-of-square-roots]]), and let $T>0$.
Consider the undamped homogeneous oscillator equation

$$m\,x''(t)+k\,x(t)=0$$

of [[def-cm-oscillator-model-and-phase-system]] with time domain $I=\mathbb R$ and zero forcing, and its solutions on intervals with nonempty interior. The Dirichlet curves below are restrictions to $[0,T]$ of its global solutions. Then:

1. for every real $A$ the function $x_A(t):=A\sin(\omega t)$ is a $C^2$ (indeed $C^\infty$)
   solution on $\mathbb R$ with $x_A(0)=0$ and $x_A(T)=A\sin(\omega T)$; moreover $x_A(T)=0$ if
   and only if $A=0$ or $\omega T\in\pi\mathbb Z$
   ([[thm-sine-cosine-zero-sets-and-fundamental-period]]);
2. if $T=n\pi/\omega$ for some integer $n\ge1$, then the set of $C^2$ solutions of the Dirichlet
   problem on $[0,T]$,

$$m\,x''+k\,x=0,\qquad x(0)=x(T)=0,$$

   is exactly $\{x_A:A\in\mathbb R\}$; this set is a one-dimensional real vector space, so the
   boundary-value problem has infinitely many distinct solutions with the same endpoint data
   $(0,0)$, one for each initial velocity $A\omega$;
3. by contrast, for every $(x_0,v_0)\in\mathbb R^2$ the initial-value problem
   $m\,x''+k\,x=0$, $x(0)=x_0$, $x'(0)=v_0$, has exactly one solution on $\mathbb R$, namely
   $x(t)=x_0\cos(\omega t)+(v_0/\omega)\sin(\omega t)$
   ([[thm-cm-homogeneous-oscillator-solution-classification]], clauses 3 and 4 with $c=0$);
   uniqueness for the initial-value problem therefore does not imply uniqueness for the
   boundary-value problem;
4. for the chart with $O=\mathbb R\times\mathbb R\times\mathbb R$ and
   $\mathcal L(q,v)=\tfrac12(v^2-\omega^2q^2)$ over $[0,T]\times\mathbb R$
   ([[def-cm-time-dependent-lagrangian-and-action]]), each $x_A$ is a stationary curve of the
   action; and if $T=n\pi/\omega$, the stationary curves on $[0,T]$ satisfying the endpoint
   conditions $x(0)=x(T)=0$ are exactly the curves $x_A$, so the fixed-endpoint problem with zero
   data has infinitely many stationary curves ([[thm-cm-stationarity-iff-euler-lagrange]]).

## Facts & Assumptions

**Given:** The parameters $m>0$, $k>0$, $T>0$, the number $\omega=(k/m)^{1/2}$, the oscillator
model of [[def-cm-oscillator-model-and-phase-system]], the curves $x_A(t)=A\sin(\omega t)$, and
the chart of clause 4.

[F1] Classification and uniqueness ([[thm-cm-homogeneous-oscillator-solution-classification]],
[[def-cm-oscillator-model-and-phase-system]]): for the parameters $(m,c,k)=(m,0,k)$ one has
$\Delta=-4mk<0$, $\gamma=0$ and
$\omega_{\mathrm{cl}}:=\sqrt{4mk-c^2}/(2m)=\sqrt{k/m}=\omega$, so clause 3 states that
$x:J\to\mathbb R$ on an interval $J$ with nonempty interior is a solution if and only if
$x(t)=A\cos(\omega t)+B\sin(\omega t)$ for some $A,B\in\mathbb R$; and clause 4 states that for
every $(x_0,v_0)\in\mathbb R^2$ there is exactly one solution $x:\mathbb R\to\mathbb R$ with
$x(0)=x_0$, $x'(0)=v_0$.

[F2] Trigonometric data ([[thm-sine-and-cosine-derivatives]],
[[def-sine-and-cosine-by-power-series]],
[[thm-sine-cosine-zero-sets-and-fundamental-period]],
[[thm-chain-rule-for-total-derivatives]], [[def-derivative]]): $\sin$ and $\cos$ are
differentiable with $\sin'=\cos$, $\cos'=-\sin$ and $\sin0=0$; the zero set of $\sin$ is exactly
$\pi\mathbb Z$; the chain rule gives $\frac{d}{dt}\sin(\omega t)=\omega\cos(\omega t)$ and
$\frac{d^2}{dt^2}\sin(\omega t)=-\omega^2\sin(\omega t)$.

[F3] Chart and stationarity ([[def-cm-time-dependent-lagrangian-and-action]],
[[thm-cm-stationarity-iff-euler-lagrange]]): the Euler-Lagrange expression along a $C^2$ curve
$q$ is $E(q)=-\omega^2q-q''$, and $q$ is stationary for the action $S$ of this chart if and only
if $E(q)=0$ on $[0,T]$.

[F4] Square root ([[thm-of-square-roots]]): $\omega=(k/m)^{1/2}$ satisfies $\omega>0$ and
$\omega^2=k/m$, and the interval convention is [[def-interval]].

## Proof

**Proof technique:** direct; verify the explicit family, determine its endpoint values from the
zero set of the sine, classify the Dirichlet solutions through the oscillator classification
theorem, and identify the stationary curves through the Euler-Lagrange expression. [given]

1.1 The family $x_A(t)=A\sin(\omega t)$: by [F2] the curve is $C^\infty$ with $x_A''(t)=-A\omega^2\sin(\omega t)$, so $m x_A''(t)+k x_A(t)=(-m\omega^2+k)A\sin(\omega t)=0$ by $\omega^2=k/m$ from [F4]; also $x_A(0)=0$ and $x_A(T)=A\sin(\omega T)$. [given, F2, F4, algebra]

2.1 Endpoint vanishing: by the zero-set statement of [F2], $\sin(\omega T)=0$ is equivalent to $\omega T\in\pi\mathbb Z$, so $x_A(T)=0$ holds exactly when $A=0$ or $\omega T\in\pi\mathbb Z$. [step 1.1, F2, algebra]

2.2 Classification of the Dirichlet solutions: assume $T=n\pi/\omega$ with an integer $n\ge1$ and let $x$ be a $C^2$ solution of $m x''+kx=0$ on $[0,T]$ with $x(0)=x(T)=0$. By clause 3 of [F1] there are $A,B\in\mathbb R$ with $x(t)=A\cos(\omega t)+B\sin(\omega t)$ for $t\in[0,T]$; the condition $x(0)=0$ gives $A=0$, and then $x(T)=B\sin(n\pi)=0$ holds automatically by [F2], so $x=x_B$. Conversely every $x_B$ is a solution by step 1.1 and satisfies $x_B(T)=B\sin(n\pi)=0$. Hence the solution set of the Dirichlet problem is exactly $\{B\sin(\omega t):B\in\mathbb R\}=\{x_A:A\in\mathbb R\}$, which is a linear subspace containing the nonzero function $\sin(\omega t)$ and is therefore one-dimensional. [step 1.1, F1, F2, algebra]

3.1 Initial-value uniqueness and contrast: by clause 4 of [F1] the initial-value problem with data $(x_0,v_0)$ has exactly one solution on $\mathbb R$, with the displayed trigonometric form; for $A\ne A'$ the solutions $x_A$ and $x_{A'}$ of the boundary-value problem are distinct (they differ at $t=\pi/(2\omega)$, which lies in $[0,T]$ because $T\ge\pi/\omega$, and $\sin(\pi/2)\ne0$ by the zero-set statement of [F2]) although they share the endpoint data $(0,0)$ and differ in initial velocity $A\omega\ne A'\omega$; this is the announced contrast between the two problems. [step 2.2, F1, F2, algebra]

4.1 Stationary curves: by [F3] and step 1.1, $E(x_A)=-\omega^2x_A-x_A''=0$ on $[0,T]$, so every $x_A$ is stationary for the action; if $T=n\pi/\omega$, a stationary curve on $[0,T]$ with $x(0)=x(T)=0$ is a $C^2$ solution of $m x''+kx=0$ with those endpoint values by [F3], hence is one of the $x_A$ by step 2.2. This proves clause 4. [step 1.1, step 2.2, F3] ∎

## Remarks

- At $T=\pi/\omega$ the second-variation value in direction
  $\eta_1=\sin(\omega t)$ of [[prop-cm-oscillator-second-variation-signs]] is zero and the
  Dirichlet solution space is one-dimensional. More generally, its nonzero solutions occur exactly
  when $T=n\pi/\omega$ for an integer $n\ge1$, as clauses 1-2 show. The computations here are
  mathematical statements about the model; no physical forcing or measured period is asserted.

- The one-parameter family $\{x_A\}$ is not an artefact of dropping a hypothesis: it persists as
  the full solution set of the Dirichlet problem, and it is a legitimate underdetermined
  boundary-value problem, in contrast with the exactly solvable initial-value problem.
