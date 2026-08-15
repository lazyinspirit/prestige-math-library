---
id: lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime
kind: lemma
title: "A direct product of two finite cyclic groups is cyclic if and only if their orders are coprime"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-external-direct-product-of-groups, thm-external-direct-product-is-a-group, lem-order-characterisation, def-lcm, thm-gcd-lcm-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory, Lemma 2.5.7"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

If $C_m$ and $C_n$ are finite cyclic groups of orders $m,n\ge1$, then $C_m\times C_n$ is cyclic if and only if $\gcd(m,n)=1$.

## Facts & Assumptions

**Given:** Cyclic groups $C_m=\langle g\rangle$ and $C_n=\langle h\rangle$.

[L1] The external direct product uses componentwise multiplication ([[def-external-direct-product-of-groups]]) and is a group ([[thm-external-direct-product-is-a-group]]).

[L2] A power of an element of order $r$ is the identity exactly when its exponent is divisible by $r$ ([[lem-order-characterisation]]).

[L3] $\operatorname{lcm}(r,s)$ is the least positive common multiple of $r$ and $s$ ([[def-lcm]]).

[L4] For positive integers $m,n$, $\gcd(m,n)\operatorname{lcm}(m,n)=mn$ ([[thm-gcd-lcm-product]]).

## Proof

**Proof technique:** direct.

1.1 For $(x,y)\in C_m\times C_n$ with coordinate orders $r$ and $s$, [L1] and [L2] show that $(x,y)^t=(1,1)$ exactly when both $r\mid t$ and $s\mid t$; its order is therefore $\operatorname{lcm}(r,s)$ by [L3]. [L1, L2, L3]

2.1 If $\gcd(m,n)=1$, [L4] and step 1.1 give $\operatorname{ord}(g,h)=\operatorname{lcm}(m,n)=mn$, so $(g,h)$ generates the product of order $mn$. [step 1.1, L4, algebra]

3.1 Conversely, if the product is cyclic, a generator $(x,y)$ has order $mn$. Its coordinate orders divide $m$ and $n$, so step 1.1 gives $mn=\operatorname{lcm}(r,s)\le\operatorname{lcm}(m,n)\le mn$; hence $\operatorname{lcm}(m,n)=mn$, and [L4] gives $\gcd(m,n)=1$. [step 1.1, L2, L3, L4, algebra] ∎
