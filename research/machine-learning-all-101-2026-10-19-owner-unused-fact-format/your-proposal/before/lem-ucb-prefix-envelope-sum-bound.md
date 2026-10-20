---
id: lem-ucb-prefix-envelope-sum-bound
kind: lemma
title: A deterministic-prefix envelope sum for the sharper UCB count bound
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
- thm-gaussian-integral
- thm-substitution-for-improper-integrals
- thm-substitution
- thm-logarithm-derivative-and-integral
- thm-principal-inverse-tangent-calculus
- thm-ftc-second-part
- thm-monotonicity-of-the-integral
- thm-derivative-of-exponential
- thm-chain-rule
- thm-natural-logarithm-laws
- lem-improper-integral-splitting-and-tail-invariance
- thm-linearity-of-improper-integrals
- thm-of-square-roots
- thm-monotonicity-from-the-derivative
- thm-exponential-is-strictly-increasing
- cor-exponential-reciprocal-and-positivity
- lem-derivative-of-a-power
- thm-algebra-of-derivatives
- thm-exponential-limits-and-range
- def-real-exponential-function-and-e
- thm-algebra-of-continuous-functions
- thm-composition-of-continuous-functions
- thm-continuous-implies-integrable
- thm-additivity-over-subintervals
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Lattimore and Szepesvári, Bandit Algorithms, Theorems 7.1–7.2; independent
      local sharpening of the expected-pull argument
    url: https://tor-lattimore.com/downloads/book/book.pdf
    locator: Printed pp. 105–108 / PDF pp. 114–117. The source proves coefficient
      16 for pulls and 8 outside the regret radical; this local helper is a separate
      owner-delegated improvement.
---

## Statement

Let $n\ge5$ be an integer, let $a>0$, and put $L=\log n$. For $x\ge0$ define $x_+=\max\{x,0\}$ and
$$f(x)=\exp\left(-\frac{(a\sqrt{x}-2\sqrt L)_+^2}{2}\right).$$
Then
$$\sum_{s=1}^{n-1} f(s)\le1+\frac{8L}{a^2}.$$
For $n\ge12$ the stronger bound $\sum_{s=1}^{n-1}f(s)\le8L/a^2$ holds. All integrals in the proof are proper Riemann integrals or their separately convergent improper limits.

## Statement references

[Lattimore and Szepesvári, *Bandit Algorithms*, Theorems 7.1–7.2](https://tor-lattimore.com/downloads/book/book.pdf): supplies the UCB proof context; this deterministic estimate is proved locally.

## Facts & Assumptions

**Given:** The integer $n$, positive $a$, and $L=\log n$ in the Statement.

[F1] The Gaussian integral is $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi$. [[thm-gaussian-integral]]

[F2] A monotone differentiable surjection between improper intervals preserves the integral, with absolute Jacobian, when its derivative is locally integrable and proper substitution holds on every compact truncation. [[thm-substitution-for-improper-integrals]]

[F3] Proper substitution holds for a differentiable substitution with integrable derivative and continuous integrand on an interval containing its image. [[thm-substitution]]

[F4] For $u>0$, $\log'(u)=1/u$ and $\log u=\int_1^u dt/t$; logarithms are increasing and obey the product law. [[thm-logarithm-derivative-and-integral]] [[thm-natural-logarithm-laws]]

[F5] Principal arctangent satisfies $(\arctan x)'=1/(1+x^2)$, $\arctan x=\int_0^x dt/(1+t^2)$, and $\arctan1=\pi/4$. [[thm-principal-inverse-tangent-calculus]]

[F6] An integrable derivative integrates to the endpoint difference; integration preserves pointwise inequalities between integrable functions. [[thm-ftc-second-part]] [[thm-monotonicity-of-the-integral]]

[F7] The exponential has derivative equal to itself, and the chain rule differentiates compositions. [[thm-derivative-of-exponential]] [[thm-chain-rule]]

[F8] Convergent improper integrals can be split at a finite interior point and combined linearly. [[lem-improper-integral-splitting-and-tail-invariance]] [[thm-linearity-of-improper-integrals]]

[F9] Nonnegative reals have unique nonnegative square roots. [[thm-of-square-roots]]

[F10] A continuous function on an interval is decreasing when its derivative is negative throughout the interior. [[thm-monotonicity-from-the-derivative]]

[F11] The exponential is positive and strictly increasing. [[thm-exponential-is-strictly-increasing]] [[cor-exponential-reciprocal-and-positivity]]

[F12] Polynomial powers differentiate by the power rule, and sums, products and nonvanishing quotients obey the derivative algebra. [[lem-derivative-of-a-power]] [[thm-algebra-of-derivatives]]

[F13] The exponential tends to zero at negative infinity. [[thm-exponential-limits-and-range]]

[F14] The real exponential is continuous, positive, strictly increasing, and satisfies $\exp(0)=1$ ([[def-real-exponential-function-and-e]], [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]]).

