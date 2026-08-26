---
id: ex-two-orthogonal-latin-squares-of-order-three
kind: example
title: "The squares $L_1(i,j)=i+j$ and $L_2(i,j)=2i+j$ on $\\mathbb F_3$ are orthogonal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-linear-latin-squares-over-a-finite-field-are-mutually-orthogonal]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Deductive Press, Section 16.2: Latin Squares and MOLS"
      url: "https://deductivepress.ca/math3860/textbook/sect_latin-squares-mols"
---

## Example

On $\mathbb F_3=\{0,1,2\}$, the two squares are
$$L_1=\begin{pmatrix}0&1&2\\1&2&0\\2&0&1\end{pmatrix},\qquad L_2=\begin{pmatrix}0&1&2\\2&0&1\\1&2&0\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The two displayed arrays.

## Verification

**Proof technique:** direct.

1.1 Reading the two arrays entrywise produces the nine ordered pairs $(0,0),(1,1),(2,2),(1,2),(2,0),(0,1),(2,1),(0,2),(1,0)$, which are exactly the elements of $\mathbb F_3^2$ without repetition. [given, algebra]

2.1 Therefore the two arrays are orthogonal. This is the $q=3$ instance of [[thm-linear-latin-squares-over-a-finite-field-are-mutually-orthogonal]]. [step 1.1] ∎
