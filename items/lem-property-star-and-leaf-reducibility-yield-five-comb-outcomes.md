---
id: lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes
kind: lemma
title: "Property (*) and leaf reducibility yield five comb outcomes in a restricted graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-property-star-for-a-finite-family, def-c-sparse-and-c-restricted-vertex-set, lem-restrictedness-is-complement-invariant, lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair, lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 4.1"
      url: "https://arxiv.org/html/2606.06258v2"
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 7.1"
      url: "https://arxiv.org/html/2312.15333v2"
---

## Statement

Suppose that $\mathcal F$ has property $(*)$ and that $\mathcal F$ is
leaf-reducible. Then there exist constants $c_1,c_2,c_3>0$ and
$c_4,c_5\ge 4$ such that for every $0<x\le y\le 2^{-4c_5}$ and every
$y^3$-restricted $\overline{\mathcal F}$-free graph $G$, at least one of the
following holds:

1. there are disjoint sets $X,Y\subseteq V(G)$ with
   $$|X|\ge y^{c_4}|G|,\qquad |Y|\ge (1-c_5y)|G|,$$
   and $Y$ is $x$-sparse or complete to $X$;
2. $G$ has a $2y^4$-restricted induced subgraph with at least $y^{c_4}|G|$
   vertices;
3. $G$ has a clique or stable set of size at least $(x^9|G|)^{c_1}$;
4. $G$ has a complete or anticomplete $(k,|G|/k^{c_2+6/c_3})$-blockade for
   some real $k\ge y^{-c_3}$;
5. $G$ has a pure $(\ell,|G|/\ell^8)$-blockade for some real
   $\ell\in[y^{-1},x^{-2}]$.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ with property $(*)$ and leaf-reducible, parameters $0<x\le y\le 2^{-4c_5}$, and a $y^3$-restricted $\overline{\mathcal F}$-free graph $G$.

[L1] Because $\mathcal F$ has property $(*)$, there exist constants $c_1,c_2,c_3>0$ such that every special-vertex $(\ell,w)$-comb with $\ell,w\ge4$ in an $\overline{\mathcal F}$-free graph yields either a clique or stable set of size $w^{c_1}$, or a complete or anticomplete $(k,w/k^{c_2})$-blockade with $k\ge \ell^{c_3}$, or a pure $(\ell,w/\ell^2)$-blockade ([[def-property-star-for-a-finite-family]]).

[L2] Since $\mathcal F$ is leaf-reducible, there exist constants $d>0$ and $h\ge 1$ such that every $y^3$-sparse $\mathcal F$-free graph has either a large anticomplete pair or a $y^{12}$-restricted induced subgraph of size at least $(y^3)^{4d+1}|G|=y^{12d+3}|G|$ ([[lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph]]).

[L3] If $G$ is $y^3$-sparse and $|G|\ge y^{-4}$, then either there are disjoint sets $X,Y\subseteq V(G)$ with $|X|\ge y^4|G|$, $|Y|\ge (1-4y)|G|$, and $Y$ $x$-sparse to $X$, or $G$ is $2y^4$-sparse, or $G$ contains a special-vertex comb with parameters $\ell\in[y^{-1},x^{-2}]$ and width $w=y^4|G|/\ell^2$ ([[lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair]]).

[L4] Restrictedness is preserved by complementation ([[def-c-sparse-and-c-restricted-vertex-set]], [[lem-restrictedness-is-complement-invariant]]).

## Proof

**Proof technique:** treat the dense side by applying the leaf-reducible lemma to $\overline G$, and otherwise apply the sparse comb lemma to $G$ and feed the comb branch into property $(*)$.


1.1 Let $c_1,c_2,c_3$ be the constants from [L1]. Let $d>0$ and $h\ge 1$ be the constants from [L2], and set $$ c_4:=\max\{12d+3,4\},\qquad c_5:=\max\{h,4\}. $$ [L1, L2, choose]


1.2 [assume-case dense-side] Suppose first that $\overline G$ is $y^3$-sparse. Because $G$ is $\overline{\mathcal F}$-free, the complement graph $\overline G$ is $\mathcal F$-free. Applying [L2] to $\overline G$ with the parameter $y^3$ and $b=4$, we obtain either:

