---
id: ex-a-rank-deficient-matrix-has-an-affine-family-of-least-squares-minimisers
kind: example
title: "A rank-deficient matrix has an affine family of least-squares minimisers of the form $A^+b+(I-A^+A)z$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b]
aliases: []
landmark: false
proof_strategy: computation
verification:
  audited: 2026-08-31
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

$$ A=\begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}, \qquad b=\begin{bmatrix} 1 \\ 0 \end{bmatrix}. $$

Then

$$ A^+b=\begin{bmatrix} \tfrac14 \\ \tfrac14 \end{bmatrix}, \qquad I-A^+A= \frac12 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}, $$

and every least-squares minimiser is
$A^+b+t(1,-1)^T$.

## Facts & Assumptions

**Given:** The rank-one matrix $A$ and the vector $b$.

[L1] Every least-squares minimiser has the form $A^+b+(I-A^+A)z$ ([[thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b]]).

## Verification

**Proof technique:** computation.

1.1 Since $A=2uu^*$ with $u=(1,1)^T/\sqrt2$, the pseudoinverse is $A^+=\tfrac12 uu^*=\tfrac14\!\begin{bmatrix}1&1\\1&1\end{bmatrix}$. Hence $$ A^+b= \begin{bmatrix} \tfrac14 \\ \tfrac14 \end{bmatrix}, \qquad A^+A= \frac12 \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}. $$ [algebra]

2.1 Therefore $$ I-A^+A= \frac12 \begin{bmatrix} 1 & -1 \\ -1 & 1 \end{bmatrix}, $$ whose image is the kernel line $\operatorname{span}\{(1,-1)^T\}$. [step 1.1, algebra]

3.1 By [L1], every least-squares minimiser equals $A^+b+(I-A^+A)z$, and step 2.1 shows that this is exactly the affine line $A^+b+t(1,-1)^T$. [L1, step 2.1] ∎