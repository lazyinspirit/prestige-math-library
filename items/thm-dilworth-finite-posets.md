---
id: thm-dilworth-finite-posets
kind: theorem
title: "Dilworth's theorem: the minimum number of chains covering a finite poset equals its width"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-dilworth-induction-step, def-height-and-width-of-a-finite-poset, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.4"
      url: "https://appliedcombinatorics.org/book/s_posets_dilworth.html"
pipeline_run: null
---

## Statement

Let $P$ be a nonempty finite poset of width $w(P)$. Then $P$ can be covered by
$w(P)$ chains, and no cover by fewer chains exists. Thus the minimum number of
chains in a chain cover of $P$ equals $w(P)$.

## Facts & Assumptions

**Given:** A nonempty finite poset $P$.

[F1] The width $w(P)$ is the maximum cardinality of an antichain in $P$ ([[def-height-and-width-of-a-finite-poset]]).

[L1] A suitable non-boundary maximum antichain lets chain covers of its down-set and up-set splice into a width-sized chain cover ([[lem-dilworth-induction-step]]).

[L3] The principle of induction on $\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 For $n\ge1$, let $Q(n)$ assert that every nonempty poset of cardinality at most $n$ has a chain cover with as many members as its width. The assertion $Q(1)$ holds because a nonempty poset of cardinality at most $1$ is a one-element chain of width $1$. [base, F1]

1.2 Assume $Q(n)$, and let $P$ be a poset of cardinality $n+1$ and width $w$. Proving the required cover for this $P$ will prove $Q(n+1)$, since posets of cardinality at most $n$ are already covered by the induction hypothesis. [ih, L3]

1.3 Every chain contains at most one member of an antichain of cardinality $w$, so every chain cover of $P$ has at least $w$ members. [F1]

2.1 If there exists a maximum antichain $A$ that is neither the set of all minimal elements nor the set of all maximal elements, choose such an $A$. By [L1], the induced subposets $P^-$ and $P^+$ are nonempty, have width $w$, and have cardinality at most $n$. The induction hypothesis gives each a chain cover of size its width, and [L1] splices these into a chain cover of $P$ with $w$ chains. [step 1.2, F1, L1, ih]

2.2 Suppose instead that every maximum antichain is the set of all minimal elements or the set of all maximal elements. Extend any element downward and upward, which terminates because $P$ is finite, to obtain a maximal chain $C$ containing a minimal and a maximal element. [step 1.2, choose]

3.1 Put $Q:=P\setminus C$. If $Q$ is empty, then $P=C$ is one chain and $w=1$. If $Q$ is nonempty, then $w(Q)\le w-1$: otherwise $Q$ would contain an antichain $B$ of cardinality $w$, making $B$ a maximum antichain of $P$ disjoint from $C$; but every such antichain is, by the present case, all minimal elements or all maximal elements, and $C$ contains an element of each kind. [step 2.2, F1]

4.1 When $Q$ is nonempty it has cardinality at most $n$, so the induction hypothesis covers it by $w(Q)\le w-1$ chains. Adding the chain $C$ gives a cover of $P$ by at most $w$ chains; it cannot use fewer, because a maximum antichain of cardinality $w$ meets each covering chain in at most one element. [step 1.2, step 3.1, ih, F1]

5.1 Steps 2.1 and 4.1 prove $Q(n+1)$ in the two exhaustive cases. Thus [L3] proves $Q(n)$ for every $n\ge1$, and hence gives a width-sized chain cover for the original finite poset. Step 1.3 proves minimality, so the minimum chain-cover number equals the width. [step 1.1, step 1.2, step 2.1, step 4.1, step 1.3, L3, discharge-induction] ∎
