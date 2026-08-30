---
id: ex-noether-normalisation-triangular-change
kind: example
title: "A triangular change makes a bivariate relation monic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-noether-normalisation-nonzero-polynomial-made-monic, lem-noether-normalisation-one-relation-reduction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., §15"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Let $k$ be an infinite field of characteristic not equal to $2$, and let
$$
A=\frac{k[x,y]}{(x^2+y^2)}.
$$
Put $u=x-y$. Then the triangular change $x=u+y$ makes the defining relation
monic in $y$, and $A$ is module-finite over the polynomial subring
$k[\bar u]$.

## Facts & Assumptions

**Given:** An infinite field $k$ with $2\ne 0$ and the quotient $A=k[x,y]/(x^2+y^2)$.

[L1] Over an infinite field, a triangular change can make a nonzero polynomial monic in one variable ([[lem-noether-normalisation-nonzero-polynomial-made-monic]]).

[L2] A monic relation makes the last generator integral over the subalgebra on the earlier generators ([[lem-noether-normalisation-one-relation-reduction]]).

## Verification

**Proof technique:** direct.

1.1 Introduce the triangular coordinate $u=x-y$, so $x=u+y$. Then $$ (u+y)^2+y^2=u^2+2uy+2y^2. $$ Multiplying by $2^{-1}$ gives the monic polynomial $y^2+uy+\tfrac12u^2$ in the variable $y$. This is the concrete instance of [L1]. [L1, given]

2.1 In the quotient algebra, $\bar u=\bar x-\bar y$ and the class $\bar y$ satisfies $$ \bar y^2+\bar u\bar y+\tfrac12\bar u^2=0 $$ over $k[\bar u]$. By [L2], $\bar y$ is integral over $k[\bar u]$. Since $A=k[\bar u,\bar y]$, the algebra $A$ is module-finite over $k[\bar u]$. [L2, step 1.1] ∎
