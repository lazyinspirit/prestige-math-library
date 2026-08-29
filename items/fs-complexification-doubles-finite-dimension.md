---
id: fs-complexification-doubles-finite-dimension
kind: false-statement
title: "FALSE: complexification doubles finite dimension"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-canonical-embedding-of-r-n-into-c-n, thm-a-real-basis-complexifies-to-a-complex-basis]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
---

## Statement

Complexification doubles finite dimension: for every finite-dimensional real vector space $V$,

$$\dim_{\mathbb C}(\mathbb C\otimes_{\mathbb R}V)=2\dim_{\mathbb R}V.$$

## Facts & Assumptions

**Given:** A finite-dimensional real vector space $V$ and its complexification $V_{\mathbb C}$.

[L1] The complexification of $\mathbb R^n$ is canonically $\mathbb C^n$ through the standard inclusion ([[ex-canonical-embedding-of-r-n-into-c-n]]).

[L2] A real basis becomes a complex basis after complexification, so $\dim_{\mathbb C}(\mathbb C\otimes_{\mathbb R}V)=\dim_{\mathbb R}V$ ([[thm-a-real-basis-complexifies-to-a-complex-basis]]).

## Refutation

**Proof technique:** direct.

1.1 By [L2], $\dim_{\mathbb C}V_{\mathbb C}=\dim_{\mathbb R}V$ for every finite-dimensional real $V$: the embedded image of a real basis is already a complex basis of the complexification. [L2]

1.2 The concrete witness $V=\mathbb R$ confirms the correct value: by [L1]
with $n=1$, $V_{\mathbb C}\cong\mathbb C$, so
$\dim_{\mathbb C}V_{\mathbb C}=1=\dim_{\mathbb R}\mathbb R$, not $2$. [L1, L2]

2.1 The doubling behaviour belongs to realification, the reverse construction, which replaces complex scalars by real ones; complexification keeps the numerical dimension unchanged. [step 1.1, step 1.2]

3.1 Steps 1.1 and 1.2 contradict the claimed factor of $2$, so the displayed statement is false. [step 1.1, step 1.2] ∎
