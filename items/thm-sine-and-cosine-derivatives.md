---
id: thm-sine-and-cosine-derivatives
kind: theorem
title: "The derivatives of sine and cosine are cosine and minus sine"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sine-and-cosine-by-power-series, lem-sine-and-cosine-series-converge-everywhere, thm-termwise-differentiation-of-a-real-power-series]
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

The functions $\sin$ and $\cos$ are differentiable on $\mathbb R$, with
$$(\sin x)'=\cos x,\qquad(\cos x)'=-\sin x.$$
Also $\sin0=0$ and $\cos0=1$.

## Facts & Assumptions

**Given:** The sine and cosine power series.

[L1] Both defining series converge on all of $\mathbb R$ ([[lem-sine-and-cosine-series-converge-everywhere]], [[def-sine-and-cosine-by-power-series]]).

[L2] A real power series may be differentiated term by term inside its radius of convergence ([[thm-termwise-differentiation-of-a-real-power-series]]).

## Proof

**Proof technique:** direct.

1.1 Termwise differentiation of the sine series gives $\sum_{n\ge0}(-1)^nx^{2n}/(2n)!=\cos x$. [L1, L2]

1.2 Termwise differentiation of the cosine series gives $-\sum_{n\ge0}(-1)^nx^{2n+1}/(2n+1)!=-\sin x$. [L1, L2]

2.1 Evaluating the defining series at $0$ gives $\sin0=0$ and $\cos0=1$. [L1, algebra] ∎
