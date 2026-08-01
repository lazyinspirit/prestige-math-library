---
id: cex-subgroup-of-an-infinite-group-equinumerous-with-it
kind: counterexample
title: "$2\\mathbb{Z}$ has index $2$ in $\\mathbb{Z}$ and is nevertheless equinumerous with $\\mathbb{Z}$"
status: published
origin: session
deps: [def-index, def-coset, lem-subgroups-of-z-are-cyclic, def-equinumerous, def-injection-surjection-bijection, thm-int-comm-ring]
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

If a proper subgroup $H<G$ has finite index, then $H$ cannot be equinumerous
with $G$.

## Facts & Assumptions

**Given:** The additive group $\mathbb Z$ and its subgroup $2\mathbb Z$.

[F1] The set $2\mathbb Z$ is a subgroup of $(\mathbb Z,+)$ ([[lem-subgroups-of-z-are-cyclic]], [[thm-int-comm-ring]]).

[F2] The index is the number of cosets, and additive cosets have the form $a+2\mathbb Z$ ([[def-index]], [[def-coset]]).

[F3] Two sets are equinumerous when a bijection between them exists ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

## Counterexample

**Proof technique:** direct.

1.1 The two cosets are $2\mathbb Z$ and $1+2\mathbb Z$, according as an integer is even or odd, so $[\mathbb Z:2\mathbb Z]=2$. [F2]

1.2 The map $f:\mathbb Z\to2\mathbb Z$ given by $f(k)=2k$ is surjective by the definition of $2\mathbb Z$ and injective because $2k=2\ell$ implies $k=\ell$. Hence it is a bijection. [F3, construct]

2.1 Thus the proper subgroup $2\mathbb Z$ has finite index and is equinumerous with $\mathbb Z$, refuting the statement. [step 1.1, step 1.2, F1] ∎
