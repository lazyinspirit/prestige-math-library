---
id: ex-unshifted-and-shifted-qr-steps-on-a-symmetric-matrix
kind: example
title: "One unshifted QR step and one shifted QR step on the same symmetric matrix show the role of the shift"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift]
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

$$ A= \begin{bmatrix} 3 & 1\\ 1 & 2 \end{bmatrix}. $$

One unshifted QR step produces

$$ A_1= \begin{bmatrix} \tfrac72 & \tfrac12\\ \tfrac12 & \tfrac32 \end{bmatrix}, $$

while a shifted QR step with $\mu=\tfrac32$ produces

$$ \widetilde A_1= \begin{bmatrix} \tfrac{47}{13} & -\tfrac1{13}\\ -\tfrac1{13} & \tfrac{18}{13} \end{bmatrix}. $$

The shifted step reduces the off-diagonal entry from $1/2$ to $1/13$.

## Facts & Assumptions

**Given:** The symmetric matrix $A$ and the shift $\mu=3/2$.

[L1] Unshifted and shifted QR steps are defined by the factorisations $A=QR$, $A_1=RQ$ and $(A-\mu I)=QR$, $\widetilde A_1=RQ+\mu I$ ([[def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift]]).

## Verification

**Proof technique:** computation.

1.1 For the unshifted step, a QR factorisation of $A$ gives $$ Q=\frac1{\sqrt{10}} \begin{bmatrix} 3 & -1\\ 1 & 3 \end{bmatrix}, \qquad R=\frac1{\sqrt{10}} \begin{bmatrix} 10 & 5\\ 0 & 5 \end{bmatrix}, $$ so [L1] yields $A_1=RQ=\bigl[\begin{smallmatrix}7/2&1/2\\1/2&3/2\end{smallmatrix}\bigr]$. [L1, algebra]
1.2 For the shifted step, $$ A-\frac32 I= \begin{bmatrix} \tfrac32 & 1\\ 1 & \tfrac12 \end{bmatrix}, $$ and a QR factorisation gives $$ Q=\frac1{\sqrt{13}} \begin{bmatrix} 3 & -2\\ 2 & 3 \end{bmatrix}. $$ Using [L1] again gives $\widetilde A_1=\bigl[\begin{smallmatrix}47/13&-1/13\\-1/13&18/13\end{smallmatrix}\bigr]$. [L1, algebra]
2.1 Comparing steps 1.1 and 1.2 shows the effect of the shift: the off-diagonal magnitude drops from $1/2$ to $1/13$ in a single step. [step 1.1, step 1.2] ∎