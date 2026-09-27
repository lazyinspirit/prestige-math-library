---
id: thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex
kind: theorem
title: "Every forest-free graph has a linear anticomplete pair or a linear-degree vertex"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-h-free-and-family-free-graph, def-tree-forest-and-leaf, def-graph-adjacency-incidence-neighbourhood-and-degree, def-edges-between-sets-and-pure-mixed-pairs, def-coherent-graph-and-support-regular-blockade, lem-blockade-has-support-invariant-uniform-minor, lem-concave-support-regular-blockade-contains-rooted-tree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Pure pairs. I. Trees and linear anticomplete pairs, statement 1.4"
      url: "https://arxiv.org/pdf/1809.00919"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-07-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

For every forest $H$, there exists a real constant $\epsilon_H>0$ such that
every finite $H$-free graph $G$ with $|V(G)|\ge 2$ satisfies at least one of
the following:

1. some vertex of $G$ has degree at least $\epsilon_H|V(G)|$;
2. there exist disjoint sets $A,B\subseteq V(G)$ with
   $$|A|\ge \epsilon_H|V(G)|,\qquad |B|\ge \epsilon_H|V(G)|,$$
   and $A$ anticomplete to $B$.

## Facts & Assumptions

**Given:** A forest $H$ and an $H$-free finite graph $G$ with at least two vertices.

[L1] Coherence, rainbow copies, support-uniformity and concavity are as in [[def-coherent-graph-and-support-regular-blockade]].

[L2] Every sufficiently long blockade has an equicardinal support-uniform and support-invariant minor of explicitly bounded width ([[lem-blockade-has-support-invariant-uniform-minor]]).

[L3] A sufficiently long, wide, concave support-regular blockade in a coherent graph contains the prescribed complete rooted tree ([[lem-concave-support-regular-blockade-contains-rooted-tree]]).

## Proof

**Proof technique:** induction on a rainbow-tree theorem, followed by a coherence contradiction.

1.1 We prove the following quantitative claim $P(T)$ for every finite tree $T$: there are an integer $K_T\ge1$ and a real $d_T\ge1$ such that whenever a graph $F$ has a blockade $\mathcal B$ of length at least $K_T$ and width $W$, and $F$ is $W/(d_T|F|)$-coherent, it contains a $\mathcal B$-rainbow induced copy of $T$. For the one-vertex tree take $K_T=d_T=1$. Assume the claim for the tree $T'=T-v$ obtained by deleting a leaf $v$ from a larger tree $T$, and let $u$ be the neighbor of $v$. [base, ih]

2.1 Embed $T$ as an induced subtree of $T(\delta,\eta)$ for integers $\delta\ge2$, $\eta\ge0$. Set $\tau=\delta^{\eta+1}$, $\rho=2^{-9\delta}$, $\lambda=\rho\delta^{-\eta-1}$, $\kappa=\lambda/2$, and $r=\lceil(|T|-1)/\kappa\rceil$. Enlarge $K_{T'}$ to a multiple $K'$ of $r$ satisfying $K'\ge6r\delta^{\eta+2}$, and put $k=K'/r$. Choose $K$ from [L2] for parameters $K',\tau,\kappa$; put $M=2^K\tau^\tau$ and $d=\kappa^{-M}\max\{d_{T'},2^{9\delta}/r\}$. We claim $K_T=K$ and $d_T=\max\{1,d\}$ work. [step 1.1, L2, choose]

