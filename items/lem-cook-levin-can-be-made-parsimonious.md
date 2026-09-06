---
id: lem-cook-levin-can-be-made-parsimonious
kind: lemma
title: "The Cook--Levin construction can be made parsimonious"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-parsimonious-reduction, def-number-sat, def-bounded-computation-tableau, lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs, lem-cook-levin-map-is-polynomial-time]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

For every fixed polynomial-time nondeterministic machine $N$, one can compute
in polynomial time a formula $\varphi_{N,x}$ together with an ordered list
$V_{N,x}$ of all its declared variables, whose satisfying assignments are
in bijection with the accepting computation paths of $N$ on $x$. Consequently
$x\mapsto(\varphi_{N,x},V_{N,x})$ is a parsimonious reduction from the accepting-path
count of $N$ to $\mathrm{NumberSAT}$.

## Facts & Assumptions

**Given:** a fixed nondeterministic polynomial-time machine $N$.

[L1] A bounded tableau records one computation branch, including the unique state-tagged head position in each row, by [[def-bounded-computation-tableau]].

[L2] The standard local tableau constraints are satisfiable exactly when an accepting bounded tableau exists, by [[lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs]].

[L3] The Cook--Levin formula is computable in polynomial time for fixed $N$, by [[lem-cook-levin-map-is-polynomial-time]].

[L5] NumberSAT counts assignments to the complete ordered declared-variable list, including unused variables, by [[def-number-sat]].

[L4] A parsimonious reduction preserves the exact numerical count, by [[def-parsimonious-reduction]].

## Proof

**Proof technique:** direct.

1.1 Replace $N$ by a fixed one-tape simulator $N^*$. Between two transitions of $N$, the simulator's sweeps are deterministic; at an original nondeterministic transition it makes exactly the same tagged choice as $N$. Each such choice first enters a distinct intermediate state labelled by its transition tag, before deterministically executing that transition; these states are part of the recorded configuration. Even choices with the same eventual successor therefore give different tableau rows. Erasing the deterministic simulation steps and reading these tags is a bijection between accepting paths. The standard multitape-to-one-tape simulation has polynomial slowdown. Choose a polynomial $T(n)\ge n+1$ bounding both its running time and every tape position it can visit, and pad every halted branch to time $T(n)$. This supplies all hypotheses of [L1]--[L3]. [given, construct]

2.1 Use one-hot tableau variables for the symbol (including the tagged state) in every time-cell position. The initial-row, exactly-one-symbol, local-transition, and accepting constraints use only those variables. Take their conjunction as $\varphi_{N,x}$ without introducing auxiliary variables. Let $V_{N,x}$ list every cell variable $X_{t,c,a}$ once, in lexicographic order of time, cell, and a fixed order on the simulator alphabet. Output the encoded pair $(\varphi_{N,x},V_{N,x})$, which is well formed for NumberSAT. [L1, L5, step 1.1, construct]

3.1 An accepting path fixes every cell of its padded tableau and therefore one truth value for every tableau variable. Every declared variable is such a cell variable, so none contributes a free choice. Conversely, any satisfying assignment gives exactly one legal accepting tableau by [L2], and the retained choice tags recover exactly one accepting path of $N^*$, hence exactly one accepting path of $N$ by step 1.1. These maps are inverse, so $$\#\operatorname{acc}_N(x)=\mathrm{NumberSAT}(\varphi_{N,x},V_{N,x}).$$ [L1, L2, L5, step 1.1, step 2.1]

4.1 The tableau has polynomial dimensions, its local constraints have polynomial total size, and [L3] supplies the polynomial-time construction. Enumerating the polynomially many declared variable names in the specified order also takes polynomial time. Together with the exact equality in step 3.1, [L4] proves parsimony. [L3, L4, step 3.1] ∎
