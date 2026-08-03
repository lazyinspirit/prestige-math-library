---
id: cex-subgroup-of-an-infinite-group-equinumerous-with-it
kind: counterexample
title: "$2\\mathbb{Z}$ has index $2$ in $\\mathbb{Z}$ and is nevertheless equinumerous with $\\mathbb{Z}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-index, def-coset, thm-standard-representatives-modulo-n, lem-subgroups-of-z-are-cyclic, def-equinumerous, def-injection-surjection-bijection, thm-int-comm-ring, lem-int-cancellation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cosets and Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.1: Cosets"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.01%3A_Cosets"
pipeline_run: null
---

## Statement refuted

If a proper subgroup $H<G$ has finite index, then $H$ cannot be equinumerous
with $G$.

## Facts & Assumptions

**Given:** The additive group $\mathbb Z$ and its subgroup $2\mathbb Z$.

[F1] The set $2\mathbb Z$ is a subgroup of $(\mathbb Z,+)$ ([[lem-subgroups-of-z-are-cyclic]], [[thm-int-comm-ring]]).

[F2] The index is the number of cosets, additive cosets have the form $a+2\mathbb Z$, and at modulus $2$ every congruence class has exactly one representative $r$ with $0\le r<2$, hence representative $0$ or $1$ ([[def-index]], [[def-coset]], [[thm-standard-representatives-modulo-n]]).

[F3] Two sets are equinumerous when a bijection between them exists ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[F4] Multiplication by a nonzero integer can be cancelled: if $xz=yz$ and $z\ne0$, then $x=y$ ([[lem-int-cancellation]]).

## Counterexample

**Proof technique:** direct.

1.1 The two cosets are $2\mathbb Z$ and $1+2\mathbb Z$. Indeed [F2] writes every integer as $a=2q+r$ with $r\in\{0,1\}$; then $a+2\mathbb Z=r+2\mathbb Z$, since $a+2k=r+2(q+k)$ and, conversely, $r+2t=a+2(t-q)$. Thus every coset is one of the displayed two, and they are distinct because one contains $0$ while the other does not. Hence $[\mathbb Z:2\mathbb Z]=2$. [F1, F2]

1.2 The map $f:\mathbb Z\to2\mathbb Z$ given by $f(k)=2k$ is surjective by the definition of $2\mathbb Z$ and injective because $2k=2\ell$ implies $k=\ell$ by cancellation at the nonzero factor $2$. Hence it is a bijection. [F3, F4, construct]

2.1 Thus the proper subgroup $2\mathbb Z$ has finite index and is equinumerous with $\mathbb Z$, refuting the statement. [step 1.1, step 1.2, F1] ∎
