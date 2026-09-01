---
id: def-tape-finite-support-convention
kind: definition
title: "Right-infinite tapes as finite-support functions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-deterministic-one-tape-turing-machine
  - def-function
  - def-natural-numbers
  - def-finite-cardinality
justified_by: []
verification:
  audited: 2026-09-01
  precheck: n/a
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

Fix a deterministic one-tape Turing machine
$M=(Q,\Sigma,\Gamma,\sqcup,q_0,q_{\mathrm{acc}},q_{\mathrm{rej}},\delta)$.
A **tape content** for $M$ is a function
$$ t:\mathbb N\to\Gamma $$
([[def-function]], [[def-natural-numbers]]) such that the support
$$ \operatorname{supp}(t):=\{\, n\in\mathbb N : t(n)\ne\sqcup \,\} $$
is finite.

Thus the tape is indexed by the natural numbers, extends infinitely to the
right, and is blank except at finitely many cells. If the head is instructed to
move left from cell $0$, it remains at cell $0$.

For an input word $w=a_0a_1\cdots a_{m-1}\in\Sigma^*$, the **initial tape**
$t_w:\mathbb N\to\Gamma$ is defined by
$$ t_w(i):=\begin{cases} a_i,&0\le i<m,\\ \sqcup,&i\ge m. \end{cases} $$
Its support is contained in $\{0,\dots,m-1\}$ and is therefore finite.

## Remarks

- This finite-support convention is a clean way to formalize the usual picture
  "the tape is blank except on a finite used segment."

- The head position is not part of the tape content; it is a separate natural
  number in the configuration definition.
