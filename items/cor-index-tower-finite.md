---
id: cor-index-tower-finite
kind: corollary
title: "For $K\\le H\\le G$ with $G$ finite, $[G:K]=[G:H][H:K]$"
status: published
origin: session
deps: [thm-lagrange, def-index, def-order-in-a-group, def-subgroup, lem-nat-mult-associative, lem-nat-mult-cancellative]
justified_by: []
aliases: []
landmark: false
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

If $K\le H\le G$ and $G$ is finite, then all three indices are finite and

$$[G:K]=[G:H][H:K].$$

## Facts & Assumptions

**Given:** A finite group $G$ and subgroups $K\le H\le G$.

[L1] Lagrange's theorem gives $|B|=[B:A]|A|$ whenever $A\le B$ and $B$ is finite ([[thm-lagrange]], [[def-index]], [[def-order-in-a-group]]).

[F1] Every subgroup contains the identity; hence its underlying set is nonempty ([[def-subgroup]]).

[L2] Natural multiplication is associative, and $xz=yz$ with $z\ne0$ implies $x=y$ ([[lem-nat-mult-associative]], [[lem-nat-mult-cancellative]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L1] to $K\le H$, $H\le G$ and $K\le G$ gives $|H|=[H:K]|K|$, $|G|=[G:H]|H|$, and $|G|=[G:K]|K|$. [L1]

2.1 Substituting the first equality into the second and comparing with the third gives $[G:K]|K|=([G:H][H:K])|K|$. [step 1.1, L2]

3.1 Since $K$ contains the identity, $|K|\ne0$. Cancellation in $\mathbb N$ therefore yields $[G:K]=[G:H][H:K]$. [step 2.1, F1, L2] ∎
