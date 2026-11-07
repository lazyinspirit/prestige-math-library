---
id: def-truncated-etale-complex-for-tate-twists
kind: definition
title: Truncated Étale Cohomology Complex for Tate Twists
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf
  - def-tate-twist-of-an-l-adic-sheaf
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: §12.2, printed pp. 35–36.
verification: {}
---

## Definition

Let $K$ be a number field, let $S,T$ be finite disjoint sets of places of $K$ with $S$ containing the infinite places, and let $M$ be a $p$-adic étale sheaf on $\operatorname{Spec}(\mathcal O_{K,S})$. For a place $v\in T$, write $K(v)$ for its residue field. Define
$$R\Gamma_T(\mathcal O_{K,S},M):=\operatorname{Cone}\!\left(R\Gamma_{\acute{e}t}(\operatorname{Spec}(\mathcal O_{K,S}),M)\longrightarrow\bigoplus_{v\in T}R\Gamma_{\acute{e}t}(\operatorname{Spec}(K(v)),M)\right)[-1].$$
For an integer $r$, the notation $H_T^i(\mathcal O_{K,S},\mathbb Z_p(1-r))$ means the degree-$i$ cohomology of this complex with the indicated Tate-twisted coefficient system.

## Definition references

[Johnston and Nickel, §12.2](https://arxiv.org/pdf/2010.03186)

[[def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf]]

[[def-tate-twist-of-an-l-adic-sheaf]]
