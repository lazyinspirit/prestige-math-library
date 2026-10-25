---
id: def-turing-machine-configuration
kind: definition
title: "Configurations of a deterministic one-tape Turing machine"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-deterministic-one-tape-turing-machine
  - def-tape-finite-support-convention
  - def-natural-numbers
justified_by: []
verification:
  precheck: n/a
  audited: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing, Chapter 5"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter5.pdf"
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://studylib.net/doc/28158899/turing-paper-1936"
---

## Definition

Fix a deterministic one-tape Turing machine
$M=(Q,\Sigma,\Gamma,\sqcup,q_0,q_{\mathrm{acc}},q_{\mathrm{rej}},\delta)$.
A **configuration** of $M$ is a triple
$$ C=(q,h,t) $$
where $q\in Q$ is the current state, $h\in\mathbb N$ is the current head
position, and $t:\mathbb N\to\Gamma$ is a tape content in the sense of
[[def-tape-finite-support-convention]].

The symbol currently scanned in $C$ is $t(h)$. The configuration is
**nonhalting** when $q\notin\{q_{\mathrm{acc}},q_{\mathrm{rej}}\}$.

For later encoding arguments it is convenient to write a configuration as a
finite word over the alphabet $Q\cup\Gamma$: if
$r=\max(\{h\}\cup\operatorname{supp}(t))$, and $a_i:=t(i)$ for $0\le i\le r$,
then the associated **configuration word** is
$$ a_0a_1\cdots a_{h-1}\,q\,a_h\cdots a_r. $$
The state symbol is inserted immediately before the scanned tape symbol, and
the word is long enough to include the head position even when the scanned cell
is blank.

## Remarks

- This is the modern full-configuration convention: state, head position, and
  whole finite tape data are all part of the object.

- Turing's original narrower word "configuration" for the pair
  "state plus scanned symbol" is not the convention used on this page.
