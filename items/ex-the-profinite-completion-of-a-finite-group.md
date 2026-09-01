---
id: ex-the-profinite-completion-of-a-finite-group
kind: example
title: "A finite group is canonically isomorphic to its profinite completion"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-profinite-completion-of-an-abstract-group, thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion, thm-universal-property-of-profinite-completion, cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite]
proof_strategy: "direct"
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Example

A finite group is canonically isomorphic to its profinite completion.

## Facts & Assumptions

**Given:** A finite group $G$.

[L1] The profinite completion is initial among continuous homomorphisms from $G$
into profinite groups ([[thm-universal-property-of-profinite-completion]]).

[L2] The canonical map is injective exactly when the group is residually finite,
and its image is dense ([[cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite]], [[thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion]]).

## Verification

**Proof technique:** direct.

1.1 The finite group $G$ is residually finite because the identity subgroup has finite index. Hence [L2] makes the canonical map $\iota_G:G\to\widehat G$ injective. [L2, given]

2.1 Endow $G$ with the discrete topology, so $G$ itself is profinite. The identity map $G\to G$ is continuous, and [L1] gives a unique continuous homomorphism $\widehat G\to G$ left-inverse to $\iota_G$. Since $\iota_G[G]$ is dense by [L2] and finite subsets of a Hausdorff space are closed, the image of $\iota_G$ must be all of $\widehat G$. Therefore $\iota_G$ is an isomorphism. [L1, L2, step 1.1, construct] ∎
