---
id: ex-gauss-reduction-of-a-three-variable-symmetric-polynomial
kind: example
title: "The lexicographic reduction algorithm in three variables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-of-symmetric-polynomials-existence, def-lexicographic-order-and-polynomial-multidegree]
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

Let

$$P=\sum_{\mathrm{sym}}x^3+2\sum_{\mathrm{sym}}x^2y+3xyz,$$

where the first sum is $x^3+y^3+z^3$ and the second is the sum of the six distinct monomials with exponent pattern $(2,1,0)$. Then

$$P=e_1^3-e_1e_2.$$

## Facts & Assumptions

**Given:** The polynomial $P$ above, with lexicographic order $x>y>z$.

[L1] Lexicographic reduction cancels the leading partition by the corresponding monomial in $e_1,e_2,e_3$ and strictly decreases the leading multidegree ([[thm-fundamental-theorem-of-symmetric-polynomials-existence]]).

[L2] Lexicographic order compares exponent tuples at their first differing coordinate ([[def-lexicographic-order-and-polynomial-multidegree]]).

## Verification

**Proof technique:** direct.

1.1 The leading multidegree of $P$ is $(3,0,0)$ with coefficient $1$, so [L1] first subtracts $e_1^3$. Its expansion is $\sum_{\mathrm{sym}}x^3+3\sum_{\mathrm{sym}}x^2y+6xyz$. [given, L1, L2, algebra]

2.1 The remainder is $-\sum_{\mathrm{sym}}x^2y-3xyz$, whose leading multidegree is $(2,1,0)$. Since $e_1e_2=\sum_{\mathrm{sym}}x^2y+3xyz$, the next prescribed subtraction is $-e_1e_2$ and the remainder becomes zero. [step 1.1, L1, L2, algebra]

3.1 Therefore $P=e_1^3-e_1e_2$. Direct expansion verifies the equality and exhibits both lexicographic decreases. [step 2.1, algebra] ∎
