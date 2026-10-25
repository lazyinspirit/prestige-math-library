---
id: fs-uniform-approximation-is-the-right-global-notion-on-every-noncompact-manifold
kind: false-statement
title: "FALSE: uniform approximation is the right global notion on every noncompact manifold"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-positive-continuous-error-function-for-strong-approximation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., The Whitney Approximation Theorems"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

**False claim:** on every noncompact manifold, one global uniform error bound is
the right notion of smooth approximation.

## Facts & Assumptions

**Given:** The continuous function $F(x)=|x|$ on $\mathbb R$ and the positive continuous error function $\varepsilon(x)=e^{-|x|}$.

[F1] A positive continuous error function may vary from point to point ([[def-positive-continuous-error-function-for-strong-approximation]]).

## Refutation
**Proof technique:** direct.

1.1 Fix any uniform tolerance $\eta>0$, choose $0<a<\eta$, and set $G_a(x)=\sqrt{x^2+a^2}$. This function is smooth on $\mathbb R$ and $$0<G_a(x)-|x|=\frac{a^2}{\sqrt{x^2+a^2}+|x|}\le a<\eta$$ for every $x$. Thus it uniformly approximates $F$. [given, algebra]

2.1 For $x>0$, $$G_a(x)-F(x)=\frac{a^2}{\sqrt{x^2+a^2}+x}\ge\frac{a^2}{2x+a}.$$ The last expression eventually exceeds $e^{-x}=\varepsilon(x)$, since $(2x+a)e^{-x}\to0$. Therefore $G_a$ fails the pointwise error requirement despite its uniform error being less than $\eta$. [F1, step 1.1, algebra]

3.1 Since this happens for every $\eta>0$ on the noncompact manifold $\mathbb R$, no fixed uniform tolerance captures the stated fine approximation condition. This refutes the claim. [step 1.1, step 2.1] ∎
