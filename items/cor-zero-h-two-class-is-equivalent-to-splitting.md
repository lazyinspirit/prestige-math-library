---
id: cor-zero-h-two-class-is-equivalent-to-splitting
kind: corollary
title: "The zero H^2 class is equivalent to splitting"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action, thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products]
proof_strategy: iff
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

An extension of $G$ by the abelian $G$-module $M$ has class $0$ in
$H^2(G,M)$ if and only if it is equivalent to the semidirect product
$M\rtimes G$, equivalently if and only if it splits.

## Facts & Assumptions

**Given:** An extension $1\to M\to E\to G\to1$ inducing the given action.

[L1] $H^2(G,M)$ classifies such extensions
([[thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action]]).

[L2] A split extension is equivalent to the semidirect product extension
([[thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products]]).

## Proof

**Proof technique:** iff.

1.1 The semidirect product $M\rtimes G$ is represented by the zero cocycle, so its class in $H^2(G,M)$ is $0$. Therefore any extension equivalent to $M\rtimes G$ has class $0$ by [L1]. [L1, given, algebra]

1.2 Conversely, if the class of $E$ is $0$, then [L1] says that $E$ is equivalent to the extension attached to the zero cocycle, namely the semidirect product $M\rtimes G$. By [L2], that extension splits. [L1, L2, given]

2.1 A split extension is equivalent to a semidirect product by [L2], so steps 1.1 and 1.2 prove all claimed equivalences. [L2, step 1.1, step 1.2] ∎
