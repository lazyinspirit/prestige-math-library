---
id: rem-conditional-expectation-is-a-class-not-a-canonical-pointwise-function
kind: remark
title: "Conditional expectation is a class not a canonical pointwise function"
status: draft
origin: pipeline
deps: [def-conditional-expectation-as-an-ae-class, def-axiom-of-choice]
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

## Remarks

Under the AC existence convention, identities between conditional expectations concern almost-sure classes. Once versions for finitely or countably many such identities are selected, the identities hold simultaneously outside the union of their measurable null exceptional sets; that union is still null. This countable-union argument gives no general guarantee that one chosen representative satisfies an uncountable family simultaneously, although particular uncountable families may admit such a representative. Subsequent conditional-law constructions require their own hypotheses.

The class and version terminology is [[def-conditional-expectation-as-an-ae-class]], whose existence uses [[def-axiom-of-choice]]. A modified version must remain measurable for the conditioning sigma-algebra; an arbitrary subset of an ambient null set need not be measurable for that sigma-algebra.

## Source notes

Durrett §4.1 uniqueness discussion, printed p.206, and countable-exception remark after Theorem 4.1.10, p.211; van der Vaart warning after Lemma 1.10, printed p.4.
