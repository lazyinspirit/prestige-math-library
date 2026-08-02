---
id: ex-morries-law
kind: example
title: "Morrie's law: $\\cos(\\pi/9)\\cos(2\\pi/9)\\cos(4\\pi/9)=1/8$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-double-angle-and-power-reduction-identities, thm-cofunction-supplementary-and-reflection-identities, thm-sine-cosine-zero-sets-and-fundamental-period]
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
    - title: "NIST Digital Library of Mathematical Functions, Chapter 18"
      url: "https://dlmf.nist.gov/18"
pipeline_run: null
---

## Example

$$\cos(\pi/9)\cos(2\pi/9)\cos(4\pi/9)=1/8.$$ The conventions and prerequisite facts used below are recorded in [[thm-double-angle-and-power-reduction-identities]], [[thm-cofunction-supplementary-and-reflection-identities]], [[thm-sine-cosine-zero-sets-and-fundamental-period]].

## Facts & Assumptions

**Given:** $x=\pi/9$.

## Verification

1.1 Apply $\sin(2t)=2\sin t\cos t$ successively at $t=x$, $2x$, and $4x$. This gives $8\sin x\cos x\cos2x\cos4x=\sin8x$. [algebra]

2.1 Here $8x=\pi-x$, so the supplementary identity gives $\sin8x=\sin x$. Since $0<x<\pi$, the sine-zero characterization gives $\sin x\ne0$. Cancel it in step 1.1 to obtain $8\cos x\cos2x\cos4x=1$. [step 1.1, given] ∎
