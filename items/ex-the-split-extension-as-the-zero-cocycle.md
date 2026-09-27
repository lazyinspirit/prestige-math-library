---
id: ex-the-split-extension-as-the-zero-cocycle
kind: example
title: "The split extension as the zero cocycle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-twisted-product-extension-from-a-two-cocycle, def-second-cohomology-by-factor-sets, cor-an-extension-determines-a-well-defined-h-two-class]
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
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Example

When $f=0$, the twisted product $M\times_f G$ is the semidirect product
$M\rtimes G$, so it represents the zero class in $H^2(G,M)$.

## Facts & Assumptions

**Given:** A group $G$, an abelian $G$-module $M$, and the zero function $f(g,h)=0$.

[F1] The twisted product uses the multiplication $(m,g)(n,h)=(m+g\cdot n+f(g,h),gh)$ ([[def-twisted-product-extension-from-a-two-cocycle]]).

[F2] $H^2(G,M)$ is the quotient of normalized two-cocycles by two-coboundaries, so the zero cocycle represents its zero class ([[def-second-cohomology-by-factor-sets]]).

[L1] An extension with a specified normalized section has the cohomology class of that section's factor set, independently of the chosen normalized section ([[cor-an-extension-determines-a-well-defined-h-two-class]]).

## Verification

**Proof technique:** direct.

1.1 With $f=0$, [F1] becomes $$(m,g)(n,h)=(m+g\cdot n,gh),$$ which is the usual semidirect-product law on $M\rtimes G$. [F1, given]

2.1 The explicit normalized section $s(g)=(0,g)$ is a homomorphism, so the extension splits. Its factor set is identically zero because $s(g)s(h)=s(gh)$; [L1] assigns the extension the class $[0]$, which is the zero class by [F2]. This uses the displayed section and needs no choice of fibres. [F1, F2, L1, step 1.1, algebra]

3.1 Therefore the zero cocycle gives the split extension. [step 2.1] ∎
