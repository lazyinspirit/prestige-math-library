---
id: lem-corestriction-is-independent-of-the-coset-representatives
kind: lemma
title: "Corestriction is independent of coset representatives"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-restriction-and-corestriction-on-group-cohomology, cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Löh, Remark 1.7.14"
      url: "https://loeh.app.ur.de/teaching/grouphom_ss19/lecture_notes.pdf"
---

## Statement

The corestriction map for a finite-index subgroup $H\le G$ does not depend on the chosen coset transversal.

## Proof

**Given:** Two transversals $T,T'$ for the left cosets $G/H$.

1.1 For every $t\in T$ there are unique $t'\in T'$ and $h_t\in H$ with $t=t'h_t$. If $m\in M^H$, then $tm=t'h_tm=t'm$. Thus the two representative sums define the same degree-zero norm $N_H^G:M^H\to M^G$. [given]

2.1 Corestriction is defined as the unique morphism of universal cohomological delta functors extending that norm. Since the two transversals give the same degree-zero map, uniqueness forces their corestriction maps to agree in every degree. [step 1.1] ∎
