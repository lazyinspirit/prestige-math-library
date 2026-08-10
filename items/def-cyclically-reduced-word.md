---
id: def-cyclically-reduced-word
kind: definition
title: "Cyclically reduced words"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-alphabet-words-and-reduction]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-11
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Alexei Myasnikov and Vladimir Shpilrain, Combinatorics over Free Groups, §2.2.1"
      url: "https://web.stevens.edu/algebraic/alexeim/Teaching/Group%20Theory%20627/Sections/book/ALLBOOK.pdf"
    - title: "Wilhelm Magnus, Abraham Karrass, and Donald Solitar, Combinatorial Group Theory"
      url: "https://books.google.co.uk/books?id=QoiBAAAAIAAJ"
pipeline_run: null
---

## Definition

A reduced word is **cyclically reduced** when it is empty or its first letter
is not the formal inverse of its last letter. Equivalently, every cyclic
rotation of the word is reduced.

If $w=pq$ as a literal concatenation of words, the word $qp$ is a **cyclic
permutation** of $w$. This includes $w$ itself by taking $p$ or $q$ empty.
