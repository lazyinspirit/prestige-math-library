---
id: lem-generalized-niceness-yields-four-reduction-outcomes
kind: lemma
title: "Generalized niceness yields four reduction outcomes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-generalized-nice-finite-family, def-wonderful-finite-family, lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity, lem-a-complete-or-weakly-sparse-blockade-yields-a-complete-subblockade-or-an-anticonnected-thinning, lem-a-wonderful-anticonnected-complete-or-sparse-blockade-yields-a-restricted-subgraph-or-a-large-anticomplete-pair, lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph, lem-restrictedness-is-complement-invariant, def-c-sparse-and-c-restricted-vertex-set, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdos-Hajnal beyond the five-vertex path, Lemma 3.1"
      url: "https://arxiv.org/html/2606.06258v2"
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 7.1"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $\mathcal F$ be a generalized nice, leaf-reducible, wonderful finite family
of graphs. Then there exist constants $a_1,a_2,a_5>0$ and $a_3\ge a_4\ge 4$
such that for every $y\in(0,\tfrac12)$ and every $y$-restricted
$\overline{\mathcal F}$-free graph $G$, at least one of the following holds:

1. $G$ has a clique or stable set of size at least
   $$ (y^{a_1}|G|)^{a_2}; $$
2. $G$ has a $y^{a_4}$-restricted induced subgraph with at least
   $$ y^{a_3}|G| $$
   vertices;
3. $G$ has a complete or anticomplete $(k,|G|/k^{a_3})$-blockade with
   $k\ge y^{-1}$; or
4. there exist disjoint sets $X,Y\subseteq V(G)$ with
   $$ |X|\ge y^{a_3}|G|,\qquad |Y|\ge (1-a_5y)|G|, $$
   and $Y$ complete or anticomplete to $X$.

## Facts & Assumptions

**Given:** A generalized nice, leaf-reducible, wonderful finite family $\mathcal F$, a parameter $y\in(0,\tfrac12)$, and a $y$-restricted $\overline{\mathcal F}$-free graph $G$.

[L1] Generalized niceness supplies constants $c_1\ge 3$, $c_2\ge 8$, $c_3,c_4,c_5,c_8>0$, $c_6\ge 1$, and $c_7\ge 4$ with the four alternatives in [[def-generalized-nice-finite-family]].

[L2] Leaf-reducibility supplies constants $d>0$ and $h\ge 1$ such that every $y$-sparse $\mathcal F$-free graph yields either a large anticomplete pair or a deeper restricted induced subgraph ([[lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph]]).

[L3] Restrictedness is invariant under graph complementation ([[lem-restrictedness-is-complement-invariant]]).

[L4] Wonderfulness supplies an exponent $a\ge 6$ as in [[def-wonderful-finite-family]].

[L5] A complete-or-weakly-sparse blockade can be thinned to equal-sized subblocks with directional sparsity ([[lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity]]).

[L6] Such an equal-sized blockade either contains a complete subblockade or can be thinned further to anticonnected subblocks ([[lem-a-complete-or-weakly-sparse-blockade-yields-a-complete-subblockade-or-an-anticonnected-thinning]]).

[L7] A wonderful anticonnected blockade with small support yields either a $y^4$-restricted induced subgraph or a large anticomplete pair ([[lem-a-wonderful-anticonnected-complete-or-sparse-blockade-yields-a-restricted-subgraph-or-a-large-anticomplete-pair]]).

## Proof

**Proof technique:** separate the complement-sparse branch from the sparse branch, then resolve the blockade branch by thinning and wonderfulness.

1.1 Fix constants from [L1], [L2], and [L4], and set $a_1:=ac_3$, $a_2:=c_4$, $a_4:=4$, $a_5:=h+4$, and $a_3:=\max\{a(c_1+5),\,ac_8,\,c_5,\,4d+1\}$. These choices depend only on $\mathcal F$. [L1, L2, L4, choose]

2.1 If $|G|\le y^{-a_3}$, then any one-vertex induced subgraph of $G$ is $y^4$-restricted and has size at least $y^{a_3}|G|$. So outcome 2 holds. [step 1.1, given, algebra]

2.2 Suppose $\overline G$ is $y$-sparse. Apply [L2] to the family $\mathcal F$ inside $\overline G$ with the parameter $b=4$. Either $\overline G$ has a $y^4$-restricted induced subgraph of size at least $y^{4d+1}|G|$, or there are disjoint sets $X,Y\subseteq V(G)$ with $|X|\ge y^{4d+1}|G|$, $|Y|\ge (1-hy)|G|$, and $Y$ anticomplete to $X$ in $\overline G$. By [L3], the restricted induced subgraph is also $y^4$-restricted in $G$, and the anticomplete pair in $\overline G$ is a complete pair in $G$. Since $a_3\ge 4d+1$ and $a_5\ge h$, this gives outcome 2 or outcome 4 in $G$. [L2, L3, step 1.1, given, algebra]