[F15] Sums and scalar multiples of continuous real functions are continuous, every real polynomial map is continuous, and continuous maps compose continuously ([[thm-algebra-of-continuous-functions]], [[thm-composition-of-continuous-functions]]).

[F16] A continuous real function on a compact interval is Riemann integrable ([[thm-continuous-implies-integrable]]).

[F17] For an integrable function, proper integrals add over adjacent subintervals ([[thm-additivity-over-subintervals]]).

## Proof

1.1 By [F9], for $0\le x<y$ the identity $y-x=(\sqrt y-\sqrt x)(\sqrt y+\sqrt x)$ and $\sqrt y+\sqrt x>0$ imply $\sqrt x<\sqrt y$: indeed $y>0$, and $\sqrt y>0$ follows because its square is $y$. Thus the nonnegative square-root map is increasing. It is continuous at every $x_0>0$, since $\sqrt x+\sqrt{x_0}\ge\sqrt{x_0}>0$ and $$|\sqrt x-\sqrt{x_0}|=\frac{|x-x_0|}{\sqrt x+\sqrt{x_0}}\le\frac{|x-x_0|}{\sqrt{x_0}};$$ given $\varepsilon>0$, $|x-x_0|<\varepsilon\sqrt{x_0}$ makes this difference less than $\varepsilon$. At $x_0=0$, for each $\varepsilon>0$, $0\le x<\varepsilon^2$ implies $\sqrt x<\sqrt{\varepsilon^2}=\varepsilon$, so it is continuous there as well. The map $u\mapsto u_+$ is nondecreasing and continuous, since $|u_+-v_+|\le|u-v|$ by its sign cases. Thus $a\sqrt{x}-2\sqrt L$ and its positive part are continuous, and [F15] makes the final composition defining $f$ continuous. The positive part is nonnegative and nondecreasing; for $0\le u\le v$, $v^2-u^2=(v-u)(v+u)\ge0$, so squaring preserves that order. Hence the exponent is nonincreasing, and [F14] makes $f$ nonincreasing; its exponent is nonpositive, so positivity, monotonicity and $\exp(0)=1$ give $0<f\le1$. The continuous function $f$ is integrable on $[0,n-1]$ by [F16], and repeated use of [F17] gives $\int_0^{n-1} f=\sum_{s=1}^{n-1}\int_{s-1}^s f$. For $x\in[s-1,s]$, $f(x)\ge f(s)$; [F6] gives $f(s)\le\int_{s-1}^s f(x)\,dx$. Hence $S:=\sum_{s=1}^{n-1}f(s)\le\int_0^{n-1}f(x)\,dx$. If $\int_0^\infty f$ converges, nonnegativity of the tail and [F8] give $\int_0^{n-1}f\le\int_0^\infty f$. Also $S\le n-1$. [given, F6, F8, F9, F14, F15, F16, F17, algebra]

1.2 Write $b=2\sqrt L>0$. The integrands $e^{-y^2/2}$ and $y e^{-y^2/2}$ are continuous on every compact truncation of $[0,\infty)$. Evenness in [F1] and the scaling $y=\sqrt2 x$ give $\int_0^\infty e^{-y^2/2}\,dy=\sqrt{\pi/2}$ by [F2], with convergence inherited from the Gaussian integral. The primitive $-e^{-y^2/2}$ gives $\int_0^\infty y e^{-y^2/2}\,dy=1$ by [F6] and [F7]; the endpoint limit follows from [F13]. The substitutions are increasing smooth surjections on the half-lines, with continuous derivatives and continuous integrands on every compact truncation, so all hypotheses of [F2] hold and these two improper integrals converge separately. [F1, F2, F6, F7, F8, F12, F13, given]

