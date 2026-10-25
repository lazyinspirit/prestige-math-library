---
id: thm-double-exponential-transforms-and-integral-identities
kind: theorem
title: The double-exponential maps and their change-of-variable identities
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [alg-double-exponential-trapezoid, thm-substitution, thm-exponential-limits-and-range, def-real-exponential-function-and-e, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, cor-mean-value-theorem, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity, thm-intermediate-value, thm-continuous-implies-integrable]
proof_strategy: direct
axiom_use: None. The maps and improper change-of-variable limits are choice-free.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Lloyd N. Trefethen and J. A. C. Weideman, The Exponentially Convergent Trapezoidal Rule, SIAM Review 56(3), 2014
      url: https://people.maths.ox.ac.uk/trefethen/publication/PDF/2014_149.pdf
      locator: §14 and Table 14.1, tanh-sinh transplantation and its stated scope.
---

## Statement

The three real maps in [[alg-double-exponential-trapezoid]] are continuously differentiable, strictly increasing bijections from $\mathbb R$ onto $(a,b)$, $(0,\infty)$, and $\mathbb R$, respectively, with the derivatives used there. If the corresponding transformed integrand $\Phi$ is absolutely integrable on $\mathbb R$ as an improper Riemann integral, then the target improper integral exists absolutely and equals $\int_{\mathbb R}\Phi(t)\,dt$. This is a change-of-variable identity; it asserts no quadrature error for every integrable $f$.

## Facts & Assumptions

**Given:** One of the finite-interval, positive-half-line, or whole-line modes and its transformed integrand $\Phi$ from [[alg-double-exponential-trapezoid]], with absolutely convergent improper integral $\int_{-\infty}^{\infty}|\Phi(t)|\,dt$.

[F1] [[alg-double-exponential-trapezoid]]: $\sinh t=(e^t-e^{-t})/2$, $\cosh t=(e^t+e^{-t})/2$, and the three maps and derivatives are displayed in its Definition.

[F2] [[thm-exponential-limits-and-range]]: $e^t\to+\infty$ as $t\to+\infty$ and $e^t\to0$ as $t\to-\infty$.

[F3] [[thm-substitution]]: for a differentiable map with Riemann-integrable derivative on a nondegenerate compact interval and a continuous integrand on an interval containing its image, the oriented definite integral changes variables with the derivative factor.

[F4] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]: compositions and the displayed sums, products, quotients with nonzero denominator, and reciprocals differentiate by the usual rules.

[F5] [[cor-mean-value-theorem]]: a differentiable real function with positive derivative on an interval is strictly increasing. [[thm-intermediate-value]] gives every intermediate value of a continuous real function.

[F6] [[thm-exponential-addition-formula]] and [[cor-exponential-reciprocal-and-positivity]]: $e^{v+w}=e^ve^w$, $e^{-v}=1/e^v$, and $e^v>0$ for real $v$.

[F7] [[thm-derivative-of-exponential]]: the real exponential is smooth and its derivative is itself.

[F8] [[thm-continuous-implies-integrable]]: a continuous real function on a nondegenerate compact interval is Riemann integrable there.

## Proof

1.1 Differentiating $s(t)$ and $c(t)$ from their exponential formulas gives $s'(t)=c(t)>0$. By [F6], multiplying the defining quotient $\sinh u/\cosh u$ by $e^u/e^u$ gives $\tanh u=(e^{2u}-1)/(e^{2u}+1)$, with positive denominator. Differentiating this quotient using [F7] gives $\tanh'(u)=1/\cosh^2u>0$. The chain rule therefore gives the three positive derivatives in [F1]; [F5] makes each map strictly increasing. [F1, F4, F5, F6, F7, given, algebra, construct]

2.1 By [F2], $s(t)\to\pm\infty$ as $t\to\pm\infty$. Thus $\tanh((\pi/2)s(t))\to\pm1$, $\exp((\pi/2)s(t))$ tends to $0$ and $+\infty$ at the two ends, and $\sinh((\pi/2)s(t))\to\pm\infty$. Continuity, strict increase, and these endpoint limits prove the stated ranges and bijectivity. [F1, F2, F5, step 1.1, algebra]

3.1 Fix $T>0$. The displayed derivatives in [F1] are continuous by their exponential formulas, so [F8] makes them Riemann integrable on $[-T,T]$. The relevant $f$ is continuous on the nondegenerate compact image interval, so [F3] gives $\int_{x(-T)}^{x(T)}f(x)\,dx=\int_{-T}^{T}\Phi(t)\,dt$. Applying the same identity to $|f|$ shows that the truncated absolute integrals equal $\int_{-T}^{T}|\Phi(t)|\,dt$. The two nonnegative absolute integrals on either side of $x(0)$ increase and are bounded by $\int_{\mathbb R}|\Phi|$, so each converges separately. Since the endpoints tend to the target endpoints by step 2.1, the target integral converges absolutely, and taking limits in the signed identity proves the asserted equality. [F1, F3, F7, F8, given, step 1.1, step 2.1] ∎