1. disjoint sets $X,Y\subseteq V(G)$ with $|X|\ge y^{12d+3}|G|$, $|Y|\ge (1-hy)|G|$, and $Y$ complete to $X$ in $G$; or
2. a $y^{12}$-restricted induced subgraph of $\overline G$ with at least $y^{12d+3}|G|$ vertices.

In the first branch, $c_4\ge 12d+3$ and $c_5\ge h$, so outcome 1 holds. In the second branch, [L4] transfers restrictedness back to $G$, and because $y^{12}\le 2y^4$ for $0<y<1$, outcome 2 holds. [step 1.1, L2, L4, given, algebra]


2.1 [assume-case sparse-side] We may therefore assume that $G$ itself is $y^3$-sparse. If $|G|\le x^{-9}$, then $(x^9|G|)^{c_1}\le 1$, so any vertex of $G$ already gives outcome 3. Hence we may further assume that $|G|\ge x^{-9}\ge y^{-4}$. [step 1.1, step 1.2, given]


3.1 Apply [L3] to the sparse graph $G$. If its first branch holds, then outcome 1 holds immediately. If its second branch holds, then outcome 2 holds immediately. So only the comb branch remains. [step 2.1, L3, cases]


4.1 In that comb branch, [L3] gives an integer $\ell_0\in[y^{-1},\lceil x^{-2}\rceil]$, a width $w:=y^4|G|/\ell_0^2$, an $(\ell_0,w)$-comb $((a_i,B_i):i\in[\ell_0])$, and a vertex $v$ complete to $\bigcup_i B_i$ and anticomplete to the teeth. Since $x\le y\le 2^{-4c_5}$ and $c_5\ge 4$, one has $x\le 2^{-16}$ and hence $\ell_0\ge y^{-1}\ge 4$. Also $\lceil x^{-2}\rceil\le x^{-2}+1\le 2x^{-2}$, so $$ w=\frac{y^4|G|}{\ell_0^2}\ge \frac{y^4|G|}{(2x^{-2})^2}\ge \frac{x^8|G|}{4}\ge x^9|G|, $$ because $y\ge x$ and $x\le \tfrac14$. Using $|G|\ge x^{-9}$ from step 2.1 and $x\le 2^{-16}$ again, this also gives $w\ge x^{-1}/4\ge 4$. [step 1.1, step 2.1, step 3.1, algebra]


5.1 Apply [L1] to this special-vertex comb. If it yields a clique or stable set of size at least $w^{c_1}$, then step 4.1 gives $w^{c_1}\ge (x^9|G|)^{c_1}$, so outcome 3 holds. [step 1.1, step 4.1, L1, algebra]


5.2 If [L1] yields a complete or anticomplete $(k,w/k^{c_2})$-blockade with $k\ge \ell_0^{c_3}$, then $$ \frac{w}{k^{c_2}} \ge \frac{|G|}{\ell_0^6k^{c_2}} \ge \frac{|G|}{k^{c_2+6/c_3}}, $$ and also $k\ge \ell_0^{c_3}\ge y^{-c_3}$. So outcome 4 holds. [step 4.1, L1, algebra]


5.3 If [L1] yields a pure $(\ell_0,w/\ell_0^2)$-blockade, set $$ \ell:=\sqrt{\ell_0/y}. $$ Because $\ell_0\ge y^{-1}$, one has $\ell\ge y^{-1}$ and also $\ell_0\ge \ell$, so the same blockade has length at least $\ell$. Since $\ell_0\le 2x^{-2}$ and $y\ge x$, $$ \ell^2=\ell_0/y\le 2x^{-2}/x=2x^{-3}\le x^{-4}, $$ because $x\le \tfrac12$, and therefore $\ell\le x^{-2}$. Finally, $$ \frac{w}{\ell_0^2}=\frac{y^4|G|}{\ell_0^4}=\frac{|G|}{\ell^8}. $$ Hence outcome 5 holds. [step 4.1, L1, algebra]


6.1 Steps 1.2, 2.1, 3.1, 5.1, 5.2, and 5.3 exhaust all cases, so one of the five stated outcomes always holds. [step 1.2, step 2.1, step 3.1, step 5.1, step 5.2, step 5.3, cases-exhaustive] ∎
