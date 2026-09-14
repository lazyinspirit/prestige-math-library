---
id: thm-countable-support-iterations-preserve-properness
kind: theorem
title: "Countable-support iterations preserve properness"
status: draft
origin: pipeline
deps: [lem-proper-iteration-master-condition, def-countable-model-generic-master-condition-and-proper-poset, lem-proper-master-condition-characterizations, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jech, Set Theory, Proper Iteration Lemma 31.17 and Theorem 31.15, printed pp. 604-606"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/31-proper_forcing.pdf
    - title: "Karagila, Forcing & Symmetric Extensions, Fact 8.15"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

In ZFC, if every iterand in a countable-support iteration is forced proper by
its preceding stage, then the full iteration and every initial segment are
proper.

## Facts & Assumptions

**Given:** A countable-support iteration $\langle P_\xi,\dot Q_\xi:\xi<\delta\rangle$ such that $P_\xi\Vdash\dot Q_\xi$ is proper for every $\xi<\delta$.

[F1] The proper-iteration master lemma extends a master at an earlier stage to a master at any later stage while placing a named model condition into the generic. [[lem-proper-iteration-master-condition]]

[F2] Properness means that below every $p\in P\cap M$ there is an $(M,P)$-master, for every relevant countable elementary model $M$. [[def-countable-model-generic-master-condition-and-proper-poset]]

[F3] Properness on a club of relevant countable models is equivalent to the all-model formulation. [[lem-proper-master-condition-characterizations]]

[A1] AC supplies the well-ordered elementary structures and countable models quantified over by properness. [[def-axiom-of-choice]]

## Proof

1.1 Fix $\alpha\leq\delta$ and a sufficiently large well-ordered $H_\theta$ containing the full iteration and $\alpha$. The countable elementary submodels containing these fixed parameters form a club. Fix one such $M$ and $p\in P_\alpha\cap M$; then $P_\alpha$ and the restricted iteration belong to $M$. At the trivial stage $P_0$, its unique condition $q_0$ is $(M,P_0)$-generic, and the canonical $P_0$-name $\check p$ is forced to belong to $P_\alpha\cap M$ with trivial restriction in $G_0$. Apply F1 with $\gamma=0$ to obtain an $(M,P_\alpha)$-generic $q$ such that $q\Vdash\check p\in\dot G_\alpha$. Hence $q$ and $p$ are compatible: otherwise directedness of a generic filter would make $q$ force $\check p\notin\dot G_\alpha$. Choose a common extension $q'\leq q,p$. Predensity below $q$ persists below the stronger condition $q'$, so $q'$ is still $(M,P_\alpha)$-generic and is now literally below $p$. [F1, F3, A1, Given]

2.1 Step 1.1 proves the master condition on the club of models containing the full iteration and $\alpha$; F3 converts this to the all-model formulation in F2. Thus $P_\alpha$ is proper. Since $\alpha\leq\delta$ was arbitrary and the hypotheses restrict to every initial segment, every $P_\alpha$, including $P_\delta$, is proper. Successor lengths, limits of countable cofinality, and limits where $M\cap\alpha$ is bounded are already the exhaustive cases in F1; no closure of the individual iterands is assumed. AC is used only as recorded in A1 and in the supplier F1. [F1, F2, F3, A1, step 1.1] ∎
