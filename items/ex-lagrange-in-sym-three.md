---
id: ex-lagrange-in-sym-three
kind: example
title: "The subgroup orders in $\\operatorname{Sym}(\\{1,2,3\\})$ are $1,2,3$ and $6$"
status: published
origin: session
deps: [thm-lagrange, def-symmetric-group, lem-symmetric-group-is-a-group, def-subgroup, lem-subgroup-criterion, def-generated-subgroup, def-order-in-a-group]
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

## Example

Put $S_3=\operatorname{Sym}(\{1,2,3\})$. Its subgroup orders are exactly
$1,2,3,$ and $6$.

## Facts & Assumptions

**Given:** The symmetric group $S_3=\operatorname{Sym}(\{1,2,3\})$ under composition.

[F1] $S_3$ is the group of bijections of $\{1,2,3\}$, with cycle notation and composition acting rightmost first ([[def-symmetric-group]], [[lem-symmetric-group-is-a-group]]).

[F2] The generated set $\langle g\rangle$ is a subgroup; a nonempty subset closed under products and inverses is a subgroup ([[def-generated-subgroup]], [[def-subgroup]], [[lem-subgroup-criterion]]).

[L1] The order of a subgroup of a finite group divides the order of the group ([[thm-lagrange]], [[def-order-in-a-group]]).

## Verification

**Proof technique:** direct.

1.1 The six bijections are $e,(12),(13),(23),(123),(132)$, so $|S_3|=6$. [F1]

1.2 The subgroups $\{e\}$, $\langle(12)\rangle=\{e,(12)\}$, $\langle(123)\rangle=\{e,(123),(132)\}$ and $S_3$ have orders $1,2,3,$ and $6$, respectively. [F1, F2]

2.1 If $H\le S_3$, then [L1] makes $|H|$ a positive divisor of $6$, hence $|H|\in\{1,2,3,6\}$. [step 1.1, L1, F2]

3.1 Step 1.2 realizes every value allowed by step 2.1, so these are exactly the subgroup orders. [step 1.2, step 2.1] ∎
