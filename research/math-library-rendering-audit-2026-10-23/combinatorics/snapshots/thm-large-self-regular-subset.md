---
id: thm-large-self-regular-subset
kind: theorem
title: "Every finite graph has a linearly large $\\epsilon$-self-regular vertex subset"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-szemeredi-regularity-lemma-with-tower-bound, def-epsilon-regular-pair]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Theorem 2.1.26 and Exercise 2.1.27"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

For every $0<\epsilon<1$ there is $\delta=\delta(\epsilon)>0$ such that every finite graph $G$ with at least one vertex has a nonempty set $W\subseteq V(G)$ with
$$|W|\ge\delta|V(G)|$$
and $(W,W)$ is $\epsilon$-regular. The hypothesis that $G$ is nonempty cannot be dropped: $\epsilon$-self-regularity is defined only for nonempty vertex sets.

## Facts & Assumptions

**Given:** $0<\epsilon<1$ and a finite graph $G$ with at least one vertex.

[L1] For arbitrarily small parameters and prescribed minimum part counts, every sufficiently large graph has a bounded equitable regular partition ([[thm-szemeredi-regularity-lemma-with-tower-bound]]).

[L2] A set $W$ is $\epsilon$-self-regular when every two subsets of $W$ of size at least $\epsilon|W|$ have density within $\epsilon$ of $d(W,W)$ ([[def-epsilon-regular-pair]]).

## Proof

**Proof technique:** direct.

1.1 Choose an integer $s\gg\epsilon^{-3}$ and divide $[0,1]$ into $q=\lceil8/\epsilon\rceil$ intervals of length at most $\epsilon/8$. Repeated pigeonhole selection gives an integer $R=R(q,s)$ such that every $q$-colouring of the pairs of an $R$-set has a monochromatic $s$-set: select successively a vertex and a colour occurring on at least a $1/q$ fraction of its remaining incident pairs, and take the initial set large enough for $s$ selections. [given, choose, induction]

2.1 Choose $\rho>0$ much smaller than $R^{-2}\epsilon^3$, apply [L1] at parameter $\rho$ and minimum part count much larger than $R/\epsilon$, and let $M$ be the resulting upper bound on the number of parts. [step 1.1, L1, choose]

3.1 In the graph on the partition indices whose edges are the regular cross-pairs, fewer than $2\rho k^2$ pairs are missing by equitability. If every $R$-set contained a missing pair, double-counting pairs inside $R$-sets would force at least $\binom{k}{2}/\binom{R}{2}$ missing pairs, contrary to the choice of $\rho$. Hence there is an $R$-set of indices all of whose cross-pairs are $\rho$-regular. [step 2.1, L1, algebra]

4.1 Colour those regular pairs by the interval containing their density. Step 1.1 supplies $s$ parts $V_1,\ldots,V_s$ whose cross-densities all lie in one interval; let $W=V_1\cup\cdots\cup V_s$. Since the partition is equitable and has at most $M$ parts, $|W|\ge sn/(2M)$. [step 1.1, step 3.1, choose, algebra]

5.1 Let $A,B\subseteq W$ have size at least $\epsilon|W|$, and write $A_i=A\cap V_i$, $B_j=B\cap V_j$. Pairs with $i=j$, or with $|A_i|<\rho|V_i|$ or $|B_j|<\rho|V_j|$, contribute at most $3/(\epsilon^2s)+4\rho/\epsilon$ to the normalized density comparison. [step 2.1, step 4.1, algebra]

6.1 On every remaining pair, regularity gives $|d(A_i,B_j)-d(V_i,V_j)|\le\rho$, while the density colour in step 4.1 makes any two cross-densities differ by at most $\epsilon/8$. Decomposing both $d(A,B)$ and $d(W,W)$ over the $s^2$ pairs and using step 5.1 therefore gives $|d(A,B)-d(W,W)|\le\epsilon$ by the choices of $s$ and $\rho$. [step 4.1, step 5.1, L2, algebra]

7.1 For graphs large enough for [L1], steps 4.1 and 6.1 give an $\epsilon$-self-regular $W$ of size at least $sn/(2M)$. For the finitely many smaller orders $n\ge1$, a singleton is $0$-self-regular and hence $\epsilon$-self-regular. Shrinking $\delta$ to the minimum of $s/(2M)$ and the reciprocals of those orders proves the Statement for every finite graph with at least one vertex. [step 2.1, step 4.1, step 6.1, L1, L2, choose] ∎
