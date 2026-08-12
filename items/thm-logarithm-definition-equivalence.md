---
id: thm-logarithm-definition-equivalence
kind: theorem
title: "Five characterisations of the natural logarithm are equivalent: inverse exponential, integral, continued Mercator series, Landau root limit and the normalised functional equation"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-integral-logarithm-agrees-with-natural-logarithm,
       thm-logarithm-continuous-functional-equation-characterisation,
       lem-log-series-extends-by-the-product-law, def-natural-logarithm,
       thm-logarithm-derivative-and-integral,
       thm-log-one-plus-x-power-series, thm-landau-logarithm-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Henry Ricardo, The Equivalence of Definitions of the Natural Logarithm Function"
      url: "https://www.researchgate.net/publication/359264337_The_Equivalence_of_Definitions_of_the_Natural_Logarithm_Function"
pipeline_run: null
---

## Statement

The following five descriptions define the same function on $(0,\infty)$:

1. the inverse of the published exponential function;
2. $x\mapsto\int_1^xdt/t$;
3. the unique product-to-sum function whose values on $1+u$ for
   $-1<u\leq1$ are the Mercator series;
4. $x\mapsto\lim_{n\to\infty}2^n(x^{1/2^n}-1)$;
5. the unique continuous product-to-sum function satisfying $f(e)=1$.

Each is the natural logarithm.

## Facts & Assumptions

**Given:** The five descriptions listed in the statement.

[F1] The natural logarithm is defined as the inverse of the exponential
function ([[def-natural-logarithm]]).

[L1] The natural logarithm satisfies
$\log x=\int_1^xdt/t$ and $\log'(x)=1/x$
([[thm-logarithm-derivative-and-integral]]).

[L2] The independently constructed integral function satisfies $L=\log$
([[cor-integral-logarithm-agrees-with-natural-logarithm]]).

[L3] The Mercator formula holds for $-1<u\leq1$
([[thm-log-one-plus-x-power-series]]), and exactly one product-law extension
of those values exists, namely $\log$
([[lem-log-series-extends-by-the-product-law]]).

[L4] For $x>0$,
$\log x=\lim_{n\to\infty}2^n(x^{1/2^n}-1)$
([[thm-landau-logarithm-limit]]).

[L5] The natural logarithm is the unique continuous product-to-sum function
with $f(e)=1$
([[thm-logarithm-continuous-functional-equation-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 Description 1 is the natural logarithm by [F1]. [F1]
1.2 Description 2 is the natural logarithm by the exact integral identity [L1], equivalently by the independently proved identification [L2]. [L1, L2]
1.3 Description 3 first uses [L3]'s local series formula and then its product-law continuation theorem, which gives exactly the natural logarithm on the full positive domain. [L3]
1.4 Description 4 equals the natural logarithm pointwise by [L4]. [L4]
1.5 Description 5 exists and is uniquely the natural logarithm by [L5]. [L5]
2.1 Since each description gives the same function $\log$, all five characterisations are equivalent. The third description includes its continuation rule; it does not assert convergence of the original series with $u=x-1$ for every positive $x$. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎
