---
id: thm-cauchy-principal-value-subtraction-identity
kind: theorem
title: The Cauchy principal-value subtraction identity
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-cauchy-principal-value-subtraction, lem-c1-divided-difference-extends-continuously, def-natural-logarithm, thm-logarithm-derivative-and-integral, thm-ftc-first-part, thm-ftc-second-part]
proof_strategy: direct
axiom_use: None. The symmetric limit and logarithm cancellation are choice-free.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Lloyd N. Trefethen and J. A. C. Weideman, The Exponentially Convergent Trapezoidal Rule, SIAM Review 56(3), 2014
      url: https://people.maths.ox.ac.uk/trefethen/publication/PDF/2014_149.pdf
      locator: §5.19, principal-value subtraction identity.
---

## Statement

For $a<c<b$ and $f\in C^1([a,b])$, the principal value of [[def-cauchy-principal-value-subtraction]] exists and, with $g(c)=f'(c)$ and $g(x)=(f(x)-f(c))/(x-c)$ otherwise, satisfies
$$\operatorname{PV}\!\int_a^b\frac{f(x)}{x-c}\,dx=\int_a^b g(x)\,dx+f(c)\log\frac{b-c}{c-a}.$$
The first integral is an ordinary integral of a continuous function.

## Facts & Assumptions

**Given:** Reals $a<c<b$ and $f\in C^1([a,b])$.

[F1] [[def-cauchy-principal-value-subtraction]]: the principal value is the symmetric limit of the two truncated integrals.

[F2] [[lem-c1-divided-difference-extends-continuously]]: the subtraction quotient $g$ extended by $g(c)=f'(c)$ is continuous on $[a,b]$.

[F3] [[def-natural-logarithm]] and [[thm-logarithm-derivative-and-integral]]: on $(0,\infty)$, $\log$ is a primitive of $1/x$ and is continuous.

[F4] [[thm-ftc-second-part]]: integrating a continuous derivative on a compact interval gives the endpoint difference.

[F5] [[thm-ftc-first-part]]: the integral function of a continuous integrand is a continuous primitive, so its increments over intervals whose endpoints tend to $c$ tend to zero.

## Proof

1.1 For $x\ne c$, $f(x)/(x-c)=g(x)+f(c)/(x-c)$. If $0<\varepsilon<\min(c-a,b-c)$, apply [F3]–[F4] separately on $[a,c-\varepsilon]$ and $[c+\varepsilon,b]$. The two singular terms sum to $$f(c)\bigl(\log\varepsilon-\log(c-a)+\log(b-c)-\log\varepsilon\bigr)=f(c)\log\frac{b-c}{c-a}.$$ Thus the truncated principal value equals $\int_a^{c-\varepsilon}g+\int_{c+\varepsilon}^b g+f(c)\log((b-c)/(c-a))$. [F1, F2, F3, F4, algebra]

1.2 Let $G(x)=\int_a^xg$. By [F2] and [F5], $G$ is continuous and its interval increments equal the corresponding integrals. Additivity gives $\int_a^{c-\varepsilon}g+\int_{c+\varepsilon}^b g=\int_a^b g-[G(c+\varepsilon)-G(c-\varepsilon)]$. The bracket tends to zero by continuity of $G$. [F2, F5, step 1.1, algebra]

2.1 Taking $\varepsilon\downarrow0$ in step 1.1 and using step 1.2 proves existence of the symmetric limit and the asserted identity. Since $g$ is continuous, its ordinary integral exists. [F1, F2, step 1.1, step 1.2] ∎

