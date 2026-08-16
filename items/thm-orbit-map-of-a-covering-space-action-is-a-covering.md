---
id: thm-orbit-map-of-a-covering-space-action-is-a-covering
kind: theorem
title: "The orbit map of a covering-space action is a covering, with the acting group equal to the deck group when the total space is path-connected"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-covering-space-action, def-covering-map-and-evenly-covered-neighbourhoods, def-quotient-topology, def-deck-transformation-and-deck-group, prop-deck-transformations-are-determined-by-one-point-and-act-freely, lem-open-or-closed-surjection-is-quotient]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 3"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
pipeline_run: null
---

## Statement

For a covering-space action of $G$ on $E$, the orbit map $E\to E/G$ is a covering. If $E$ is path-connected, the deck group of this covering consists exactly of the transformations supplied by $G$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A left action of a group $G$ on a space $E$ **by homeomorphisms** is a **covering-space action** when every $e\in E$ has an open neighbourhood $U$ such that $gU\cap U=\varnothing$ for every nonidentity $g\in G$ (def-group-action, def-homeomorphism-and-open-maps). Acting by homeomorphisms means that each map $e\mapsto g\cdot e$ is a homeomorphism of $E$; the underlying set action alone would not make the translates $gU$ open. This condition implies freeness (def-free-group-action) and makes the translates of $U$ pairwise disjoint. ([[def-covering-space-action]]).

[F2] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F3] **The quotient topology.** Let $(X, \mathcal{T})$ be a topological space (def-topological-space), let $Y$ be a set and let $q : X \to Y$ be a surjection (def-injection-surjection-bijection). The **quotient topology** on $Y$ induced by $q$ is the final topology of the one-element family $(q)$ (def-initial-and-final-topology): $$\mathcal{T}_q \;:=\; \{\, V \subseteq Y : q^{-1}[V] \in \mathcal{T} \,\} .$$ That this is a topology is discharged in def-initial-and-final-topology, where every final topology is verified to satisfy (T1), (T2) and (T3). Dually, $C \subseteq Y$ is closed in $\mathcal{T}_q$ exactly when $q^{-1}[C]$ is closed in $X$, because $q^{-1}[Y \setminus V] = X \setminus q^{-1}[V]$. ([[def-quotient-topology]]).

[F4] For a covering $p:E\to B$, a **deck transformation** is an isomorphism $h:E\to E$ over $B$, so $p\circ h=p$ (def-map-and-isomorphism-of-covering-spaces). Deck transformations form the **deck group** $\operatorname{Deck}(p)$ under composition, and this group acts on $E$ by evaluation (def-group, def-group-action). ([[def-deck-transformation-and-deck-group]]).

[F5] For a covering with connected total space, two deck transformations agreeing at one point are equal. Consequently the deck group acts freely on the total space. ([[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]).

[F6] Let $X$ and $Y$ be topological spaces and let $q : X \to Y$ be continuous (def-continuous-map-top). Each of the following three conditions makes $q$ a quotient map (def-quotient-topology). 1. $q$ is a surjection and an **open map** (def-homeomorphism-and-open-maps). 2. $q$ is a surjection and a **closed map**. 3. $q$ admits a **continuous section**: a continuous $s : Y \to X$ with $q \circ s = \mathrm{id}_Y$. (Surjectivity of $q$ is then automatic and need not be assumed.) Neither clause 1 nor clause 2 is necessary: a quotient map need be neither open nor closed. A witness that is a quotient map by clause 3 while failing clauses 1 and 2 is worked on the companion page, and is named in the remarks below. ([[lem-open-or-closed-surjection-is-quotient]]).

## Proof

**Proof technique:** direct.

1.1 Let $U$ be a neighbourhood whose nonidentity translates are disjoint. Each $g$ acts by a homeomorphism of $E$ by [F1], so every translate $gU$ is open, and the full preimage of the orbit image of $U$ is $\bigcup_{g\in G}gU$, a disjoint union of open sets. That preimage being open makes the orbit image open in the quotient topology of [F3], and the orbit map is then an open continuous surjection, so [F6] applies to it. [given, F6, F3, F2, F1]

2.1 Each translate maps homeomorphically onto that quotient neighbourhood. [step 1.1, F6, F2, F3]

3.1 The action is free automatically, and when $E$ is nonempty this embeds the acting group in the deck group: freeness makes $g\cdot e=e$ force $g=1$, so distinct group elements give distinct translates. The nonemptiness is needed — on $E=\varnothing$ every translate is the identity, so a nontrivial $G$ does not embed. [step 2.1, F4, F1, F5]

4.1 If the total space is path-connected, compare any deck transformation at one point with the unique group translate taking that point to its image; one-point determination then proves equality with that translate. [step 3.1, F4, F5, F1]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎
