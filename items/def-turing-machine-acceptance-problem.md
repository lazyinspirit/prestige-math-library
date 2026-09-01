---
id: def-turing-machine-acceptance-problem
kind: definition
title: "The Turing-machine acceptance problem $A_{TM}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-effective-encoding-of-turing-machines
  - lem-finite-tuples-admit-effective-prefix-free-encodings
  - def-computation-alphabet-and-word-convention
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
    - title: "EECS 376 Course Notes, Part 6: Computability"
      url: "https://eecs376.github.io/notes/computability.html"
---

## Definition

Fix the chosen machine code $\ulcorner M\urcorner$ from
[[def-effective-encoding-of-turing-machines]]. For a binary word $z$, write
$$ c(z):=1^{|z|}0z. $$
For binary words $x,y$, write
$$ \langle x,y\rangle:=1^{|x|}0xy. $$
If $w=a_1\cdots a_\ell\in\Sigma_s^*$, where each $a_i\in\{1,\dots,s\}$, put
$$ \widehat w:=c(\operatorname{bin}(\ell))\,c(\operatorname{bin}(a_1))\cdots c(\operatorname{bin}(a_\ell)). $$

The **Turing-machine acceptance problem** is the language
$$ A_{TM}:=\bigl\{\langle\ulcorner M\urcorner,\widehat w\rangle : M \text{ is a coded deterministic one-tape Turing machine and } M \text{ accepts } w\bigr\}. $$

## Remarks

- The member of $A_{TM}$ is the binary code of a machine/input pair, not the
  machine or word themselves.

- The empty input word is allowed: if $w=\varepsilon$, then
  $\widehat w=c(\operatorname{bin}(0))$.
