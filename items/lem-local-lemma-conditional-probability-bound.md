---
id: lem-local-lemma-conditional-probability-bound
kind: lemma
title: "The conditional-probability induction underlying the Lovász Local Lemma"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-conditional-probability, thm-conditional-probability-multiplication-and-chain-rules, def-dependency-digraph-for-finite-events]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, proof of Theorem 5.1.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, proof of Theorem 5.1"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Statement

Let $D$ be a dependency digraph for finite events $(A_i)_{i\in I}$. Suppose $0\le x_i<1$ and
$$\mathbb P(A_i)\le x_i\prod_{j\in N_D^+(i)}(1-x_j)$$
for every $i$. If $S\subseteq I\setminus\{i\}$ and $\mathbb P(\bigcap_{j\in S}A_j^c)>0$, then
$$\mathbb P\!\left(A_i\mid\bigcap_{j\in S}A_j^c\right)\le x_i.$$

## Facts & Assumptions

**Given:** Events, a dependency digraph, parameters, an index $i$, and a set $S$ satisfying the Statement.

[L1] Conditional probability is formed only for a positive-probability conditioning event ([[def-conditional-probability]]).

[L2] The finite chain rule factors probabilities of successive intersections when all prefix conditioning events are positive ([[thm-conditional-probability-multiplication-and-chain-rules]]).

[L3] A dependency digraph makes $A_i$ independent of every conjunction of complements indexed by non-out-neighbours ([[def-dependency-digraph-for-finite-events]]).

## Proof

**Proof technique:** induction.

1.1 For $S=\varnothing$, the conditional probability is $\mathbb P(A_i)\le x_i\prod_{j\in N_D^+(i)}(1-x_j)\le x_i$. [given, base, algebra]

1.2 Assume the assertion holds whenever the conditioning set has fewer than $m$ elements, and let $|S|=m>0$. Put $S_1=S\cap N_D^+(i)$ and $S_2=S\setminus S_1$. [ih, construct]

2.1 If $S_1=\varnothing$, [L3] gives $\mathbb P(A_i\mid\bigcap_{j\in S}A_j^c)=\mathbb P(A_i)\le x_i$. [step 1.2, L1, L3, algebra]

2.2 Suppose $S_1\ne\varnothing$, order it as $j_1,\ldots,j_r$, and write $C_t=\bigcap_{j\in S_t}A_j^c$. Since $\mathbb P(C_1\cap C_2)>0$, also $\mathbb P(C_2)>0$. Conditional multiplication gives $\mathbb P(A_i\mid C_1\cap C_2)=\mathbb P(A_i\cap C_1\mid C_2)/\mathbb P(C_1\mid C_2)\le\mathbb P(A_i\mid C_2)/\mathbb P(C_1\mid C_2)=\mathbb P(A_i)/\mathbb P(C_1\mid C_2)$, where the equality uses [L3] because $S_2$ consists of non-out-neighbours of $i$. [step 1.2, L1, L2, L3, choose]

3.1 The chain rule writes $\mathbb P(C_1\mid C_2)=\prod_{q=1}^r(1-\mathbb P(A_{j_q}\mid\bigcap_{h\in S_2\cup\{j_1,\ldots,j_{q-1}\}}A_h^c))$. Every displayed conditioning set has fewer than $m$ elements and positive probability, because its complement intersection contains the positive event $C_1\cap C_2$. The induction hypothesis therefore bounds the conditional probability by $x_{j_q}$, so this denominator is at least $\prod_{j\in S_1}(1-x_j)$. [step 2.2, step 1.2, L2, ih, algebra]

4.1 Consequently $\mathbb P(A_i\mid\bigcap_{j\in S}A_j^c)\le\mathbb P(A_i)/\prod_{j\in S_1}(1-x_j)\le x_i\prod_{j\in N_D^+(i)\setminus S_1}(1-x_j)\le x_i$. [step 2.2, step 3.1, given, algebra]

5.1 Steps 2.1 and 4.1 cover the two possibilities for $S_1$, completing the induction. No conditional probability with zero denominator was formed. [step 1.1, step 2.1, step 4.1, L1, discharge-induction] ∎
