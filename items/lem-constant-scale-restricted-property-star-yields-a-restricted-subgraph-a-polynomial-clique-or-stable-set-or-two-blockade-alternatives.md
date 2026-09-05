---
id: lem-constant-scale-restricted-property-star-yields-a-restricted-subgraph-a-polynomial-clique-or-stable-set-or-two-blockade-alternatives
kind: lemma
title: "Constant-scale restricted property (*) yields a restricted subgraph, a polynomial clique or stable set, or two blockade alternatives"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph, lem-iterated-restricted-sparsification-reaches-the-target-scale, def-c-sparse-and-c-restricted-vertex-set]
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 4.3"
      url: "https://arxiv.org/html/2606.06258v2"
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, Lemma 5.3"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
---

## Statement

Suppose that $\mathcal F$ has property $(*)$ and is leaf-reducible. Then there
exist constants $c_1,c_2,c_3>0$, $c_4,c_5\ge 4$, and $c:=2^{-4c_5}$ such that
for every $x\in(0,c^{10}]$ and every $c^{10}$-restricted
$\overline{\mathcal F}$-free graph $G$, at least one of the following holds:

1. $G$ has an $x$-restricted induced subgraph with at least $x^{22c_4}|G|$
   vertices;
2. $G$ has a clique or stable set of size at least $(x^{30c_4}|G|)^{c_1}$;
3. $G$ has a complete or anticomplete $(k,|G|/k^{c_2+27c_4/c_3})$-blockade for
   some real $k\ge 2$;
4. $G$ has a pure or $x$-sparse $(\ell,|G|/\ell^{29c_4})$-blockade for some
   real $\ell\in[c^{-1},x^{-2}]$.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ with property $(*)$ and leaf-reducible,
an $x\in(0,c^{10}]$, and a $c^{10}$-restricted $\overline{\mathcal F}$-free
graph $G$.

[L1] The previous claim says that, under the failure of outcomes 2-4, every
$y^{10/3}$-restricted induced subgraph of sufficiently large relative size has
a deeper $y^{11/3}$-restricted induced subgraph
([[lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph]]).

[L2] If a graph has a $c^{10}$-restricted induced subgraph of size at least
$(c^{10})^{3(c_4+2)}|G|$ and every $\lambda$-restricted induced subgraph of
size at least $\lambda^{3(c_4+2)}|G|$ contains a
$\lambda^{11/10}$-restricted induced subgraph of size at least
$\lambda^{3(c_4+2)/10}$ times as many vertices, then the graph has an
$x^{10/3}$-restricted induced subgraph with at least
$x^{11(c_4+2)}|G|$ vertices
([[lem-iterated-restricted-sparsification-reaches-the-target-scale]]).

[L3] If a set is $x^{10/3}$-restricted, then it is $x$-restricted
([[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** if outcomes 2-4 fail, verify the hypotheses of the
iterative restricted-sparsification lemma with
$b_1=\tfrac{11}{10}$, $b_2=3(c_4+2)$, and $b_3=\tfrac{3(c_4+2)}{10}$.


1.1 Let $c_1,c_2,c_3>0$, $c_4,c_5\ge 4$, and $c:=2^{-4c_5}$ be the constants from [[lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph]], and set $$ b_1:=11/10,\qquad b_2:=3(c_4+2),\qquad b_3:=3(c_4+2)/10. $$ [L1, choose]


1.2 Suppose outcomes 2, 3, and 4 all fail. We will show that outcome 1 then holds. [given, assume-contra]


2.1 Hypothesis 1 of [L2] is immediate: the graph $G$ itself is $c^{10}$-restricted and has size $|G|\ge (c^{10})^{b_2}|G|$ because $b_2>0$ and $c^{10}<1$. [step 1.1, L2, given, algebra]


2.2 Let $\lambda\in[x^{10/3},c^{10}]$ and let $F$ be a $\lambda$-restricted induced subgraph of $G$ with $|F|\ge \lambda^{b_2}|G|$. Write $\lambda=y^{10/3}$, so $y=\lambda^{3/10}\in[x,c^3]$. Then $|F|\ge y^{10(c_4+2)}|G|$. Since outcomes 2-4 fail globally, [L1] applied with this $y$ gives a $y^{11/3}=\lambda^{11/10}$-restricted induced subgraph of $F$ with at least $y^{c_4+2}|F|=\lambda^{b_3}|F|$ vertices. [step 1.1, step 1.2, L1, L2, algebra]


2.3 The exponent condition for [L2] holds because $$ b_1b_2=\frac{11}{10}\cdot 3(c_4+2)=\frac{33(c_4+2)}{10} \ge \frac{30(c_4+2)}{10}=b_2+b_3. $$ [step 1.1, L2, algebra]


3.1 Therefore [L2] yields an $x^{10/3}$-restricted induced subgraph $S\subseteq G$ with at least $$ (x^{10/3})^{b_1b_2}|G|=x^{11(c_4+2)}|G| $$ vertices. Since $c_4\ge 4$, the exponent satisfies $11(c_4+2)\le 22c_4$, so $|S|\ge x^{22c_4}|G|$. By [L3], the subgraph $S$ is $x$-restricted. Hence outcome 1 holds. [step 2.1, step 2.2, step 2.3, L2, L3, algebra]


4.1 Outcome 1 follows whenever outcomes 2-4 fail. Hence at least one of the four stated outcomes always holds. [step 1.2, step 3.1, discharge-contradiction] ∎
