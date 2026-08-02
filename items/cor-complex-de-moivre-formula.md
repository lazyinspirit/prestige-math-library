---
id: cor-complex-de-moivre-formula
kind: corollary
title: "Complex de Moivre formula for every integer exponent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-eulers-formula, thm-complex-exponential-addition-and-real-extension, thm-complex-numbers-form-a-field, def-complex-integer-powers, lem-int-embeds-rat, lem-of-q-embeds]
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
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

Let $j:\mathbb Z\to\mathbb Q$ be the integer embedding of [[lem-int-embeds-rat]], let $\iota_{\mathbb R}:\mathbb Q\to\mathbb R$ be the ordered-field embedding of [[lem-of-q-embeds]], and put $\kappa_{\mathbb R}:=\iota_{\mathbb R}\circ j$. For every integer $m$ and real $\theta$,
$$ (\cos\theta+i\sin\theta)^m=\cos(\kappa_{\mathbb R}(m)\theta)+i\sin(\kappa_{\mathbb R}(m)\theta). $$ The conventions and prerequisite facts used below are recorded in [[thm-eulers-formula]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-complex-numbers-form-a-field]], [[def-complex-integer-powers]].

## Facts & Assumptions

**Given:** An integer $m$ and real $\theta$.

## Proof

**Proof technique:** direct.

1.1 Euler's formula identifies the base with $\exp(i\theta)$. [given]

1.2 Repeated addition handles nonnegative powers by the exponential addition law; inverses handle negative powers. [given]

2.1 Euler's formula at $\kappa_{\mathbb R}(m)\theta$ gives the displayed result. [given] ∎
