---
id: lem-dense-cube-polynomial-norming-and-reproduction
kind: lemma
title: Dense samples on a cube norm and reproduce polynomials with exponential coefficient bounds
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - thm-heine-borel-rn
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-extreme-value-metric
  - thm-eulers-formula
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Christian Rieger, Sampling Inequalities and Applications"
      url: "https://d-nb.info/994624026/34"
      locator: "Theorem 4.2.1 states cube polynomial reproduction with exponential coefficient growth and cites Madych–Nelson; the proof here independently proves the needed nonlocal reproduction statement."
---

## Statement

For each integer $d\ge1$ there are constants $A>1$ and $\kappa>0$ with the following property. Let $\Omega\subset\mathbb R^d$ be any closed cube of positive side length $L$, including a rotated cube, and let $X=\{x_1,\ldots,x_m\}\subset\Omega$ be finite and nonempty. Define its Euclidean fill distance by
$$h_X=\sup_{z\in\Omega}\min_{1\le j\le m}\|z-x_j\|_2.$$
For every integer $n\ge1$ with $2nh_X/L\le\kappa$, every real polynomial $p$ of total degree at most $n$ satisfies
$$\sup_{z\in\Omega}|p(z)|\le A^n\max_{1\le j\le m}|p(x_j)|.$$
Moreover, for each $x\in\Omega$ there exist real coefficients $\lambda_1,\ldots,\lambda_m$, independent of $p$, such that simultaneously for all such polynomials
$$p(x)=\sum_{j=1}^m\lambda_jp(x_j),\qquad \sum_{j=1}^m|\lambda_j|\le A^n.$$
No separation or Cartesian arrangement of the points is assumed. No choice principle is required.

## Statement references

