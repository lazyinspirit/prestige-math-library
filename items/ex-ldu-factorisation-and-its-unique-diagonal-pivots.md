---
id: ex-ldu-factorisation-and-its-unique-diagonal-pivots
kind: example
title: "An LDU factorisation isolates the pivot scalars uniquely"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ldu-factorisation, thm-normalised-lu-and-ldu-factorisations-are-unique]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 4220: Numerical Analysis, Blocked LU and Cholesky"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html"
---

## Example

The matrix
$$A=\begin{pmatrix}2&1\\4&5\end{pmatrix}$$

has the LDU factorisation

$$A=\begin{pmatrix}1&0\\2&1\end{pmatrix}\begin{pmatrix}2&0\\0&3\end{pmatrix}\begin{pmatrix}1&\frac12\\0&1\end{pmatrix},$$

and the diagonal pivots $2,3$ are uniquely determined.

## Facts & Assumptions

**Given:** The displayed matrix $A$ and candidate LDU factors.

[L1] An LDU factorisation has the displayed unit-lower, diagonal, and unit-upper
shape ([[def-ldu-factorisation]]).

[L2] LDU factorisations with nonzero diagonal pivots are unique
([[thm-normalised-lu-and-ldu-factorisations-are-unique]]).

## Verification

**Proof technique:** direct.

1.1 Multiplying the right two factors gives $$ \begin{pmatrix}2&0\\0&3\end{pmatrix} \begin{pmatrix}1&\frac12\\0&1\end{pmatrix} = \begin{pmatrix}2&1\\0&3\end{pmatrix}, $$ and then left multiplication by $\begin{pmatrix}1&0\\2&1\end{pmatrix}$ yields $\begin{pmatrix}2&1\\4&5\end{pmatrix}=A$. [given, L1, algebra]
2.1 The diagonal factor has nonzero entries $2$ and $3$, so [L2] applies. Any other LDU factorisation of $A$ with nonzero diagonal pivots must therefore have the same diagonal factor and hence the same pivot scalars. [step 1.1, L2]
3.1 Steps 1.1-2.1 verify the example. [step 1.1, step 2.1] ∎
