---
id: thm-induced-counting-lemma-for-regular-pairs
kind: theorem
title: "Induced counting lemma: regular edge and nonedge pairs force many induced copies"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-counting-lemma-for-a-fixed-graph, lem-complementation-preserves-disjoint-regular-pairs, def-induced-embedding-and-induced-copy, def-induced-copy-number]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Theorem 2.6.2 with Remark 2.6.3(b)"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
    - title: "D. Conlon and J. Fox, Graph removal lemmas, sec. 2.3"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Statement

Let $H$ be a graph on labelled vertices $[h]$ and let $0<\eta<1/2$. There are $\gamma=\gamma(H,\eta)>0$, $c=c(H,\eta)>0$, and $N=N(H,\eta)$ such that the following holds. Let $W_1,\ldots,W_h$ be vertex sets of size at least $N$, with repetitions allowed. Assume every $(W_i,W_j)$, including those with $W_i=W_j$, is $\gamma$-regular. If
$$d(W_i,W_j)\ge\eta\quad\text{for }ij\in E(H),\qquad d(W_i,W_j)\le1-\eta\quad\text{for }ij\notin E(H),$$
then there are at least $c\prod_i|W_i|$ injective maps $\phi$ with $\phi(i)\in W_i$ that induce $H$.

## Facts & Assumptions

**Given:** $H,\eta$ and regular host sets as in the Statement.

[L1] Regular dense pairs support a greedy count of many part-respecting injective edge-preserving maps of any fixed graph ([[thm-counting-lemma-for-a-fixed-graph]]).

[L2] For disjoint sets, complementation preserves the regularity parameter and replaces density $d$ by $1-d$ ([[lem-complementation-preserves-disjoint-regular-pairs]]).

[L3] An induced embedding is injective and preserves both adjacency and nonadjacency; its labelled count is $\operatorname{ind}_H(G)$ ([[def-induced-embedding-and-induced-copy]], [[def-induced-copy-number]]).

## Proof

**Proof technique:** direct.

1.1 Colour each unordered pair $ij$ of pattern vertices by whether it is an edge or a nonedge of $H$. On an edge pair retain adjacency in the host; on a nonedge pair regard nonadjacency as the required relation. [given, L3]

2.1 If $W_i$ and $W_j$ are disjoint, [L2] turns the latter relation into a $\gamma$-regular pair of complementary density at least $\eta$. If the host sets coincide or overlap, the same conclusion for candidate degrees follows directly from the defining regularity inequalities: replace each density $d(A,B)$ by the proportion of *distinct* ordered pairs in $A\times B$ that are nonedges. For candidate sets $A\subseteq W_i$ and $B\subseteq W_j$ the coinciding pairs number $|A\cap B|$, so this replacement changes the proportion by at most $|A\cap B|/(|A||B|)\le1/\max(|A|,|B|)$ — a bound in the *current* candidate sizes, not in $\min_i|W_i|$, since candidate sets shrink as the greedy argument proceeds. [step 1.1, L2, algebra]

3.1 Choose $\gamma$ small enough for the greedy argument underlying [L1] with density threshold $\eta/2$ and all $\binom h2$ coloured constraints, and let $\rho=\rho(H,\eta)>0$ be the fraction of its host set that every candidate set provably retains throughout that argument, so that every candidate set met in step 2.1 has size at least $\rho N$. Choose $N$ large enough that $1/(\rho N)<\eta/4$; then the diagonal error of step 2.1 stays below $\eta/4$ at every stage. [step 2.1, L1, choose]

4.1 Run that greedy proof with the required relation for each pair. At each stage the typical-degree exclusions occupy only a controlled fraction of the current candidate set, so at least $c_0\prod_i|W_i|$ relation-preserving maps remain for a constant $c_0=c_0(H,\eta)>0$. [step 3.1, L1, induction]

5.1 At most $\binom h2N^{-1}\prod_i|W_i|$ of these maps have a collision. Enlarge $N$ so this is below $c_0\prod_i|W_i|/2$ and put $c=c_0/2$. [step 4.1, algebra, choose]

6.1 Every surviving map is injective and realizes adjacency exactly on the edges of $H$, so it is an induced embedding by [L3]. This proves the claimed bound. [step 1.1, step 5.1, L3] ∎
