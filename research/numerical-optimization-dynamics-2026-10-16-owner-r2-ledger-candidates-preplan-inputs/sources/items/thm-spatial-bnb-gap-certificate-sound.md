---
id: thm-spatial-bnb-gap-certificate-sound
kind: theorem
title: A spatial branch-and-bound gap certificate proves global epsilon-optimality
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 3
proof_strategy: direct
deps: [alg-certified-spatial-branch-and-bound, def-spatial-box-bound-certificate]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §12"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "Thomas Hübner, Akshay Gupte, and Steffen Rebennack, Spatial branch-and-bound for nonconvex separable piecewise linear optimization, §4"
      url: "https://optimization-online.org/wp-content/uploads/2024/05/Spatial-branch-and-bound-Piecewise-Linear-IJOC-revisions.pdf"
---

## Statement

Suppose [[alg-certified-spatial-branch-and-bound]] returns a feasible witness $\hat x$ with a verified upper bound $U$, and its complete terminal-leaf ledger contains a valid lower bound for every nonempty leaf. Let $L$ be the least such lower bound. If $U-L\le\varepsilon$, then $\hat x$ is globally epsilon-optimal:
$$f(\hat x)-\inf_{x\in C} f(x)\le\varepsilon.$$
If instead every terminal leaf has a certified empty-box proof, then $C=\emptyset$.

## Facts & Assumptions

**Given:** A box instance $(D_0,C,f)$, the algorithm's split/closure ledger, a feasible witness, valid leaf lower bounds, and $\varepsilon>0$.

[F1] The root leaf is $D_0$; replacing a leaf by its two midpoint children preserves their union as that leaf, and a leaf is removed as infeasible only with a proof of emptiness. [[alg-certified-spatial-branch-and-bound]]

[F2] Every nonempty leaf lower bound satisfies $\ell_B\le\inf_{x\in B\cap C}f(x)$. [[def-spatial-box-bound-certificate]]

[F3] The returned witness satisfies $\hat x\in C$ and $f(\hat x)\le U$. [[def-spatial-box-bound-certificate]]

## Proof

1.1 By induction on the finite number of splits, the union of terminal leaves is $D_0$: it holds at initialization, and each split replaces one leaf by two children whose union is the parent by [F1]. Every feasible point is therefore in a terminal leaf that is not certified empty. [given, F1, induction]

2.1 For any $x\in C$, choose a terminal leaf $B$ containing $x$ using step 1.1. Its lower-bound report is valid by [F2], so $L\le\ell_B\le f(x)$. Since this holds for every feasible $x$, $L\le\inf_{x\in C}f(x)$. [step 1.1, F2, algebra]

3.1 The witness bound [F3] and $U-L\le\varepsilon$ give $f(\hat x)\le U\le L+\varepsilon\le\inf_{x\in C}f(x)+\varepsilon$, proving the global gap claim. If every leaf is certified empty, step 1.1 covers $D_0$ by leaves disjoint from $C$, so $C=\emptyset$. [given, step 2.1, F3, algebra] ∎

