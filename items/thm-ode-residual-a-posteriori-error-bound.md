---
id: thm-ode-residual-a-posteriori-error-bound
kind: theorem
title: "A posteriori ODE error bound from the continuous residual"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - cor-exponential-reciprocal-and-positivity
  - cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
  - cor-mean-value-theorem
  - def-absolutely-continuous-function
  - def-countable-choice
  - def-dependent-choice
  - def-euclidean-inner-product
  - def-first-order-ode-initial-value-problem-and-solution
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-l-one-of-a-measure
  - lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous
  - thm-algebra-of-derivatives
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-chain-rule
  - thm-derivative-of-exponential
  - thm-first-fundamental-theorem-of-calculus-for-l-one
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-the-lebesgue-integral-respects-almost-everywhere-equality
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Donald Estep, A Posteriori Error Bounds and Global Error Control for Approximation of Ordinary Differential Equations, SIAM Journal on Numerical Analysis 32 (1995), 1–48"
      url: "https://epubs.siam.org/doi/pdf/10.1137/0732001"
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 6, Adaptive Runge–Kutta"
      url: "https://raw.githubusercontent.com/fncbook/fnc/a280ed1a013393ee0a184dcbaa866522f35a3516/chapter6/adaptive-rk.md"

---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice. Let $d\ge1$ and $a<b$, let $D\subseteq\mathbb R\times\mathbb R^d$ be open, let $f:D\to\mathbb R^d$ be continuous, and let $y:[a,b]\to\mathbb R^d$ be an exact solution of $y'=f(t,y)$ whose graph lies in $D$. Let $U:[a,b]\to\mathbb R^d$ be componentwise absolutely continuous with graph in $D$. Suppose $\ell,\rho\in L^1[a,b]$, $\rho\ge0$ almost everywhere, and, for almost every $t$, the points $U(t),y(t)$ satisfy
$$
\langle U(t)-y(t),f(t,U(t))-f(t,y(t))\rangle\le\ell(t)\lVert U(t)-y(t)\rVert_2^2.
$$

Define $r(t):=U'(t)-f(t,U(t))$ wherever $U'$ exists, and assume $\lVert r(t)\rVert_2\le\rho(t)$ almost everywhere. Then, for every $t\in[a,b]$,
$$
\lVert U(t)-y(t)\rVert_2\le\exp\!\left(\int_a^t\ell(v)\,dv\right)\lVert U(a)-y(a)\rVert_2+\int_a^t\exp\!\left(\int_s^t\ell(v)\,dv\right)\rho(s)\,ds.
$$

The bound is a posteriori: it uses the residual of the actual reconstruction. An embedded Runge–Kutta difference alone does not supply the hypothesis $\lVert r(t)\rVert_2\le\rho(t)$.

## Facts & Assumptions

**Given:** The domain, exact solution, reconstruction, integrable coefficient and residual bound in the Statement, and Countable Choice plus Dependent Choice.

[A1] [[def-countable-choice]] and [[def-dependent-choice]]: the proof assumes both axioms only when applying the library's fundamental theorem for absolutely continuous functions.

[A2] For almost every $t$, $\langle U(t)-y(t),f(t,U(t))-f(t,y(t))\rangle\le\ell(t)\lVert U(t)-y(t)\rVert_2^2$.

[A3] $r(t)=U'(t)-f(t,U(t))$ satisfies $\lVert r(t)\rVert_2\le\rho(t)$ almost everywhere, with $\ell,\rho\in L^1[a,b]$ and $\rho\ge0$ almost everywhere.

[L1] [[def-l-one-of-a-measure]] and [[def-integrable-real-and-complex-functions-and-their-integrals]]: $g\in L^1[a,b]$ means that $g$ is measurable and $\int_a^b|g|<\infty$; the measure is Lebesgue measure restricted to $[a,b]$.

[F1] [[def-absolutely-continuous-function]]: absolute continuity on $[a,b]$ is the finite disjoint-interval increment condition.

[F2] [[def-first-order-ode-initial-value-problem-and-solution]]: a solution remains in the open time-state domain and satisfies $y'=f(t,y)$.

[F3] [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]: under Countable Choice and Dependent Choice, an absolutely continuous real function has integrable derivative almost everywhere and equals its initial value plus the integral of that derivative.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies the triangle inequality and $|\langle x,z\rangle|\le\lVert x\rVert_2\lVert z\rVert_2$.

[F5] [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]] and [[thm-first-fundamental-theorem-of-calculus-for-l-one]]: if $g\in L^1$, then its indefinite integral is absolutely continuous and has derivative $g$ almost everywhere.

[F6] [[thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous]] and [[lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]]: Lipschitz composition and products preserve absolute continuity.

[F7] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]: at points of differentiability, the ordinary chain and product rules hold.

