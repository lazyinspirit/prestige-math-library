---
id: lem-gts-admitted-total-auxiliary-wall-product
kind: lemma
title: "Gts admitted total auxiliary wall product"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli
dependency_level: 2
deps:
  - lem-gts-parity-safe-admitted-total-closed-orbit-reductivity
dependency_roles:
  lem-gts-parity-safe-admitted-total-closed-orbit-reductivity: mathematical-premise
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

Construct particular admissible same-slope kernels, stable filtrations, endpoint moduli and mixed fixed-product functors for original auxiliary walls. Use actual complementary diagrams of admitted total and retain nonreduced-base identifications; no global wideness claim.

## Statement references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10, Definition 5.3, and §§6.2–6.3, 6.9–6.14, 7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Facts & Assumptions

**Given:** the exact original data and direct suppliers below, used only at their stated interfaces.

[F1] [[lem-gts-parity-safe-admitted-total-closed-orbit-reductivity]]: exact planned interface: “Establish the needed closed-orbit/ordinary-kernel result at each admitted EVEN total, including odd exact-simple summands, without applying original 5.10 to an odd subsum, assuming 2alpha admission, or presupposing odd bricks. If original hypotheses do not imply it, identify a different actual wall construction or precise source-compatible obstruction.” The link records the planned statement only; its draft label is not treated as proof.

[A1] Conditional input, not yet a current proved carrier: every actual object of an admitted total $\alpha$ lies in an ordinary wide slice containing its actual complementary phase-category diagrams. This is the precise R3/slice conclusion needed here; it is not silently inferred from the parity item label.

## Proof

**Given:** an equal-slope stable pair $U,V$ whose actual classes sum to an admitted total $\alpha$, and the per-object wide-category conclusion of the parity supplier at that total. This is conditional; no odd subsum or $2\alpha$ is used.

1.1 Apply the conditional conclusion to the actual object $U\oplus V$. Its ordinary wide category is closed under idempotent kernels and cokernels, so it contains $U,V$ and kernels, images, and cokernels of their maps. This is local to the actual admitted total $[U]+[V]=\alpha$ and makes no claim about unrelated objects. [given, A1, F1, algebra]

2.1 For an actual admissible sequence $0\to P\to X\to Q\to0$ with $[X]=\alpha$, apply the same conclusion to the actual complementary object $P\oplus Q$. Extension closure puts $X$ in that category. Thus ordinary projections and kernels in this particular diagram are admissible phase objects. A numerical equality alone would not justify this step. [given, A1, F1, step 1.1, algebra]

3.1 In this wide category the equal-slope subcategory is abelian. A nonzero map between stable equal-slope factors has image both a quotient of its source and a subobject of its target; semistability forces equal slope at both ends, and stability then forces the map to be an isomorphism. Different flag dimension vectors make $U,V$ nonisomorphic, hence both cross-Hom groups vanish. [given, A1, F1, step 2.1, algebra]

4.1 The projections of any equal-slope subobject of $U\oplus V$ have image zero or the entire stable factor. With the kernels admissible by 1.2, its only proper nonzero possibilities are $U$ and $V$. Each is seen by its corresponding extra map, while strict-slope subobjects remain below by the stipulated positive auxiliary gap. Hence the split enhanced object is stable. [given, A1, F1, step 2.1, step 3.1, algebra]

5.1 Over any base the fixed-torus weight decomposition splits the universal object and commutes with base change. Cross-Hom conditions are finite linear equations; their fibrewise zero kernel means a maximal minor is invertible locally, so the kernel remains zero after arbitrary base change, including nonreduced bases. Weight summands and direct sums are inverse functors. This proves the mixed fixed-product identification as a moduli functor, conditionally on the missing parity supplier. [given, A1, F1, step 4.1, algebra] ∎

