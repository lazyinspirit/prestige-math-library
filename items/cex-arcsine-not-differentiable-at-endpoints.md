---
id: cex-arcsine-not-differentiable-at-endpoints
kind: counterexample
title: "Principal arcsine has no finite derivative at $-1$ or $1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-inverse-sine-and-cosine, thm-chain-rule, thm-sine-and-cosine-derivatives, thm-quarter-turn-values-and-shift-formulas, thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, §4.24(ii) Derivatives"
      url: "https://dlmf.nist.gov/4.24.ii"
pipeline_run: null
---

## Example

The principal arcsine $\arcsin:[-1,1]\to[-\pi/2,\pi/2]$ has no finite
derivative at either endpoint $1$ or $-1$ (with the library's relative,
one-sided endpoint convention).

## Facts & Assumptions

**Given:** No hypotheses beyond those quantified in the statement.

[L1] On $[-1,1]$, $\sin(\arcsin y)=y$, and $\arcsin(1)=\pi/2$, $\arcsin(-1)=-\pi/2$ ([[def-principal-inverse-sine-and-cosine]]).

[L2] The chain rule applies to derivatives relative to their domains ([[thm-chain-rule]]).

[L3] $(\sin x)'=\cos x$, while $\cos(\pi/2)=\cos(-\pi/2)=0$ ([[thm-sine-and-cosine-derivatives]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $\arcsin$ had a finite derivative at $1$.  Differentiate the identity $\sin(\arcsin y)=y$ at $1$ relative to $[-1,1]$.  The derivative of the right side is $1$, whereas [L2] and [L3] make the derivative of the left side $\cos(\pi/2)(\arcsin)'(1)=0$, a contradiction.  [assume-contra, L1, L2, L3]

1.2 The identical argument at $-1$ gives $1=\cos(-\pi/2)(\arcsin)'(-1)=0$.  [assume-contra, L1, L2, L3]

2.1 Therefore neither finite endpoint derivative exists.  [step 1.1, step 1.2, discharge-contradiction] ∎
