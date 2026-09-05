---
id: ex-the-split-extension-as-the-zero-cocycle
kind: example
title: "The split extension as the zero cocycle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-twisted-product-extension-from-a-two-cocycle, cor-zero-h-two-class-is-equivalent-to-splitting]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
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

**Given:** A group $G$, an abelian $G$-module $M$, and the zero function
$f(g,h)=0$.

[F1] The twisted product uses the multiplication
$(m,g)(n,h)=(m+g\cdot n+f(g,h),gh)$
([[def-twisted-product-extension-from-a-two-cocycle]]).

[L1] The zero class corresponds exactly to split extensions
([[cor-zero-h-two-class-is-equivalent-to-splitting]]).

## Verification

**Proof technique:** direct.

1.1 With $f=0$, [F1] becomes $$(m,g)(n,h)=(m+g\cdot n,gh),$$ which is the usual semidirect-product law on $M\rtimes G$. [F1, given]

2.1 The section $g\mapsto(0,g)$ is then a homomorphism, so the extension splits. By [L1], this is precisely the zero class in $H^2(G,M)$. [L1, step 1.1, algebra]

3.1 Therefore the zero cocycle gives the split extension. [step 2.1] ∎