[F8] [[thm-derivative-of-exponential]] and [[cor-exponential-reciprocal-and-positivity]]: the exponential has derivative itself and is strictly positive.

[F9] [[cor-mean-value-theorem]]: a differentiable scalar function with derivative bounded in absolute value by $M$ on an interval is $M$-Lipschitz there.

[F10] [[thm-integral-triangle-inequality]]: for $g\in L^1$, $|\int g|\le\int|g|$.

[F11] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative Lebesgue integral is monotone and homogeneous for nonnegative finite scalars.

[F12] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: sums, scalar multiples, products and absolute values of measurable real-valued functions are measurable.

[F13] [[thm-linearity-of-the-lebesgue-integral-on-l-one]] and [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]: the Lebesgue integral is linear on $L^1$ and is unchanged by almost-everywhere modification.

[F14] [[def-euclidean-inner-product]]: $\langle x,y\rangle=\sum_i x_i y_i$, the form is bilinear and symmetric, and $\|x\|_2^2=\langle x,x\rangle$.

## Proof

1.1 Put $e:=U-y$ and $q(t):=\lVert e(t)\rVert_2$. Each component $e_i$ is absolutely continuous by [F1]. Given $\epsilon>0$, choose for each of the finitely many components a positive interval-length threshold that makes the sum of its increments less than $\epsilon/d$; the minimum of these finitely many thresholds works for all components at once. For any finite disjoint interval family with total length below that minimum, [F4] gives $|q(v)-q(u)|\le\lVert e(v)-e(u)\rVert_2\le\sum_i|e_i(v)-e_i(u)|$, so the total increments of $q$ are below $\epsilon$. Thus $q$ is absolutely continuous by [F1]. [given, F1, F4, F14, algebra]

2.1 By [F3], $q$ and each component of $e$ are differentiable almost everywhere; the finite intersection of these full-measure sets is still full measure. At such a point with $q>0$, differentiating $q^2=\langle e,e\rangle$ using [F14] gives $2qq'=2\langle e,e'\rangle$, hence $q'=\langle e,e'\rangle/q$. Since $e'=r+f(t,U)-f(t,y)$, [A2], [A3], and [F4] imply $q'\le\ell q+\rho$. At a differentiability point where $q=0$, the nonnegative function $q$ has a local minimum, so $q'=0$ and the same inequality holds. [given, A1, A2, A3, F2, F3, F4, F14, step 1.1, algebra]

3.1 Define $\Lambda(t):=\int_a^t\ell(v)\,dv$ and $w(t):=\exp(-\Lambda(t))$. By [F5], $\Lambda$ is absolutely continuous and $\Lambda'=\ell$ almost everywhere. [F10] and [F11] give $|\Lambda(t)|\le\int_a^b|\ell(v)|\,dv=:M$, and $\left|\frac{d}{dx}\exp(-x)\right|=\exp(-x)\le\exp(M)$ on $[-M,M]$, so [F8] and [F9] make $x\mapsto\exp(-x)$ Lipschitz there. By [F6], $w$ and $wq$ are absolutely continuous. At almost every point, [F7]–[F8] give $(wq)'=w(q'-\ell q)\le w\rho$. [given, A1, L1, F5, F6, F7, F8, F9, F10, F11, step 2.1, algebra]

4.1 The product $w\rho$ is measurable by [F12], and $|w\rho|\le\exp(M)\rho$ almost everywhere. Since $\rho\ge0$ almost everywhere and $\int_a^b\rho<\infty$, [F11] implies $\int_a^b|w\rho|<\infty$; [L1] gives $w\rho\in L^1$. By [F3], $(wq)'\in L^1$, so $h:=w\rho-(wq)'$ is in $L^1$ by [F13]. Step 3.1 says $h\ge0$ almost everywhere. Since $0\le h^+\le|h|$ almost everywhere, [F11] and $h\in L^1$ give $\int_a^b h^+<\infty$; measurability follows from [F12], so [L1] gives $h^+\in L^1$. Thus $h=h^+$ almost everywhere; [F13] gives $\int_a^t h=\int_a^t h^+$, and [F11] gives $\int_a^t h^+\ge0$. Hence $\int_a^t(wq)'\le\int_a^t w\rho$. [A1, L1, F3, F11, F12, F13, step 3.1, algebra]

5.1 Apply [F3] to $wq$ on $[a,t]$, and use $w(a)=1$ and $w(t)>0$ from [F8]. Step 4.1 gives $q(t)\le \exp(\Lambda(t))q(a)+\int_a^t\exp(\Lambda(t)-\Lambda(s))\rho(s)\,ds$. Substituting the definition of $\Lambda$ gives the asserted bound. [A1, F3, F8, step 4.1, algebra] ∎
