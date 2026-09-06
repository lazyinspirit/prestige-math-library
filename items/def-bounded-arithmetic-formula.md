---
id: def-bounded-arithmetic-formula
kind: definition
title: "Bounded arithmetic formulas"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-primitive-recursive-function]
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §5.1"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Definition

Work in first-order arithmetic over $\mathbb N$. A quantifier is **bounded**
when it has the form $\exists u<t(\vec x)$ or $\forall u<t(\vec x)$, where
$t$ is an arithmetic term. A formula is **bounded** when every one of its
quantifiers is bounded.

For the normal-form presentation of the arithmetical hierarchy on this page,
we also permit an arbitrary primitive-recursive predicate $R(\vec x)$ in the
sense of [[def-primitive-recursive-function]] as the quantifier-free matrix.
This is an additional presentation convention: it does not assert that every
primitive-recursive predicate is definable by a bounded formula in the bare
first-order language chosen above.

## Remarks

Unbounded quantifiers are the displayed leading quantifiers used to measure an
arithmetical level; bounded quantifiers do not contribute an alternation.
