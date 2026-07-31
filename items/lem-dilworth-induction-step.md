---
id: lem-dilworth-induction-step
kind: lemma
title: "The down-set and up-set chain covers from a suitable maximum antichain splice to a width-sized chain cover"
status: published
origin: session
deps: [lem-dilworth-maximal-antichain-decomposition, def-height-and-width-of-a-finite-poset, thm-subset-of-a-finite-set, def-partial-order]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.4"
      url: "https://appliedcombinatorics.org/book/s_posets_dilworth.html"
pipeline_run: null
---

## Statement

Let $P$ be a nonempty finite poset of width $w$, and let $A$ be a maximum
antichain that is neither the set of all minimal elements nor the set of all
maximal elements. Form $P^-$ and $P^+$ as in
[[lem-dilworth-maximal-antichain-decomposition]]. Then $P^-$ and $P^+$ are
nonempty proper induced subposets of $P$, both have width $w$, and both have
cardinality strictly smaller than $|P|$. If each has a chain cover with as
many chains as its width, then those covers splice along $A$ to give a chain
cover of $P$ with exactly $w$ chains.

## Facts & Assumptions

**Given:** A nonempty finite poset $P$ of width $w$, a maximum antichain $A$ satisfying the Statement, and minimum-size chain covers of $P^-$ and $P^+$.

[L1] For the down-set and up-set determined by a maximal antichain, $P=P^-\cup P^+$ and $P^-\cap P^+=A$ ([[lem-dilworth-maximal-antichain-decomposition]]).

[F1] The width is the maximum cardinality of an antichain ([[def-height-and-width-of-a-finite-poset]]).

[F2] Every subset of a finite set is finite, and equality of cardinalities for a subset forces equality of the sets ([[thm-subset-of-a-finite-set]]).

[F3] A partial order is transitive: $x\le a\le y$ implies $x\le y$ ([[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 The antichain $A$ has cardinality $w$ and lies in both $P^-$ and $P^+$. Since every antichain of either induced subposet is also an antichain of $P$, both $P^-$ and $P^+$ have width exactly $w$. [given, F1, L1]

2.1 Both induced subposets are nonempty because they contain $A$. They are proper subsets of $P$: indeed, $P^-=P$ would force $A$ to be exactly the set of maximal elements, since every maximal element of $P$ must then lie in $A$ and no $a\in A$ can have an element strictly above it. Dually, $P^+=P$ would force $A$ to be exactly the set of minimal elements. By finiteness, each therefore has cardinality strictly smaller than $|P|$. [given, step 1.1, L1, F2]

2.2 By the hypothesis and step 1.1, choose chain covers $\{C_a^-:a\in A\}$ of $P^-$ and $\{C_a^+:a\in A\}$ of $P^+$, indexed so that $a\in C_a^-\cap C_a^+$. Such indexing is possible because each cover has $w=|A|$ chains, each chain contains at most one member of $A$, and all members of $A$ must be covered. [step 1.1, F1, choose]

3.1 Fix $a\in A$. If $x\in C_a^-\subseteq P^-$ and $a<x$, then $x\le b$ for some $b\in A$, so $a<b$, contradicting that $A$ is an antichain. Hence every $x\in C_a^-$ satisfies $x\le a$. Dually, every $y\in C_a^+$ satisfies $a\le y$. Thus $x\le a\le y$ by transitivity, so $C_a^-\cup C_a^+$ is a chain. [step 2.2, L1, F1, F3]

4.1 The $w$ chains $C_a^-\cup C_a^+$ cover $P^-\cup P^+=P$. Thus they form the required width-sized chain cover of $P$. [step 2.2, step 3.1, L1] ∎
