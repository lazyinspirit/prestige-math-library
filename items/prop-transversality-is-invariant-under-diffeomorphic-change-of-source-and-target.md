---
id: prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target
kind: proposition
title: "Transversality is invariant under diffeomorphic change of source and target"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-transverse-smooth-maps,
       def-a-smooth-map-transverse-to-an-embedded-submanifold,
       thm-chain-rule-for-differentials-of-smooth-maps,
       cor-the-differential-of-a-diffeomorphism-is-an-isomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $\Phi:M'\to M$ and $\Psi:N\to N'$ be diffeomorphisms.

1. If $F:M\to N$ and $G:P\to N$ are transverse, then
   $\Psi\circ F\circ\Phi$ and $\Psi\circ G$ are transverse.
2. If $Z\subseteq N$ is an embedded submanifold and $F\pitchfork Z$, then
   $\Psi\circ F\circ\Phi\pitchfork \Psi(Z)$.

## Facts & Assumptions

**Given:** Diffeomorphisms $\Phi$ and $\Psi$ as above.

[F1] Transversality is defined by spanning conditions on differential images and target tangent spaces ([[def-transverse-smooth-maps]], [[def-a-smooth-map-transverse-to-an-embedded-submanifold]]).

[L1] Differentials obey the chain rule, and the differential of a diffeomorphism is an isomorphism ([[thm-chain-rule-for-differentials-of-smooth-maps]], [[cor-the-differential-of-a-diffeomorphism-is-an-isomorphism]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], the differentials $d\Phi$, $d\Psi$, and their inverses are linear isomorphisms. Applying the chain rule to the composite maps multiplies the original differentials by these isomorphisms on the source and target sides. [L1, given]

2.1 A linear isomorphism preserves the property that a sum of subspaces is the whole target space. Therefore the spanning conditions in [F1] hold for the original maps exactly when they hold for the conjugated maps. [F1, step 1.1, algebra]

3.1 Hence both notions of transversality are invariant under diffeomorphic changes of source and target. [step 2.1] ∎