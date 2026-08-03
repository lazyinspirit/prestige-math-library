---
id: cex-left-coset-that-is-not-a-right-coset
kind: counterexample
title: "A left coset that is not the corresponding right coset in $\\operatorname{Sym}(\\{1,2,3\\})$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-coset, def-symmetric-group, lem-symmetric-group-is-a-group, def-subgroup]
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
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.1: Cosets"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.01%3A_Cosets"
pipeline_run: null
---

## Statement refuted

For every subgroup $H\le G$ and every $g\in G$, the corresponding cosets
$gH$ and $Hg$ are equal.

## Facts & Assumptions

**Given:** The group $S_3=\operatorname{Sym}(\{1,2,3\})$, the subgroup $H=\{e,(12)\}$, and $g=(123)$.

[F1] Cycle products are composites with the rightmost permutation acting first ([[def-symmetric-group]], [[lem-symmetric-group-is-a-group]]).

[F2] The sets $gH=\{gh:h\in H\}$ and $Hg=\{hg:h\in H\}$ are the left and right cosets ([[def-coset]]).

[F3] Under rightmost-first composition, if $\tau=(12)$ then $ee=e$, $e\tau=\tau e=\tau$ and $\tau^2=e$; hence $e^{-1}=e$, $\tau^{-1}=\tau$, and $H=\{e,\tau\}$ contains the identity and is closed under products and inverses, so it is a subgroup ([[def-symmetric-group]], [[lem-symmetric-group-is-a-group]], [[def-subgroup]]).

## Counterexample

**Proof technique:** direct.

1.1 Direct composition gives $(123)(12)=(13)$ and $(12)(123)=(23)$. [F1]

2.1 Therefore $gH=\{(123),(13)\}$ while $Hg=\{(123),(23)\}$. [step 1.1, F2, F3]

3.1 Since $(13)\ne(23)$, the left and right cosets are unequal, refuting the statement. [step 2.1] ∎
