---
title: Positive first order parameter — Corollary 2.2
status: published
research_item: cor-expander-sync-cor-2-2
dependency_level: 9
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 11, phase convention; pp. 12–13, Lemma 2.1 and Corollary 2.2
      statement: For a stable state on an (n,d*,alpha)-expander, alpha < 1/4 implies
        that the normalized first order parameter is positive.
      hypotheses: The article assumes a connected graph and globally rotates phases so
        that the first order parameter is real and nonnegative.
      reading_limits: The extracted article text at the cited convention, lemma and
        corollary was inspected. This reference attributes the article claim;
        the proof below uses the completed local inequality. No independent
        audit of the article or its underlying references is claimed.
---

PDF p. 13: ` Corollary 2.2 `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-daido](item-def-expander-sync-daido)
- [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)
- [lem-expander-sync-lem-2-1](item-lem-expander-sync-lem-2-1)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite connected undirected graph with $n=|V|>0$, symmetric binary adjacency matrix $A$, and possible self-loops. Let $d^*\geq0$ and $0\leq\alpha<1/4$, and suppose $G$ is an $(n,d^*,\alpha)$-expander: $\|A-(d^*/n)J\|\leq\alpha d^*$, where $J$ is the all-ones matrix and the norm is the Euclidean operator norm. Let $\theta$ be a stable state, meaning a local minimum on the phase torus of the energy $\mathcal E_G(\theta)=\frac12\sum_{x,y\in V}A_{xy}(1-\cos(\theta_x-\theta_y))$. For $k\geq1$ put $\rho_k(\theta)=n^{-1}\sum_{x\in V}e^{ik\theta_x}$, where phases are angles modulo $2\pi$. Use the common-rotation convention under which $\rho_1$ is real and nonnegative and phases have representatives in $(-\pi,\pi]$. Then $\rho_1(\theta)>0$.

## Statement references

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)

[def-expander-sync-states](item-def-expander-sync-states)

[def-expander-sync-daido](item-def-expander-sync-daido)

[prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)

[lem-expander-sync-lem-2-1](item-lem-expander-sync-lem-2-1)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Facts & Assumptions

[F1] Under countable choice and the stated connected expander, stable-state and rotation hypotheses, the first and second order parameters satisfy $\rho_1^2\geq(1+|\rho_2|^2)/2-2\alpha$ ([lem-expander-sync-lem-2-1](item-lem-expander-sync-lem-2-1), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F2] A common phase rotation can make $\rho_1$ real and nonnegative, including the case in which it is zero, and representatives may be chosen in $(-\pi,\pi]$ ([prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)).

## Proof

**Given:** The graph, parameters and stable state in the Statement, under countable choice and the stated rotation convention.

**Goal:** Show $\rho_1>0$.

1.1 Since $|\rho_2|^2\geq0$, [F1] gives $\rho_1^2\geq\frac12-2\alpha$. The assumption $\alpha<1/4$ makes the right-hand side strictly positive, so $\rho_1^2>0$. [F1, given, algebra]

2.1 By [F2] and the chosen convention, $\rho_1$ is real and nonnegative. Its strictly positive square therefore implies $\rho_1>0$, as claimed. [F2, step 1.1, algebra] ∎

## Source notes

Corollary 2.2 of the cited article states this positivity conclusion under the article's preceding connectedness and phase-normalization conventions. The citation is attribution; the argument above uses [F1].
