---
id: ex-real-parts-of-z-powers-are-harmonic
kind: example
title: "The real parts of z^n are harmonic polynomials"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-complex-polynomials-and-rational-functions-are-holomorphic, thm-c2-holomorphic-components-are-harmonic]
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

## Example

For every integer $n\ge1$, the real part of $z^n$ is a harmonic polynomial on
$\mathbb C$. For instance,

$$\operatorname{Re}(z)=x,\qquad \operatorname{Re}(z^2)=x^2-y^2,\qquad \operatorname{Re}(z^3)=x^3-3xy^2.$$

## Facts & Assumptions

**Given:** An integer $n\ge1$.

[L1] Complex polynomials are entire ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[L2] The $C^2$ real and imaginary parts of a holomorphic function are harmonic ([[thm-c2-holomorphic-components-are-harmonic]]).

## Verification

**Proof technique:** direct.

1.1 The polynomial $f(z)=z^n$ is entire by [L1], hence holomorphic on all of $\mathbb C$. [L1]

2.1 Its real and imaginary parts are polynomials in $x$ and $y$, so they are of class $C^\infty$ and in particular $C^2$; [L2] therefore makes $\operatorname{Re}(z^n)$ harmonic. [step 1.1, L2] ∎
