---
id: def-cayley-graph
kind: definition
title: "The Cayley graph of a group with respect to a subset"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-simple-graph-without-a-finiteness-hypothesis, def-directed-labelled-cayley-graph, def-group, def-generated-subgroup, lem-group-inverse-laws]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 3.2"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory, Section 7.9"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---

## Definition

Let $G$ be a group with identity $e$ and let $S \subseteq G$. The **Cayley
graph** of $G$ with respect to $S$ is the simple graph

$$\operatorname{Cay}(G,S)$$

with vertex set $G$ and edge set

$$E := \{\, \{g,gs\} : g \in G,\ s \in (S \cup S^{-1}) \setminus \{e\} \,\}.$$

Equivalently, it is the underlying simple graph of
[[def-directed-labelled-cayley-graph]] after forgetting directions and labels
and then deleting the loops coming from the identity. The exclusion of $e$ is
load bearing: it is what keeps the Cayley graph a simple graph in the sense of
[[def-simple-graph-without-a-finiteness-hypothesis]].
