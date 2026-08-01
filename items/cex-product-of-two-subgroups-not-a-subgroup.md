---
id: cex-product-of-two-subgroups-not-a-subgroup
kind: counterexample
title: "The product set $HK$ of two subgroups need not be a subgroup"
status: published
origin: session
deps: [thm-lagrange, def-subgroup, def-symmetric-group, lem-symmetric-group-is-a-group, def-order-in-a-group]
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
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cosets and Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
pipeline_run: null
---

## Statement refuted

For any two subgroups $H,K\le G$, the product set
$HK=\{hk:h\in H,\ k\in K\}$ is a subgroup of $G$.

## Facts & Assumptions

**Given:** The group $S_3=\operatorname{Sym}(\{1,2,3\})$, and the subgroups $H=\{e,(12)\}$ and $K=\{e,(23)\}$.

[F1] $S_3$ is a group under rightmost-first composition, and $H,K$ are subgroups because each transposition squares to $e$ ([[def-symmetric-group]], [[lem-symmetric-group-is-a-group]], [[def-subgroup]]).

[L1] The order of a subgroup of a finite group divides the order of the group ([[thm-lagrange]], [[def-order-in-a-group]]).

## Counterexample

**Proof technique:** direct.

1.1 The six elements of $S_3$ are $e,(12),(13),(23),(123),(132)$, so $|S_3|=6$. [F1]

1.2 Direct multiplication gives $HK=\{e,(12),(23),(12)(23)\}=\{e,(12),(23),(123)\}$, a set of four distinct elements. [F1]

2.1 If $HK$ were a subgroup, [L1] would force $4\mid6$, which is false. Hence $HK$ is not a subgroup. [step 1.1, step 1.2, L1] ∎
