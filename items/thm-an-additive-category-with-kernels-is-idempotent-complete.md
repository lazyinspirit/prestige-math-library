---
id: thm-an-additive-category-with-kernels-is-idempotent-complete
kind: theorem
title: "An additive category with kernels is idempotent complete"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-additive-category, thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation, thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero, def-idempotent-and-split-idempotent, def-idempotent-complete-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3, Lemma 12.3.16"
      url: "https://stacks.math.columbia.edu/tag/09SE"
    - title: "Dixy Msapato, The Karoubi envelope and weak idempotent completion of an extriangulated category, Proposition 2.2"
      url: "https://eprints.whiterose.ac.uk/id/eprint/180476/13/Msapato2022_Article_TheKaroubiEnvelopeAndWeakIdemp.pdf"
pipeline_run: frontier-20
---

## Statement

Every additive category in which every morphism has a kernel is idempotent
complete.

## Facts & Assumptions

**Given:** An additive category $\mathcal C$ and an idempotent $e:A\to A$.

[L1] In an additive category, hom-sets admit subtraction and there is a zero
object ([[def-additive-category]]).

[L2] On a biproduct, the injection-projection maps satisfy the identity-sum
relation ([[thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation]]).

[L3] The criterion "monic iff kernel zero" holds in a preadditive category with
a zero object ([[thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero]]).

[L4] Idempotent completeness means that every idempotent splits
([[def-idempotent-complete-category]], [[def-idempotent-and-split-idempotent]]).

## Proof

**Proof technique:** direct.

1.1 Let $k:K\to A$ be the kernel of $1_A-e$, which exists by hypothesis. Since $(1_A-e)e=0$, the kernel universal property gives a morphism $p:A\to K$ with $kp=e$. [L1, L4, construct]

2.1 Because $(1_A-e)k=0$, one has $ek=k$. Hence $kpk=ek=k$. The morphisms $pk$ and $1_K$ both satisfy $k(-)=k$, so the kernel universal property forces $pk=1_K$. Therefore $kp=e$ and $pk=1_K$, so $e$ splits through $K$. [L1, step 1.1]

3.1 Thus every idempotent in $\mathcal C$ splits. By [L4], the category is idempotent complete. The additive setting is what makes $1_A-e$ meaningful; [L2] and [L3] record the surrounding zero-object calculus on which that subtraction sits. [L2, L3, L4, step 2.1] ∎
