---
id: def-turing-jump
kind: definition
title: "The Turing jump"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-oracle-turing-machine]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Definition 6.1"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Definition

Fix a finite binary syntax for the oracle Turing machines of
[[def-oracle-turing-machine]] and an effective decoder of that syntax.
Enumerate all binary words, interpreting a malformed word as a program that
diverges everywhere; write $\Phi_e^A(x)$ for the partial computation of the
$e$-th decoded program on input $x$ with oracle $A$. This is an effective
enumeration of every oracle program.

The syntax supports **hardwiring**: by inserting binary numerals into a fixed
program template, there are total computable compiler maps that produce an
index for a program with any finite tuple of indices and natural parameters
built into it. This is a direct syntactic operation and is uniform in the
oracle.

For $A\subseteq\mathbb N$, its **Turing jump** is the relative
diagonal-halting set
$$A':=\{e:\Phi_e^A(e)\downarrow\}.$$
