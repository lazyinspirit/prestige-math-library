---
id: ex-symmetric-reduction-in-two-variables
kind: example
title: "Reducing a symmetric polynomial in two variables to a polynomial in $e_1$ and $e_2$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-of-symmetric-polynomials-existence, def-elementary-symmetric-polynomials]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
pipeline_run: null
---

## Example

For

$$f(x,y)=x^3+y^3+x^2y+xy^2,$$

the lexicographic reduction algorithm gives

$$f=e_1^3-2e_1e_2,$$

where $e_1=x+y$ and $e_2=xy$.

## Facts & Assumptions

**Given:** The symmetric polynomial $f$ above over $\mathbb Z$.

[L1] Every symmetric polynomial is a polynomial in the elementary symmetric polynomials, obtained by cancelling its leading monomial lexicographically ([[thm-fundamental-theorem-of-symmetric-polynomials-existence]]).

[L2] In two variables, $e_1=x+y$ and $e_2=xy$ ([[def-elementary-symmetric-polynomials]]).

## Verification

**Proof technique:** direct.

1.1 The leading monomial of $f$ is $x^3$. The elementary monomial prescribed by [L1] is $e_1^3$, and $e_1^3=x^3+3x^2y+3xy^2+y^3$. [given, L1, L2, algebra]

2.1 Subtracting gives $f-e_1^3=-2x^2y-2xy^2=-2xy(x+y)=-2e_1e_2$, whose leading multidegree is smaller than $(3,0)$. [step 1.1, L2, algebra]

3.1 Hence $f=e_1^3-2e_1e_2$ in $\mathbb Z[x,y]$. Both sides have integer coefficients, so expanding the right side recovers the original polynomial over every commutative ring; there the remainder $-2e_1e_2$ of step 2.1 may itself vanish, as it does in characteristic $2$, in which case the algorithm halts one step earlier at the same answer. [step 2.1, algebra] ∎
