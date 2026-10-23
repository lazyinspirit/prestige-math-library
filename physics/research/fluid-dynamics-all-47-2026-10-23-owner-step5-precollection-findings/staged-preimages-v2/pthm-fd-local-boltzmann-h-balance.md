---
id: pthm-fd-local-boltzmann-h-balance
kind: physics-theorem
title: Local kinetic H balance for the elastic Boltzmann model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
physical_scope: >-
  Conditional pointwise local kinetic H balance for positive regular solutions
  of the adopted single-species elastic Boltzmann model, under explicit
  velocity envelopes and absolutely convergent logarithmic collision tests.
  This is a model deduction, not a many-particle theorem or empirical claim.
deps:
  - post-fd-boltzmann-model
  - def-fd-physical-kinetic-observables
  - def-fd-elastic-collision-measure
  - thm-chain-rule
  - def-derivative
  - thm-algebra-of-function-limits
  - thm-differentiation-under-the-integral-sign
  - thm-logarithm-derivative-and-integral
  - cor-mean-value-theorem
dependency_roles:
  post-fd-boltzmann-model: physical-assumption
  def-fd-physical-kinetic-observables: formulation-prerequisite
  def-fd-elastic-collision-measure: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-function-limits: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 9"
      url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/ce250b44390106351cb97aafb0060ca7_MIT8_333F13_Lec9.pdf"
      locator: "Section III.E, printed pp. 56–57; local H balance, collision symmetrization and the entropy-production sign."
    - title: "David Tong, Lectures on Kinetic Theory, Chapter 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
      locator: "Section 2.3, printed pp. 32–35; local entropy balance and the H-theorem sign mechanism."
verification:
  precheck: pending
---

## Statement

Let $I\subseteq\mathbb R$ be an open time interval in seconds and let
$\Omega=\prod_{j=1}^3(\mathbb R/L_j\mathbb Z)$ be a periodic spatial cell with
$L_j>0$ in metres. Let $v\in\mathbb R^3$ be measured in metres per second and
let $f:I\times\Omega\times\mathbb R^3\to(0,\infty)$ be measurable, continuously
differentiable in $(t,x)$, and twice continuously differentiable in $v$.
Assume $f\,d^3x\,d^3v$ counts particles, so $f$ has units
$\mathrm{s^3\,m^{-6}}$. Put
$Q_{\rm el}=\{(v,w,v',w')\in(\mathbb R^3)^4:v+w=v'+w',\quad |v|^2+|w|^2=|v'|^2+|w'|^2\}$, with its relative Borel sigma-algebra, and
let $\nu$ be the nonnegative symmetric collision-rate measure on $Q_{\rm el}$
in the adopted model. Fix a constant $f_{\rm ref}>0$ with the same units as
$f$, and put $\ell=\log(f/f_{\rm ref})$, which is dimensionless,
$A=f(x,v,t)f(x,w,t)$, and $B=f(x,v',t)f(x,w',t)$. Let
$v_*=1\,\mathrm{m\,s^{-1}}$ and
$\omega_3(v)=\sum_{j=0}^3(|v|/v_*)^j$.

For every compact time interval $J\subset I$, assume there are integrable
velocity majorants, independent of $(x,t)\in\Omega\times J$, for each of
$f\omega_3(v)$, $f|\ell|$, $|v|f|\ell|$,
$(1+|\ell|)|\partial_t f|$, and
$(1+|\ell|)|v|\,|\nabla_x f|$. At every $(x,t)$, assume that $f(x,\cdot,t)$
belongs to the collision domain and that the weak collision tests $1$ and
$\ell(x,\cdot,t)$ are measurable and absolutely convergent. For each $t\in I$,
assume that the map
$$x\longmapsto\int_{Q_{\rm el}}|(A-B)\log(A/B)|\,d\nu$$
is measurable and belongs to $L^1(\Omega,dx)$. Assume that $f$ solves the adopted kinetic equation
$\partial_t f+v\cdot\nabla_x f=Q_\nu(f)$.

Define
$$h(x,t)=\int_{\mathbb R^3}f\log(f/f_{\rm ref})\,d^3v,\qquad J_H(x,t)=\int_{\mathbb R^3}v f\log(f/f_{\rm ref})\,d^3v,$$
where $h$ and $J_H$ have units $\mathrm{m^{-3}}$ and
$\mathrm{m^{-2}\,s^{-1}}$, respectively.
Also define
$$D(x,t)=\frac14\int_{Q_{\rm el}}(A-B)\log(A/B)\,d\nu.$$
Under the collision-rate normalization in the adopted model, $D$ has units
$\mathrm{m^{-3}\,s^{-1}}$.
Then $D(x,t)\ge0$ and
$$\partial_t h+\nabla_x\cdot J_H=-D$$
throughout $I\times\Omega$. The identity is conditional on the adopted weak
collision model and makes no assertion about reversible many-particle entropy
or empirical validity.

