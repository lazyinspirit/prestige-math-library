---
id: fs-normal-in-characteristic-implies-normal-in-the-whole-group
kind: false-statement
title: "$K\\trianglelefteq H\\operatorname{char}G$ always implies $K\\trianglelefteq G$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-characteristic-subgroup, lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive, lem-conjugating-a-cycle-relabels-its-entries]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

> **False.** If $K\trianglelefteq H$ and $H\operatorname{char}G$, then $K\trianglelefteq G$.

## Facts & Assumptions

**Given:** $G=A_4$, its Klein four subgroup $H=V_4$, and $K=\langle(12)(34)\rangle$.

[F1] A characteristic subgroup is preserved by every automorphism ([[def-characteristic-subgroup]]).

[L1] Characteristic subgroups are normal, and characteristicity is transitive ([[lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive]]).

[L2] Conjugation relabels cycle entries ([[lem-conjugating-a-cycle-relabels-its-entries]]).

## Refutation

**Proof technique:** direct.

1.1 The subgroup $H$ is characteristic in $A_4$: it consists of the identity together with all elements of order two, a description preserved by every automorphism. [given, F1, algebra]

1.2 Since $H$ is abelian, every subgroup of $H$, including $K$, is normal in $H$. [given, algebra]

1.3 Conjugation by $(123)\in A_4$ sends $(12)(34)$ to $(23)(14)$ by [L2], and this element is not in $K$; hence $K\ntrianglelefteq A_4$. [L2, algebra]

2.1 Thus $K\trianglelefteq H\operatorname{char}G$ but $K\ntrianglelefteq G$, refuting the statement and showing why [L1] needs characteristicity at both stages. [step 1.1, step 1.2, step 1.3, L1] ∎
