---
id: ex-gaussian-integral-on-infinite-line-by-tanh-sinh
kind: example
title: The Gaussian integral on the line with a certified sinh-sinh truncation tail
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [alg-double-exponential-trapezoid, thm-double-exponential-transforms-and-integral-identities, thm-double-exponential-trapezoid-error-bound, thm-analytic-strip-trapezoid-error, lem-double-exponential-truncated-tail-bound, thm-gaussian-integral, def-complex-exponential, thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-complex-derivatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-exponential-limits-and-range, thm-exponential-beats-every-polynomial, cor-continuous-image-of-an-interval-is-an-interval, cor-mean-value-theorem, def-complex-trigonometric-and-hyperbolic-functions, cor-complex-trigonometric-and-hyperbolic-addition-formulas, cor-complex-trigonometric-and-hyperbolic-derivatives, thm-complex-exponential-addition-and-real-extension, thm-algebra-of-complex-derivatives, def-hyperbolic-functions, thm-hyperbolic-identities-and-derivatives, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity, thm-continuous-implies-integrable, thm-sine-cosine-zero-sets-and-fundamental-period, thm-quarter-turn-values-and-shift-formulas]
proof_strategy: direct
axiom_use: None. The integral identity and tail estimate use no choice; the Gaussian integral supplier states its own assumptions.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Lloyd N. Trefethen and J. A. C. Weideman, The Exponentially Convergent Trapezoidal Rule, SIAM Review 56(3), 2014
      url: https://people.maths.ox.ac.uk/trefethen/publication/PDF/2014_149.pdf
      locator: §§6 and 14, truncated transformed trapezoids and their hypotheses.
---

## Statement

For $f(x)=e^{-x^2}$ on $\mathbb R$, use the sinh–sinh mode of [[alg-double-exponential-trapezoid]]. Its transformed function is
$$\Phi(t)=\frac\pi2\cosh t\,\cosh u(t)\,e^{-\sinh^2u(t)},\qquad u(t)=\frac\pi2\sinh t.$$
Then the absolutely convergent improper Riemann integral satisfies $\int_{\mathbb R}\Phi(t)dt=\sqrt\pi$. There is $T>0$ such that $|\Phi(t)|\le e^{-e^{|t|}}$ for $|t|\ge T$, so if $N_\pm h\ge T$, the omitted finite-sum tail is at most
$$e^{-e^{N_-h}}+e^{-e^{N_+h}}.$$
However, the complex extension of this transformed Gaussian does not satisfy the uniform exponential-decay hypothesis of [[thm-analytic-strip-trapezoid-error]] on any nonzero horizontal substrip. Thus this example certifies its truncation tail but does not claim a full discretization-plus-tail error bound.

## Facts & Assumptions

**Given:** The real sinh–sinh transformation and finite truncation with $h>0$ and nonnegative integers $N_-,N_+$.

[F1] [[alg-double-exponential-trapezoid]]: $x(t)=\sinh((\pi/2)\sinh t)$ and $\Phi(t)=x'(t)e^{-x(t)^2}$.

[F2] [[thm-double-exponential-transforms-and-integral-identities]]: if the transformed function is absolutely integrable as an improper Riemann integral, its integral equals the whole-line target integral.

[F3] [[lem-double-exponential-truncated-tail-bound]]: an envelope $A e^{-B e^{\kappa|t|}}$ bounds each continuous tail and the corresponding omitted trapezoid samples by $A(\kappa B)^{-1}e^{-B e^{\kappa Nh}}$.

[F4] [[thm-gaussian-integral]]: $\int_{\mathbb R}e^{-x^2}dx=\sqrt\pi$.

[F5] [[thm-double-exponential-trapezoid-error-bound]]: a total finite-rule error estimate requires both the separate analytic-strip and sampled-tail hypotheses.

[F6] [[thm-analytic-strip-trapezoid-error]]: its analytic-strip hypothesis requires uniform exponential decay on each horizontal edge of some nonzero closed substrip.

[F7] [[def-complex-trigonometric-and-hyperbolic-functions]] defines $\sinh z=(e^z-e^{-z})/2$ and $\cosh z=(e^z+e^{-z})/2$. [[cor-complex-trigonometric-and-hyperbolic-addition-formulas]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], and [[thm-complex-exponential-addition-and-real-extension]] give $\sinh(U+iV)=\sinh U\cos V+i\cosh U\sin V$ and $\cosh(U+iV)=\cosh U\cos V+i\sinh U\sin V$ for real $U,V$, by substituting the exponential definitions.

[F8] [[thm-exponential-limits-and-range]]: the real exponential tends to $+\infty$ at $+\infty$ and to zero at $-\infty$. [[thm-exponential-addition-formula]] and [[cor-exponential-reciprocal-and-positivity]] give $e^{v+w}=e^ve^w$ and $e^{-v}=1/e^v>0$. The real definitions [[def-hyperbolic-functions]] and [[thm-hyperbolic-identities-and-derivatives]] give $(\sinh t)'=\cosh t$, $(\cosh t)'=\sinh t$, parity, positivity of $\cosh$, and unbounded growth of both hyperbolic functions at $+\infty$.

