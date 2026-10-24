---
id: cor-harmonic-addition-formula
kind: corollary
title: "Every $a\\cos x+b\\sin x$ has the amplitude-phase form $R\\cos(x-\\phi)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sine-and-cosine-parametrize-the-unit-circle, thm-of-square-roots, thm-sine-and-cosine-addition-formulas]
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

For reals $a,b$ not both zero, put $R=\sqrt{a^2+b^2}>0$. There is a unique $\phi\in[0,2\pi)$ with $\cos\phi=a/R$ and $\sin\phi=b/R$, and
$$a\cos x+b\sin x=R\cos(x-\phi)$$
for every real $x$. For $a=b=0$ the left side is identically zero. The conventions and prerequisite facts used below are recorded in [[thm-sine-and-cosine-parametrize-the-unit-circle]], [[thm-of-square-roots]], [[thm-sine-and-cosine-addition-formulas]].

## Facts & Assumptions

**Given:** Reals $a,b,x$.

## Proof

**Proof technique:** direct.

1.1 If $a=b=0$, the claimed zero identity is immediate. [algebra]

1.2 Otherwise $R>0$ and $(a/R)^2+(b/R)^2=1$, so the unit-circle parametrization gives the stated unique $\phi$. [given]

2.1 Expand $R\cos(x-\phi)$ and substitute the two defining coordinates of $\phi$. [algebra] ∎
