---
id: lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products
kind: lemma
title: "Actions changed by automorphisms of the kernel and complement give isomorphic semidirect products"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-external-semidirect-product, thm-external-semidirect-product-is-a-group, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Statement

Let $\alpha,β:H\to\operatorname{Aut}(N)$ be actions. If $u\in\operatorname{Aut}(N)$ and $v\in\operatorname{Aut}(H)$ satisfy

$$\beta_{v(h)}=u\alpha_hu^{-1}\qquad(h\in H),$$

then

$$N\rtimes_\alpha H\cong N\rtimes_\beta H$$

by $(n,h)\mapsto(u(n),v(h))$.

## Facts & Assumptions

**Given:** Actions $\alpha,β$ and automorphisms $u,v$ satisfying the displayed compatibility.

[L1] The multiplication in $N\rtimes_\alpha H$ is $(n,h)(n',h')=(n\alpha_h(n'),hh')$ ([[def-external-semidirect-product]]).

[L2] Both semidirect products are groups ([[thm-external-semidirect-product-is-a-group]]).

[L3] A bijective homomorphism is an isomorphism ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 Let $F(n,h)=(u(n),v(h))$. Then $F((n,h)(n',h'))=\bigl(u(n)u(\alpha_h(n')),v(h)v(h')\bigr)$. The compatibility gives $u\alpha_h=\beta_{v(h)}u$, so this is $F(n,h)F(n',h')$ under the $\beta$ multiplication. Thus $F$ is a homomorphism. [L1, algebra]

2.1 The map $(m,k)\mapsto(u^{-1}(m),v^{-1}(k))$ is the set-theoretic inverse of $F$. Therefore $F$ is bijective and is an isomorphism by [L2] and [L3]. [step 1.1, L2, L3] ∎
