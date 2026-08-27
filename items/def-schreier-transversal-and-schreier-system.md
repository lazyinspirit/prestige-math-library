---
id: def-schreier-transversal-and-schreier-system
kind: definition
title: "Schreier transversals and Schreier systems"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-alphabet-words-and-reduction, def-labeled-schreier-coset-graph]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "M. I. Kargapolov and Ju. I. Merzljakov, Fundamentals of the Theory of Groups"
      url: "https://www.scribd.com/document/1049379192/Fundamentals-of-the-Theory-of-Groups-M-I-Kargapolov-J-I-Merzljakov"
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Definition

Let $F(X)$ be a free group, let $H\le F(X)$, and let
$\operatorname{Sch}_X(H)$ be its Schreier graph.

A **Schreier transversal** for the right cosets of $H$ is a set $\mathcal T$ of
reduced words on $X\sqcup X^{-1}$ such that every right coset $Hg$ is
represented by exactly one word of $\mathcal T$. For a word $w$ representing
the coset $Hw$, write $\overline w\in\mathcal T$ for this chosen
representative.

The transversal $\mathcal T$ is a **Schreier system** if every initial segment
of every word in $\mathcal T$ again belongs to $\mathcal T$. Equivalently, if
$x_1\cdots x_n\in\mathcal T$, then each prefix
$x_1\cdots x_j\in\mathcal T$ for $0\le j\le n$, where the empty prefix is the
identity word representing the base coset $H$.
