---
id: lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets
kind: lemma
title: "Many good $2t$-vertex subsets force many homogeneous $k$-sets"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-t-k-homogeneous-property, def-subgraph-induced-subgraph-and-spanning-subgraph, def-homogeneous-set-and-homogeneous-number, def-binomial-coefficient, thm-double-counting]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "M. Bucić, J. Fox, and H. T. Pham, Equivalence between Erdős-Hajnal and polynomial Rödl and Nikiforov conjectures, Lemma 13"
      url: "https://arxiv.org/html/2403.08303v1"
    - title: "T. H. Nguyen, Notes on Recent Work on the Erdős–Hajnal Conjecture, Lemma 13"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

Let $1\le k\le t$ be integers, and let $\mathcal C$ be a class of finite graphs
such that every graph in $\mathcal C$ has the $(t,k)$-homogeneous property. Let $G$ be a finite graph on
$n\ge2t$ vertices. Suppose at least half of the sets $X\in[V(G)]^{2t}$ contain
a $t$-element subset $T\subseteq X$ with $G[T]\in\mathcal C$. Then $G$ has at
least

$$
\frac12\left(\frac{n}{2t}\right)^k
$$

homogeneous vertex sets of size $k$.

## Facts & Assumptions

**Given:** Positive integers $1\le k\le t$, a class $\mathcal C$ of finite graphs, integers $n\ge2t$, an $n$-vertex graph $G$, and the hypothesis that at least half of the sets $X\in[V(G)]^{2t}$ contain a $t$-element subset $T$ with $G[T]\in\mathcal C$.

[L1] If a graph lies in $\mathcal C$, then every $t$-element subset of its vertex set contains a homogeneous $k$-element subset ([[def-t-k-homogeneous-property]], [[def-homogeneous-set-and-homogeneous-number]]).

[L2] For a subset $T\subseteq V(G)$, the induced subgraph on $T$ is $G[T]$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[L3] $\binom{a}{b}$ counts the $b$-element subsets of an $a$-element set ([[def-binomial-coefficient]]).

[L4] A finite relation can be counted by summing its row fibres or its column fibres ([[thm-double-counting]]).

## Proof

**Proof technique:** direct.

1.1 Call a set $X\in[V(G)]^{2t}$ **good** when it contains a $t$-element subset $T$ with $G[T]\in\mathcal C$; by hypothesis, there are at least $\tfrac12\binom{n}{2t}$ good sets. [given, L3]

1.2 If $X$ is good, choose $T\subseteq X$ with $|T|=t$ and $G[T]\in\mathcal C$; then [L1] gives a homogeneous $k$-element subset $K\subseteq T$, and since $G[T]$ is the induced subgraph on $T$, that same set $K$ is homogeneous in $G$. [L1, L2, choose]

2.1 Let $R$ be the relation between the homogeneous $k$-element subsets $K$ of $V(G)$ and the good sets $X\in[V(G)]^{2t}$ defined by $K\subseteq X$. Step 1.2 shows that every good $X$ is related to at least one $K$, so [L4] gives $|R|\ge\tfrac12\binom{n}{2t}$. [step 1.1, step 1.2, L4]

3.1 For the relation $R$ of step 2.1, fix a homogeneous $k$-element subset $K$ of $V(G)$. The good sets $X$ with $K\subseteq X$ are among the $2t$-element supersets of $K$, and [L3] counts those as $\binom{n-k}{2t-k}$. If $N$ is the number of homogeneous $k$-element subsets of $V(G)$, then [L4] gives $|R|\le N\binom{n-k}{2t-k}$. [step 2.1, L3, L4]

4.1 Comparing steps 2.1 and 3.1 yields $N\ge\tfrac12\binom{n}{2t}/\binom{n-k}{2t-k}=\tfrac12\binom{n}{k}/\binom{2t}{k}$. [step 2.1, step 3.1, algebra]

5.1 Since $n\ge2t$, each factor in the ratio formula satisfies $(n-j)/(2t-j)\ge n/(2t)$ for $0\le j<k$, so $\binom{n}{k}/\binom{2t}{k}\ge(n/(2t))^k$. Therefore $N\ge\tfrac12(n/(2t))^k$. [step 4.1, algebra] ∎
