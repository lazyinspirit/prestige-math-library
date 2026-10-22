---
id: thm-gr-fx-leapfrog-mode-stability
kind: theorem
title: "Fourier-mode stability of the periodic leapfrog benchmark"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - alg-gr-fx-periodic-wave-leapfrog
  - def-complex-exponential
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
  - thm-eulers-formula
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - thm-quarter-turn-values-and-shift-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-nth-roots-exist
  - def-finite-sum
  - lem-finite-sum-reindexing-and-fubini
dependency_roles:
  alg-gr-fx-periodic-wave-leapfrog: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  thm-eulers-formula: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-nth-roots-exist: mathematical-premise
  def-finite-sum: mathematical-premise
  lem-finite-sum-reindexing-and-fubini: mathematical-premise
physical_scope: "A Fourier-mode calculation for the exact periodic scalar recurrence only. It gives no convergence theorem for Einstein evolution, no general nonlinear stability result, and no uniform-in-time displacement bound for a nonzero mean velocity."
sources:
  references:
    - title: "Gilbert Strang, Mathematical Methods for Engineers II, MIT OpenCourseWare 18.086, Spring 2006, §5.3, complete 11-page lecture note"
      url: "https://ocw.mit.edu/courses/18-086-mathematical-methods-for-engineers-ii-spring-2006/8eaa23367474c809cc0816f24fdacc7f_am53.pdf"
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, unpublished text (1996), Chapter 3, complete 37-page author PDF"
      url: "https://people.maths.ox.ac.uk/trefethen/3all.pdf"
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, unpublished text (1996), Chapter 4, complete 40-page author PDF"
      url: "https://people.maths.ox.ac.uk/trefethen/4all.pdf"
verification:
  precheck: pending
---

## Statement

Let $N\ge3$, $h=2\pi/N$, $k>0$, and $\lambda=k/h$. Complexify the real
linear recurrence of the periodic wave algorithm. For each discrete Fourier
index $\ell\in\{0,1,\ldots,N-1\}$ define the mode
$$
e_\ell(j):=\exp(2\pi i\ell j/N),\qquad j\in\mathbb Z/N\mathbb Z.
$$
If $0<\lambda<1$, every nonconstant mode ($\ell\ne0$) has recurrence
coefficient
$$
c_\ell:=1-2\lambda^2\sin^2(\pi\ell/N)\in(-1,1)
$$
and two distinct amplification roots
$$
z_{\ell,\pm}:=c_\ell\pm i\sqrt{1-c_\ell^2},\qquad |z_{\ell,\pm}|=1.
$$
Consequently, each fixed nonconstant mode has bounded amplitude on every
finite slab. For arbitrary real initial arrays define their spatial means by
$$
\bar u^0:=\frac1N\sum_{j=0}^{N-1}u^0_j,\qquad \bar v^0:=\frac1N\sum_{j=0}^{N-1}v^0_j.
$$
The constant mode has the repeated root $1$ and evolves exactly as
$\bar u^0+nk\bar v^0$; for any fixed $T\ge0$ it is bounded on the slab
$0\le nk\le T$ but has no uniform-in-time displacement bound when
$\bar v^0\ne0$. This statement
does not assert that the condition $0<\lambda<1$ alone proves convergence of a
numerical relativity scheme. For each fixed $N$, define the nonzero discrete
frequencies $\omega_\ell:=2h^{-1}|\sin(\pi\ell/N)|$, $1\le\ell<N$.
This finite list has a positive minimum; it is a fixed-grid fact and no bound
uniform in $N$ is asserted.
For even $N$, the alternating mode with Fourier index $\ell=N/2$ is called
the Nyquist mode. At the endpoint $\lambda=1$, if $N$ is even and
$u_j^0=a_0(-1)^j$, $v_j^0=\beta_0(-1)^j$ for real amplitudes $a_0,\beta_0$,
then each output level satisfies
$$
u_j^n=(-1)^j(-1)^n(a_0-nk\beta_0).
$$
The Nyquist amplification root is repeated at $-1$, and a nonzero Nyquist
velocity amplitude $\beta_0$ gives linear growth in the step number.

