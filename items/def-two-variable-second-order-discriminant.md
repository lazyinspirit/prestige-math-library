---
id: def-two-variable-second-order-discriminant
kind: definition
title: "The discriminant for a second-order equation in two variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-principal-part-and-principal-symbol-of-a-scalar-pde]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Definition

For a second-order equation in two variables with principal part

$$A(x,y)u_{xx}+2B(x,y)u_{xy}+C(x,y)u_{yy},$$

the **discriminant** is

$$\Delta(x,y):=B(x,y)^2-A(x,y)C(x,y).$$

At a point where $(A,B,C)\neq(0,0,0)$, the principal part is called
**elliptic** when $\Delta<0$, **parabolic** when $\Delta=0$, and
**hyperbolic** when $\Delta>0$. If $A=B=C=0$ at the point, the second-order
principal part vanishes there and is degenerate rather than parabolic.

Here “parabolic” names the nonzero rank-one case in the pointwise
classification of a binary second-order principal form. This is distinct from
the heat-type space-time convention, which requires a first-order time
derivative and a nonzero semidefinite spatial principal form.
