---
id: thm-counting-lemma-for-a-fixed-graph
kind: theorem
title: "Counting lemma: regular dense pairs contain many part-respecting copies of every fixed graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-typical-degrees-in-a-regular-pair, lem-slicing-lemma-for-regular-pairs, def-finite-simple-graph]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Theorem 2.6.2"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
    - title: "D. Conlon and J. Fox, Graph removal lemmas, sec. 2.1"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Statement

Let $H$ be a finite simple graph on labelled vertices $[h]$, and let $0<\eta<1$. There are constants $\gamma=\gamma(H,\eta)>0$, $c=c(H,\eta)>0$, and $N=N(H,\eta)$ such that the following holds for every finite simple graph $G$. Let $W_1,\ldots,W_h\subseteq V(G)$ be nonempty, not necessarily distinct, with $|W_i|\ge N$. Whenever $ij\in E(H)$, require $W_i\ne W_j$ and require $(W_i,W_j)$ to be $\gamma$-regular in $G$ of density at least $\eta$. Then at least
$$c\prod_{i=1}^h|W_i|$$
maps $\phi:[h]\to V(G)$ with $\phi(i)\in W_i$ carry every edge of $H$ to an edge of $G$. At least half this many such maps are injective, after increasing $N$ if necessary.

## Facts & Assumptions

**Given:** $H,\eta$, a host graph $G$, and host sets $W_i\subseteq V(G)$ satisfying the Statement.

[L1] If $(X,Y)$ is $\epsilon$-regular of density $d$ and $Y'\subseteq Y$ satisfies $|Y'|\ge\epsilon|Y|$, then fewer than $\epsilon|X|$ vertices $x\in X$ have $|N(x)\cap Y'|<(d-\epsilon)|Y'|$, and separately fewer than $\epsilon|X|$ have $|N(x)\cap Y'|>(d+\epsilon)|Y'|$ ([[lem-typical-degrees-in-a-regular-pair]]).

[L2] Restricting a regular pair to sufficiently large subsets preserves regularity, with a controlled new parameter and density loss ([[lem-slicing-lemma-for-regular-pairs]]).

[L3] A finite simple graph has finitely many vertices, no loops, and unordered edges between distinct vertices ([[def-finite-simple-graph]]).

## Proof

**Proof technique:** direct.

1.1 If $h=0$ there is exactly one map $\phi:\emptyset\to V(G)$, it is injective and carries every edge of $H$ to an edge of $G$ vacuously, and $\prod_{i=1}^0|W_i|=1$, so $\gamma=c=1/2$ and $N=1$ give both assertions; assume $h\ge1$ from here. Put $e=|E(H)|$. Choose $\gamma>0$ with $\gamma\le(\eta/2)^h/(2h)$; since $h\ge1$ and $0<\eta<1$ this also gives $\gamma\le(\eta/2)^h$ and $\gamma\le\eta/2$. Set $c=2^{-h}(\eta/2)^e>0$. [given, L3, choose]

2.1 Embed the vertices in the order $1,\ldots,h$. After choosing images for $1,\ldots,r$, maintain for each $j>r$ the candidate set obtained by intersecting $W_j$ with the neighbourhoods of the already embedded neighbours of $j$. The invariant is $|C_j|\ge(\eta/2)^{d_r(j)}|W_j|$, where $d_r(j)$ is the number of neighbours of $j$ among $[r]$. [step 1.1, induction]

3.1 Suppose the invariant holds before embedding $r+1$, and let $j>r+1$ be a neighbour of $r+1$. The invariant and step 1.1 give $|C_j|\ge(\eta/2)^h|W_j|\ge\gamma|W_j|$, so $C_j$ meets the size threshold [L1] asks of a subset of $W_j$ inside the *original* $\gamma$-regular pair $(W_{r+1},W_j)$; no reslicing of that pair is needed for this bound, and [L2] confirms that the restricted pairs carried along remain regular. Write $d$ for the density of $(W_{r+1},W_j)$, so $d\ge\eta$. Applying [L1] to this one subset $C_j$, fewer than $\gamma|W_{r+1}|$ vertices of $W_{r+1}$ have fewer than $(d-\gamma)|C_j|$ neighbours in $C_j$, and $(d-\gamma)|C_j|\ge(\eta-\gamma)|C_j|\ge(\eta/2)|C_j|$ because $\gamma\le\eta/2$. This is a bound for the single subset $C_j$, giving one exceptional set for each neighbour of $r+1$. [step 1.1, step 2.1, L1, L2]

4.1 The union of the at most $h$ exceptional sets of step 3.1 has size at most $h\gamma|W_{r+1}|\le\tfrac12(\eta/2)^h|W_{r+1}|\le\tfrac12|C_{r+1}|$, so at least half of $C_{r+1}$ survives; note that the exceptional sets are measured against $W_{r+1}$, not against $C_{r+1}$. Every remaining choice preserves the invariant after replacing each future-neighbour candidate set by its neighbourhood. Vertex $v$ is therefore chosen from a set of size at least $\tfrac12(\eta/2)^{d_{v-1}(v)}|W_v|$, and $\sum_{v}d_{v-1}(v)=e$ because each edge is counted once, at its later endpoint. Thus the greedy induction supplies at least $2^{-h}(\eta/2)^e\prod_i|W_i|=c\prod_i|W_i|$ edge-preserving maps. [step 1.1, step 2.1, step 3.1, induction, algebra]

5.1 A noninjective map identifies at least one pair $i<j$ and hence there are at most $\binom h2N^{-1}\prod_i|W_i|$ collision choices. Choose $N$ so that this is at most $(c/2)\prod_i|W_i|$ whenever all $|W_i|\ge N$. [step 4.1, L3, algebra, choose]

6.1 Removing these collision maps leaves at least $(c/2)\prod_i|W_i|$ injective part-respecting copies of $H$. [step 4.1, step 5.1] ∎
