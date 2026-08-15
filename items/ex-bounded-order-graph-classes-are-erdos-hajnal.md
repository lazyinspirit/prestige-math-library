---
id: ex-bounded-order-graph-classes-are-erdos-hajnal
kind: example
title: "Every hereditary graph class of bounded order has the Erdős–Hajnal property"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-erdos-hajnal-property-and-constant, def-homogeneous-set-and-homogeneous-number, thm-natural-logarithm-laws, def-real-power, def-natural-logarithm]
aliases: []
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Erdos-Hajnal properties in graphs and hypergraphs, introduction"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Example

Let $\mathcal C$ be a hereditary graph class for which some $N\in\mathbb N$ satisfies $|V(G)|\le N$ for every $G\in\mathcal C$. Then $\mathcal C$ has the Erdős–Hajnal property.

## Facts & Assumptions

**Given:** A hereditary class $\mathcal C$ and a natural number $N$ bounding the order of every member.

[L1] The definition applies to hereditary classes and asks for one $\epsilon>0$ such that every nonempty $G$ satisfies $\operatorname{hom}(G)\ge|V(G)|^\epsilon$ ([[def-erdos-hajnal-property-and-constant]]).

[L2] The homogeneous number is the larger of the clique and stable-set numbers ([[def-homogeneous-set-and-homogeneous-number]]).

[L3] The logarithm is strictly increasing, satisfies $\log1=0$, and obeys the quotient law ([[thm-natural-logarithm-laws]]).

[L4] For $a>0$ and $x\in\mathbb R$, $a^x:=\exp(x\log a)$ ([[def-real-power]]).

[L5] $\log:(0,\infty)\to\mathbb R$ is the inverse function of $\exp$; in particular $\exp(\log x)=x$ for $x>0$ and $\log(\exp y)=y$ for $y\in\mathbb R$ ([[def-natural-logarithm]]).

## Verification

**Proof technique:** cases.

1.1 [assume-case small] If $N\le1$, choose $\epsilon=1$; every nonempty member has one vertex and homogeneous number $1$ by [L2]. [given, L1, L2]

1.2 [assume-case large] If $N\ge2$, choose $\epsilon=1$ when $N=2$, and choose $\epsilon=\log2/\log N$ when $N>2$. In the latter case $\log N>\log2>\log1=0$ by [L3], so $\epsilon>0$, and [L4] with [L5] gives $N^\epsilon=\exp((\log2/\log N)\log N)=\exp(\log2)=2$. [L3, L4, L5, algebra, choose]

2.1 Since $\log$ is a strictly increasing bijection onto $\mathbb R$ with inverse $\exp$, the function $\exp$ is strictly increasing as well; so for $1\le n\le N$ the inequality $\epsilon\log n\le\epsilon\log N$ gives $n^\epsilon\le N^\epsilon=2$ by [L4]. [step 1.2, L3, L4, L5, algebra]

3.1 In the large case, a graph of order $n\ge2$ has either an edge, which is a two-vertex clique, or a nonedge, which is a two-vertex stable set; hence $\operatorname{hom}(G)\ge2\ge n^\epsilon$ by step 2.1, while for $n=1$ both sides equal $1$. The given hereditary hypothesis places $\mathcal C$ in the domain of [L1]. [given, step 2.1, L1, L2, algebra]

4.1 The cases are exhaustive, and in each [L1] supplies the Erdős–Hajnal property. [step 1.1, step 3.1, L1, cases-exhaustive] ∎
