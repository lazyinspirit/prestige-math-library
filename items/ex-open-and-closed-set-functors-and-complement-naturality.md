---
id: ex-open-and-closed-set-functors-and-complement-naturality
kind: example
title: "Open-set and closed-set functors on $\\mathbf{Top}^{\\mathrm{op}}$ are naturally isomorphic by complements"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-functor-and-contravariant-functor, def-natural-isomorphism, prop-natural-isomorphisms-are-componentwise-isomorphisms, prop-topological-spaces-and-continuous-maps-form-category-top, prop-posets-and-monotone-maps-form-category-poset, def-topological-space, def-continuous-map-top, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 1.4.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Inverse image makes open and closed subsets contravariant in a space. Ordering
closed subsets by reverse inclusion makes complementation a natural
isomorphism between the resulting poset-valued functors.

## Facts & Assumptions

**Given:** Topological spaces and continuous maps.

[L1] Continuous inverse images preserve open and closed sets ([[def-topological-space]], [[def-continuous-map-top]], [[def-image-and-preimage-under-a-relation]]).

[L2] Topological spaces and posets form categories, and contravariant functors are functors on the opposite category ([[prop-topological-spaces-and-continuous-maps-form-category-top]], [[prop-posets-and-monotone-maps-form-category-poset]], [[def-functor-and-contravariant-functor]]).

[L3] A natural isomorphism is a natural transformation with a two-sided inverse natural transformation ([[def-natural-isomorphism]]), and this holds exactly when every component is an isomorphism ([[prop-natural-isomorphisms-are-componentwise-isomorphisms]]).

## Verification

**Proof technique:** direct.

1.1 Let $\mathcal O(X)$ be the open subsets of $X$ ordered by inclusion, and let $\mathcal C(X)$ be the closed subsets ordered by reverse inclusion. For $f:X\to Y$, assign to either kind of subset its inverse image under $f$. [L1]

2.1 Inverse image is monotone for inclusion and for reverse inclusion, preserves identity functions, and satisfies $(gf)^{-1}=f^{-1}g^{-1}$. Thus $\mathcal O,\mathcal C:\mathbf{Top}^{\mathrm{op}}\to\mathbf{Poset}$ are functors. [step 1.1, L1, L2]

2.2 Complementation $c_X:\mathcal O(X)\to\mathcal C(X)$ is monotone because $U\subseteq V$ implies $X\setminus U\supseteq X\setminus V$. It is its own order-isomorphism inverse. [step 1.1]

2.3 For every continuous $f:X\to Y$ and open $U\subseteq Y$, the identity $X\setminus f^{-1}(U)=f^{-1}(Y\setminus U)$ says exactly that the complement square commutes. [step 1.1, L1]

3.1 The componentwise order isomorphisms of step 2.2 are natural by step 2.3. Hence complementation gives $\mathcal O\cong\mathcal C$ as functors $\mathbf{Top}^{\mathrm{op}}\to\mathbf{Poset}$. [step 2.1, step 2.2, step 2.3, L3] ∎
