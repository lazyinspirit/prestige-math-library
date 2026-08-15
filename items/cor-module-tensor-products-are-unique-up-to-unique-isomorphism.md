---
id: cor-module-tensor-products-are-unique-up-to-unique-isomorphism
kind: corollary
title: "Tensor products are unique up to a unique isomorphism carrying elementary tensors to elementary tensors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-module-tensor-products]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
pipeline_run: null
---

## Statement

Let $T,T'$ be abelian groups equipped with balanced maps $\tau:M\times N\to T$ and $\tau':M\times N\to T'$, and suppose that each pair has the universal property of [[thm-universal-property-of-module-tensor-products]]. Then there is a unique group isomorphism $u:T\to T'$ such that $u\circ\tau=\tau'$. Its inverse is the unique map $v:T'\to T$ with $v\circ\tau'=\tau$.

## Facts & Assumptions

**Given:** Two representing pairs $(T,\tau)$ and $(T',\tau')$ for balanced maps out of $M\times N$.

[L1] For any balanced map from $M\times N$ into an abelian group, a representing pair supplies a unique group homomorphism through which that map factors ([[thm-universal-property-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] for $(T,\tau)$ to the balanced map $\tau'$ and for $(T',\tau')$ to $\tau$; this gives unique homomorphisms $u:T\to T'$ and $v:T'\to T$ with $u\tau=\tau'$ and $v\tau'=\tau$. [given, L1]

2.1 Both $v\circ u$ and $\operatorname{id}_T$ compose with $\tau$ to give $\tau$, so uniqueness in [L1] gives $v\circ u=\operatorname{id}_T$; similarly $u\circ v=\operatorname{id}_{T'}$. [step 1.1, L1]

3.1 Thus $u$ is an isomorphism with inverse $v$, and the same uniqueness clause shows that no other isomorphism carrying $\tau$ to $\tau'$ exists. [step 2.1, L1] ∎
