---
id: rem-isbells-argument-that-isomorphic-objects-cannot-simply-be-identified
kind: remark
title: "Isbell's warning that isomorphic objects cannot simply be identified"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monoidal-category, rem-unbracketed-tensor-strings-are-not-yet-defined]
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Remark

Mac Lane records Isbell's objection to the idea that one can make every
monoidal category strict merely by identifying isomorphic objects. In a
skeleton of $\mathbf{Set}$, choose an infinite set $D$ with
$D\cong D\times D$ and note that both projections from $D\times D$ are epic.

If one then tried to force the associator to be the identity in that skeleton,
the projection formulas collapse so far that every two endomorphisms
$f,g:D\to D$ become equal. That is absurd: the identity of $D$ and any
nontrivial constant endomorphism are different. So strictification is a theorem
about equivalence, not a license to replace isomorphic objects by equal ones
without changing the category.
