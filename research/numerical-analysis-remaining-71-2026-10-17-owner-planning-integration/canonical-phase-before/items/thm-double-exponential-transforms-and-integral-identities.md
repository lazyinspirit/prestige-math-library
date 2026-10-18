---
id: thm-double-exponential-transforms-and-integral-identities
kind: theorem
title: The double-exponential maps and their change-of-variable identities
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [alg-double-exponential-trapezoid, thm-substitution, thm-exponential-limits-and-range, def-real-exponential-function-and-e, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, cor-mean-value-theorem]
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

The three real maps in [[alg-double-exponential-trapezoid]] are continuously differentiable, strictly increasing bijections from $\mathbb R$ onto $(a,b)$, $(0,\infty)$, and $\mathbb R$, respectively, with the derivatives used there. If the corresponding transformed integrand $\Phi$ is absolutely integrable on $\mathbb R$, then the target improper integral exists absolutely and equals $\int_{\mathbb R}\Phi(t)\,dt$. This is a change-of-variable identity; it asserts no quadrature error for every integrable $f$.

## Facts & Assumptions

**Given:** One of the finite-interval, positive-half-line, or whole-line modes and its transformed integrand $\Phi$ from [[alg-double-exponential-trapezoid]], with $\Phi\in L^1(\mathbb R)$.

[F1] [[alg-double-exponential-trapezoid]]: $\sinh t=(e^t-e^{-t})/2$, $\cosh t=(e^t+e^{-t})/2$, and the three maps and derivatives are displayed in its Definition.

[F2] [[thm-exponential-limits-and-range]]: $e^t\to+\infty$ as $t\to+\infty$ and $e^t\to0$ as $t\to-\infty$.

[F3] [[thm-substitution]]: for a differentiable map on a compact interval and a continuous integrand on its image, the oriented definite integral changes variables with the derivative factor.

[F4] [[thm-chain-rule]] and [[thm-algebra-of-derivatives]]: compositions and the displayed sums, products, quotients with nonzero denominator, and reciprocals differentiate by the usual rules.

[F5] [[cor-mean-value-theorem]]: a differentiable real function with positive derivative on an interval is strictly increasing.

## Proof

1.1 Differentiating $s(t)$ and $c(t)$ from their exponential formulas gives $s'(t)=c(t)>0$. Differentiating $\tanh u=(e^{2u}-1)/(e^{2u}+1)$ gives $\tanh'(u)=1/\cosh^2u>0$. The chain rule therefore gives the three positive derivatives in [F1]; [F5] makes each map strictly increasing. [F1, F4, F5, given, algebra, construct]

1.2 By [F2], $s(t)\to\pm\infty$ as $t\to\pm\infty$. Thus $\tanh((\pi/2)s(t))\to\pm1$, $\exp((\pi/2)s(t))$ tends to $0$ and $+\infty$ at the two ends, and $\sinh((\pi/2)s(t))\to\pm\infty$. Continuity, strict increase, and these endpoint limits prove the stated ranges and bijectivity. [F1, F2, step 1.1, algebra]

2.1 Fix $T>0$. On $[-T,T]$ each map is continuously differentiable and the relevant $f$ is continuous on its compact image, so [F3] gives $\int_{x(-T)}^{x(T)}f(x)\,dx=\int_{-T}^{T}\Phi(t)\,dt$. Applying the same identity to $|f|$ shows that the truncated absolute integrals equal $\int_{-T}^{T}|\Phi(t)|\,dt$. Since the maps are increasing, their endpoints tend to the target endpoints by step 1.2. Absolute integrability of $\Phi$ makes both limits converge, proving absolute convergence and the asserted identity. [F1, F3, given, step 1.2] ∎

