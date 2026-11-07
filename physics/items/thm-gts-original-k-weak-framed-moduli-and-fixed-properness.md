---
id: thm-gts-original-k-weak-framed-moduli-and-fixed-properness
kind: theorem
title: "Gts original k weak framed moduli and fixed properness"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli
dependency_level: 2
deps:
  - def-gts-weak-phase-framing-moduli-datum
  - lem-gts-original-k-equivariant-critical-hull-retaining-frames
dependency_roles:
  def-gts-weak-phase-framing-moduli-datum: mathematical-premise
  lem-gts-original-k-equivariant-critical-hull-retaining-frames: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Y. Bojko, Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications"
      url: https://arxiv.org/pdf/2507.05922v3
      locator: "Assumptions 5.1 and 5.10; Definition 5.3; §§6.2–6.3, 6.9–6.14 and 7.2. Exact source hypotheses and limitations; no missing local proof is replaced by citation."
    - title: "Bojko, Kuhn, Liu, and Thimm, Wall-crossing for equivariant DT4 invariants"
      url: https://arxiv.org/html/2608.23515v1
      locator: "§2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; use only under its exact framing, HN, finite-type, fixed-properness, and resolution hypotheses."
verification:
  precheck: pass
aliases: []
---

## Statement

Under exactly original sheaf hypotheses, prove finite-type open algebraic-space moduli, separatedness and T-fixed valuative properness for the finite combined framings actually used, same original k; construct ample/resolution property. Retain all stipulated compact-support sheaves and same common line.

## Statement references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10, Definition 5.3, and §§6.2–6.3, 6.9–6.14, 7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Facts & Assumptions

**Given:** the exact original data and direct suppliers below, used only at their stated interfaces.

[A1] The exact original sheaf hypotheses are Bojko Assumptions 5.1 and 5.10, including the specified class domain, boundedness, original framing concentration, and one-line fixed-properness; they do not state the desired multi-frame separatedness/properness conclusion.

[F1] [[def-gts-weak-phase-framing-moduli-datum]]: exact planned interface: “Specify original weak stability, exact phase category, actual ordinary-vs-admissible maps, original concentration opens and exact Fr_k, common-line framing, even emergent class domain, torus linearizations and orientations. No sum closure, cofinal-index availability, or abelian phase category is implicit.” The link records the planned statement only; its draft label is not treated as proof.

[F2] [[lem-gts-original-k-equivariant-critical-hull-retaining-frames]]: exact planned interface: “Construct a torus-invariant admissible critical hull retaining the FULL original-k tuple in the actual valuative diagrams, or a direct same-k separatedness replacement. Do not replace the tuple by separate rescalings.” The link records the planned statement only; its draft label is not treated as proof.

## Proof

**Proof status:** a same-$k$ local-sheaf valuative existence component is established; finite-type algebraic-space structure, separatedness, and the resolution property for the full collective locus remain open.

1.1 The preceding same-$k$ construction extends a generic locally framed sheaf to a flat family whose special tuple is collectively critical, using only the original concentration open and one-line fixed-properness hypothesis. It establishes existence of a special object in the stipulated class; it does not show the object lies in a separated moduli space. [given, A1, F1, F2, algebra]

2.1 The valuative criterion for properness requires finite type and separatedness as well as existence after base extension. The existence in 1.1 supplies only the last part; it cannot imply separatedness because it does not rule out two inequivalent special limits. [given, A1, F1, step 1.1, algebra]

3.1 The 2026 framed CY4 wall-crossing theorem assumes quasi-compact separated stable rigidifications, proper $T$-fixed loci, and resolution property in Assumption 4.2.4(g),(i). Applying it therefore presupposes the main properties in this Statement and does not prove them for the original compact-support sheaf category. [given, A1, F1, step 2.1, algebra]

4.1 No argument here proves openness of collective generation for all stipulated families, a closed diagonal, or an equivariant ample line bundle on the resulting space. Those are the precise missing inputs, so the full theorem remains escalated. [given, A1, F1, F2, step 3.1, algebra] ∎

