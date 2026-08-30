---
id: ex-diagonal-pseudoinverse-and-the-two-orthogonal-projections
kind: example
title: "A diagonal rank-deficient matrix makes $A^+$, $AA^+$, and $A^+A$ completely explicit"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces,
       thm-moore-penrose-pseudoinverse-exists-and-is-unique]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references: []
---

## Example

Let

$$ A=\begin{bmatrix} 2 & 0 \\ 0 & 0 \end{bmatrix}. $$

Then

$$ A^+=\begin{bmatrix} \tfrac12 & 0 \\ 0 & 0 \end{bmatrix}, \qquad AA^+=A^+A= \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}. $$

So both $AA^+$ and $A^+A$ are the coordinate projection onto the first axis.

## Facts & Assumptions

**Given:** The displayed diagonal matrix $A$.

[L1] Every finite real or complex matrix has a unique Moore--Penrose pseudoinverse ([[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]).

[L2] $AA^+$ and $A^+A$ are the orthogonal projections onto $\operatorname{im}A$ and $\operatorname{im}A^*$ ([[thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces]]).

## Verification

**Proof technique:** computation.

1.1 Because $A$ is already diagonal with one nonzero singular value, inverting that entry and leaving the zero entry fixed gives the candidate $A^+=\operatorname{diag}(1/2,0)$. [L1, algebra]
2.1 Direct multiplication gives $AA^+=A^+A=\operatorname{diag}(1,0)$. [step 1.1, algebra]
3.1 The matrix $\operatorname{diag}(1,0)$ is the orthogonal projection onto the first coordinate axis, which is exactly $\operatorname{im}A=\operatorname{im}A^*$. This matches [L2]. [L2, step 2.1, algebra] ∎