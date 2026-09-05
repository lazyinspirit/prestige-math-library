---
id: fs-the-zero-h-two-class-corresponds-to-the-direct-product-only
kind: false-statement
title: "FALSE: the zero H^2 class corresponds to the direct product only"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-zero-h-two-class-is-equivalent-to-splitting]
proof_strategy: direct
verification:
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

## Statement

The zero class in $H^2(G,M)$ corresponds only to the direct-product extension
$M\times G$.

## Facts & Assumptions

**Given:** The inversion action of $C_2$ on $\mathbb Z$.

[L1] The zero class corresponds to split extensions, equivalently semidirect
products for the fixed action
([[cor-zero-h-two-class-is-equivalent-to-splitting]]).

## Refutation

**Proof technique:** direct.

1.1 For the inversion action of $C_2$ on $\mathbb Z$, the split extension is the semidirect product $\mathbb Z\rtimes C_2$, not the direct product $\mathbb Z\times C_2$, because the nontrivial element acts by $m\mapsto-m$. [given, algebra]

2.1 By [L1], this semidirect product already represents the zero class in $H^2(C_2,\mathbb Z)$. Since step 1.1 shows it is not the direct product, the zero class is not confined to direct products. [L1, step 1.1]

3.1 Hence the statement is false. [step 2.1] ∎
