---
id: lem-angular-fourier-orthogonality
kind: lemma
title: "Integer exponentials are orthogonal for angular Lebesgue measure"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-time-series-spectral-measure-and-periodogram
  - thm-continuous-implies-integrable
  - thm-heine-cantor-r
  - def-darboux-integral
  - def-darboux-sums
  - def-nonnegative-lebesgue-integral
  - def-integral-of-a-nonnegative-simple-function
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-ftc-second-part
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - thm-quarter-turn-values-and-shift-formulas
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-countable-choice
  - thm-continuous-preimages-of-borel-sets-are-borel
  - cor-archimedean-reciprocal
  - thm-chain-rule
  - cor-trigonometric-parity-and-pythagorean-identity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Section 4.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
      locator: "Theorem 4.2, p. 63: angular-frequency spectral representation and Fourier normalization."
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
      locator: "Section 3.1, PDF pp. 36–38: circle-frequency convention and normalized Fejér kernel."
---

## Statement

Assume Countable Choice. For every integer $k$, with the unnormalized angular Lebesgue measure
$d\lambda$ on $\mathbb T$ from
[[def-time-series-spectral-measure-and-periodogram]],
$$\int_{\mathbb T} e^{ik\lambda}\,d\lambda= \begin{cases}2\pi,&k=0,\\0,&k\ne0.\end{cases}$$

## Facts & Assumptions

**Given:** Countable Choice, an integer $k$, and angular Lebesgue measure
$d\lambda$ on the circle, integrated over one period $[-\pi,\pi)$.

[A1] [[def-countable-choice]]: the Countable Choice assumption required for
the angular Lebesgue measure and its interval values.

[F1] [[def-time-series-spectral-measure-and-periodogram]]: $d\lambda$ is
ordinary Lebesgue measure on one angular period, with total mass $2\pi$.

[F2] [[thm-continuous-implies-integrable]] and [[thm-heine-cantor-r]]: a
continuous real function on a closed bounded interval is Riemann integrable,
bounded, and uniformly continuous.

[F3] [[def-nonnegative-lebesgue-integral]],
[[def-integral-of-a-nonnegative-simple-function]], and
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the Lebesgue
integral is monotone on nonnegative functions, and the integral of a
nonnegative step function is the sum of its values times the measures of its
intervals.

[F4] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: an interval has
Lebesgue measure equal to its length, and a singleton has measure zero.

[F5] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the Lebesgue
integral is linear on integrable real functions.

[F6] [[thm-ftc-second-part]], [[thm-sine-and-cosine-derivatives]], and
[[thm-chain-rule]]: integrating a continuous derivative on a closed interval
gives the endpoint difference; the derivatives of sine and cosine and the
chain rule give the antiderivatives used below.

[F7] [[thm-sine-cosine-zero-sets-and-fundamental-period]] and
[[cor-trigonometric-parity-and-pythagorean-identity]]: for integer $k\ne0$,
$\sin(k\pi)=\sin(-k\pi)=0$ and $\cos(k\pi)=\cos(-k\pi)$.

[F8] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]
and [[def-integrable-real-and-complex-functions-and-their-integrals]]:
$e^{ik\lambda}=\cos(k\lambda)+i\sin(k\lambda)$, and the integral of a
complex function is the integral of its real part plus $i$ times that of its
imaginary part.

[F9] [[def-darboux-integral]] and [[def-darboux-sums]]: for a bounded
Riemann-integrable real function, the integral lies between the lower and
upper Darboux sums for every partition.

[F10] [[thm-continuous-preimages-of-borel-sets-are-borel]]: the preimage of
every Borel set under a continuous map is Borel; in particular the continuous
real function in step 1.1 is Borel measurable.

[F11] [[cor-archimedean-reciprocal]]: for every $\delta>0$ there is an
$N\ge1$ with $2\pi/N<\delta$.

## Proof



**Proof technique:** compare the Lebesgue integral with Darboux sums, then use
the fundamental theorem of calculus.

1.1 Let $g:[-\pi,\pi]\to\mathbb R$ be continuous and bounded by $B\ge0$. For each $N\ge1$, partition the interval into the fixed equal pieces $J_{j,N}=[-\pi+2\pi j/N,-\pi+2\pi(j+1)/N)$, with the endpoint $\pi$ added to the last piece. On each piece take the infimum and supremum of $g+B$ on its closed hull and use them as the constant values of simple step functions $\ell_N$ and $u_N$. They satisfy $0\le\ell_N\le g+B\le u_N$. By [F3]–[F4], under [A1], their Lebesgue integrals with respect to $\lambda_1$ are exactly the lower and upper Darboux sums of $g+B$ for this partition. Given $\eta>0$, uniform continuity [F2] gives $\delta>0$ such that the oscillation on any interval of length below $\delta$ is less than $\eta$. Choose $N$ with $2\pi/N<\delta$ by [F11]; then every oscillation is below $\eta$, and the gap between the sums is at most $2\pi\eta$. Hence that gap tends to zero. Monotonicity of the Lebesgue integral places $\int_{[-\pi,\pi)}(g+B)\,d\lambda_1$ between the same sums; the Darboux integral of $g+B$ lies between them as well. Therefore the Lebesgue and Darboux integrals of $g+B$ agree. By linearity [F5] and $\lambda_1([-\pi,\pi))=2\pi$ from [F1], the two integrals of $g$ agree. [A1, F1, F2, F3, F4, F5, F9, F10, F11, given]

1.2 If $k=0$, the integrand is the constant $1$, so its integral is $2\pi$ by [F1] under [A1]. [A1, F1, given]

2.1 If $k\ne0$, apply step 1.1 to the continuous real functions $g(\lambda)=\cos(k\lambda)$ and $g(\lambda)=\sin(k\lambda)$. Their antiderivatives are respectively $\sin(k\lambda)/k$ and $-\cos(k\lambda)/k$ by [F6] and the chain rule. Their endpoint differences vanish by [F7], so both Lebesgue integrals on $[-\pi,\pi)$ are zero. These functions are $2\pi$-periodic; by the angular integral definition [F1], their integrals on $\mathbb T$ are those same integrals over $[-\pi,\pi)$. Euler's identity and the complex-integral convention [F8] give $\int_{\mathbb T}e^{ik\lambda}\,d\lambda=0$. [A1, F1, F2, F6, F7, F8, step 1.1]

3.1 The cases $k=0$ and $k\ne0$ exhaust the integers, and steps 1.2 and 2.1 give the stated formula. [given, step 1.2, step 2.1, algebra] ∎