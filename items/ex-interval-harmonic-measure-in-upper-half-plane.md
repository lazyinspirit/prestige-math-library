---
id: ex-interval-harmonic-measure-in-upper-half-plane
kind: example
title: "Harmonic measure of a real interval from the upper half-plane"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-one-dimensional-change-of-variables-with-absolute-derivative
  - def-borel-sigma-algebra
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-countable-choice
  - def-principal-inverse-tangent
  - ex-upper-half-plane-harmonic-measure-density
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-continuous-implies-integrable
  - thm-principal-inverse-tangent-calculus
sources:
  references:
    - title: "Boris Khoruzhenko, LTCC Potential Theory lecture notes, Sections 4.1-4.2"
      url: https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf
      locator: "Section 4.2, PDF pp. 37-39: upper half-plane Poisson measure of a real interval"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Assume the Axiom of Countable Choice for the explicit Borel measure interface.
Let $a<b$ be real, let $\mathbb H=\{z:\operatorname{Im}z>0\}$, and let
$\omega_{\mathbb H}^z$ be the upper half-plane harmonic measure of
[[ex-upper-half-plane-harmonic-measure-density]], so that
$d\omega_{\mathbb H}^z(t)=k_z(t)\,dt$ with
$k_z(t)=y/(\pi((t-x)^2+y^2))$ for $z=x+iy$. Then for every $z\in\mathbb H$
$$\omega_{\mathbb H}^z\bigl([a,b]\bigr)=\frac1\pi\Bigl(\arctan\frac{b-x}{y}-\arctan\frac{a-x}{y}\Bigr),$$
a number in $[0,1]$. The value tends to $1$ as $z$ approaches an interior
point of $[a,b]$, to $0$ as $z$ approaches a point outside $[a,b]$, and to
$1/2$ at an endpoint approached vertically along the perpendicular. The
arctangent calculation itself is choice-free; $\mathrm{AC}_\omega$ enters
through the inherited Borel-measure and Lebesgue-integral interface, including
the Riemann-to-Lebesgue comparison.

## Facts & Assumptions

**Given:** Real numbers $a<b$, a point $z=x+iy\in\mathbb H$ with $y>0$, and the Axiom of Countable Choice for the Lebesgue interface ([[def-countable-choice]]). The closed interval $[a,b]$ is a Borel subset of $\mathbb R$ ([[def-borel-sigma-algebra]]), and $\omega_{\mathbb H}^z$ is the Borel probability measure of [[ex-upper-half-plane-harmonic-measure-density]] with density $k_z$ there.

[F1] For $z\in\mathbb H$ the density $k_z(t)=y/(\pi((t-x)^2+y^2))$ is continuous and nonnegative, $\omega_{\mathbb H}^z(A)=\int_Ak_z\,d\lambda_1$ is a Borel probability measure, and $\omega_{\mathbb H}^z$ was obtained under $\mathrm{AC}_\omega$ ([[ex-upper-half-plane-harmonic-measure-density]]).

[F2] The principal inverse tangent is strictly increasing with $\frac{d}{dx}\arctan x=1/(1+x^2)$, $\arctan x=\int_0^xdt/(1+t^2)$ and $\arctan s\to\pm\pi/2$ as $s\to\pm\infty$ ([[def-principal-inverse-tangent]], [[thm-principal-inverse-tangent-calculus]]).

[F3] One-dimensional change of variables: for $C^1$ injective $\varphi$ with $\varphi'\ne0$ near $[a,b]$ and continuous $g$ on an interval containing $\varphi([a,b])$, $\int_{\min\varphi}^{\max\varphi}g(s)\,ds=\int_a^bg(\varphi(t))|\varphi'(t)|\,dt$ ([[cor-one-dimensional-change-of-variables-with-absolute-derivative]]); a continuous function on a compact interval is Riemann integrable ([[thm-continuous-implies-integrable]]); and a bounded Riemann integrable function on a compact interval is Lebesgue measurable with the same integral ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

## Verification

**Proof technique:** direct.

1.1 The density $k_z$ is continuous and nonnegative on $\mathbb R$ by [F1], so its restriction to the compact interval $[a,b]$ is Riemann integrable by [F3]; the interval is Borel, so the integral $\int_{[a,b]}k_z\,d\lambda_1$ defining $\omega_{\mathbb H}^z([a,b])$ is well posed. [F1, F3, given]

2.1 Substituting $s=(t-x)/y$ on $[a,b]$, admissible by [F3] with $\varphi(t)=(t-x)/y$ (so $\varphi'=1/y\ne0$) and $g(s)=1/(\pi(1+s^2))$, gives for the Riemann integral $$\int_a^bk_z(t)\,dt =\frac1\pi\int_{(a-x)/y}^{(b-x)/y}\frac{ds}{1+s^2} =\frac1\pi\Bigl(\arctan\frac{b-x}{y}-\arctan\frac{a-x}{y}\Bigr),$$ the last equality by the antiderivative in [F2]. [F2, F3, step 1.1, algebra]

3.1 By the Riemann-Lebesgue agreement of [F3] the same value is the Lebesgue integral of $k_z$ over $[a,b]$, hence $$\omega_{\mathbb H}^z\bigl([a,b]\bigr) =\frac1\pi\Bigl(\arctan\frac{b-x}{y}-\arctan\frac{a-x}{y}\Bigr).$$ [F1, F3, step 2.1]

4.1 The displayed value lies in $[0,1]$: it is nonnegative because $\arctan$ is strictly increasing and $a<b$ imply $\arctan((a-x)/y)<\arctan((b-x)/y)$, and it is at most $(\pi/2-(-\pi/2))/\pi=1$ because $\arctan$ takes values in $(-\pi/2,\pi/2)$. [F2, step 3.1, algebra]

4.2 Boundary values. If $t_0\in(a,b)$ and $z\to t_0$ with $z\in\mathbb H$, then $(b-x)/y\to+\infty$ and $(a-x)/y\to-\infty$, so the value tends to $(\pi/2+\pi/2)/\pi=1$. If $t_0\notin[a,b]$, then $(b-x)/y$ and $(a-x)/y$ tend to the same signed infinity, so their arctangents have the same limit and the value tends to $0$. If $t_0=a$ and $z$ approaches $a$ with $x=a$, then $(a-x)/y=0$ and $(b-x)/y\to+\infty$, so the value tends to $(\pi/2-0)/\pi=1/2$; the same computation at $t_0=b$ gives $1/2$. [F2, step 3.1, cases]

5.1 Therefore the harmonic measure of a real interval for the upper half-plane is the explicit arctangent expression of step 3.1, bounded between zero and one by step 4.1 and attaining the boundary values one, zero and one half in the three configurations of step 4.2. The use of $\mathrm{AC}_\omega$ is inherited through the Borel-measure and Lebesgue-integral interface in steps 1.1 and 3.1, including their Riemann-to-Lebesgue comparison. [F1, F3, step 3.1, step 4.1, step 4.2] ∎
