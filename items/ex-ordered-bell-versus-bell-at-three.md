---
id: ex-ordered-bell-versus-bell-at-three
kind: example
title: "Ordered Bell numbers already differ from Bell numbers at $n=3$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: not-supplied
generation:
  role: example
deps: [def-stirling-second-kind-and-bell-number, cor-standard-specializations-of-the-labelled-symbolic-method]
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

For $[3]$, the Bell number is

$$B_3=S(3,1)+S(3,2)+S(3,3)=1+3+1=5.$$

The ordered Bell number is larger because each partition with $k$ blocks can be
ordered in $k!$ ways:

$$1\cdot1!+3\cdot2!+1\cdot3!=1+6+6=13.$$

So the ordered Bell sequence already differs from the Bell sequence at $n=3$.
