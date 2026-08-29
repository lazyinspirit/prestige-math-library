---
id: thm-hom-is-left-exact-in-each-variable
kind: theorem
title: "Hom is left exact in each variable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-degenerate-exactness-criteria,
       thm-the-opposite-of-an-abelian-category-is-abelian,
       thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits,
       def-hom-functors-and-hom-bifunctor,
       thm-representable-functors-preserve-small-limits,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.8"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "David Mehrle, Category Theory, Part III, Definition 7.22"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: frontier-23
---

## Statement

Let $\mathcal A$ be an abelian category and $X$ an object of $\mathcal A$.

1. If
   $$0 \to A \to B \to C$$
   is exact, then
   $$0 \to \mathcal A(X,A) \to \mathcal A(X,B) \to \mathcal A(X,C)$$
   is exact in $\mathbf{Ab}$.
2. If
   $$A \to B \to C \to 0$$
   is exact, then
   $$0 \to \mathcal A(C,X) \to \mathcal A(B,X) \to \mathcal A(A,X)$$
   is exact in $\mathbf{Ab}$.

Thus Hom is left exact in each variable.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$ and an object $X$ of $\mathcal A$.

[L1] In an abelian category, exactness at the left end means that the first
displayed map is a kernel of the second
([[thm-degenerate-exactness-criteria]]).

[L2] Abelian categories have all finite limits, and representable functors
preserve existing small limits
([[thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits]],
[[thm-representable-functors-preserve-small-limits]]).

[L3] The covariant and contravariant Hom assignments are the representable
functors $\mathcal A(X,-)$ and $\mathcal A^{\mathrm{op}}(X,-)$
([[def-hom-functors-and-hom-bifunctor]],
[[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[L4] The target category of these Hom functors is $\mathbf{Ab}$, which is
abelian
([[thm-abelian-groups-form-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Assume $0 \to A \to B \to C$ is exact. By [L1], the map $A \to B$ is a kernel of $B \to C$. By [L2] and [L3], the representable functor $\mathcal A(X,-)$ preserves that kernel. Therefore $0 \to \mathcal A(X,A) \to \mathcal A(X,B) \to \mathcal A(X,C)$ is exact in $\mathbf{Ab}$ by [L1] applied inside the abelian category [L4]. [L1, L2, L3, L4, assume-hyp]

2.1 Passing to the opposite category, the exact sequence $A \to B \to C \to 0$ becomes a left-exact sequence in $\mathcal A^{\mathrm{op}}$. Applying step 1.1 there to the representable functor $\mathcal A^{\mathrm{op}}(X,-) = \mathcal A(-,X)$ gives $0 \to \mathcal A(C,X) \to \mathcal A(B,X) \to \mathcal A(A,X)$ exact in $\mathbf{Ab}$. [L2, L3, L4, step 1.1]

3.1 Hence Hom is left exact in each variable. [step 1.1, step 2.1] ∎
