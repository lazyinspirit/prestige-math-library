---
id: thm-sine-and-cosine-addition-formulas
kind: theorem
title: "The addition formulas for sine and cosine"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-harmonic-oscillator-initial-value-characterization, thm-sine-and-cosine-derivatives, thm-chain-rule]
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

For all real $x,y$,
$$\sin(x+y)=\sin x\cos y+\cos x\sin y,$$
$$\cos(x+y)=\cos x\cos y-\sin x\sin y.$$

## Facts & Assumptions

**Given:** A fixed real $y$ and variable real $x$.

[L1] The harmonic-oscillator initial-value problem has the unique solution stated in [[thm-harmonic-oscillator-initial-value-characterization]].

[L2] Sine and cosine have the derivatives and values at zero of [[thm-sine-and-cosine-derivatives]], and the chain rule applies ([[thm-chain-rule]]).



## Proof

**Proof technique:** direct.

1.1 The function $x\mapsto\sin(x+y)$ solves $u''=-u$ with initial values $u(0)=\sin y$, $u'(0)=\cos y$. [L2]

1.2 The function $x\mapsto\sin x\cos y+\cos x\sin y$ has the same equation and initial values. [L2, algebra]

2.1 Uniqueness in [L1] gives the sine addition formula. [step 1.1, step 1.2, L1]

3.1 Repeating the argument for $x\mapsto\cos(x+y)$ and $\cos x\cos y-\sin x\sin y$ gives the cosine addition formula. [L1, L2] ∎
