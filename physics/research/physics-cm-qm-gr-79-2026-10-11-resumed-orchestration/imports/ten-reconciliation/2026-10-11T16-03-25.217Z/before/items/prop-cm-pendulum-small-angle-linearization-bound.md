---
id: prop-cm-pendulum-small-angle-linearization-bound
kind: proposition
title: "The pendulum field near the downward equilibrium: bounded force derivative, cubic remainder and the finite-time small-angle error bound"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-cm-finite-time-linearization-error-bound, cor-taylor-remainder-bound, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, thm-sine-cosine-signs-monotonicity-and-ranges, cor-mean-value-theorem, thm-of-square-roots, def-euclidean-inner-product, def-inner-product-space, def-operator-norm, def-metric-ball, def-jacobian-matrix-and-gradient, thm-continuous-partial-derivatives-imply-total-differentiability, def-total-derivative-in-euclidean-space, def-ck-euclidean-maps-and-diffeomorphisms, def-lipschitz-holder-contraction, def-vector-valued-derivative-and-integral, thm-algebra-of-derivatives, def-derivative, def-interval, cor-cm-variation-of-constants-for-linear-systems, def-matrix-product-and-identity-matrix, thm-chain-rule-for-total-derivatives]
dependency_roles:
  thm-cm-finite-time-linearization-error-bound: mathematical-premise
  cor-taylor-remainder-bound: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-operator-norm: mathematical-premise
  def-metric-ball: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-lipschitz-holder-contraction: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  cor-cm-variation-of-constants-for-linear-systems: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Chapter 1 Section 1.2, Eq. (1.18), printed page 6 of Chapter 1 (PDF page 10): the point-pendulum equation mR theta'' = -mg sin theta"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Chapter 3 Section 3.2, Eqs. (3.18)-(3.23), printed pages 3-4 of Chapter 3 (PDF pages 36-37): stability analysis by linearising the equation of motion about a fixed point, using the linear Taylor expansion of the effective force"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.6, printed pages 37-39: linearisation near equilibrium, eta''=f'(x_0)eta+O(eta^2), with the explicit remark that quadratic and higher terms are neglected"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $g>0$ and $l>0$, put $\omega:=(g/l)^{1/2}>0$ ([[thm-of-square-roots]]), and define the field

$$F:\mathbb R^2\to\mathbb R^2,\qquad F(\theta,v):=\bigl(v,-\omega^2\sin\theta\bigr),$$

so that $z'=F(z)$ for $z=(\theta,v)$ is the first-order form of the pendulum equation
$\theta''=-\omega^2\sin\theta$ ([[def-vector-valued-derivative-and-integral]] for the
componentwise first-order reduction). Put

$$A:=\begin{pmatrix}0&1\\-\omega^2&0\end{pmatrix},\qquad L:=\max\{1,\omega^2\}.$$

Then:

1. $F$ is of class $C^\infty$ (in particular continuous and locally Lipschitz in the state
   variable), $F(0)=0$, $A=DF(0)$ is the total derivative of $F$ at the origin, and for every
   $r>0$ and every $z=(\theta,v)$ with $\lVert z\rVert_2\le r$ ([[def-metric-ball]] for the ball,
   [[def-euclidean-inner-product]] for the norm)

$$\lVert F(z)-Az\rVert_2=\omega^2\lvert\sin\theta-\theta\rvert\le\frac{\omega^2}{6}\lvert\theta\rvert^3\le\frac{\omega^2r}{6}\lVert z\rVert_2^2,\qquad\lVert F(z)\rVert_2\le L\lVert z\rVert_2 ;$$

   moreover $F$ is globally Lipschitz in the state variable with constant $L$
   ([[def-lipschitz-holder-contraction]]), and the operator norm of $A$ for the Euclidean norm is
   $\lVert A\rVert=L$ ([[def-operator-norm]]);
2. let $z_0\in\mathbb R^2$ with $\delta:=\lVert z_0\rVert_2>0$, let $T>0$ and $r>0$ satisfy
   $\delta e^{LT}<r$, and let $y:\mathbb R\to\mathbb R^2$ be the solution of the linear initial
   value problem $y'=Ay$, $y(0)=z_0$
   ([[cor-cm-variation-of-constants-for-linear-systems]]). Then the maximal solution $z$ of
   $z'=F(z)$, $z(0)=z_0$, is defined on $[0,T]$ with $\lVert z(t)\rVert_2\le\delta e^{Lt}$ for
   $t\in[0,T]$, and for every $t\in[0,T]$

