---
id: thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
kind: theorem
title: "Pythagorean and parity identities for all six trigonometric functions on their natural domains"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-trigonometric-parity-and-pythagorean-identity, def-tangent-cotangent-secant-cosecant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Statement

For every real $x$, $\sin ^2x+\cos ^2x=1$, $\sin(-x)=-\sin x$, and $\cos(-x)=\cos x$. Wherever the displayed quotients are defined, $\tan(-x)=-\tan x$, $\cot(-x)=-\cot x$, $\sec(-x)=\sec x$, $\csc(-x)=-\csc x$, $1+\tan^2x=\sec^2x$, and $1+\cot^2x=\csc^2x$. The conventions and prerequisite facts used below are recorded in [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-tangent-cotangent-secant-cosecant]].

## Facts & Assumptions

**Given:** A real $x$ and the quotient definitions on their stated nonzero-denominator domains.

## Proof

**Proof technique:** direct.

1.1 The sine--cosine Pythagorean and parity identities give the first three equalities. [given]

1.2 On the domain of tangent, divide $\sin ^2x+\cos ^2x=1$ by $\cos ^2x$; on the domain of cotangent divide it by $\sin ^2x$. [algebra]

2.1 Applying the quotient definitions to the parity equalities gives the four quotient parity laws without introducing a zero denominator. [given] ∎
