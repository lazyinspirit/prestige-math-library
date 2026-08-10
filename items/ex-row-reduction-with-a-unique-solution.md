---
id: ex-row-reduction-with-a-unique-solution
kind: example
title: 'A $3\times3$ system row reduces to a unique solution'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-rref-consistency-and-free-variable-parametrisation, thm-row-operations-preserve-solution-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, §§1.2–1.3"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
pipeline_run: null
---

## Example

Over $\mathbb R$, the system
$$x+y+z=6,\qquad 2x-y+z=3,\qquad x+2y-z=2$$
has the unique solution $(x,y,z)=(1,2,3)$.

## Facts & Assumptions

**Given:** The displayed real linear system.

[L1] An RREF with a pivot in every variable column gives one solution and no free variables ([[thm-rref-consistency-and-free-variable-parametrisation]]).

[L2] Row operations on the augmented matrix preserve the solution set ([[thm-row-operations-preserve-solution-sets]]).

## Verification

**Proof technique:** direct.

1.1 Its augmented matrix reduces as follows: subtract twice row $0$ from row $1$, subtract row $0$ from row $2$, swap rows $1,2$, add three times row $1$ to row $2$, scale row $2$ by $-1/7$, clear above its pivot, and then clear above the pivot in column $1$; the result is $[I_3\mid(1,2,3)^{\mathsf T}]$. [L1, L2, algebra]

2.1 The RREF gives the unique solution. Direct substitution yields $1+2+3=6$, $2-2+3=3$, and $1+4-3=2$. [step 1.1, algebra] ∎
