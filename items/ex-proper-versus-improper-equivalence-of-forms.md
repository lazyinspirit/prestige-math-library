---
id: ex-proper-versus-improper-equivalence-of-forms
kind: example
title: "Improper equivalence can merge two distinct proper classes"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-proper-equivalence-of-binary-quadratic-forms, cex-same-represented-integers-do-not-imply-proper-equivalence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Granville, Binary Quadratic Forms, Chapter 4"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Example

If one allows determinant $-1$ substitutions as well as determinant $1$
substitutions, then the two distinct reduced forms

$$ (2,1,3)\qquad\text{and}\qquad(2,-1,3) $$

become equivalent.

## Facts & Assumptions

**Given:** The forms $f=(2,1,3)$ and $g=(2,-1,3)$.

[F1] Proper equivalence uses determinant-one integer matrices ([[def-proper-equivalence-of-binary-quadratic-forms]]).

[L1] The previous counterexample shows that $f$ and $g$ are not properly equivalent ([[cex-same-represented-integers-do-not-imply-proper-equivalence]]).

## Verification

**Proof technique:** direct.

1.1 The matrix $N=\begin{pmatrix}1&0\\ 0&-1\end{pmatrix}$ has determinant $-1$, and direct substitution gives $f\mid N=(2,-1,3)=g$. [F1, given, algebra]

2.1 Thus allowing determinant $-1$ merges the two distinct proper classes from [L1]: the forms are equivalent under a unimodular substitution, but not under a determinant-one unimodular substitution. [L1, step 1.1] ∎
