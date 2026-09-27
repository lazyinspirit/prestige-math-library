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
deps: [def-real-power-series-and-radius-of-convergence, def-integer-power, def-factorial-and-falling-factorial, lem-of-naturals-positive, thm-ratio-test]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

For every real $x$, both series
$$\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!}\quad\text{and}\quad\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{(2n)!}$$
converge absolutely. Equivalently, both power series have infinite radius of convergence.

## Facts & Assumptions

**Given:** A real $x$.

[L1] The two displayed series are real power series with the absolute terms $|x|^{2n+1}/(2n+1)!$ and $|x|^{2n}/(2n)!$; factorial denominators are positive ([[def-real-power-series-and-radius-of-convergence]], [[def-integer-power]], [[def-factorial-and-falling-factorial]], [[lem-of-naturals-positive]]).

[L2] The ratio test proves absolute convergence when the ratio of successive absolute terms tends to a limit less than one ([[thm-ratio-test]]).

## Proof

**Proof technique:** direct.

1.1 If $x=0$, the sine series is identically zero and the cosine series has only its initial term $1$; both converge absolutely. [L1, algebra]

1.2 If $x\ne0$, every absolute term is nonzero. The successive sine-term ratio is $|x|^2/((2n+2)(2n+3))$, and the successive cosine-term ratio is $|x|^2/((2n+1)(2n+2))$; both tend to $0$. [L1, algebra]

2.1 For $x\ne0$, the ratio test proves absolute convergence of both series. Together with step 1.1 this covers every real $x$. [step 1.1, step 1.2, L2] ∎
