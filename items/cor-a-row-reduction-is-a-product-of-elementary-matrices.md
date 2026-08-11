---
id: cor-a-row-reduction-is-a-product-of-elementary-matrices
kind: corollary
title: 'A finite row reduction from $A$ to $B$ is encoded by $B=E_r\cdots E_1A$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-elementary-row-operations-are-left-multiplication, thm-matrix-multiplication-laws, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. Three, §IV.3"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement

Suppose a sequence of $r$ elementary row operations transforms $A$ into $B$, and let $E_1,\ldots,E_r$ be their elementary matrices in execution order. Then
$$B=E_r\cdots E_1A.$$
For $r=0$ the empty product is the identity and $B=A$.

## Facts & Assumptions

**Given:** A finite sequence of elementary row operations taking $A$ to $B$.

[L1] One elementary row operation acts by left multiplication by its elementary matrix ([[thm-elementary-row-operations-are-left-multiplication]]).

[L2] Compatible matrix multiplication is associative and has identity matrices ([[thm-matrix-multiplication-laws]]).

[L3] The induction principle proves a property from its zero case and successor step ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 After no operations the intermediate matrix is $A=I_nA$, the empty-product formula. If after $k$ operations it is $E_k\cdots E_1A$, then [L1] says the next operation gives $E_{k+1}(E_k\cdots E_1A)$. [L1, L3, base, ih]

2.1 Associativity rewrites the successor expression as $E_{k+1}E_k\cdots E_1A$; induction therefore gives the formula after all $r$ operations, including $r=0$. [step 1.1, L2, discharge-induction] ∎