$$\lVert z(t)-y(t)\rVert_2\le\frac{\omega^2r}{6}\delta^2\int_0^te^{\lVert A\rVert(t-s)}e^{2Ls}\,ds\le\frac{\omega^2r}{6}\delta^2\,t\,e^{(\lVert A\rVert+2L)t}$$

   ([[thm-cm-finite-time-linearization-error-bound]]);
3. the linear system $y'=Ay$ is the linearised pendulum: writing $y=(y_1,y_2)$ one has
   $y_1''=-\omega^2y_1$ and $y_2=y_1'$, and the first components satisfy
   $\lvert z_1(t)-y_1(t)\rvert\le\lVert z(t)-y(t)\rVert_2$ with the bounds of clause 2. The
   estimate is a finite-time statement of order $\delta^2$: it neither states nor implies that the
   nonlinear pendulum is exactly harmonic, and it makes no claim beyond $[0,T]$.

## Facts & Assumptions

**Given:** The parameters $g>0$, $l>0$, the number $\omega=(g/l)^{1/2}$, the field
$F(\theta,v)=(v,-\omega^2\sin\theta)$, the matrix $A$ and the constant $L=\max\{1,\omega^2\}$.

[F1] The linearisation theorem ([[thm-cm-finite-time-linearization-error-bound]]): if
$F:U\to\mathbb R^n$ is continuous and locally Lipschitz in the state variable on an open
$U\ni0$, and $r>0$, $C\ge0$, $L\ge0$, $A\in M_n(\mathbb R)$ satisfy
$\overline B(0,r)\subseteq U$,
$\lVert F(z)-Az\rVert_2\le C\lVert z\rVert_2^2$,
$\lVert F(z)\rVert_2\le L\lVert z\rVert_2$ for $\lVert z\rVert_2\le r$, then for every datum with
$\delta:=\lVert z_0\rVert_2>0$ and every $T>0$ with $\delta e^{LT}<r$ the maximal solution $z$ of
$z'=F(z)$, $z(0)=z_0$ is defined on $[0,T]$, satisfies $\lVert z(t)\rVert_2\le\delta e^{Lt}$, and
with the solution $y$ of $y'=Ay$, $y(0)=z_0$ obeys the two displayed bounds with $\lVert A\rVert$
the operator norm.

[F2] Trigonometric calculus ([[thm-sine-and-cosine-derivatives]],
[[def-sine-and-cosine-by-power-series]], [[thm-sine-cosine-signs-monotonicity-and-ranges]],
[[cor-mean-value-theorem]], [[cor-taylor-remainder-bound]],
[[thm-chain-rule-for-total-derivatives]]): $\sin$ and $\cos$ are differentiable with
$\sin'=\cos$, $\cos'=-\sin$, $\sin0=0$; both have range $[-1,1]$; for all reals $\theta,\theta'$
the mean value theorem gives $\lvert\sin\theta-\sin\theta'\rvert\le\lvert\theta-\theta'\rvert$ and
$\lvert\sin\theta\rvert\le\lvert\theta\rvert$; and the Taylor remainder bound with $n=2$ and
$M=1$ gives $\lvert\sin\theta-\theta\rvert\le\lvert\theta\rvert^3/6$ for every real $\theta$.

