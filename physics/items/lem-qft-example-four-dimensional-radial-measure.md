---
id: lem-qft-example-four-dimensional-radial-measure
kind: lemma
domain: mathematics
library: mathematics
title: Four-dimensional radial measure from two polar planes
status: draft
origin: pipeline
physical_scope: null
dependency_level: 0
deps:
  - def-countable-choice
  - lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness
  - prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-ftc-second-part
  - thm-sine-and-cosine-derivatives
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-principal-inverse-sine-and-cosine
  - thm-principal-inverse-sine-and-cosine-derivatives
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-principal-inverse-sine-and-cosine: mathematical-premise
  thm-principal-inverse-sine-and-cosine-derivatives: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Gerald B. Folland, Real Analysis, 2nd edition, Theorem 2.49
      url: https://djvu.online/file/NPF4BEtSuqdFA
    - title: John McCuan, The Volume of Unit Balls, Georgia Tech MATH 6702 notes, pp. 2–8
      url: https://mccuan.math.gatech.edu/courses/6702/ballvolume.pdf
---

## Statement

Assume the Axiom of Countable Choice. For every radius $R>0$ and every
nonnegative Borel function $\varphi:[0,R]\to[0,\infty]$, with extended
Lebesgue integrals and the convention $0\cdot\infty=0$,
$$ \int_{\{x\in\mathbb R^4:\ |x|\le R\}}\varphi(|x|)\,d\lambda_4(x) =2\pi^2\int_0^R\varphi(r)r^3\,dr. $$
In particular, the radial Jacobian and angular factor on a four-dimensional
ball are $r^3$ and $2\pi^2$, respectively.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, let $R>0$, and let
$\varphi:[0,R]\to[0,\infty]$ be Borel.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the countable-choice
axiom assumed by the measure-theoretic suppliers used below.

[F1] [[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]:
for a $C^1$ diffeomorphism between open subsets of Euclidean space, a
nonnegative Borel integral changes by the absolute Jacobian determinant, with
equality in $[0,\infty]$.

[F2] [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]:
each coordinate hyperplane in $\mathbb R^4$ is Lebesgue measurable and null
under $\mathrm{AC}_\omega$.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative
product-measurable functions on sigma-finite product spaces may be integrated
in either order, including when the result is infinite.

[F4] [[thm-polar-coordinates-formula-for-lebesgue-measure]]: in $\mathbb R^4$,
Lebesgue integration in polar coordinates uses $r^3\,dr$ and a finite Borel
surface measure on $S^3$.

[F5] [[thm-ftc-second-part]]: an integrable derivative on a closed interval
integrates to the difference of its endpoint values.

[F6] $\sin'=\cos$, $\cos'=-\sin$. [[thm-sine-and-cosine-derivatives]]

[F7] Coordinate sum, product and quotient derivatives obey their usual rules,
and derivatives of compositions obey the chain rule.
[[thm-algebra-of-derivatives]], [[thm-chain-rule]]

[F8] $\sin^2u+\cos^2u=1$, sine is odd and cosine is even.
[[cor-trigonometric-parity-and-pythagorean-identity]]

[F9] Principal $\arcsin$ and $\arccos$ invert sine on $[-\pi/2,\pi/2]$
and cosine on $[0,\pi]$, respectively; on $(-1,1)$ their derivatives are
$1/\sqrt{1-u^2}$ and $-1/\sqrt{1-u^2}$.
[[def-principal-inverse-sine-and-cosine]],
[[thm-principal-inverse-sine-and-cosine-derivatives]]

[F10] The shifts by $\pi$ give $\sin(u+\pi)=-\sin u$ and
$\cos(u+\pi)=-\cos u$; the quarter-turn values and monotonicity intervals
fix the angle branches used below.
[[thm-quarter-turn-values-and-shift-formulas]],
[[thm-sine-cosine-signs-monotonicity-and-ranges]]

[F11] Under Countable Choice, a bounded Riemann-integrable real function on
a compact interval has the same Lebesgue integral. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]

## Proof

