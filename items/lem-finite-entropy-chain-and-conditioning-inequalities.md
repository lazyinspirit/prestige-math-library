---
id: lem-finite-entropy-chain-and-conditioning-inequalities
kind: lemma
title: "Finite entropy chain and conditioning inequalities"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps: ["lem-finite-simplex-entropy-continuity-and-concavity"]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; only finite sums, finite selection and explicit real-variable estimates occur.
sources:
  references:
    - title: "Local adapted proof from Tao"
      url: https://arxiv.org/pdf/1509.05422v4
      locator: "Section 3, PDF pp. 19\u201320"
---

## Statement

For finite-valued random variables use natural-log entropy $\mathcal H(X)=-\sum_xp_x\log p_x$, with $0\log0=0$, and define conditional entropy by averaging the entropies of conditional laws with positive conditioning probability. Then
$$\mathcal H(X,Y)=\mathcal H(Y)+\mathcal H(X\mid Y),\quad0\le\mathcal H(X\mid Y)\le\mathcal H(X)\le\log\#\operatorname{range}X.$$
Also $\mathcal H(X,Y\mid Z)\le\mathcal H(X\mid Z)+\mathcal H(Y\mid Z)$ and $I(X;Y)=\mathcal H(X)-\mathcal H(X\mid Y)=\mathcal H(Y)-\mathcal H(Y\mid X)\ge0$.

## Facts & Assumptions

**Given:** All hypotheses and conventions in the Statement.

[F1] [[lem-finite-simplex-entropy-continuity-and-concavity]] supplies its stated finite identity or entropy property under its exact hypotheses.

## Proof

1.1 On each positive joint atom write $p_{xy}=p_y p_{x\mid y}$ and split $-p_{xy}\log p_{xy}$. Summing gives the chain identity; zero atoms contribute zero. [given, algebra]

2.1 The marginal law of $X$ is the convex combination, weighted by $p_y$, of its conditional laws. Concavity in [F1] gives $\mathcal H(X)\ge\sum_yp_y\mathcal H(X\mid Y=y)$. Nonnegativity and the alphabet bound follow from the same supplier. Apply this argument inside each positive $Z$ atom, followed by the chain identity, to obtain conditional subadditivity. The two expressions for $I$ follow by applying the chain identity in both orders, and conditioning reduces entropy, so they are nonnegative. [F1, step 1.1, algebra] ∎
