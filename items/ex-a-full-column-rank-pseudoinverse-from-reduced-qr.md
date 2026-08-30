---
id: ex-a-full-column-rank-pseudoinverse-from-reduced-qr
kind: example
title: "A full-column-rank pseudoinverse can be read off directly from a reduced QR factorisation"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-reduced-qr-formulas-for-full-rank-pseudoinverses]
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

$$ A=\begin{bmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 1 \end{bmatrix} = \widehat Q\widehat R, $$

where

$$ \widehat Q= \begin{bmatrix} \tfrac1{\sqrt2} & -\tfrac1{\sqrt6} \\ \tfrac1{\sqrt2} & \tfrac1{\sqrt6} \\ 0 & \tfrac2{\sqrt6} \end{bmatrix}, \qquad \widehat R= \begin{bmatrix} \sqrt2 & \tfrac1{\sqrt2} \\ 0 & \tfrac{\sqrt6}{2} \end{bmatrix}. $$

Then

$$ A^+=\widehat R^{-1}\widehat Q^* = \begin{bmatrix} \tfrac23 & \tfrac13 & -\tfrac13 \\ -\tfrac13 & \tfrac13 & \tfrac23 \end{bmatrix}. $$

## Facts & Assumptions

**Given:** The displayed reduced QR factorisation of $A$.

[L1] For full column rank, reduced QR gives $A^+=\widehat R^{-1}\widehat Q^*$ ([[prop-reduced-qr-formulas-for-full-rank-pseudoinverses]]).

## Verification

**Proof technique:** computation.

1.1 Direct multiplication shows $\widehat Q^*\widehat Q=I$ and $\widehat Q\widehat R=A$, so the displayed matrices are indeed a reduced QR factorisation. [algebra]
2.1 The inverse of $\widehat R$ is $$ \widehat R^{-1}= \begin{bmatrix} \tfrac1{\sqrt2} & -\tfrac1{\sqrt6} \\ 0 & \tfrac2{\sqrt6} \end{bmatrix}. $$ Therefore [L1] gives the displayed matrix for $A^+$. [L1, step 1.1, algebra]
3.1 Multiplying $A^+A$ gives the $2\times2$ identity, confirming that the matrix from step 2.1 is the full-column-rank pseudoinverse. [step 2.1, algebra] ∎