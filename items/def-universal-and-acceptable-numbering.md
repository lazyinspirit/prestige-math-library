---
id: def-universal-and-acceptable-numbering
kind: definition
title: "Universal and acceptable numberings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-numbering-of-partial-computable-functions, def-natural-number-coding-of-finite-sequences]
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Robert I. Soare, Turing Computability: Theory and Applications"
      url: "https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory"
    - title: "Richard Zach, Incompleteness and Computability"
      url: "https://ic.openlogicproject.org/ic-screen.pdf"
---

## Definition

Let $(\varphi_e)_{e\in\mathbb N}$ be a numbering of the partial computable
functions.

The numbering is **universal** when the binary partial function
$$ U(e,x)\simeq\varphi_e(x) $$
is itself partial computable.

The numbering is **acceptable** when it is universal and there exists a total
computable function
$$ s:\mathbb N^2\to\mathbb N $$
such that for all $e,a,x\in\mathbb N$ one has
$$ \varphi_{s(e,a)}(x)\simeq\varphi_e(\ulcorner a,x\urcorner_{\mathrm{seq}}), $$
where $\ulcorner a,x\urcorner_{\mathrm{seq}}$ is the chosen code of the
two-term sequence $(a,x)$.

## Remarks

- Universality says one indexed program can simulate the whole numbering.

- Acceptability adds one effective hard-wiring operation: the first input can be
  compiled into the index while the residual program still receives one natural
  input.
