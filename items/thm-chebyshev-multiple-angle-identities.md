---
id: thm-chebyshev-multiple-angle-identities
kind: theorem
title: "$T_n(\\cos\\theta)=\\cos(n\\theta)$ and $U_n(\\cos\\theta)\\sin\\theta=\\sin((n+1)\\theta)$ for every $n\\in\\mathbb N$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-chebyshev-polynomials-first-and-second-kind, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 18"
      url: "https://dlmf.nist.gov/18"
pipeline_run: null
---

## Statement

For every $n\in\mathbb N$ and real $\theta$,
$$T_n(\cos\theta)=\cos(n\theta),\qquad U_n(\cos\theta)\sin\theta=\sin((n+1)\theta).$$ In particular, for $n\ge1$ and $0\le j\le n$, $T_n(\cos(j\pi/n))=(-1)^j$. The conventions and prerequisite facts used below are recorded in [[def-chebyshev-polynomials-first-and-second-kind]], [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-induction-principle]].

## Facts & Assumptions

**Given:** A natural $n$ and a real $\theta$.

## Proof

**Proof technique:** induction.

1.1 The two identities follow directly from the initial polynomial values at $n=0$ and $n=1$. [base]

1.2 Assume the identities at $n$ and $n-1$. [ih]

2.1 The recurrences and the addition formulas give the usual second-order recurrences for $\cos((n+1)\theta)$ and $\sin((n+2)\theta)$. [step 1.2, algebra]

3.1 Hence the identities hold at $n+1$, so induction proves them for every natural $n$; substituting $\theta=j\pi/n$ gives the stated alternating values. [discharge-induction] ∎
