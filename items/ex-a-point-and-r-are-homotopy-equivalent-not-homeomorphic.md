---
id: ex-a-point-and-r-are-homotopy-equivalent-not-homeomorphic
kind: example
title: "A one-point space and $\\mathbb{R}$ are homotopy equivalent but not homeomorphic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-homotopy-equivalent-spaces-are-homeomorphic, ex-intervals-and-euclidean-spaces-are-contractible, thm-r-uncountable, def-homotopy-equivalence, def-homeomorphism-and-open-maps]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Example

Let $P=\{p\}$ be a one-point space. The maps $i:P\to\mathbb R$, $i(p)=0$, and $q:\mathbb R\to P$ exhibit $P\simeq\mathbb R$, although the spaces are not homeomorphic.

## Facts & Assumptions

**Given:** The one-point space $P$ and the real line.

[L1] The real line contracts to $0$ by $H(x,t)=(1-t)x$ ([[ex-intervals-and-euclidean-spaces-are-contractible]]).

[L2] A homotopy equivalence has a homotopy inverse whose composites are homotopic to the identity maps ([[def-homotopy-equivalence]]).

[L3] A homeomorphism is a bijection, and $\mathbb R$ is uncountable ([[def-homeomorphism-and-open-maps]], [[thm-r-uncountable]]).

[L4] The refutation in [[fs-homotopy-equivalent-spaces-are-homeomorphic]] uses this same pair as its counterexample.

## Verification

**Proof technique:** direct.

1.1 Both $i$ and $q$ are continuous, since the preimage of any open set is either empty or the entire one-point source or target preimage. [construct]

1.2 No bijection exists from the finite set $P$ to the uncountable set $\mathbb R$, so no homeomorphism exists by [L3]. [L3]

2.1 One has $q\circ i=\operatorname{id}_P$ and $i\circ q=c_0\simeq\operatorname{id}_{\mathbb R}$ by [L1]. Hence $i$ and $q$ are homotopy inverses by [L2]. [step 1.1, L1, L2]

3.1 Steps 2.1 and 1.2 verify the claimed contrast, agreeing with [L4]. [step 2.1, step 1.2, L4] ∎
