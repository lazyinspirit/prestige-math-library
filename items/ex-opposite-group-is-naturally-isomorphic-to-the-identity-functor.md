---
id: ex-opposite-group-is-naturally-isomorphic-to-the-identity-functor
kind: example
title: "The opposite-group functor is naturally isomorphic to the identity functor by inversion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-opposite-category, def-natural-isomorphism, prop-natural-isomorphisms-are-componentwise-isomorphisms, prop-groups-and-homomorphisms-form-category-grp, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Exercise 1.4.i"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Reversing multiplication defines an endofunctor on groups, and inversion gives
a natural isomorphism from the identity functor to it.

## Facts & Assumptions

**Given:** A group $G$ and group homomorphisms.

[L1] Groups and homomorphisms form $\mathbf{Grp}$, and group isomorphisms are bijective homomorphisms ([[prop-groups-and-homomorphisms-form-category-grp]], [[def-group-isomorphism-and-automorphism]]).

[L2] Opposite composition reverses the order ([[def-opposite-category]]); a natural isomorphism is a natural transformation with a two-sided inverse natural transformation ([[def-natural-isomorphism]]), which holds exactly when every component is an isomorphism ([[prop-natural-isomorphisms-are-componentwise-isomorphisms]]).

## Verification

**Proof technique:** direct.

1.1 Let $G^{\mathrm{op}}$ have the same set and identity as $G$, with $a\star b=ba$. A homomorphism $f:G\to H$ is also a homomorphism $G^{\mathrm{op}}\to H^{\mathrm{op}}$, since $f(a\star b)=f(b)f(a)=f(a)\star f(b)$. Thus $G\mapsto G^{\mathrm{op}}$ defines an endofunctor $O$ on $\mathbf{Grp}$. [L1, L2]

1.2 Define $\nu_G:G\to G^{\mathrm{op}}$ by $\nu_G(a)=a^{-1}$. Then $\nu_G(ab)=b^{-1}a^{-1}=\nu_G(a)\star\nu_G(b)$, and $\nu_G$ is its own inverse as a set map, so it is a group isomorphism. [L1]

2.1 Every homomorphism preserves inverses, so for $f:G\to H$ one has $O(f)\nu_G(a)=f(a^{-1})=f(a)^{-1}=\nu_Hf(a)$. Hence the component square commutes. [step 1.1, step 1.2]

3.1 The isomorphisms $\nu_G$ are natural by step 2.1. Therefore inversion defines a natural isomorphism $1_{\mathbf{Grp}}\cong O$. [step 2.1, L2] ∎
