---
id: prop-ph-containments-and-polynomial-space
kind: proposition
title: "PH containments and polynomial space"
status: published
origin: pipeline
deps: [def-polynomial-hierarchy-levels, def-relativized-complexity-class, lem-ph-quantifier-block-closure, lem-ph-adaptive-oracle-transcript-normal-form, def-dtime-ntime-dspace-and-nspace]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local proof and prerequisite repair; not independent review or a whole-closure audit"
    delegated_by: owner
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, §§5.1--5.3"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For every $k\ge0$,
$$\Sigma_k^p\cup\Pi_k^p\subseteq\Delta_{k+1}^p\subseteq\Sigma_{k+1}^p\cap\Pi_{k+1}^p.$$
Moreover $\mathrm{PH}\subseteq\mathrm{PSPACE}$, where
$\mathrm{PSPACE}:=\bigcup_{c\ge1}\mathrm{DSPACE}(n^c)$, with DSPACE as in
[[def-dtime-ntime-dspace-and-nspace]].

## Facts & Assumptions

**Given:** a fixed level $k\ge0$.

[F1] Hierarchy levels use a fixed number of polynomial-length alternating blocks over a polynomial-time matrix; level zero is P and PH is their union. [[def-polynomial-hierarchy-levels]]

[F2] $\Delta_{k+1}^p=P^{\Sigma_k^p}$ is a union over fixed total oracle languages, with polynomial clocks counting query writing. [[def-relativized-complexity-class]]

[F3] Complements interchange $\Sigma_k^p$ and $\Pi_k^p$, and each level-zero language belongs to both first-level classes. [[lem-ph-quantifier-block-closure]]

[F4] For $k\ge1$ and $B\in\Sigma_k^p$, a nondeterministic polynomial-time $B$-oracle computation has a $\Sigma_{k+1}^p$ definition. [[lem-ph-adaptive-oracle-transcript-normal-form]]

## Proof

1.1 For $L\in\Sigma_k^p$, query oracle $L$ once on the input. For $L\in\Pi_k^p$, query its complementary $\Sigma_k^p$ language and flip the answer. Both are deterministic polynomial-time oracle deciders, proving the first containment for every $k$. [F2, F3, construct]

1.2 For $k\ge1$, let $L\in P^B$ with $B\in\Sigma_k^p$. Its deterministic machine is also a nondeterministic machine, so $L\in\Sigma_{k+1}^p$ by [F4]. Reversing its accepting and rejecting outcomes gives a deterministic $B$-oracle decider for the complement; hence the complement is in $\Sigma_{k+1}^p$ as well, and $L\in\Pi_{k+1}^p$ by [F3]. For $k=0$, replace each query to the fixed P oracle by its polynomial-time decider. Polynomial query lengths and counts keep the total time polynomial, so $P^P=P$, and [F3] places it in both first-level classes. [F2, F3, F4, algebra]

1.3 For any language at a fixed quantifier level, evaluate its quantified predicate by enumerating block assignments depth first. Keep one assignment and enumeration counter for each of the finitely many blocks, plus the polynomial workspace of the matrix decider. Existential blocks OR their child values and universal blocks AND them; a length-zero block has the one empty assignment. The resulting finite computation halts on every input, including false predicates. Because the level and length polynomials are fixed for the language, all input and work cells together number at most a polynomial in input length. Level-zero polynomial-time computation also uses polynomial space. [F1, construct]

2.1 Step 1.3 places each fixed-level language in some DSPACE$(n^c)$, hence in the stated PSPACE union. Taking the union over levels gives PH contained in PSPACE, while steps 1.1--1.2 give all displayed level containments. [step 1.1, step 1.2, step 1.3, algebra] ∎
