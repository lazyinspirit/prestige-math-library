---
id: def-upper-and-roelcke-uniformities-of-a-topological-group
kind: definition
title: "The upper and Roelcke uniformities generated from the left and right uniformities of a topological group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-left-and-right-uniformities-of-a-topological-group, def-uniform-space-by-entourages]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}, {title: "C. Rosendal, Coarse Geometry of Topological Groups", url: "https://homepages.math.uic.edu/~rosendal/PapersWebsite/Coarse-Geometry-Book23.pdf"}]
pipeline_run: null
---

## Definition

For the left and right uniformities $\mathcal U_L,\mathcal U_R$ of a topological group:

- the **upper uniformity** is their join $\mathcal U_L\vee\mathcal U_R$, with basic entourages $L_U\cap R_V$;
- the **Roelcke uniformity** is their meet $\mathcal U_L\wedge\mathcal U_R$, with a base of composites $L_U\circ R_V$.

For the upper structure, intersections are the usual base for the least filter
containing both input uniformities; inverse and square-root axioms follow by
shrinking the left and right factors separately.

For the Roelcke structure, left and right relations commute:
$L_U\circ R_V=R_V\circ L_U$, both saying that $y\in VxU$. Their inverses are
again such composites, and if $U_0^{\,2}\subseteq U$ and
$V_0^{\,2}\subseteq V$, then
$$(L_{U_0}\circ R_{V_0})^{\circ2}\subseteq L_U\circ R_V.$$
Finite intersections are refined by intersecting the identity
neighbourhoods. Hence both displayed bases satisfy
[[def-uniform-space-by-entourages]]. The names and formulas are kept separate.
