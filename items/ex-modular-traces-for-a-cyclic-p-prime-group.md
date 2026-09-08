---
id: ex-modular-traces-for-a-cyclic-p-prime-group
kind: example
title: "A cyclic prime-to-p Brauer table"
status: published
origin: pipeline
deps: [thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements, def-lifted-modular-trace-on-p-regular-elements]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Pound/Martin, Modular Representation Theory, Lemma 6.6, p.18"
      url: "https://ep455.user.srcf.net/pdfs/MRTnotes.pdf"
---

## Example

Let $C_m=\langle g\rangle$, $m\ge1$, $p\nmid m$, in a splitting system. Choose a primitive $m$th root $\lambda\in k$ and write $\zeta=\widehat\lambda$. The simple modules $S_i$ for $0\le i<m$ have $g$ acting by $\lambda^i$; their Brauer table is $(\zeta^{ij})_{0\le i,j<m}$.

## Facts & Assumptions

**Given:** The cyclic group, splitting system, and chosen primitive root in the Example.

[F1] Brauer values are sums of unique multiplicative lifts of eigenvalues ([[def-lifted-modular-trace-on-p-regular-elements]]).

## Verification

1.1 The eigenspace decomposition for g shows any simple module is one-dimensional with one of the m distinct eigenvalues; each scalar action $g\mapsto\lambda^i$ is a representation since $(\lambda^i)^m=1$. Its value at $g^j$ is $\widehat{\lambda^{ij}}=\zeta^{ij}$. Distinct eigenvalues give nonisomorphic modules. [F1, given, algebra]

2.1 The determinant is $\prod_{0\le i<l<m}(\zeta^l-\zeta^i)$. To obtain the formula, regard the determinant of $(x_i^j)$ as a polynomial in the $x_i$: it vanishes when two $x_i$ coincide, has total degree $m(m-1)/2$, and the coefficient of $x_1x_2^2\cdots x_{m-1}^{m-1}$ is 1, as is that of the displayed product. Hence they agree. Its factors are nonzero and their reductions $\lambda^l-\lambda^i$ are nonzero, so the determinant is a unit in $\mathcal O$ and is nonzero in both K and k. For $m=1$ the table is $(1)$ and the product is empty, equal to 1. [step 1.1, algebra] ∎
