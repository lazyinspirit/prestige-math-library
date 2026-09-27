---
id: cor-the-e-graph-is-generalized-nice
kind: corollary
title: "The singleton $E$-graph family is generalized nice"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-the-singleton-family-containing-e-has-property-star, lem-the-e-graph-and-the-bird-are-leaf-reducible, thm-property-star-and-leaf-reducibility-imply-generalized-niceness, def-generalized-nice-finite-family, def-property-star-for-a-finite-family, lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property, thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition, thm-special-vertex-local-structural-partition-criterion-implies-property-star, cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property, lem-erdos-hajnal-constants-are-downward-closed, def-e-graph-and-co-e-graph, def-coleaf-of-a-graph]
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemmas 4.5, 5.1, 6.3 and 6.4"
      url: "https://arxiv.org/pdf/2606.06258v2"
    - title: "Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, Section 5 iterative-sparsification context"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
---

## Statement

The singleton finite family $\{E\}$ is generalized nice, with the
complement-family convention in the published definition.

## Facts & Assumptions

**Given:** The singleton family $\{E\}$ and the complement family
$\overline{\{E\}}=\{\mathrm{co}\text{-}E\}$ of the published generalized-niceness
convention.

[L1] The singleton family $\{E\}$ has property $(*)$ ([[cor-the-singleton-family-containing-e-has-property-star]]).

[L2] The family $\{H_5,\mathrm{co}\text{-}E\}$ has the Erdős-Hajnal property, so it has an Erdős-Hajnal constant ([[lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property]]).

[L3] Leaf/co-leaf transfer: if $\mathcal F$ is a finite family, $H_1\in\mathcal F$ has a leaf $v$, $H_2\in\mathcal F$ has a co-leaf $w$, and the two modified families are $\{H_1\setminus\{v\}\}\cup(\mathcal F\setminus\{H_1\})$ and $\{H_2\setminus\{w\}\}\cup(\mathcal F\setminus\{H_2\})$, then the Erdős-Hajnal property of both modified families implies it for $\mathcal F$ ([[cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property]]).

[L4] In every co-$E$-free graph, every special-vertex comb of the property-$(*)$ trigger admits the $\{H_5,\mathrm{co}\text{-}E\}$ structural partition: each block splits as $B_i=X_i\cup Y_i$ with $Y_i$ $\{H_5,\mathrm{co}\text{-}E\}$-free and $X_i$ carrying a nonempty-block pure blockade partition whose pattern is $\{H_5,\mathrm{co}\text{-}E\}$-free and whose blocks are pure to every vertex of the other comb blocks ([[thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition]]).

[L5] Special-vertex-local criterion: if finite families $\mathcal F_1,\mathcal F_2$ have a common Erdős-Hajnal constant $c\in(0,1]$ and every special-vertex comb in every $\overline{\mathcal H}$-free graph admits a partition with clauses (1) and (2.1)--(2.3) of the structural comb partition, then $\mathcal H$ has property $(*)$ ([[thm-special-vertex-local-structural-partition-criterion-implies-property-star]]).

[L6] If a finite family has property $(*)$ and is leaf-reducible, then it is generalized nice ([[thm-property-star-and-leaf-reducibility-imply-generalized-niceness]]).

[L7] The singleton family $\{E\}$ is leaf-reducible ([[lem-the-e-graph-and-the-bird-are-leaf-reducible]]).

[L8] Generalized niceness of a finite family $\mathcal F$ is the four-outcome schema quantified over $\overline{\mathcal F}$-free graphs ([[def-generalized-nice-finite-family]]).

[L9] Property $(*)$ for a finite family $\mathcal F$ is a condition on $\overline{\mathcal F}$-free graphs carrying the special-vertex comb trigger ([[def-property-star-for-a-finite-family]]).

[L10] The $E$-graph has edge set $\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}$ on six vertices, and co-$E$ is its complement ([[def-e-graph-and-co-e-graph]]).

[L11] A vertex $v$ is a co-leaf of a graph $G$ when $\deg_G(v)=|V(G)|-2$, equivalently when $v$ is adjacent to every other vertex except one ([[def-coleaf-of-a-graph]]).

[L12] If $\epsilon$ is an Erdős-Hajnal constant for a hereditary class and $0<\delta\le\epsilon$, then $\delta$ is one too ([[lem-erdos-hajnal-constants-are-downward-closed]]).

## Proof

**Proof technique:** direct: record the published property-$(*)$ supplier and its transfer step, then apply the property-$(*)$-plus-leaf-reducibility implication.

1.1 By [L1], the singleton family $\{E\}$ has property $(*)$. Since [L9] quantifies the trigger over graphs free of the complement family, and [L10] identifies that complement family as $\{\mathrm{co}\text{-}E\}$, the claim is a statement about co-$E$-free graphs. [L1, L9, L10]

1.2 By [L7], the singleton family $\{E\}$ is leaf-reducible. [L7]

2.1 The published proof behind [L1] is the $\mathcal H=\{E\}$ instance of [L5] with $\mathcal F_1=\mathcal F_2=\{H_5,\mathrm{co}\text{-}E\}$: [L2] supplies the family's Erdős-Hajnal constant, lowered into $(0,1]$ by [L12], and [L4] supplies the partition clause for every special-vertex comb of a co-$E$-free graph. The induction step of the proof of [L2] replaces the family $\{H_i,\mathrm{co}\text{-}E\}$ by the two families $\{H_{i-1},\mathrm{co}\text{-}E\}$ and $\{H_i,\overline{P_5}\}$, deleting from $H_i$ its pendant vertex $v_i'$ and from co-$E$ the vertex $q$; here $q$ is a leaf of $E$ by the edge list [L10], so it has degree $4=6-2$ in the six-vertex graph co-$E$ and is a co-leaf of co-$E$ by [L11]. That replacement is exactly the transfer [L3], so every load-bearing input of the property-$(*)$ claim of step 1.1 is a published library item, with the transfer explicitly [L3]. [L2, L3, L4, L5, L10, L11, L12, step 1.1]

2.2 Applying [L6] to the finite family $\{E\}$: property $(*)$ holds by step 1.1 and leaf-reducibility by step 1.2, so $\{E\}$ is generalized nice. [L6, step 1.1, step 1.2]

3.1 By [L8] the ambient class of the generalized-niceness condition for $\{E\}$ is the co-$E$-free class, the complement-family convention named in the statement; step 2.2 establishes precisely that condition. This proves the corollary. [step 2.2, L8, L9] ∎

## Remarks

- The corollary is the $E$ endpoint of the second reduction chain: property $(*)$ comes from the co-$E$ comb structure, and leaf-reducibility turns it into generalized niceness. It is deliberately stated for the family $\{E\}$ itself, not for the complement family $\{\mathrm{co}\text{-}E\}$; the $\overline{\mathcal F}$ notation appears only inside the published definitions.
- **No Choice.** All quantified objects are finite graphs and finite families, and no selection from a family of nonempty sets occurs; the argument uses only published finite reductions.