[Rieger, Theorem 4.2.1](https://d-nb.info/994624026/34)

## Facts & Assumptions

**Given:** The dimension $d$, cube $\Omega$ of side length $L>0$, finite nonempty sample set $X$, and integer $n\ge1$ from the Statement. Total degree is the maximum sum of exponents of a monomial with nonzero coefficient.

[F1] Every closed bounded subset of a finite-dimensional Euclidean space is compact, with no choice principle needed ([[thm-heine-borel-rn]]).

[F2] A continuous image of a compact metric space is compact, without a choice principle ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[F3] A continuous real-valued function on a nonempty compact metric space attains its maximum and minimum, without a choice principle ([[thm-extreme-value-metric]]).

[F4] Euler's formula identifies $e^{it}=\cos t+i\sin t$, with $|e^{it}|=1$, and the derivatives of sine and cosine are cosine and minus sine ([[thm-eulers-formula]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-sine-and-cosine-derivatives]]).

## Proof

1.1 We first prove that for every real univariate polynomial $r$ of degree at most $N\ge1$, $$|r'(u)|\le\frac{100N}{\sqrt{1-u^2}}\sup_{-1\le v\le1}|r(v)|\qquad(-1<u<1).$$ For $m\ge1$ define the finite trigonometric polynomial $$F_m(t)=\sum_{|k|<m}(1-|k|/m)e^{ikt}=\frac1m\left|\sum_{j=0}^{m-1}e^{ijt}\right|^2=\frac{\sin^2(mt/2)}{m\sin^2(t/2)}.$$ Here $i^2=-1$; the square identity follows by expanding the finite sum and counting pairs of indices with a prescribed difference, and the last identity follows from the finite geometric series, with continuous values at multiples of $2\pi$. For $|t|\le1/m$, differentiate the finite Fourier sum to obtain $|F'_m(t)|\le\sum_{|k|<m}|k|(1-|k|/m)\le m^2$. For $1/m\le|t|\le\pi$, differentiating the sine quotient gives $$|F'_m(t)|\le\frac{\pi^2}{t^2}+\frac{\pi^3}{m|t|^3},$$ because $|\sin(t/2)|\ge|t|/\pi$. This sine bound follows on $[0,\pi/2]$ by concavity of sine, whose second derivative is $-\sin\le0$, applied to the chord joining $(0,0)$ and $(\pi/2,1)$; symmetry gives the negative arguments. [given, F4, algebra]

1.2 Put $Q=[-1,1]^d$ and $Q_c=[-1/2,1/2]^d$. For a univariate polynomial of degree at most $n$, interpolate at $t_j=-1/2+j/n$ for $0\le j\le n$. The interpolation identity holds because its difference from the polynomial has degree at most $n$ and $n+1$ distinct roots; the root bound follows by successively factoring each distinct root. For $|t|\le1$ the absolute value of the $j$th Lagrange polynomial is at most $(3/2)^n n^n/(j!(n-j)!)$: numerator factors are at most $3/2$ and its denominator has absolute value $n^{-n}j!(n-j)!$. Summing these bounds gives $(3n)^n/n!\le(3e)^n$, where $$\log(n!)=\sum_{j=1}^n\log j\ge\int_1^n\log t\,dt=n\log n-n+1$$ proves $n!\ge(n/e)^n$. Applying this univariate estimate in each coordinate in turn, and taking suprema after each application, shows for every polynomial $p$ of total degree at most $n$ that $$\|p\|_Q\le R^n\|p\|_{Q_c},\qquad R=(3e)^d,$$ since its degree in each separate coordinate is at most $n$. Here and below $\|p\|_E=\sup_{z\in E}|p(z)|$. [given, algebra]

2.1 Integrating the bounds of step 1.1 over $[-\pi,\pi]$, with the near-zero interval contributing at most $2m$ and the other terms bounded by extending their elementary integrals to infinity, gives $$\frac1{2\pi}\int_{-\pi}^{\pi}|F'_m(t)|\,dt\le\frac{2+2\pi^2+\pi^3}{2\pi}m\le20m.$$ For $m=1$ this also holds because $F_1=1$. Define $V_N=2F_{2N}-F_N$. Its Fourier coefficients for every $|k|\le N$ equal $1$: for $|k|<N$ they are $2(1-|k|/(2N))-(1-|k|/N)$, and for $|k|=N$ they are $2(1/2)$. For any trigonometric polynomial $T$ of degree at most $N$, integration of finite sums, using $\int_{-\pi}^{\pi}e^{ikt}\,dt=0$ for nonzero integer $k$ and $2\pi$ for $k=0$, therefore gives $$T(t)=\frac1{2\pi}\int_{-\pi}^{\pi}T(s)V_N(t-s)\,ds.$$ Differentiating this finite-sum identity and using periodicity and the integral bound yields $\|T'\|_\infty\le100N\|T\|_\infty$. Taking $T(t)=r(\cos t)$, a trigonometric polynomial of degree at most $N$ by expansion of powers of cosine, and using $T'(t)=-\sin(t)r'(\cos t)$ proves the inequality announced in step 1.1. All integrals here integrate continuous finite trigonometric sums or the displayed elementary bounds. [F4, step 1.1, algebra]

2.2 Define constants depending only on $d$ by $$a=(3/4)^d,\quad\delta=\min\{1/4,a/(8R)\},\quad G=600\sqrt d/\sqrt\delta,\quad\kappa=\min\{\delta/2,1/(2G)\},\quad A=2R/a.$$ Let $Y\subset Q$ be finite and nonempty with Euclidean fill distance $\eta$ and $n\eta\le\kappa$. The zero polynomial satisfies the desired inequality, so fix nonzero $p$ of degree at most $n$ and set $$q(u)=p(u)\prod_{i=1}^d(1-u_i^2)^n,\qquad S=\|q\|_Q,\qquad M=\max_{y\in Y}|p(y)|.$$ The coordinate degrees of $q$ are at most $3n$. On $Q_c$ its product weight is at least $a^n$, so $S\ge a^n\|p\|_{Q_c}>0$. The last inequality holds because a polynomial vanishing on a box with nonempty interior vanishes identically: fix all but one coordinate in the interior and apply the univariate root bound, then repeat in each coordinate. If some $|u_i|\ge1-\delta$, then $1-u_i^2\le2\delta$ while all other weight factors are at most $1$, and step 1.2 implies $$|q(u)|\le(2\delta)^n\|p\|_Q\le(2\delta R)^n\|p\|_{Q_c}\le(1/4)^nS<S.$$ The maximum of $|q|$ is attained on $Q$ by compactness and the extreme value theorem, so a maximizer $u_*$ lies in $[-1+\delta,1-\delta]^d$. [F1, F3, step 1.2, construct, algebra]

3.1 Take $y\in Y$ with $\|y-u_*\|_2\le\eta$; such a point exists because the minimum over the finite set is attained and is at most its supremum $\eta$. Since $\eta\le\kappa\le\delta/2$, the segment from $u_*$ to $y$ lies where every coordinate has absolute value at most $1-\delta/2$. Apply step 2.1 to each univariate coordinate slice of $q$, of degree at most $3n$ and norm at most $S$ on $[-1,1]$. At each point of this segment it gives $$|\partial_iq|\le\frac{300nS}{\sqrt{\delta-\delta^2/4}}\le\frac{600nS}{\sqrt\delta},\qquad\|\nabla q\|_2\le GnS.$$ Apply the fundamental theorem of calculus to the univariate polynomial $t\mapsto q(u_*+t(y-u_*))$: it follows directly here by integrating each power in this finite polynomial. With the Euclidean Cauchy–Schwarz inequality, obtained by expanding $\sum_i(v_i-sw_i)^2\ge0$ and minimizing the quadratic in $s$, this gives $$S\le|q(y)|+Gn\eta S\le M+S/2.$$ Thus $S\le2M$, and steps 1.2 and 2.2 yield $$\|p\|_Q\le R^n\|p\|_{Q_c}\le(R/a)^nS\le2(R/a)^nM\le A^nM.$$ This also includes the zero polynomial. [step 2.1, step 1.2, step 2.2, choose, algebra]

4.1 Fix $x\in Q$, enumerate $Y=\{y_1,\ldots,y_m\}$, and let $v(u)\in\mathbb R^D$ be the vector of all monomials in $u$ of total degree at most $n$, in any fixed order, where $D$ is their finite number. Let $K$ be the convex hull of $\{v(y_j),-v(y_j):1\le j\le m\}$. More explicitly it is the image of the closed bounded simplex of $2m$ nonnegative real coordinates summing to $1$, under the continuous map taking these coordinates to the corresponding weighted sum of these $2m$ vectors. Thus $K$ is nonempty and compact, and is convex because convex combinations of two sets of simplex weights remain simplex weights. Suppose $v(x)\notin A^nK$. The continuous squared distance from $v(x)$ attains a minimum at some $z\in A^nK$; put $b=v(x)-z\ne0$. For each $w\in A^nK$ the segment $z+t(w-z)$, $0\le t\le1$, lies in $A^nK$. Its squared distance to $v(x)$ equals $$\|b\|_2^2-2t\,b\mathbin\cdot(w-z)+t^2\|w-z\|_2^2.$$ Minimality at $t=0$ forces $b\mathbin\cdot(w-z)\le0$, since a strictly positive value would make this displayed expression smaller for sufficiently small positive $t$. [F1, F2, F3, step 3.1, construct, algebra]

5.1 Therefore $b\mathbin\cdot z$ is the maximum of the linear functional $b\mathbin\cdot w$ on $A^nK$. A linear functional on this convex hull has maximum equal to the largest of its values on its finite generators: every convex weighted average is at most that largest value and that value is attained at a generator. Consequently $$b\mathbin\cdot v(x)=b\mathbin\cdot z+\|b\|_2^2>A^n\max_{1\le j\le m}|b\mathbin\cdot v(y_j)|.$$ This contradicts step 3.1 applied to the polynomial $u\mapsto b\mathbin\cdot v(u)$, because $x\in Q$. Thus $v(x)\in A^nK$. Write it as $A^n$ times a convex combination of the vectors $\pm v(y_j)$, with nonnegative weights $t_j^+,t_j^-$ summing to $1$. For $\lambda_j=A^n(t_j^+-t_j^-)$ one has $$v(x)=\sum_j\lambda_jv(y_j),\qquad\sum_j|\lambda_j|\le A^n\sum_j(t_j^++t_j^-)=A^n.$$ Taking the scalar product with the coefficient vector of any polynomial of degree at most $n$ proves simultaneous reproduction. This argument uses finite-dimensional compactness and a single minimum, without an infinite choice principle. [step 3.1, step 4.1, algebra]

6.1 Finally choose orthonormal coordinates along the edges of $\Omega$, with its center as origin, and multiply these coordinates by $2/L$. This affine map carries $\Omega$ to $Q$ and scales Euclidean distances by $2/L$, so it carries $X$ to a set $Y$ of fill distance $\eta=2h_X/L$. Composition in either direction preserves total polynomial degree because each coordinate is affine linear. The condition in the Statement is exactly $n\eta\le\kappa$. Transporting the norming inequality from step 3.1 and the coefficients from step 5.1 proves both assertions on $\Omega$, including rotated cubes. All selections made in the proof are finite or individual existential choices, so no choice axiom is used. [step 3.1, step 5.1, construct, algebra] ∎ 