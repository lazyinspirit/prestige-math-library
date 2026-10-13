---
id: ex-cm-chaos-pulse-and-rotation-endpoint-checks
kind: example
title: "The $\\delta=0$ endpoint computation: the free rotation
  $(q,p)\\mapsto(p,-q)$, the kick $(q,p)\\mapsto(q,p+q^2-a)$ and $K\\circ
  R_0=F$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps:
  [
    def-smooth-periodic-oscillator-pulse-model,
    thm-existence-and-uniqueness-of-a-maximal-ode-solution,
    thm-sine-and-cosine-derivatives,
    def-sine-and-cosine-by-power-series,
    cor-trigonometric-parity-and-pythagorean-identity,
    thm-sine-cosine-zero-sets-and-fundamental-period,
    def-interval,
    cor-pi-is-the-first-positive-sine-zero,
    thm-continuous-implies-integrable,
    thm-ftc-first-part
  ]
dependency_roles:
  def-smooth-periodic-oscillator-pulse-model: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  def-interval: mathematical-premise
  cor-pi-is-the-first-positive-sine-zero: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-ftc-first-part: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS
        Graduate Studies in Mathematics 140 (author's preliminary online
        edition, complete PDF), Section 3.3, the linear planar oscillator and
        its rotation matrices"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "S. Dyatlov, Lecture notes for 18.155, MIT (2022), complete course notes
        PDF, test functions and normalized smooth bumps"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
verification:
  precheck: pass
---

## Example

In the model of [[def-smooth-periodic-oscillator-pulse-model]]:

1. the free oscillator $q'=p$, $p'=-q$ on the interval $[0,\pi/2]$ carries the initial data $(q_0,p_0)$ to

$$(q,p)\Bigl(\tfrac\pi2\Bigr)=\bigl(q_0\cos\tfrac\pi2+p_0\sin\tfrac\pi2,\;-q_0\sin\tfrac\pi2+p_0\cos\tfrac\pi2\bigr)=(p_0,-q_0)=R_0(q_0,p_0);$$

2. the $\delta=0$ rescaled equation $q_s=0$, $p_s=w(s)(q^2-a)$ has the exact solution $q(s)=q_0$, $p(s)=p_0+(q_0^2-a)\int_0^sw$, so its endpoint map is

$$K(q_0,p_0)=\bigl(q_0,\;p_0+q_0^2-a\bigr)$$

because $\int_0^1w=1$; and

$$(K\circ R_0)(q_0,p_0)=K(p_0,-q_0)=\bigl(p_0,\,-q_0+p_0^2-a\bigr)=F(q_0,p_0).$$

Moreover $\beta_\delta\ge0$ with $\int_0^P\beta_\delta=1$ and the restriction of the pulse to $[0,P]$ has support contained in $(\pi/2,P)$. On $\mathbb R$ its support is the periodic union $\bigcup_{j\in\mathbb Z}(\pi/2+\delta\,\operatorname{supp}w+jP)$.

## Facts & Assumptions

**Given:** The model data $w$, $\delta>0$, $\beta_\delta$, $R_0$, the rescaled equation and the maps $K,F$ of [[def-smooth-periodic-oscillator-pulse-model]].

[L1] Trigonometric solution ([[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[cor-pi-is-the-first-positive-sine-zero]]): the functions $q(t)=q_0\cos t+p_0\sin t$, $p(t)=-q_0\sin t+p_0\cos t$ satisfy $q'=p$, $p'=-q$ and the initial conditions; $\cos(\pi/2)=0$, $\sin(\pi/2)>0$, and the Pythagorean identity gives $\sin(\pi/2)=1$.

[L2] Pulse data ([[def-smooth-periodic-oscillator-pulse-model]]): $w:\mathbb R\to\mathbb R$ is smooth, nonnegative and compactly supported inside $(0,1)$ with $\int_0^1w=1$; $\beta_\delta$ is $P$-periodic with $\int_0^P\beta_\delta=1$; $\beta_\delta=0$ on $[0,\pi/2]$ and $\beta_\delta(t)=\delta^{-1}w((t-\pi/2)/\delta)$ on $[\pi/2,P]$.

[L3] Since $w$ is continuous on $[0,1]$, it is integrable ([[thm-continuous-implies-integrable]]); its integral function $W(s):=\int_0^s w(u)\,du$ satisfies $W'(s)=w(s)$ on $[0,1]$ by the first part of the fundamental theorem of calculus ([[thm-ftc-first-part]]), and $W(1)=1$ by [L2].

[L4] Uniqueness of solutions ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]): the free oscillator field $(q,p)\mapsto(p,-q)$ is continuous and locally Lipschitz, so its initial value problems have a unique maximal solution; every solution with the same initial data is a restriction of that maximal solution.

## Verification

direct; differentiate the displayed trigonometric solutions, integrate the constant right-hand side, and substitute the two endpoint maps.

1.1 Free rotation: by [L1] the displayed $(q,p)$ solves the free equations with the stated initial data, so by the uniqueness clause of [L4] it is the solution and the time-$\pi/2$ map is $(q_0,p_0)\mapsto(q_0\cos\tfrac\pi2+p_0\sin\tfrac\pi2,-q_0\sin\tfrac\pi2+p_0\cos\tfrac\pi2)=(p_0,-q_0)=R_0(q_0,p_0)$. [given, L1, L4, algebra]

1.2 Kick: for $\delta=0$ the rescaled equation is $q_s=0$, $p_s=w(s)(q_0^2-a)$. By [L3], $q(s)=q_0$ and $p(s)=p_0+(q_0^2-a)W(s)$ solve it with the stated initial data; evaluating at $s=1$ and using $W(1)=1$ gives $K(q_0,p_0)=(q_0,p_0+q_0^2-a)$. [given, L2, L3, algebra]

2.1 Composition: substituting $(q_0,p_0)\mapsto(p_0,-q_0)$ into $K$ and expanding gives $(K\circ R_0)(q_0,p_0)=(p_0,-q_0+p_0^2-a)=F(q_0,p_0)$, which is the displayed identity. [step 1.1, step 1.2, algebra]

3.1 Pulse support and normalization: by [L2], on the single period $[0,P]$ the coefficient vanishes outside the compact set $\pi/2+\delta\,\operatorname{supp}w\subset(\pi/2,P)$, is nonnegative, and has integral $1$. Periodicity translates that set by each $jP$, $j\in\mathbb Z$, giving the stated global support union. The integral on one period is $1$; the global periodic coefficient does not have bounded support. [given, L2] ∎

## Remarks

- The $\delta=0$ computation is a formal comparison object: the endpoint map $K$ is the endpoint map of the limiting pulse of unit total strength concentrated in zero time. The genuine model has $\delta>0$, and the comparison is quantified in [[lem-rescaled-pulse-map-is-c-one-close-to-kick]].
