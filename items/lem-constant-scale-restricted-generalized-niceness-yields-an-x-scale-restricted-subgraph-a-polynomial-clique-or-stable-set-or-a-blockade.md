---
id: lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade
kind: lemma
title: "Constant-scale restricted generalized niceness yields an x-scale restricted subgraph, a polynomial clique or stable set, or a blockade"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph, lem-cy-restricted-generalized-niceness-yields-three-outcomes, lem-iterated-restricted-sparsification-reaches-the-target-scale, def-c-sparse-and-c-restricted-vertex-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdos-Hajnal beyond the five-vertex path, Lemma 3.3"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\mathcal F$ be a generalized nice, leaf-reducible, wonderful finite
family. Then there exist constants $c\in(0,\tfrac12)$, $a_1\ge 1$, and
$a_2>0$ such that for every $x\in(0,c^2)$ and every $c^2$-restricted
$\overline{\mathcal F}$-free graph $G$, at least one of the following holds:

1. $G$ has an $x$-restricted induced subgraph with at least $x^{a_1}|G|$
   vertices;
2. $G$ has a clique or stable set of size at least
   $$ (x^{a_1}|G|)^{a_2}; $$
3. $G$ has a complete or anticomplete $(k,|G|/k^{a_1})$-blockade for some
   integer $k\in[2,x^{-1}]$.

## Facts & Assumptions

**Given:** A generalized nice, leaf-reducible, wonderful finite family $\mathcal F$, a parameter $x\in(0,c^2)$, and a $c^2$-restricted $\overline{\mathcal F}$-free graph $G$.

[L1] The three-outcome theorem provides constants $c,c_1,c_2>0$ and $c_3\ge c_4\ge 4$ ([[lem-cy-restricted-generalized-niceness-yields-three-outcomes]]).

[L2] Under the failure of the global clique/stable-set and blockade outcomes, every sufficiently large $cy$-restricted induced subgraph contains a smaller scale restricted induced subgraph ([[lem-a-large-cy-restricted-subgraph-in-the-three-outcome-theorem-forces-a-smaller-scale-restricted-subgraph]]).

[L3] The iterative restricted-sparsification lemma turns a constant-scale restricted starting point plus the smaller-scale hypothesis into an $x$-restricted induced subgraph ([[lem-iterated-restricted-sparsification-reaches-the-target-scale]]).

[L4] A $c^2$-restricted graph is, in particular, a valid starting point for the iterative lemma with starting constant $c^2$ ([[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** if the clique/stable-set and blockade outcomes fail, use the helper claim to verify the second hypothesis of the iterative lemma.

1.1 Let $c,c_1,c_2,c_3,c_4$ be the constants from [L1], and set $a_1:=c_1+3c_3$, $a_2:=c_2$, $b_1:=c_4/2$, $b_2:=4c_3/c_4$, and $b_3:=c_3$. [L1, choose]

2.1 Hypothesis 1 of [L3] is automatic with starting constant $c^2$: the graph $G$ itself is $c^2$-restricted by assumption, so it has a $c^2$-restricted induced subgraph of size $|G|=(c^2)^0|G|$, and in particular of size at least $(c^2)^{b_2}|G|$ because $b_2>0$ and $c^2<1$. [step 1.1, given, L3, L4, algebra]

2.2 Suppose outcomes 2 and 3 fail for the given graph $G$. We will show that outcome 1 must then hold. [step 1.1, assume-contra]

3.1 Apply [L2] with the constants from step 1.1. It shows that for every $y$ with $cy\in[x,c^2]$ and every $cy$-restricted induced subgraph $F$ of $G$ with $|F|\ge (cy)^{4c_3/c_4}|G|$, there is a $(cy)^{c_4/2}$-restricted induced subgraph of $F$ with at least $(cy)^{c_3}|F|$ vertices. Writing $\lambda:=cy$, this is exactly hypothesis 2 of [L3] for every $\lambda\in[x,c^2]$, with the starting constant $c^2$ and the choices $b_1=c_4/2$, $b_2=4c_3/c_4$, and $b_3=c_3$ from step 1.1. [step 1.1, step 2.2, L2, L3]

4.1 The inequality required by [L3] holds for these choices, because $b_1b_2=(c_4/2)\cdot (4c_3/c_4)=2c_3\ge c_3+4c_3/c_4=b_3+b_2$, using $c_4\ge 4$. [step 1.1, step 3.1, algebra, L3]

5.1 Therefore [L3] applies and yields an $x$-restricted induced subgraph of $G$ with at least $x^{b_1b_2}|G|=x^{2c_3}|G|$ vertices. Since $a_1=c_1+3c_3\ge 2c_3$ and $x\in(0,1)$, we have $x^{2c_3}\ge x^{a_1}$, so outcome 1 holds. [step 1.1, step 2.1, step 3.1, step 4.1, L3, algebra]

6.1 Outcome 1 follows whenever outcomes 2 and 3 fail. Hence at least one of the three stated outcomes holds for every admissible $G$. [step 2.2, step 5.1, discharge-contradiction] ∎
