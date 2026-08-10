---
id: thm-cauchy-for-finite-abelian-groups
kind: theorem
title: "Cauchy's theorem for finite abelian groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-strong-induction, thm-lagrange, cor-order-of-a-quotient-group, cor-quotient-of-an-abelian-group-is-abelian, def-quotient-group, cor-prime-order-group-is-cyclic, lem-order-characterisation, thm-classification-of-cyclic-groups]
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

Let $G$ be a finite abelian group and let $p$ be a prime dividing $|G|$. Then $G$ contains an element, and hence a subgroup, of order $p$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Let $P$ be a property of naturals such that for every $n \in \mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \in \mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.) ([[thm-strong-induction]]).

[L2] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

[L3] Let $N\mathrel{\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group $G/N$ is finite and $$|G/N|=[G:N].$$ In particular, if $G$ is finite, then $$|G/N|=\frac{|G|}{|N|}.$$ ([[cor-order-of-a-quotient-group]]).

[L4] If $G$ is abelian and $N\mathrel{\trianglelefteq}G$, then $G/N$ is abelian. ([[cor-quotient-of-an-abelian-group-is-abelian]]).

[L5] Let $G$ be a group and let $N\mathrel{\trianglelefteq}G$ be a normal subgroup (def-normal-subgroup). The **quotient group**, or **factor group**, $G/N$ has the left cosets $$G/N:=\{gN:g\in G\}$$ as its elements (def-coset, def-index), with product $$ (gN)(hN):=ghN.$$ Independence of the chosen representatives is proved in thm-coset-multiplication-well-defined-iff-normal, and the group axioms are proved in thm-quotient-group-laws. ([[def-quotient-group]]).

[L6] Let $G$ be a finite group such that the positive integer $|G|$ is prime. Then every $g\ne e$ has order $|G|$, satisfies $\langle g\rangle=G$, and hence generates $G$. In particular, $G$ is cyclic. ([[cor-prime-order-group-is-cyclic]]).

[L7] Let $G$ be a group, $g \in G$, and let orders be as in def-order-in-a-group. Throughout, a natural number written where an integer is expected means its image under the embedding $\iota : \mathbb{N} \to \mathbb{Z}$ of lem-nat-embeds-int. **Finite order.** Suppose $\operatorname{ord}(g) = n$ with $n \in \mathbb{N}$, $n \ge 1$. Then: 1. for every $k \in \mathbb{Z}$, $g^{k} = e$ if and only if $k = qn$ for some $q \in \mathbb{Z}$, that is, if and only if $n \mid k$ (thm-division-algorithm-in-z); 2. the powers $g^{0}, g^{1}, \dots, g^{n-1}$ are pairwise distinct: if $i, j \in \mathbb{N}$ with $i < n$, $j < n$ and $g^{i} = g^{j}$, then $i = j$; 3. $\langle g \rangle = \{\, g^{s} : s \in \mathbb{N},\ s < n \,\}$ and $\langle g \rangle \approx n$; so $\langle g \rangle$ is finite with $|\langle g \rangle| = n = \operatorname{ord}(g)$. **Infinite order.** If $\operatorname{ord}(g) = \infty$ then for $j, k \in \mathbb{Z}$, $g^{j} = g^{k}$ implies $j = k$; so the integer powers of $g$ are pairwise distinct and $\langle g \rangle$ is not finite. ([[lem-order-characterisation]]).

[L8] If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies: - if $g$ has infinite order, $G\cong(\mathbb Z,+)$; - if $g$ has finite order $n$, necessarily $n\ge1$, then $G\cong(\mathbb Z/n,+)$. ([[thm-classification-of-cyclic-groups]]).

## Proof

**Proof technique:** direct.

1.1 Proceed by strong induction on $|G|$. The trivial group has no relevant prime divisor, and if $|G|=p$ then $G$ is cyclic of order $p$. [given, L1, L2, L3, L4, L5, L6, L7, L8]

2.1 Choose $x\ne e$. If $\langle x\rangle=G$, cyclic-group classification supplies $x^{|G|/p}$ of order $p$. Otherwise put $H=\langle x\rangle$, a nontrivial proper subgroup. [step 1.1]

3.1 If $p\mid |H|$, induction in $H$ gives an element of order $p$. If $p\nmid |H|$, then $p\mid |G/H|$ and induction in the finite abelian quotient gives a coset $yH$ of order $p$. [step 2.1]

4.1 In the latter case $y^p\in H$. Let $q$ be the order of $y^p$; then $q\mid |H|$ and $p\nmid q$. Since the coset of $y$ has order $p$, the order of $y$ is $pq$, so $y^q$ has order $p$. This completes the induction. [step 3.1] ∎
