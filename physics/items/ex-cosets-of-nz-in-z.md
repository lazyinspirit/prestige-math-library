---
id: ex-cosets-of-nz-in-z
kind: example
title: "For $n\\ge1$, the cosets of $n\\mathbb{Z}$ are the $n$ congruence classes modulo $n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-coset, def-index, lem-coset-partition, lem-subgroups-of-z-are-cyclic, def-congruence-modulo-an-integer, thm-standard-representatives-modulo-n, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "UCL lecture notes, Cosets and Lagrange's theorem"
      url: "https://www.homepages.ucl.ac.uk/~ucahmto/0007/_book/4-6-cosets-and-lagranges-theorem.html"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.1: Cosets"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.01%3A_Cosets"
pipeline_run: null
---

## Example

Let $n\ge1$ be an integer. In the additive group $(\mathbb Z,+)$, the subgroup
$n\mathbb Z$ has left cosets

$$a+n\mathbb Z=\{x\in\mathbb Z:x\equiv a\pmod n\}.$$

There are exactly $n$ such cosets, represented uniquely by
$0,1,\ldots,n-1$, and $[\mathbb Z:n\mathbb Z]=n$.

## Facts & Assumptions

**Given:** A positive integer $n$ and the additive group $\mathbb Z$.

[L1] The set $n\mathbb Z=\{nk:k\in\mathbb Z\}$ is a subgroup of $(\mathbb Z,+)$ ([[lem-subgroups-of-z-are-cyclic]], [[thm-int-comm-ring]]).

[F1] In additive notation, the coset represented by $a$ is $a+n\mathbb Z$ ([[def-coset]]).

[F2] The congruence $x\equiv a\pmod n$ means $n\mid(x-a)$ ([[def-congruence-modulo-an-integer]]).

[L2] Every class modulo positive $n$ has exactly one representative $r$ with $0\le r<n$, and there are $n$ classes ([[thm-standard-representatives-modulo-n]]).

[F3] The index is the finite cardinality of the coset set ([[def-index]], [[lem-coset-partition]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $n\mathbb Z$ is a subgroup of $(\mathbb Z,+)$. For $x\in\mathbb Z$, one has $x\in a+n\mathbb Z$ exactly when $x=a+nk$ for some integer $k$, equivalently $n\mid(x-a)$, equivalently $x\equiv a\pmod n$. [L1, F1, F2]

2.1 By [L2], every such class has a unique representative in $\{0,\ldots,n-1\}$, and distinct representatives give distinct cosets by step 1.1. [step 1.1, L2]

3.1 Thus the coset set has cardinality $n$, so $[\mathbb Z:n\mathbb Z]=n$. [step 2.1, F3] ∎
