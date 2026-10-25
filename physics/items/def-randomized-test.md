---
id: def-randomized-test
kind: definition
title: "Randomized tests"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-statistical-experiment
  - def-randomized-procedure-as-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - lem-procedure-action-law-is-measurable
  - def-measurable-function-between-measurable-spaces
  - def-sigma-algebra
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.1, PDF pp. 100–102"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §3, PDF pp. 4–5"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Definition

A **randomized test** is a randomized procedure with binary action space
whose action set is $\{0,1\}$, equipped with its full sigma-algebra
$2^{\{0,1\}}$ (the power set, which is a sigma-algebra by
[[def-sigma-algebra]]), where $1$ means reject and $0$ means do not reject
([[def-randomized-procedure-as-a-markov-kernel]]). Its **test function** is
$$\varphi(x)=K(x,\{1\}),\qquad x\in\mathcal X.$$
Since $K(x,\cdot)$ is a probability measure and $\{0\},\{1\}$ partition the
action set, $K(x,\{0\})+K(x,\{1\})=1$. Thus $\varphi(x)\in[0,1]$ and
$1-\varphi(x)=K(x,\{0\})$ is the probability of not rejecting. Give $[0,1]$
the trace of the Borel sigma-algebra on $[0,+\infty]$, namely
$\{C\cap[0,1]:C\in\mathcal B([0,+\infty])\}$. By
[[lem-procedure-action-law-is-measurable]], $x\mapsto K(x,\{1\})$ is
measurable; since it has range in $[0,1]$, its preimage of $C\cap[0,1]$ equals
its preimage of $C$ and is measurable for every such $C$. Hence $\varphi$ is a
measurable map in the preimage sense of
[[def-measurable-function-between-measurable-spaces]]. Its value is the
rejection probability after observing $x$.
The convention $1=\text{reject}$ is fixed here. No null or alternative
hypothesis is part of this definition.
