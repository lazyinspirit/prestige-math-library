---
id: lem-forgetful-sheaf-compatibility
kind: lemma
title: "Sheafhood of algebraic-structure valued presheaves is detected on underlying sets"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-presheaf-of-groups-rings-modules, def-sheaf-on-topological-space]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Sections 5, 9, and 10"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Statement

Let $R$ be a ring, and let $\mathcal F$ be a presheaf of groups, rings, or left
$R$-modules on a topological space $X$. Then $\mathcal F$ is a sheaf in the
corresponding algebraic category if and only if its underlying presheaf of sets
is a sheaf.

## Facts & Assumptions

**Given:** A ring $R$ and a presheaf $\mathcal F$ of groups, rings, or left $R$-modules on $X$.

[F1] Such a presheaf is, by definition, a set-valued presheaf together with objectwise algebraic operations preserved by restriction maps; it is called a sheaf exactly when the underlying set-valued presheaf is a sheaf ([[def-presheaf-of-groups-rings-modules]]).

[L1] The sheaf condition itself is the locality and unique-gluing condition for the underlying sets of sections ([[def-sheaf-on-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathcal F$ is a sheaf of groups, rings, or left $R$-modules, then [F1] already says that its underlying set-valued presheaf is a sheaf. [F1]

2.1 Conversely, assume the underlying set-valued presheaf is a sheaf. The sets $\mathcal F(U)$ already carry the given group, ring, or left $R$-module structures, and the restriction maps already preserve those structures by [F1]. Since [L1] tests only locality and gluing of the underlying sections, the assumed setwise sheaf condition is exactly the required algebra-valued sheaf condition. [F1, L1] ∎