[F3] Total derivative ([[def-jacobian-matrix-and-gradient]],
[[thm-continuous-partial-derivatives-imply-total-differentiability]],
[[def-total-derivative-in-euclidean-space]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): the
partial derivatives of $F$ are $\partial F_1/\partial\theta=0$,
$\partial F_1/\partial v=1$, $\partial F_2/\partial\theta=-\omega^2\cos\theta$,
$\partial F_2/\partial v=0$, all continuous, so $F$ is $C^1$ with
$DF(\theta,v)=\begin{pmatrix}0&1\\-\omega^2\cos\theta&0\end{pmatrix}$; a $C^1$ map is continuous
and locally Lipschitz in the state variable
([[def-lipschitz-holder-contraction]], [[thm-chain-rule-for-total-derivatives]]).

[F4] Norms ([[def-euclidean-inner-product]], [[def-inner-product-space]],
[[def-operator-norm]], [[def-metric-ball]]): for $z=(\theta,v)$,
$\lVert z\rVert_2^2=\theta^2+v^2$, $\lVert Az\rVert_2^2=\omega^4\theta^2+v^2$,
$\lVert F(z)\rVert_2^2=v^2+\omega^4\sin^2\theta$ and
$\lVert F(z)-Az\rVert_2^2=\omega^4(\sin\theta-\theta)^2$; the operator norm of $A$ is the
supremum of $\lVert Az\rVert_2$ over $\lVert z\rVert_2\le1$.

[F5] Linear systems ([[cor-cm-variation-of-constants-for-linear-systems]],
[[def-vector-valued-derivative-and-integral]], [[thm-algebra-of-derivatives]],
[[def-derivative]], [[def-matrix-product-and-identity-matrix]]): for every datum there is exactly
one solution of $y'=Ay$ on $\mathbb R$; the equation $y'=Ay$ is the pair
$y_1'=y_2$, $y_2'=-\omega^2y_1$.

## Proof

**Proof technique:** direct; compute the derivative of the pendulum field, bound the quadratic
remainder by the cubic sine estimate, identify the Lipschitz and operator norms, and instantiate
the linearisation theorem.

1.1 Derivative and regularity: by [F3], $F$ is $C^1$ with $DF(\theta,v)=\begin{pmatrix}0&1\\-\omega^2\cos\theta&0\end{pmatrix}$; since $\sin$ and $\cos$ are $C^\infty$ the field is in fact $C^\infty$. Also $F(0,0)=(0,-\omega^2\sin0)=(0,0)$ and $A=DF(0,0)=\begin{pmatrix}0&1\\-\omega^2&0\end{pmatrix}$. [given, F2, F3, algebra]

1.2 Remainder and growth bounds: for $\lVert z\rVert_2\le r$, [F2] gives $\lVert F(z)-Az\rVert_2=\omega^2\lvert\sin\theta-\theta\rvert\le\frac{\omega^2}{6}\lvert\theta\rvert^3$, and $\lvert\theta\rvert^3\le r\theta^2\le r(\theta^2+v^2)=r\lVert z\rVert_2^2$; moreover $\lVert F(z)\rVert_2^2=v^2+\omega^4\sin^2\theta\le v^2+\omega^4\theta^2\le L^2(\theta^2+v^2)$ because $L=\max\{1,\omega^2\}$, so $\lVert F(z)\rVert_2\le L\lVert z\rVert_2$. [given, F2, F4, algebra]

2.1 Lipschitz constant and operator norm: for $z=(\theta,v)$ and $z'=(\theta',v')$, $$\lVert F(z)-F(z')\rVert_2^2=(v-v')^2+\omega^4(\sin\theta-\sin\theta')^2\le(v-v')^2+\omega^4(\theta-\theta')^2\le L^2\lVert z-z'\rVert_2^2$$ by [F2] and $L=\max\{1,\omega^2\}$, so $L$ is a global Lipschitz constant for $F$; and $\lVert Az\rVert_2^2=\omega^4\theta^2+v^2\le L^2\lVert z\rVert_2^2$ with equality at $e_1$ if $\omega^2\ge1$ and at $e_2$ if $1\ge\omega^2$, so the operator norm is $\lVert A\rVert=L$. [step 1.2, F2, F4, algebra]

3.1 Instantiation of the linearisation theorem: take $n=2$, $U=\mathbb R^2$, the field $F$ of clause 1, the matrix $A$, the constants $L$ and $C:=\omega^2r/6$, and the datum $z_0$ with $\delta=\lVert z_0\rVert_2>0$ and $\delta e^{LT}<r$. Steps 1.1, 1.2 and 2.1 verify every hypothesis of [F1], so the maximal solution $z$ of $z'=F(z)$, $z(0)=z_0$ is defined on $[0,T]$, $\lVert z(t)\rVert_2\le\delta e^{Lt}$ there, and the two integral bounds of [F1] hold with the displayed $C$ and $\lVert A\rVert=L$; this is clause 2. [step 1.1, step 1.2, step 2.1, F1, given]

4.1 Linearised equation and scope: by [F5] the system $y'=Ay$ reads $y_1'=y_2$, $y_2'=-\omega^2y_1$, hence $y_1''=-\omega^2y_1$, the exactly harmonic linearised pendulum; and $\lvert z_1(t)-y_1(t)\rvert\le\lVert z(t)-y(t)\rVert_2$ because $\lVert(w_1,w_2)\rVert_2^2=w_1^2+w_2^2$. The bounds of clause 2 are finite-time and of order $\delta^2$; no identification of the nonlinear solution with the harmonic one beyond this estimate is claimed. [step 3.1, F4, F5, algebra] ∎

## Remarks

- The constant $\omega^2r/6$ is exactly the quadratic-remainder constant obtained from the cubic
  bound $\lvert\sin\theta-\theta\rvert\le\lvert\theta\rvert^3/6$ on the ball of radius $r$: the
  remainder is cubic in the angle and quadratic in the state norm, which is what the linearisation
  theorem of [[thm-cm-finite-time-linearization-error-bound]] requires.

- The scope sentence of clause 3 is part of the claim: the estimate is a conditional consequence
  of the explicit model $\theta''=-\omega^2\sin\theta$ and its stated smallness hypotheses, and it
  is not a statement about any measured pendulum.
