---
id: prop-shifted-qr-preserves-upper-hessenberg-form
kind: proposition
title: "Shifted QR iteration preserves upper Hessenberg form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-and-complex-givens-transformations,
       def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift,
       def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices,
       thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]
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
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
---

## Statement

If $H$ is upper Hessenberg and a shifted QR step factors
$H-\mu I=QR$ using the standard adjacent-row Givens eliminations, then

$$
H_+:=RQ+\mu I
$$

is again upper Hessenberg.

## Facts & Assumptions

**Given:** An upper Hessenberg matrix $H$ and a shifted QR factorisation $H-\mu I=QR$ built from adjacent Givens eliminations.

[L1] A shifted QR step is $H_+=RQ+\mu I$ ([[def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift]]).

[L2] Upper Hessenberg means all entries below the first subdiagonal vanish ([[def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices]]).

[L3] Givens transformations are unitary and annihilate a chosen adjacent entry ([[def-real-and-complex-givens-transformations]], [[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]).

## Proof

**Proof technique:** direct.

1.1 Because $H-\mu I$ is upper Hessenberg, each subdiagonal entry can be annihilated by an adjacent Givens rotation acting only on two consecutive rows. By [L3], the product of these rotations gives $Q$ and an upper triangular $R$. [L2, L3, construct]
2.1 Right-multiplying an upper triangular matrix by one adjacent Givens rotation can create a nonzero entry only one row below the diagonal in the two affected columns. Repeating this through the same adjacent sequence keeps $RQ$ upper Hessenberg. [step 1.1, algebra]
3.1 Adding $\mu I$ changes only diagonal entries, so [L1] and step 2.1 show that $H_+=RQ+\mu I$ is again upper Hessenberg. [L1, step 2.1] ∎