---
id: def-kuznetsov-bessel-transform
kind: definition
title: "Kuznetsov Bessel Transform"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-maass-spectral-parameter
  - def-kuznetsov-paley-wiener-test-function
  - def-euler-gamma-function
  - lem-gamma-integral-converges-locally-uniformly
  - thm-gamma-functional-equation
  - cor-gamma-function-has-no-zeros
  - thm-stirling-formula-gamma
  - thm-ratio-test
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§3.3 definition (3.14), printed p. 19, and §3.4 rotation (3.15), printed pp. 20–21, for the test class; §7.5.2, Proposition 7.10, printed pp. 80–81, for the J-Bessel transform."
    - title: "Dorian Goldfeld, Trace Formulae for SL(2,R), Columbia lecture notes"
      url: "https://www.math.columbia.edu/~goldfeld/TraceFormulae-4-12-2020.pdf"
      locator: "§9, J-Bessel transform in the Kuznetsov formula; printed pp. 46–48."
---

## Definition

For $x>0$ and $t\in\mathbb R$, define the imaginary-order Bessel function of
the first kind by the absolutely convergent series
$$J_{2it}(x)=\sum_{k=0}^{\infty} \frac{(-1)^k\exp\!\big((2k+2it)\log(x/2)\big)} {k!\,\Gamma(k+1+2it)},$$
using the real logarithm for $x/2>0$. For a function
$h:\mathbb R\to\mathbb C$ for which the integral below is absolutely
convergent, define its Kuznetsov Bessel transform by
$$\mathcal B_h(x):=\frac{2i}{\pi}\int_{-\infty}^{\infty} J_{2it}(x)h(t)\frac{t}{\cosh(\pi t)}\,dt.$$
Every spectral test function $h$ with $h(i\,\cdot)\in PW^m(\mathbb C)_{\mathrm{even}}$ for $m>2$ is in this domain.
The same is true if $|h(t)|\le C(1+|t|)^{-B}$ on the real line for some
$B>2$.

## Definition references

[[def-maass-spectral-parameter]]

[[def-kuznetsov-paley-wiener-test-function]]

[[def-euler-gamma-function]]

[[thm-gamma-functional-equation]]

[[cor-gamma-function-has-no-zeros]]

[[thm-stirling-formula-gamma]]

[[thm-ratio-test]]

## Facts & Assumptions

**Given:** $x>0$, $t\in\mathbb R$, and either a spectral test function with $h(i\,\cdot)\in PW^m$ and $m>2$ or a real-axis decay bound of exponent $B>2$.

[F1] Gamma is defined and finite on the right half-plane and has no zeros.
([[def-euler-gamma-function]], [[cor-gamma-function-has-no-zeros]])

[F2] For $\operatorname{Re}z>0$, $\Gamma(z+1)=z\Gamma(z)$.
([[thm-gamma-functional-equation]])

[F3] A series of positive terms converges if the successive-term ratio tends
to a limit less than $1$. ([[thm-ratio-test]])

[F4] Stirling's formula holds uniformly on every closed sector avoiding the
negative real axis, in particular on $z=1+2it$ for real $t$.
([[thm-stirling-formula-gamma]])

[F5] If $h(i\,\cdot)\in PW^m(\mathbb C)$, then for real $t$,
$|h(t)|\le A_h(1+|t|)^{-m}$ for a constant $A_h$.
([[def-kuznetsov-paley-wiener-test-function]])

[F6] The Euler integral defining Gamma converges locally uniformly on the
right half-plane. ([[lem-gamma-integral-converges-locally-uniformly]])

## Verification

1.1 Every Gamma argument $k+1+2it$ in the defining series has real part $k+1>0$, so its denominator is defined and nonzero by [F1]. If $a_k$ is its $k$th term, [F2] gives $$\left|\frac{a_{k+1}}{a_k}\right|= \frac{(x/2)^2}{(k+1)|k+1+2it|}\longrightarrow0.$$ By [F3] the series converges absolutely and defines $J_{2it}(x)$. [F1, F2, F3, given, algebra]

1.2 Apply [F4] to $z=1+2it$. Since $\arg(1+2it)\to\operatorname{sgn}(t)\pi/2$, Stirling gives $|\Gamma(1+2it)|\asymp |t|^{1/2}e^{-\pi|t|}$ as $|t|\to\infty$. On each bounded $t$ interval, the truncated Euler integrals over $[\varepsilon,R]$ are continuous in $t$ and converge locally uniformly to $\Gamma(1+2it)$ by [F6]. Hence Gamma is continuous there; [F1] and compactness bound its reciprocal. Thus for a constant $C$, $$\frac1{|\Gamma(1+2it)|\cosh(\pi t)} \le C(1+|t|)^{-1/2}\qquad(t\in\mathbb R).$$ [F1, F4, F6, given, algebra]

2.1 Iterating [F2] gives $|\Gamma(k+1+2it)|=|\Gamma(1+2it)|\prod_{j=1}^k|j+2it|$ $\ge |\Gamma(1+2it)|k!$. Since $|(x/2)^{2it}|=1$, $$|J_{2it}(x)|\le\frac1{|\Gamma(1+2it)|} \sum_{k=0}^{\infty}\frac{(x/2)^{2k}}{(k!)^2}.$$ The series on the right converges for each fixed $x$ by [F3]. [F2, F3, step 1.1, given, algebra]

3.1 Combining steps 1.2 and 2.1 gives $|J_{2it}(x)|/\cosh(\pi t)\le C_x(1+|t|)^{-1/2}$ for each fixed $x>0$. If $h(i\,\cdot)\in PW^m$ with $m>2$, [F5] bounds the transform integrand by $C_{x,h}(1+|t|)^{1/2-m}$. Since $m-1/2>1$, $$\int_{-\infty}^{\infty}(1+|t|)^{1/2-m}\,dt =\frac{2}{m-3/2}<\infty.$$ The same argument with $|h(t)|\le C(1+|t|)^{-B}$ and $B>2$ gives an integrable bound $C_x'(1+|t|)^{1/2-B}$; its integral is $2/(B-3/2)<\infty$. Thus the transform integral is absolutely convergent in both stated domains. [F5, step 2.1, step 1.2, given, algebra] ∎

## Verification status

The transform and its stated convergence domain are proved locally. The
separate orbital-integral identity identifying this transform with the
geometric kernel remains unresolved; Knightly–Li Proposition 7.10 cites
Zagier/Joyner or Li for that step.
