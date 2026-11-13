---
id: lem-author-47d4423675aa-loop-free-mean
title: Loop-free Bernoulli adjacency and its two centerings
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-centered-matrices
  - def-expander-sync-graph-notation
  - math:def-expectation-on-a-finite-probability-space
  - math:def-bernoulli-and-binomial-random-variables
dependency_roles:
  def-expander-sync-erdos-renyi: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  math:def-expectation-on-a-finite-probability-space: mathematical-premise
  math:def-bernoulli-and-binomial-random-variables: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 3
---

## Statement

Let $A$ be the adjacency matrix of the simple graph $G(n,p)$, with $n\ge1$ and $0\le p\le1$. Matrix expectation is taken entrywise: $(\mathbb EA)_{ij}=\mathbb E[A_{ij}]$. Write $J$ for the all-ones matrix, $I$ for the identity, $X=A-\mathbb EA$, and $\Delta=A-pJ$, the reference-degree centering at $d^*=np$. Then $\mathbb EA=p(J-I)$, $X_{ii}=0$, $\Delta_{ii}=-p$, and $\Delta=X-pI$. For $p>0$, the diagonal entries of $\Delta$ are not centered Bernoulli variables, since their mean is $-p\ne0$. For $p=0$, they are the zero centered Bernoulli($0$) variables. Here a centered Bernoulli($p$) variable means $B-p$ for a Bernoulli($p$) variable $B$.

## Statement references

[[def-expander-sync-erdos-renyi]]

[[def-expander-sync-centered-matrices]]

[[def-expander-sync-graph-notation]]

[[math:def-expectation-on-a-finite-probability-space]]

[[math:def-bernoulli-and-binomial-random-variables]]

## Facts & Assumptions

[F1] The adjacency entry $A_{ij}$ is the indicator of the edge $\{i,j\}$. The simple graph has zero diagonal and mutually independent Bernoulli($p$) entries above the diagonal. [[def-expander-sync-graph-notation]] [[def-expander-sync-erdos-renyi]] [[math:def-bernoulli-and-binomial-random-variables]]

[F2] The reference-degree centered adjacency matrix is $A-(d^*/n)J$. [[def-expander-sync-centered-matrices]]

[F3] For a real random variable $Y$ on a finite probability space $(\Omega,w)$, $\mathbb E[Y]=\sum_{\omega\in\Omega}Y(\omega)w(\omega)$; a real constant also denotes the corresponding constant random variable. [[math:def-expectation-on-a-finite-probability-space]]

[F4] For $p\in[0,1]$, a Bernoulli($p$) variable $B$ takes the value $1$ with probability $p$ and $0$ with probability $1-p$. [[math:def-bernoulli-and-binomial-random-variables]]

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the stated conclusions, including the case $p=0$.

1.1 Work on the finite probability space of simple graphs on $[n]$ with the law in [F1]. For $i\ne j$, [F1] and [F3] give $\mathbb E[A_{ij}]=\sum_{\omega:A_{ij}(\omega)=1}w(\omega)=p$, since that sum is the probability that the edge is present. For $i=j$, $A_{ii}=0$ gives $\mathbb E[A_{ii}]=0$. Taking matrix expectation entrywise therefore gives $\mathbb EA=p(J-I)$ and $X_{ii}=0$. [given, F1, F3, algebra]

2.1 Substitute $d^*=np$ in [F2]. Then $\Delta=A-pJ=A-p(J-I)-pI=X-pI$. Since $A_{ii}=0$ and $J_{ii}=1$, this also gives $\Delta_{ii}=-p$. [given, F1, F2, step 1.1, algebra]

3.1 By [F3], the deterministic variable $\Delta_{ii}=-p$ has mean $-p\sum_{\omega\in\Omega}w(\omega)=-p$. By [F4], for a Bernoulli($p$) variable $B$, the centered variable $B-p$ has mean $p(1-p)+(1-p)(-p)=0$ by the same weighted-sum definition. Thus for $p>0$ the diagonal entries cannot be centered Bernoulli variables. At $p=0$, $B=0$ almost surely and both $B-p$ and $\Delta_{ii}$ are zero. This proves the distinction with its degenerate exception throughout the stated parameter range. [given, F1, F3, F4, step 2.1, algebra] ∎
