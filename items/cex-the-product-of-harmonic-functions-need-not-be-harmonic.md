---
id: cex-the-product-of-harmonic-functions-need-not-be-harmonic
kind: counterexample
title: "The product of two harmonic functions need not be harmonic"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-plane-harmonic-function]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the product of two harmonic functions is always harmonic.

The witness is $u(x,y)=x$ and $v(x,y)=x$. Each factor is harmonic, but their
product is $x^2$, whose Laplacian is $2$.

## Facts & Assumptions

**Given:** The functions $u(x,y)=x$ and $v(x,y)=x$.

## Counterexample

**Proof technique:** direct.

1.1 As in the previous example, $u$ and $v$ are harmonic because both have vanishing second partial derivatives. [algebra]

2.1 Their product is $uv=x^2$, and $(x^2)_{xx}+(x^2)_{yy}=2+0=2\ne0$. So $uv$ is not harmonic. [step 1.1, algebra] ∎
