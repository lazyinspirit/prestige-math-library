---
id: thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun
kind: theorem
title: "A monotone function is differentiable almost everywhere by the rising-sun route"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun, thm-countable-union-of-null-is-null, thm-dini-derivatives-exist-are-ordered-and-detect-differentiability, thm-increasing-functions-split-uniquely-as-jump-plus-continuous, thm-jump-functions-have-derivative-zero-almost-everywhere]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Section 1.6"
      url: "https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Frigyes Riesz, Sur l’existence de la dérivée des fonctions monotones et sur quelques problèmes qui s’y rattachent"
      url: "https://real.mtak.hu/214055/1/math_005_208-221.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $F : [a,b] \to \mathbb{R}$ be monotone. Then $F$ is differentiable at
Lebesgue-almost every point of $(a,b)$.

## Facts & Assumptions

**Given:** Countable choice and a monotone function $F : [a,b] \to \mathbb{R}$.

[A1] The symbols are those of the statement.

## Proof

**Proof technique:** direct.

1.1 Replacing $F$ by $-F$ if necessary, we may assume that $F$ is nondecreasing. By [[thm-increasing-functions-split-uniquely-as-jump-plus-continuous]], write $F = J_F + C_F$ with $C_F$ continuous and nondecreasing. The continuous theorem [[thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun]] gives differentiability of $C_F$ almost everywhere, while [[thm-jump-functions-have-derivative-zero-almost-everywhere]] gives $J_F' = 0$ almost everywhere. [given]

2.1 On the common full-measure set where both derivatives exist, $F' = C_F' + J_F' = C_F'$. Therefore $F'$ exists almost everywhere. [step 1.1]

3.1 Steps 1.1 and 2.1 prove the theorem. [step 1.1, step 2.1] ∎
