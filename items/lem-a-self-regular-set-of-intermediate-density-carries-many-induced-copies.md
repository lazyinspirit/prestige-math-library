---
id: lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies
kind: lemma
title: "A large $\\gamma$-self-regular set whose density lies between $\\eta$ and $1-\\eta$ forces at least $c|W|^{|V(H)|}$ induced copies of $H$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-induced-counting-lemma-for-regular-pairs, def-epsilon-regular-pair, def-edge-density-between-vertex-sets, def-induced-copy-number, def-induced-embedding-and-induced-copy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, sec. 2.8"
      url: "https://yufeizhao.com/gtacbook/gtacbook.pdf"
pipeline_run: null
---

## Statement

Fix a graph $H$ with $h=|V(H)|$, a real $0<\eta<1/2$, and constants
$\gamma(H,\eta),c(H,\eta)>0$ and $N(H,\eta)$ from the induced counting lemma. If
$0<\gamma\le\gamma(H,\eta)$ and $W\subseteq V(G)$ has $|W|\ge N(H,\eta)$ with $(W,W)$
$\gamma$-regular and $\eta\le d_G(W,W)\le1-\eta$, then

$$
\operatorname{ind}_H(G)\ge c(H,\eta)|W|^h.
$$

## Facts & Assumptions

**Given:** A graph $H$ with $h$ vertices, a real $0<\eta<1/2$, a graph $G$, a set $W\subseteq V(G)$ with $|W|\ge N(H,\eta)$, and a real $0<\gamma\le\gamma(H,\eta)$ such that $(W,W)$ is $\gamma$-regular and $\eta\le d_G(W,W)\le1-\eta$.

[L1] If $0<\eta<1/2$, the induced counting lemma supplies $\gamma(H,\eta),c(H,\eta)>0$ and $N(H,\eta)$; it applies to $h$ sets $W_i$ of size at least $N(H,\eta)$, repetitions allowed, when every relevant pair is $\gamma(H,\eta)$-regular and the edge- and nonedge-density bounds hold, and then yields at least $c(H,\eta)\prod_i|W_i|$ induced embeddings of $H$ ([[thm-induced-counting-lemma-for-regular-pairs]]).

[L2] If $0<\gamma\le\gamma(H,\eta)$ and $(W,W)$ is $\gamma$-regular, then it is also $\gamma(H,\eta)$-regular: any $A,B\subseteq W$ with $|A|\ge\gamma(H,\eta)|W|$ and $|B|\ge\gamma(H,\eta)|W|$ also satisfy the $\gamma$-threshold, so the defining density deviation is at most $\gamma\le\gamma(H,\eta)$ ([[def-epsilon-regular-pair]]).

[L3] The induced-copy number counts induced embeddings of $H$ ([[def-induced-copy-number]], [[def-induced-embedding-and-induced-copy]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with $W_1=\cdots=W_h=W$. The repeated-set case is permitted by the statement of the counting lemma. [L1]

2.1 By [L2], every pair $(W_i,W_j)$ in this application is $\gamma(H,\eta)$-regular. [step 1.1, L2]

2.2 If $ij$ is an edge of $H$, then the required density lower bound is the left inequality $\eta\le d_G(W,W)$. If $ij$ is a non-edge, the required upper bound is the right inequality $d_G(W,W)\le1-\eta$. So all density hypotheses of [L1] are satisfied. [step 1.1, given]

3.1 Therefore [L1] produces at least $c(H,\eta)|W|^h$ induced embeddings of $H$ in $G$, and [L3] identifies this number with $\operatorname{ind}_H(G)$. [step 2.1, step 2.2, L1, L3] ∎
