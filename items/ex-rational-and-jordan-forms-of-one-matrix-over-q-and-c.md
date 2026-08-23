---
id: ex-rational-and-jordan-forms-of-one-matrix-over-q-and-c
kind: example
title: "One matrix in rational form over $\\mathbb Q$ and Jordan form after adjoining its roots"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-rational-canonical-form-of-an-explicit-four-by-four-matrix, thm-jordan-canonical-form-from-pid-module-structure, prop-module-and-jordan-string-block-data-agree]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Brussel, Finitely Generated Modules over a PID, canonical-form comparison"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
    - title: "A. Apisa, Wisconsin Math 542, Lectures 11-12"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
pipeline_run: null
---

## Example

For the preceding matrix $A$, rational canonical form over $\mathbb Q$ has companion blocks $C(x-1)$ and $C((x-1)(x^2+1))$. Over a field containing $i$ with $i^2=-1$, its Jordan form is

$$\operatorname{diag}(1,1,i,-i).$$

## Facts & Assumptions

**Given:** Jordan form from module elementary divisors ([[thm-jordan-canonical-form-from-pid-module-structure]]) and agreement with Jordan-string block data ([[prop-module-and-jordan-string-block-data-agree]]).

[L1] The invariant factors are $x-1$ and $(x-1)(x^2+1)$ ([[ex-rational-canonical-form-of-an-explicit-four-by-four-matrix]]).

## Verification

**Proof technique:** direct.

1.1 Over $\mathbb Q$, [L1] gives the two rational companion blocks and the divisibility chain, so no splitting field is needed for rational canonical form. [L1]

2.1 After adjoining $i$, the second invariant factor splits as $(x-1)(x-i)(x+i)$ into pairwise coprime factors, while the first contributes another $x-1$. The elementary divisors are therefore $x-1,x-1,x-i,x+i$. [step 1.1, algebra]

3.1 Each elementary divisor in step 2.1 is linear, so the module Jordan theorem gives four one-dimensional blocks with entries $1,1,i,-i$, and the agreement theorem confirms the same Jordan-string block data. Their product remains $(x-1)^2(x^2+1)$ and their least common multiple remains $(x-1)(x^2+1)$, preserving the characteristic and minimal polynomial identities. [step 2.1, given] ∎
