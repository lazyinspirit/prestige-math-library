---
id: lem-the-e-graph-and-the-bird-are-leaf-reducible
kind: lemma
title: "The $E$-graph and Bird singleton families are leaf-reducible"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-leaf-reducible-finite-family, def-e-graph-and-co-e-graph, def-bird-graph-and-co-bird-graph, def-bull-graph, def-standard-complete-bipartite-path-and-cycle-graphs, def-subgraph-induced-subgraph-and-spanning-subgraph, def-tree-forest-and-leaf, def-graph-isomorphism-and-complement, def-induced-embedding-and-induced-copy, def-h-free-and-family-free-graph, def-erdos-hajnal-property-and-constant, cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property, cor-the-bull-graph-has-the-erdos-hajnal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Section 2.1"
      url: "https://arxiv.org/pdf/2606.06258v2"
---

## Statement

The singleton forbidden families $\{E\}$ and $\{\mathrm{Bird}\}$ are
leaf-reducible. In $E$, deleting the leaf $q$ attached to the middle vertex
gives $P_5$. In Bird, deleting the added leaf $w$ gives the bull. Both reduced
singleton families have the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** The $E$-graph on $\{p_1,\dots,p_5,q\}$, the Bird graph on
$\{x_1,x_2,x_3,y,z,w\}$, and the bull on $\{x_1,x_2,x_3,y,z\}$.

[L1] The $E$-graph has edge set $\{p_1p_2,p_2p_3,p_3p_4,p_4p_5,p_3q\}$ and co-$E$ is its complement ([[def-e-graph-and-co-e-graph]]).

[L2] The Bird graph has edge set $\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z,yw\}$ and co-Bird is its complement ([[def-bird-graph-and-co-bird-graph]]).

[L3] The bull has vertex set $\{x_1,x_2,x_3,y,z\}$ and edge set $\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z\}$ ([[def-bull-graph]]).

[L4] The path graph $P_5$ has vertices $0,1,2,3,4$ and edges $\{i,i+1\}$ for $0\le i<4$, and no others ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L5] A finite family $\mathcal F$ is leaf-reducible when some $H\in\mathcal F$ has a leaf $v$ and the modified family $\{H\setminus\{v\}\}\cup(\mathcal F\setminus\{H\})$ has the Erdős-Hajnal property in the family sense ([[def-leaf-reducible-finite-family]]).

[L6] A vertex of degree one is a leaf; deletion $H\setminus\{v\}$ is the subgraph induced by $V(H)\setminus\{v\}$ ([[def-tree-forest-and-leaf]], [[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[L7] A graph isomorphism is a bijection preserving adjacency and nonadjacency, and an induced embedding of $H$ in $G$ is an injection preserving adjacency and nonadjacency on distinct pairs ([[def-graph-isomorphism-and-complement]], [[def-induced-embedding-and-induced-copy]]).

[L8] A graph is $H$-free when it has no induced copy of $H$, and $\mathcal F$-free means $H$-free for every $H\in\mathcal F$ ([[def-h-free-and-family-free-graph]]).

[L9] The graph $P_5$ has the Erdős-Hajnal property ([[cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property]]).

[L10] The bull graph has the Erdős-Hajnal property ([[cor-the-bull-graph-has-the-erdos-hajnal-property]]).

[L11] A graph $H$ has the Erdős-Hajnal property when the hereditary class of $H$-free graphs has an Erdős-Hajnal constant, and the same terminology applies to a finite family through its class of family-free graphs ([[def-erdos-hajnal-property-and-constant]]).

## Proof

**Proof technique:** direct finite check of the two deletions, followed by the published Erdős-Hajnal inputs for the reduced graphs.

1.1 In $E$ the only edge incident with $q$ is $p_3q$, by [L1]. Hence $q$ has degree one and is a leaf, and $E\setminus\{q\}$ is the induced subgraph on $\{p_1,p_2,p_3,p_4,p_5\}$ with exactly the four edges $p_1p_2,p_2p_3,p_3p_4,p_4p_5$. [L1, L6, given]

1.2 In Bird the only edge incident with $w$ is $yw$, by [L2]. Hence $w$ has degree one and is a leaf, and $\mathrm{Bird}\setminus\{w\}$ is the induced subgraph on $\{x_1,x_2,x_3,y,z\}$ with edge set $\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z\}$, which is exactly the bull of [L3]. [L2, L3, L6, given]

2.1 Take $\mathcal F=\{\mathrm{Bird}\}$ and the member $\mathrm{Bird}$ with the leaf $w$ of step 1.2. Then $\mathrm{Bird}\setminus\{w\}$ is the bull by step 1.2, so the modified family of [L5] is the singleton $\{\text{bull}\}$, whose Erdős-Hajnal property is [L10] read through the family terminology of [L11]; both phrases describe the same class of bull-free graphs. Hence $\{\mathrm{Bird}\}$ is leaf-reducible. [step 1.2, L10, L11, L5]

2.2 The map $\varphi(i):=p_{i+1}$ for $i=0,1,2,3,4$ is a bijection from $V(P_5)$ onto $\{p_1,\dots,p_5\}$ whose four edges $\{i,i+1\}$ of [L4] correspond to the four edges $p_{i+1}p_{i+2}$ listed in step 1.1, and no other pairs are edges on either side. A bijection matching adjacency and nonadjacency is an isomorphism by [L7], so $E\setminus\{q\}\cong P_5$. [L4, step 1.1, L7]

3.1 Consequently a finite graph $G$ is $(E\setminus\{q\})$-free if and only if it is $P_5$-free: composing an induced embedding of $P_5$ in $G$ with the inverse of the isomorphism of step 2.2 yields an induced embedding of $E\setminus\{q\}$ in $G$, and composing an induced embedding of $E\setminus\{q\}$ with that isomorphism yields an induced embedding of $P_5$. [step 2.2, L7, L8]

4.1 By [L9] the class of $P_5$-free graphs has an Erdős-Hajnal constant; step 3.1 identifies it with the class of $(E\setminus\{q\})$-free graphs, so that class also has a constant, and [L11] makes the singleton family $\{E\setminus\{q\}\}$ a family with the Erdős-Hajnal property. [step 3.1, L9, L11]

5.1 Take $\mathcal F=\{E\}$ and the member $H=E$ with the leaf $q$ of step 1.1. Then $H\setminus\{q\}=E\setminus\{q\}$, so the modified family of [L5] is $\{E\setminus\{q\}\}\cup(\{E\}\setminus\{E\})=\{E\setminus\{q\}\}$, which has the Erdős-Hajnal property by step 4.1. Hence $\{E\}$ is leaf-reducible. [step 1.1, step 4.1, L5]

6.1 The two singleton families are leaf-reducible, the deleted graph is $P_5$ in the $E$ case and the bull in the Bird case, and the reduced singleton families $\{E\setminus\{q\}\}$ and $\{\mathrm{Bird}\setminus\{w\}\}$ have the Erdős-Hajnal property by steps 2.1 and 4.1. These are all the assertions of the statement. [step 5.1, step 2.1] ∎

## Remarks

- The two deletions are exactly the source's Section 2.1 observation that $E$ and Bird are leaf-reducible: $q$ is the pendant vertex of $E$ at the middle of the $P_5$, and $w$ is the extra pendant vertex attached at the horn $y$ of the bull inside Bird.
- **No Choice.** Every object here is finite and every step is a finite adjacency check or a citation of a published finite result; no selection from a family of nonempty sets occurs.
