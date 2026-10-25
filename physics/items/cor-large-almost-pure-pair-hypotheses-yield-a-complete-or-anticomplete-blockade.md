---
id: cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade
kind: corollary
title: "Large almost-pure pair hypotheses yield a complete or anticomplete blockade"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-blockade-length-and-width, def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdos-Hajnal beyond the five-vertex path, note after Lemma 2.8"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $a>1$, $b>0$, put $c:=2^{-4b}$, and assume
$$ y\in\left(0,\min\left\{\tfrac12,c\right\}\right]. $$
Assume that $|G|\ge y^{-(a+2)}$. Suppose that every
induced subgraph $F$ of $G$ with $|F|\ge c|G|$ contains disjoint sets
$X,Y\subseteq V(F)$ such that

$$ |X|\ge y^a|F|,\qquad |Y|\ge (1-by)|F|, $$

and $Y$ is complete or anticomplete to $X$. Then $G$ contains a complete or
anticomplete $(\lceil y^{-1}\rceil,y^{a+2}|G|)$-blockade.

## Facts & Assumptions

**Given:** The parameters $a,b,y$, the graph $G$, and the large almost-pure pair hypothesis on every induced subgraph of size at least $c|G|$.

[L1] A pair is pure exactly when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[L2] A blockade is an ordered sequence of pairwise disjoint nonempty vertex sets, and its width is the minimum block size ([[def-blockade-length-and-width]]).

## Proof

**Proof technique:** maximal blockade extension.

1.1 Let $n$ be maximal such that $G$ has a blockade $(B_1,\ldots,B_n)$ with $|B_i|\ge y^{a+2}|G|$ for all $i\in[n]$, with $|B_n|\ge (1-by)^n|G|$, and with the property that for each $i\in[n]$, either every later block is complete to $B_i$, or every later block is anticomplete to $B_i$. This is possible because $0<y^{a+2}\le 1$, so $B_1:=V(G)$ already satisfies the required lower bounds. [given, choose, L2, algebra]

2.1 Suppose $n<2y^{-1}$. The bound $y\le c=2^{-4b}$ implies $by<\tfrac12$, and the elementary inequality $1-t\ge 2^{-2t}$ for $t\in[0,\tfrac12]$ gives $(1-by)^n\ge (1-by)^{2y^{-1}}\ge 2^{-4b}=c$. Hence $|B_n|\ge c|G|$, so the hypothesis applies to $G[B_n]$. Choose disjoint $X,Y\subseteq B_n$ with $$|X|\ge y^a|B_n|\ge y^ac|G|\ge y^{a+2}|G|,$$ where the last inequality uses $c\ge y\ge y^2$, and with $|Y|\ge (1-by)|B_n|\ge (1-by)^{n+1}|G|$, and $Y$ complete or anticomplete to $X$. Moreover, $$|Y|\ge (1-by)c|G|>\tfrac12c|G|\ge\tfrac12y|G|\ge y^{a+2}|G|,$$ where the last inequality follows from $a>1$ and $y\le\tfrac12$. Because $X\cup Y\subseteq B_n$, every earlier block has the same pure relation to both $X$ and $Y$ that it had to $B_n$. Thus $(B_1,\ldots,B_{n-1},X,Y)$ is a longer blockade of the same type, contradicting the maximality of $n$. So $n\ge 2y^{-1}$. [step 1.1, L1, assume-contra, choose, algebra, discharge-contradiction]

3.1 Let $Q$ be the set of indices $i$ such that every later block is complete to $B_i$, and let $R$ be the set of indices $i$ such that every later block is anticomplete to $B_i$. By construction every index lies in $Q\cup R$, so one of $Q$ or $R$ has size at least $n/2\ge y^{-1}$. [step 1.1, step 2.1, algebra]

4.1 If $|Q|\ge y^{-1}$, choose $\lceil y^{-1}\rceil$ indices from $Q$ in their inherited order. The corresponding blocks form a complete blockade, and every block has size at least $y^{a+2}|G|$ by step 1.1. If instead $|R|\ge y^{-1}$, the same construction with $R$ gives an anticomplete blockade. In either case we obtain a complete or anticomplete $(\lceil y^{-1}\rceil,y^{a+2}|G|)$-blockade. [step 1.1, step 3.1, choose, algebra]

5.1 Therefore the stated blockade exists. [step 4.1] ∎
