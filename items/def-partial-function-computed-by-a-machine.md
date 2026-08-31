---
id: def-partial-function-computed-by-a-machine
kind: definition
title: "Partial functions computed by a machine under fixed encodings"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-halting-computation-and-divergence
  - def-effective-binary-encoding-and-decoder
  - def-function
justified_by: []
verification:
  precheck: n/a
  audited: 2026-08-31
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing, Chapter 5"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf"
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
---

## Definition

Let $X$ and $Y$ be sets, let
$$ e_X:X\to\{0,1\}^*,\qquad e_Y:Y\to\{0,1\}^* $$
be effective binary encodings in the sense of
[[def-effective-binary-encoding-and-decoder]], let
$$ M=(Q,\{0,1\},\Gamma,\sqcup,q_0,q_{\mathrm{acc}},q_{\mathrm{rej}},\delta) $$
be a deterministic one-tape Turing machine, and let
$$ f:D\to Y $$
be a function with domain $D\subseteq X$.

The machine $M$ **computes the partial function $f$ under the fixed encodings
$e_X,e_Y$** if:

- for every $x\in D$, the computation of $M$ on input $e_X(x)$ halts and its
  final configuration outputs the binary word $e_Y(f(x))$, and
- for every $x\in X\setminus D$, the computation of $M$ on input $e_X(x)$
  diverges.

Thus the machine's input and output are ordinary finite binary words, while the
mathematical function lives on the underlying sets $X$ and $Y$ through the
chosen encodings.

## Remarks

- This definition intentionally separates the machine from the represented
  function. Changing the encoding can change which partial function a fixed
  machine computes.

- Nothing in the definition requires any particular behaviour on malformed
  binary strings outside the image of $e_X$.
