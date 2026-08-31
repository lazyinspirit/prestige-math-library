---
id: rem-the-history-of-the-coherence-theorem
kind: remark
title: "The historical route to coherence and the route authored here"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-mac-lanes-original-conditions-and-what-became-of-them, thm-mac-lane-strictification, thm-mac-lane-coherence-in-the-canonical-map-form]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter XI.3, Exercise 3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "S. Mac Lane, Natural Associativity and Commutativity, sections 3 and 5"
      url: "https://www.mscs.dal.ca/~selinger/papers/papers/graphical-bib/public/MacLane-natural-associativity-and-commutativity-1963.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, section 2.13"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Remark

Mac Lane's 1963 paper proved coherence by a direct rank-induction analysis of
formal associativity and unit laws, and
[[rem-mac-lanes-original-conditions-and-what-became-of-them]] records the older
five-condition formulation from that period. The theorem itself is therefore
historically Mac Lane's.

The route authored on this page is different. Following EGNO's attribution, the
proof of [[thm-mac-lane-strictification]] is the later Joyal-Street
strictification argument, and [[thm-mac-lane-coherence-in-the-canonical-map-form]]
is obtained from it by transporting canonical maps to a strict monoidal target.
So the page keeps the historical origin visible while deliberately choosing the
strictification route as the local proof.