1.3 The integrand $x^4(1-x)^4/(1+x^2)$ is continuous on $[0,1]$, since $1+x^2>0$ there. Polynomial division gives $\frac{x^4(1-x)^4}{1+x^2}=x^6-4x^5+5x^4-4x^2+4-\frac4{1+x^2}.$ Integrating on $[0,1]$ using [F5] and [F6] yields $\int_0^1\frac{x^4(1-x)^4}{1+x^2}\,dx=\frac17-\frac23+1-\frac43+4-\pi=\frac{22}7-\pi>0.$ The strict positivity follows because the integrand is nonnegative and on $[1/4,3/4]$ is at least $1/(2\cdot4^8)>0$. Thus $\pi<22/7$. [F5, F6, F12, algebra]

2.1 On $[0,b^2/a^2]$, $f=1$. On the remaining half-line use $x=(y+b)^2/a^2$, whose derivative $2(y+b)/a^2$ is positive and continuous and whose image is exactly $[b^2/a^2,\infty)$. Proper substitution applies on compact truncations by [F3], so [F2], [F8], and step 1.2 give $\int_0^\infty f(x)\,dx=\frac{b^2}{a^2}+\frac2{a^2}\int_0^\infty(y+b)e^{-y^2/2}\,dy=\frac{4L+2+\sqrt{8\pi L}}{a^2}.$ This proves finiteness and justifies step 1.1. [F2, F3, F8, F9, step 1.2, algebra]

2.2 Put $z=(u-1)/(u+1)$ for $u>1$, so $0<z<1$ and $1/(1-t^2)$ is continuous on $[0,z]$. The increasing substitution $t\mapsto(1+t)/(1-t)$ on $[0,z]$ has continuous derivative and takes that interval onto $[1,u]$. Hence [F3] and [F4] give $\log u=2\int_0^z dt/(1-t^2)$. For every integer $q\ge0$, the finite geometric identity gives $1/(1-t^2)\ge\sum_{j=0}^q t^{2j}$ on this interval. Integrating this polynomial by [F6] proves $\log u\ge2\sum_{j=0}^q\frac{z^{2j+1}}{2j+1}.$ At $u=2,q=1$, $u=3,q=2$, and $u=5,q=2$, respectively, this yields $\log2\ge\frac{56}{81},\qquad\log3\ge\frac{263}{240},\qquad\log5\ge\frac{1924}{1215}>\frac{11}7>\frac\pi2.$ [F3, F4, F6, F12, step 1.3, algebra]

3.1 By [F4] and step 2.2, $\log12=2\log2+\log3\ge\frac{16061}{6480}>\frac{99}{40},\qquad\log11>\log10=\log2+\log5\ge\frac{2764}{1215}>\frac94.$ All comparisons follow by multiplying positive integer denominators; no decimal approximation is used. [F4, step 2.2, algebra]

4.1 Define $D(L)=2+\sqrt{8\pi L}-4L$. If $n\ge12$, step 3.1 gives $L>99/40$. At $L_0=99/40$, $(4L_0-2)^2=\frac{6241}{100}>8\frac{22}7\frac{99}{40}>8\pi L_0,$ so $D(L_0)<0$. For $L_2>L_1\ge L_0>1$, the difference of $4L-2-\sqrt{8\pi L}$ at these two values equals $(\sqrt{L_2}-\sqrt{L_1})(4(\sqrt{L_2}+\sqrt{L_1})-\sqrt{8\pi})>0$, since $\pi<22/7<8$. Thus $D(L)\le0$ here. Steps 1.1 and 2.1 give $S\le8L/a^2$, the asserted stronger bound. [F6, F9, step 1.1, step 2.1, step 1.3, step 3.1, algebra]

4.2 Suppose $5\le n\le11$. Step 2.2 gives $L>\pi/2$, whence $\sqrt{8\pi L}\le4L$ and $D(L)\le2$. For $g(x)=4\log x-x+2$, the derivative $g'(x)=4/x-1$ is continuous and negative on $[5,11]$, so $g$ is decreasing there. Step 3.1 gives $g(11)>0$, hence $g(n)\ge g(11)>0$ and therefore $n-2\le4L$. [F4, F6, F9, F10, F12, step 2.2, step 3.1, algebra]

5.1 If $D(L)\le0$, steps 1.1 and 2.1 already give $S\le8L/a^2$. If $D(L)>0$ and $a^2\ge D(L)$, those steps give $S\le(8L+D(L))/a^2\le8L/a^2+1$. If $0<a^2<D(L)\le2$, step 4.2 gives $(n-2)a^2\le(n-2)D(L)\le2(n-2)\le8L$, so $S\le n-1\le1+8L/a^2$. These cases exhaust $5\le n\le11$ and prove the Statement together with step 4.1. [given, step 1.1, step 2.1, step 4.1, step 4.2, cases, algebra] ∎
