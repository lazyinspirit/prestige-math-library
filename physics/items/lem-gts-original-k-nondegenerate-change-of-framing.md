---
id: lem-gts-original-k-nondegenerate-change-of-framing
kind: lemma
title: "Gts original k nondegenerate change of framing"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli
dependency_level: 3
deps:
  - lem-gts-original-k-direct-sum-framing-oriented-gysin
dependency_roles:
  lem-gts-original-k-direct-sum-framing-oriented-gysin: mathematical-premise
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

Construct an actual NONZERO comparison of source bracket/capping structures for full original sheaf overlap. Handle torsion supported on divisor sections and the zero double-cap explicitly. Prove the triangular coefficient/injectivity and orientation normalization; do not assume source 6.12 divisor regularity on all sheaves.

## Statement references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10, Definition 5.3, and §§6.2–6.3, 6.9–6.14, 7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Facts & Assumptions

**Given:** the exact original data and direct suppliers below, used only at their stated interfaces.

[F1] [[lem-gts-original-k-direct-sum-framing-oriented-gysin]]: exact planned interface: “On the original k1/k2 overlap construct common free open in P(V1+V2), regular zero-component embeddings, actual hyperbolic orientation and supported Gysin identities. No mixed fixed properness or divisor regularity is needed; the double Euler cap is zero and gives no injectivity.” The link records the planned statement only; its draft label is not treated as proof.

## Proof

**Proof status:** the required nonzero full-overlap comparison is not established; the following proves the two specific shortcut failures.

1.1 Let $D$ be a Cartier divisor with defining section $s$, and let $p\in D$. The map $s:k(p)\to k(p)\otimes\mathcal O(D)$ is induced on the one-dimensional fibre by $s(p)=0$. It is therefore the zero map, and is not injective since $k(p)\ne0$. Thus the section-multiplication embedding argument fails on an allowed torsion sheaf. [given, F1, algebra]

2.1 The direct-sum Gysin identities in [F1] give two caps. Applying both gives zero on each original pair locus because its own tautological section is nowhere zero there. Equality of two zero classes cannot be cancelled: multiplication by the zero class is not injective. [given, F1, step 1.1, algebra]

3.1 These computations rule out only the divisor shortcut and cancellation of the double cap. They do not refute a different nonzero construction. No orientation-normalized triangular coefficient or injectivity argument valid for all original compact-support sheaves is supplied, so this item remains escalated at that exact gap. [given, F1, step 2.1, algebra] ∎

