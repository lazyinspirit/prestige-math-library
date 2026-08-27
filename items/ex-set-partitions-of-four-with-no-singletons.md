---
id: ex-set-partitions-of-four-with-no-singletons
kind: example
title: "The set partitions of $[4]$ with no singleton blocks"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [cor-standard-specializations-of-the-labelled-symbolic-method]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §3.8"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Example

The partitions of $[4]$ with every block of size at least $2$ are:

$$\{\{1,2,3,4\}\},\quad \{\{1,2\},\{3,4\}\},\quad \{\{1,3\},\{2,4\}\},\quad \{\{1,4\},\{2,3\}\}.$$

So the count is $4$.