## Statement references

[[alg-gr-fx-periodic-wave-leapfrog]]

[[def-complex-exponential]]

[[def-complex-numbers-and-arithmetic]]

[[thm-complex-numbers-form-a-field]]

[[thm-eulers-formula]]

[[thm-sine-and-cosine-addition-formulas]]

[[thm-sine-and-cosine-derivatives]]

[[thm-quarter-turn-values-and-shift-formulas]]

[[cor-trigonometric-parity-and-pythagorean-identity]]

[[thm-sine-cosine-zero-sets-and-fundamental-period]]

[[thm-nth-roots-exist]]

[[def-finite-sum]]

[[lem-finite-sum-reindexing-and-fubini]]

## Facts & Assumptions

**Given:** The real periodic wave algorithm, $N\ge3$, $k>0$, and
$0<\lambda=k/h<1$.

[A1] The recurrence is extended complex-linearly to $\mathbb C^N$; its
real and imaginary parts separately satisfy the original real recurrence.

[F1] [[alg-gr-fx-periodic-wave-leapfrog]]: $D_h$ is the centered periodic
second difference, the startup is $u^1=u^0+kv^0+(k^2/2)D_hu^0$, and for
$n\ge1$ the update is $u^{n+1}=2u^n-u^{n-1}+k^2D_hu^n$.

[F2] [[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]],
[[def-complex-exponential]]: $\mathbb C$ is a field with imaginary unit $i$,
$i^2=-1$, and the complex exponential is defined by its power series.

[F3] [[thm-eulers-formula]], [[thm-sine-and-cosine-derivatives]]:
$\exp(i\theta)=\cos\theta+i\sin\theta$, $\cos0=1$, and $\sin0=0$.

[F4] [[thm-sine-and-cosine-addition-formulas]],
[[cor-trigonometric-parity-and-pythagorean-identity]]: the double-angle
identity is $\cos(2x)-1=-2\sin^2x$.

[F5] [[thm-sine-cosine-zero-sets-and-fundamental-period]]: sine and cosine
have period $2\pi$, the zero set of sine is $\pi\mathbb Z$, and for
$0<\ell<N$, $\sin(\pi\ell/N)\ne0$.

[F6] [[cor-trigonometric-parity-and-pythagorean-identity]]: $|\sin x|\le1$
for every real $x$.

[F7] [[thm-nth-roots-exist]]: each nonnegative real has a unique nonnegative
square root.

[F8] [[def-finite-sum]], [[lem-finite-sum-reindexing-and-fubini]]: finite
cyclic shifts preserve the sum of an $N$-tuple.

[F9] [[thm-quarter-turn-values-and-shift-formulas]]: shifts by $\pi$ negate
sine and cosine, and $\sin\pi=0$, $\cos\pi=-1$.

## Proof

**Proof technique:** direct.

1.1 The period and zero-set facts in [F3, F5] make $e_\ell$ well-defined on $\mathbb Z/N\mathbb Z$. Put $\theta_\ell=2\pi\ell/N$. By [F3] and [F4], $$ (D_he_\ell)(j)=h^{-2}\bigl(e^{i\theta_\ell}-2+e^{-i\theta_\ell}\bigr)e_\ell(j) =-4h^{-2}\sin^2(\pi\ell/N)e_\ell(j). $$ Thus a mode sequence $u^n_j=a_ne_\ell(j)$ obeys $a_{n+1}-2c_\ell a_n+a_{n-1}=0$ for every update step. [A1, F1, F2, F3, F4, F5, algebra]

