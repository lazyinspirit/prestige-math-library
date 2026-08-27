---
id: rem-brauers-cyclotomic-splitting-field-criterion-is-not-proved-here
kind: remark
title: "Brauer's cyclotomic criterion for splitting fields is recorded here only as an external theorem"
status: draft
origin: session
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-exponent-of-a-finite-group, def-roots-of-unity-in-a-field, def-splitting-field-for-a-finite-group, thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 9.2.7"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
external_dependency:
  source_url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
  exact_statement: "If $G$ is finite of exponent $e$ and the field $k$ contains a primitive $e$-th root of unity, then $k$ is a splitting field for $G$."
  local_proof_attempt: "No local proof is supplied here. Webb records this as Brauer's theorem and routes the proof through Brauer induction and later character theory that this page does not establish."
  necessity: "RT-1 needs this only as a warning not to replace the definition of splitting field by an unproved roots-of-unity shortcut."
pipeline_run: null
---

## Statement

Let $G$ be a finite group, and let $e$ be its exponent
([[def-exponent-of-a-finite-group]]). Brauer's roots-of-unity criterion says
that if a field $k$ contains a primitive $e$-th root of unity
([[def-roots-of-unity-in-a-field]],
[[thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]]),
then $k$ is a splitting field for $G$
([[def-splitting-field-for-a-finite-group]]).

This theorem is **recorded but not proved here**.

## Remarks

The criterion is stronger than the algebraically closed-field consequence used
later on this page, and it is genuinely external here. Its standard proof uses
Brauer induction and the later character theory of finite groups, not only the
group-ring dictionary and Schur's lemma developed on RT-1. The point of this
remark is therefore negative: it blocks a tempting but unproved shortcut.
