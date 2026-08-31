---
id: def-the-category-of-binary-words
kind: definition
title: "The category of binary words"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category]
verification:
  audited: 2026-08-31
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

## Definition

The **binary words** are generated recursively from:

- the empty word $e_0$;
- the one-letter word $(-)$;
- if $v$ and $w$ are binary words, a new word $(v\square w)$.

Their **length** is defined recursively by
$$|e_0|=0,\qquad |(-)|=1,\qquad |v\square w|=|v|+|w|.$$

The **category of binary words** $W$ has these words as objects. For objects
$v,w$,
$$W(v,w)=\begin{cases}\{\ast_{v,w}\},& |v|=|w|,\\ \varnothing,& |v|\ne|w|.\end{cases}$$

Composition and identities are forced by this rule: when the hom-collection is
nonempty there is exactly one possible composite and exactly one possible
identity arrow. Thus $W$ is a category in the sense of [[def-category]].
