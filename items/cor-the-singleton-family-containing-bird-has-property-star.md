---
id: cor-the-singleton-family-containing-bird-has-property-star
kind: corollary
title: "The singleton Bird family has property (*)"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-the-e-graph-has-the-erdos-hajnal-property, thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition, thm-special-vertex-local-structural-partition-criterion-implies-property-star, lem-erdos-hajnal-constants-are-downward-closed, def-property-star-for-a-finite-family, def-erdos-hajnal-property-and-constant, def-bird-graph-and-co-bird-graph, def-e-graph-and-co-e-graph, def-h-free-and-family-free-graph, def-structural-comb-partition-hypothesis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemmas 5.1 and 6.5, Section 6.2"
      url: "https://arxiv.org/pdf/2606.06258v2"
---

## Statement

The singleton finite family $\{\mathrm{Bird}\}$ has property $(*)$, with the
special-vertex comb trigger in co-Bird-free graphs.

## Facts & Assumptions

**Given:** An arbitrary co-Bird-free finite graph $G$ and an arbitrary
special-vertex comb in it, with special vertex $v$ complete to $\bigcup_i B_i$
and anticomplete to the teeth $\{a_i\}$.

[L1] The $E$-graph has the Erdős-Hajnal property: there is $\epsilon_E>0$ such that every nonempty $E$-free graph has a clique or stable set of size at least $|V(G)|^{\epsilon_E}$ ([[thm-the-e-graph-has-the-erdos-hajnal-property]]).

[L2] Every positive exponent below an Erdős-Hajnal constant of a hereditary class is again one ([[lem-erdos-hajnal-constants-are-downward-closed]]).

[L3] Let $((a_k,B_k):k\in[\ell])$ be an $(\ell,w)$-comb in a finite simple co-Bird-free graph $G$, and let $v$ be outside all teeth and blocks, complete to every $B_k$ and anticomplete to every tooth. For every $i$ there are disjoint sets $X_i,Y_i$ with $B_i=X_i\cup Y_i$ such that $G[Y_i]$ is $E$-free, and $X_i$ has a partition into a nonempty ordered sequence $(A^i_1,\dots,A^i_{t_i})$ of nonempty sets that is a pure blockade, whose pattern is $E$-free, and such that each individual vertex of every other comb block is pure to each $A^i_j$ ([[thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition]]).

[L4] Special-vertex-local criterion: let $\mathcal F_1,\mathcal F_2$ have a common Erdős-Hajnal constant $c\in(0,1]$. Suppose that, in every $\overline{\mathcal H}$-free graph, every special-vertex comb occurring in the definition of property $(*)$ has a partition satisfying clauses (1) and (2.1)--(2.3) of the structural comb partition. Then $\mathcal H$ has property $(*)$ ([[thm-special-vertex-local-structural-partition-criterion-implies-property-star]]).

[L5] Property $(*)$ for a finite family $\mathcal F$ asks, for every $\overline{\mathcal F}$-free graph containing an $(\ell,w)$-comb with $\ell,w\ge4$ and a vertex $v$ outside all teeth and blocks complete to $\bigcup_i B_i$ and anticomplete to $\{a_i\}$, that one of three listed outcomes hold with constants $c_1,c_2,c_3>0$ ([[def-property-star-for-a-finite-family]]).

[L6] The structural comb-partition clauses are: (1) $Y_i$ is $\mathcal F_1$-free; (2) $X_i$ has a nonempty-block pure-blockade partition whose pattern graph is $\mathcal F_2$-free; (3) every vertex of $\bigcup_{k\ne i}B_k$ is pure to every block of that partition ([[def-structural-comb-partition-hypothesis]]).

[L7] The Bird graph has vertex set $\{x_1,x_2,x_3,y,z,w\}$ and edge set $\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z,yw\}$, and co-Bird is its complement ([[def-bird-graph-and-co-bird-graph]]).

[L8] The $E$-graph has edge set $\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}$, and co-$E$ is its complement ([[def-e-graph-and-co-e-graph]]).

