---
id: ex-cm-oscillator-boundary-value-nonuniqueness-check
kind: example
title: "Two distinct oscillator solutions with the same zero endpoints at $T=\\pi$, and their common action value"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [prop-cm-oscillator-boundary-value-nonuniqueness, def-cm-time-dependent-lagrangian-and-action, thm-cm-stationarity-iff-euler-lagrange, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-zero-sets-and-fundamental-period, thm-chain-rule-for-total-derivatives, thm-ftc-second-part, thm-linearity-of-the-integral, def-darboux-integral, thm-continuous-implies-integrable, def-interval]
dependency_roles:
  prop-cm-oscillator-boundary-value-nonuniqueness: mathematical-premise
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
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Chapter 5 Section 5.1, Eqs. (5.1)-(5.3), printed pages 1-2 of Chapter 5 (PDF pages 87-88): the harmonic oscillator equation and its general two-constant solution"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 2.1, printed pages 10-12: the action functional with fixed endpoints and Lagrange's equations for its stationary paths"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Take $m=1$, $k=1$, hence $\omega=1$, and $T=\pi$ in
[[prop-cm-oscillator-boundary-value-nonuniqueness]], and consider the two curves

$$x_1(t)=\sin t,\qquad x_2(t)=2\sin t\qquad(t\in[0,\pi]).$$

Both are $C^\infty$ solutions of $x''+x=0$ on $[0,\pi]$ with $x(0)=x(\pi)=0$, and they are
distinct; they have different initial velocities $1$ and $2$. On the chart
$\mathcal L(q,v)=\tfrac12(v^2-q^2)$ over $[0,\pi]\times\mathbb R$
([[def-cm-time-dependent-lagrangian-and-action]]) both are stationary curves of the action, and
their action values agree:

$$S(x_1)=S(x_2)=0.$$

This is the concrete $T=\pi$ case of the non-uniqueness in
[[prop-cm-oscillator-boundary-value-nonuniqueness]] and of the signed-action checks of
[[ex-cm-oscillator-saddle-second-variation-checks]]; all numbers are exact.

## Facts & Assumptions

**Given:** The model $x''+x=0$ on $[0,\pi]$, its curves $x_1(t)=\sin t$ and $x_2(t)=2\sin t$, and
the chart $\mathcal L(q,v)=\tfrac12(v^2-q^2)$ with its action $S$.

[L1] The non-uniqueness proposition ([[prop-cm-oscillator-boundary-value-nonuniqueness]]): for
$m=k=1$ and $T=\pi=n\pi/\omega$ with $n=1$, the set of $C^2$ solutions of $x''+x=0$ on $[0,\pi]$
with $x(0)=x(\pi)=0$ is exactly $\{A\sin t:A\in\mathbb R\}$, and each such curve is a stationary
curve of the action of the chart $\mathcal L(q,v)=\tfrac12(v^2-q^2)$
([[thm-cm-stationarity-iff-euler-lagrange]],
[[def-cm-time-dependent-lagrangian-and-action]]).

[L2] Trigonometric calculus and integrals ([[thm-sine-and-cosine-derivatives]],
[[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-addition-formulas]],
[[cor-trigonometric-parity-and-pythagorean-identity]],
[[thm-sine-cosine-zero-sets-and-fundamental-period]],
[[thm-chain-rule-for-total-derivatives]], [[thm-ftc-second-part]],
[[thm-linearity-of-the-integral]], [[def-darboux-integral]],
[[thm-continuous-implies-integrable]], [[def-interval]]): $\sin$ and $\cos$ are differentiable
with $\sin'=\cos$, $\cos'=-\sin$, the zeros of $\sin$ are the integer multiples of $\pi$ and in
particular $\sin0=\sin\pi=0$; the double-angle formula gives
$\cos^2t-\sin^2t=\cos2t$; the fundamental theorem evaluates
$\int_0^\pi\cos2t\,dt=\frac12[\sin2t]_0^\pi=0$ because $\sin2\pi=0$; and continuous integrands on
$[0,\pi]$ are integrable.

## Verification

**Proof technique:** direct; verify the two solutions and their endpoint data, note their
distinctness, and evaluate the action along the family.

1.1 The two solutions: by [L2], $x_1''=-\sin t=-x_1$ and $x_2''=-2\sin t=-x_2$, so both curves solve $x''+x=0$ on $[0,\pi]$; and $x_1(0)=x_1(\pi)=0$, $x_2(0)=x_2(\pi)=0$ by the zero set of $\sin$. [given, L2, algebra]

2.1 Distinctness with equal boundary data: $x_2-x_1=\sin t\ne0$ (at $t=\pi/2$ the value is $1$), so the solutions are distinct, while both take the value $0$ at $0$ and at $\pi$; their initial velocities are $x_1'(0)=1$ and $x_2'(0)=2$, so they are different initial-value solutions, in accordance with the initial-value uniqueness clause of [L1]. [step 1.1, given, L2, algebra]

3.1 Action along the family: for $A\in\mathbb R$, using $\mathcal L(A\sin t,A\cos t)=\frac{A^2}{2}(\cos^2t-\sin^2t)$ and linearity of the integral, $$S(A\sin)=\frac{A^2}{2}\int_0^\pi(\cos^2t-\sin^2t)\,dt=\frac{A^2}{2}\int_0^\pi\cos2t\,dt=\frac{A^2}{4}\bigl[\sin2t\bigr]_0^\pi=0$$ by [L2]; in particular $S(x_1)=S(x_2)=0$. [step 1.1, step 2.1, L1, L2, algebra]

4.1 Reading: by [L1] the curves $x_1,x_2$ are stationary for the action of the chart and share the endpoint data $(0,0)$; they are distinct and have the same action value $0$, exhibiting in one explicit computation the failure of uniqueness of the fixed-endpoint problem at $T=\pi$, with no claim about any other duration. [step 1.1, step 2.1, step 3.1, L1] ∎
