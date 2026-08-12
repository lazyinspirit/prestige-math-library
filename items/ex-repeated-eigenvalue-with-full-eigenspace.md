---
id: ex-repeated-eigenvalue-with-full-eigenspace
kind: example
title: 'The scalar matrix $2I_2$ has algebraic and geometric multiplicity two at $2$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraic-and-geometric-multiplicity-of-an-eigenvalue, lem-standard-basis-of-f-n]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §12.2'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Example

Over any field $F$, the scalar matrix $A=2I_2$ has algebraic and geometric multiplicity $2$ at the scalar $2\in F$.

## Facts & Assumptions

**Given:** The matrix $A=2I_2\in M_2(F)$.

[L1] Algebraic multiplicity is the exponent of $x-\lambda$ in the characteristic polynomial, and geometric multiplicity is $\dim\ker(A-\lambda I)$ ([[def-algebraic-and-geometric-multiplicity-of-an-eigenvalue]]).

[L2] The two standard coordinate vectors form a basis of $F^2$ ([[lem-standard-basis-of-f-n]]).

## Verification

**Proof technique:** direct computation.

1.1 Since $xI_2-A=(x-2)I_2$, one has $\chi_A(x)=(x-2)^2$, so the algebraic multiplicity is $2$. [L1, algebra]

1.2 Since $A-2I_2=0$, its kernel is all of $F^2$, which has dimension $2$ by [L2]. Thus the geometric multiplicity is $2$. [L1, L2, algebra]

2.1 Both multiplicities therefore equal $2$, including in characteristic $2$, where the scalar denoted $2$ is $0$. [step 1.1, step 1.2] ∎