## Statement references

[MIT OpenCourseWare 8.333, Lecture 9, §III.E (complete H-theorem treatment)](https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/ce250b44390106351cb97aafb0060ca7_MIT8_333F13_Lec9.pdf)

[David Tong, §2.3, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

## Facts & Assumptions

**Given:** The positive regular solution, the stated velocity envelopes, the adopted kinetic equation, and absolutely convergent collision tests $1$ and $\ell$.

[F1] [[post-fd-boltzmann-model]]: the adopted equation is $\partial_t f+v\cdot\nabla_x f=Q_\nu(f)$; its weak identity applies to compact smooth tests and to moment or logarithmic tests whose two sides converge absolutely, including $1$ and $\ell$ under [A1].

[F2] [[def-fd-physical-kinetic-observables]]: $h=\int f\log(f/f_{\rm ref})\,d^3v$ and $J_H=\int v f\log(f/f_{\rm ref})\,d^3v$ are the dimensionless-log entropy integral and its flux.

[F3] [[def-fd-elastic-collision-measure]]: the weak identity is $\int\varphi Q_\nu(f)\,dv=\frac14\int(B-A)\delta\varphi\,d\nu$, where $\delta\varphi=\varphi(v)+\varphi(w)-\varphi(v')-\varphi(w')$, for each admissible test; $1$ and the logarithmic test are explicitly required for the corresponding balances.

[F4] [[thm-chain-rule]]: for differentiable real functions, $(g\circ f)'(c)=g'(f(c))f'(c)$ when the stated domains and differentiability hypotheses hold.

[F5] [[def-derivative]]: the derivative is the limit of the difference quotient at a limit point of its domain.

[F6] [[thm-algebra-of-function-limits]]: products of functions with existing finite limits have the product limit.

[F7] [[thm-differentiation-under-the-integral-sign]]: an integrable common majorant for a parameter derivative permits differentiating its integral and identifies the derivative with the integral of the derivative.

[F8] [[thm-logarithm-derivative-and-integral]]: $\log'(z)=1/z$ for $z>0$.

[F9] [[cor-mean-value-theorem]]: a real function continuous on a closed interval and differentiable in its interior attains its secant slope as a derivative at an interior point.

[A1] All regularity, envelope, collision-domain, weak-test, and equation assumptions stated above hold.

## Proof

1.1 For any coordinate $y\in\{t,x_1,x_2,x_3\}$, [F4] and [F8] give
$\partial_y\ell=(\partial_y f)/f$. The difference quotient identity
$$\frac{f(y+s)\ell(y+s)-f(y)\ell(y)}{s}=f(y+s)\frac{\ell(y+s)-\ell(y)}{s}+\ell(y)\frac{f(y+s)-f(y)}{s}$$
and [F5]–[F6] give
$\partial_y(f\ell)=(1+\ell)\partial_y f$. Apply [F7] to the velocity
integrals defining $h$ and each component of $J_H$; the stated majorants are
the required common integrable bounds. Thus
$$\partial_t h+\nabla_x\cdot J_H=\int_{\mathbb R^3}(1+\ell)(\partial_t f+v\cdot\nabla_x f)\,d^3v.$$
[given, A1, F2, F4, F5, F6, F7, F8, algebra]

2.1 Substitute the model equation [F1]. The test $1$ has zero collision
bracket, so $\int Q_\nu(f)\,d^3v=0$. For the test $\ell$,
$$\delta\ell=\log\!\left(\frac{f(x,v,t)f(x,w,t)}{f_{\rm ref}^2}\right)-\log\!\left(\frac{f(x,v',t)f(x,w',t)}{f_{\rm ref}^2}\right)=\log(A/B),$$
whose logarithm arguments are dimensionless. By [F3],
$$\int_{\mathbb R^3}\ell Q_\nu(f)\,d^3v=\frac14\int_{Q_{\rm el}}(B-A)\log(A/B)\,d\nu=-D.$$
The absolute-convergence assumptions justify both tests and the subtraction.
Combining with step 1.1 proves the local balance. [given, A1, F1, F3, step 1.1, algebra]

3.1 If $A>B>0$, then $A/B>1$, so the mean value theorem and [F8] give $\log(A/B)>\log 1=0$; if $0<A<B$, then $A/B<1$ and they give $\log(A/B)<0$. Equality holds when $A=B$. Therefore $(A-B)\log(A/B)\ge0$ at every collision quadruple. The collision measure is nonnegative, so its integral gives $D\ge0$. [given, A1, F8, F9, step 2.1, algebra] ∎
