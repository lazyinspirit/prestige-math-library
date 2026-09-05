---
id: ex-tricomi-equation-changes-type
kind: example
title: "The Tricomi equation changes type across y = 0"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-two-variable-second-order-discriminant,
       rem-limits-of-the-elliptic-parabolic-hyperbolic-trichotomy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Example

The Tricomi equation

$$y\,u_{xx}+u_{yy}=0$$

is elliptic for $y>0$, hyperbolic for $y<0$, and parabolic on the line $y=0$.

## Facts & Assumptions

**Given:** The principal part $y\,u_{xx}+u_{yy}$.

[L1] For a two-variable second-order principal part, the discriminant is
$B^2-AC$ ([[def-two-variable-second-order-discriminant]]).

[L2] The elliptic/parabolic/hyperbolic trichotomy is only a pointwise
second-order classification ([[rem-limits-of-the-elliptic-parabolic-hyperbolic-trichotomy]]).

## Verification

**Proof technique:** direct.

1.1 Here $A=y$, $B=0$, and $C=1$, so [L1] gives $\Delta(y)=0-y\cdot1=-y$. [L1]

2.1 If $y>0$, then $\Delta<0$ and the equation is elliptic; if $y<0$, then $\Delta>0$ and it is hyperbolic; and if $y=0$, then $\Delta=0$ and the principal part has rank one, so this pointwise change of sign is exactly the mixed-type behavior singled out in [L2]. [L2, step 1.1] ∎
