---
id: thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades
kind: theorem
title: "Large sparse-pair hypotheses yield an $x$-sparse or complete blockade"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-blockade-length-and-width, def-directional-and-weak-sparsity-between-vertex-sets, def-sparse-orientation-of-a-blockade]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 2.8"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $x\in(0,\tfrac12)$, let $a>1$, $b>0$, and let $c:=2^{-4b}$. Let
$y\in(0,c]$. Suppose that $G$ is a graph with $|G|\geq y^{-(a+2)}$ such that
for every induced subgraph $F$ of $G$ with $|F|\geq c|G|$, there are disjoint
sets $X,Y\subseteq V(F)$ satisfying

$$|X|\geq y^a|F|,\qquad |Y|\geq (1-by)|F|,$$

and such that $Y$ is $x$-sparse or complete to $X$.

Then $G$ contains an $x$-sparse or complete
$(\lceil y^{-1}\rceil,y^{a+2}|G|)$-blockade.

## Facts & Assumptions

**Given:** The hypotheses of the statement.

## Proof

**Proof technique:** direct.

1.1 Let $n$ be maximal such that $G$ has a blockade $(B_1,\dots,B_n)$ with $|B_i|\geq y^{a+2}|G|$ for all $i$, with $|B_n|\geq(1-by)^n|G|$, and such that for every $i\in[n]$, either every later block is $x$-sparse to $B_i$ or every later block is complete to $B_i$. This is possible because $n=1$ and $B_1=V(G)$ already satisfy the conditions. [given, choose]

2.1 Suppose that $n<2y^{-1}$. Since $y\leq c=2^{-4b}$, one has $by\leq b2^{-4b}<1/2$. For $t\in[0,1/2]$ the elementary inequality $1-t\geq2^{-2t}$ holds, so with $t=by$ we get $(1-by)^{2y^{-1}}\geq(2^{-2by})^{2y^{-1}}=2^{-4b}=c$. Therefore $|B_n|\geq(1-by)^n|G|\geq c|G|$. Applying the hypothesis to the induced subgraph $G[B_n]$, choose disjoint $X,Y\subseteq B_n$ with $|X|\geq y^a|B_n|\geq y^{a+2}|G|$ and $|Y|\geq(1-by)|B_n|\geq (1-by)^{n+1}|G|$, and with $Y$ $x$-sparse or complete to $X$. Because $X\cup Y\subseteq B_n$, the relation of every earlier block $B_i$ to $B_n$ restricts to the same relation to both $X$ and $Y$. Hence $(B_1,\dots,B_{n-1},X,Y)$ is a larger blockade of the same type, contradicting the maximality of $n$. So $n\geq2y^{-1}$. [step 1.1, assume-contra, given, algebra, discharge-contradiction]

3.1 Let $Q$ be the set of indices $i$ such that every later block is $x$-sparse to $B_i$, and let $R$ be the set of indices $i$ such that every later block is complete to $B_i$. By construction every index lies in $Q\cup R$, so one of $Q$ or $R$ has cardinality at least $n/2\geq y^{-1}$. [step 1.1, step 2.1, algebra]

4.1 Since one of $|Q|,|R|$ is an integer at least $y^{-1}$, step 3.1 makes that cardinality at least $\lceil y^{-1}\rceil$. [step 3.1, given]
If it is $|Q|$, choose
$\lceil y^{-1}\rceil$ indices from $Q$ in their inherited order; the
corresponding blocks form an $x$-sparse blockade. If it is $|R|$, the same
choice from $R$ gives a complete blockade. Every selected block has size at
least $y^{a+2}|G|$ by step 1.1. Thus one of the two required blockades exists.
[step 1.1, step 3.1, given, choose]

5.1 Therefore $G$ contains an $x$-sparse or complete $(\lceil y^{-1}\rceil,y^{a+2}|G|)$-blockade. [step 4.1] ∎
