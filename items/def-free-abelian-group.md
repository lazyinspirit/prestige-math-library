---
id: def-free-abelian-group
kind: definition
title: "Free abelian group on a set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group, def-group-homomorphism]
justified_by: [thm-abelianisation-of-a-free-group-is-free-abelian]
aliases: []
landmark: true
verification:
  audited: 2026-08-11
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John McKernan, Presentations and Groups of Small Order, Lecture 12"
      url: "https://math.mit.edu/~mckernan/Teaching/12-13/Spring/18.703/l_12.pdf"
pipeline_run: null
---

## Definition

A **free abelian group on a set $X$** is an abelian group $A(X)$ together with
a map $i:X\to A(X)$ such that, for every abelian group $B$ and every
function $u:X\to B$, there is a unique group homomorphism
$\widehat u:A(X)\to B$ satisfying

$$\widehat u\circ i=u.$$

