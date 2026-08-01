---
id: cor-g-to-the-group-order-is-identity
kind: corollary
title: "$g^{|G|}=e$ for every element $g$ of a finite group $G$"
status: published
origin: session
deps: [cor-order-of-element-divides-group-order, lem-order-characterisation, def-order-in-a-group, def-group-power, lem-group-power-laws, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
pipeline_run: null
---

## Statement

Let $G$ be a finite group with identity $e$. Then

$$g^{|G|}=e$$

for every $g\in G$.

## Facts & Assumptions

**Given:** A finite group $G$ with identity $e$ and an element $g\in G$.

[L1] The order $n=\operatorname{ord}(g)$ is finite and $\iota(n)$ divides $\iota(|G|)$ ([[cor-order-of-element-divides-group-order]], [[def-order-in-a-group]], [[lem-nat-embeds-int]]).

[L2] If $\operatorname{ord}(g)=n$, then for every integer $k$, $g^k=e$ if and only if $n\mid k$ ([[lem-order-characterisation]], [[def-group-power]], [[lem-group-power-laws]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\operatorname{ord}(g)$ divides $|G|$ after both naturals are embedded in $\mathbb Z$. [L1]

2.1 Applying [L2] with $k=\iota(|G|)$ gives $g^{|G|}=e$. [step 1.1, L2] ∎
