---
id: def-hh-group-like-and-primitive-elements
kind: definition
title: "Group-like elements and primitives relative to a group-like element"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-scalar-and-tensor-conventions]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "William Chin, A Brief Introduction to Coalgebra Representation Theory"
      url: "https://condor.depaul.edu/~wchin/crt.pdf"
      locator: "§2.4, group-like and skew-primitive elements, printed pp. 5–6."
    - title: "Benedikt Stufler, Hopf Algebras lecture notes, University of Zurich course, 2018"
      url: "https://www.dmg.tuwien.ac.at/stufler/doc/lec/2018hopf.pdf"
      locator: "§3.1, Examples 3.2(1) and 3.2(4), printed pp. 12–13."
---

## Definition

Let $C$ be a coalgebra over $k$. An element $g\in C$ is **group-like** when
$$
\Delta(g)=g\otimes g,\qquad \varepsilon(g)=1.
$$
The counit condition excludes the zero vector and fixes the normalization.

Given a specified group-like element $g$, an element $x\in C$ is **primitive relative to $g$** when
$$
\Delta(x)=x\otimes g+g\otimes x,\qquad \varepsilon(x)=0.
$$
This is the $(g,g)$-skew-primitive condition. In a bialgebra with distinguished group-like unit $1$, the usual primitive condition is the special case $g=1$; an arbitrary coalgebra has no distinguished unit unless one is supplied.
