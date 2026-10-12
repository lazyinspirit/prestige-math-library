---
id: "lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences"
kind: lemma
title: "Acyclic product fibers stabilize bounded constructible pullback Hom"
status: draft
origin: session
deps: ["lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model", "lem-complex-algebraic-stratifications-have-finite-conical-cochain-models", "lem-field-module-sheaves-have-injective-derived-models", "thm-inverse-direct-image-adjunction", "def-canonical-t-structure-on-a-derived-category"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bernstein\u2013Lunts, Equivariant Sheaves and Functors, relevant full Part I proof text"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
proof_strategy: direct
---

## Statement

Assume AC. Let $f:Y\to S$ be a locally trivial bundle in the stated finite constructible local-product setting, with nonempty connected finite-type smooth fiber $F$. Suppose its actual constant-sheaf cohomology is $k$ in degree zero and vanishes in degrees $1,\ldots,r$. For $B\in D_c^{\ge b}(S;k)$ the cone of $B\to Rf_*f^*B$ belongs to $D^{\ge b+r+1}$. For $A\in D_c^{\le a}$, pullback gives an isomorphism $\operatorname{Hom}(A,B[m])\cong\operatorname{Hom}(f^*A,f^*B[m])$ when $m\le b+r-a$. It is fully faithful on $D_c^{[b,a]}$ if $r\ge a-b$. Its image is characterized by the counit $f^*\tau^{\le a}Rf_*C\to C$ being an isomorphism and is closed under direct summands. Extension closure is asserted only for the stronger bound $r\ge a-b+1$.

## Facts & Assumptions

**Given:** The spaces, coefficients, ordinary bounds and maps specified above; AC where stated.

[F1] The exact local supplier contract of [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]] is used with the hypotheses explicitly stated in its claim.

[F2] The exact local supplier contract of [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]] is used with the hypotheses explicitly stated in its claim.

[F3] The exact local supplier contract of [[lem-field-module-sheaves-have-injective-derived-models]] is used with the hypotheses explicitly stated in its claim.

[F4] The exact local supplier contract of [[thm-inverse-direct-image-adjunction]] is used with the hypotheses explicitly stated in its claim.

[F5] The exact local supplier contract of [[def-canonical-t-structure-on-a-derived-category]] is used with the hypotheses explicitly stated in its claim.

## Proof

1.1 For algebraically constructible B, choose a common finite conical triangulation on a product chart of S and a finite CW model of F. The ordinary constructible sheaf/cochain comparison identifies Rf_*f*B locally with the tensor product of the local cochain model of B and C*(F;k). This comparison is natural under restriction and identifies the unit with B⊗(k→C*(F;k)). The cone of k→C*(F;k) has cohomology in degrees≥r+1, so its tensor with B≥b has cohomology≥b+r+1. This directly proves the bound for all constructible complexes, without the all-sheaf product argument above. This is the version used for native KLR proof contracts; full all-sheaf universality requires its stated stronger comparison. No local product splitting is asserted to glue to a global derived splitting: the Stiefel bundle can have nonzero transgression. [given, F1, F2, F3, F4, F5]

2.1 The local unit-cone calculation glues the inequality because cohomological vanishing is local. In the triangle B→Rf_*f*B→C, C≥b+r+1. If m≤b+r−a then C[m]≥a+1 and C[m−1]≥a+2, so both Hom(A,C[m]) and Hom(A,C[m−1]) vanish by the ordinary t-structure. The long exact sequence and derived adjunction give the displayed isomorphism. For interval I=[b,a], set α=τ≤a Rf_*. The unit B→α f*B is an isomorphism on D^I. The counit f*αC→C is an isomorphism on objects pulled from D^I, by the adjunction triangle identity. Conversely this counit exhibits C as such a pullback whenever it is an isomorphism. This characterization proves closure under direct summands. If r≥a−b+1, the degree-one Hom comparison also lifts the connecting morphism C→A[1] of an extension whose end terms lie in the interval; its cone proves extension closure. At r=a−b that degree-one lift need not hold, so extension closure is not used. The degree-zero ring comparison and direct-summand closure remain valid at r=a−b. All maps here are the actual adjunction maps, so Hom comparison preserves composition. [given, F1, F2, F3, F4, F5] ∎

## Source notes

This is an authored research draft with a local proof from the exact named suppliers. Its ordinary algebraic triangulation, support/duality and source prerequisites retain their own current proof status. No independent audit, native verdict, readiness or gate pass is asserted. The durable construction and actual source readings are recorded in the constructible packet and proof notes.
