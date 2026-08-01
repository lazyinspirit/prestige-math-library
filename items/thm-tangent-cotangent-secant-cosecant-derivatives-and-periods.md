---
id: thm-tangent-cotangent-secant-cosecant-derivatives-and-periods
kind: theorem
title: "Derivatives and fundamental periods of tangent, cotangent, secant, and cosecant"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-tangent-cotangent-secant-cosecant, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-algebra-of-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
pipeline_run: null
---

## Statement

On their natural domains,
$$(\tan x)'=\sec^2x,\qquad(\cot x)'=-\csc^2x,\qquad(\sec x)'=\sec x\tan x,\qquad(\csc x)'=-\csc x\cot x.$$
Tangent and cotangent have least positive period $\pi$; secant and cosecant have least positive period $2\pi$.

## Facts & Assumptions

**Given:** A real $x$ in the domain of the function under discussion.

[L1] The quotient definitions and exact excluded points are those of [[def-tangent-cotangent-secant-cosecant]].

[L2] $\sin'=\cos$, $\cos'=-\sin$, and $\sin^2+\cos^2=1$ ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] Quotient and reciprocal differentiation rules apply, and the zero sets and periods of sine/cosine are known ([[thm-algebra-of-derivatives]], [[thm-sine-cosine-zero-sets-and-fundamental-period]]).

## Proof

**Proof technique:** direct.

1.1 Quotient and reciprocal differentiation applied to [L1] gives the four displayed derivatives after using $\sin^2+\cos^2=1$. [L1, L2, L3]

1.2 Shifting by $\pi$ negates both sine and cosine, so their quotients have period $\pi$, while their reciprocals change sign and therefore have period $2\pi$. [L1, L3]

2.1 The zero-set and quarter-turn values rule out a smaller positive period in each case. [step 1.2, L2, L3] ∎
