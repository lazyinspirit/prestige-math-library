---
id: thm-cft-virasoro-minimal-regular
kind: theorem
title: Regularity of Virasoro minimal-series vertex algebras
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
dependency_level: 7
axiom_use: ZF + AC
deps:
  - thm-cft-virasoro-minimal-model-classification
  - thm-cft-finitely-generated-weak-joint-modules-grading-restricted
  - def-cft-regularity
  - def-rational-vertex-algebra
  - def-c2-cofinite-vertex-algebra
  - def-axiom-of-choice
dependency_roles:
  thm-cft-virasoro-minimal-model-classification: mathematical-premise
  thm-cft-finitely-generated-weak-joint-modules-grading-restricted: mathematical-premise
  def-cft-regularity: mathematical-premise
  def-rational-vertex-algebra: mathematical-premise
  def-c2-cofinite-vertex-algebra: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Chongying Dong, Haisheng Li, and Geoffrey Mason, Regularity of Rational Vertex Operator Algebras
      url: https://arxiv.org/pdf/q-alg/9508018v1
      locator: "§§2–3, Theorems 3.7 and 3.13, printed pp. 3–12; the minimal Virasoro application cites separate rationality and singular-vector inputs."
    - title: Weiqiang Wang, Representations of Vertex Operator Algebras and Superalgebras
      url: https://dspace.mit.edu/server/api/core/bitstreams/3ceb4121-484d-4749-aec9-cf9a1c9fe0ea/content
      locator: "Chapter 4 §4.1, printed pp. 56–63: minimal Virasoro rationality and the cited singular-vector/Ext ingredients."
    - title: Paul Mnev and Nicolai Reshetikhin, Lecture Notes on Conformal Field Theory
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf
      locator: "Chapter 7 §7.4, printed pp. 249–253: minimal models and the distinction between chiral algebraic data and full CFT data."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice.

For coprime integers $p,q\ge2$, the simple Virasoro vertex operator
algebra $L(c_{p,q},0)$, where
$c_{p,q}=1-6(p-q)^2/(pq)$, is regular. Here regularity means that every
weak module is a direct sum of simple ordinary modules.

## Facts & Assumptions

**Given:** The parameters of the Statement and an arbitrary weak module M.

[F1] [[thm-cft-virasoro-minimal-model-classification]] proves that this simple CFT-type algebra is C2-cofinite and rational in the specified admissible grading. Its full simple admissible list consists of ordinary highest-weight modules with the displayed Kac-table weights.

[F2] [[thm-cft-finitely-generated-weak-joint-modules-grading-restricted]] at k=1 applies to every finitely generated weak module of a CFT-type C2-cofinite algebra, with no prior local finiteness or grading. It supplies finite-dimensional generalized weight blocks and a compatible nonnegative admissible grading.

[F3] [[def-cft-regularity]], [[def-rational-vertex-algebra]] and [[def-c2-cofinite-vertex-algebra]] fix the weak regularity, specified-grading rationality and C2 conventions.

[F4] [[def-axiom-of-choice]] supplies a maximal independent family of simple submodules, as assumed in the unchanged Statement.

## Proof

1.1 Every vector m∈M generates a cyclic weak submodule C_m. By F1 the algebra is CFT type and C2-cofinite, so F2 gives C_m a compatible nonnegative admissible grading. Rationality in F1 decomposes this graded module into simple admissible submodules; every one is ordinary by the actual full simple-module list in F1. Forgetting the grading gives a sum of ordinary simple weak submodules. [F1, F2, F3, given]

2.1 Since M is the sum of its cyclic submodules, it is a sum of simple ordinary submodules. Choose by F4 a maximal family of such submodules whose sum is internal direct. If its sum S were proper, one of the spanning simple submodules T would not be contained in S. The intersection T∩S is a submodule of the simple T and is proper, hence zero; adding T contradicts maximality. Thus M=S is an internal direct sum of simple ordinary modules, exactly regularity in F3. [F1, F3, F4, step 1.1] ∎
