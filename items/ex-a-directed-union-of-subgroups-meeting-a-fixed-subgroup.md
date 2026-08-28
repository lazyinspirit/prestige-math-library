---
id: ex-a-directed-union-of-subgroups-meeting-a-fixed-subgroup
kind: example
title: "A directed union of subgroups distributes over intersection with a fixed subgroup"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-axioms-ab5-and-ab5-star, thm-module-categories-are-grothendieck-categories]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Sur quelques points d'algèbre homologique, Barr translation, Section 1.5"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
pipeline_run: frontier-22
---

## Example

Let $A=\bigoplus_{n\ge1}\mathbb Z e_n$, let
$B_n=\langle e_1,\dots,e_n\rangle$, and let
$C=\langle e_1+e_2,e_3,e_4,\dots\rangle$. Then $(B_n)$ is directed,
$\bigvee_n B_n=A$, and

$$\left(\bigvee_n B_n\right)\wedge C=C=\bigvee_n(B_n\wedge C).$$

This is the AB5 lattice identity in a concrete module calculation.

## Facts & Assumptions

**Given:** The subgroup chain $(B_n)$ and the fixed subgroup $C$ displayed in
the statement.

[L1] AB5 is the directed-join distributivity law for subobjects
([[def-the-axioms-ab5-and-ab5-star]]).

[L2] Module categories are Grothendieck, hence satisfy AB5
([[thm-module-categories-are-grothendieck-categories]]).

## Verification

**Proof technique:** direct.

1.1 The subgroups $B_n$ are directed by inclusion and their union is all of $A$, since every element of $A$ has finite support. Also $$B_n\cap C=\langle e_1+e_2,e_3,\dots,e_n\rangle$$ for $n\ge2$, because those are exactly the generators of $C$ lying in the first $n$ coordinates. [L1, algebra]
2.1 Taking the union of the intersections from step 1.1 recovers all of $C$, so $$\bigvee_n(B_n\wedge C)=C=(\bigvee_n B_n)\wedge C.$$ This is precisely the AB5 identity [L1], exactly as the abstract theorem [L2] predicts for module categories. [L1, L2, step 1.1] ∎