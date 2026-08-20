---
id: ex-sine-over-x-has-a-noncompact-henstock-kurzweil-integral
kind: example
title: "$\\sin x/x$ has a Henstock–Kurzweil integral on $[0,\\infty)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henstock-kurzweil-integral-on-a-noncompact-interval, thm-riemann-integrable-functions-are-henstock-kurzweil-integrable, thm-continuous-implies-integrable, thm-dirichlet-test-for-improper-integrals, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity]
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
    - title: "Alessandro Fonda, The Kurzweil-Henstock Integral for Undergraduates, Ch. 1"
      url: "https://dmi.units.it/~fonda/p2017_book_KH.pdf"
    - title: "Andrew Bruckner, Judith Bruckner and Brian Thomson, Real Analysis, Section 1.21"
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
pipeline_run: null
---

## Example

Define $s(0)=1$ and $s(x)=\sin x/x$ for $x>0$. Then $s$ has a noncompact Henstock–Kurzweil integral on $[0,\infty)$. No value for that integral is asserted here.

## Facts & Assumptions

**Given:** The removable extension $s$ in the Example; differentiability of sine at $0$ gives $\lim_{x\to0}\sin x/x=1$.

[L1] Dirichlet's improper-integral test applies when the first factor has a bounded truncation primitive and the second is nonnegative, nonincreasing, and tends to zero ([[thm-dirichlet-test-for-improper-integrals]]).

[L2] Every Riemann integrable function is Henstock–Kurzweil integrable with the same integral ([[thm-riemann-integrable-functions-are-henstock-kurzweil-integrable]]).

[L3] Sine is differentiable at zero with derivative $1$, and $-\cos$ is a primitive of sine ([[thm-sine-and-cosine-derivatives]]).

[L4] Every continuous function on a compact interval is Riemann integrable ([[thm-continuous-implies-integrable]]).

[L5] A noncompact HK integral is the finite limit of its compact truncation integrals ([[def-henstock-kurzweil-integral-on-a-noncompact-interval]]).

[L6] For every real $x$, $|\cos x|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

## Verification

**Proof technique:** direct.

1.1 On $[1,\infty)$ apply [L1] with first factor $\sin x$, whose primitive $-\cos x$ is bounded by [L3] and [L6], and second factor $1/x$, which is nonnegative, decreasing, and tends to zero; the compact truncation integrals therefore have a finite limit. [given, L1, L3, L6]

2.1 The derivative clause in [L3] gives the removable limit at zero, so [L4] makes the extension Riemann integrable on each compact truncation and [L2] makes it HK integrable there; [L5] combines those integrals with the limit from step 1.1. [step 1.1, L2, L3, L4, L5] ∎
