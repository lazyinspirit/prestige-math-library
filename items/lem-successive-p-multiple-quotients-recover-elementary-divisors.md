---
id: lem-successive-p-multiple-quotients-recover-elementary-divisors
kind: lemma
title: "The successive quotients p^iG/p^{i+1}G recover the cyclic summand multiplicities of a finite abelian p-group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-elementary-divisor-data-for-a-finite-abelian-group, thm-cyclic-decomposition-of-finite-abelian-p-groups, def-group-power, def-quotient-group, cor-order-of-a-quotient-group, prop-order-of-finite-direct-product, prop-integers-modulo-n-as-a-quotient-group]
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

Suppose $G\cong\prod_{j<r}C_{p^{e_j}}$ with $e_j\ge1$, and in additive notation write $p^iG=\{p^ig:g\in G\}$. Define $d_i$ by $|p^iG/p^{i+1}G|=p^{d_i}$. Then $$d_i=|\{j:e_j\ge i+1\}|.$$ Consequently the number of summands of order $p^k$ is $d_{k-1}-d_k$, so the elementary divisors are intrinsic.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] An **elementary-divisor decomposition** of a finite abelian group $G$ is an isomorphism $$G\cong C_{q_0}\times\cdots\times C_{q_{r-1}},$$ where every $q_i>1$ is a prime power. The unordered multiset of the $q_i$, counted with multiplicity, is the **elementary-divisor data**. The cyclic factors and product use thm-classification-of-cyclic-groups and def-external-direct-product-of-groups. The data records factor isomorphism types, not distinguished internal subgroups; the trivial group has empty data. ([[def-elementary-divisor-data-for-a-finite-abelian-group]]).

[L2] Every finite abelian $p$-group is isomorphic to a finite direct product of cyclic groups of prime-power order. The trivial $p$-group is the empty product. ([[thm-cyclic-decomposition-of-finite-abelian-p-groups]]).

[L3] **Natural exponents, in a monoid.** Let $(M,\cdot,e)$ be a monoid (def-semigroup-and-monoid) and $g \in M$. By the recursion theorem (thm-recursion), applied with the set $M$, the element $e$ and the function $x \mapsto x \cdot g$ from $M$ to $M$, there is exactly one function $\mathbb{N} \to M$, written $n \mapsto g^{n}$, with $$g^{0} = e, \qquad g^{\sigma(n)} = g^{n} \cdot g \quad (n \in \mathbb{N}).$$ In particular $g^{0} = e$ for **every** $g$, including $g = e$, and $g^{1} = g^{\sigma(0)} = e \cdot g = g$. Since $\mathbb{N}$ contains $0$ (def-natural-numbers), the exponent $0$ is a genuine value of the definition and not a separate convention. **Integer exponents, in a group.** Let $G$ be a group (def-group) and $g \in G$. Write $\iota : \mathbb{N} \to \mathbb{Z}$ for the embedding $k = [(k,0)]$ of lem-nat-embeds-int, which is injective, preserves addition, multiplication and order, and has as image exactly the nonnegative integers. For $x \in \mathbb{Z}$ define - $g^{x} := g^{k}$, the natural power, when $0 \le x$ and $x = k$; - $g^{x} := (g^{k})^{-1}$ when $x < 0$ and $-x = k$. **Why this is well defined.** The order on $\mathbb{Z}$ is total and antisymmetric (thm-int-ordered-ring, def-int-order), so exactly one of $0 \le x$ and $x < 0$ holds and the two clauses never both apply. In the first clause $x$ is nonnegative, so $x = k$ for some $k \in \mathbb{N}$, and $k$ is unique because $\iota$ is injective. In the second clause $x < 0$ gives $0 = x + (-x) < 0 + (-x) = -x$ by compatibility of the order with addition (thm-int-ordered-ring, def-int-operations), so $-x$ is a positive integer and again $-x = k$ for a unique $k$. The inverse $(g^{k})^{-1}$ is a single determined element by lem-inverse-unique and def-invertible-element. Finally the two readings of $g^{k}$, as a natural power and as an integer power, agree by construction, so no ambiguity is introduced. **Abbreviation.** In an exponent we write $k$ for the integer $k$ when a natural number $k$ is used where an integer is expected; this is unambiguous because $\iota$ is injective and preserves the arithmetic and the order, and because the two readings of $g^{k}$ agree as just noted. **Additive notation.** When the group is written additively the same object is written $n g$ or $n \cdot g$ rather than $g^{n}$, with $0 g = 0$ and $\sigma(n) g = n g + g$; the definitions are identical, only the symbols differ. ([[def-group-power]]).

[L4] Let $G$ be a group and let $N\mathrel{\trianglelefteq}G$ be a normal subgroup (def-normal-subgroup). The **quotient group**, or **factor group**, $G/N$ has the left cosets $$G/N:=\{gN:g\in G\}$$ as its elements (def-coset, def-index), with product $$ (gN)(hN):=ghN.$$ Independence of the chosen representatives is proved in thm-coset-multiplication-well-defined-iff-normal, and the group axioms are proved in thm-quotient-group-laws. ([[def-quotient-group]]).

[L5] Let $N\mathrel{\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group $G/N$ is finite and $$|G/N|=[G:N].$$ In particular, if $G$ is finite, then $$|G/N|=\frac{|G|}{|N|}.$$ ([[cor-order-of-a-quotient-group]]).

[L6] If $G$ and $H$ are finite groups, then their external direct product is finite and has order $|G\times H|=|G|\,|H|$. ([[prop-order-of-finite-direct-product]]).

[L7] For every $n\in\mathbb N$, view $n$ as its canonical nonnegative integer and put $n\mathbb Z:=\{nk:k\in\mathbb Z\}$. Then the left cosets of $n\mathbb Z$ in $(\mathbb Z,+)$ are exactly the congruence classes modulo $n$, and coset addition is the published addition of congruence classes. Thus $$(\mathbb Z,+)/n\mathbb Z=(\mathbb Z/n,+)$$ as the same group on the same underlying set. This includes $n=0$ and $n=1$. ([[prop-integers-modulo-n-as-a-quotient-group]]).

## Proof

**Proof technique:** direct.

1.1 On a cyclic factor $C_{p^e}$, the quotient $p^iC_{p^e}/p^{i+1}C_{p^e}$ is trivial when $i\ge e$ and has order $p$ when $i<e$. [given, L1, L2, L3, L4, L5, L6, L7]

2.1 Taking direct products componentwise therefore gives $|p^iG/p^{i+1}G|=p^{d_i}$ with $d_i$ equal to the number of exponents at least $i+1$. [step 1.1]

3.1 The number of exponents equal to $k$ is the number at least $k$ minus the number at least $k+1$, namely $d_{k-1}-d_k$. [step 2.1]

4.1 Each subgroup $p^iG$ and quotient $p^iG/p^{i+1}G$ is defined intrinsically, and the sequence terminates at zero, so these differences uniquely recover all summands. [step 3.1] ∎
