---
id: thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property
kind: theorem
title: "Leaf-reducible wonderful generalized nice finite families have the Erdős-Hajnal property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-erdos-hajnal-property-and-constant, def-generalized-nice-finite-family, def-leaf-reducible-finite-family, def-wonderful-finite-family, lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set, lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades, thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs, lem-greedy-colouring-bound, thm-clique-independence-chromatic-bounds, lem-restrictedness-is-complement-invariant, lem-complement-swaps-cliques-and-stable-sets, prop-erdos-hajnal-property-is-complement-invariant]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 3.5 and Lemma 1.12"
      url: "https://arxiv.org/html/2606.06258v2"
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Theorem 7.4"
      url: "https://arxiv.org/html/2312.15333v2"
---

## Statement

Let $\mathcal F$ be a generalized nice, leaf-reducible, wonderful finite
family. Then $\mathcal F$ has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** A generalized nice, leaf-reducible, wonderful finite family $\mathcal F$.

[L1] There exist constants $c_1\ge 1$ and $c_2>0$ such that every $\overline{\mathcal F}$-free graph satisfies the three-outcome lemma from [[lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set]].

[L2] For those constants, every induced subgraph $F$ of an $\overline{\mathcal F}$-free graph $G$ with $|F|\ge \epsilon^{2c_1}|G|$ has a complete or anticomplete $(k,|F|/k^{c_1})$-blockade for some $k\in[2,\epsilon^{-1}]$ whenever $G$ has no clique or stable set of size $|G|^c$, where $$ c:=\min\{(42c_1^2)^{-1},c_2/2\}. $$ ([[lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades]])

[L3] If every induced subgraph $F$ of $G$ with $|F|\ge \epsilon^{2a}|G|$ has a complete or anticomplete $(k,|F|/k^a)$-blockade for some $k\in[2,\epsilon^{-1}]$, then $G$ has an $\epsilon$-restricted induced subgraph with at least $\epsilon^{3a}|G|$ vertices ([[thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs]]).

[L4] A nonempty $\epsilon$-sparse graph $H$ satisfies $$ \chi(H)\le \epsilon|H|+1,\qquad |H|\le \chi(H)\alpha(H), $$ and the same statement with cliques instead of stable sets holds after taking complements ([[lem-greedy-colouring-bound]], [[thm-clique-independence-chromatic-bounds]], [[lem-restrictedness-is-complement-invariant]], [[lem-complement-swaps-cliques-and-stable-sets]]).

[L5] If the complement class of a hereditary family has the Erdős-Hajnal property, then so does the family itself ([[prop-erdos-hajnal-property-is-complement-invariant]], [[def-erdos-hajnal-property-and-constant]]).

## Proof

**Proof technique:** prove an Erdős-Hajnal exponent for the $\overline{\mathcal F}$-free class and then use complement invariance.


1.1 Let $c_1\ge 1$ and $c_2>0$ be the constants from [L1], put $$ q:=42c_1^2,\qquad m:=2^q,\qquad c:=\min\{q^{-1},c_2/2\}, $$ and fix a nonempty $\overline{\mathcal F}$-free graph $G$. We will prove that $G$ has a clique or stable set of size at least $|G|^c$. [L1, choose, given]


2.1 If $G$ already has such a clique or stable set, there is nothing to prove. So assume for contradiction that $G$ has no clique or stable set of size $|G|^c$. Because $c\le q^{-1}$, one has $m^c=(2^q)^c\le 2$. Hence every nonempty graph with at most $m$ vertices already has a clique or stable set of size at least $|G|^c$, so this forces $|G|>m$. [step 1.1, assume-contra, algebra]


3.1 Define $$ x:=|G|^{-1/(3c_1)},\qquad \epsilon:=x^{1/(7c_1)}. $$ Then $$ x\le m^{-1/(3c_1)}=2^{-14c_1},\qquad \epsilon\le 2^{-14c_1/(7c_1)}=\tfrac14, $$ so in particular $x<\epsilon\le \tfrac14$. [step 2.1, algebra]


4.1 By [L2], every induced subgraph $F$ of $G$ with $|F|\ge \epsilon^{2c_1}|G|$ has a complete or anticomplete $(k,|F|/k^{c_1})$-blockade for some $k\in[2,\epsilon^{-1}]$. Therefore [L3] applies with $a:=c_1$ and gives an $\epsilon$-restricted induced subgraph $S\subseteq G$ with $|S|\ge \epsilon^{3c_1}|G|$. [step 2.1, step 3.1, L2, L3]


5.1 Since $\epsilon=x^{1/(7c_1)}=|G|^{-1/(21c_1^2)}$ and $c_1\ge 1$, one has $$ |S|\ge \epsilon^{3c_1}|G|=\epsilon^{-21c_1^2+3c_1}\ge \epsilon^{-1}. $$ After taking complements if necessary, [L4] lets us assume that $S$ is $\epsilon$-sparse. [step 3.1, step 4.1, L4, algebra]


6.1 Applying [L4] to the graph $G[S]$ yields $$ \alpha(G[S])\ge \frac{|S|}{\epsilon|S|+1} = \frac{1}{\epsilon+|S|^{-1}} \ge \frac{1}{2\epsilon} \ge \epsilon^{-1/2} = |G|^{1/(42c_1^2)} \ge |G|^c, $$ because $c\le (42c_1^2)^{-1}$. This contradicts step 2.1. [step 5.1, L4, algebra]


7.1 Therefore every nonempty $\overline{\mathcal F}$-free graph has a clique or stable set of size at least $|G|^c$, so the complement class of $\mathcal F$ has the Erdős-Hajnal property. By [L5], $\mathcal F$ itself has the Erdős-Hajnal property. [step 1.1, step 6.1, L5, discharge-contradiction] ∎
