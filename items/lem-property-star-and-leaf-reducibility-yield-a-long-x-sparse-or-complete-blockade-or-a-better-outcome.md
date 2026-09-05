---
id: lem-property-star-and-leaf-reducibility-yield-a-long-x-sparse-or-complete-blockade-or-a-better-outcome
kind: lemma
title: "Property (*) and leaf reducibility yield a long x-sparse or complete blockade, or a better outcome"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes, thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades, def-c-sparse-and-c-restricted-vertex-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 4.2"
      url: "https://arxiv.org/html/2606.06258v2"
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 7.2"
      url: "https://arxiv.org/html/2312.15333v2"
---

## Statement

Suppose that $\mathcal F$ has property $(*)$ and that $\mathcal F$ is
leaf-reducible. Then there exist constants $c_1,c_2,c_3>0$ and $c_4,c_5\ge 4$
such that, with $c:=2^{-4c_5}$, for every $0<x\le y\le c$ and every
$cy^3$-restricted $\overline{\mathcal F}$-free graph $G$, at least one of the
following holds:

1. $G$ has an $x$-sparse or complete blockade of length at least $y^{-1}$ and
   width at least $y^{c_4+2}|G|$;
2. $G$ has a $2y^4$-restricted induced subgraph with at least
   $y^{c_4+2}|G|$ vertices;
3. $G$ has a clique or stable set of size at least $(x^{10}|G|)^{c_1}$;
4. $G$ has a complete or anticomplete $(k,|G|/k^{c_2+7/c_3})$-blockade for
   some real $k\ge y^{-c_3}$;
5. $G$ has a pure $(\ell,|G|/\ell^9)$-blockade for some real
   $\ell\in[y^{-1},x^{-2}]$.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ with property $(*)$ and
leaf-reducible, parameters $0<x\le y\le c$, and a $cy^3$-restricted
$\overline{\mathcal F}$-free graph $G$.

[L1] The five-outcome lemma provides constants $c_1,c_2,c_3>0$ and
$c_4,c_5\ge 4$ for $y^3$-restricted graphs
([[lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes]]).

[L2] If every induced subgraph $F$ of $G$ with $|F|\ge c|G|$ has disjoint sets
$X,Y$ with $|X|\ge y^{c_4}|F|$, $|Y|\ge (1-c_5y)|F|$, and $Y$ $x$-sparse or
complete to $X$, then $G$ has an $x$-sparse or complete blockade of length at
least $y^{-1}$ and width at least $y^{c_4+2}|G|$
([[thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades]]).

[L3] If a graph is $cy^3$-restricted and $F$ is an induced subgraph with
$|F|\ge c|G|$, then $F$ is $y^3$-restricted
([[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** either every large induced subgraph satisfies the large
pair hypothesis of [L2], or choose a counterexample $F$ and apply the
five-outcome lemma inside it.


1.1 Let $c_1,c_2,c_3>0$ and $c_4,c_5\ge 4$ be the constants from [L1], and put $c:=2^{-4c_5}$. [L1, choose]


2.1 If $|G|\le y^{-(c_4+2)}$, then $y^{c_4+2}|G|\le 1$. Any single vertex spans an induced subgraph that is $0$-restricted, hence $2y^4$-restricted, so outcome 2 holds. Therefore we may assume $|G|\ge y^{-(c_4+2)}$. [step 1.1, given, algebra, cases]


2.2 [assume-case universal-pair] Suppose that every induced subgraph $F$ of $G$ with $|F|\ge c|G|$ has disjoint sets $X,Y$ with $|X|\ge y^{c_4}|F|$, $|Y|\ge (1-c_5y)|F|$, and $Y$ $x$-sparse or complete to $X$. Then [L2] gives outcome 1. [step 1.1, L2]


2.3 [assume-case obstruction] Assume instead that there is an induced subgraph $F$ of $G$ with $|F|\ge c|G|$ for which no such pair $X,Y$ exists. By [L3], the graph $F$ is $y^3$-restricted, so [L1] applies to $F$. Because the first outcome of [L1] fails for this specific $F$, one of the remaining four outcomes of [L1] holds inside $F$. [step 1.1, L1, L3]


3.1 If [L1] gives a $2y^4$-restricted induced subgraph of $F$ with at least $y^{c_4}|F|$ vertices, then that subgraph has at least $y^{c_4}c|G|=y^{c_4+1}|G|\ge y^{c_4+2}|G|$ vertices because $y\le c<1$. Hence outcome 2 holds in $G$. [step 2.3, L1, algebra]


3.2 If [L1] gives a clique or stable set of size at least $(x^9|F|)^{c_1}$, then $$ (x^9|F|)^{c_1}\ge (x^9\cdot c|G|)^{c_1}\ge (x^9\cdot x|G|)^{c_1} = (x^{10}|G|)^{c_1}, $$ because $x\le y\le c$. So outcome 3 holds. [step 2.3, L1, algebra]


3.3 If [L1] gives a complete or anticomplete $(k,|F|/k^{c_2+6/c_3})$-blockade with $k\ge y^{-c_3}$, then $$ \frac{|F|}{k^{c_2+6/c_3}} \ge \frac{c|G|}{k^{c_2+6/c_3}} \ge \frac{y|G|}{k^{c_2+6/c_3}} \ge \frac{|G|}{k^{c_2+7/c_3}}, $$ because $k\ge y^{-c_3}$ implies $k^{1/c_3}\ge y^{-1}$. Hence outcome 4 holds. [step 2.3, L1, algebra]


3.4 If [L1] gives a pure $(\ell,|F|/\ell^8)$-blockade with $\ell\in[y^{-1},x^{-2}]$, then $$ \frac{|F|}{\ell^8}\ge \frac{c|G|}{\ell^8}\ge \frac{y|G|}{\ell^8} \ge \frac{|G|}{\ell^9}, $$ again because $\ell\ge y^{-1}$. Thus outcome 5 holds. [step 2.3, L1, algebra]


4.1 The exhaustive alternatives 2.1 and 2.2, together with steps 3.1-3.4, show that one of the five stated outcomes always holds. [step 2.2, step 2.3, step 3.1, step 3.2, step 3.3, step 3.4, cases-exhaustive] ∎
