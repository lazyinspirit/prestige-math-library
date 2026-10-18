---
id: ex-principal-value-subtraction-with-interior-pole
kind: example
title: An interior Cauchy principal value reduces to a regular integral
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-cauchy-principal-value-subtraction, thm-cauchy-principal-value-subtraction-identity, def-natural-logarithm, thm-logarithm-derivative-and-integral, def-higher-derivatives-and-smoothness]
proof_strategy: direct
axiom_use: None.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Lloyd N. Trefethen and J. A. C. Weideman, The Exponentially Convergent Trapezoidal Rule, SIAM Review 56(3), 2014
      url: https://people.maths.ox.ac.uk/trefethen/publication/PDF/2014_149.pdf
      locator: §5.19, subtraction at a simple interior pole.
---

## Statement

For $f(x)=x$ on $[0,1]$ and $c=1/3$, the symmetric Cauchy principal value is $1+\frac13\log 2$.

## Facts & Assumptions

**Given:** $f(x)=x$, $a=0$, $c=1/3$, $b=1$.

[F1] [[thm-cauchy-principal-value-subtraction-identity]]: for $f\in C^1([a,b])$, the principal value is the ordinary integral of $(f(x)-f(c))/(x-c)$ plus $f(c)\log((b-c)/(c-a))$.

[F2] [[def-natural-logarithm]] and [[thm-logarithm-derivative-and-integral]]: $\log$ is the natural logarithm and $\log 2$ is defined for the positive number $2$.

[F3] [[def-higher-derivatives-and-smoothness]]: the linear function is $C^1$ on $[0,1]$.

## Proof

1.1 The function $f(x)=x$ is $C^1$ by [F3] and $f(c)=1/3$. For every $x\ne c$, $(f(x)-f(c))/(x-c)=1$, and its continuous extension at $c$ is also $1$. [given, F3, algebra]

1.2 Apply [F1]. The ordinary integral of this quotient is $\int_0^1 1dx=1$, and $(b-c)/(c-a)=(2/3)/(1/3)=2$. Thus the principal value equals $1+(1/3)\log2$. [F1, F2, step 1.1, algebra] ∎

