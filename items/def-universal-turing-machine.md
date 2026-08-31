---
id: def-universal-turing-machine
kind: definition
title: "A universal Turing machine relative to a fixed machine encoding"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-effective-encoding-of-turing-machines, def-partial-function-computed-by-a-machine]
justified_by: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. M. Turing, On Computable Numbers, with an Application to the Entscheidungsproblem"
      url: "https://www.cs.ox.ac.uk/activities/ieg/e-library/sources/tp2-ie.pdf"
    - title: "Richard Zach, Sets, Logic, Computation: An Open Introduction to Metalogic"
      url: "https://slc.openlogicproject.org/slc-screen.pdf"
---

## Definition

Fix the machine coding $\ulcorner M\urcorner$ from
[[def-effective-encoding-of-turing-machines]]. For a binary word $z$, write
$$ c(z):=1^{|z|}0z. $$
Encode a pair of binary words $(x,y)$ by the self-delimiting binary word
$$ \langle x,y\rangle:=1^{|x|}0xy. $$
If $v=a_1\cdots a_\ell$ is a finite word whose symbols are natural numbers,
write
$$ \widehat v:=c(\operatorname{bin}(\ell))\,c(\operatorname{bin}(a_1))\cdots c(\operatorname{bin}(a_\ell)). $$

A deterministic one-tape Turing machine $U$ with input alphabet $\{0,1\}$ is a **universal Turing machine
for the chosen coding** if, for every coded deterministic one-tape machine
$M=(m,s,n,\tau)$, every input word $w\in\Sigma_s^*$, and every output word
$u$ of $M$, the following hold:

- if $M$ halts on input $w$ with output $u$, then $U$ halts on input
  $\langle\ulcorner M\urcorner,\widehat w\rangle$ with output $\widehat u$;
- if $M$ diverges on input $w$, then $U$ diverges on input
  $\langle\ulcorner M\urcorner,\widehat w\rangle$.

## Remarks

- Universality is relative to one specified description format. Changing the
  coding changes which input words represent machine/input pairs.

- The definition asks $U$ to reproduce both halting outputs and divergence; it
  is an interpreter, not a halting decider. No condition is imposed when the
  simulated machine halts in a configuration that has no output word under the
  page's strict output convention.
