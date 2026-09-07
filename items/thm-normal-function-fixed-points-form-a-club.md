---
id: thm-normal-function-fixed-points-form-a-club
kind: theorem
title: "Fixed points of a normal function form a club"
status: draft
origin: pipeline
deps: ["def-normal-ordinal-function", "thm-cofinality-basics", "thm-recursion"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
sources:
  references:
    - title: "Welch, Lemma 2.13, p.21; live original reread"
      url: https://people.maths.bris.ac.uk/~mapdw/current-axiomatic-set-theory.pdf
---

## Statement

In ZFC, if $f:\kappa\to\kappa$ is normal and $\kappa$ is regular uncountable, then $\{\alpha<\kappa:f(\alpha)=\alpha\}$ is club.

## Facts & Assumptions

[F1] [[def-normal-ordinal-function]]: Normal functions are strictly increasing and continuous at nonzero limits.

[F2] [[thm-cofinality-basics]]: Countable sets of ordinals are bounded below regular uncountable kappa.

[F3] [[thm-recursion]]: A specified self-map can be iterated on omega.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Transfinite induction gives $f(\alpha)\ge\alpha$: zero is automatic, successors use strict increase, and limits use continuity. Given $\beta<\kappa$, iterate $a_0=\beta+1$, $a_{n+1}=f(a_n)$. If some adjacent terms agree, that term is a fixed point above $\beta$. Otherwise the sequence is strictly increasing and its supremum $a<\kappa$ is a nonzero limit. [F1, F2, F3]

2.1 In the latter case continuity and cofinality of the $a_n$ in $a$ give $f(a)=\sup_n f(a_n)=\sup_n a_{n+1}=a$. This proves unboundedness in both cases. [F1, step 1.1]

3.1 If fixed points are unbounded in a nonzero limit $\delta<\kappa$, monotonicity and continuity give $f(\delta)=\sup\{f(\gamma):\gamma<\delta,\ f(\gamma)=\gamma\}=\delta$. Thus the fixed-point set is closed. Zero may or may not be fixed; no claim depends on it. [F1, step 2.1] ∎
