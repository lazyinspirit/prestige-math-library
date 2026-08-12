---
id: ex-three-by-three-inverse-by-adjugate
kind: example
title: "The adjugate gives the inverse of a $3\\times3$ rational matrix with determinant $3$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-matrix-minors-cofactors-and-adjugate,
       thm-adjugate-identity-over-a-commutative-ring,
       cor-inverse-matrix-by-adjugate, thm-rat-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For

$$A=\begin{pmatrix}1&2&0\\0&1&1\\1&0&1\end{pmatrix}\in M_3(\mathbb Q),$$

one has $\det(A)=3$ and

$$A^{-1}=\frac13 \begin{pmatrix}1&-2&2\\1&1&-1\\-1&2&1\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The displayed matrix $A$.

[F1] $\mathbb Q$ is a field ([[thm-rat-field]]).

[F2] The cofactor matrix is $(C_{ij})$ and the adjugate is its transpose
([[def-matrix-minors-cofactors-and-adjugate]]).

[L1] $A\operatorname{adj}(A)=\det(A)I$
([[thm-adjugate-identity-over-a-commutative-ring]]).

[L2] If $\det(A)$ is a unit, then
$A^{-1}=\det(A)^{-1}\operatorname{adj}(A)$
([[cor-inverse-matrix-by-adjugate]]).

## Verification

**Proof technique:** direct.

1.1 Computing the nine signed $2\times2$ minors gives $$ \operatorname{cof}(A)= \begin{pmatrix}1&1&-1\\-2&1&2\\2&-1&1\end{pmatrix}, \quad \operatorname{adj}(A)= \begin{pmatrix}1&-2&2\\1&1&-1\\-1&2&1\end{pmatrix}. $$ [F2, algebra]

2.1 Direct multiplication gives $A\operatorname{adj}(A)=3I_3$. By [L1], this also confirms $\det(A)=3$. [step 1.1, L1, algebra]

3.1 The scalar $3$ is a unit of $\mathbb Q$ by [F1], so [L2] gives the displayed inverse. Multiplying it by $A$ on either side gives $I_3$. [step 2.1, F1, L2, algebra] ∎
