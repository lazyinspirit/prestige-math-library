---
id: lem-elementary-divisors-regroup-into-invariant-factors
kind: lemma
title: "Elementary divisors regroup uniquely into invariant factors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-elementary-divisor-data-for-a-finite-abelian-group, def-invariant-factor-data-for-a-finite-abelian-group, thm-chinese-remainder-theorem, thm-order-of-element-in-direct-product, thm-classification-of-cyclic-groups, thm-canonical-prime-factorisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

Every multiset of prime-power elementary divisors regroups in exactly one way into an invariant-factor list.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] An **elementary-divisor decomposition** of a finite abelian group $G$ is an isomorphism $$G\cong C_{q_0}\times\cdots\times C_{q_{r-1}},$$ where every $q_i>1$ is a prime power. The unordered multiset of the $q_i$, counted with multiplicity, is the **elementary-divisor data**. The cyclic factors and product use thm-classification-of-cyclic-groups and def-external-direct-product-of-groups. The data records factor isomorphism types, not distinguished internal subgroups; the trivial group has empty data. ([[def-elementary-divisor-data-for-a-finite-abelian-group]]).

[L2] An **invariant-factor list** for a finite abelian group $G$ is a finite list of integers $$1<n_1\mid n_2\mid\cdots\mid n_r$$ together with an isomorphism $G\cong C_{n_1}\times\cdots\times C_{n_r}$. The cyclic factors and product use thm-classification-of-cyclic-groups and def-external-direct-product-of-groups. Unit factors are omitted. The trivial group has the empty list. ([[def-invariant-factor-data-for-a-finite-abelian-group]]).

[L3] Let $n_0,\ldots,n_{r-1}$ be a finite pairwise-coprime list of positive integers and let $N:=\prod_{i<r}n_i$. The map $$\Phi:\mathbb Z/N\longrightarrow\prod_{i<r}\mathbb Z/n_i,\qquad[x]_N\longmapsto([x]_{n_i})_{i<r},$$ is a bijection. It preserves addition, multiplication, $[0]$, and $[1]$ componentwise. For the empty list, $N=1$ and both sides have one element. ([[thm-chinese-remainder-theorem]]).

[L4] Let $\iota:\mathbb N\to\mathbb Z$ be the canonical embedding. If $g\in G$ and $h\in H$ have finite orders $m,n\ge1$, then in the external direct product $$\operatorname{ord}(g,h)=\operatorname{lcm}(m,n).$$ ([[thm-order-of-element-in-direct-product]]).

[L5] If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies: - if $g$ has infinite order, $G\cong(\mathbb Z,+)$; - if $g$ has finite order $n$, necessarily $n\ge1$, then $G\cong(\mathbb Z/n,+)$. ([[thm-classification-of-cyclic-groups]]).

[L6] Powers are the natural powers of def-group-power and finite products those of def-monoid-finite-product, both taken in the commutative monoid $(\mathbb{Z},\cdot,1)$ of lem-units-of-z. Call $p : r \to \mathbb{Z}$ an **injective list of primes** when every $p_i$ is prime (def-prime) and $p_i = p_j$ forces $i = j$ (def-injection-surjection-bijection). Let $n \in \mathbb{Z}$ with $n \ge 1$ and let $p : r \to \mathbb{Z}$ be an injective list of primes such that every prime divisor of $n$ equals $p_i$ for some $i < r$. Then, with $v_q$ as in def-p-adic-valuation: 1. $\displaystyle n \;=\; \prod_{i<r} p_i^{\,v_{p_i}(n)}$; 2. $v_q(n) = 0$ for every prime $q$ that is not among $p_0,\dots,p_{r-1}$; 3. the exponents are determined by $n$: if $e : r \to \mathbb{N}$ and $n = \prod_{i<r} p_i^{\,e_i}$, then $e_j = v_{p_j}(n)$ for every $j < r$. Clause 3 needs only injectivity of the list, not the covering hypothesis. ([[thm-canonical-prime-factorisation]]).

## Proof

**Proof technique:** direct.

1.1 For each prime $p$, sort its exponents increasingly. Left-pad the shorter prime lists with zeros until all have the same length, then multiply the prime powers columnwise to obtain $n_1,\ldots,n_r$. [given, L1, L2, L3, L4, L5]

2.1 The aligned exponents are nondecreasing, so $n_1\mid\cdots\mid n_r$. The Chinese remainder theorem identifies each column product of coprime cyclic groups with $C_{n_i}$. [step 1.1]

3.1 Conversely, canonical prime factorisation of each $n_i$ recovers every padded exponent column and hence the original elementary divisors. [step 2.1, L6]

4.1 The empty multiset gives the empty list, so uniqueness includes the trivial group. [step 3.1] ∎
