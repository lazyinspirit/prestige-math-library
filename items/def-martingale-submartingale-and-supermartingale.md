---
id: "def-martingale-submartingale-and-supermartingale"
kind: "definition"
title: "Martingale submartingale and supermartingale"
deps: ["def-adapted-and-integrable-stochastic-process", "def-conditional-expectation-as-an-ae-class", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
---

## Definition

Assume AC [[def-axiom-of-choice]]. An integrable adapted real process $X$ [[def-adapted-and-integrable-stochastic-process]] is a **martingale**, **submartingale**, or **supermartingale** when, respectively, for every $n\ge0$,
$$E[X_{n+1}\mid\mathcal F_n]=X_n,\qquad E[X_{n+1}\mid\mathcal F_n]\ge X_n,\qquad E[X_{n+1}\mid\mathcal F_n]\le X_n\quad\text{almost surely}.$$
These are three separate conditions, with the convention that a submartingale has conditional future mean at least its present value. The conditional expectations are the almost-sure classes of [[def-conditional-expectation-as-an-ae-class]]; that supplier inherits AC from its Radon–Nikodym existence proof. The definition itself selects no representative and assumes no completed filtration.

The condition is imposed at each adjacent pair of times. An all-pairs formulation requires a proof. No boundedness or independence is part of this definition, and no trivial or deterministic initial value is imposed.
