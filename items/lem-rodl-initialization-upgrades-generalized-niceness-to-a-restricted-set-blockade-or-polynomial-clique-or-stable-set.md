---
id: lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set
kind: lemma
title: "Rödl initialization upgrades generalized niceness to a restricted set, a complete or anticomplete blockade, or a polynomial clique or stable set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-generalized-nice-finite-family, cor-rodl-every-h-free-graph-has-a-linear-restricted-set, lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 3.4"
      url: "https://arxiv.org/html/2606.06258v2"
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, Theorem 1.3"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
---

## Statement

Let $\mathcal F$ be a generalized nice, leaf-reducible, wonderful finite
family. Then there exist constants $c_1\ge 1$ and $c_2>0$ such that for every
$x\in(0,\tfrac12)$ and every $\overline{\mathcal F}$-free graph $G$, at least
one of the following holds:

1. $G$ has an $x$-restricted induced subgraph with at least $x^{c_1}|G|$
   vertices;
2. $G$ has a complete or anticomplete $(k,|G|/k^{c_1})$-blockade for some
   integer $k\ge 2$;
3. $G$ has a clique or stable set of size at least
   $$ (x^{c_1}|G|)^{c_2}. $$

## Facts & Assumptions

**Given:** A generalized nice, leaf-reducible, wonderful finite family
$\mathcal F$, a parameter $x\in(0,\tfrac12)$, and an
$\overline{\mathcal F}$-free graph $G$.

[L1] There exist constants $c\in(0,\tfrac12)$, $a_1\ge 1$, and $a_2>0$ such
that every $c^2$-restricted $\overline{\mathcal F}$-free graph satisfies the
three-outcome conclusion with parameter $x$ whenever $x<c^2$
([[lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade]]).

[L2] For every graph $H$ and every $\xi\in(0,\tfrac12)$, every nonempty
$H$-free graph has a $\xi$-restricted induced subgraph of size at least
$\delta|G|$ for some constant $\delta>0$ depending only on $H$ and $\xi$
([[cor-rodl-every-h-free-graph-has-a-linear-restricted-set]]).

## Proof

**Proof technique:** use Rödl at the fixed scale $\xi=c^2$, then apply the
constant-scale theorem unless $x$ is already above that scale.


1.1 Let $c\in(0,\tfrac12)$, $a_1\ge 1$, and $a_2>0$ be the constants supplied by [L1], and set $\xi:=c^2$. Choose $\delta>0$ from [L2] for the forbidden family $\overline{\mathcal F}$ and the parameter $\xi$. [L1, L2, choose]


2.1 Choose an integer $c_1\ge 1$ so large that $$ \delta\ge \xi^{c_1/2},\qquad \delta\ge 2^{a_1-c_1},\qquad c_1\ge 2a_1, $$ and set $c_2:=a_2$. [step 1.1, choose]


2.2 By [L2], the graph $G$ has a $\xi$-restricted induced subgraph $F\subseteq G$ with $|F|\ge \delta|G|$. [step 1.1, L2]


3.1 Suppose first that $x\ge \xi$. Then $F$ is also $x$-restricted, and $$ |F|\ge \delta|G|\ge 2^{a_1-c_1}|G|\ge x^{c_1-a_1}|G|\ge x^{c_1}|G|, $$ because $x\le \tfrac12$ and $a_1\ge 1$. Hence outcome 1 holds. [step 2.1, step 2.2, given, algebra]


3.2 Assume now that $x<\xi=c^2$. Then [L1] applies to the $c^2$-restricted graph $F$ and yields one of three conclusions: an $x$-restricted induced subgraph $S\subseteq F$ with $|S|\ge x^{a_1}|F|$, a clique or stable set of size at least $(x^{a_1}|F|)^{a_2}$, or a complete or anticomplete $(k,|F|/k^{a_1})$-blockade in $F$ for some integer $k\ge 2$. [step 1.1, step 2.2, L1]


4.1 In the first branch, $$ x^{a_1}|F|\ge x^{a_1}\delta|G|\ge x^{a_1}\xi^{c_1/2}|G|\ge x^{a_1+c_1/2}|G| \ge x^{c_1}|G|, $$ because $x<\xi$ and $c_1\ge 2a_1$. So outcome 1 holds. [step 2.1, step 3.2, algebra]


4.2 In the third branch, $$ \frac{|F|}{k^{a_1}}\ge \frac{\delta|G|}{k^{a_1}} \ge \frac{2^{a_1-c_1}|G|}{k^{a_1}}\ge \frac{|G|}{k^{c_1}}, $$ because $k\ge 2$. Thus the same blocks give outcome 2 in $G$. [step 2.1, step 3.2, algebra]


5.1 In the second branch, the same inequality from step 4.1 gives $(x^{a_1}|F|)^{a_2}\ge (x^{c_1}|G|)^{c_2}$, so outcome 3 holds. [step 2.1, step 3.2, step 4.1, algebra]


6.1 Steps 3.1, 4.1, 4.2, and 5.1 cover all possibilities, so one of the three stated outcomes always holds. [step 3.1, step 3.2, step 4.1, step 5.1, step 4.2] ∎
