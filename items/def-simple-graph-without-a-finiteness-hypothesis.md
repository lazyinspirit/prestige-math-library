---
id: def-simple-graph-without-a-finiteness-hypothesis
kind: definition
title: "Simple graphs on an arbitrary vertex set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, rem-finite-simple-graph-convention]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 3.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

A **simple graph** is an ordered pair $G=(V,E)$ in which $V$ is a set and

$$E \subseteq [V]^2 := \{\, \{u,v\} \subseteq V : u \ne v \,\}.$$

The elements of $V=V(G)$ are the **vertices** and the elements of $E=E(G)$ are
the **edges**. Thus a simple graph has no loops and no parallel edges.

This is the same incidence convention as [[def-finite-simple-graph]], with the
word "finite" removed from the hypothesis on $V$. Whenever a statement on this
page is made for a simple graph, it allows an arbitrary vertex set unless
finiteness is stated separately.
