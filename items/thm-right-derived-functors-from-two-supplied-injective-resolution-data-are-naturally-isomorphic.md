---
id: thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic
kind: theorem
title: "Two supplied injective resolution data define naturally isomorphic right derived functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-right-derived-functors-relative-to-supplied-data-are-additive-functors, lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions, thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object, thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy, def-cochain-complex-in-an-abelian-category, thm-chain-homotopic-maps-induce-the-same-map-on-homology, prop-homology-respects-identities-and-composition]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $I$ and $J$ be supplied injective resolution data on the same domain, and
let $F:\mathcal A\to\mathcal B$ be an additive functor. For every
$n\in\mathbb Z$, the additive functors $R_I^nF$ and $R_J^nF$ are naturally
isomorphic.
## Facts & Assumptions

**Given:** A morphism $u:A\to B$ and an integer $n$.

[L1] The two constructions define additive functors
([[thm-right-derived-functors-relative-to-supplied-data-are-additive-functors]]).

[L2] The chosen injective resolutions of a fixed object are homotopy equivalent
under that object
([[thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object]]).

[L3] Two injective comparison maps extending the same morphism are
cochain-homotopic
([[thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]]).

[L4] A cochain complex is read as a reindexed chain complex, and chain-homotopy
invariance together with homology's compatibility with composition survives
that reindexing
([[def-cochain-complex-in-an-abelian-category]],
[[thm-chain-homotopic-maps-induce-the-same-map-on-homology]],
[[prop-homology-respects-identities-and-composition]]).

[L5] Comparison extensions exist for morphisms on the supplied injective data
([[lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions]]).

## Proof

**Proof technique:** direct.

1.1 Fix an object $A$. By [L2], there are comparison maps $c_A^\bullet:I^\bullet(A)\to J^\bullet(A)$ and $d_A^\bullet:J^\bullet(A)\to I^\bullet(A)$ whose composites are cochain- homotopic to the identities. Using [L4], these induce inverse isomorphisms $$\theta_{I,J}(A):R_I^nF(A)\xrightarrow{\sim}R_J^nF(A).$$ [L2, L4, given, construct]

2.1 For a morphism $u:A\to B$, choose comparison extensions $\widetilde u^I:I^\bullet(A)\to I^\bullet(B)$ and $\widetilde u^J:J^\bullet(A)\to J^\bullet(B)$ from [L5]. Both composites $c_B^\bullet\widetilde u^I$ and $\widetilde u^J c_A^\bullet$ extend $u$, so [L3] makes them cochain-homotopic. By [L4], their induced cohomology maps agree, which is exactly the naturality square $$\theta_{I,J}(B)\circ R_I^nF(u)=R_J^nF(u)\circ\theta_{I,J}(A).$$ [L3, L4, L5, step 1.1, algebra]

3.1 Steps 1.1 and 2.1 produce a natural isomorphism $R_I^nF\Rightarrow R_J^nF$, and [L1] records that both sides are additive functors. [L1, step 1.1, step 2.1] ∎
