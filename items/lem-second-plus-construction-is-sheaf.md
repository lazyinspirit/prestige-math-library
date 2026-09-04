---
id: lem-second-plus-construction-is-sheaf
kind: lemma
title: "The second plus construction is a sheaf"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-presheaf-plus-construction, lem-first-plus-construction-is-separated, def-sheaf-on-topological-space]
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
    - title: "The Stacks Project, Sheaves on Spaces, Section 17"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3, Section 4.7"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Statement

For every presheaf $\mathcal F$ on a topological space $X$, the double plus
construction $\mathcal F^{++}=(\mathcal F^+)^+$ is a sheaf.

## Facts & Assumptions

**Given:** A presheaf $\mathcal F$ on $X$.

[F1] The plus construction records germ-compatible local presentations and
single-chart classes ([[def-presheaf-plus-construction]]).

[L1] The first plus construction $\mathcal F^+$ is separated
([[lem-first-plus-construction-is-separated]]).

[F2] A sheaf is exactly a presheaf satisfying locality and unique gluing on
every open cover ([[def-sheaf-on-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $U=\bigcup_{i\in I}U_i$ be an open cover and let $\sigma_i\in\mathcal F^{++}(U_i)$ be compatible on overlaps. For each $i$, choose a presentation of $\sigma_i$ by sections $\tau_{i,a}\in\mathcal F^+(V_{i,a})$ on an open cover $U_i=\bigcup_a V_{i,a}$. [F1, given, choose]

2.1 The family of all pairs $(V_{i,a},\tau_{i,a})$ covers $U$. Presentations belonging to one fixed $i$ are germ-compatible by definition. If $x\in V_{i,a}\cap V_{j,c}$, compatibility of $\sigma_i$ and $\sigma_j$ says that their restrictions to $U_i\cap U_j$ are equal; the definition of equality of plus presentations therefore gives $$(\tau_{i,a})_x=(\tau_{j,c})_x\quad\text{in }(\mathcal F^+)_x.$$ Thus the combined family is a germ-compatible presentation by $\mathcal F^+$-sections and defines $\sigma\in(\mathcal F^+)^+(U)=\mathcal F^{++}(U)$. On each $U_i$, its restricted presentation is equivalent to the chosen presentation of $\sigma_i$, so $\sigma|_{U_i}=\sigma_i$. [F1, step 1.1, construct]

3.1 Apply [L1] to the presheaf $\mathcal F^+$. It says that $(\mathcal F^+)^+=\mathcal F^{++}$ is separated. Hence sections of $\mathcal F^{++}(U)$ whose restrictions agree on the cover $\{U_i\}$ are equal, so locality and uniqueness of the gluing from step 2.1 hold. [L1, step 2.1]

4.1 Steps 2.1 and 3.1 give gluing and locality for every open cover. Therefore [F2] shows that $\mathcal F^{++}$ is a sheaf. [F2, step 2.1, step 3.1] ∎
