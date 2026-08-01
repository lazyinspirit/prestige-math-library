---
id: cor-pi-is-the-first-positive-sine-zero
kind: corollary
title: "Pi is the first positive zero of sine"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-quarter-turn-values-and-shift-formulas, def-pi-via-first-positive-cosine-zero, lem-sine-positive-and-cosine-decreasing-on-zero-two]
justified_by: []
aliases: []
landmark: false
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

$\sin\pi=0$, and $\sin x>0$ for every $x$ with $0<x<\pi$. Thus $\pi$ is the first positive zero of sine.

## Facts & Assumptions

**Given:** $\pi=2\gamma$.

[L1] The shift identities give $\sin\pi=0$ and $\sin(\gamma+t)=\cos t$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[L2] $\sin x>0$ for $0<x\le\gamma$, and $\cos t>0$ for $0\le t<\gamma$ ([[lem-sine-positive-and-cosine-decreasing-on-zero-two]], [[def-pi-via-first-positive-cosine-zero]]).

## Proof

**Proof technique:** direct.

1.1 The first assertion is in [L1]. [L1]

1.2 If $0<x\le\gamma$, positivity follows from [L2]; if $\gamma<x<2\gamma$, write $x=\gamma+t$ with $0<t<\gamma$, and [L1] and [L2] give $\sin x=\cos t>0$. [L1, L2, cases]

2.1 These cases cover $0<x<\pi=2\gamma$, proving that $\pi$ is the first positive sine zero. [step 1.1, step 1.2, cases-exhaustive] ∎
