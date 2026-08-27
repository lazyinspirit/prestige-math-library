---
id: lem-schreier-rewriting-is-invariant-under-free-reduction
kind: lemma
title: "Schreier rewriting is invariant under free reduction"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-alphabet-words-and-reduction, def-schreier-rewriting-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
    - title: "M. I. Kargapolov and Ju. I. Merzljakov, Fundamentals of the Theory of Groups"
      url: "https://www.scribd.com/document/1049379192/Fundamentals-of-the-Theory-of-Groups-M-I-Kargapolov-J-I-Merzljakov"
---

## Statement

Let $F(X)$ be a free group, let $H\le F(X)$, let $\mathcal T$ be a Schreier
system, and let $\tau$ be its Schreier rewriting map. If $u$ and $v$ are freely
equivalent words on $X\sqcup X^{-1}$, then their Schreier rewrites are freely
equivalent words in the Schreier generators:

$$\tau(u)\sim_{\mathrm{free}}\tau(v).$$

In particular, the two rewrites represent the same element of the subgroup.

## Facts & Assumptions

**Given:** A free group $F(X)$, a subgroup $H\le F(X)$, a Schreier system
$\mathcal T$, its rewriting map $\tau$, and freely equivalent words $u$ and $v$
on $X\sqcup X^{-1}$.

[L1] Elementary cancellations delete adjacent inverse pairs $aa^{-1}$ or $a^{-1}a$ ([[def-alphabet-words-and-reduction]]).

[L2] The rewrite $\tau(w)$ is obtained by tracking the successive coset representatives of the prefixes of $w$; a letter $x$ contributes $s(t_{j-1},x)$ and a letter $x^{-1}$ contributes $s(t_j,x)^{-1}$ ([[def-schreier-rewriting-map]]).

## Proof

**Proof technique:** direct.

1.1 It is enough to treat one elementary cancellation. By symmetry it suffices to consider $u=pxx^{-1}q$ and $v=pq$ with $x\in X$. Let $t=\overline p$ and $u_1=\overline{px}$. In the rewrite of $u$, the letter $x$ contributes $s(t,x)$ and the following letter $x^{-1}$ contributes $s(t,x)^{-1}$, so these two adjacent letters freely cancel. [L1, L2, given, algebra]

2.1 After those two letters are read, the current coset is again $Hp$, so the successive representatives used for the remaining suffix $q$ are exactly the same whether one starts from $u$ or from $v$. Thus one elementary free cancellation turns $\tau(u)$ into $\tau(v)$. Repeating this argument along a finite chain of elementary cancellations and reverse insertions proves that the two rewrites are freely equivalent, and hence represent the same subgroup element. [L1, L2, step 1.1] ∎