2.3 We may therefore assume that $G$ itself is $y$-sparse. Put $\epsilon:=y^a$, where $a$ is the witness from [L4]. Because $G$ is $\overline{\mathcal F}$-free, [L1] applies to $G$ and $\epsilon$. If [L1] produces a clique or stable set of size $(\epsilon^{c_3}|G|)^{c_4}$, then this is exactly outcome 1 by the choice $a_1=ac_3$ and $a_2=c_4$. If [L1] produces a complete or anticomplete $(k,|G|/k^{c_5})$-blockade with $k\ge \epsilon^{-c_6}$, then $k\ge y^{-1}$ because $c_6\ge 1$, and $|G|/k^{c_5}\ge |G|/k^{a_3}$ because $a_3\ge c_5$, so outcome 3 holds. If [L1] produces an $\epsilon^{c_7}$-restricted induced subgraph of size at least $\epsilon^{c_8}|G|$, then $\epsilon^{c_7}\le y^4$ and $\epsilon^{c_8}=y^{ac_8}\ge y^{a_3}$, so outcome 2 holds. We are left only with the blockade alternative from [L1]. [L1, step 1.1, given, algebra]

3.1 Thus $G$ has a blockade $\mathcal A=(A_1,\ldots,A_\ell)$ with $\ell=\lceil\epsilon^{-1}\rceil$, each $|A_i|\ge m:=\epsilon^{c_1}|G|$, and every distinct pair complete or weakly $\epsilon^{c_2}$-sparse. Apply [L5] to obtain equal-sized subblocks $\mathcal D=(D_1,\ldots,D_\ell)$ with $|D_i|=q:=\lceil\epsilon\lceil m\rceil\rceil$ and every noncomplete pair mutually $\epsilon^{c_2-5}$-sparse. Then apply [L6] to $\mathcal D$. If [L6] yields a complete $(\ell,q/\ell^2)$-blockade, then $q/\ell^2\ge \epsilon m\cdot \epsilon^4=\epsilon^5m=y^{a(c_1+5)}|G|\ge y^{a_3}|G|$, because $\ell=\lceil\epsilon^{-1}\rceil\le \epsilon^{-2}$ for $\epsilon\in(0,\tfrac12)$ and step 1.1 has $a_3\ge a(c_1+5)$. Since also $\ell\ge \epsilon^{-1}=y^{-a}\ge y^{-1}$, outcome 3 follows. [L5, L6, step 2.3, step 1.1, choose, algebra]

4.1 We may therefore assume [L6] yields anticonnected subsets $B_i\subseteq D_i$ of common size $w:=\lceil q/\ell\rceil$ such that every distinct pair is either complete or mutually $(\epsilon^{c_2-5}\ell)$-sparse. Because $\ell\le \epsilon^{-2}$, every noncomplete pair is in fact mutually $\epsilon^{c_2-7}$-sparse. Also $w\ge q/\ell\ge \epsilon^3m=\epsilon^{c_1+3}|G|=y^{a(c_1+3)}|G|\ge y^{a_3}|G|$, since $q\ge \epsilon m$ and $\ell\le \epsilon^{-2}$. Since step 2.1 fails, $|G|>y^{-a_3}$, and because $a_3\ge a(c_1+5)$ with $\epsilon=y^a$, this gives $m=\epsilon^{c_1}|G|>y^{-5a}=\epsilon^{-5}$ and hence $q=\lceil\epsilon\lceil m\rceil\rceil>\epsilon m>\epsilon^{-4}\ge \epsilon^{-2}\ge \ell$. Therefore $|V(\mathcal B)|=\sum_{i=1}^\ell |B_i|\le \ell(q/\ell+1)=q+\ell\le 2q\le 2\lceil m\rceil\le 4m\le \epsilon^{c_1-2}|G|\le \epsilon|G|\le y|G|$, where $\mathcal B:=(B_1,\ldots,B_\ell)$. Since $c_2\ge 8$, one has $\epsilon^{c_2-7}=y^{a(c_2-7)}\le y^a$. Therefore the hypotheses of [L7] hold for $\mathcal B$. [step 2.1, step 3.1, L6, L7, step 1.1, algebra]

5.1 Applying [L7] to $\mathcal B$ yields either a $y^4$-restricted induced subgraph of size at least $w$, giving outcome 2, or disjoint sets $X,Y\subseteq V(G)$ with $|X|=w\ge y^{a_3}|G|$, $|Y|\ge (1-4y)|G| \ge (1-a_5y)|G|$, and $Y$ anticomplete to $X$, giving outcome 4. [L7, step 4.1, step 1.1, algebra]

6.1 The cases in steps 2.1, 2.2, 2.3, and 5.1 exhaust all possibilities, so one of the four stated outcomes always holds. [step 2.1, step 2.2, step 2.3, step 5.1] ∎
