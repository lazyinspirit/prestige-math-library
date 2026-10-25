---
id: def-lower-median-functional
kind: definition
title: The lower median of a real probability law
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-borel-sigma-algebra, def-probability-measure]
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
    - title: "Elvezio Ronchetti, Introduction to Robust Statistics, slide 13"
      url: "https://orfe.princeton.edu/sites/g/files/toruqf1286/files/documents/ronchetti-lecture1.pdf"
    - title: "Pavlo Mozharovskyi, Introduction to Robust Statistics, slide ‘Sample median: influence function’ (PDF p. 32)"
      url: "https://perso.telecom-paristech.fr/mozharovskyi/resources/ExtremeDepth_Lecture1.pdf"
---

## Definition

Let $G$ be a probability measure on the Borel subsets of $\mathbb R$, and put $F_G(t):=G(( -\infty,t])$. For any $G$ such that $S_G:=\{t\in\mathbb R:F_G(t)\ge1/2\}$ is nonempty and bounded below, define its **lower median** by

$$m(G):=\inf S_G.$$

The stated condition makes $m(G)$ a finite real number. This convention chooses the left endpoint when the set of medians is an interval; it assumes neither a density nor uniqueness.

