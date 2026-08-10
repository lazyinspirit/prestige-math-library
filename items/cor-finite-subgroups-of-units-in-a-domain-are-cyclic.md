---
id: cor-finite-subgroups-of-units-in-a-domain-are-cyclic
kind: corollary
title: 'Every finite subgroup of the unit group of an integral domain is cyclic'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-zero-divisor-and-integral-domain, lem-ring-units-form-a-group, def-subgroup, def-generated-subgroup, def-finite-cardinality, def-exponent-of-a-finite-group, cor-order-and-exponent-from-invariant-factors, cor-finite-abelian-group-cyclic-iff-one-invariant-factor, def-polynomial-degree-leading-coefficient-and-monic, def-polynomial-evaluation-and-root, thm-root-bound-for-polynomials-over-a-domain]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Corollary 23.15'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Let $D$ be an integral domain. Every finite subgroup $G\le D^\times$ of the unit group of $D$ is cyclic.

## Facts & Assumptions

**Given:** An integral domain $D$ and a finite subgroup $G\le D^\times$.

[L1] An integral domain is a commutative ring with no zero divisors and with $0\ne1$ ([[def-zero-divisor-and-integral-domain]]).

[L2] The units $D^\times$ form a group under multiplication ([[lem-ring-units-form-a-group]]).

[L3] A subgroup contains the identity and is closed under multiplication and inverses ([[def-subgroup]]).

[L4] A group is cyclic when it equals $\langle g\rangle$ for some element $g$ ([[def-generated-subgroup]]).

[L5] A finite set has a natural-number cardinality $|G|$ ([[def-finite-cardinality]]).

[L6] The exponent $e$ of a finite group is the least positive integer such that $g^e=1$ for every group element $g$ ([[def-exponent-of-a-finite-group]]).

[L7] If $G\cong C_{n_1}\times\cdots\times C_{n_r}$ with $1<n_1\mid\cdots\mid n_r$, then $|G|=n_1\cdots n_r$ and $\exp(G)=n_r$ ([[cor-order-and-exponent-from-invariant-factors]]).

[L8] A nontrivial finite abelian group is cyclic exactly when its invariant-factor list has one entry ([[cor-finite-abelian-group-cyclic-iff-one-invariant-factor]]).

[L9] A monic polynomial has leading coefficient $1$, and a nonzero polynomial has a natural-number degree ([[def-polynomial-degree-leading-coefficient-and-monic]]).

[L10] Evaluation substitutes a ring element into a formal polynomial, and a root is an element with value zero ([[def-polynomial-evaluation-and-root]]).

[L11] A nonzero polynomial of degree $n$ over an integral domain has at most $n$ distinct roots ([[thm-root-bound-for-polynomials-over-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 If $G=\{1\}$, then $G=\langle1\rangle$ and [L4] makes it cyclic. [given, L2, L3, L4]

1.2 Suppose $G$ is nontrivial. Since $D$ is commutative by [L1], [L2] and [L3] make $G$ a finite abelian group; let $e\ge1$ be its exponent from [L6]. [given, L1, L2, L3, L5, L6]

2.1 Every $g\in G$ satisfies $g^e=1$, so all $|G|$ distinct elements of $G$ are roots, in the sense of [L10], of the nonzero monic polynomial $T^e-1$, whose degree is $e$ by [L9]; [L11] gives $|G|\le e$. [step 1.2, L5, L6, L9, L10, L11]

3.1 Write the invariant-factor list of $G$ as $1<n_1\mid\cdots\mid n_r$. By [L7], $|G|=n_1\cdots n_r$ and $e=n_r$, so $e\le |G|$; step 2.1 gives equality. Hence $n_1\cdots n_r=n_r$, and because every $n_i>1$, this forces $r=1$. Fact [L8] makes $G$ cyclic, while step 1.1 covers the trivial case. [step 1.1, step 2.1, L7, L8] ∎
