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
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-ftc-second-part: mathematical-premise
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

## Proof

1.1 On the open set
$U=(0,R)\times(0,\pi/2)\times(0,2\pi)\times(0,2\pi)$ define
$$ T(r,\theta,\phi,\psi)= (r\cos\theta\cos\phi,\ r\cos\theta\sin\phi,\ r\sin\theta\cos\psi,\ r\sin\theta\sin\psi). $$
The inverse on its image is given by $r=|x|$,
$\theta=\arctan\!\bigl(\sqrt{x_3^2+x_4^2}/\sqrt{x_1^2+x_2^2}\bigr)$, and
the two planar polar angles in $(0,2\pi)$. Thus $T$ is a $C^1$ diffeomorphism
onto an open subset $V$ of the open radius-$R$ ball. The four derivative
columns are pairwise orthogonal, with squared lengths
$1,r^2,r^2\cos^2\theta,r^2\sin^2\theta$; hence
$|\det DT|=r^3\sin\theta\cos\theta$. The complement of $V$ in the closed ball
is contained in the union of the boundary sphere and the four coordinate
hyperplanes: the omitted angular branch cuts lie in $x_2=0$ or $x_4=0$, and
the omitted endpoint planes lie in $x_1=x_2=0$ or $x_3=x_4=0$. The coordinate
hyperplanes are null by [F2]. The boundary sphere is null by [F4], applied to
its indicator, since its polar radial integral is supported at the singleton
$\{R\}$, which has one-dimensional Lebesgue measure zero. The origin is
already in the coordinate hyperplanes. [given, A1, F2, F4, algebra]

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
from [F5] with antiderivative $\sin^2\theta/2$. Their product is $2\pi^2$,
which proves the formula in the Statement. Endpoints do not change any
Lebesgue integral, and all equalities are valid as extended nonnegative
integrals. [given, F3, F5, step 2.1, algebra] ∎
