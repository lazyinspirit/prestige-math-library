---
id: lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive
kind: lemma
title: "Characteristic subgroups are normal, and characteristicity is transitive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-characteristic-subgroup, def-normal-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

If $H\operatorname{char}G$, then $H\trianglelefteq G$. If $K\operatorname{char}H$ and $H\operatorname{char}G$, then $K\operatorname{char}G$.

## Facts & Assumptions

**Given:** Groups and subgroups satisfying the hypotheses of either assertion.

[F1] $H\operatorname{char}G$ means that every automorphism of $G$ maps $H$ onto itself ([[def-characteristic-subgroup]]).

[F2] $H\trianglelefteq G$ means that conjugation by every element of $G$ preserves $H$ ([[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 For each $g\in G$, conjugation $x\mapsto gxg^{-1}$ is an automorphism of $G$; if $H\operatorname{char}G$, [F1] says it preserves $H$, so [F2] gives $H\trianglelefteq G$. [F1, F2]

1.2 Suppose $K\operatorname{char}H\operatorname{char}G$ and let $\alpha\in\operatorname{Aut}(G)$. By [F1], $\alpha(H)=H$, so $\alpha|_H$ is an automorphism of $H$; applying [F1] to $K\operatorname{char}H$ gives $\alpha(K)=K$. [F1]

2.1 Since step 1.2 holds for every automorphism of $G$, $K\operatorname{char}G$; together with step 1.1 this proves both assertions. [step 1.1, step 1.2, F1] ∎
