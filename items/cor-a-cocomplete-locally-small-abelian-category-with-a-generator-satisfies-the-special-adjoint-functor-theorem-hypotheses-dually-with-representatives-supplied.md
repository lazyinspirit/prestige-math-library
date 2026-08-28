---
id: cor-a-cocomplete-locally-small-abelian-category-with-a-generator-satisfies-the-special-adjoint-functor-theorem-hypotheses-dually-with-representatives-supplied
kind: corollary
title: "A cocomplete locally small abelian category with a generator supplies the category-side SAFT hypotheses dually"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-generator-and-cogenerator-of-a-category,
       thm-a-locally-small-abelian-category-with-a-generator-is-well-powered,
       def-well-powered-and-co-well-powered-category,
       thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects,
       thm-the-opposite-of-an-abelian-category-is-abelian,
       thm-special-adjoint-functor-theorem-objectwise-form]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Section 3.3"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
pipeline_run: frontier-22
---

## Statement

Let $\mathcal A$ be a cocomplete locally small abelian category with a
generator. Then $\mathcal A$ is well-powered and co-well-powered. In the
opposite category $\mathcal A^{\mathrm{op}}$, the object $G$ is coseparating.
If a supplied well-powering of $\mathcal A$ is given, taking cokernels supplies
a co-well-powering of $\mathcal A$, equivalently a supplied well-powering of
$\mathcal A^{\mathrm{op}}$. Thus $\mathcal A^{\mathrm{op}}$ supplies the
category-side data in the supplied-well-powering branch of the objectwise
special adjoint functor theorem. The target-category and continuity hypotheses
remain hypotheses on the particular functor to which that theorem is applied.

## Facts & Assumptions

**Given:** A cocomplete locally small abelian category $\mathcal A$ with a
generator $G$.

[L1] Such a category is well-powered
([[thm-a-locally-small-abelian-category-with-a-generator-is-well-powered]]).

[L2] The supplied-well-powering branch of objectwise SAFT requires a complete
locally small domain with a supplied small coseparating set and a supplied
well-powering; the target must be locally small and the functor must preserve
all small limits. ([[thm-special-adjoint-functor-theorem-objectwise-form]])

[L3] In an abelian category, subobjects and quotient objects correspond by
kernel and cokernel
([[thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects]]).

[L4] A generator is a separating object
([[def-generator-and-cogenerator-of-a-category]]).

[L5] The opposite of an abelian category is abelian.
([[thm-the-opposite-of-an-abelian-category-is-abelian]])

## Proof

**Proof technique:** direct.

1.1 By [L1], every object of $\mathcal A$ has a set of representative monomorphisms for its subobject classes. By [L3], taking cokernels transfers these to representative epimorphisms for all quotient-object classes. Thus $\mathcal A$ is both well-powered and co-well-powered. [L1, L3]

1.2 By [L5], $\mathcal A^{\mathrm{op}}$ is abelian, and cocompleteness of $\mathcal A$ becomes completeness of $\mathcal A^{\mathrm{op}}$. Local smallness is unchanged. The separating property of $G$ from [L4] becomes the coseparating property in the opposite category. [L4, L5, algebra]

2.1 A supplied well-powering of $\mathcal A$ gives a supplied family of representative monomorphisms. Applying cokernels objectwise using [L3] gives a supplied co-well-powering of $\mathcal A$, which is a supplied well-powering of $\mathcal A^{\mathrm{op}}$. Hence the domain-side hypotheses in branch 1 of [L2] hold for $\mathcal A^{\mathrm{op}}$. [L2, L3, step 1.1, step 1.2, construct]

3.1 Therefore the category supplies exactly the stated dual SAFT data. As [L2] requires, any application must still provide a locally small target and a functor preserving all small limits; those are not consequences of the present category-level hypotheses. [L2, step 2.1] ∎
