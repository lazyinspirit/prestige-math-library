---
id: prop-frobenius-permutation-action-characterization
kind: proposition
title: "Frobenius permutation action characterization"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-frobenius-complement-and-frobenius-group, def-coset, thm-orbit-stabilizer, def-group-action, def-orbit-and-stabilizer, def-free-group-action, def-fixed-point-sets-of-a-group-action, def-subgroup, lem-coset-membership-and-equality]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alex Bartel, Introduction to Representation Theory of Finite Groups, §6.1"
      url: "https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf"
      locator: "§6.1, printed pp. 28–30"
    - title: "Hans Kurzweil and Bernd Stellmacher, The Theory of Finite Groups, §§7.1–7.2"
      url: "https://homes.psd.uchicago.edu/~sethi/Teaching/P342-W2017/Kurzweil-Stellmacher_Theory%20of%20finite%20groups.pdf"
      locator: "§§7.1–7.2, printed pp. 163–171"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be a finite group and let $\{1\}<H<G$ be a subgroup. Then $H$ is a
Frobenius complement of $G$ if and only if the left action of $G$ on the coset
space $G/H$ by left multiplication is transitive, is nonregular (that is, not
free), and every nonidentity element of $G$ fixes at most one coset.

## Facts & Assumptions

**Given:** A finite group $G$, a subgroup $\{1\}<H<G$, and the rule $g\cdot xH:=gxH$ for $g,x\in G$.

[F1] A left action of $G$ on a set $X$ is a map $G\times X\to X$ with $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$ for all $g,h\in G$, $x\in X$; the action is transitive when some element of $G$ carries any given point to any other ([[def-group-action]]).

[F2] For $g\in G$ the left coset is $gH=\{gh:h\in H\}$, and $gH=xH$ holds exactly when $x\in gH$ ([[def-coset]]).

[F3] The orbit and stabilizer of a point $x$ of a $G$-set $X$ are $G\cdot x=\{g\cdot x:g\in G\}$ and $G_x=\{g\in G:g\cdot x=x\}$; the stabilizer is a subgroup ([[def-orbit-and-stabilizer]]).

[F4] An action is free when $g\cdot x=x$ implies $g=e$ for all $g\in G$ and all $x\in X$; equivalently, no nonidentity element fixes any point ([[def-free-group-action]]).

[F5] For $g\in G$ the fixed-point set is $X^g=\{x\in X:g\cdot x=x\}$; writing "an element fixes at most one coset" means $|(G/H)^g|\le 1$ for every $g\ne 1$ ([[def-fixed-point-sets-of-a-group-action]]).

[F6] A subgroup $\{1\}<H<G$ is a Frobenius complement exactly when $H\cap gHg^{-1}=\{1\}$ for every $g\notin H$ ([[def-frobenius-complement-and-frobenius-group]]).

[F7] Every orbit of a $G$-set is in bijection with the left cosets of the stabilizer of a point of it, by $gG_x\mapsto g\cdot x$ ([[thm-orbit-stabilizer]]).

[F8] A subgroup $H\le G$ contains $e$, is closed under products, and is closed under inverses ([[def-subgroup]]).

[F9] For $a,b\in G$ one has $aH=bH$ if and only if $a^{-1}b\in H$, and $x\in aH$ if and only if $a^{-1}x\in H$ ([[lem-coset-membership-and-equality]]).

## Proof

**Proof technique:** direct.

1.1 The rule $g\cdot xH:=gxH$ defines a left action of $G$ on $G/H$: $e\cdot xH=xH$ and $(gh)\cdot xH=ghxH=g\cdot(h\cdot xH)$ for all $g,h,x\in G$, by associativity of the product in $G$. [F1, F2, given]

2.1 The action of step 1.1 is transitive: given cosets $xH$ and $yH$, the element $g:=yx^{-1}$ satisfies $g\cdot xH=yx^{-1}xH=yH$. [F1, F2, step 1.1, algebra]

2.2 For $k\in G$ and a coset $xH$ one has $k\cdot xH=xH$ if and only if $x^{-1}kx\in H$: indeed the coset equality $kxH=xH$ is equivalent to $(kx)^{-1}x=x^{-1}k^{-1}x\in H$ by [F9], and $x^{-1}k^{-1}x=(x^{-1}kx)^{-1}$ is invertible in $H$ exactly when $x^{-1}kx\in H$, by [F8], so the displayed criterion follows. Consequently the fixed-point set of $k$ is $(G/H)^k=\{xH\in G/H: k\in xHx^{-1}\}$, and $k$ fixes a coset precisely when $k$ lies in the corresponding conjugate $xHx^{-1}$ of $H$. [F2, F3, F5, F8, F9, step 1.1, algebra]

2.3 The action of step 1.1 is nonregular whenever $\{1\}<H$: choose $h\in H$ with $h\ne1$; then $h\cdot H=H$, so some nonidentity element fixes a point of $G/H$ and the action is not free. Conversely, if $H=\{1\}$ then every stabilizer is trivial and the action is free, so nonregularity is exactly the clause $\{1\}<H$. [F1, F4, F8, given, choose]

3.1 Suppose $H$ is a Frobenius complement. Let $1\ne k\in G$ and suppose $k$ fixes two distinct cosets $xH\ne yH$. By step 2.2 there are $u\in H$ and $v\in H$ with $k=xux^{-1}=yvy^{-1}$. Then $u=x^{-1}y\,v\,(x^{-1}y)^{-1}$, so $u\in H\cap sHs^{-1}$ where $s:=x^{-1}y$. Since $xH\ne yH$ we have $s=x^{-1}y\notin H$ by [F9], so [F6] gives $H\cap sHs^{-1}=\{1\}$ and $u=1$; hence $k=xux^{-1}=1$, contradicting $k\ne1$. Therefore every nonidentity element fixes at most one coset. [F6, F9, step 2.2, algebra]

3.2 Suppose conversely that every nonidentity element of $G$ fixes at most one coset of $H$, and let $g\notin H$ and $z\in H\cap gHg^{-1}$. By [F6] it suffices to show $z=1$. The element $z$ lies in $H$, so $z\cdot H=H$; it also lies in $gHg^{-1}$, so $z\cdot gH=gH$ by step 2.2. Since $g\notin H$ the cosets $H$ and $gH$ are distinct by [F9]. Thus the nonidentity element $z$ would fix two distinct cosets, so the hypothesis forces $z=1$. [F6, F2, F9, step 2.2, assume-hyp]


4.1 Combining the clauses: if $H$ is a Frobenius complement then the action is transitive (step 2.1), nonregular (step 2.3, as $\{1\}<H$), and at most one coset is fixed by each nonidentity element (step 3.1). Conversely, if the action has the three listed properties then the "at most one fixed coset" clause is available and step 3.2 gives $H\cap gHg^{-1}=\{1\}$ for every $g\notin H$, that is, $H$ is a Frobenius complement by [F6]. This proves both directions of the stated equivalence. ∎ [F6, F7, step 3.1, step 3.2, step 2.3]
