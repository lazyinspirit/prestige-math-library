---
id: lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph
kind: lemma
title: "Leaf-reducible families yield a large anticomplete pair or a deeper restricted induced subgraph"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-leaf-reducible-finite-family, def-c-sparse-and-c-restricted-vertex-set, def-induced-copy-number, def-viral-property-for-a-finite-family, def-h-free-and-family-free-graph, thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence, lem-leaf-extension-copy-or-sparse-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Huang, Ju and Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 2.7"
      url: "https://arxiv.org/pdf/2606.06258v2"
    - title: "Nguyen, Scott and Seymour, Induced subgraph density IV, Lemma 5.1"
      url: "https://arxiv.org/pdf/2307.06455"
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

Let $\mathcal F$ be a leaf-reducible finite family of graphs. Then there exist
constants $d>0$ and $h\ge 1$ such that for every $y\in(0,\tfrac12)$, every
$b>1$, and every $y$-sparse $\mathcal F$-free graph $G$, at least one of the
following holds:

1. there are disjoint sets $X,Y\subseteq V(G)$ with
$$|X|\ge y^{bd+1}|V(G)|,\qquad |Y|\ge (1-hy)|V(G)|,$$
and $Y$ anticomplete to $X$; or
2. $G$ has a $y^b$-restricted induced subgraph with at least
$$y^{bd+1}|V(G)|$$
vertices.

## Facts & Assumptions

**Given:** A leaf-reducible family $\mathcal F$, $b>1$, $y\in(0,1/2)$, and a nonempty $y$-sparse $\mathcal F$-free graph $G$ on $n$ vertices.

[L1] Leaf-reducibility gives $H\in\mathcal F$ and a leaf $v$ such that $\mathcal F'=\{H-v\}\cup(\mathcal F\setminus\{H\})$ has the Erdős-Hajnal property ([[def-leaf-reducible-finite-family]]).

[L2] The Erdős-Hajnal property of a finite family implies its virality ([[thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence]]).

[L3] The leaf-extension counting lemma gives, in a $y$-sparse host, many $H$ copies, few $H-v$ copies in a set of size at least $yn$, or a pair $A,B$ with $|A|\ge y^a n$, $|B|\ge(1-|H|y)n$, and $B$ $x$-sparse to $A$ ([[lem-leaf-extension-copy-or-sparse-pair]]).

## Proof

**Proof technique:** direct.

1.1 Fix $H,v$ from [L1], put $r=|H|$, and choose a viral exponent $D\ge1$ for $\mathcal F'$ by [L2]. If $r=2$, then $H$ is an edge, so the $H$-free graph $G$ is stable and its whole vertex set is $0$-sparse. Taking $d=h=1$ gives outcome 2 for all $y,b$. Hence assume $r\ge3$ and set $d=D(r-1)+2$ and $h=2r$. These constants depend only on $\mathcal F$. [L1, L2, given]

2.1 If $y\ge(2r)^{-1}$, then $(1-hy)n\le0$. Taking $X=V(G)$ and $Y=\varnothing$ gives outcome 1, since $y^{bd+1}\le1$. Hence assume $y<(2r)^{-1}$. Put $x=\min\{y/2,(2n)^{-1}\}>0$ and $a=bD(r-1)+3$. Then $x\le y$, $a\ge2$, and [L3] applies. Its many-$H$ outcome is impossible because $G$ is $\mathcal F$-free. [step 1.1, L3, given, algebra]

3.1 Suppose the few-$H-v$ outcome of [L3] holds. It gives $S\subseteq V(G)$ with $|S|\ge yn$ and $\operatorname{ind}_{H-v}(G[S])\le y^{a-2}|S|^{r-1}<y^{bD(r-1)}|S|^{r-1}$, since $a-2=bD(r-1)+1$ and $y<1$. Every unchanged member of $\mathcal F'$ belongs to $\mathcal F$, so it has zero copies in $G[S]$. The viral premise for $\mathcal F'$ therefore holds at $\epsilon=y^b$. Virality yields a $y^b$-restricted induced subgraph with at least $y^{bD}|S|\ge y^{bD+1}n\ge y^{bd+1}n$ vertices. This is outcome 2. [step 1.1, step 2.1, L2, L3, algebra]

3.2 Otherwise [L3] gives disjoint $A,B$ with $|A|\ge y^a n$, $|B|\ge(1-ry)n\ge(1-hy)n$, and $B$ $x$-sparse to $A$. Since $x|A|\le xn\le1/2$, every vertex of $B$ has integer degree zero into $A$, so $B$ is anticomplete to $A$. Also $bd+1=bD(r-1)+2b+1\ge a$ because $b>1$. Thus $|A|\ge y^{bd+1}n$, and $X=A,Y=B$ give outcome 1. [step 1.1, step 2.1, L3, algebra]

4.1 Step 2.1 handles the large-$y$ case, while steps 3.1 and 3.2 exhaust the two remaining alternatives of [L3]. Thus one of the stated outcomes always holds. [step 2.1, step 3.1, step 3.2] ∎