3.1 Let $F$ and $\mathcal B$ satisfy the claim's hypotheses for $K,d$, write $n=|F|$ and $\epsilon=W/(dn)$, and suppose there is no rainbow $T$. By [L2], $\mathcal B$ has an equicardinal minor $\mathcal B'=(B'_1,\ldots,B'_{K'})$ of width $w\ge\kappa^MW$, which is $\tau$-support-uniform and $(\kappa,\tau)$-support-invariant. Since $w\ge d_{T'}\epsilon n$, $\epsilon$-coherence implies $w/(d_{T'}n)$-coherence. Apply $P(T')$ to find a rainbow copy of $T'$. Order its vertices by block index, call the resulting ordered tree $J$, write $t=|T'|$, and let the image of $u$ be its $j$th vertex. [step 1.1, step 2.1, L2, ih]

4.1 No set $X$ lying in blocks of $\mathcal B'$ outside selected indices $i_1<\cdots<i_t$ can $\kappa$-cover $B'_{i_j}$ and $\kappa$-miss every other selected block. If such $X$ existed, contract $B'_{i_j}$ to vertices with a neighbor in $X$, each other selected block to vertices without a neighbor in $X$, and leave the remaining blocks unchanged. This has width at least $\kappa w$. Support-invariance and support-uniformity preserve a copy of $J$ on the selected support. A neighbor in $X$ of its $j$th vertex then has no neighbor among its other vertices, giving a rainbow $T$, a contradiction. [step 3.1, L1]

5.1 Group consecutive runs of $r$ blocks of $\mathcal B'$ into $C_h=B'_{r(h-1)+1}\cup\cdots\cup B'_{rh}$, $1\le h\le k$. This is an equicardinal blockade $\mathcal C$ of width $rw$. It is $\lambda=2\kappa$-concave. Indeed, if $X$ outside three selected superblocks $C_{h_1},C_{h_2},C_{h_3}$ covered the middle one and missed the two outer ones at level $2\kappa$, some constituent middle block would be $\kappa$-covered. Unless step 4.1 applied, fewer than $j-1$ constituent blocks of the left superblock or fewer than $t-j$ of the right could be $\kappa$-missed. On that side fewer than $t$ blocks have as many as $w$ nonneighbors in $X$; every other constituent block has fewer than $\kappa w$. Its total nonneighbors would be less than $tw+(r-t)\kappa w$, while $2\kappa$-missing the side requires at least $2\kappa rw$. Thus $t(1-\kappa)>\kappa r$, impossible because $r\ge t/\kappa$. [step 4.1, algebra]

6.1 The superblock blockade is also $\tau$-support-uniform and $(\kappa,\tau)$-support-invariant. To see this, a rainbow copy of an ordered tree on the superblocks is already rainbow on constituent blocks, and support-uniformity of $\mathcal B'$ places it on any chosen constituent block of each selected superblock. If each selected superblock is contracted to at least $\kappa rw$ vertices, one constituent block retains at least $\kappa w$ vertices. Support-invariance of $\mathcal B'$ then preserves the copy on those constituents. Since $\kappa\le\rho$, this also gives $(\rho,\tau)$-support-invariance. Moreover $k\ge6\delta^{\eta+2}$ and $rw\ge r\kappa^MW\ge2^{9\delta}\epsilon n$. Thus [L3] applies to $\mathcal C$ and gives a rainbow $T(\delta,\eta)$, containing a rainbow induced $T$. This contradicts step 3.1 and proves $P(T)$ by induction. [step 2.1, step 3.1, step 5.1, L3, discharge-induction]

7.1 Choose a tree $T$ containing $H$ as an induced subgraph: join the components of $H$ in a chain through new intermediate vertices; the case $H=\varnothing$ has no nonempty $H$-free graph. Let $K_T,d_T$ satisfy $P(T)$, enlarge $d_T$ if needed so $d_T\ge1$, and choose $0<\epsilon_H\le(2K_Td_T)^{-1}$. Every $\epsilon_H$-coherent graph $F$ has $\epsilon_H|F|>1$: otherwise its maximum degree is zero, and two singleton anticomplete sets violate coherence. Hence $|F|>1/\epsilon_H\ge2K_Td_T$. Partition off $K_T$ disjoint blocks, each of size at least $|F|/(2K_T)\ge d_T\epsilon_H|F|$. By $P(T)$, $F$ contains induced $T$, hence induced $H$. [step 6.1, L1, construct]

8.1 If the given $H$-free $G$ had neither a vertex of degree at least $\epsilon_H|G|$ nor an anticomplete pair with both sides at least $\epsilon_H|G|$, it would be $\epsilon_H$-coherent. Step 7.1 would then give an induced $H$, contrary to the hypothesis. Thus one of the two alternatives holds for the same constant $\epsilon_H$ in every $H$-free graph. [step 7.1, discharge-contradiction] ∎
