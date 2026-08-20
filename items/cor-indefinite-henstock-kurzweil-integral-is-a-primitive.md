---
id: cor-indefinite-henstock-kurzweil-integral-is-a-primitive
kind: corollary
title: "The indefinite Henstock–Kurzweil integral of a derivative is a primitive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-every-derivative-is-henstock-kurzweil-integrable, def-henstock-kurzweil-integral-on-a-compact-interval, def-derivative]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1, Cor. 1.15"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Section 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $F$ be differentiable on $[a,b]$, $a<b$, put $f=F'$, and define $G(x)=\int_a^x f$. Then $G$ is a primitive of $f$ on $[a,b]$: $G'(x)=f(x)$ at every point, including the domain-relative endpoints.

## Facts & Assumptions

**Given:** The differentiable $F$, its derivative $f$, and the integral function $G$.

[L1] Every derivative is Henstock–Kurzweil integrable and its integral is the endpoint increment ([[thm-every-derivative-is-henstock-kurzweil-integrable]]).

[L2] On a degenerate interval, the Henstock–Kurzweil integral is $0$ ([[def-henstock-kurzweil-integral-on-a-compact-interval]]).

[L3] The restriction of a differentiable function remains differentiable at every limit point of the restricted domain, with the same derivative ([[def-derivative]]).

[L4] A function is differentiable at $c$ when its domain-relative difference quotient has a limit there ([[def-derivative]]).

## Proof

**Proof technique:** direct.

1.1 For $x>a$, apply [L3] and [L1] to $F|_{[a,x]}$ to obtain $G(x)=F(x)-F(a)$, while at $x=a$ the same identity follows from [L2]. [given, L1, L2, L3]

2.1 The constant $F(a)$ cancels from every domain-relative difference quotient in step 1.1, so [L4] gives $G'=F'=f$ throughout $[a,b]$, endpoints included. [step 1.1, L4, algebra] ∎
