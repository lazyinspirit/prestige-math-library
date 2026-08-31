---
id: rem-every-diagram-commutes-is-false-as-stated
kind: remark
title: "Why 'every diagram commutes' is false as stated"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-canonical-morphism-between-parenthesised-words]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Remark

Mac Lane's coherence theorem is not the slogan that every diagram in a monoidal
category commutes. The theorem speaks only about diagrams whose arrows are
canonical in the sense of [[def-canonical-morphism-between-parenthesised-words]]
and whose vertices are formal parenthesisations of one ordered tensor word.

The warning matters because formally different vertices can evaluate to the same
object in a particular monoidal category. Once that happens, one may insert a
noncanonical endomorphism of that object, and there is no reason for the
resulting square or polygon to commute. So the theorem is about formal
structural maps, not arbitrary parallel arrows.
