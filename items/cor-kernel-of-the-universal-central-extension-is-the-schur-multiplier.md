---
id: cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier
kind: corollary
title: "Kernel of the universal central extension"
status: draft
origin: pipeline
deps: [thm-hopf-formula-for-the-schur-multiplier, thm-free-presentation-construction-has-the-universal-property]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For perfect G, the universal-central-extension kernel is M(G).

## Proof

**Given:** Use the free-presentation universal extension of a perfect group $G=F/R$.

1.1 Its kernel is $(R\cap[F,F])/[F,R]$. [given]

2.1 Hopf’s formula identifies this kernel with $M(G)$. [step 1.1, algebra] ∎
