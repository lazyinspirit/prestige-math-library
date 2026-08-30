---
id: rem-mac-lanes-original-conditions-and-what-became-of-them
kind: remark
title: "How Mac Lane's original coherence conditions reduce to this page's two axioms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monoidal-category, thm-the-left-unitor-of-a-tensor-product-is-determined, thm-the-right-unitor-of-a-tensor-product-is-determined, cor-the-two-unitors-agree-on-the-unit-object]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Natural Associativity and Commutativity, Theorem 5.2"
      url: "https://www.mscs.dal.ca/~selinger/papers/papers/graphical-bib/public/MacLane-natural-associativity-and-commutativity-1963.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

Mac Lane's 1963 Theorem 5.2 lists five coherence conditions involving the
associator and unit constraints. The present page starts from only the pentagon
and triangle of [[def-monoidal-category]]. The gap is closed by the three later
items on this page:

- [[thm-the-left-unitor-of-a-tensor-product-is-determined]] recovers the left
  unit formula;
- [[thm-the-right-unitor-of-a-tensor-product-is-determined]] recovers the right
  unit formula;
- [[cor-the-two-unitors-agree-on-the-unit-object]] recovers the equality on the
  unit object.

So the page's two axioms and Mac Lane's larger historical package define the
same notion; the extra conditions become theorems rather than axioms.
