---
id: lem-supersaturation-for-induced-copies
kind: lemma
title: "If every $m$-element vertex set contains an induced copy of $H$, then at least $\\binom{n}{h}/\\binom{m}{h}$ of the $h$-element vertex sets induce a copy of $H$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-induced-embedding-and-induced-copy, def-binomial-coefficient, thm-binomial-closed-formula, def-factorial-and-falling-factorial, thm-double-counting, def-a-finite-incidence-relation-and-its-fibres, def-sum-over-a-finite-index-set, def-finite-cardinality, thm-subset-of-a-finite-set, def-subgraph-induced-subgraph-and-spanning-subgraph]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdős–Hajnal Conjecture: A Survey, sec. 2"
      url: "https://arxiv.org/pdf/1606.08827"
pipeline_run: null
---

## Statement

Let $H$ be a finite simple graph with $h=|V(H)|\ge1$, let $G$ be a finite simple
graph with $n=|V(G)|$, and let $m$ be a natural number with $h\le m\le n$.
Suppose every $W\subseteq V(G)$ with $|W|=m$ has a subset $S\subseteq W$ with
$|S|=h$ and $G[S]\cong H$. Let $g$ be the number of sets $S\subseteq V(G)$ with
$|S|=h$ and $G[S]\cong H$. Then

$$g\ \ge\ \frac{\binom{n}{h}}{\binom{m}{h}}\ \ge\ \frac{(n-h+1)^{h}}{m^{h}}.$$

## Facts & Assumptions

**Given:** Finite simple graphs $H$ and $G$ with $h=|V(H)|\ge1$ and $n=|V(G)|$, a natural number $m$ with $h\le m\le n$, and the hypothesis that every $m$-element $W\subseteq V(G)$ has an $h$-element subset $S$ with $G[S]\cong H$.

[F1] For a finite set $A$ and $k\in\mathbb N$, $[A]^{k}$ is the set of $k$-element subsets of $A$, it is finite, and $|[A]^{k}|=\binom{|A|}{k}$ ([[def-binomial-coefficient]], [[def-finite-cardinality]]).

[L1] For finite sets $X,Y$ and a relation $R\subseteq X\times Y$ with row fibres $R_x$ and column fibres $R^{y}$, one has $\sum_{x\in X}|R_x|=|R|=\sum_{y\in Y}|R^{y}|$ ([[thm-double-counting]], [[def-a-finite-incidence-relation-and-its-fibres]]).

[F2] For a finite index set $S$ and a constant $c$, $\sum_{i\in S}c=|S|\cdot c$ ([[def-sum-over-a-finite-index-set]]).

[L2] Every subset of a finite set is finite, and its cardinality is at most that of the set ([[thm-subset-of-a-finite-set]]).

[L3] For $k\le N$ one has $\binom{N}{k}\cdot k!=N^{\underline{k}}$ ([[thm-binomial-closed-formula]]).

[F3] $N^{\underline{0}}=1$ and $N^{\underline{k+1}}=N^{\underline{k}}\cdot(N-k)$, so for $k\le N$ the falling factorial $N^{\underline{k}}$ is the product $N(N-1)\cdots(N-k+1)$ of the $k$ topmost factors ([[def-factorial-and-falling-factorial]]).

[F4] An induced copy of $H$ in $G$ is the image $G[\varphi(V(H))]$ of an induced embedding, and $G[S]=(S,\,E(G)\cap[S]^2)$ ([[def-induced-embedding-and-induced-copy]], [[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

## Proof

**Proof technique:** direct.

1.1 Write $\mathcal G=\{S\in[V(G)]^{h}:G[S]\cong H\}$, so $g=|\mathcal G|$, and let $R\subseteq[V(G)]^{m}\times[V(G)]^{h}$ consist of the pairs $(W,S)$ with $S\subseteq W$, and $R'\subseteq R$ of those with $S\in\mathcal G$. Both index sets are finite. [F1, F4, L2]

1.2 The row fibre of $R$ at $W$ is $[W]^{h}$, of size $\binom{m}{h}$, and the column fibre of $R$ at $S$ is $\{W\in[V(G)]^{m}:S\subseteq W\}$, which the map $W\mapsto W\setminus S$ carries bijectively onto $[V(G)\setminus S]^{m-h}$, of size $\binom{n-h}{m-h}$. [F1, L2]

1.3 The row fibre of $R'$ at $W$ is $\{S\in\mathcal G:S\subseteq W\}$, which is nonempty by hypothesis, and the column fibre of $R'$ at $S\in\mathcal G$ is the same set as for $R$, of size $\binom{n-h}{m-h}$, while the column fibre at $S\notin\mathcal G$ is empty. [F1, given, L2]

1.4 By [L3] and [F3], $\binom{n}{h}h!=n^{\underline h}=n(n-1)\cdots(n-h+1)$ and $\binom{m}{h}h!=m^{\underline h}=m(m-1)\cdots(m-h+1)$, so $\binom{n}{h}/\binom{m}{h}=n^{\underline h}/m^{\underline h}$. [L3, F3, algebra]

2.1 Double counting $R$ with the two fibre sizes of step 1.2 and the constant-summand rule gives $\binom{n}{m}\binom{m}{h}=|R|=\binom{n}{h}\binom{n-h}{m-h}$. [step 1.1, step 1.2, L1, F1, F2]

2.2 Double counting $R'$ gives $|R'|=\sum_{W}|R'_W|\ge\sum_{W}1=\binom{n}{m}$, since every row fibre has at least one element, and also $|R'|=g\binom{n-h}{m-h}$ by summing the column fibres of step 1.3 over $\mathcal G$. [step 1.1, step 1.3, L1, F1, F2, algebra]

2.3 Each of the $h$ factors of $n^{\underline h}$ is at least $n-h+1\ge1$ and each of the $h$ factors of $m^{\underline h}$ is at most $m$, and all of them are positive because $h\le m\le n$; hence $n^{\underline h}\ge(n-h+1)^{h}$ and $m^{\underline h}\le m^{h}$, so $n^{\underline h}/m^{\underline h}\ge(n-h+1)^{h}/m^{h}$. [step 1.4, F3, algebra]

3.1 Since $m-h\le n-h$ and $h\le m$, the sets $[n-h]^{m-h}$ and $[m]^{h}$ are nonempty, so $\binom{n-h}{m-h}\ge1$ and $\binom{m}{h}\ge1$; dividing the inequality of step 2.2 by $\binom{n-h}{m-h}$ and substituting step 2.1 gives $g\ge\binom{n}{m}/\binom{n-h}{m-h}=\binom{n}{h}/\binom{m}{h}$. [step 2.1, step 2.2, F1, algebra]

4.1 Combining steps 3.1, 1.4 and 2.3 gives $g\ge\binom{n}{h}/\binom{m}{h}\ge(n-h+1)^{h}/m^{h}$. [step 3.1, step 1.4, step 2.3, algebra] ∎
