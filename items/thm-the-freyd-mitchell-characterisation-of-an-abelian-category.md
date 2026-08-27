---
id: thm-the-freyd-mitchell-characterisation-of-an-abelian-category
kind: theorem
title: "Freyd and Mitchell's characterisation of abelian categories"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-abelian-category, thm-the-freyd-axioms-imply-the-additive-axioms, thm-every-monomorphism-is-the-kernel-of-its-cokernel, thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Barry Mitchell, Theory of Categories, Theorem 20.1"
      url: "https://archive.org/details/theoryofcategori0000mitc"
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, §2"
      url: "https://arxiv.org/pdf/1901.08591"
pipeline_run: frontier-21
---

## Statement

For a category $\mathcal A$, the following are equivalent.

1. $\mathcal A$ is abelian in the working sense of [[def-abelian-category]].
2. $\mathcal A$ satisfies Freyd's axioms A0, A1, A1*, A2, A2*, A3, and A3*.
3. $\mathcal A$ has a zero object, pullbacks, and pushouts, and every
   monomorphism is a kernel while every epimorphism is a cokernel.

## Facts & Assumptions

**Given:** A category $\mathcal A$.

[L1] An abelian category is additive, has kernels and cokernels, and has
invertible coimage-image comparison maps
([[def-abelian-category]]).

[L2] In an abelian category every monomorphism is the kernel of its cokernel,
and dually every epimorphism is the cokernel of its kernel
([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

[L3] Freyd's axioms imply the working abelian definition
([[thm-the-freyd-axioms-imply-the-additive-axioms]]).

[L4] An additive category with all kernels and cokernels has all finite limits
and finite colimits
([[thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits]]).

## Proof

**Proof technique:** direct.

1.1 If clause 1 holds, then [L1] gives additivity, kernels, and cokernels. The zero object and binary biproducts in [L1] supply the zero-object, product, and coproduct clauses, while [L2] supplies the normality and conormality clauses. So clause 1 implies clause 2. [L1, L2]

1.2 Clause 2 implies clause 1 by [L3]. [L3]

2.1 If clause 2 holds, then step 1.2 and [L4] give all finite limits and finite colimits, hence in particular pullbacks and pushouts. So clause 2 implies clause 3. Conversely, if clause 3 holds, then the pullback of $A\to0\leftarrow B$ is a product of $A$ and $B$, the pushout of $A\leftarrow0\to B$ is a coproduct, the pullback of $A\xrightarrow{f}B\xleftarrow{}0$ is a kernel of $f$, and the pushout of $0\xleftarrow{}A\xrightarrow{f}B$ is a cokernel of $f$. Together with the stated normal and conormal clauses, that is exactly Freyd's list. [L1, L3, L4, step 1.2]

3.1 Steps 1.1, 1.2, and 2.1 prove the three-way equivalence. [step 1.1, step 1.2, step 2.1] ∎
