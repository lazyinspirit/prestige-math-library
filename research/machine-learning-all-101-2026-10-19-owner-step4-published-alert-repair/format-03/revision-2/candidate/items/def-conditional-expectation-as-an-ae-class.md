---
id: def-conditional-expectation-as-an-ae-class
kind: definition
title: "Conditional expectation as an ae class"
status: published
origin: pipeline
deps: [def-conditional-expectation-given-a-sigma-algebra, thm-conditional-expectation-exists-by-radon-nikodym, lem-conditional-expectation-is-unique-almost-surely, def-l-p-space-as-a-quotient-by-null-functions, thm-the-lebesgue-integral-respects-almost-everywhere-equality, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
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

Assume AC for the supplied existence theorem. Write $E[X\mid\mathcal G]$ for the unique class in $L^1(\Omega,\mathcal G,P|_{\mathcal G})$ consisting of conditional-expectation versions of $X$. A chosen real $\mathcal G$-measurable representative is a **version**. Equalities and inequalities involving these classes mean almost-sure equalities and inequalities.

Existence is Conditional expectation exists by radon nikodym and uniqueness is Conditional expectation is unique almost surely, applied to Conditional expectation given a sigma algebra. The quotient is The space $L^p(\mu)$ as the quotient by null functions. If $X=X^{\ast}$ almost surely, Two integrable functions are equal almost everywhere exactly when all of their indefinite integrals agree gives identical event integrals, so the output class is independent of the input representative. The The Axiom of Choice assumption is inherited from RN existence.

## Definition references

[[thm-conditional-expectation-exists-by-radon-nikodym]]

[[lem-conditional-expectation-is-unique-almost-surely]]

[[def-conditional-expectation-given-a-sigma-algebra]]

[[def-l-p-space-as-a-quotient-by-null-functions]]

[[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]

[[def-axiom-of-choice]]

## Source notes

Durrett §4.1, printed p.206, version/uniqueness convention; van der Vaart Definition 1.1 and Theorem 1.3, printed pp.1–2.
