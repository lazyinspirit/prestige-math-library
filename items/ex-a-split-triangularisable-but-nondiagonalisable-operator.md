---
id: ex-a-split-triangularisable-but-nondiagonalisable-operator
kind: example
title: 'A split $3\times3$ operator that is triangularisable but not diagonalisable'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-triangularisation-splitting-criterion, thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Over any field, let
$$A=J_2(0)\oplus J_1(0)=\begin{pmatrix}0&1&0\\0&0&0\\0&0&0\end{pmatrix}.$$
Then $\chi_A=x^3$ and $\mu_A=x^2$. Hence $A$ is triangularisable over its base field but is not diagonalisable.

## Facts & Assumptions

**Given:** The displayed matrix $A$.

[L1] An endomorphism is triangularisable exactly when its characteristic polynomial splits over the base field ([[thm-triangularisation-splitting-criterion]]).

[L2] An endomorphism is diagonalisable exactly when its minimal polynomial is a product of distinct linear factors ([[thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]]).

## Verification

**Proof technique:** computation.

1.1 The matrix is strictly upper triangular, so direct determinant computation gives $\chi_A=x^3$; also $A\ne0$ but $A^2=0$, so $\mu_A=x^2$. [algebra]

2.1 The polynomial $x^3$ splits, so [L1] confirms triangularisability, while the repeated factor in $x^2$ makes [L2] rule out diagonalisability. [step 1.1, L1, L2] ∎
