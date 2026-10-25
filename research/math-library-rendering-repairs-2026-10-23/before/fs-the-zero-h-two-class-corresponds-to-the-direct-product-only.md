---
id: fs-the-zero-h-two-class-corresponds-to-the-direct-product-only
kind: false-statement
title: "FALSE: the zero H^2 class corresponds to the direct product only"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
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

## Statement

The zero class in $H^2(G,M)$ corresponds only to the direct-product extension
$M\times G$.

## Facts & Assumptions

**Given:** The inversion action of $C_2$ on $\mathbb Z$.

[F1] The zero-cocycle twisted product has multiplication $(m,g)(n,h)=(m+g\cdot n,gh)$ and canonical normalized section $g\mapsto(0,g)$ ([[def-twisted-product-extension-from-a-two-cocycle]]).

[F2] The zero cocycle represents the zero element of $H^2(G,M)$ ([[def-second-cohomology-by-factor-sets]]).

[L1] An extension with a specified normalized section has the class of its factor set ([[cor-an-extension-determines-a-well-defined-h-two-class]]).

## Refutation

**Proof technique:** direct.

1.1 For the inversion action of $C_2$ on $\mathbb Z$, [F1] constructs the split semidirect product $\mathbb Z\rtimes C_2$. Write $e$ for the identity and $\tau$ for the nontrivial involution of $C_2$. With $r=(1,e)$ and $s=(0,\tau)$, the semidirect-product law gives $srs^{-1}=r^{-1}\ne r$. Thus this extension's middle group is nonabelian, whereas the direct product $\mathbb Z\times C_2$ is abelian. They are not isomorphic as groups, hence not equivalent as extensions. [F1, given, algebra]

2.1 The canonical section $s(g)=(0,g)$ in [F1] has factor set zero, so [L1] assigns this extension the class $[0]=0$ by [F2]. Since step 1.1 shows it is not the direct product, the zero class is not confined to direct products. This explicit section needs no Choice premise. [F1, F2, L1, step 1.1]

3.1 Hence the statement is false. [step 2.1] ∎
