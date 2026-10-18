---
id: lem-it-conditional-typical-fan-cardinality
kind: lemma
title: "Conditional typical-set fan cardinality bound"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-it-jointly-typical-multisource-blocks
  - def-it-empirical-type-and-type-class
  - lem-it-conditional-type-class-cardinality
  - lem-it-finite-conditional-entropy-continuity
  - def-it-finite-conditional-entropy
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the number of joint types is finite and all type classes are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 15"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§15.2, jointly typical sequences and conditional typical-set counts, printed pp. 520–523; §15.4.1, printed pp. 551–554."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Chapter 11, §11.6, conditional source coding and typical-set argument, printed pp. 224–226."
---

## Statement

Let $P$ be the joint law of a finite-alphabet IID $k$-source on $\mathcal X=\prod_{i=1}^k\mathcal X_i$, and fix nonempty $S\subseteq[k]$. Put $C=S^c$ and $m:=|\mathcal X|$. For every $\eta>0$ there is $\delta>0$ such that, for every $n\ge1$, every fixed $x_C^n\in\mathcal X_C^n$, and every $\epsilon>0$,
$$\left|\{x_S^n:(x_S^n,x_C^n)\in\mathcal T_n(P,\delta,\epsilon)\}\right|\le(n+1)^m\exp\!\bigl(n(H_P(X_S\mid X_C)+\eta)\bigr).$$

## Facts & Assumptions

**Given:** The finite source law $P$, the fixed nonempty subset $S$, and $\eta>0$.

[F1] [[def-it-jointly-typical-multisource-blocks]]: every block in $\mathcal T_n(P,\delta,\epsilon)$ has an empirical joint type $q$ with $\|q-P\|_\infty\le\delta$; its additional information conditions only restrict membership further.

[F2] [[def-it-empirical-type-and-type-class]]: an attainable joint type is determined by its integer symbol counts, and its type classes are the fibers of the empirical-type map.

[F3] [[lem-it-conditional-type-class-cardinality]]: for fixed $x_C^n$ and a feasible joint type $q$, the number of compatible $x_S^n$ is at most $\exp(nH_q(X_S\mid X_C))$.

[F4] [[lem-it-finite-conditional-entropy-continuity]]: $q\mapsto H_q(X_S\mid X_C)$ is continuous at the fixed joint law $P$.

[F5] [[def-it-finite-conditional-entropy]]: conditional entropy is the finite weighted sum of conditional-law entropies, with zero-mass conditioning values omitted.

[F6] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: finite entropy uses natural logarithms and $0\ln0=0$.

## Proof

1.1 By [F4], choose $\delta>0$ so that every joint probability vector $q$ with $\|q-P\|_\infty\le\delta$ satisfies $|H_q(X_S\mid X_C)-H_P(X_S\mid X_C)|\le\eta$. The joint alphabet is identified with $\mathcal X_S\times\mathcal X_C$ by a coordinate permutation, so the same coordinatewise neighborhood applies to the joint type of $(x_S^n,x_C^n)$. [F1, F4, choose]

1.2 For the fixed $x_C^n$, each $x_S^n$ in the set has a unique joint empirical type $q$ by [F2]. There are at most $(n+1)^m$ possible such types, since each of the $m$ joint symbol counts is an integer from $0$ to $n$; the sum constraint can only reduce this count. [F2, algebra]

2.1 For each feasible type $q$ arising from a typical block, [F1] and step 1.1 give $H_q(X_S\mid X_C)\le H_P(X_S\mid X_C)+\eta$. By [F3], its conditional type class has size at most $\exp(n(H_P(X_S\mid X_C)+\eta))$. Summing this bound over the at most $(n+1)^m$ types from step 1.2 proves the claimed inequality. The empty-complement case uses its singleton alphabet and the same count. [F1, F3, F5, F6, step 1.1, step 1.2, algebra] ∎
