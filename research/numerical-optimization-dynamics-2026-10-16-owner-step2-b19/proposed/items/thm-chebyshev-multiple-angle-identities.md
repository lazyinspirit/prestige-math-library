---
id: thm-chebyshev-multiple-angle-identities
kind: theorem
title: "$T_n(\\cos\\theta)=\\cos(n\\theta)$ and $U_n(\\cos\\theta)\\sin\\theta=\\sin((n+1)\\theta)$ for every $n\\in\\mathbb N$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-chebyshev-polynomials-first-and-second-kind, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-induction-principle, thm-quarter-turn-values-and-shift-formulas]
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

[F1] [[thm-quarter-turn-values-and-shift-formulas]]: $\cos(x+\pi)=-\cos x$ for every real $x$ and $\cos\pi=-1$. In particular, taking $x=0$ gives $\cos0=1$.

## Proof

**Proof technique:** induction.

1.1 The two identities follow directly from the initial polynomial values at $n=0$ and $n=1$. [base]

1.2 Assume the identities at $n$ and $n-1$. [ih]

2.1 The recurrences and the addition formulas give the usual second-order recurrences for $\cos((n+1)\theta)$ and $\sin((n+2)\theta)$. [step 1.2, algebra]

3.1 Hence the identities hold at $n+1$, so induction proves them for every natural $n$. Separately, $\cos0=1=(-1)^0$ by [F1]; if $\cos(j\pi)=(-1)^j$, the shift in [F1] gives $\cos((j+1)\pi)=-\cos(j\pi)=(-1)^{j+1}$. Natural induction therefore proves $\cos(j\pi)=(-1)^j$ for every natural $j$. For $n\ge1$ and $0\le j\le n$, substituting $\theta=j\pi/n$ in the first proved identity gives $T_n(\cos(j\pi/n))=\cos(j\pi)=(-1)^j$, as claimed. [F1, discharge-induction, algebra] ∎
