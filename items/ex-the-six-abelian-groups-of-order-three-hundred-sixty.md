---
id: ex-the-six-abelian-groups-of-order-three-hundred-sixty
kind: example
title: "The six abelian groups of order 360 in both classification forms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form, thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form, cor-number-of-abelian-groups-of-a-given-finite-order, thm-canonical-prime-factorisation]
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
## Example

Since $360=2^3\cdot3^2\cdot5$, there are six abelian groups of order $360$. Their elementary-divisor forms are obtained by choosing one of $C_8$, $C_4\times C_2$, $C_2^3$ and one of $C_9$, $C_3^2$, together with $C_5$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[L1] Every finite abelian group is isomorphic to a finite direct product of cyclic groups of prime-power order. The multiset of their orders is uniquely determined by the group, up to permutation of the factors. ([[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]).

[L2] For every finite abelian group $G$ there is a unique list $$1<n_1\mid\cdots\mid n_r$$ such that $G\cong C_{n_1}\times\cdots\times C_{n_r}$. Moreover $|G|=n_1\cdots n_r$. The trivial group corresponds to the empty list and empty product. ([[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]).

[L3] If $n=\prod_p p^{a_p}$, then the number of isomorphism classes of abelian groups of order $n$ is $$\prod_p P(a_p),$$ where $P(a)$ is the number of partitions of $a$. For $n=1$ the empty product is $1$. ([[cor-number-of-abelian-groups-of-a-given-finite-order]]).

[L4] Powers are the natural powers of def-group-power and finite products those of def-monoid-finite-product, both taken in the commutative monoid $(\mathbb{Z},\cdot,1)$ of lem-units-of-z. Call $p : r \to \mathbb{Z}$ an **injective list of primes** when every $p_i$ is prime (def-prime) and $p_i = p_j$ forces $i = j$ (def-injection-surjection-bijection). Let $n \in \mathbb{Z}$ with $n \ge 1$ and let $p : r \to \mathbb{Z}$ be an injective list of primes such that every prime divisor of $n$ equals $p_i$ for some $i < r$. Then, with $v_q$ as in def-p-adic-valuation: 1. $\displaystyle n \;=\; \prod_{i<r} p_i^{\,v_{p_i}(n)}$; 2. $v_q(n) = 0$ for every prime $q$ that is not among $p_0,\dots,p_{r-1}$; 3. the exponents are determined by $n$: if $e : r \to \mathbb{N}$ and $n = \prod_{i<r} p_i^{\,e_i}$, then $e_j = v_{p_j}(n)$ for every $j < r$. Clause 3 needs only injectivity of the list, not the covering hypothesis. ([[thm-canonical-prime-factorisation]]).

## Verification

**Proof technique:** direct.

1.1 The prime exponents are $3,2,1$, whose partition counts are $3,2,1$; their product is $6$. [given, L1, L2, L3, L4]

2.1 The six elementary forms are $(C_8,C_9,C_5)$, $(C_8,C_3,C_3,C_5)$, $(C_4,C_2,C_9,C_5)$, $(C_4,C_2,C_3,C_3,C_5)$, $(C_2,C_2,C_2,C_9,C_5)$, and $(C_2,C_2,C_2,C_3,C_3,C_5)$. [step 1.1]

3.1 Columnwise regrouping gives invariant-factor lists $(360)$, $(3,120)$, $(2,180)$, $(6,60)$, $(2,2,90)$, and $(2,6,30)$, respectively. [step 2.1] ∎
