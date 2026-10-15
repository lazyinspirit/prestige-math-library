---
id: lem-linear-interpolation-error-bound
kind: lemma
title: Pointwise linear interpolation error from a second-derivative bound
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-higher-derivatives-and-smoothness
  - thm-continuous-implies-integrable
  - thm-rolle
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
sources:
  references:
    - title: "Endre Süli, Numerical Computation, course notes"
      url: "https://people.maths.ox.ac.uk/suli/nc.pdf"
      locator: "§2.1, Theorem 3 and the second-order Lagrange interpolation remainder, PDF pp. 12–13."
---

## Statement

Let $a<b$ and let $f$ be $C^2$ on an open interval containing $[a,b]$. Put
$M:=\sup_{t\in[a,b]}|f''(t)|$, which is finite, and let $L$ be the unique affine
function with $L(a)=f(a)$ and $L(b)=f(b)$. Then for every $x\in[a,b]$,
$$
|f(x)-L(x)|\le \frac{M}{2}(x-a)(b-x).
$$

## Facts & Assumptions

**Given:** Reals $a<b$ and a real-valued $C^2$ function on an open interval containing $[a,b]$.

[F1] [[def-higher-derivatives-and-smoothness]]: $C^2$ means that $f$, $f'$, and $f''$ exist and are continuous on the interval.

[F2] [[thm-continuous-implies-integrable]]: a continuous real function on a closed bounded interval is bounded and Riemann integrable.

[F3] [[thm-rolle]]: if a real function is continuous on a closed interval, differentiable in its interior, and has equal endpoint values, its derivative vanishes at an interior point.

## Proof

1.1 Define $L(t):=f(a)+(f(b)-f(a))(t-a)/(b-a)$. Then $L$ is affine and has the required endpoint values; any affine function agreeing with $f$ at the distinct endpoints has the same slope and intercept, so it equals $L$. By [F1] and [F2], $f''$ is bounded on $[a,b]$, so $M$ is a finite nonnegative real. [given, F1, F2, construct]

2.1 The desired inequality is equality at $x=a$ and $x=b$. Fix an interior point $x\in(a,b)$ and put $c_x:=(f(x)-L(x))/((x-a)(b-x))$. The denominator is positive. Define $g(t):=f(t)-L(t)-c_x(t-a)(b-t)$; then $g(a)=g(x)=g(b)=0$. [given, step 1.1, algebra, construct]

3.1 Rolle's theorem [F3] on $[a,x]$ and $[x,b]$ gives $s_1\in(a,x)$ and $s_2\in(x,b)$ with $g'(s_1)=g'(s_2)=0$. Applying [F3] to $g'$ on $[s_1,s_2]$ gives $\xi\in(s_1,s_2)$ with $g''(\xi)=0$. All applications are valid because $f$ is $C^2$ on a neighborhood of $[a,b]$. [given, F1, F3, step 2.1, choose]

4.1 Since $L''=0$ and $((t-a)(b-t))''=-2$, step 3.1 yields $0=g''(\xi)=f''(\xi)+2c_x$. Thus $|c_x|=|f''(\xi)|/2\le M/2$. Multiplying by the positive denominator in the definition of $c_x$ proves the claimed bound at this $x$; together with the endpoint cases in step 2.1 this proves the result. [step 2.1, step 3.1, algebra] ∎
