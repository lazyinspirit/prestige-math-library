---
id: def-language-padding
kind: definition
title: "Language padding"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification: {precheck: n/a, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Sebastiaan Terwijn, Complexity Theory, Exercise 3.5.2(a)"
      url: "https://www.math.ru.nl/~terwijn/teaching/complexitytheory.pdf"
---

## Definition

For $A\subseteq\{0,1\}^*$ and a total function $p:\mathbb N\to\mathbb N$,
define
$$ \operatorname{pad}_p(A)=\{x\#1^{p(|x|)-|x|-1}:x\in A,\ p(|x|)>|x|\}. $$
All malformed strings, and strings with a wrong unary-pad length, are outside
the padded language. The exponent is a nonnegative integer precisely on the
displayed branch $p(|x|)>|x|$, and the delimiter makes decoding canonical.
