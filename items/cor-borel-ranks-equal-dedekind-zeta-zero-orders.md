---
id: cor-borel-ranks-equal-dedekind-zeta-zero-orders
kind: corollary
title: "Borel Ranks Equal the Negative Dedekind-Zeta Zero Orders"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-axiom-of-choice
  - thm-borel-ranks-of-higher-k-groups-of-number-fields
  - thm-dedekind-zeta-zero-orders-at-negative-integers
  - def-order-of-dedekind-zeta-zero-at-negative-integer
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Armand Borel, Stable real cohomology of arithmetic groups"
      url: "https://numdam.org/item/10.24033/asens.1269.pdf"
      locator: "Proposition 12.2, printed pp. 271–272."
    - title: "Armand Borel, Cohomologie de SL_n et valeurs de fonctions zêta aux points entiers"
      url: "https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0.pdf"
      locator: "§6.1, printed p. 631, identifies the dimension $d_m$ with the zero order at $-m$."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field and $m\ge1$. Then

$$\operatorname{rank}_{\mathbb Z}K_{2m+1}(\mathcal O_K)=\operatorname{ord}_{s=-m}\zeta_K(s).$$

## Statement references

[[thm-borel-ranks-of-higher-k-groups-of-number-fields]]

[[thm-dedekind-zeta-zero-orders-at-negative-integers]]

[Armand Borel, *Stable real cohomology of arithmetic groups*, Proposition 12.2](https://numdam.org/item/10.24033/asens.1269.pdf)

## Facts & Assumptions

**Given:** AC; a number field $K$ and an integer $m\ge1$.

[A1] [[def-axiom-of-choice]]: the zeta continuation and zero-order input is used on the AC branch.

[F1] [[thm-borel-ranks-of-higher-k-groups-of-number-fields]]: the rank of $K_{2m+1}(\mathcal O_K)$ is $r_1+r_2$ for even $m$ and $r_2$ for odd $m$.

[F2] [[thm-dedekind-zeta-zero-orders-at-negative-integers]]: the order of $\zeta_K$ at $-m$ is $r_1+r_2$ for even $m$ and $r_2$ for odd $m$.

## Proof

1.1 If $m$ is even, [F1] and [F2] give both quantities as $r_1+r_2$. If $m$ is odd, they give both quantities as $r_2$. These two parity cases exhaust all integers $m\ge1$, proving the equality on the assumptions [A1]. [A1, F1, F2, given, cases] ∎

## Escalation

The parity comparison is complete, but its Borel-rank input [F1] is an escalated theorem whose stable-cohomology proof is not locally supplied. Until that prerequisite has a complete proof, this corollary remains escalated and must not be used as a ready supplier.
