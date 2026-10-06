---
id: lem-abelian-scheme-base-change-and-products
kind: lemma
title: "Base change and products of abelian schemes"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-abelian-scheme
  - def-base-change-morphism-schemes
  - lem-flat-morphisms-stable-base-change
  - thm-smooth-morphisms-stable-base-change-composition
  - lem-proper-stable-base-change
  - lem-base-change-locally-finite-type-presentation
  - def-relative-dimension-smooth-morphism
  - lem-fibre-after-base-change
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (preliminary version 2012), Chapter 6 sections 1-3"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
---

## Statement

Assume AC, inherited from the smoothness and properness stability suppliers. Let $A\to S$ and $B\to S$ be abelian schemes over $S$ of relative dimensions $g_A,g_B$ ([[def-abelian-scheme]]), and let $S'\to S$ be a morphism ([[def-base-change-morphism-schemes]]). Then:

(a) the base change $A_{S'}=A\times_SS'\to S'$ is an abelian scheme of relative dimension $g_A$, with $S'$-group structure induced by that of $A$, and for $s'\in S'$ with image $s\in S$ the fibre $(A_{S'})_{s'}$ is the base change $A_s\times_{\kappa(s)}\kappa(s')$ of abelian varieties ([[lem-fibre-after-base-change]]);

(b) the product $A\times_SB\to S$ is an abelian scheme of relative dimension $g_A+g_B$ with the product group law;

(c) kernels of homomorphisms of abelian schemes commute with arbitrary base change by their fibre-product definition, and the base change of a finite locally free subgroup scheme is again finite locally free of the same rank.

Scheme-theoretic images are not asserted to commute with arbitrary base change.

## Facts & Assumptions

**Given:** AC and abelian schemes $A\to S$, $B\to S$ of relative dimensions $g_A,g_B$, and a morphism $S'\to S$.

[F1] An abelian scheme is a smooth proper finitely presented $S$-group scheme with connected geometric fibres of constant dimension ([[def-abelian-scheme]]); assuming AC for the named stability suppliers, smoothness, properness, local finite presentation, flatness and relative dimension are stable under base change and preserved by products ([[lem-flat-morphisms-stable-base-change]], [[thm-smooth-morphisms-stable-base-change-composition]], [[lem-proper-stable-base-change]], [[lem-base-change-locally-finite-type-presentation]], [[def-relative-dimension-smooth-morphism]]).

[F2] Fibres of a base change are computed by the fibre product of fibres ([[lem-fibre-after-base-change]]); the group operations of an $S$-group scheme base change to give the induced $S'$-group structure, and products inherit the componentwise group law.

## Proof

**Proof technique:** direct: check the defining properties of an abelian scheme after base change and for products.

1.1 The base change $A_{S'}\to S'$ is smooth, proper and locally of finite presentation by the stability statements in [F1]; its geometric fibres are base changes of geometric fibres of $A\to S$, hence nonempty and connected of dimension $g_A$, and the relative dimension is $g_A$. The base-changed group operations give an $S'$-group scheme structure. For a point $s'\mapsto s$ the fibre identification is the base-change compatibility of fibres in [F2]. [F1, F2, given, algebra]

1.2 For the product, $A\times_SB\to S$ is smooth, proper and locally of finite presentation, its geometric fibres are products of nonempty connected smooth proper schemes over an algebraically closed field, and a product of nonempty connected schemes over an algebraically closed field is connected (indeed the product of geometrically connected schemes over a field with a rational point in the appropriate sense is geometrically connected); the relative dimension is $g_A+g_B$. The componentwise group law makes it an $S$-group scheme. This proves (b). [F1, given, algebra]

2.1 Kernels of $S$-group scheme homomorphisms are defined by the fibre product with the unit section, so they commute with arbitrary base change by associativity of fibre products, as asserted in (c); a finite locally free subgroup scheme of rank $r$ pulls back to a finite locally free subgroup scheme of the same rank because finite locally free modules and isomorphisms pull back along the base change. Scheme-theoretic images are not claimed to commute with arbitrary base change, and nothing here asserts that. [F1, F2, step 1.1, algebra] ∎ 