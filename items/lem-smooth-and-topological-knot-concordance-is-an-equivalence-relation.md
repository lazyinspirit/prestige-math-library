---
id: lem-smooth-and-topological-knot-concordance-is-an-equivalence-relation
kind: lemma
title: "Smooth and locally flat topological concordance are equivalence relations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-smooth-knot-concordance
  - def-locally-flat-topological-knot-concordance
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-oriented-link-in-s-three-and-ambient-isotopy
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.1 and the concordance relation, printed pp.322–323"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§3.1, Proposition 3.4 and Exercise △10, printed pp.10–11 and 23"
---

## Statement

On oriented ambient-isotopy classes of smooth knots in the standard three-sphere, smooth concordance is an equivalence relation, and locally flat topological concordance is an equivalence relation.

## Statement references

[[def-smooth-knot-concordance|The smooth concordance annulus and its product collars]]

[[def-locally-flat-topological-knot-concordance|The locally flat topological concordance annulus]]

## Facts & Assumptions

**Given:** Smooth oriented knots $K_0,K_1,K_2\subset S^3$ and either category of concordance.

[F1] A smooth concordance is a proper smooth annulus with product collars and oriented boundary $-K_0\sqcup K_1$. ([[def-smooth-knot-concordance]])

[F2] A locally flat topological concordance is a proper locally flat annulus with product collars and the same oriented boundary convention. ([[def-locally-flat-topological-knot-concordance]])

[F3] Ambient isotopy of oriented knots is given by a smooth family of orientation-preserving diffeomorphisms of $S^3$. ([[def-oriented-link-in-s-three-and-ambient-isotopy]])

[F4] Product collars and the local plane-pair charts are the boundary and interior conventions for proper surfaces. ([[def-locally-flat-proper-surface-and-concordance-collars]])

## Proof

**Given:** Oriented knot types $[K_0],[K_1],[K_2]$ and one of the two concordance categories.

1.1 Reflexivity is witnessed by the product annulus $K_0\times I\subset S^3\times I$, oriented so its boundary is $-K_0\times\{0\}\sqcup K_0\times\{1\}$. If a representative is changed by an ambient isotopy $H_t$, reparameterize time so $H_t$ is constant near $t=0$ and $t=1$. Its trace $(x,t)\mapsto(H_t(x),t)$ then has product endpoint collars and is a concordance annulus; it is smooth in the smooth case and locally flat in the topological case because it is itself smooth. For an existing concordance, glue the trace to the matching product collar: use the reversed trace at the lower end and the forward trace at the upper end. The glued surface is an annulus in the same category, so replacing either endpoint by an ambient-isotopic representative preserves concordance. Thus the relation is well-defined on ambient-isotopy classes. [F1, F2, F3, F4, given, construct]

1.2 If an annulus $A$ gives a concordance from $K_0$ to $K_1$, apply $(x,t)\mapsto(x,1-t)$ to its image. Reorient the resulting annulus so the boundary at the new lower end is $-K_1$ and the boundary at the new upper end is $K_0$. The map and reorientation preserve smoothness in the smooth category and local flatness and product collars in the topological category. This gives symmetry. [F1, F2, F4, given, construct]

1.3 Let $A$ be a concordance from $K_0$ to $K_1$ and $B$ one from $K_1$ to $K_2$ in the same category. Glue the upper product collar of $A$ to the lower product collar of $B$ along their common oriented knot $K_1$. The two collar coordinates combine to a single collar across the gluing hypersurface, so the annuli join without a corner in the smooth category and their local-flat pair charts join in the topological category. Gluing two annuli along one boundary circle gives an annulus; the intermediate boundary orientations $K_1$ and $-K_1$ cancel, leaving boundary $-K_0\sqcup K_2$. This gives transitivity. [F1, F2, F4, given, construct]

2.1 Steps 1.1–1.3 prove reflexivity, symmetry, transitivity, and representative independence for both relations. [step 1.1, step 1.2, step 1.3] ∎

## Sources

[[def-smooth-knot-concordance]]

[[def-locally-flat-topological-knot-concordance]]
