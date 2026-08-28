---
id: thm-injective-object-characterisations
kind: theorem
title: "Injective object characterisations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-injective-object, thm-projective-object-characterisations, thm-the-opposite-of-an-abelian-category-is-abelian]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.6"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Statement

For an object $I$ of an abelian category, the following are equivalent:

1. $I$ is injective.
2. For every short exact sequence
   $$0\to K\to E\to M\to0,$$
   the induced sequence
   $$0\to\mathcal A(M,I)\to\mathcal A(E,I)\to\mathcal A(K,I)\to0$$
   is exact.
3. Every monomorphism $I\rightarrowtail E$ splits.

## Facts & Assumptions

**Given:** An object $I$ in an abelian category.

[L1] The opposite of an abelian category is abelian
([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[L2] Projective objects are characterized by exactness of Hom and by splitting
of epimorphisms onto them
([[thm-projective-object-characterisations]]).

[L3] Injectivity is the dual lifting property
([[def-injective-object]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the opposite category $\mathcal A^{\mathrm{op}}$ is abelian. In that opposite category, the object $I$ is projective exactly when it is injective in $\mathcal A$, because monomorphisms and epimorphisms are exchanged. [L1, L3]
2.1 Apply the projective characterization [L2] to $I$ inside $\mathcal A^{\mathrm{op}}$. The exactness statement there becomes exactness of $\mathcal A(-,I)$ on short exact sequences in $\mathcal A$, and splitting of an epimorphism onto $I$ in the opposite category is splitting of a monomorphism out of $I$ in $\mathcal A$. [L1, L2, step 1.1]
3.1 Therefore conditions 1, 2, and 3 are equivalent in $\mathcal A$. [L3, step 2.1] ∎