[F9] [[thm-exponential-beats-every-polynomial]]: $v/e^{cv}\to0$ as $v\to+\infty$ for every fixed $c>0$.

[F10] [[cor-complex-trigonometric-and-hyperbolic-derivatives]] gives entire $\sinh,\cosh$ with derivatives $\cosh,\sinh$. Together with [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-chain-rule-for-complex-derivatives]], and [[thm-algebra-of-complex-derivatives]], this makes the displayed complex extension of $\Phi$ entire.

[F11] [[cor-continuous-image-of-an-interval-is-an-interval]] and [[cor-mean-value-theorem]]: a continuous function takes intermediate values, and a positive derivative makes it strictly increasing.

[F12] [[thm-continuous-implies-integrable]]: a continuous real function on a compact interval is Riemann integrable.

[F13] [[thm-sine-cosine-zero-sets-and-fundamental-period]] and [[thm-quarter-turn-values-and-shift-formulas]]: $\cos 0=1$, $\sin(\pi/2)=1$, and neither function has a zero in $(0,\pi/2)$; continuity and [F11] therefore give $\sin y,\cos y>0$ there.

## Proof

1.1 On the real axis, $x'(t)=(\pi/2)\cosh t\cosh u(t)>0$. As $t\to\pm\infty$, $x(t)\to\pm\infty$. We show the tail envelope for $t\to+\infty$; evenness gives the left tail. For $t\ge1$, $\sinh t\ge c e^t$ with $c=(1-e^{-2})/2>0$, so $u(t)\ge c_1e^t$ for $c_1=\pi c/2$. For $u\ge1$, $\sinh u\ge c e^u$, hence $x(t)^2\ge c^2e^{2u(t)}\ge c^2e^{2c_1e^t}$. Also $u(t)\le(\pi/4)e^t$ and $\cosh t\le e^t$, $\cosh u\le e^u$, so for a fixed constant $C'>0$ and all sufficiently large $t$, $(\pi/2)\cosh t\cosh u(t)\le e^{C'e^t}$. Put $v=e^t$. By [F8], $v\to\infty$, and [F9] implies $c^2e^{2c_1v}/v\to\infty$. Thus $x(t)^2$ eventually exceeds both $2C'e^t$ and $2e^t$. It follows that $\Phi(t)\le e^{C'e^t-x(t)^2}\le e^{-x(t)^2/2}\le e^{-e^t}$ for all sufficiently large $t$. [F1, F8, F9, algebra]

1.2 For any proposed substrip halfwidth $a>0$, fix $0<y<\min(a,\pi/2)$; then [F13] gives $\sin y,\cos y>0$. Extend $u(z)=(\pi/2)\sinh z$ holomorphically; this extension is entire by [F10]. For $z=x+iy$, write $u=U+iV$ with $U=(\pi/2)\sinh x\cos y$ and $V=(\pi/2)\cosh x\sin y$. The continuous function $V(x)$ has positive derivative for $x>0$ and tends to infinity. For every sufficiently large integer $j$, its value $(j+1/2)\pi$ lies strictly between $V(0)$ and some $V(R)$; [F11] gives a solution $x_j\in(0,R)$, and strict increase makes it unique. Defining $x_j$ as that unique solution avoids any choice of a sequence. Then $x_j\to\infty$. At those points, [F7] gives $\operatorname{Re}(\sinh^2u)=-\cosh^2U$ and $|\cosh u|=\sinh U$. Since $U(x_j)\to\infty$, also $|\cosh(x_j+iy)|^2=\sinh^2x_j+\cos^2y\ge\sinh^2x_j$ by [F7] and $\cosh^2x_j-\sinh^2x_j=1$ from [F8]. Thus it follows that $$|\Phi(x_j+iy)|=\frac\pi2|\cosh(x_j+iy)|\sinh U(x_j)e^{\cosh^2U(x_j)}\longrightarrow\infty.$$ Thus no bound $C e^{-\eta|x|}$ can hold on that horizontal line; this disproves the uniform strip hypothesis in [F6] for every proposed positive halfwidth. [F6, F7, F8, F10, F11, F13, algebra, construct]

2.1 The envelope in step 1.1 makes $\Phi$ absolutely integrable on both tails. On every compact interval, $|\Phi|$ is continuous and Riemann integrable by [F12], so $\Phi$ is absolutely integrable on $\mathbb R$ as an improper Riemann integral. Apply [F2] and then [F4] to obtain $\int\Phi=\sqrt\pi$. Applying [F3] with $A=B=\kappa=1$ gives the asserted omitted-sample bound when $N_\pm h\ge T$. [F2, F3, F4, F12, step 1.1]

3.1 By [F5], the bound of the full-error theorem requires the strip premise as well as the tail premise. The real integral and truncation tail are justified in step 2.1, while step 1.2 disproves that strip premise. Thus no total quadrature error bound is asserted. [F5, step 2.1, step 1.2] ∎

