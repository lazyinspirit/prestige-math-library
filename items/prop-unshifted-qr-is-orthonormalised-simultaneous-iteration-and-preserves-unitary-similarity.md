---
id: prop-unshifted-qr-is-orthonormalised-simultaneous-iteration-and-preserves-unitary-similarity
kind: proposition
title: "Unshifted QR is orthonormalised simultaneous iteration, and every QR iterate is unitarily similar to the original matrix"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift,
       def-subspace-iteration-and-the-dominant-invariant-subspace]
aliases: []
landmark: false
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
    - title: "Per-Olof Persson, The QR Algorithm I"
      url: "https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/f1ce20d2c382d61127d8948b42dd0c86_MIT18_335JS19_lec16_reading.pdf"
---

## Statement

Let $(A_k)$ be the unshifted QR iteration started from $A=A_0$, and put
$\widehat Q_0:=I$ and $\widehat Q_k:=Q_0Q_1\cdots Q_{k-1}$ for $k\ge1$.

1. $A_k=\widehat Q_k^*A\widehat Q_k$ for every $k$.
2. The columns of $\widehat Q_k$ are obtained by orthonormalising the columns
   of $A^k$, so unshifted QR is simultaneous iteration followed by
   orthonormalisation.

## Facts & Assumptions

**Given:** An unshifted QR iteration $A_k=Q_kR_k$, $A_{k+1}=R_kQ_k$.

[L1] Unshifted QR iteration is defined by the factorisation and update above ([[def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift]]).

[L2] Subspace iteration is repeated QR orthonormalisation of powers of $A$ ([[def-subspace-iteration-and-the-dominant-invariant-subspace]]).

## Proof

**Proof technique:** direct.

1.1 From [L1], $$ A_{k+1}=R_kQ_k=Q_k^*A_kQ_k. $$ Iterating this identity yields $A_k=\widehat Q_k^*A\widehat Q_k$. [L1, algebra]
1.2 Also $A_kQ_k=Q_kR_kQ_k=Q_kA_{k+1}$, so multiplying the factorisations gives $$ A^k=(Q_0Q_1\cdots Q_{k-1})(R_{k-1}\cdots R_1R_0) =\widehat Q_k\widehat R_k $$ with $\widehat R_k$ upper triangular. Thus the columns of $\widehat Q_k$ are the orthonormalised columns of $A^k$. [L1, algebra]
2.1 Step 1.1 proves unitary similarity, and step 1.2 identifies the iteration with simultaneous orthonormalised power iteration as in [L2]. [L2, step 1.1, step 1.2] ∎
