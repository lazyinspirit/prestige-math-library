---
id: ex-chebyshev-extremal-nodes-and-arcsine-measure
kind: example
title: "Chebyshev extremal nodes converge to the arcsine equilibrium measure"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - thm-nonnegative-weighted-sums-of-measures
  - def-weak-convergence-of-borel-probability-measures
  - ex-logarithmic-capacity-of-a-real-interval
  - def-chebyshev-polynomials-first-and-second-kind
  - thm-chebyshev-multiple-angle-identities
  - thm-darboux-equals-riemann
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-choice-implies-dependent-implies-countable-choice
  - cor-trigonometric-parity-and-pythagorean-identity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, Example 1.3 (Chebyshev nodes) and the arcsine distribution, printed p. 170"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §5"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§5, Chebyshev nodes and the arcsine measure"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice. For $n\ge1$ let $x_{k,n}:=\cos\frac{k\pi}n$ for
$0\le k\le n$ and let
$\nu_n:=\frac1{n+1}\sum_{k=0}^n\delta_{x_{k,n}}$. Then $\nu_n$ converges
weakly, as $n\to\infty$, to the arcsine equilibrium measure
$dx/(\pi\sqrt{1-x^2})$ of $[-1,1]$, and the points $x_{0,n},\dots,x_{n,n}$
are exactly the points of $[-1,1]$ at which the Chebyshev polynomial $T_n$
attains its extreme values $\pm1$, alternately signed.

## Facts & Assumptions

**Given:** the nodes $x_{k,n}=\cos\frac{k\pi}n$, the empirical measures $\nu_n$, the Chebyshev polynomials $T_n$ of [[def-chebyshev-polynomials-first-and-second-kind]], and the Axiom of Choice.

[F1] The multiple-angle identity $T_n(\cos\theta)=\cos(n\theta)$ holds for all real $\theta$ ([[thm-chebyshev-multiple-angle-identities]]), and $|\cos u|\le1$ for real $u$, with $\cos(k\pi)=(-1)^k$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[F2] The arcsine measure $\mu$ of $[-1,1]$ is the unique equilibrium measure of $[-1,1]$, and for every continuous $f$ on $[-1,1]$ one has $\int f\,d\mu=\frac1\pi\int_0^\pi f(\cos\theta)\,d\theta$ ([[ex-logarithmic-capacity-of-a-real-interval]]).

[F3] Dirac measures are probability measures, finite nonnegative weighted sums of measures are measures, and $\nu_n$ is therefore a Borel probability measure on $[-1,1]$ ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]], [[thm-nonnegative-weighted-sums-of-measures]]).

[F4] Weak convergence $\nu_n\Rightarrow\mu$ means $\int f\,d\nu_n\to\int f\,d\mu$ for every bounded continuous real $f$ ([[def-weak-convergence-of-borel-probability-measures]]).

[F5] A continuous real function on the closed bounded interval $[0,\pi]$ is Riemann integrable, and its uniform-mesh Riemann sums converge to the integral: $\frac1m\sum_{j=0}^{m-1}g\bigl(\frac{j\pi}m\bigr)\to\frac1\pi\int_0^\pi g(\theta)\,d\theta$ (apply [[thm-continuous-on-a-rectangle-is-riemann-integrable]] in dimension $1$, then [[thm-darboux-equals-riemann]]). Its Riemann integral equals its Lebesgue integral by [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], whose Countable Choice hypothesis is supplied by the assumed Axiom of Choice through [[thm-choice-implies-dependent-implies-countable-choice]].

## Verification

**Proof technique:** direct.

1.1 For each $n\ge1$ the points $x_{k,n}=\cos\frac{k\pi}n$ lie in $[-1,1]$; since $\cos$ is strictly decreasing on $[0,\pi]$ and $\frac{k\pi}n$ are strictly increasing for $k=0,\dots,n$, the $n+1$ points are pairwise distinct, and by [F3] each $\nu_n$ is a Borel probability measure on $[-1,1]$. [F3, given, algebra]

1.2 By the multiple-angle identity [F1], $T_n(x_{k,n})=\cos(k\pi)=(-1)^k$; moreover every $x\in[-1,1]$ is $x=\cos\theta$ for some $\theta\in[0,\pi]$, so $|T_n(x)|=|\cos(n\theta)|\le1$ for every $x\in[-1,1]$, with equality exactly at the points where $|\cos n\theta|=1$, that is, where $n\theta$ is an integer multiple of $\pi$. [F1, given, algebra]

1.3 **Weak convergence.** Let $f$ be a continuous real function on $[-1,1]$ and put $g(\theta):=f(\cos\theta)$; then $g$ is continuous on $[0,\pi]$, so [F5] applied with $m=n$ gives $\frac1n\sum_{k=0}^{n-1}g\bigl(\frac{k\pi}n\bigr)\to\frac1\pi\int_0^\pi g(\theta)\,d\theta$. [F5, given]

2.1 Consequently the points $x_{k,n}$ are precisely the points of $[-1,1]$ at which $T_n$ attains $\pm1$, with alternating signs, which is the second assertion. [step 1.2]

2.2 The empirical sum $\frac1{n+1}\sum_{k=0}^{n}g\bigl(\frac{k\pi}n\bigr)$ differs from $\frac1n\sum_{k=0}^{n-1}g\bigl(\frac{k\pi}n\bigr)$ by at most $\frac2{n}\sup_{[0,\pi]}|g|$, which tends to $0$, so it has the same limit $\frac1\pi\int_0^\pi g\,d\theta$. [step 1.3, algebra]

3.1 By the definition of $\nu_n$ and [F3], $\int f\,d\nu_n=\frac1{n+1}\sum_{k=0}^n f(x_{k,n})=\frac1{n+1}\sum_{k=0}^n g\bigl(\frac{k\pi}n\bigr)$, and by [F2] the limit $\frac1\pi\int_0^\pi g\,d\theta$ equals $\int f\,d\mu$; hence $\int f\,d\nu_n\to\int f\,d\mu$ for every continuous $f$ on $[-1,1]$. [step 2.2, F2, F3, algebra]

4.1 Since $[-1,1]$ is compact, every continuous real $f$ on it is bounded; step 3.1 therefore gives convergence of integrals for every bounded continuous test function on the metric space $[-1,1]$. By [F4] this is $\nu_n\Rightarrow\mu$, which together with step 2.1 proves both assertions. [step 2.1, step 3.1, F2, F4, given] ∎

## Remarks

**Why the weights are $\frac1{n+1}$.** The extremal points of $T_n$ are the $n+1$ points $\cos\frac{k\pi}n$; the Riemann sum of step 1.3 is naturally indexed by $k=0,\dots,n-1$, and step 2.2 records that replacing $n$ weights by $n+1$ weights and adjoining the endpoint $\theta=\pi$ changes the average by $O(1/n)$ only. The endpoint contribution vanishes in the limit and does not affect the weak limit.

**The limit is the equilibrium measure.** The identification of the limit with the arcsine measure is exactly the equilibrium computation of [[ex-logarithmic-capacity-of-a-real-interval]]; this example supplies the discrete approximation of that measure by Chebyshev nodes.
