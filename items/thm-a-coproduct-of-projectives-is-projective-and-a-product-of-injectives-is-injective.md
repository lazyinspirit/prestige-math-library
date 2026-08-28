---
id: thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective
kind: theorem
title: "A coproduct of projectives is projective and a product of injectives is injective"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-axioms-ab3-and-ab3-star, thm-projective-object-characterisations, thm-injective-object-characterisations]
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

Assume an abelian category satisfies AB3 and AB3*.

1. Every finite coproduct of projective objects is projective, and every finite
   product of injective objects is injective.
2. For an arbitrary small family, the same conclusion holds provided one may
   choose one lift or one extension for each index in each lifting problem; in
   particular it holds under the Axiom of Choice.

## Facts & Assumptions

**Given:** An abelian category satisfying AB3 and AB3*, and small families $(P_i)$ of projective objects and $(I_i)$ of injective objects.

[L1] AB3 and AB3* supply the required coproducts and products ([[def-the-axioms-ab3-and-ab3-star]]).

[L2] Projective objects are characterized by the lifting property against epimorphisms, and injective objects dually by the extension property against monomorphisms ([[thm-projective-object-characterisations]], [[thm-injective-object-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], let $P=\coprod_i P_i$. Given an epimorphism $q:E\twoheadrightarrow M$ and a morphism $f:P\to M$, write $f_i=f\iota_i$ on the coproduct summands. Because each $P_i$ is projective, [L2] gives a lift $\widetilde f_i:P_i\to E$ of $f_i$. For a finite family these lifts are chosen explicitly; for an arbitrary small family they are exactly the stated choice-dependent data. The coproduct universal property then assembles the $\widetilde f_i$ into a lift $\widetilde f:P\to E$, so $P$ is projective. [L1, L2, choose, construct]

1.2 The injective claim is dual. By [L1], let $I=\prod_i I_i$. Given a monomorphism $m:M\rightarrowtail E$ and a morphism $f:M\to I$, write $f_i=\pi_i f$. Each injective object $I_i$ admits an extension $\widetilde f_i:E\to I_i$ by [L2]. The product universal property assembles them into $\widetilde f:E\to I$ extending $f$. So $I$ is injective. [L1, L2, choose, construct]

2.1 Steps 1.1 and 1.2 prove the finite case without extra choice and the arbitrary small-family case with the stated choice boundary. [step 1.1, step 1.2] ∎
