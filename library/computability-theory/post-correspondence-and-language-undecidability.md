---
page: post-correspondence-and-language-undecidability
title: "Post Correspondence and Language Undecidability"
status: draft
items:
  - def-post-correspondence-problem
  - def-modified-post-correspondence-problem
  - lem-computation-history-domino-encoding
  - thm-modified-pcp-is-undecidable
  - lem-modified-pcp-reduces-to-pcp
  - thm-post-correspondence-is-undecidable
  - prop-post-correspondence-is-recognizable
  - thm-cfg-intersection-emptiness-is-undecidable
  - thm-cfg-universality-is-undecidable
  - thm-cfg-equivalence-is-undecidable
  - thm-cfg-ambiguity-is-undecidable
  - def-chomsky-hierarchy
  - thm-proper-inclusions-in-the-chomsky-hierarchy
examples:
  - fs-pcp-allows-symbol-reordering-within-dominoes
  - fs-two-decidable-cfls-have-decidable-intersection-emptiness
---

This page follows the standard undecidability spine through Post
correspondence. Modified PCP is obtained from accepting computation histories,
ordinary PCP inherits undecidability from modified PCP, and the resulting tile
matching problem is then re-used to force undecidability for several grammar
questions.

The closing hierarchy theorem packages the comparison points prepared by the
preceding automata and computability pages. The witnesses are kept separate:
`{a^n b^n}` for regular versus context-free, a decidable non-context-free
language for context-free versus decidable, and `A_{TM}` for decidable versus
computably enumerable.
