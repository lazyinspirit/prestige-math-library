---
id: thm-tukey-finite-character-equivalent-to-choice
kind: theorem
title: "Tukey finite character is equivalent to AC"
status: published
origin: pipeline
deps: ["def-families-of-finite-character", "thm-zorn", "def-axiom-of-choice", "lem-finite-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, Theorem 2.1, pp.10–11"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
---

## Statement

Over ZF, Tukey’s finite-character principle is equivalent to AC.

## Facts & Assumptions

[F1] [[def-families-of-finite-character]]: Membership is detected by all finite subsets, including the empty subset.

[F2] [[thm-zorn]]: Under AC a nonempty poset in which every chain has an upper bound has a maximal element.

[F3] [[def-axiom-of-choice]]: AC asks for a choice function on every family of nonempty sets.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Assume AC and let $\mathcal F$ have finite character. If $Y\in\mathcal F$, every subset of $Y$ belongs to $\mathcal F$, since its finite subsets are finite subsets of $Y$. In particular $\varnothing\in\mathcal F$. For a nonempty inclusion-chain $\mathcal C\subseteq\mathcal F$, every finite subset of $\bigcup\mathcal C$ is contained in one chain member: choose finitely many covering members and take the largest among them. Thus $\bigcup\mathcal C\in\mathcal F$. The empty chain has upper bound $\varnothing$. [F1]

1.2 Assume Tukey and let $(X_i)_{i\in I}$ be any nonempty-set family. Inside $I\times\bigcup_iX_i$ let $\mathcal G$ consist of graphs of partial functions $g$ satisfying $g(i)\in X_i$. It contains the empty graph. A graph fails the conditions only by a bad pair $(i,x)$ with $x\notin X_i$, or by two pairs with the same first coordinate and different values. These witnesses have sizes one and two, so $\mathcal G$ has finite character. [F1]

2.1 Apply Zorn to $(\mathcal F,\subseteq)$ to obtain an inclusion-maximal member. [F2, step 1.1]

3.1 A maximal $g\in\mathcal G$ must have domain $I$: at an omitted $i$, any one $x\in X_i$ extends it, contradicting maximality. If $I$ is empty the empty graph already suffices. Thus every family has a choice function. [F3, step 1.2] ∎
