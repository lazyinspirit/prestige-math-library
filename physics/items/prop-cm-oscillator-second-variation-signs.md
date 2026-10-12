---
id: prop-cm-oscillator-second-variation-signs
kind: proposition
title: "Second variation of the oscillator action on a finite interval: both signs for $T>\\pi/\\omega$ and the value at $T=\\pi/\\omega$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-second-variation-of-the-action, lem-cm-second-variation-formula, def-cm-time-dependent-lagrangian-and-action, thm-cm-stationarity-iff-euler-lagrange, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-zero-sets-and-fundamental-period, thm-chain-rule-for-total-derivatives, thm-ftc-second-part, thm-linearity-of-the-integral, def-darboux-integral, thm-continuous-implies-integrable, def-interval, thm-of-archimedean, def-abs-value]
dependency_roles:
  def-cm-second-variation-of-the-action: mathematical-premise
  lem-cm-second-variation-formula: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  thm-cm-stationarity-iff-euler-lagrange: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-interval: mathematical-premise
  thm-of-archimedean: mathematical-premise
  def-abs-value: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.1, printed page 12: the proof of the action principle only requires $\\delta S=0$ and does not specify whether the stationary value is a maximum or a minimum; the true path may be either a minimum or a saddle point"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.2, page 147 of the PDF pagination: the function satisfying Euler's equation is stationary, and the stationary value could be either a maximum or a minimum"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics (complete volume), Chapter 5 Section 5.1, Eqs. (5.1)-(5.3): the harmonic oscillator Lagrangian, equation of motion and general oscillatory solution, printed pages 1-2 of Chapter 5 (PDF pages 87-88)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Let $\omega>0$ and $T>0$, let $U:=\mathbb R$, and consider the time-dependent Lagrangian chart
over $[0,T]\times U$ with $O:=\mathbb R\times\mathbb R\times\mathbb R$ and
$\mathcal L(q,v):=\tfrac12\bigl(v^2-\omega^2q^2\bigr)$
([[def-cm-time-dependent-lagrangian-and-action]]). Write $S$ for its action and $\delta^2S$ for
the second variation of [[def-cm-second-variation-of-the-action]]. Then:

1. the zero curve $q_0\equiv0$ is a $C^2$ admissible curve and is stationary for $S$;
2. for every integer $n\ge1$ the map $\eta_n(t):=\sin(n\pi t/T)$ is a variation of $q_0$, and

$$\delta^2S(q_0)[\eta_n,\eta_n]=\frac T2\Bigl(\Bigl(\frac{n\pi}{T}\Bigr)^2-\omega^2\Bigr);$$

