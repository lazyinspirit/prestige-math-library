---
id: cex-a-bijection-of-underlying-hom-sets-does-not-establish-a-cotensor
kind: counterexample
title: "A bijection on underlying hom-sets need not exhibit a cotensor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cotensor-and-tensor, rem-the-underlying-category-can-lose-information]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equation (3.45)"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.7"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement refuted

A bijection between the underlying hom-sets in the defining formula of a
cotensor is enough to prove that the object is a cotensor.

## Facts & Assumptions

**Given:** The Cat-enriched setting, the discrete two-object category $X$, and
the one-object category $E$ whose endomorphism monoid is $(\mathbb N,+)$.

[L1] A cotensor requires an isomorphism of enriched hom-objects, not merely a
bijection of their underlying sets ([[def-cotensor-and-tensor]]).

[L2] The underlying-category construction can forget morphisms inside a
hom-object ([[rem-the-underlying-category-can-lose-information]]).

## Counterexample

**Proof technique:** direct.

1.1 Give $E$ its strict monoidal structure induced by addition: it has one object, both composition and tensor of endomorphisms are addition in $\mathbb N$, and commutativity gives the interchange law. Hence there is a one-object $\mathbf{Cat}$-enriched category $\mathcal B$ with sole object $C$, hom-category $\mathcal B(C,C)=E$, and enriched composition given by this tensor. [given, construct]

2.1 The underlying category $\mathcal B_0$ has one object and one morphism, since the objects of $E$ form a singleton. Thus, for its only test object $B=C$, there is a bijection $$\mathcal B_0(B,C)\cong\mathbf{Cat}_0(X,\mathcal B(B,C)):$$ both sides are singletons, because a functor from the discrete two-object category $X$ to the one-object category $E$ is unique on objects and identities. This bijection is automatically natural in the one-object category $\mathcal B_0$. [L2, step 1.1]

3.1 If $C$ were its own cotensor by $X$, [L1] would require an isomorphism of categories $$E=\mathcal B(C,C)\cong[X,E]\cong E\times E.$$ But the endomorphism monoids of the unique objects are respectively $\mathbb N$ and $\mathbb N^2$, which are not isomorphic: the former has one indecomposable nonzero generator and the latter has two. Hence the natural underlying hom-set bijection of step 2.1 does not exhibit a cotensor. [L1, step 2.1] ∎
