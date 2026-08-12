---
id: thm-integral-logarithm-derivative-and-normalisation
kind: theorem
title: "The integral logarithm satisfies $L'(x)=1/x$ for $x>0$ and $L(1)=0$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-logarithm, thm-ftc-first-part,
       thm-additivity-over-subintervals, def-oriented-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "OpenStax, Calculus Volume 1, Section 6.7"
      url: "https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms"
pipeline_run: null
---

## Statement

For every $x>0$,

$$L'(x)=\frac1x,$$

and $L(1)=0$.

## Facts & Assumptions

**Given:** $x>0$ and $L$ as defined.

[F1] $L(z)=\int_1^z dt/t$ for $z>0$
([[def-integral-logarithm]]).

[L1] If an integrand is Riemann integrable on a compact interval and continuous
at $c$, then its integral function with fixed lower endpoint has derivative
equal to the integrand at $c$
([[thm-ftc-first-part]]).

[L2] Oriented integrals satisfy
$\int_u^v f+\int_v^w f=\int_u^w f$
([[thm-additivity-over-subintervals]]).

[F2] An oriented integral reverses sign when its endpoints are reversed and
is $0$ when the endpoints agree ([[def-oriented-integral]]).

## Proof

**Proof technique:** direct.

1.1 Choose $a,b$ with $0<a<x<b$. For every $z\in(a,b)$, additivity gives $$ L(z)=\int_1^a\frac{dt}{t}+\int_a^z\frac{dt}{t}. $$ [F1, L2]

1.2 By [F1] and the equal-endpoint convention [F2], $L(1)=\int_1^1dt/t=0$. [F1, F2]

2.1 The first term in step 1.1 is constant in $z$. Since $1/t$ is continuous at $x$, [L1] gives $L'(x)=1/x$. [step 1.1, L1, algebra]

3.1 Since $x>0$ was arbitrary, steps 2.1 and 1.2 prove both claims. [step 2.1, step 1.2] ∎
