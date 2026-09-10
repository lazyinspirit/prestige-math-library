---
id: def-conditional-variance
kind: definition
title: "Conditional variance"
status: draft
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, cor-conditional-lp-contraction, thm-taking-out-what-is-known, def-axiom-of-choice]
justified_by: [lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Definition

Assume AC. For real $X\in L^2(P)$ define $\operatorname{Var}(X\mid\mathcal G)=E[(X-E[X\mid\mathcal G])^2\mid\mathcal G]$ as an almost-sure class. Its integrability, nonnegativity, representative independence and second-moment formula are justified by the following lemma.

The conditional class is [[def-conditional-expectation-as-an-ae-class]], with [[def-axiom-of-choice]] inherited from existence. By [[cor-conditional-lp-contraction]], a version of the conditional mean is square integrable. The unbounded-factor rule [[thm-taking-out-what-is-known]] will apply to products whose integrability is verified in the well-definedness lemma, recorded under `justified_by`.

## Source notes

Durrett §4.1.2, printed pp.211–213, supplies the conditional $L^2$ machinery; the following local lemma establishes the variance formula.
