---
id: cex-a-disconnected-base-allows-variable-sheet-number
kind: counterexample
title: "A covering over a disconnected base can have different sheet numbers on different components"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-number-of-sheets-is-locally-constant, def-standard-topologies]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
    - title: "Omar Antolín Camarena, Proper local homeomorphisms and covering maps"
      url: "https://www.matem.unam.mx/~omar/notes/propetale.html"
pipeline_run: null
---

## Statement refuted

There is a covering of a two-point discrete space whose fibre over one point has one element and whose fibre over the other has two elements. Thus connectedness is necessary for global constancy of sheet number.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For a covering $p:E\to B$, the cardinality of $p^{-1}(b)$ is locally constant as a function of $b\in B$. If $B$ is connected, all fibres are equinumerous. ([[prop-number-of-sheets-is-locally-constant]]).

[F2] Throughout, a topology is as in def-topological-space, and *finite*, *at most countable* and *uncountable* are as in def-countable, so that "countable" always means "at most countable" and every finite set is countable. Let $X$ be a set. The six families below are topologies on $X$; that each really satisfies (T1), (T2) and (T3) is discharged in full after the list. Among those six is the **discrete topology** $\mathcal T_{\mathrm{disc}}:=\mathcal P(X)$, in which every subset is open and hence every subset is also closed. ([[def-standard-topologies]]).

## Counterexample

**Proof technique:** direct.

1.1 Map a three-point discrete space onto a two-point discrete space with one point over the first basepoint and two over the second. [given, F2]

2.1 Each singleton base neighbourhood is evenly covered, while the fibre cardinal is not globally constant. [step 1.1, F1, F2]

3.1 This isolates exactly why connectedness appears in the sheet-number theorem. [step 2.1, F1]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
