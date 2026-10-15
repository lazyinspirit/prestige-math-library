---
id: lem-qft-example-cutoff-integrals-and-series
kind: lemma
domain: mathematics
library: mathematics
title: Finite UV subtraction and divergent factorial toy integral
status: draft
origin: pipeline
physical_scope: null
dependency_level: 1
deps:
  - def-countable-choice
  - def-qft-example-data
  - lem-qft-example-four-dimensional-radial-measure
  - thm-ftc-second-part
  - thm-logarithm-derivative-and-integral
  - lem-complex-exponential-series-converges-everywhere
  - thm-derivative-of-exponential
  - thm-integration-by-parts
  - thm-chain-rule
  - lem-derivative-of-a-power
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-example-data: mathematical-premise
  lem-qft-example-four-dimensional-radial-measure: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-chain-rule: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  def-complex-exponential: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral: mathematical-premise
  thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line: mathematical-premise
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

Assume $\mathrm{AC}_\omega$ and the unit convention of
[[def-qft-example-data]]. Let $\mu,\Lambda,\mu_R>0$ have units
$\mathrm m^{-1}$. For $k\in\mathbb R^4$, $|k|$ is the Euclidean norm and
$\log$ is the natural logarithm. Define the cutoff integral
$$ I_\Lambda=\int_{|k|\le\Lambda} \frac{d^4k}{(2\pi)^4(|k|^2+\mu^2)}. $$
Each term in the subtracted expression has units $\mathrm m^{-2}$.
Then
$$ I_\Lambda= \frac{\Lambda^2-\mu^2\log(1+\Lambda^2/\mu^2)}{16\pi^2}, $$
and the explicitly chosen subtraction has the finite limit
$$ \lim_{\Lambda\to\infty} \left(I_\Lambda-\frac{\Lambda^2}{16\pi^2} +\frac{\mu^2}{16\pi^2}\log\frac{\Lambda^2}{\mu_R^2}\right) =\frac{\mu^2}{16\pi^2}\log\frac{\mu^2}{\mu_R^2}. $$
Separately, let $x\ge0$ be dimensionless and let dimensionless $\lambda\ge0$:
$$ F(\lambda)=\int_0^\infty\frac{e^{-x}}{1+\lambda x}\,dx. $$
For every integer $N\ge0$ the exact finite identity is
$$ F(\lambda)=\sum_{n=0}^{N}(-1)^n n!\lambda^n +(-1)^{N+1}\lambda^{N+1} \int_0^\infty\frac{e^{-x}x^{N+1}}{1+\lambda x}\,dx. $$
The last integral is finite and bounded by $(N+1)!$. The resulting formal
power series $\sum_{n\ge0}(-1)^n n!\lambda^n$ has radius of convergence zero.
The cutoff expression is one evaluated model integral and one chosen
subtraction scheme; it is not a full gauge-invariant QED renormalization
theorem or a continuum-existence claim.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, $\mu,\Lambda,\mu_R>0$ in
$\mathrm m^{-1}$, and dimensionless $\lambda\ge0$.

[A1] [[def-countable-choice]]: the countable-choice assumption used by the
radial-measure supplier is explicit.

[F1] [[def-qft-example-data]]: the natural momentum coordinate $k$ has units
$\mathrm m^{-1}$; the scales $\mu,\Lambda,\mu_R$ therefore have the same
units, and this item asserts only its displayed model integral and conventions.

[F2] [[lem-qft-example-four-dimensional-radial-measure]]: for every
nonnegative Borel radial function on a closed radius-$\Lambda$ ball in
$\mathbb R^4$, the radial measure is $2\pi^2r^3\,dr$.

[F3] [[thm-ftc-second-part]]: the integral of a continuous derivative on a
closed bounded interval is the difference of its endpoint values.

[F4] [[thm-logarithm-derivative-and-integral]]: for $u>0$,
$\log u$ has derivative $1/u$ and is the integral of $1/u$ between positive
endpoints.

[F5] [[lem-complex-exponential-series-converges-everywhere]]: the positive
exponential is the real restriction of the complex power series ([[def-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]]), which converges everywhere; all terms are nonnegative for real $y\ge0$, so
$e^y\ge y^n/n!$ for $y\ge0$ and each integer $n\ge0$.

[F6] The real exponential is smooth with derivative equal to itself;
the chain rule applies to $e^{-x}$ and $e^{-x/2}$.
[[thm-derivative-of-exponential]], [[thm-chain-rule]]

[F7] Integration by parts on a closed interval applies to differentiable
real functions with integrable derivatives; in particular it applies to
continuously differentiable functions.
[[thm-integration-by-parts]]

[F8] Integer powers are differentiable with $(x^n)'=nx^{n-1}$ for
$n\ge1$. [[lem-derivative-of-a-power]]

[F9] Under Countable Choice, bounded Riemann-integrable real functions on
compact intervals have the same Lebesgue integrals; nonnegative functions
Riemann integrable on every compact half-line interval with a finite improper
Riemann limit have the same half-line Lebesgue integral.
[[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]],
[[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]]

## Proof

