---
id: thm-p-primary-component-of-a-finite-abelian-group
kind: theorem
title: "A p-primary component has the full p-power order and is the unique subgroup of that order"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-p-primary-component-of-an-abelian-group, thm-cauchy-for-finite-abelian-groups, thm-lagrange, cor-order-of-a-quotient-group, thm-correspondence-theorem-groups, thm-second-isomorphism-theorem-groups, cor-quotient-of-an-abelian-group-is-abelian, lem-group-power-laws]
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

Let $G$ be finite abelian and write $|G|=p^a m$ with $p\nmid m$. Then $G(p)$ is a subgroup of order $p^a$. It is the unique subgroup of $G$ having that order. In particular, if $p\nmid |G|$, then $G(p)=\{e\}$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Let $G$ be an abelian group and $p$ a prime. Its **$p$-primary component** is $$G(p)=\{g\in G:g^{p^k}=e\text{ for some }k\in\mathbb N\}.$$ Thus the identity is included by $k=0$. In additive notation, $G(p)=\{g:p^kg=0\text{ for some }k\in\mathbb N\}$. Powers and element orders use def-group-power and def-order-in-a-group. No finiteness or maximality is part of the definition. ([[def-p-primary-component-of-an-abelian-group]]).

[L2] Let $G$ be a finite abelian group and let $p$ be a prime dividing $|G|$. Then $G$ contains an element, and hence a subgroup, of order $p$. ([[thm-cauchy-for-finite-abelian-groups]]).

[L3] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

[L4] Let $N\mathrel{\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group $G/N$ is finite and $$|G/N|=[G:N].$$ In particular, if $G$ is finite, then $$|G/N|=\frac{|G|}{|N|}.$$ ([[cor-order-of-a-quotient-group]]).

[L5] Correspondence theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, with normality preserved. For $N\mathrel{\trianglelefteq}G$, the maps $H\mapsto H/N$ and $K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between subgroups $H$ with $N\le H\le G$ and subgroups $K\le G/N$; they preserve normality. ([[thm-correspondence-theorem-groups]]).

[L6] Second isomorphism theorem for groups: $H/(H\cap N)\cong HN/N$. If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $$H/(H\cap N)\cong HN/N.$$ ([[thm-second-isomorphism-theorem-groups]]).

[L7] If $G$ is abelian and $N\mathrel{\trianglelefteq}G$, then $G/N$ is abelian. ([[cor-quotient-of-an-abelian-group-is-abelian]]).

[L8] Let $G$ be a group (def-group) with identity $e$, let $g, h \in G$, and let powers be as in def-group-power. For all $m, n \in \mathbb{Z}$: 1. $g^{m+n} = g^{m} g^{n}$; 2. $g^{-m} = (g^{m})^{-1}$; 3. $(g^{m})^{n} = g^{mn}$; 4. $g^{m} g^{n} = g^{n} g^{m}$: any two powers of one element commute; 5. **if $gh = hg$** then $(gh)^{n} = g^{n} h^{n}$. Claim 5 is **false in general without its hypothesis**: in a group in which $g$ and $h$ do not commute the equation can fail already at $n = 2$, and a witness is recorded on the companion page. Claims 1 and 3 hold in any monoid (def-semigroup-and-monoid) for exponents in $\mathbb{N}$, and so does claim 5 for exponents in $\mathbb{N}$ under the same commuting hypothesis; only the extension to negative exponents needs inverses. ([[lem-group-power-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $x^{p^r}=y^{p^s}=e$ and $t=\max\{r,s\}$, commutativity and the power laws give $(xy)^{p^t}=e$ and $(x^{-1})^{p^t}=e$, so $G(p)$ is a subgroup. If a prime $q$ divides $|G(p)|$, Cauchy's theorem in $G(p)$ gives an element of order $q$; the definition of $G(p)$ forces $q=p$. Hence $|G(p)|=p^b$ for some $b\le a$. [given, L1, L2, L3, L4, L5, L6, L7, L8]

2.1 If $b<a$, then $p$ divides $|G/G(p)|$. Cauchy's theorem in this abelian quotient gives a nonidentity coset $xG(p)$ of order $p$. [step 1.1]

3.1 Then $x^p\in G(p)$, so $(x^p)^{p^k}=e$ for some $k$ and therefore $x\in G(p)$, contradicting the choice of a nonidentity coset. Hence $b=a$. [step 2.1]

4.1 If $H\le G$ has order $p^a$, Lagrange applied inside $H$ makes every $h\in H$ have $p$-power order, so $H\subseteq G(p)$; equal finite orders give $H=G(p)$. The case $a=0$ gives the trivial subgroup. [step 3.1] ∎
