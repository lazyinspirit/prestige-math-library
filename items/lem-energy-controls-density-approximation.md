---
id: lem-energy-controls-density-approximation
kind: lemma
title: "A small energy increment makes fine-pair densities close to their coarse densities almost everywhere"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-energy-of-a-vertex-partition, lem-energy-is-monotone-under-refinement, thm-markov-inequality]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Lemma 2.8.7 and Exercise 2.8.8"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal Q$ refine a vertex partition $\mathcal P$ of an $n$-vertex graph. For $x,y\in V(G)$, let $P_x,P_y$ be their $\mathcal P$-parts and $Q_x,Q_y$ their $\mathcal Q$-parts. If
$$q(\mathcal Q)-q(\mathcal P)\le\epsilon^3,$$
then fewer than or equal to $\epsilon n^2$ ordered pairs $(x,y)$ satisfy
$$|d(Q_x,Q_y)-d(P_x,P_y)|>\epsilon.$$

## Facts & Assumptions

**Given:** Partitions and a parameter satisfying the Statement.

[L1] Energy is the weighted mean square of part-pair densities, and refinement cannot lower it ([[def-energy-of-a-vertex-partition]], [[lem-energy-is-monotone-under-refinement]]).

[L2] For a nonnegative finite random variable $X$ and $a>0$, Markov's inequality gives $\Pr(X\ge a)\le\mathbb E X/a$ ([[thm-markov-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Choose an ordered vertex pair $(x,y)$ uniformly and set $Z_P=d(P_x,P_y)$ and $Z_Q=d(Q_x,Q_y)$. On each coarse pair, double-counting gives $\mathbb E(Z_Q\mid P_x,P_y)=Z_P$. [given, L1, algebra]

2.1 Expanding the square and using the conditional identity in step 1.1 gives
$$\mathbb E((Z_Q-Z_P)^2)=\mathbb E(Z_Q^2)-\mathbb E(Z_P^2)=q(\mathcal Q)-q(\mathcal P)\le\epsilon^3.$$
[step 1.1, L1, algebra]

3.1 Apply [L2] to $(Z_Q-Z_P)^2$ with threshold $\epsilon^2$. The probability that $|Z_Q-Z_P|>\epsilon$ is at most $\epsilon^3/\epsilon^2=\epsilon$. [step 2.1, L2, algebra]

4.1 Multiplying this probability by the $n^2$ ordered vertex pairs proves the asserted exceptional-pair bound. [step 3.1, algebra] ∎
