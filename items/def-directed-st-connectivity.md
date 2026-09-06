---
id: def-directed-st-connectivity
kind: definition
title: "Directed s-t connectivity"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multigraph-loop-and-digraph, def-directed-walk-trail-path-cycle-and-strong-connectivity]
verification: {precheck: n/a, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Harvard CS 221, Lecture 5, Definition 1"
      url: "https://people.seas.harvard.edu/~madhusudan/courses/Spring2018/scribe/lect05.pdf"
---

## Definition

**Directed s-t connectivity** (STCON) is the language of encodings
$\langle G,s,t\rangle$ in which $G=(V,E)$ is a finite directed graph and there
is a directed path from $s$ to $t$. Vertices are numbered $1,\ldots,|V|$ in
the encoding; malformed encodings are outside STCON. The word path has the
directed meaning fixed in [[def-directed-walk-trail-path-cycle-and-strong-connectivity]].
