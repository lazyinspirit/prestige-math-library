---
id: thm-gts-original-k-uncapped-js-and-index-independence
kind: theorem
title: "Gts original k uncapped js and index independence"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli
dependency_level: 5
deps:
  - thm-gts-original-k-actual-uncapped-js-seed
  - lem-gts-admitted-total-auxiliary-wall-product
  - lem-gts-original-k-nondegenerate-change-of-framing
dependency_roles:
  thm-gts-original-k-actual-uncapped-js-seed: mathematical-premise
  lem-gts-admitted-total-auxiliary-wall-product: mathematical-premise
  lem-gts-original-k-nondegenerate-change-of-framing: mathematical-premise
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

Derive actual uncapped formula (5.33), then index independence on each original overlap by noncircular finite rank induction, preserving exact bracket order/orientation, parity and all original classes. Existing capped U theorem remains a separate supplier.

## Statement references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10, Definition 5.3, and §§6.2–6.3, 6.9–6.14, 7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Facts & Assumptions

**Given:** the exact original data and direct suppliers below, used only at their stated interfaces.

[F1] [[thm-gts-original-k-actual-uncapped-js-seed]]: exact planned interface: “Apply the existing capped theorem to the actual independent-pair category and extract source degree one, with actual positive endpoint virtual class and pure-source point, to prove the original-k uncapped JS seed without circular initialization.” The link records the planned statement only; its draft label is not treated as proof.

[F2] [[lem-gts-admitted-total-auxiliary-wall-product]]: exact planned interface: “Construct particular admissible same-slope kernels, stable filtrations, endpoint moduli and mixed fixed-product functors for original auxiliary walls. Use actual complementary diagrams of admitted total and retain nonreduced-base identifications; no global wideness claim.” The link records the planned statement only; its draft label is not treated as proof.

[F3] [[lem-gts-original-k-nondegenerate-change-of-framing]]: exact planned interface: “Construct an actual NONZERO comparison of source bracket/capping structures for full original sheaf overlap. Handle torsion supported on divisor sections and the zero double-cap explicitly. Prove the triangular coefficient/injectivity and orientation normalization; do not assume source 6.12 divisor regularity on all sheaves.” The link records the planned statement only; its draft label is not treated as proof.

## Proof

1.1 Fix an admitted class $\alpha$ and compare the two original-index expressions in the source's stated bracket order. If the degree-one seed, admitted-total wall products, and overlap comparison of [F1]–[F3] hold, transport both formulas to the same auxiliary endpoint. The comparison then yields a triangular relation $c_\alpha\Delta_\alpha+\sum_{\beta<\alpha}c_{\alpha,\beta}\Delta_\beta=0$, where $\Delta_\gamma$ is the difference of the two index invariants and $c_\alpha\ne0$ is the orientation-normalized diagonal coefficient. No brackets are permuted. [given, F1, F2, F3, algebra]

2.1 Induct on positive additive rank. At the least rank there are no proper decompositions, so the relation gives $c_\alpha\Delta_\alpha=0$ and hence $\Delta_\alpha=0$. At rank $r$, every proper factor has lower positive rank, so all lower terms vanish by induction; again $c_\alpha\Delta_\alpha=0$ and $\Delta_\alpha=0$. This is the full finite-rank algebraic extraction conditional on the nonzero triangular comparison. [given, F3, step 1.1, algebra]

3.1 The nonzero geometric comparison and the full-scope seed/product premises are not currently proved. The zero double-cap identity does not provide $c_\alpha\ne0$. Thus this is a complete conditional consumer proof, and the unconditional item remains escalated. [given, F1, F2, F3, step 2.1, algebra] ∎