1.1 On the open set
$U=(0,R)\times(0,\pi/2)\times(0,2\pi)\times(0,2\pi)$ define
$$ T(r,\theta,\phi,\psi)= (r\cos\theta\cos\phi,\ r\cos\theta\sin\phi,\ r\sin\theta\cos\psi,\ r\sin\theta\sin\psi). $$
Let $L=\mathbb R^2\setminus\{(a,0):a\ge0\}$, the plane slit along
the nonnegative horizontal ray. For $(a,b)\in L$, put
$\rho=\sqrt{a^2+b^2}>0$ and define $\operatorname{Arg}_L(a,b)$ to be
$\arccos(a/\rho)$ if $b>0$, $2\pi-\arccos(a/\rho)$ if $b<0$, and
$\pi$ if $b=0$ (then $a<0$). The inverse and branch identities [F8]–[F10]
give $\cos\operatorname{Arg}_L=a/\rho$ and
$\sin\operatorname{Arg}_L=b/\rho$ and make this the unique angle in
$(0,2\pi)$. Each non-axis branch is $C^1$ by [F9]. Near the negative
horizontal axis, the same angle equals $\pi-\arcsin(b/\rho)$, so it is
$C^1$ there too. Positive square roots are $C^1$: continuity follows from
$|\sqrt u-\sqrt v|\le\sqrt{|u-v|}$, and the difference quotient is
$1/(\sqrt{u+h}+\sqrt u)$, with continuous limit $1/(2\sqrt u)$ for $u>0$.
Thus all radii in these formulas are $C^1$ by [F7].
Define the open set
$V=\{x:|x|<R,\ (x_1,x_2)\in L,\ (x_3,x_4)\in L\}$.
Write $A=\sqrt{x_1^2+x_2^2}>0$, $B=\sqrt{x_3^2+x_4^2}>0$.
The inverse of $T$ on $V$ is explicitly
$r=\sqrt{A^2+B^2}$, $\theta=\arccos(A/r)\in(0,\pi/2)$,
$\phi=\operatorname{Arg}_L(x_1,x_2)$,
$\psi=\operatorname{Arg}_L(x_3,x_4)$.
Indeed $\cos\theta=A/r$, $\sin\theta=B/r$ by [F8]–[F10], and substitution
into $T$ gives $x$; the same branch identities recover every parameter of
$U$. Both directions are $C^1$, so $T:U\to V$ is a $C^1$ diffeomorphism.
Using [F6]–[F8], The four derivative
columns are pairwise orthogonal, with squared lengths
$1,r^2,r^2\cos^2\theta,r^2\sin^2\theta$; hence
$|\det DT|=r^3\sin\theta\cos\theta$. The complement of $V$ in the closed ball
is contained in the union of the boundary sphere and the four coordinate
hyperplanes: the omitted angular branch cuts lie in $x_2=0$ or $x_4=0$, and
the omitted endpoint planes lie in $x_1=x_2=0$ or $x_3=x_4=0$. The coordinate
hyperplanes are null by [F2]. The boundary sphere is null by [F4], applied to
its indicator, since its polar radial integral is supported at the singleton
$\{R\}$, which has one-dimensional Lebesgue measure zero. The origin is
already in the coordinate hyperplanes. [given, A1, F2, F4, F6, F7, F8, F9, F10, algebra]

2.1 Apply [F1] to $T$ and the nonnegative Borel function
$x\mapsto\varphi(|x|)$ on $V$. The null-complement calculation in step 1.1
shows that its integral over $V$ equals its integral over the closed ball,
even when $\varphi$ takes the value $+\infty$ on a radius whose preimage in
the omitted set is null. Therefore the ball integral equals
$$ \int_U \varphi(r)r^3\sin\theta\cos\theta\,dr\,d\theta\,d\phi\,d\psi. $$
[given, F1, step 1.1]

3.1 The integrand in step 2.1 is nonnegative and product-measurable, so [F3]
separates the four integrations. The angular factors are
$\int_0^{\pi/2}\sin\theta\cos\theta\,d\theta=1/2$ and
$\int_0^{2\pi}1\,d\phi=\int_0^{2\pi}1\,d\psi=2\pi$; the first equality follows
from [F5] with antiderivative $\sin^2\theta/2$, whose derivative is $\sin\theta\cos\theta$ by [F6]–[F7]. The angular integrands are continuous and bounded on their compact intervals, so [F11] identifies these calculus evaluations with the Lebesgue integrals in [F3]. Their product is $2\pi^2$,
which proves the formula in the Statement. Endpoints do not change any
Lebesgue integral, and all equalities are valid as extended nonnegative
integrals. [given, A1, F3, F5, F6, F7, F11, step 2.1, algebra] ∎
