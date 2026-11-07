---
id: def-johnston-nickel-canonical-eimc-complex
kind: definition
title: Canonical Étale Complex for the Equivariant Iwasawa Main Conjecture
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-iwasawa-algebra-of-profinite-group
  - def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: §5.4, printed pp. 14–15.
verification: {}
---

## Definition

Let $p$ be odd, let $K$ be totally real, let $L/K$ be admissible, and put $G=\operatorname{Gal}(L/K)$. For a finite set $S$ of places of $K$ containing the places ramified in $L/K$ and all infinite places, let $\mathcal O_{L,S}$ be the ring of integers of $L$ with the primes above $S$ inverted. The canonical complex is
$$C_S^\bullet(L/K):=R\operatorname{Hom}_{\mathbb Z_p}\!\left(R\Gamma_{\acute{e}t}(\operatorname{Spec}(\mathcal O_{L,S}),\mathbb Q_p/\mathbb Z_p),\mathbb Q_p/\mathbb Z_p\right),$$
with the left $\Lambda(G)$-action induced by the Galois action of $G$ on the étale site of $\operatorname{Spec}(\mathcal O_{L,S})$ and the resulting derived global-sections complex. On the degree-$(-1)$ cohomology group, this action agrees with conjugation on the maximal abelian pro-$p$ extension of $L$ unramified outside $S$. This definition alone does not assert that $C_S^\bullet$ is perfect or that it defines a relative $K_0$-class.

## Definition references

[Johnston and Nickel, §5.4](https://arxiv.org/pdf/2010.03186)

[[def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf]]
