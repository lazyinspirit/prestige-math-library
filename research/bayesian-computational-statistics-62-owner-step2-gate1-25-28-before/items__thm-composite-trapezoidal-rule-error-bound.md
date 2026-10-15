---
id: thm-composite-trapezoidal-rule-error-bound
kind: theorem
title: Second-derivative error bound for the composite trapezoidal rule
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-composite-trapezoidal-rule
  - def-higher-derivatives-and-smoothness
  - lem-linear-interpolation-error-bound
  - thm-additivity-over-subintervals
  - thm-continuous-implies-integrable
  - thm-linearity-of-the-integral
  - thm-monotonicity-of-the-integral
  - thm-newton-leibniz-with-interior-derivative
justified_by: []
proof_strategy: direct
axiom_use: "None. The finite-panel interpolation and Riemann-integral argument is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6.1–§5.6.4"
      url: "https://tobydriscoll.net/fnc-julia/localapprox/integration.html"
      locator: "Equations (5.6.1)–(5.6.4), composite formula, and the second-order accuracy discussion; complete online chapter inspected."
    - title: "Endre Süli, Numerical Computation, course notes"
      url: "https://people.maths.ox.ac.uk/suli/nc.pdf"
      locator: "§2.1, Theorem 3 and equation (14) for one panel; §2.2, equations (20)–(21) for the composite trapezium error, PDF pp. 12–16."
---

## Statement

Let $a<b$, let $N\ge1$ be an integer, and put $h:=(b-a)/N$. For
$f\in C^2([a,b])$ in the sense of [[def-higher-derivatives-and-smoothness]],
the value $T_N(f)$ from [[def-composite-trapezoidal-rule]] satisfies
$$\left|\int_a^b f(x)\,dx-T_N(f)\right|\le\frac{(b-a)h^2}{12}\sup_{x\in[a,b]}|f''(x)|.$$
The integral is the Riemann integral of [[def-darboux-integral]].

## Facts & Assumptions

**Given:** Reals $a<b$, an integer $N\ge1$, the mesh width $h=(b-a)/N$, and $f\in C^2([a,b])$.

[F1] [[def-composite-trapezoidal-rule]]: $T_N(f)$ is $h$ times the sum of the endpoint values with half weights and the interior mesh values with unit weights.

[F2] [[def-higher-derivatives-and-smoothness]]: $C^2([a,b])$ means $f,f',f''$ are continuous on $[a,b]$, with derivatives at the endpoints understood in the one-sided sense.

[F3] [[thm-continuous-implies-integrable]]: every continuous real function on a closed bounded interval is bounded and Riemann integrable.

[F4] [[lem-linear-interpolation-error-bound]]: if a function is $C^2$ on an open interval containing a panel $[u,v]$, its endpoint affine interpolant $L$ satisfies $|f(x)-L(x)|\le M(x-u)(v-x)/2$, where $M:=\sup_{[u,v]}|f''|$.

[F5] [[thm-monotonicity-of-the-integral]]: pointwise order between integrable functions on an increasing interval implies the same order between their integrals.

[F6] [[thm-linearity-of-the-integral]]: sums and real scalar multiples of integrable functions are integrable and the integral is linear.

[F7] [[thm-additivity-over-subintervals]]: the integral over adjacent intervals is the sum of the two interval integrals.

[F8] [[thm-newton-leibniz-with-interior-derivative]]: a continuous function with an integrable interior derivative has integral equal to the endpoint difference of an antiderivative.

## Proof

1.1 Since $f''$ is continuous on $[a,b]$, [F3] shows it is bounded; set $M:=\sup_{[a,b]}|f''|<\infty$. The function $f$ is also Riemann integrable. [given, F2, F3, construct]

2.1 By [F2], the endpoint derivatives $f'(a),f''(a),f'(b),f''(b)$ are the one-sided derivatives from within $[a,b]$. Define $\tilde f$ on $(a-1,b+1)$ by $ \tilde f(x):=\begin{cases} f(a)+f'(a)(x-a)+\frac12 f''(a)(x-a)^2,&x<a,\\ f(x),&a\le x\le b,\\ f(b)+f'(b)(x-b)+\frac12 f''(b)(x-b)^2,&x>b. \end{cases} $ At each join the polynomial piece matches the value and the first two one-sided derivatives of $f$. Since $f,f',f''$ are continuous on $[a,b]$, these matches make $\tilde f$ $C^2$ on the open interval $(a-1,b+1)$. It agrees with $f$ on $[a,b]$ and $\sup_{[a,b]}|\tilde f''|=M$. For $j=0,\ldots,N-1$, let $x_j=a+jh$ and let $L_j$ be the affine interpolant between $f(x_j)$ and $f(x_{j+1})$. Put $q_j(x):=\frac M2(x-x_j)(x_{j+1}-x)$ on that panel. Applying [F4] to $\tilde f$ on each panel gives $|f(x)-L_j(x)|\le q_j(x)$, and $q_j\ge0$. [given, F2, F4, step 1.1, construct]

3.1 Let $P_N$ be the continuous piecewise-affine function equal to $L_j$ on each panel, and let $q_N$ be the continuous piecewise function equal to $q_j$ on each panel; continuity of $q_N$ at a knot holds because both adjacent formulas vanish there. Step 2.1 gives $-q_N\le f-P_N\le q_N$ throughout $[a,b]$. [step 2.1, construct]

3.2 By [F8], $\int_{x_j}^{x_{j+1}}L_j=\frac h2(f(x_j)+f(x_{j+1}))$ and $\int_{x_j}^{x_{j+1}}q_j=\frac{Mh^3}{12}$; the second identity follows by integrating $\frac M2t(h-t)$ on $[0,h]$. Repeated additivity [F7] therefore gives $\int_a^bP_N=T_N(f)$, because each interior knot occurs twice with half weight, and $\int_a^bq_N=NMh^3/12$. [F1, F7, F8, step 2.1, algebra]

4.1 The functions $q_N$ and $f-P_N$ are continuous and hence integrable by [F3]. Applying [F5] to the two pointwise inequalities in step 3.1 and using [F6] yields $\left|\int_a^b f-\int_a^b P_N\right|\le\int_a^b q_N$. [step 3.1, F3, F5, F6, algebra]

5.1 Substituting the identities from step 3.2 into step 4.1 gives $\left|\int_a^b f-T_N(f)\right|\le NMh^3/12=(b-a)h^2M/12$, since $Nh=b-a$. This is the claimed bound. [step 4.1, step 3.2, algebra] ∎
