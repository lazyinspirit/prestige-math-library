---
id: lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem
kind: lemma
title: "Rödl initialization removes the constant-scale restriction in the property (*) four-outcome theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-constant-scale-restricted-property-star-yields-a-restricted-subgraph-a-polynomial-clique-or-stable-set-or-two-blockade-alternatives, cor-rodl-every-h-free-graph-has-a-linear-restricted-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 4.4"
      url: "https://arxiv.org/html/2606.06258v2"
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Lemma 7.3"
      url: "https://arxiv.org/html/2312.15333v2"
---

## Statement

Suppose that $\mathcal F$ has property $(*)$ and is leaf-reducible. Then there
exist constants $c_1>0$, $c_4\ge 4$, and $d\ge 58c_4$ such that for every
$x\in(0,2^{-d})$ and every $\overline{\mathcal F}$-free graph $G$ with
$|G|\ge x^{-d}$, at least one of the following holds:

1. $G$ has an $x$-restricted induced subgraph with at least $x^{23c_4}|G|$
   vertices;
2. $G$ has a pure or $x$-sparse $(k,|G|/k^d)$-blockade for some integer
   $k\in[2,x^{-1}]$;
3. $G$ has a clique or stable set of size at least $(x^{31c_4}|G|)^{c_1}$;
4. $G$ has a complete or anticomplete $(k,|G|/k^d)$-blockade for some real
   $k\ge x^{-1}$.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ with property $(*)$ and leaf-reducible, a parameter $x\in(0,2^{-d})$, and an $\overline{\mathcal F}$-free graph $G$ with $|G|\ge x^{-d}$.

[L1] The constant-scale four-outcome theorem gives constants $c_1,c_2,c_3>0$, $c_4,c_5\ge 4$, and $c:=2^{-4c_5}$ such that every $c^{10}$-restricted $\overline{\mathcal F}$-free graph satisfies one of the four outcomes on the current page ([[lem-constant-scale-restricted-property-star-yields-a-restricted-subgraph-a-polynomial-clique-or-stable-set-or-two-blockade-alternatives]]).

[L2] For $\xi:=c^{10}$, every $\overline{\mathcal F}$-free graph has a $\xi$-restricted induced subgraph of size at least $\delta|G|$ for some $\delta>0$ ([[cor-rodl-every-h-free-graph-has-a-linear-restricted-set]]).

## Proof

**Proof technique:** apply Rödl at the fixed scale $\xi=c^{10}$, then transfer each outcome of the constant-scale theorem back to $G$ by choosing $d$ large enough.


1.1 Let $c_1,c_2,c_3>0$, $c_4,c_5\ge 4$, and $c:=2^{-4c_5}$ be the constants from [L1], and set $\xi:=c^{10}$. Let $\delta>0$ be the constant from [L2] for the family $\overline{\mathcal F}$ and the parameter $\xi$. [L1, L2, choose]


2.1 Choose $d$ so large that $$ d\ge 58c_4,\qquad 2^{-d}<c^{10},\qquad \delta\ge 2^{116c_4-d},\qquad \delta\ge 2^{c_2+27c_4/c_3-d}. $$ [step 1.1, choose]


3.1 By [L2], the graph $G$ has a $\xi$-restricted induced subgraph $F\subseteq G$ with $|F|\ge \delta|G|$. Since $x<2^{-d}<\xi$, the parameter $x$ lies in the range allowed by [L1], so [L1] applies to $F$. [step 2.1, L1, L2]


4.1 If [L1] gives an $x$-restricted induced subgraph of $F$ with at least $x^{22c_4}|F|$ vertices, then $$ x^{22c_4}|F|\ge x^{22c_4}\delta|G| \ge x^{22c_4}2^{58c_4-d}|G| \ge x^{23c_4}|G|, $$ because $x<2^{-d}$ implies $x^{c_4}\le 2^{58c_4-d}$. Thus outcome 1 holds. [step 2.1, step 3.1, L1, algebra]


4.2 If [L1] gives a clique or stable set of size at least $(x^{30c_4}|F|)^{c_1}$, then the same estimate yields $(x^{30c_4}|F|)^{c_1}\ge (x^{31c_4}|G|)^{c_1}$, so outcome 3 holds. [step 2.1, step 3.1, L1, algebra]


4.3 If [L1] gives a complete or anticomplete $(k,|F|/k^{c_2+27c_4/c_3})$-blockade with $k\ge 2$, let $j:=\lceil k\rceil$. Its actual length is integral and at least $k$, hence at least $j$, while $$ \frac{|F|}{k^{c_2+27c_4/c_3}} \ge \frac{\delta|G|}{k^{c_2+27c_4/c_3}} \ge \frac{|G|}{k^d}\ge\frac{|G|}{j^d}. $$ Thus the same blocks form a complete or anticomplete $(j,|G|/j^d)$-blockade. If $j\ge x^{-1}$ this is outcome 4; if $j<x^{-1}$, then the integer $j\in[2,x^{-1}]$ gives outcome 2. [step 2.1, step 3.1, L1, algebra, choose, cases]


4.4 If [L1] gives a pure or $x$-sparse $(\ell,|F|/\ell^{29c_4})$-blockade with $\ell\in[c^{-1},x^{-2}]$, set $$ k:=\lfloor\sqrt{\ell}\rfloor. $$ Then $k$ is an integer in $[2,x^{-1}]$, because $\ell\ge c^{-1}\ge 2^4$ and $\sqrt{\ell}\le x^{-1}$. The blockade has length at least $\ell\ge k$, and $\ell<(k+1)^2\le 4k^2$, so $$ \frac{|F|}{\ell^{29c_4}}\ge \frac{|F|}{(4k^2)^{29c_4}}=\frac{|F|}{2^{58c_4}k^{58c_4}} \ge \frac{\delta|G|}{2^{58c_4}k^{58c_4}} \ge \frac{|G|}{k^d}, $$ because $k\ge 2$ and step 2.1 gives $\delta\ge 2^{116c_4-d}$. Hence outcome 2 holds. [step 2.1, step 3.1, L1, algebra, choose]


5.1 The four branches 4.1-4.4 exhaust the conclusion of [L1], so one of the stated outcomes always holds for $G$. [step 3.1, step 4.1, step 4.2, step 4.3, step 4.4, cases-exhaustive] ∎
