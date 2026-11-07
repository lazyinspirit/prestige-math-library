---
id: thm-soule-p-adic-chern-class-isomorphism-negative-degree
kind: theorem
title: Soulé p-Adic Chern Class Isomorphisms in Negative Degrees
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-higher-quillen-k-group-of-ring-of-integers
  - def-tate-twist-of-an-l-adic-sheaf
  - def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Introduction, equation (1.2), printed p. 4; proof of Corollary 12.6, printed pp. 38–39.
verification: {}
---

## Statement

Let $p$ be an odd prime, let $L$ be a number field, let $S$ contain all places of $L$ above $p$, and let $r<0$. For $i=0,1$, the canonical $G$-equivariant $p$-adic Chern class map
$$\mathbb Z_p\otimes_{\mathbb Z}K_{i-2r}(\mathcal O_{L,S})\longrightarrow H_{\acute{e}t}^{2-i}(\operatorname{Spec}(\mathcal O_{L,S}),\mathbb Z_p(1-r))$$
is an isomorphism. Here $K_n$ is the higher Quillen $K$-group, and the right side is ordinary étale cohomology with the indicated Tate twist.

## Statement references

[Johnston and Nickel, equation (1.2) and proof of Corollary 12.6](https://arxiv.org/pdf/2010.03186)

[[def-higher-quillen-k-group-of-ring-of-integers]]

[[def-tate-twist-of-an-l-adic-sheaf]]

[[def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf]]

## Proof status

The cited result combines Soulé's Chern class theorem with the norm residue isomorphism theorem. That deep local proof has not been reconstructed in this batch; this established result remains an authoring obligation and is not treated as a proved supplier.