1.2 For the constant mode, define $\bar u^n=N^{-1}\sum_{j=0}^{N-1}u_j^n$. By [F8], a cyclic shift preserves a finite sum, so $\sum_j(D_hu^n)_j=0$. Averaging the update [F1] therefore gives $\bar u^{n+1}=2\bar u^n-\bar u^{n-1}$, and averaging the startup gives $\bar u^1=\bar u^0+k\bar v^0$. Induction yields $\bar u^n=\bar u^0+nk\bar v^0$; when $nk\le T$ its magnitude is at most $|\bar u^0|+T|\bar v^0|$, while nonzero $\bar v^0$ makes it unbounded as $n\to\infty$. [F1, F8, algebra]

1.3 For fixed $N$, list the $N-1$ numbers $2h^{-1}|\sin(\pi\ell/N)|$, $1\le\ell<N$. Each is positive by [F5], since $\pi\ell/N$ is not an integer multiple of $\pi$. Taking the smaller of the first two positive numbers and then successively the smaller with each next number gives, by induction over this finite list, an attained positive minimum. The argument is for fixed $N$ only. [F5, algebra]

1.4 Suppose $N$ is even and $\lambda=1$. Repeated $\pi$-shift use of [F9] gives $\sin(\pi j)=0$ and $\cos(\pi j)=(-1)^j$ for every grid index $0\le j<N$; Euler's formula [F3] identifies the Fourier character $e_{N/2}(j)$ with the alternating array $(-1)^j$. Its periodic neighbors are equal to its negative. By [F1], $(D_h((-1)^\cdot))_j=-4h^{-2}(-1)^j$, so the mode recurrence has coefficient $c=1-2\lambda^2=-1$ and characteristic polynomial $(z+1)^2$. [F1, F3, F9, algebra]

2.1 If $\ell\ne0$, [F5] and $0<\lambda<1$ imply $0<2\lambda^2\sin^2(\pi\ell/N)<2$, so $-1<c_\ell<1$. Then $r_\ell:=\sqrt{1-c_\ell^2}$ exists and is positive by [F7]. Direct substitution shows that $z^2-2c_\ell z+1=0$ has roots $c_\ell\pm ir_\ell$; they are distinct, and $|c_\ell\pm ir_\ell|^2=c_\ell^2+r_\ell^2=1$. [A1, F2, F5, F6, F7, step 1.1, algebra]

3.1 Since the roots are distinct, for any initial pair $a_0,a_1$ there are unique complex constants $A,B$ with $a_0=A+B$ and $a_1=Az_{\ell,+}+Bz_{\ell,-}$. The sequence $Az_{\ell,+}^n+Bz_{\ell,-}^n$ obeys the recurrence in step 1.1 and has that initial pair; induction on $n$ therefore identifies it with $a_n$. Its absolute value is at most $|A|+|B|$ for all steps, so in particular on every finite slab. [step 1.1, step 2.1, algebra]

4.1 Write $u_j^n=a_n(-1)^j$ and put $q_n:=(-1)^na_n$. The repeated-root recurrence from step 1.4 gives $q_{n+1}-2q_n+q_{n-1}=0$, so its first differences are constant and $q_n=a_0+n(-a_1-a_0)$. The startup in [F1] with $u_j^0=a_0(-1)^j$ and $v_j^0=\beta_0(-1)^j$ gives $a_1=-a_0+k\beta_0$, hence $a_n=(-1)^n(a_0-nk\beta_0)$. For $\beta_0\ne0$ its magnitude grows linearly in $n$; for $\beta_0=0$ it is bounded. [F1, step 1.4, algebra] ∎

## Remarks

The root calculation is mode-by-mode. A convergence theorem for a discretized
Einstein system would also need an error estimate for the initialization and
a discrete energy estimate for the actual reduced equations, including its
boundary treatment. The analytic finite-slab estimate on
[[thm-gr-fx-finite-slab-stability]] concerns continuum solutions of a fixed
gauge system and does not supply those discrete estimates.
