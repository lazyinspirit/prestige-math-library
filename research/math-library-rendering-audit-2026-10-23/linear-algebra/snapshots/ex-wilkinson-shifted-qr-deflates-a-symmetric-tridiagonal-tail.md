---
id: ex-wilkinson-shifted-qr-deflates-a-symmetric-tridiagonal-tail
kind: example
title: "A Wilkinson-shifted QR step can sharply reduce the tail of a symmetric tridiagonal matrix"
status: published
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
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references: []
---

## Example

Let

$$T=\begin{bmatrix}4 & 1 & 0\\ 1 & 3 & 0.1\\ 0 & 0.1 & 2\end{bmatrix}.$$

The trailing $2\times2$ block has eigenvalues about $3.0099$ and $1.9901$, so
the Wilkinson shift is $\mu\approx1.9901$. One shifted QR step gives

$$T_+\approx\begin{bmatrix}4.5992 & 0.2091 & 0\\ 0.2091 & 2.4199 & -0.0020\\ 0 & -0.0020 & 1.9809\end{bmatrix}.$$

Thus the last subdiagonal entry shrinks from $0.1$ to about $0.0020$.

## Facts & Assumptions

**Given:** The symmetric tridiagonal matrix $T$ of the statement.

[L1] The Wilkinson shift is the eigenvalue of the trailing $2\times2$ block that is nearer to the bottom-right entry, away from ties ([[def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift]]).

## Verification

**Proof technique:** computation.

1.1 The trailing $2\times2$ block of $T$ is $\bigl[\begin{smallmatrix}3&1/10\\1/10&2\end{smallmatrix}\bigr]$, whose eigenvalues are $(25\pm\sqrt{26})/10$. The smaller one is nearer to the bottom-right entry $2$, so it is the Wilkinson shift. [algebra]

2.1 Carrying out one shifted QR step with that shift gives the displayed matrix $T_+$, whose bottom subdiagonal magnitude is about $2\times10^{-3}$, hence smaller than $1/400$ and far below the original $10^{-1}$. This is a direct one-step computation using the shift from [L1]. [L1, step 1.1, algebra] ∎