1.1 The integrand $r\mapsto r^3/(r^2+\mu^2)$ is nonnegative and continuous on
$[0,\Lambda]$. Apply [F2], then divide by $(2\pi)^4$, to obtain
$$ I_\Lambda=\frac{1}{8\pi^2}\int_0^\Lambda \frac{r^3}{r^2+\mu^2}\,dr. $$
Polynomial division gives
$r^3/(r^2+\mu^2)=r-\mu^2r/(r^2+\mu^2)$. By [F4], an antiderivative is
$G(r)=r^2/2-(\mu^2/2)\log(r^2+\mu^2)$ on this interval. Its derivative is
continuous; its compact-interval integrands are bounded and Riemann integrable, so [F9] identifies their Lebesgue integrals with the calculus integrals. Thus [F3] evaluates the integral as
$$ G(\Lambda)-G(0) =\frac12\left(\Lambda^2-\mu^2\log(1+\Lambda^2/\mu^2)\right). $$
Multiplying by $1/(8\pi^2)$ gives the claimed expression. [given, A1, F2,
F3, F4, F9, algebra]

1.2 By [F6], $-e^{-x}$ has derivative $e^{-x}$; [F3] on $[0,R]$
gives $\int_0^R e^{-x}dx=1-e^{-R}$. The positive series [F5] gives
$e^R\ge1+R$, so $e^{-R}\to0$ and $M_0=1$.
For each integer $n\ge0$, [F5] with $y=x/2$ gives
$x^ne^{-x}\le2^n n!e^{-x/2}$. The majorant has finite integral $2^{n+1}n!$
by [F3] and [F6]; the positive truncated integrals are increasing and bounded by this finite integral, hence have a finite improper limit. All the integrands are continuous on every compact interval; [F9] identifies these convergent nonnegative improper integrals with their half-line Lebesgue integrals. Thus $M_n=\int_0^\infty x^ne^{-x}dx$ is finite.
The same bound and $e^{x/2}\ge1+x/2$ show $x^ne^{-x}\to0$.
For $n\ge1$ and $R>0$, take $u(x)=x^n$, $v(x)=-e^{-x}$ on $[0,R]$.
They are continuously differentiable with continuous, hence integrable,
derivatives. Thus [F7] gives
$$\int_0^R x^ne^{-x}dx=-R^ne^{-R}+n\int_0^R x^{n-1}e^{-x}dx.$$
The endpoint at zero vanishes since $n\ge1$. Taking $R\to\infty$ is
justified by the finite positive improper integrals and the vanishing
boundary term just proved. It gives $M_n=nM_{n-1}$, and induction from
$M_0=1$ gives $M_n=n!$. Finally
$0\le e^{-x}/(1+\lambda x)\le e^{-x}$ for $\lambda\ge0$, so $F(\lambda)$
is finite. [given, A1, F3, F5, F6, F7, F8, F9, algebra]

2.1 Substituting the formula from step 1.1, the subtracted quantity equals
$$ \frac{\mu^2}{16\pi^2} \log\left(\frac{\mu^2}{\mu_R^2} \frac{\Lambda^2}{\Lambda^2+\mu^2}\right). $$
As $\Lambda\to\infty$, the second factor inside the logarithm tends to $1$;
the limiting logarithm is defined because $\mu^2/\mu_R^2>0$. Continuity of
$\log$ on $(0,\infty)$ proves the stated finite limit. [given, F1, F4,
step 1.1, algebra]

2.2 For every $t\ge0$, finite multiplication of a geometric sum gives
$$ \frac1{1+t}=\sum_{n=0}^N(-t)^n+ (-1)^{N+1}\frac{t^{N+1}}{1+t}. $$
Put $t=\lambda x$, multiply by $e^{-x}$, and integrate. Step 1.2 evaluates
each polynomial moment as $n!$, while the remainder is bounded by
$\lambda^{N+1}M_{N+1}=\lambda^{N+1}(N+1)!$. This gives the exact finite
identity and its stated bound, including $\lambda=0$. [given, step 1.2,
algebra]

2.3 For $\lambda>0$, the magnitudes of successive formal terms have ratio
$\lambda(n+1)$, which eventually exceeds $2$. Thus the terms do not tend to
zero and the power series diverges at every positive $\lambda$; the ratio
test for power-series radius therefore gives radius zero. Separately, the
bare positive coefficient grows quadratically because
$$ \frac{I_\Lambda}{\Lambda^2} =\frac1{16\pi^2}\left( 1-\frac{\mu^2}{\Lambda^2}\log(1+\Lambda^2/\mu^2)\right) \longrightarrow\frac1{16\pi^2}. $$
For the last limit, with $y=1+\Lambda^2/\mu^2$, [F4] gives
$\log y=\int_1^y du/u\le\int_1^y du/\sqrt u\le2\sqrt y$, so the logarithmic
term divided by $\Lambda^2$ tends to zero. [given, F1, F4, step 1.1,
algebra]

3.1 Steps 1.1 and 2.1 give the exact cutoff integral and selected finite
subtraction limit; steps 1.2 and 2.2 prove the finite factorial remainder;
step 2.3 proves that the formal power series diverges for every $\lambda>0$.
These conclusions concern only the two displayed mathematical integrals and
do not assert a full QED renormalization theorem or a continuum limit.
[given, F1, step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, algebra] ∎