moreover $S(\varepsilon\eta_n)=\frac{\varepsilon^2}{2}\delta^2S(q_0)[\eta_n,\eta_n]$ for every
real $\varepsilon$;
3. if $T>\pi/\omega$, then $\delta^2S(q_0)[\eta_1,\eta_1]<0$ and
$\delta^2S(q_0)[\eta_n,\eta_n]>0$ for every integer $n>\omega T/\pi$. Consequently, for every real
$\delta_0>0$ there exist variations $\eta$ of $q_0$ with
$\sup_{t\in[0,T]}\bigl(|\eta(t)|+|\eta'(t)|+|\eta''(t)|\bigr)<\delta_0$ and $S(\eta)<0$, and
variations with the same bound and $S(\eta)>0$; hence the zero curve is neither a local minimiser
nor a local maximiser of $S$, in the sense that every neighbourhood of $q_0$ for the supremum
distance $\sup_{[0,T]}(|q-q_0|+|q'-q_0'|+|q''-q_0''|)$ contains curves whose action is below
$S(q_0)$ and curves whose action is above $S(q_0)$;
4. if $T=\pi/\omega$, then $\delta^2S(q_0)[\eta_1,\eta_1]=0$, while
$\delta^2S(q_0)[\eta_n,\eta_n]>0$ for every integer $n\ge2$.

## Facts & Assumptions

**Given:** The parameters $\omega>0$ and $T>0$, the chart data $(O,\mathcal L)$ above, the zero
curve $q_0\equiv0$, the action $S$, the second variation $\delta^2S$, and the maps
$\eta_n(t)=\sin(n\pi t/T)$ for integers $n\ge1$.

[F1] Chart and stationarity ([[def-cm-time-dependent-lagrangian-and-action]],
[[thm-cm-stationarity-iff-euler-lagrange]]): the Euler-Lagrange expression of this chart along a
$C^2$ curve $q$ is $E(q)(t)=-\omega^2q(t)-q''(t)$, and $q$ is stationary for $S$ if and only if
$E(q)=0$ on $[0,T]$.

[F2] Second variation formula ([[lem-cm-second-variation-formula]],
[[def-cm-second-variation-of-the-action]]): for every $C^2$ curve $q$ on $[0,T]$ and every
variation $\eta$,
$$\delta^2S(q)[\eta,\eta]=\int_0^T\bigl(\eta'(t)^2-\omega^2\eta(t)^2\bigr)\,dt,$$
because the second partials of $\mathcal L$ are the constants
$\partial^2\mathcal L/\partial q^2=-\omega^2$,
$\partial^2\mathcal L/\partial q\partial v=0$ and
$\partial^2\mathcal L/\partial v^2=1$.

[F3] Trigonometric data ([[thm-sine-and-cosine-derivatives]],
[[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-addition-formulas]],
[[cor-trigonometric-parity-and-pythagorean-identity]],
[[thm-sine-cosine-zero-sets-and-fundamental-period]],
[[thm-chain-rule-for-total-derivatives]]): $\sin$ and $\cos$ are differentiable with
$\sin'=\cos$ and $\cos'=-\sin$, and $\sin0=0$; for every real $u$ the addition formulas and the
Pythagorean identity give $\cos^2u=\tfrac12(1+\cos2u)$ and
$\sin^2u=\tfrac12(1-\cos2u)$; the zero set of $\sin$ is exactly $\pi\mathbb Z$. Hence for every
integer $n\ge1$ the map $\eta_n(t)=\sin(n\pi t/T)$ is $C^2$ on an open interval containing
$[0,T]$, with $\eta_n'(t)=(n\pi/T)\cos(n\pi t/T)$ and
$\eta_n(0)=\eta_n(T)=\sin(n\pi)=0$.

[F4] Integration ([[def-darboux-integral]], [[thm-continuous-implies-integrable]],
[[thm-ftc-second-part]], [[thm-linearity-of-the-integral]], [[def-interval]]): continuous real
functions on $[0,T]$ are Darboux integrable; if $G$ is differentiable with derivative $G'$ and
$G'$ is integrable then $\int_0^TG'=G(T)-G(0)$; and the integral of a finite linear combination of
integrable functions is the corresponding combination of integrals.

[F5] Archimedean property ([[thm-of-archimedean]]): for every real $x$ there is a natural number
$n$ with $x<n$.

## Proof

**Proof technique:** direct; compute the second variation of the oscillator family with elementary
trigonometric integrals, obtain the exact action along the family, and read off the two signs and
the degenerate case. [given]

1.1 Stationarity of the zero curve: $q_0$ is a $C^2$ admissible curve with values in $U=\mathbb R$, and $E(q_0)(t)=-\omega^2\cdot0-0=0$ for every $t$, so $q_0$ is stationary by [F1]; also $S(q_0)=\int_0^T0\,dt=0$ by [F4]. [given, F1, F4, algebra]

1.2 Variation and second variation: for every integer $n\ge1$, $\eta_n$ is a variation of $q_0$ by [F3], so [F2] and [F3] give $$\delta^2S(q_0)[\eta_n,\eta_n]=\int_0^T\Bigl(\Bigl(\frac{n\pi}{T}\Bigr)^2\cos^2\Bigl(\frac{n\pi t}{T}\Bigr)-\omega^2\sin^2\Bigl(\frac{n\pi t}{T}\Bigr)\Bigr)dt.$$ [given, F2, F3]

2.1 Evaluation of the integrals: by [F3] and [F4], $$\int_0^T\cos^2\Bigl(\frac{n\pi t}{T}\Bigr)dt=\frac12\int_0^T\Bigl(1+\cos\frac{2n\pi t}{T}\Bigr)dt=\frac{T+0}{2}=\frac T2,$$ and likewise $\int_0^T\sin^2(n\pi t/T)\,dt=T/2$, because the FTC gives $\int_0^T\cos(2n\pi t/T)\,dt=\frac{T}{2n\pi}\bigl[\sin(2n\pi t/T)\bigr]_0^T=\frac{T}{2n\pi}(\sin(2n\pi)-\sin0)=0$ by the vanishing of $\sin$ at integer multiples of $\pi$ from [F3]. Substituting into step 1.2 gives the second-variation value of clause 2. [step 1.2, F3, F4, algebra]

3.1 Exact action along the family: since $\mathcal L$ is homogeneous of degree two in $(q,v)$, for every real $\varepsilon$ the integrand of $S(\varepsilon\eta_n)$ is $\mathcal L(\varepsilon\eta_n,\varepsilon\eta_n')=\varepsilon^2\mathcal L(\eta_n,\eta_n')$; by linearity of the integral [F4] and step 1.2, $S(\varepsilon\eta_n)=\varepsilon^2S(\eta_n)=\frac{\varepsilon^2}{2}\delta^2S(q_0)[\eta_n,\eta_n]$, which is the exact identity of clause 2. [step 1.2, step 2.1, F4, algebra]

4.1 Signs for $T>\pi/\omega$: if $T>\pi/\omega$, then $\pi/T<\omega$, so clause 2 gives $\delta^2S(q_0)[\eta_1,\eta_1]<0$; by [F5] choose an integer $n$ with $n>\omega T/\pi$, so $(n\pi/T)^2>\omega^2$ and $\delta^2S(q_0)[\eta_n,\eta_n]>0$. For any real $\delta_0>0$ pick $\varepsilon>0$ with $\varepsilon\bigl(1+n\pi/T+(n\pi/T)^2\bigr)<\delta_0$; then $|\eta_n|\le1$, $|\eta_n'|\le n\pi/T$ and $|\eta_n''|\le(n\pi/T)^2$ by [F3], so the variations $\varepsilon\eta_1$ and $\varepsilon\eta_n$ satisfy the displayed supremum bound, while step 3.1 gives $S(\varepsilon\eta_1)=\frac{\varepsilon^2}{2}\delta^2S(q_0)[\eta_1,\eta_1]<0$ and $S(\varepsilon\eta_n)>0$; with $S(q_0)=0$ from step 1.1, the zero curve is neither a local minimiser nor a local maximiser. [step 1.1, step 2.1, step 3.1, F3, F5, algebra]

5.1 The degenerate case: if $T=\pi/\omega$, substitution into clause 2 gives $\delta^2S(q_0)[\eta_1,\eta_1]=\frac T2(\omega^2-\omega^2)=0$, while for every integer $n\ge2$ the value is $\frac T2(n^2\omega^2-\omega^2)>0$. [step 2.1, algebra] ∎

## Remarks

- The computation is a finite-time statement about the action functional on $[0,T]$ with fixed
  endpoints. For every $T>\pi/\omega$ it shows that the zero stationary curve is neither a local
  minimum nor a local maximum; nothing
  here asserts anything about the physical least-action principle, and the results are
  mathematical properties of the model [[def-cm-time-dependent-lagrangian-and-action]].

- The bound $n>\omega T/\pi$ is the quantisation of the statement that a sufficiently
  high-frequency sine variation has positive second variation; at $T=\pi/\omega$ the displayed
  second-variation value in direction $\eta_1$ is zero, consistent with the endpoint non-uniqueness of
  [[prop-cm-oscillator-boundary-value-nonuniqueness]].