[L9] A graph is $H$-free when it has no induced copy of $H$, and $\mathcal F$-free when it is $H$-free for every $H\in\mathcal F$ ([[def-h-free-and-family-free-graph]]).

[L10] A graph $H$ has the Erdős-Hajnal property when its class of $H$-free graphs has an Erdős-Hajnal constant, and the same applies to a finite family through its family-free class ([[def-erdos-hajnal-property-and-constant]]).

## Proof

**Proof technique:** direct: fix the common constant for $\mathcal F_1=\mathcal F_2=\{E\}$, verify the local partition for co-Bird-free graphs, and apply the published local criterion.

1.1 Take $\mathcal F_1=\mathcal F_2=\{E\}$. By [L1] the class of $E$-free graphs has an Erdős-Hajnal constant $\epsilon_E>0$; by [L2] the number $c:=\min\{\epsilon_E,1\}$ lies in $(0,1]$ and is again an Erdős-Hajnal constant for that class, so $\mathcal F_1$ and $\mathcal F_2$ have the common constant $c\in(0,1]$. [L1, L2, L10, given]

1.2 Since co-Bird is by definition the complement of the Bird graph, [L7] gives $\overline{\{\mathrm{Bird}\}}=\{\mathrm{co}\text{-}\mathrm{Bird}\}$; hence the graphs quantified over in the definition [L5] for $\mathcal F=\{\mathrm{Bird}\}$ are exactly the co-Bird-free graphs. [L5, L7]

1.3 For the arbitrary co-Bird-free graph $G$ and the arbitrary special-vertex comb of the statement, [L3] applies: $v$ is outside all teeth and blocks, complete to every $B_k$ and anticomplete to every tooth, exactly its hypothesis. It supplies, for every $i$, disjoint sets $X_i,Y_i$ with $B_i=X_i\cup Y_i$, an $E$-free induced subgraph $G[Y_i]$, and a partition of $X_i$ into a nonempty sequence $(A^i_1,\dots,A^i_{t_i})$ of nonempty sets that is a pure blockade with $E$-free pattern, every block being pure to each individual vertex of the other comb blocks. Matching this with the numbered clauses of [L6]: its first clause holds with $\mathcal F_1=\{E\}$; its second clause holds with $\mathcal F_2=\{E\}$, since the blocks are nonempty, they form a pure blockade, and the pattern is $E$-free; and its third clause, purity of each block to every vertex of each other comb block, holds. [L3, L6, L8, L9, given]

2.1 The hypothesis of the criterion [L4] is now verified for $\mathcal H=\{\mathrm{Bird}\}$: the families $\mathcal F_1=\mathcal F_2=\{E\}$ have the common constant $c\in(0,1]$ by step 1.1, and every special-vertex comb in every $\overline{\mathcal H}$-free graph, i.e. in every co-Bird-free graph by step 1.2, admits the partition of step 1.3. Therefore [L4] gives that $\{\mathrm{Bird}\}$ has property $(*)$. [L4, step 1.1, step 1.2, step 1.3]

3.1 The conclusion is property $(*)$ for the singleton family $\{\mathrm{Bird}\}$ with its trigger read in co-Bird-free graphs, as recorded in step 1.2 and the definition [L5]; this is the statement. [step 2.1, L5, step 1.2] ∎

## Remarks

- The precise complement direction matters here: the trigger class is co-Bird-free, because property $(*)$ for $\{\mathrm{Bird}\}$ is stated over graphs free of $\overline{\mathrm{Bird}}$. The source's Section 6.2 heading says "Bird graph" while its Lemma 6.5 and its use are for co-Bird-free graphs; the scaffold ledger already records that correction, and this corollary follows the lemma.
- The companion E corollary uses the analogous co-$E$ partition with the auxiliary family $\{H_5,\mathrm{co}\text{-}E\}$; here the auxiliary family collapses to $\mathcal F_1=\mathcal F_2=\{E\}$ because the $E$ theorem is available as auxiliary input.
- **No Choice.** The argument instantiates published finite criteria and selects nothing from any family of nonempty sets.
