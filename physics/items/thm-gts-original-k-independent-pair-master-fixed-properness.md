---
id: thm-gts-original-k-independent-pair-master-fixed-properness
kind: theorem
title: "Gts original k independent pair master fixed properness"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli
dependency_level: 3
deps:
  - thm-gts-original-k-weak-framed-moduli-and-fixed-properness
  - lem-gts-original-k-independent-pair-master-quadratic-model
  - lem-gts-admitted-total-auxiliary-wall-product
dependency_roles:
  thm-gts-original-k-weak-framed-moduli-and-fixed-properness: mathematical-premise
  lem-gts-original-k-independent-pair-master-quadratic-model: mathematical-premise
  lem-gts-admitted-total-auxiliary-wall-product: mathematical-premise
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

Prove actual open stable moduli and proper graph-fixed loci with resolution property for required weighted independent-source masters; specify parity-safe admitted totals. Do not infer these from the one-source common-line star.

## Statement references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10, Definition 5.3, and §§6.2–6.3, 6.9–6.14, 7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

## Facts & Assumptions

**Given:** the exact original data and direct suppliers below, used only at their stated interfaces.

[A2] The pinned affine GIT prerequisite supplies finite generation of invariants for complex reductive groups acting on finite-type affine schemes. For the finite-quiver representation scheme, apply it to the semi-invariant algebra by adjoining a one-dimensional character coordinate. The resulting graded algebra is finite over its degree-zero invariant ring; its relative Proj is projective after passage to a positive Veronese. This is only the finite-dimensional quiver quotient construction, not a Quot-boundedness theorem for sheaves.

[A1] Conditional finite-quiver input for step 2.1: the image of the actual $T$-fixed master in the old affine quotient is a finite set. Proving this from the original weak-stability hypotheses is part of the unresolved scope, not a verified supplier.

[F1] [[thm-gts-original-k-weak-framed-moduli-and-fixed-properness]]: exact planned interface: “Under exactly original sheaf hypotheses, prove finite-type open algebraic-space moduli, separatedness and T-fixed valuative properness for the finite combined framings actually used, same original k; construct ample/resolution property. Retain all stipulated compact-support sheaves and same common line.” The link records the planned statement only; its draft label is not treated as proof.

[F2] [[lem-gts-original-k-independent-pair-master-quadratic-model]]: exact planned interface: “Construct independent old-pair and auxiliary source/flag/covector derived sheaf masters at original k, their actual evaluation maps, trace-free cones, isotropic homotopies, orientations and obstruction maps. Existing G1-G4 are components, not properness or stability.” The link records the planned statement only; its draft label is not treated as proof.

[F3] [[lem-gts-admitted-total-auxiliary-wall-product]]: exact planned interface: “Construct particular admissible same-slope kernels, stable filtrations, endpoint moduli and mixed fixed-product functors for original auxiliary walls. Use actual complementary diagrams of admitted total and retain nonreduced-base identifications; no global wideness claim.” The link records the planned statement only; its draft label is not treated as proof.

## Proof

**Proof status:** the finite-quiver King construction has a conditional properness argument. The finite fixed old affine image and the full compact-support sheaf case remain unproved.

1.1 Fix a finite dimension box and let $R$ be the affine relation scheme of the independent-pair/auxiliary quiver, with $G=\prod_v\mathrm{GL}_{d_v}$. For a King character $\chi$, form the nonnegative graded semi-invariant algebra $S=\bigoplus_{n\ge0}\mathbb C[R]^{G,\chi^n}$. It is the invariant algebra of $\mathbb C[R][z]$ when $G$ acts on $z$ with character $\chi^{-1}$, so the reductive finite-generation input [A2] makes $S$ finitely generated. Its degree-zero part is $\mathbb C[R]^G$; relative Proj is projective over this affine quotient after passage to a positive Veronese. The relations are already imposed in $R$, and the old-pair source and auxiliary source remain distinct gauge factors. [given, A2, F1, F2, algebra]

2.1 If the $T$-fixed image in the old affine quotient is finite, its scheme-theoretic image is a finite $\mathbb C$-scheme: it is finite type and has dimension zero. The $T$-fixed master is closed in the projective master and therefore is proper over that finite image. The restricted GIT ample line is $T$-equivariant; on the proper fixed locus its high powers globally generate coherent equivariant sheaves, and a finite-dimensional $T$-submodule of sections gives an equivariant vector-bundle surjection. This proves the resolution property. The finite-image premise is not proved from the current in-run suppliers for the whole assigned weak category. [given, A1, A2, F1, F2, step 1.1, algebra]

3.1 The current framed CY4 wall theorem assumes separated stable rigidifications, proper fixed loci, and resolution property in its Assumption 4.2.4(g),(i). It cannot supply those same properties as a conclusion for the original framings. The admitted-total product item is itself conditional on the parity-safe input. [given, F3, step 2.1, algebra]

4.1 A proof of the finite fixed affine image (or an independent properness theorem), and the open stable-locus/resolution construction for all stipulated local sheaves, is still missing. The full Statement therefore remains escalated. [given, A1, F1, F2, F3, step 3.1, algebra] ∎

