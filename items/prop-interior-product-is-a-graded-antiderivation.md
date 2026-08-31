---
id: prop-interior-product-is-a-graded-antiderivation
kind: proposition
title: "Interior product is a graded antiderivation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-interior-product-on-alternating-covectors,
       def-wedge-product-of-alternating-covectors]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

If $\alpha\in\operatorname{Alt}^k(V)$, $\beta\in\operatorname{Alt}^\ell(V)$,
and $v\in V$, then

$$
\iota_v(\alpha\wedge\beta)=\iota_v\alpha\wedge\beta+(-1)^k\alpha\wedge\iota_v\beta.
$$

## Facts & Assumptions

**Given:** Alternating covectors $\alpha,\beta$ of degrees $k,\ell$ and a vector $v\in V$.

[F1] Interior product inserts $v$ into the first slot ([[def-interior-product-on-alternating-covectors]]).

[F2] The wedge product is the signed shuffle sum ([[def-wedge-product-of-alternating-covectors]]).

## Proof
**Proof technique:** direct.

1.1 Evaluate both sides on $(v_2,\ldots,v_{k+\ell})$. By [F2], the terms in $(\alpha\wedge\beta)(v,v_2,\ldots,v_{k+\ell})$ split into two groups: those where $v$ lands among the $k$ arguments sent to $\alpha$, and those where it lands among the $\ell$ arguments sent to $\beta$. [F2, given]

2.1 The first group is exactly $(\iota_v\alpha)\wedge\beta$ by [F1]. To move $v$ into the first slot of $\beta$ in the second group, it must cross the $k$ slots occupied by $\alpha$, which contributes the sign $(-1)^k$; that group is therefore $(-1)^k\alpha\wedge\iota_v\beta$. [F1, F2, step 1.1, algebra]

3.1 Summing the two groups gives the claimed formula, so interior product is a graded antiderivation. [step 2.1] ∎