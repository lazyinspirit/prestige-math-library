---
id: def-real-elementary-functions-and-domains
kind: definition
title: Real elementary functions and their domains
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 6
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-nonnegative-square-root-exists-and-unique, def-intervals-rectangles-and-complex-balls, lem-continuous-functions-riemann-integrable, lem-elementary-power-series-converge-uniformly-on-bounded-sets]
verification:
  precheck: n/a
sources:
  references:
    - title: "Rump, Rigorous and Portable Standard Functions, §§5–7"
      url: "https://www.tuhh.de/ti3/paper/rump/Ru01b.pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §7"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Definition

Every integral below is the oriented Riemann integral constructed from upper
and lower Darboux sums in
[[lem-continuous-functions-riemann-integrable]]. It exists for each displayed
continuous integrand on the finite interval between its endpoints, is additive
in intervals, reverses sign when the endpoints are reversed, is monotone in
the integrand, and satisfies
$|\int_a^b g(t)\,dt|\le|b-a|\max_{t\text{ between }a\text{ and }b}|g(t)|$.
These properties also
give constant comparison bounds and the average-value difference quotient
used to differentiate the integral-defined functions.

The exponential is $\exp(x)=\sum_{k=0}^{\infty}x^k/k!$ for $x\in\mathbb R$.
The sine and cosine are the everywhere-convergent power series
$\sin x=\sum_{k=0}^{\infty}(-1)^k x^{2k+1}/(2k+1)!$ and
$\cos x=\sum_{k=0}^{\infty}(-1)^k x^{2k}/(2k)!$. Define
$\arctan x=\int_0^x dt/(1+t^2)$ and set $\pi=4\arctan1$. The natural
logarithm $\ln$ is defined on $(0,\infty)$ by $\ln x=\int_1^x dt/t$.

The square root is the unique nonnegative real $y$ with $y^2=x$ for $x\ge0$;
existence and uniqueness follow from
[[lem-nonnegative-square-root-exists-and-unique]]. The tangent is
$\tan x=\sin x/\cos x$ on the set where $\cos x\ne0$.

For complex $z=x+iy$, the modulus $|z|=\sqrt{x^2+y^2}$ is defined in
[[def-intervals-rectangles-and-complex-balls]]. The complex exponential is
$\exp(x+iy)=\exp(x)(\cos y+i\sin y)$. The principal complex logarithm is
$\operatorname{Log}(z)=\ln|z|+i\operatorname{Arg}(z)$ on
$\mathbb C\setminus(-\infty,0]$. For $z=x+iy$ in this domain, define
$$
\operatorname{Arg}(x+iy)=
\begin{cases}
\arctan(y/x),&x>0,\\
\pi/2,&x=0,\ y>0,\\
-\pi/2,&x=0,\ y<0,\\
\pi-\arctan(y/(-x)),&x<0,\ y>0,\\
-\pi+\arctan((-y)/(-x)),&x<0,\ y<0.
\end{cases}
$$
The excluded negative real axis is the remaining case $x<0,y=0$; zero is
also excluded.

These are point functions. An interval extension must separately enclose their
exact ranges, test the stated domains, and return a non-finite status when its
finite budget cannot certify a reduction or endpoint.
