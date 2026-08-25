---
id: def-quasi-isometry-group-of-a-metric-space
kind: definition
title: "The quasi-isometry group of a metric space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-coarsely-dense-subset-and-quasi-isometry, def-bounded-distance-between-maps, lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition, def-group]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory, Section 8.1"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---

## Definition

Let $(X,d)$ be a metric space. Consider the set of all quasi-isometries
$f:X \to X$. Two such maps are identified when they are at bounded distance,
an equivalence relation by
[[lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition]].

The set of these equivalence classes is written

$$QI(X).$$

It is called the **quasi-isometry group** of $X$. The fact that composition of
maps descends to these equivalence classes and makes $QI(X)$ into a group is
proved in [[prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups]].
