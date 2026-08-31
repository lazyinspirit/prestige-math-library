---
id: lem-the-wedge-product-is-alternating-and-bilinear
kind: lemma
title: "The wedge product is alternating and bilinear"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-wedge-product-of-alternating-covectors]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

If $\alpha\in\operatorname{Alt}^k(V)$ and $\beta\in\operatorname{Alt}^\ell(V)$,
then $\alpha\wedge\beta$ is alternating of degree $k+\ell$, and the wedge
product is bilinear in $(\alpha,\beta)$.

## Facts & Assumptions

**Given:** Alternating covectors $\alpha,\alpha'\in\operatorname{Alt}^k(V)$, $\beta,\beta'\in\operatorname{Alt}^\ell(V)$, and scalars $a,b$.

[F1] The wedge product is the normalized alternation of the tensor product, equivalently the signed shuffle sum ([[def-wedge-product-of-alternating-covectors]]).

## Proof
**Proof technique:** direct.

1.1 By [F1], $\alpha\wedge\beta$ is obtained by applying the alternation operator to $\alpha\otimes\beta$. Alternation produces an alternating multilinear form, so $\alpha\wedge\beta\in\operatorname{Alt}^{k+\ell}(V)$. [F1, given]
1.2 Both tensor product and alternation are linear in each argument, so [F1] gives $$ (a\alpha+b\alpha')\wedge\beta=a(\alpha\wedge\beta)+b(\alpha'\wedge\beta), $$ and similarly in the second slot. [F1, given, algebra]
2.1 Therefore the wedge product is alternating and bilinear. [step 1.1, step 1.2] ∎