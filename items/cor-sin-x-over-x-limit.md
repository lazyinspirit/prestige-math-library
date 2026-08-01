---
id: cor-sin-x-over-x-limit
kind: corollary
title: "The limit of sin x divided by x at zero is one"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sine-and-cosine-derivatives, def-derivative]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

$$\lim_{x\to0}\frac{\sin x}{x}=1.$$

## Facts & Assumptions

**Given:** The sine function at zero.

[L1] $\sin'(0)=\cos0=1$ and $\sin0=0$ ([[thm-sine-and-cosine-derivatives]]).

[L2] The derivative at $0$ is $\lim_{x\to0}(\sin x-\sin0)/(x-0)$ ([[def-derivative]]).

## Proof

**Proof technique:** direct.

1.1 Substituting [L1] into the derivative definition [L2] gives $\lim_{x\to0}\sin x/x=1$. [L1, L2]

2.1 This is the asserted limit. [step 1.1] ∎
