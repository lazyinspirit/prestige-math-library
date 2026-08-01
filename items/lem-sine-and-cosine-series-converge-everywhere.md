---
id: lem-sine-and-cosine-series-converge-everywhere
kind: lemma
title: "The sine and cosine power series converge absolutely for every real argument"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sine-and-cosine-by-power-series, thm-ratio-test]
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
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
pipeline_run: null
---

## Statement

For every real $x$, the defining power series of $\sin x$ and $\cos x$ converge absolutely. Equivalently, both have infinite radius of convergence.

## Facts & Assumptions

**Given:** A real $x$.

[L1] The sine and cosine series have terms $x^{2n+1}/(2n+1)!$ and $x^{2n}/(2n)!$ up to signs ([[def-sine-and-cosine-by-power-series]]).

[L2] The ratio test proves absolute convergence when the ratio of successive absolute terms tends to a limit less than one ([[thm-ratio-test]]).

## Proof

**Proof technique:** direct.

1.1 For the sine absolute terms, the successive ratio is $|x|^2/((2n+2)(2n+3))$, which tends to $0$. [L1, algebra]

1.2 For the cosine absolute terms, the successive ratio is $|x|^2/((2n+1)(2n+2))$, which tends to $0$. [L1, algebra]

2.1 The ratio test proves absolute convergence of both series for this arbitrary $x$. [step 1.1, step 1.2, L2] ∎
