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
    thm-sine-and-cosine-addition-formulas,
    cor-trigonometric-parity-and-pythagorean-identity,
    thm-sine-cosine-zero-sets-and-fundamental-period,
    def-abs-value,
    def-interval
  ]
dependency_roles:
  def-smooth-periodic-oscillator-pulse-model: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  def-abs-value: mathematical-premise
  def-interval: mathematical-premise
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

Moreover $\beta_\delta\ge0$ with $\int_0^P\beta_\delta=1$ and the pulse is supported in $(\pi/2,P)$.

## Facts & Assumptions

**Given:** The model data $w$, $\delta>0$, $\beta_\delta$, $R_0$, the rescaled equation and the maps $K,F$ of [[def-smooth-periodic-oscillator-pulse-model]].

[L1] Trigonometric solution ([[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]): the functions $q(t)=q_0\cos t+p_0\sin t$, $p(t)=-q_0\sin t+p_0\cos t$ satisfy $q'=p$, $p'=-q$ and the initial conditions; $\cos(\pi/2)=0$, $\sin(\pi/2)=1$.

[L2] Pulse data ([[def-smooth-periodic-oscillator-pulse-model]]): $w\ge0$ with $\int_0^1w=1$; $\beta_\delta=0$ on $[0,\pi/2]$ and $\beta_\delta(t)=\delta^{-1}w((t-\pi/2)/\delta)$ on $[\pi/2,P]$.

[L3] Integration of constants ([[def-interval]], [[def-abs-value]]): for constant $c$, $\int_0^sc\,du=cs$; and $\int_0^1w=1$ by [L2].

[L4] Uniqueness of solutions ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]): the free oscillator field $(q,p)\mapsto(p,-q)$ is continuous and locally Lipschitz, so its initial value problems have a unique maximal solution; every solution with the same initial data is a restriction of that maximal solution.

## Verification

**Proof technique:** direct; differentiate the displayed trigonometric solutions, integrate the constant right-hand side, and substitute the two endpoint maps.

1.1 Free rotation: by [L1] the displayed $(q,p)$ solves the free equations with the stated initial data, so by the uniqueness clause of [L4] it is the solution and the time-$\pi/2$ map is $(q_0,p_0)\mapsto(q_0\cos\tfrac\pi2+p_0\sin\tfrac\pi2,-q_0\sin\tfrac\pi2+p_0\cos\tfrac\pi2)=(p_0,-q_0)=R_0(q_0,p_0)$. [given, L1, L4, algebra]

2.1 Kick: for $\delta=0$ the rescaled equation is $q_s=0$, $p_s=w(s)(q_0^2-a)$, whose solution with $q(0)=q_0$, $p(0)=p_0$ is the displayed one by [L1] and [L3]; evaluating at $s=1$ and using $\int_0^1w=1$ gives $K(q_0,p_0)=(q_0,p_0+q_0^2-a)$. [given, step 1.1, L2, L3, algebra]

3.1 Composition: substituting $(q_0,p_0)\mapsto(p_0,-q_0)$ into $K$ and expanding gives $(K\circ R_0)(q_0,p_0)=(p_0,-q_0+p_0^2-a)=F(q_0,p_0)$, which is the displayed identity. [step 1.1, step 2.1, algebra]

4.1 Pulse support and normalization: by [L2], $\beta_\delta$ vanishes outside $[\pi/2,P]$, is nonnegative there, and $$\int_0^P\beta_\delta(t)\,dt=\int_{\pi/2}^{\pi/2+\delta}\frac1\delta w\Bigl(\frac{t-\pi/2}{\delta}\Bigr)dt=\int_0^1w(s)\,ds=1.$$ [given, L2, L3, algebra] ∎
## Remarks

- The $\delta=0$ computation is a formal comparison object: the endpoint map $K$ is the endpoint map of the limiting pulse of unit total strength concentrated in zero time. The genuine model has $\delta>0$, and the comparison is quantified in [[lem-rescaled-pulse-map-is-c-one-close-to-kick]].
