---
id: thm-induced-graph-removal-lemma
kind: theorem
title: "Induced graph removal lemma for a fixed graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-self-regular-representative-subsets, thm-induced-counting-lemma-for-regular-pairs, def-graph-edit-distance-and-epsilon-far, def-induced-copy-number]
aliases: []
landmark: true
proof_strategy: contraposition
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Theorem 2.8.1"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
    - title: "D. Conlon and J. Fox, Graph removal lemmas, Theorem 1.3"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Statement

For every finite graph $H$ and every $\epsilon>0$ there are $\delta>0$ and $n_0$ such that every graph $G$ of order $n\ge n_0$ satisfying
$$\operatorname{ind}_H(G)<\delta n^{|V(H)|}$$
can be changed into an induced-$H$-free graph by adding or deleting fewer than $\epsilon n^2$ edges. Equivalently, every graph that is $\epsilon$-far from being induced-$H$-free contains at least $\delta n^{|V(H)|}$ labelled induced copies of $H$.

## Facts & Assumptions

**Given:** A fixed graph $H$, $\epsilon>0$, and a sufficiently large graph $G$.

[L1] For any prescribed minimum part count $k_0$, every graph of order at least $k_0$ has an equitable partition into $k$ parts with $k_0\le k\le K$, carrying nonempty representative subsets $W_i\subseteq V_i$ of size at least $\delta n$, such that every representative pair, including self-pairs, is very regular and all but at most $\epsilon_0k^2$ ordered representative densities approximate their coarse densities ([[thm-self-regular-representative-subsets]]).

[L2] Regular pairs whose edge and nonedge densities stay away from the wrong extremes force a positive product-proportion of induced embeddings of $H$ ([[thm-induced-counting-lemma-for-regular-pairs]]).

[L3] Edit distance counts added and deleted adjacencies, and $\epsilon$-far means that every graph in the target hereditary property is at distance at least $\epsilon n^2$ ([[def-graph-edit-distance-and-epsilon-far]]).

[L4] The number $\operatorname{ind}_H(G)$ counts labelled induced embeddings of $H$ in $G$ ([[def-induced-copy-number]]).

## Proof

**Proof technique:** contraposition.

1.1 We prove the equivalent far-from-free formulation. Choose $0<\eta\ll\epsilon$, require $n_0\ge8/\epsilon$, and apply [L1] with minimum part count $k_0=\lceil8/\epsilon\rceil$ and with density-approximation error and regularity sequence small enough for [L2]. Write the resulting coarse parts as $V_1,\ldots,V_k$, so that $k\ge8/\epsilon$, and the representatives as $W_1,\ldots,W_k$. [contrapositive-reduce, given, L1, L2, choose]

2.1 Construct $G'$ from $G$ as follows for every unordered coarse pair, allowing a pair with equal indices. If $d(W_i,W_j)<\eta$, delete all corresponding edges; if $d(W_i,W_j)>1-\eta$, add all corresponding nonedges; otherwise leave those adjacencies unchanged. [step 1.1, choose]

3.1 For every coarse pair whose representative and coarse densities differ by at most the approximation error, the number of edits is at most $(\eta+o(1))|V_i||V_j|$. Exceptional pairs have total count at most $o(k^2)$, and equitability controls their weight. The diagonal pairs are edited without any density control, but equitability bounds their total contribution by $\sum_i|V_i|^2\le n\max_i|V_i|\le n(n/k+1)=n^2/k+n$, which the choices $k\ge8/\epsilon$ and $n\ge n_0\ge8/\epsilon$ of step 1.1 make at most $\epsilon n^2/4$. The choices in step 1.1 therefore make $\operatorname{dist}(G,G')<\epsilon n^2$. [step 1.1, step 2.1, L1, L3, algebra]

4.1 Assume that $G$ is $\epsilon$-far from induced-$H$-free. Then [L3] and step 3.1 imply that $G'$ contains an induced copy of $H$. For each pattern vertex $a$, let $i(a)$ be the coarse part containing its image. Repetitions among the indices are allowed. [assume-hyp, step 3.1, L3, choose]

5.1 If $ab\in E(H)$, the cleaning rule and the edge of this copy imply $d(W_{i(a)},W_{i(b)})\ge\eta$. If $ab\notin E(H)$, its nonedge implies $d(W_{i(a)},W_{i(b)})\le1-\eta$. Every such representative pair is regular, including when $i(a)=i(b)$, by [L1]. [step 2.1, step 4.1, L1]

6.1 Apply [L2] to $W_{i(1)},\ldots,W_{i(h)}$. Since every representative has size at least $\rho n$ for a constant $\rho>0$, the original graph $G$ contains at least $c\prod_{a=1}^h|W_{i(a)}|\ge c\rho^h n^h$ induced embeddings of $H$. Set $\delta=c\rho^h$. [step 5.1, L2, L4, algebra]

7.1 Thus every $\epsilon$-far graph has at least $\delta n^h$ induced copies. This is the contrapositive, and hence proves both formulations in the Statement. [step 1.1, step 6.1, discharge-contrapositive] ∎
