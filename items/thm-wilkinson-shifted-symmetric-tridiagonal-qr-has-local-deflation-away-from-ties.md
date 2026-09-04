---
id: thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties
kind: theorem
title: "A real Wilkinson-shifted symmetric tridiagonal QR step preserves symmetric tridiagonal form away from ties"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift,
       prop-shifted-qr-preserves-upper-hessenberg-form]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Per-Olof Persson, The QR Algorithm II"
      url: "https://ocw.mit.edu/courses/18-335j-introduction-to-numerical-methods-spring-2019/d4f8857f9e8ee47812874c91a30f60c0_MIT18_335JS19_lec17_reading.pdf"
---

## Statement

Let $T$ be a real symmetric tridiagonal matrix whose trailing $2\times2$
principal block is not at a Wilkinson tie, and let $\mu$ be the corresponding
Wilkinson shift. If $T-\mu I=QR$ is the real orthogonal QR factorisation built
from the standard adjacent-row Givens eliminations, then

$$ T_+:=RQ+\mu I $$

is again a real symmetric tridiagonal matrix.

## Facts & Assumptions

**Given:** A real symmetric tridiagonal matrix $T$, away from the Wilkinson tie
case, and the real orthogonal QR factorisation $T-\mu I=QR$ built from standard
adjacent-row Givens eliminations with the corresponding Wilkinson shift $\mu$.

[L1] Away from a Wilkinson tie, the trailing $2\times2$ block determines a unique Wilkinson shift ([[def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift]]).

[L2] A shifted QR factorisation built from standard adjacent-row Givens
eliminations preserves upper Hessenberg form
([[prop-shifted-qr-preserves-upper-hessenberg-form]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the trailing $2\times2$ block determines a unique Wilkinson shift $\mu$. [L1, given]

1.2 By [L2], the shifted step $T_+=RQ+\mu I$ is upper Hessenberg. [L2, given]

1.3 Because $T-\mu I=QR$, one has $$ T_+=RQ+\mu I=Q^T(T-\mu I)Q+\mu I=Q^TTQ. $$ Thus $T_+$ is orthogonally similar to the symmetric matrix $T$, hence is itself symmetric. [given, algebra]

2.1 A symmetric upper Hessenberg matrix has zero entries below the first subdiagonal and, by symmetry, also above the first superdiagonal. Therefore step 1.2 and step 1.3 show that $T_+$ is real symmetric tridiagonal. [step 1.2, step 1.3] ∎
