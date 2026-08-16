---
id: def-covering-space-action
kind: definition
title: "Covering-space actions by disjoint translates of neighbourhoods"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action, def-homeomorphism-and-open-maps, def-free-group-action]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 3"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
pipeline_run: null
---

## Definition

A left action of a group $G$ on a space $E$ **by homeomorphisms** is a **covering-space action** when every $e\in E$ has an open neighbourhood $U$ such that $gU\cap U=\varnothing$ for every nonidentity $g\in G$ ([[def-group-action]], [[def-homeomorphism-and-open-maps]]). Acting by homeomorphisms means that each map $e\mapsto g\cdot e$ is a homeomorphism of $E$; the underlying set action alone would not make the translates $gU$ open. This condition implies freeness ([[def-free-group-action]]) and makes the translates of $U$ pairwise disjoint.

