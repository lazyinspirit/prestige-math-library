---
id: cor-divisibility-conditions-for-a-two-design
kind: corollary
title: "The standard divisibility conditions for a $2$-design"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-counting-identities-for-a-two-design]
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Noam D. Elkies, Math 155 notes: Jan. 29"
      url: "https://people.math.harvard.edu/~elkies/M155.09/jan29"
---

## Statement

If a $2$-$(v,k,\lambda)$ design exists, then
$$r=\frac{\lambda(v-1)}{k-1}\in\mathbb N,\qquad b=\frac{v\lambda(v-1)}{k(k-1)}\in\mathbb N.$$
In particular, $k-1$ divides $\lambda(v-1)$ and $k(k-1)$ divides
$v\lambda(v-1)$.

## Facts & Assumptions

**Given:** A $2$-$(v,k,\lambda)$ design.

[L1] The counting identities are $bk=vr$ and $r(k-1)=\lambda(v-1)$ ([[thm-counting-identities-for-a-two-design]]).

## Proof

**Proof technique:** direct.

1.1 Solving the second identity of [L1] gives $r=\lambda(v-1)/(k-1)$, so $k-1$ divides $\lambda(v-1)$. [L1, algebra]

2.1 Substituting step 1.1 into the first identity of [L1] gives $b=v\lambda(v-1)/(k(k-1))$, so $k(k-1)$ divides $v\lambda(v-1)$. [step 1.1, L1, algebra] ∎
