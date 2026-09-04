---
id: lem-cy-restricted-generalized-niceness-yields-three-outcomes
kind: lemma
title: "cy-restricted generalized niceness yields three outcomes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade, lem-generalized-niceness-yields-four-reduction-outcomes, def-c-sparse-and-c-restricted-vertex-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdos-Hajnal beyond the five-vertex path, Lemma 3.2"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $\mathcal F$ be a generalized nice, leaf-reducible, wonderful finite
family. Then there exist constants $c\in(0,\tfrac12)$, $c_1,c_2>0$, and
$c_3\ge c_4\ge 4$ such that for every $y\in(0,c]$ and every
$cy$-restricted $\overline{\mathcal F}$-free graph $G$, at least one of the
following holds:

1. $G$ has a clique or stable set of size at least
   $$ (y^{c_1}|G|)^{c_2}; $$
2. $G$ has a complete or anticomplete $(k,|G|/k^{c_3})$-blockade with
   $k\ge y^{-1}$; or
3. $G$ has a $y^{c_4}$-restricted induced subgraph with at least
   $$ y^{c_3}|G| $$
   vertices.

## Facts & Assumptions

**Given:** A generalized nice, leaf-reducible, wonderful finite family $\mathcal F$, a parameter $y\in(0,c]$, and a $cy$-restricted $\overline{\mathcal F}$-free graph $G$.

[L1] The previous lemma provides constants $a_1,a_2,a_5>0$ and $a_3\ge a_4\ge 4$ with the four reduction outcomes ([[lem-generalized-niceness-yields-four-reduction-outcomes]]).

[L2] The almost-pure-pair hypothesis yields a complete or anticomplete blockade ([[cor-large-almost-pure-pair-hypotheses-yield-a-complete-or-anticomplete-blockade]]).

[L3] If a graph is $\lambda$-restricted on its full vertex set, then every induced subgraph on at least $c$ times as many vertices is $(\lambda/c)$-restricted ([[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** either every large induced subgraph already has a large pure pair, or one large induced subgraph avoids that outcome and the previous four-outcome lemma applies there.

1.1 Let $a_1,a_2,a_5,a_3,a_4$ be as in [L1], and set $c:=\min\{2^{-4a_5},(2a_5)^{-1},1/4\}$, $c_1:=a_1+1$, $c_2:=a_2$, $c_3:=a_3+2$, and $c_4:=a_4$. Then $c\in(0,\tfrac12)$ and $c_3\ge c_4\ge 4$. [L1, choose, algebra]

2.1 If $|G|\le y^{-c_3}$, then any one-vertex induced subgraph of $G$ is $y^{c_4}$-restricted and has size at least $y^{c_3}|G|$, so outcome 3 holds. [step 1.1, given, algebra]

2.2 Suppose every induced subgraph $F$ of $G$ with $|F|\ge c|G|$ contains disjoint sets $X,Y\subseteq V(F)$ with $|X|\ge y^{a_3}|F|$, $|Y|\ge (1-a_5y)|F|$, and $Y$ complete or anticomplete to $X$. Since $y\le c\le (2a_5)^{-1}$ and $c\le 2^{-4a_5}$, the hypotheses of [L2] are satisfied with $a=a_3$ and $b=a_5$. Therefore [L2] yields a complete or anticomplete $(\lceil y^{-1}\rceil,y^{a_3+2}|G|)$-blockade in $G$. Because $c_3=a_3+2$ and $1/\lceil y^{-1}\rceil\le y$, each block has size at least $y^{c_3}|G|\ge |G|/\lceil y^{-1}\rceil^{c_3}$. Hence outcome 2 holds after shrinking to exactly $\lceil y^{-1}\rceil$ blocks if necessary. [step 1.1, L2, choose, algebra]

2.3 We may therefore choose an induced subgraph $F$ of $G$ with $|F|\ge c|G|$ for which no such almost-pure pair exists. Because $G$ is $cy$-restricted and $|F|\ge c|G|$, [L3] implies that $F$ is $y$-restricted. Apply [L1] to $F$. Its fourth outcome is excluded by the choice of $F$. If [L1] gives a clique or stable set of size at least $(y^{a_1}|F|)^{a_2}$, then $(y^{a_1}|F|)^{a_2}\ge (y^{a_1+1}|G|)^{a_2}=(y^{c_1}|G|)^{c_2}$, because $|F|\ge c|G|\ge y|G|$. So outcome 1 holds. If [L1] gives a complete or anticomplete blockade $(k,|F|/k^{a_3})$ with $k\ge y^{-1}$, then $|F|/k^{a_3}\ge c|G|/k^{a_3}\ge y^2|G|/k^{a_3}\ge |G|/k^{a_3+2}=|G|/k^{c_3}$, because $c\ge y\ge y^2$ and $y\ge 1/k$. So outcome 2 holds. Finally, if [L1] gives a $y^{a_4}$-restricted induced subgraph of size at least $y^{a_3}|F|$, then $y^{a_3}|F|\ge y^{a_3}c|G|\ge y^{a_3+2}|G|=y^{c_3}|G|$, because $c\ge y^2$, and $a_4=c_4$. So outcome 3 holds. [step 1.1, L1, L3, given, algebra]

3.1 Steps 2.1, 2.2, and 2.3 cover all cases, so one of the three stated outcomes always holds. [step 2.1, step 2.2, step 2.3] ∎
