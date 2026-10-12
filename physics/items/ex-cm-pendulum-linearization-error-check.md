---
id: ex-cm-pendulum-linearization-error-check
kind: example
title: "The pendulum linearisation bound at $g=l=1$: exact error expression for the data $\\delta=1/100$, $T=1$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [prop-cm-pendulum-small-angle-linearization-bound, thm-cm-finite-time-linearization-error-bound, cor-two-less-than-e-less-than-three, cor-taylor-remainder-bound, thm-derivative-of-exponential, def-real-exponential-function-and-e, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, thm-sine-cosine-signs-monotonicity-and-ranges, def-euclidean-inner-product, def-operator-norm, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-vector-valued-derivative-and-integral, def-derivative, def-interval, def-metric-ball]
dependency_roles:
  prop-cm-pendulum-small-angle-linearization-bound: mathematical-premise
  thm-cm-finite-time-linearization-error-bound: mathematical-premise
  cor-two-less-than-e-less-than-three: mathematical-premise
  cor-taylor-remainder-bound: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-operator-norm: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-metric-ball: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Chapter 1 Section 1.2, Eq. (1.18), printed page 6 of Chapter 1 (PDF page 10): the pendulum equation whose linearisation error is bounded here"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.4 and Sections 6.2-6.3: the linearisation estimate that the proposition instantiates"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
verification:
  precheck: pass
---

## Example

Take $g=l=1$ in [[prop-cm-pendulum-small-angle-linearization-bound]], so that $\omega=1$,
$F(\theta,v)=(v,-\sin\theta)$, $A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, $L=1$ and
$\lVert A\rVert=1$. Choose the ball radius $r=1/2$, the datum
$z_0=(\delta,0)$ with $\delta=1/100$, and the horizon $T=1$. Then
$\delta e^{LT}=e/100<3/100<1/2=r$ because $2<e<3$
([[cor-two-less-than-e-less-than-three]]), so the proposition applies and gives

$$\lVert z(t)-y(t)\rVert_2\le\frac{1}{12\cdot10^4}\bigl(e^{2t}-e^{t}\bigr)\qquad(0\le t\le1),$$

where $y(t)=\delta(\cos t,-\sin t)$ solves $y'=Ay$, $y(0)=z_0$; at $t=1$ the bound reads
$(e^2-e)/(12\cdot10^4)$ and is at most $e^3/(12\cdot10^4)$. The remainder checks at
$\lVert z\rVert_2\le r$ are: $\lvert\sin\theta-\theta\rvert\le\lvert\theta\rvert^3/6\le1/48$, and
$\lvert\sin\theta\rvert\le\lvert\theta\rvert\le r=1/2$. All constants are exact; the single
inequality $e<3$ is the only numerical input.

## Facts & Assumptions

**Given:** The parameters $g=l=1$, the field $F(\theta,v)=(v,-\sin\theta)$, the matrix $A$, the
constants $r=1/2$, $\delta=1/100$, $T=1$, and the solution
$y(t)=\delta(\cos t,-\sin t)$ of the linear problem.

[L1] The proposition ([[prop-cm-pendulum-small-angle-linearization-bound]]): for this field,
$\lVert F(z)-Az\rVert_2=\lvert\sin\theta-\theta\rvert\le\lvert\theta\rvert^3/6\le r\lVert z\rVert_2^2/6$
and $\lVert F(z)\rVert_2\le L\lVert z\rVert_2$ with $L=1$ and $\lVert A\rVert=1$ on
$\lVert z\rVert_2\le r$; for $\delta e^{LT}<r$ the estimate
$\lVert z(t)-y(t)\rVert_2\le(\omega^2r/6)\delta^2\int_0^te^{\lVert A\rVert(t-s)}e^{2Ls}ds$ holds on
$[0,T]$ ([[thm-cm-finite-time-linearization-error-bound]]).

[L2] Exponential and trigonometric calculus ([[thm-derivative-of-exponential]],
[[def-real-exponential-function-and-e]], [[cor-two-less-than-e-less-than-three]],
[[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]],
[[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-taylor-remainder-bound]],
[[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]]): $2<e<3$; $e^t$ is its
own derivative, so $\int_0^te^{1+s}ds=e(e^t-1)$ by the fundamental theorem; $\sin$ and $\cos$
have range $[-1,1]$ and $\sin0=0$; and the Taylor bound gives
$\lvert\sin\theta-\theta\rvert\le\lvert\theta\rvert^3/6$.

[L3] Norm data ([[def-euclidean-inner-product]], [[def-operator-norm]],
[[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-interval]],
[[def-metric-ball]]): $\lVert(w_1,w_2)\rVert_2^2=w_1^2+w_2^2$; $y_1(t)=\delta\cos t$ and
$y_2(t)=-\delta\sin t$ satisfy $y_1'=y_2$ and $y_2'=-y_1$.

## Verification

**Proof technique:** direct; instantiate the proposition at the stated constants, verify the
smallness condition with $e<3$, evaluate the integral with the fundamental theorem, and check the
pointwise remainder bounds.

1.1 Smallness condition: $L=1$ and $\delta=1/100$ give $\delta e^{LT}=e/100$, and $e<3$ gives $e/100<3/100<1/2=r$, so the datum lies in the range of the proposition with $T=1$. [given, L1, L2, algebra]

1.2 Pointwise bounds at this data: on $\lVert z\rVert_2\le1/2$ one has $\lvert\theta\rvert^3/6\le(1/2)\lVert z\rVert_2^2/6=\lVert z\rVert_2^2/12$ and $\lvert\sin\theta\rvert\le\lvert\theta\rvert\le1/2$, so the two hypotheses of [L1] hold with $C=1/12$ and $L=1$; at $z=(1/2,0)$ this reads $\lvert\sin(1/2)-1/2\rvert\le1/48$. [given, L1, L2, algebra]

2.1 The error expression: by [L1] with $\omega=1$, $r=1/2$, $\delta=1/100$, $L=\lVert A\rVert=1$, $$\lVert z(t)-y(t)\rVert_2\le\frac{1}{12}\cdot\frac{1}{10^4}\int_0^te^{t-s}e^{2s}ds=\frac{e^{2t}-e^t}{12\cdot10^4}$$ for $0\le t\le1$, the integral being $\int_0^te^{t+s}ds=e^t(e^t-1)=e^{2t}-e^t$ by [L2]. [step 1.2, L1, L2, algebra]

3.1 Reading at $t=1$: the bound becomes $(e^2-e)/(12\cdot10^4)<e^3/(12\cdot10^4)$, a finite quantity of order $\delta^2=10^{-4}$, and $y_1(t)=\delta\cos t$ satisfies $\lvert z_1(t)-y_1(t)\rvert\le\lVert z(t)-y(t)\rVert_2$ by [L3]; the estimate is restricted to $[0,1]$ and asserts nothing about the nonlinear pendulum beyond it. [step 2.1, L1, L3, algebra] ∎
