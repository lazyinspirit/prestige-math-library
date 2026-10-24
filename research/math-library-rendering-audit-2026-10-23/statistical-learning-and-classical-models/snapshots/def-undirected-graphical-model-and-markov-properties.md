---
id: def-undirected-graphical-model-and-markov-properties
kind: definition
title: "Finite undirected graphs, Markov properties, and clique factorization"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-random-element-and-real-random-variable
  - def-conditional-independence-given-a-sigma-algebra
  - def-axiom-of-choice
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition"
      url: "https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf"
      locator: "Chapter 17, §17.2, printed pp. 627–629"
    - title: "Robin Evans, Graphical Models course notes"
      url: "https://www.stats.ox.ac.uk/~evans/gms/lecturenotes.pdf"
      locator: "§§4.1–4.3, printed pp. 15–17"
---

## Definition

Assume AC. Let $G=(V,E)$ be a finite simple undirected graph, with $E$ a set of unordered two-element subsets of $V$. A clique is a nonempty subset $C\subseteq V$ whose distinct vertices are adjacent. Let $(X_i)_{i\in V}$ be random elements on a common probability space, and for $U\subseteq V$ put $\mathcal F_U=\sigma(X_i:i\in U)$, with $\mathcal F_\emptyset=\{\emptyset,\Omega\}$. A path is a finite sequence of distinct vertices with adjacent consecutive vertices; $C$ separates $A$ from $B$ if every path from $A$ to $B$ meets $C$. The pairwise Markov property is $\mathcal F_{\{i\}}\perp\!\!\!\perp\mathcal F_{\{j\}}\mid\mathcal F_{V\setminus\{i,j\}}$ whenever $i\ne j$ and $\{i,j\}\notin E$. The global Markov property is $\mathcal F_A\perp\!\!\!\perp\mathcal F_B\mid\mathcal F_C$ whenever $A,B,C\subseteq V$ are pairwise disjoint and $C$ separates $A$ from $B$. If each $X_i$ takes values in a finite nonempty state space $\mathcal X_i$, a finite-state clique-factorized mass function on $G$ is $p(x)=Z^{-1}\prod_{C\in\mathcal C}\psi_C(x_C)$, where $\mathcal C$ is a finite collection of nonempty cliques, $\psi_C:\prod_{i\in C}\mathcal X_i\to(0,\infty)$, and $Z=\sum_{x\in\prod_{i\in V}\mathcal X_i}\prod_{C\in\mathcal C}\psi_C(x_C)$. The product state space and sum are finite, and every potential is positive and finite, so $0<Z<\infty$ and $p$ is a probability mass function. No equivalence between the clique-factorized class and either Markov property is asserted here.

## Definition references

[The Elements of Statistical Learning, §17.2](https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf)

[Evans, Graphical Models, §§4.1–4.3](https://www.stats.ox.ac.uk/~evans/gms/lecturenotes.pdf)
