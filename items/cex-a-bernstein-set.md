---
id: cex-a-bernstein-set
kind: counterexample
title: "Assuming countable choice and a well-ordering of the real line, a Bernstein set is dense, has inner measure $0$, and is not Lebesgue measurable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [thm-bernstein-sets-exist-under-a-well-ordering-of-r,
       thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval,
       cor-a-bernstein-set-is-not-lebesgue-measurable, def-countable-choice]
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Bernstein set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernstein_set"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every dense subset of $\mathbb{R}$ of inner measure $0$ is
Lebesgue measurable.

**Assume the Axiom of Countable Choice and that the real line can be well
ordered.** Then a Bernstein set refutes the
claim: it is dense in $\mathbb{R}$, has inner measure $0$, and is not Lebesgue
measurable.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a well-ordering of the real line.

[L1] Assuming the real line can be well ordered, a Bernstein set exists ([[thm-bernstein-sets-exist-under-a-well-ordering-of-r]]).

[L2] Assuming countable choice, a Bernstein set has inner measure $0$, and in every nondegenerate bounded interval its intersection has full outer measure ([[thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval]]).

[L3] Assuming countable choice, a Bernstein set is not Lebesgue measurable ([[cor-a-bernstein-set-is-not-lebesgue-measurable]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1] choose a Bernstein set $B$. If some nonempty open interval were disjoint from $B$, it would contain a nondegenerate closed subinterval, hence a nonempty perfect subset of $\mathbb{R}$, contradicting the Bernstein property. So $B$ meets every nonempty open interval and is dense in $\mathbb{R}$. [L1, algebra]

2.1 The given Axiom of Countable Choice supplies the hypothesis of [L2] and [L3]. Hence $\lambda_*(B)=0$ by [L2], and $B$ is not Lebesgue measurable by [L3]. [step 1.1, L2, L3]

3.1 Therefore $B$ is a dense subset of $\mathbb{R}$ of inner measure $0$ that is not Lebesgue measurable, so it refutes the claim. [step 1.1, step 2.1] ∎
