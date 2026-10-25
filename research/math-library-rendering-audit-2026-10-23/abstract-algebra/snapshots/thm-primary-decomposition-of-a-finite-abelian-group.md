---
id: thm-primary-decomposition-of-a-finite-abelian-group
kind: theorem
title: "A finite abelian group is the internal direct product of its primary components"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-p-primary-component-of-a-finite-abelian-group, thm-internal-direct-product-recognition, thm-canonical-prime-factorisation, thm-bezout-identity, prop-order-of-finite-direct-product, thm-lagrange]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Decomposition of Finite Abelian Groups, §§1-4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/finite-abelian.pdf"
    - title: "Richard Elman, Lectures on Abstract Algebra, Ch. 14"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
pipeline_run: null
---
## Statement

If $G$ is finite abelian and $|G|=\prod_{i<r}p_i^{a_i}$ is its prime factorisation, then the subgroups $G(p_i)$ form an internal direct product of $G$. Thus $$G\cong\prod_{i<r}G(p_i).$$ For the trivial group, this is the empty product.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Let $G$ be finite abelian and write $|G|=p^a m$ with $p\nmid m$. Then $G(p)$ is a subgroup of order $p^a$. It is the unique subgroup of $G$ having that order. In particular, if $p\nmid |G|$, then $G(p)=\{e\}$. ([[thm-p-primary-component-of-a-finite-abelian-group]]).

[L2] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

[L3] Powers are the natural powers of def-group-power and finite products those of def-monoid-finite-product, both taken in the commutative monoid $(\mathbb{Z},\cdot,1)$ of lem-units-of-z. Call $p : r \to \mathbb{Z}$ an **injective list of primes** when every $p_i$ is prime (def-prime) and $p_i = p_j$ forces $i = j$ (def-injection-surjection-bijection). Let $n \in \mathbb{Z}$ with $n \ge 1$ and let $p : r \to \mathbb{Z}$ be an injective list of primes such that every prime divisor of $n$ equals $p_i$ for some $i < r$. Then, with $v_q$ as in def-p-adic-valuation: 1. $\displaystyle n \;=\; \prod_{i<r} p_i^{\,v_{p_i}(n)}$; 2. $v_q(n) = 0$ for every prime $q$ that is not among $p_0,\dots,p_{r-1}$; 3. the exponents are determined by $n$: if $e : r \to \mathbb{N}$ and $n = \prod_{i<r} p_i^{\,e_i}$, then $e_j = v_{p_j}(n)$ for every $j < r$. Clause 3 needs only injectivity of the list, not the covering hypothesis. ([[thm-canonical-prime-factorisation]]).

[L4] Let $a, b \in \mathbb{Z}$, not both $0$, and put $$I \;:=\; \{\, ax + by \;:\; x, y \in \mathbb{Z} \,\} .$$ Then $I$ contains a positive element, and its least positive element is $\gcd(a,b)$ (def-common-divisor-and-gcd). In particular there are integers $x_0, y_0$ with $$a x_0 + b y_0 \;=\; \gcd(a,b),$$ so the equation $ax + by = \gcd(a,b)$ is solvable in $\mathbb{Z}$. ([[thm-bezout-identity]]).

[L5] If $G$ and $H$ are finite groups, then their external direct product is finite and has order $|G\times H|=|G|\,|H|$. ([[prop-order-of-finite-direct-product]]).

[L6] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 Each $G(p_i)$ has order $p_i^{a_i}$, and the product of these orders is $|G|$. Distinct primary components have trivial intersection because an element in both has order dividing powers of two distinct primes. [given, L1, L2, L3, L4, L5, L6]

2.1 Multiplication from the external product of the primary components to $G$ is injective: a tuple in its kernel would place each component in the intersection with the product of the others, whose order is both a power of $p_i$ and coprime to $p_i$. [step 1.1]

3.1 The external product has order $\prod_i p_i^{a_i}=|G|$. Its injective multiplication map therefore has image of order $|G|$ and is surjective. [step 2.1]

4.1 The internal-direct-product recognition theorem gives the displayed isomorphism. When $G$ is trivial the prime list is empty and both sides are the trivial group. [step 3.1] ∎
