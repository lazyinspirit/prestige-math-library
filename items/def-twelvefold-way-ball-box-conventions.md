---
id: def-twelvefold-way-ball-box-conventions
kind: definition
title: "Conventions for integer partitions, Ferrers diagrams, and the twelvefold-way table"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-partition-of-a-positive-integer,
       cor-compositions-with-k-parts-are-counted-by-binomial-coefficients,
       thm-stars-and-bars,
       cor-integer-partitions-have-euler-product]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Alexander Hulpke, Combinatorics notes"
      url: "https://www.math.colostate.edu/~hulpke/lectures/m501/notes.html"
    - title: "Darij Grinberg, Enumerative Combinatorics: class notes"
      url: "https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf"
pipeline_run: null
---

## Definition

Throughout this page, $n$ counts balls or domain elements and $k$ counts boxes
or codomain values.

When partitions are displayed on this page, they are written in
nonincreasing order

$$\lambda_1 \ge \lambda_2 \ge \cdots \ge \lambda_r > 0,$$

even though [[def-partition-of-a-positive-integer]] stores the same data as a
nondecreasing list.

A **composition** of $n$ into $k$ parts means an ordered $k$-tuple of positive
integers summing to $n$, while a **weak composition** allows zero parts. Thus
[[cor-compositions-with-k-parts-are-counted-by-binomial-coefficients]] counts
positive occupancies and [[thm-stars-and-bars]] counts arbitrary occupancies.

For placements of indistinguishable balls into boxes:

- if the boxes are labelled, the data are the occupancy vector
  $(a_1,\dots,a_k)$;
- if the boxes are unlabelled, the data are the same occupancies reordered into
  nonincreasing order, with zero occupancies omitted.

Hence an unlabelled-to-unlabelled placement is encoded by a partition whose
parts are the nonzero occupancies. Ferrers diagrams are read in English
convention, with the longest row on top and rows left-justified.
