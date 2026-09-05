---
id: lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades
kind: lemma
title: "Large induced subgraphs without a polynomial clique or stable set force complete or anticomplete blockades"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set, def-c-sparse-and-c-restricted-vertex-set, lem-greedy-colouring-bound, thm-clique-independence-chromatic-bounds, lem-restrictedness-is-complement-invariant, lem-complement-swaps-cliques-and-stable-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Claim 3.5.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Let $\mathcal F$ be a generalized nice, leaf-reducible, wonderful finite
family. Let $c_1\ge 1$ and $c_2>0$ be the constants from
[[lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set]].
Fix an $\overline{\mathcal F}$-free graph $G$, define

$$ q:=42c_1^2,\qquad c:=\min\{q^{-1},c_2/2\},\qquad x:=|G|^{-1/(3c_1)},\qquad \epsilon:=x^{1/(7c_1)}. $$

and assume that $G$ has no clique or stable set of size at least $|G|^c$.
Then every induced subgraph $F$ of $G$ with $|F|\ge \epsilon^{2c_1}|G|$ has a
complete or anticomplete $(k,|F|/k^{c_1})$-blockade for some integer
$k\in[2,\epsilon^{-1}]$.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

[L1] The previous lemma gives every $\overline{\mathcal F}$-free graph either an $x$-restricted induced subgraph of size at least $x^{c_1}$ times the ambient order, or a complete or anticomplete $(k,|G|/k^{c_1})$-blockade with $k\ge 2$, or a clique or stable set of size at least $(x^{c_1}|G|)^{c_2}$ ([[lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set]]).

[L2] A nonempty $x$-sparse graph $H$ satisfies $$ \chi(H)\le x|H|+1,\qquad |H|\le \chi(H)\alpha(H), $$ by [[lem-greedy-colouring-bound]] and [[thm-clique-independence-chromatic-bounds]].

[L3] A set is $x$-restricted exactly when it is $x$-sparse in one of $G$ and $\overline G$, and cliques in one graph are stable sets in the complement ([[def-c-sparse-and-c-restricted-vertex-set]], [[lem-restrictedness-is-complement-invariant]], [[lem-complement-swaps-cliques-and-stable-sets]]).

## Proof

**Proof technique:** apply the previous lemma to $F$ and show that the restricted and clique/stable branches contradict the assumed failure of the polynomial bound.


1.1 Let $F$ be an induced subgraph of $G$ with $|F|\ge \epsilon^{2c_1}|G|$, and suppose for contradiction that $F$ has no complete or anticomplete $(k,|F|/k^{c_1})$-blockade for any integer $k\in[2,\epsilon^{-1}]$. [given, assume-contra]


2.1 Apply [L1] to the graph $F$ with the parameter $x$. Because the blockade branch is excluded by step 1.1, either:

1. $F$ has an $x$-restricted induced subgraph $S$ with $|S|\ge x^{c_1}|F|$, or
2. $F$ has a complete or anticomplete $(k,|F|/k^{c_1})$-blockade for some integer $k\ge 2$, or
3. $F$ has a clique or stable set of size at least $(x^{c_1}|F|)^{c_2}$.

[step 1.1, L1]


3.1 Suppose the restricted branch of step 2.1 holds. Then $$ |S|\ge x^{c_1}|F|\ge x^{c_1}\epsilon^{2c_1}|G| = x^{c_1+2/7}|G|=x^{-2c_1+2/7}. $$ Since $c_1\ge 1$ and $0<x<1$, the exponent $-2c_1+2/7$ is at most $-1$, so $|S|\ge x^{-1}$. After replacing $S$ by the same set in the complementary graph if necessary, [L3] lets us assume that $S$ is $x$-sparse. [step 2.1, L3, algebra]


3.2 Suppose instead that the blockade branch of step 2.1 holds. Then step 1.1 forces $k>\epsilon^{-1}$. Choosing one vertex from each block gives a clique or stable set of size $k>\epsilon^{-1}=|G|^{1/(21c_1^2)}\ge |G|^c$, because $c\le (42c_1^2)^{-1}$. This contradicts the hypothesis on $G$. [step 1.1, step 2.1, algebra, choose]


3.3 Suppose instead that the clique-or-stable-set branch of step 2.1 holds. Then $$ (x^{c_1}|F|)^{c_2} \ge (x^{c_1}\epsilon^{2c_1}|G|)^{c_2} = (x^{c_1+2/7}|G|)^{c_2}. $$ Since $x=|G|^{-1/(3c_1)}$, the inner factor equals $|G|^{1-(c_1+2/7)/(3c_1)}$, whose exponent is at least $1/2$ because $c_1\ge 1$. Therefore $F$ contains a clique or stable set of size at least $|G|^{c_2/2}\ge |G|^c$, because $c\le c_2/2$. This again contradicts the hypothesis on $G$. [step 2.1, algebra]


4.1 By [L2], $$ \alpha(G[S])\ge \frac{|S|}{x|S|+1} =\frac{1}{x+|S|^{-1}} \ge \frac{1}{x+x} \ge x^{-1/2}. $$ Because $x=|G|^{-1/(3c_1)}$, this gives a clique or stable set of size at least $|G|^{1/(6c_1)}\ge |G|^c$, contradicting the hypothesis on $G$ because $c\le q^{-1}=1/(42c_1^2)\le 1/(6c_1)$. [step 3.1, L2, algebra]


5.1 All three branches from step 2.1 contradict the hypothesis on $G$, so the assumption in step 1.1 was false. Therefore $F$ has a complete or anticomplete $(k,|F|/k^{c_1})$-blockade for some integer $k\in[2,\epsilon^{-1}]$. [step 4.1, step 3.2, step 3.3, discharge-contradiction] ∎
