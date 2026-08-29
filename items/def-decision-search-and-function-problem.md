---
id: def-decision-search-and-function-problem
kind: definition
title: "Decision problems, search problems, and function problems"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-effective-binary-encoding-and-decoder
  - def-language-over-an-alphabet
  - def-function
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Fix a set $I$ of instances together with an effective binary encoding
$\sigma:I\to\{0,1\}^*$ ([[def-effective-binary-encoding-and-decoder]]).

A **decision problem** on $I$ is a distinguished subset $Y\subseteq I$ of
yes-instances. Its associated **language of encoded yes-instances** is
$$ L_\sigma(Y):=\{\sigma(x):x\in Y\}\subseteq\{0,1\}^*, $$
a language over the binary alphabet in the sense of
[[def-language-over-an-alphabet]].

A **search problem** on $I$ consists of a condition assigning to each instance
$x\in I$ a set of acceptable outputs; solving the problem means producing one
acceptable output when one exists.

A **function problem** on $I$ is a specified total function on instances,
$$ f:I\to O, $$
for some output set $O$ ([[def-function]]).

## Remarks

- Decision problems ask for a yes/no answer, search problems ask for a witness,
  and function problems ask for a designated output value.

- The same mathematical problem can have several encodings. The associated
  language depends on the chosen $\sigma$.
