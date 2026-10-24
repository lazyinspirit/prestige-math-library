---
id: thm-external-semidirect-product-is-a-group
kind: theorem
title: ' The semidirect-product multiplication makes $N\times H$ a group'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-external-semidirect-product, def-action-by-automorphisms, lem-group-homomorphism-basic-properties]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Statement

Let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms. The multiplication

$$(n,h)(n',h')=\bigl(n\alpha_h(n'),hh'\bigr)$$

makes $N\times H$ a group with identity $(1_N,1_H)$ and inverse

$$(n,h)^{-1}=\bigl(\alpha_{h^{-1}}(n^{-1}),h^{-1}\bigr).$$

## Facts & Assumptions

**Given:** Groups $N,H$ and a homomorphism $\alpha:H\to\operatorname{Aut}(N)$.

[L1] The external semidirect-product multiplication is $(n,h)(n',h')=(n\alpha_h(n'),hh')$ ([[def-external-semidirect-product]]).

[L2] An action by automorphisms satisfies $\alpha_{hh'}=\alpha_h\circ\alpha_{h'}$ and $\alpha_1=\operatorname{id}_N$, with every $\alpha_h$ an automorphism of $N$ ([[def-action-by-automorphisms]]).

[L3] A homomorphism preserves identities and inverses ([[lem-group-homomorphism-basic-properties]]).

## Proof

**Proof technique:** direct.

1.1 For three pairs, multiplication in either parenthesisation gives $\bigl(n\alpha_h(n')\alpha_{hh'}(n''),hh'h''\bigr)$ because $\alpha_h$ is a homomorphism and $\alpha_{hh'}=\alpha_h\alpha_{h'}$. Thus the operation is associative. [L1, L2, algebra]

1.2 Since $\alpha_1$ is the identity and every $\alpha_h$ preserves $1_N$, the pair $(1_N,1_H)$ is a two-sided identity. [L1, L2, L3]

2.1 Put $y=\alpha_{h^{-1}}(n^{-1})$. Then $(n,h)(y,h^{-1})=(n\alpha_h(y),1_H)=(1_N,1_H)$ and $(y,h^{-1})(n,h)=(y\alpha_{h^{-1}}(n),1_H)=(1_N,1_H)$. Hence the displayed pair is the two-sided inverse. [L1, L2, L3, algebra] ∎
