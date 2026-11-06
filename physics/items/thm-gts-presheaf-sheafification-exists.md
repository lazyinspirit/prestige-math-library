---
id: thm-gts-presheaf-sheafification-exists
kind: theorem
title: "Every presheaf of sets on the small étale site has an associated sheaf"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC, used through the site pretopology and set-indexed refinement arguments."
deps:
  - def-gts-presheaf-and-sheaf-on-a-site
  - def-gts-small-etale-site-of-a-scheme
  - lem-gts-etale-coverings-form-a-grothendieck-site
  - def-axiom-of-choice
dependency_roles:
  def-gts-presheaf-and-sheaf-on-a-site: mathematical-premise
  def-gts-small-etale-site-of-a-scheme: mathematical-premise
  lem-gts-etale-coverings-form-a-grothendieck-site: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Sites and Sheaves, Section 7.10"
      url: "https://stacks.math.columbia.edu/tag/00W1"
      locator: "Theorem 7.10.10 and Proposition 7.10.12: double-plus sheafification and its universal property."
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I"
      url: "https://www.jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "§7, Definition 7.11 and Theorem 7.15, printed pp. 54–55; associated sheaves."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the full Axiom of Choice. Every set-valued presheaf $F$ on the small étale site $X_{\acute e t}$ has an associated sheaf $F^{++}$ and a natural map $F\to F^{++}$ with the following universal property: for every sheaf $G$ and every presheaf map $F\to G$, there is a unique sheaf map $F^{++}\to G$ whose composite with $F\to F^{++}$ is the given map.

## Statement references

[[def-gts-presheaf-and-sheaf-on-a-site]]

[[lem-gts-etale-coverings-form-a-grothendieck-site]]

## Facts & Assumptions

**Given:** Full AC, the site $X_{\acute e t}$, and a set-valued presheaf $F$.

[A1] Full AC is the choice-function axiom of [[def-axiom-of-choice]].

[F1] The category has a Grothendieck pretopology of set-indexed covers, stable under pullback and composition ([[lem-gts-etale-coverings-form-a-grothendieck-site]]).

[F2] A presheaf and its sheaf condition are as defined in [[def-gts-presheaf-and-sheaf-on-a-site]].

## Proof

**Proof technique:** the two-stage plus construction.

1.1 For an object $U$, consider pairs $(\mathcal U,s)$ where $\mathcal U$ is a declared covering family of $U$ and $s$ is a matching family in $F$ on $\mathcal U$. Identify two pairs when their restrictions agree on a common covering refinement; pullback stability and composition in [F1] give a common refinement whenever required. The set-sized universe bounds the collections of covers and sections, so the equivalence classes form a set $F^+(U)$. Pullback of a pair defines restriction maps, making $F^+$ a presheaf. [A1, F1, F2, given, construct]

2.1 The natural map $F\to F^+$ sends a section to its restrictions on the identity cover. Two sections of $F^+(U)$ that agree after restriction to a covering family have representatives which, after pulling back to that family, agree on covering refinements. Composing these refinements with the original cover gives a common covering refinement of $U$, so the two representatives are equivalent. Thus $F^+$ is separated: sections of $F^+(U)$ agreeing on a cover are equal. [F1, step 1.1]

3.1 Let $(U_i\to U)_{i\in I}$ be a declared cover and let $(s_i)_{i\in I}$ be a matching family in $F^{++}$. By [A1], choose for every $i$ a representative of $s_i$ consisting of a declared cover $(V_{i\alpha}\to U_i)_{\alpha\in A_i}$ and sections $t_{i\alpha}\in F^+(V_{i\alpha})$. The composite family $(V_{i\alpha}\to U)_{i,\alpha}$ covers $U$ by transitivity in [F1]. Fix $(i,\alpha)$ and $(j,\beta)$ and put $W=V_{i\alpha}\times_U V_{j\beta}$. The matching condition for $s_i,s_j$ is an equality in $F^{++}$ on $U_i\times_U U_j$. By the definition of equality in the plus construction, after pulling the representative covers to this overlap, that equality is witnessed by a common covering refinement on which the corresponding sections of $F^+$ agree. By [A1], choose these set-indexed witnesses simultaneously for all pairs $(i,\alpha),(j,\beta)$. Pulling each witness back to $W$ gives a cover of $W$ on which the restrictions of $t_{i\alpha}$ and $t_{j\beta}$ agree in $F^+$. Step 2.1 says $F^+$ is separated, so these restrictions were already equal on all of $W$. Thus the family $(t_{i\alpha})_{i,\alpha}$ is matching in $F^+$ for the composite cover of $U$, and its representative defines an element of $F^{++}(U)$. For each fixed $i$, the restriction of this representative to $U_i$ is represented by the covering family $(V_{j\beta}\times_U U_i\to U_i)_{j,\beta}$. The family $(V_{i\alpha}\times_U V_{j\beta}\to U_i)_{\alpha,j,\beta}$ is a common covering refinement of this family and the chosen cover $(V_{i\alpha}\to U_i)$ by pullback stability and composition in [F1]. On each member the pulled-back sections agree by the pairwise equality already proved, so the representatives are equivalent and the restriction is $s_i$. The same plus-separatedness argument of step 2.1, now applied to the presheaf $F^+$, says $F^{++}$ is separated, so this amalgamation is unique. Therefore $F^{++}$ is a sheaf. [A1, F1, step 2.1]

4.1 A presheaf map $F\to G$ into a sheaf sends matching families to matching families and therefore defines a map $F^+\to G$ by the unique gluing property in [F2]; agreement on refinements makes this map well-defined. Applying the same construction once more extends it uniquely from $F^{++}$ to $G$. Uniqueness follows because every plus section is locally represented by a matching family from the preceding presheaf and a sheaf map is determined by its restrictions to a cover. This is the stated universal property. [F2, step 1.1, step 3.1, given] ∎
