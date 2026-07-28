---
id: thm-tychonoff
kind: theorem
title: "Tychonoff's theorem: an arbitrary product of compact spaces is compact in the product topology, assuming the Axiom of Choice"
status: published
origin: session
deps: [thm-alexander-subbase-lemma, def-compact-space, def-product-topology, def-topology-basis-subbasis, def-axiom-of-choice, thm-zorn, def-topological-space]
justified_by: []
aliases: [thm-tychonoff-theorem]
external_refs: [rem-schechter-kelley-tychonoff]
landmark: true
short: "Tychonoff's theorem"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Tychonoff's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff%27s_theorem"
    - title: "Alexander subbase theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexander_subbase_theorem"
    - title: "J. Munkres, Topology, 2nd ed., §37"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]).

Let $I$ be a set and let $(X_i, \mathcal{T}_i)_{i \in I}$ be a family of compact
topological spaces ([[def-compact-space]], [[def-topological-space]]). Then the
product

$$P \;:=\; \prod_{i \in I} X_i$$

with the product topology ([[def-product-topology]]) is compact.

**The Axiom of Choice is spent twice, and both uses are flagged below.** Once
inside [[thm-alexander-subbase-lemma]], through Zorn's lemma ([[thm-zorn]]), and
once directly at step 2.1, to produce a point of a product of nonempty sets.

## Facts & Assumptions

**Given:** A set $I$, a family $(X_i, \mathcal{T}_i)_{i \in I}$ of compact spaces, the product $P = \prod_{i \in I} X_i$ with the product topology, and the projections $\pi_i : P \to X_i$.

[A1] The Axiom of Choice, in the form: if $Y_i \ne \varnothing$ for every $i \in I$ then $\prod_{i \in I} Y_i \ne \varnothing$ ([[def-axiom-of-choice]]).

[L1] The family $\mathcal{G} := \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}$ is a subbasis for the product topology on $P$ ([[def-product-topology]], [[def-topology-basis-subbasis]]).

[L2] Preimage commutes with unions: $\pi_i^{-1}[\bigcup \mathcal{V}] = \bigcup \{\, \pi_i^{-1}[V] : V \in \mathcal{V} \,\}$, and $\pi_i^{-1}[X_i] = P$ ([[def-product-topology]]).

[L3] Each $(X_i, \mathcal{T}_i)$ is compact: every family of open subsets of $X_i$ with union $X_i$ has a finite subfamily with union $X_i$, or $X_i = \varnothing$ and the empty subfamily covers it ([[def-compact-space]]).

[L4] Alexander's subbase lemma: if $\mathcal{S}$ is a subbasis for the topology of a space $Y$ and every family $\mathcal{S}_0 \subseteq \mathcal{S}$ with $\bigcup \mathcal{S}_0 = Y$ has a finite subfamily with union $Y$, then $Y$ is compact ([[thm-alexander-subbase-lemma]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal{S}_0 \subseteq \mathcal{G}$ satisfy $\bigcup \mathcal{S}_0 = P$, and for each $i \in I$ put $\mathcal{U}_i := \{\, U \in \mathcal{T}_i : \pi_i^{-1}[U] \in \mathcal{S}_0 \,\}$, a family of open subsets of $X_i$ cut out by a property and not by any selection; every member of $\mathcal{S}_0$ is $\pi_i^{-1}[U]$ for some $i \in I$ and some $U \in \mathcal{U}_i$. [L1, construct]

2.1 There is $i_0 \in I$ with $\bigcup \mathcal{U}_{i_0} = X_{i_0}$. For if $X_i \setminus \bigcup \mathcal{U}_i$ were nonempty for every $i \in I$, then [A1] would give a point $a$ of $\prod_{i \in I} (X_i \setminus \bigcup \mathcal{U}_i)$; that $a$ lies in $P$, and it lies in no member of $\mathcal{S}_0$, since such a member is $\pi_i^{-1}[U]$ with $U \in \mathcal{U}_i$ while $a_i \notin \bigcup \mathcal{U}_i$ and so $a_i \notin U$ — contradicting $\bigcup \mathcal{S}_0 = P$. [A1, step 1.1]

3.1 The family $\mathcal{U}_{i_0}$ consists of open subsets of $X_{i_0}$ with union $X_{i_0}$, so by [L3] either $X_{i_0} = \varnothing$, or there are $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}_{i_0}$ with $X_{i_0} = U_0 \cup \dots \cup U_n$. [L3, step 2.1]

4.1 In the first case $P = \pi_{i_0}^{-1}[X_{i_0}] = \varnothing$ by [L2] and the empty subfamily of $\mathcal{S}_0$ has union $P$; in the second, $\pi_{i_0}^{-1}[U_0], \dots, \pi_{i_0}^{-1}[U_n]$ are members of $\mathcal{S}_0$ by step 1.1 and their union is $\pi_{i_0}^{-1}[U_0 \cup \dots \cup U_n] = \pi_{i_0}^{-1}[X_{i_0}] = P$ by [L2]. Either way $\mathcal{S}_0$ has a finite subfamily with union $P$. [L2, step 1.1, step 3.1]

5.1 Since $\mathcal{S}_0$ was an arbitrary subfamily of the subbasis $\mathcal{G}$ with union $P$, [L4] applies and $P$ is compact. [L1, L4, step 1.1, step 4.1] ∎

## Remarks

**Why a subbasic cover is easy and an arbitrary cover is not.** A member of $\mathcal{G}$ restricts exactly one coordinate, so a subbasic cover of $P$ sorts itself into the families $\mathcal{U}_i$, one per coordinate, and the whole argument is the observation that one of those families must already cover its own factor. An arbitrary open cover of $P$ mixes finitely many coordinates in each member and admits no such sorting, which is why the theorem is proved through [[thm-alexander-subbase-lemma]] rather than directly.

**The theorem implies the Axiom of Choice**, so the hypothesis cannot be dropped; that implication is not proved in this library, and the exact form it takes is recorded in [[rem-schechter-kelley-tychonoff]], which corrects the classical derivation. The choice ledger for this page is [[rem-compactness-conventions-and-choice-ledger]].

**For an index set that is a natural number neither use of choice is needed**, and the result is then [[thm-finite-products-of-compact-spaces]], a theorem of ZF proved on this page by induction and the tube lemma.

**A product of compact spaces is compact for the product topology and in general not for the box topology.** Nothing above survives the substitution: the box topology has no subbasis of one-coordinate restrictions, and the sorting carried out in the first step of the proof is exactly what disappears.
