---
id: prop-equivalences-preserve-reflect-and-create-limits-and-colimits
kind: proposition
title: "Equivalences preserve, reflect, and create limits and colimits in the isomorphism-invariant sense"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-preservation-reflection-creation-continuity-and-cocontinuity, prop-fully-faithful-functors-reflect-limits-and-colimits, def-equivalence-and-adjoint-equivalence-of-categories, def-natural-isomorphism, prop-limit-colimit-duality]
justified_by: []
aliases: []
landmark: true
proof_strategy: transport-of-structure
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Lemma 3.4.5 and Definition 3.4.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

An equivalence of categories preserves and reflects every existing limit and
colimit and creates them in the ordinary isomorphism-invariant sense fixed in
[[def-preservation-reflection-creation-continuity-and-cocontinuity]]. This does
not assert strict creation with an unchanged target apex.

## Facts & Assumptions

**Given:** An equivalence $F:\mathcal C\to\mathcal D$.

[F1] An equivalence has a quasi-inverse $G$ and unit and counit natural
isomorphisms ([[def-equivalence-and-adjoint-equivalence-of-categories]],
[[def-natural-isomorphism]]).

[L1] Fully faithful functors reflect limits and colimits
([[prop-fully-faithful-functors-reflect-limits-and-colimits]]).

[F2] Isomorphism-invariant creation asks for a limiting source lift whose image
is isomorphic as a cone to the target limit, together with reflection
([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[L2] Limits and colimits are formal duals ([[prop-limit-colimit-duality]]).

## Proof

**Proof technique:** transport of structure.

1.1 Since an equivalence is fully faithful, [L1] proves reflection of limits. The quasi-inverse $G$ is also fully faithful and therefore reflects limits. [F1, L1]

2.1 If $\lambda$ is a limit cone in $\mathcal C$, apply $F$. If a cone over $F D$ is given, transport it along the unit and counit of [F1], apply $G$, and factor uniquely through $\lambda$. Transporting the factor back gives existence through $F\lambda$; reflection by $G$ gives uniqueness. Hence $F$ preserves limits. [F1, step 1.1]

3.1 Let $\mu$ be a limiting cone over $F D$. Applying $G$ and using step 2.1 for $G$ gives a limiting cone over $GFD$. Transport it along the unit $D\cong GFD$ to a limiting cone $\bar\mu$ over $D$. Its image is isomorphic as a cone to $\mu$ by the counit and its naturality. Together with reflection from step 1.1, this is creation in [F2]. [F1, F2, step 1.1, step 2.1]

4.1 Applying [L2] to steps 1.1, 2.1, and 3.1 proves preservation, reflection, and isomorphism-invariant creation of colimits. The construction uses the unit and counit isomorphisms, so it supplies no on-the-nose strict lift. [L2, step 1.1, step 2.1, step 3.1] ∎
