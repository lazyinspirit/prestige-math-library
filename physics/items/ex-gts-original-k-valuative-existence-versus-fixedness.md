---
id: ex-gts-original-k-valuative-existence-versus-fixedness
kind: example
title: "Gts original k valuative existence versus fixedness"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli-examples
dependency_level: 3
deps:
  - def-gts-weak-phase-framing-moduli-datum
  - lem-gts-original-k-equivariant-critical-hull-retaining-frames
  - thm-gts-original-k-weak-framed-moduli-and-fixed-properness
dependency_roles:
  def-gts-weak-phase-framing-moduli-datum: mathematical-premise
  lem-gts-original-k-equivariant-critical-hull-retaining-frames: mathematical-premise
  thm-gts-original-k-weak-framed-moduli-and-fixed-properness: mathematical-premise
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
      locator: "Assumptions 5.1 and 5.10; Definitions 5.3 and 5.4; §6.3; §7.2. Diagnostic examples do not claim the full hypotheses."
    - title: "Bojko, Kuhn, Liu, and Thimm, Wall-crossing for equivariant DT4 invariants"
      url: https://arxiv.org/html/2608.23515v1
      locator: "§§3.2 and 4.2; exact conditional hypotheses and scope limits."
verification:
  precheck: pass
aliases: []
---

## Example

Run the existing same-k common-line existence construction and distinguish special collective stability from torus-fixed upgrade. No claim that generic torus linearization forces special fixedness.

## Example references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10, Definition 5.3, and §§6.2–6.3, 6.9–6.14, 7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Setup


In the stipulated local-sheaf setting, let $R$ be a complete complex DVR with fraction field $K$ and let $(E_K,s_K)$ be an original-$k$ generically $T$-linearized object with a collectively critical common-line tuple. The same-$k$ modification argument yields a flat family and special collectively critical tuple. The special tuple is not automatically $T$-fixed: the minimum-rank subobject used in a modification need not be invariant. On the simple-pair locus a separate locally separated diagonal argument upgrades fixed generic data to a $T$-fixed special family.

## Facts & Assumptions

**Given:** the exact data and all unresolved suppliers retain their stated status.

[F1] [[def-gts-weak-phase-framing-moduli-datum]]: exact planned interface: “Specify original weak stability, exact phase category, actual ordinary-vs-admissible maps, original concentration opens and exact Fr_k, common-line framing, even emergent class domain, torus linearizations and orientations. No sum closure, cofinal-index availability, or abelian phase category is implicit.” The link records scope, not proof acceptance.

[F2] [[lem-gts-original-k-equivariant-critical-hull-retaining-frames]]: exact planned interface: “Construct a torus-invariant admissible critical hull retaining the FULL original-k tuple in the actual valuative diagrams, or a direct same-k separatedness replacement. Do not replace the tuple by separate rescalings.” The link records scope, not proof acceptance.

[F3] [[thm-gts-original-k-weak-framed-moduli-and-fixed-properness]]: exact planned interface: “Under exactly original sheaf hypotheses, prove finite-type open algebraic-space moduli, separatedness and T-fixed valuative properness for the finite combined framings actually used, same original k; construct ample/resolution property. Retain all stipulated compact-support sheaves and same common line.” The link records scope, not proof acceptance.

## Verification

1.1 The generic fibre is unchanged by each elementary modification because the quotient is supported on the closed fibre. Exactness of the original $\mathrm{Fr}_k$ on the stipulated phase-category exact sequence transports the same common-line map through every step. The termination contradiction yields an actual flat special object with collective generation at the same original $k$. [given, F1, F2, algebra]

1.2 To infer fixedness, compare the action map and constant-family map over $T\times\operatorname{Spec}R$. Their generic restrictions agree. Equality on the special fibre follows only if the relevant diagonal is closed or an exact locally separated finite-closure argument applies; existence of an extension alone supplies neither. [given, F2, F3, algebra]

2.1 On the stated simple local-sheaf locus, the projective-Hom cone is proper and the bad nonisomorphism locus has closed image. This makes the diagonal an immersion locally. The schematic closure of the fixed generic point is finite over the trait; a connected torus fixes every geometric point of its finite special fibre. The immersion then forces the action and constant maps to agree on the whole trait. This is an additional theorem-specific argument, not a consequence of generic linearization alone. [given, F3, step 1.2, algebra]

3.1 Thus same-$k$ special existence, fixedness after the simple-locus upgrade, and properness of all weighted moduli are separate conclusions. Only the first two are established in the specified local branch; full properness remains open for the assigned scope. [given, F1, F2, F3, step 2.1, algebra] ∎

