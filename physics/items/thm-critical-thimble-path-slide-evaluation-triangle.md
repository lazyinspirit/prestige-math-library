---
id: thm-critical-thimble-path-slide-evaluation-triangle
kind: theorem
title: Critical thimble path slides give the full evaluation triangle
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: differential-geometry
dependency_level: 3
deps:
  - def-stopped-fukaya-category-algebraic-conventions
  - lem-finite-exact-stopped-floer-history-and-localization-model
  - lem-critical-handle-entry-disk-and-boundary-attachment
dependency_roles:
  def-stopped-fukaya-category-algebraic-conventions: mathematical-premise
  lem-finite-exact-stopped-floer-history-and-localization-model: mathematical-premise
  lem-critical-handle-entry-disk-and-boundary-attachment: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology
      url: https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf
      locator: Lecture 10, $A_\infty$ operations and exact path-slide context; its general discussion is not used as this custom path-slide proof.
    - title: Ganatra, Pardon, and Shende, Sectorial descent for wrapped Fukaya categories
      url: https://arxiv.org/pdf/1809.03427v2
      locator: Theorem 1.9 and §§7.2--7.3, standard wrapping triangles and generation context; the theorem's distinct hypotheses are not substituted here.
verification:
  precheck: pending
---

## Statement

For an isolated critical value $j$, take the evaluation-side oriented critical path slide with incoming ordered pair $(\Delta_j,\Delta_i)$ and regular entry crossing the actual transported $V_j\cap V_i$. Prove, with path side and grading calibrated, a represented triangle
$$\operatorname{CF}(\Delta_j,\Delta_i)\otimes\Delta_j \xrightarrow{\mathrm{ev}}\Delta_i \longrightarrow\Delta_i^{\mathrm{slide}}$$
in the actual stopped category. The coefficient is its entire complex and flat-system/orientation lines; the cone equivalence is an all-arity Yoneda comparison on arbitrary finite probe words. Retain coefficient-strip breaks, probe polygon faces, clean-direction evaluations, fixed radial scale, and all real belt/end faces. Iteration and the explicit quadratic self-rotation must give forward finite twisted representatives and functor maps for the once-rotated thimbles.

The current carrier has no completed endpoint boundary movie or matched coefficient/probe compactification, so the conditional cone argument below does not establish this theorem. The item is escalated.

## Statement references

[[def-stopped-fukaya-category-algebraic-conventions]]

[[lem-finite-exact-stopped-floer-history-and-localization-model]]

[[lem-critical-handle-entry-disk-and-boundary-attachment]]

## Facts & Assumptions

**Given:** The finite exact stopped datum and the actual ordered pair of thimbles in the preceding geometric definition. The path side is the evaluation side: the regular entry crossing is $V_j\cap V_i$, not the opposite crossing.

[F1] [[def-stopped-fukaya-category-algebraic-conventions]] defines finite twisted objects, mapping cones, right representable modules, and the objectwise quasi-isomorphism criterion for a module map.

[F2] [[lem-finite-exact-stopped-floer-history-and-localization-model]] supplies the regular four-dimensional finite ordinary and independent-block operation/history model, full Morse/PSS units, compactness/gluing and derived localization. It does not supply the critical boundary-attachment movie or its coefficient/probe cap comparison required in [A1] and [A2].

[F3] [[lem-critical-handle-entry-disk-and-boundary-attachment]] proves the whole exact disk and phase calculations but explicitly leaves the prescribed endpoint boundary movie unproved.

[A1] Conditional input for the cone argument: an actual embedded exact boundary-attachment family with the prescribed old and clocked endpoints, conical collars, all belt/seam/interpolation faces, fixed primitive constants, and the relative grading/Spin transport.

[A2] Conditional input for all-arity counts: the operation model of [F2] is completed with compactified coefficient strips and probe polygons, matched gluing, clean-direction evaluation maps, and the actual fixed-scale cap in [A1].

## Proof

1.1 With [A2], the incoming coefficient is the full cochain complex $\operatorname{CF}(\Delta_j,\Delta_i)$, including its Floer differential, flat-system parallel transport, and orientation line. The zero-dimensional evaluation domains define the map $\mathrm{ev}$ into $\Delta_i$; they cannot be replaced by a set of intersection generators or a cohomology vector space. The ordered path convention in the Statement fixes which endpoint is evaluated. [F1, F2, given, algebra]

1.2 For each finite probe word $P$, count the matched one-dimensional domains in [A2]. If their compactification has exactly the coefficient-strip breaks, probe-polygon faces, clean-direction boundary evaluations, and the two path-slide endpoints, the signed boundary count is the chain-map identity for the probe component of the cone-to-slide comparison. The same count with all probe arities gives a module map
$$\operatorname{Cone}\bigl(Y_{\mathrm{ev}}: \operatorname{CF}(\Delta_j,\Delta_i)\otimes Y_{\Delta_j}\to Y_{\Delta_i}\bigr) \longrightarrow Y_{\Delta_i^{\mathrm{slide}}}.$$
The required boundary classification is conditional here; it does not follow from the local disk end alone. [A2, F1, F2, construct, algebra]

2.1 If the compactified count also supplies a homotopy inverse and its homotopies on every finite probe word, the displayed module map is objectwise a quasi-isomorphism. By [F1], this identifies the cone with the slide in the pretriangulated stopped category and gives the represented evaluation triangle with its full coefficient complex. Restricting the count to one probe or to cohomology would not prove this all-arity comparison. [A2, F1, step 1.2, construct, algebra]

3.1 If these actual triangles are constructed for the successive evaluation-side slides, their finite cones give finite twisted representatives. Composing their actual object maps with the specified quadratic self-rotation yields the forward finite membership required for once-rotated thimbles; every continuation letter remains in the finite word. This is an algebraic consequence only after the individual cone maps and homotopies exist. [F1, F2, step 2.1, construct, algebra]

4.1 The current entry carrier [F3] lacks [A1]. Its true remaining geometry is one embedded two-parameter boundary attachment from the disk cap on the actual transported old brane to the actual clocked brane, with the belt and half-cocore seam, every interpolation sheet, end collars/constants, and grading/relative-Spin transport. The coefficient/probe counts and finite object maps in [A2] are additional missing data; no full spherical Dehn-twist triangle or unrelated stop-generation theorem supplies these custom interfaces. Therefore the conditional deductions in steps 1.1 through 3.1 do not prove the statement. This theorem remains escalated. [F2, F3, A1, A2, step 1.1, step 1.2, step 2.1, step 3.1] ∎
