---
id: ex-a-cyclic-companion-operator
kind: example
title: "A companion operator with a visible cyclic vector and equal canonical polynomials"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-cyclic-subspace-power-basis-and-companion-matrix, thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials]
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

For $f=x^3+x+1$, let
$$C=\begin{pmatrix}0&0&-1\\1&0&-1\\0&1&0\end{pmatrix}.$$
Then $e_1,Ce_1,C^2e_1$ are $e_1,e_2,e_3$, so $e_1$ is cyclic. The matrix is the companion matrix of $f$, and
$$\mu_C=\chi_C=f.$$

## Remarks

Over $\mathbb F_2$, the polynomial $x^3+x+1$ is irreducible and the same column orientation represents multiplication by its residue class in $\mathbb F_8=\mathbb F_2[x]/(x^3+x+1)$. This fixes the convention for a downstream computation of the Frobenius map of $\mathbb F_8/\mathbb F_2$; the present matrix is multiplication by the residue class, not the Frobenius operator, and no forward dependency is used here.

## Facts & Assumptions

**Given:** The displayed companion matrix $C$ and $v=e_1$.

[L1] A vector annihilator gives its power basis and the companion matrix in the coordinate-column convention ([[thm-cyclic-subspace-power-basis-and-companion-matrix]]).

[L2] A cyclic vector exists exactly when the minimal and characteristic polynomials agree ([[thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials]]).

## Verification

**Proof technique:** computation.

1.1 Matrix multiplication gives $Ce_1=e_2$ and $C^2e_1=e_3$, so the three power vectors are the standard basis and $e_1$ is cyclic. [algebra]

2.1 The columns show $Ce_3=-e_1-e_2$, hence $(C^3+C+I)e_1=0$; [L1] identifies $C$ as the companion matrix of $f$, and [L2] gives $\mu_C=\chi_C=f$. [step 1.1, L1, L2, algebra] ∎
