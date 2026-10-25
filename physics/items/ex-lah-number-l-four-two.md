---
id: ex-lah-number-l-four-two
kind: example
title: "The Lah number $L(4,2)$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [thm-lah-numbers-count-ordered-set-partitions-and-expand-rising-factorials]
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Kenneth P. Bogart, Combinatorics Through Guided Discovery, §3.1.5"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Combinatorics_Through_Guided_Discovery_%28Bogart%29/03%3A_Distribution_Problems/3.01%3A_The_Idea_of_Distribution"
pipeline_run: null
---

## Example

The closed formula gives

$$L(4,2)=\frac{4!}{2!}\binom{3}{1}=12\cdot3=36.$$

So there are $36$ partitions of $[4]$ into two nonempty blocks when each block
is internally linearly ordered.
