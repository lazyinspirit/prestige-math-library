---
id: def-complete-nonarchimedean-field
kind: definition
title: "Complete nonarchimedean field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-multiplicative-absolute-value-on-a-field]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, §§2–3.1"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Matthew Morrow, Adic and perfectoid spaces, §4.1.1"
      url: "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf"
verification:
  precheck: n/a
---

## Definition

A **complete nonarchimedean field** is a field $K$ equipped with a nontrivial
multiplicative absolute value $|\cdot|_K:K\to\mathbb R_{\ge0}$ satisfying
$|0|_K=0$, $|xy|_K=|x|_K|y|_K$, and
$|x+y|_K\le\max\{|x|_K,|y|_K\}$ for all $x,y\in K$, such that the metric
$d_K(x,y)=|x-y|_K$ is complete: every $d_K$-Cauchy sequence in $K$ converges
in $K$. Its value group $|K^\times|_K\subset\mathbb R_{>0}$ has rank one.

## Definition references

[[def-multiplicative-absolute-value-on-a-field]]

[Peter Scholze, *Perfectoid Spaces*, §§2–3.1](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Matthew Morrow, *Adic and perfectoid spaces*, §4.1.1](https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf)
