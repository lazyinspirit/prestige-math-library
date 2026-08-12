---
id: def-integral-logarithm
kind: definition
title: "The integral logarithm L(x):=integral from 1 to x of dt/t for x>0"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-oriented-integral, thm-algebra-of-continuous-functions,
       thm-continuous-implies-integrable]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "OpenStax, Calculus Volume 1, Section 6.7"
      url: "https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms"
pipeline_run: null
---

## Definition

For $x>0$, define the **integral logarithm**

$$L(x):=\int_1^x\frac{dt}{t},$$

using the oriented integral when $x<1$
([[def-oriented-integral]]).

This is well defined. The function $t\mapsto1/t$ is continuous wherever
$t\neq0$ by the quotient clause of
[[thm-algebra-of-continuous-functions]]. For $x\neq1$ it is therefore continuous on the nondegenerate compact interval
with endpoints $1$ and $x$, hence Riemann integrable there by
[[thm-continuous-implies-integrable]], whose hypothesis is $a<b$. At $x=1$ the
interval is degenerate and that theorem does not apply; there
[[def-oriented-integral]] stipulates $\int_1^1f=0$, so $L(1)=0$ directly.
