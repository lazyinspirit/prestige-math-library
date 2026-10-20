---
id: def-vc-class-of-sets-and-index
kind: definition
title: "Shattering, VC dimension, and first-unshattered index for set classes"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-shattering-and-vc-dimension]
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
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, Section 7.4"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, Section 8"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
---

## Definition

Let $\mathcal C\subseteq\mathcal P(X)$ be a family of subsets of an arbitrary set $X$. For a finite $T\subseteq X$, its trace is

$$\mathcal C|_T:=\{C\cap T:C\in\mathcal C\}.$$

The family $\mathcal C$ **shatters** $T$ when $\mathcal C|_T=\mathcal P(T)$. This extends the finite-ground-set trace convention of Shattering and the Vapnik–Chervonenkis dimension of a set family: any finite $T$ can be relabeled by $[|T|]$, and relabeling preserves all traces and their cardinalities.

For a nonempty class, its **VC dimension** $d(\mathcal C)$ is the greatest size of a finite shattered set if those sizes are bounded, is $0$ if no singleton is shattered, and is $+\infty$ if finite shattered sets have unbounded size. When the dimension is finite, its **VC index** is

$$V(\mathcal C):=d(\mathcal C)+1,$$

equivalently the least positive integer $V$ such that no $V$-point subset is shattered. The empty class is assigned $V=0$ by convention and is treated separately in the entropy theorem.

## Definition references

[[def-shattering-and-vc-dimension]]

