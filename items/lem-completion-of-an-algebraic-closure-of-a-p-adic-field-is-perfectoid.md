---
id: lem-completion-of-an-algebraic-closure-of-a-p-adic-field-is-perfectoid
kind: lemma
title: "Completion of an algebraic closure of a p-adic field is perfectoid"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-complete-nonarchimedean-field
  - def-perfectoid-field-and-its-tilt
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Scholze, Perfectoid Spaces, Definition 3.1"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Morrow, Adic and perfectoid spaces, §4.1.2"
      url: "https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf"
---

## Statement

Let $K$ be a complete rank-one nonarchimedean field of characteristic zero and residue characteristic $p>0$. Fix an algebraic closure $\overline K$ equipped with an extension of the absolute value of $K$, and let $C$ be its metric completion. Then $C$ is a perfectoid field: its value group is nondiscrete and Frobenius on $\mathcal O_C/p\mathcal O_C$ is surjective.

## Statement references

[Peter Scholze, *Perfectoid Spaces*, Definition 3.1](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Matthew Morrow, *Adic and perfectoid spaces*, §4.1.2](https://www.imo.universite-paris-saclay.fr/~matthew.morrow/Perf%20spaces%20IMJ-PRG%20final.pdf)

## Facts & Assumptions

**Given:** A complete rank-one nonarchimedean field $K$ of characteristic zero and residue characteristic $p>0$, an algebraic closure $\overline K$ carrying an extension of the absolute value, and its metric completion $C$. Prove that $C$ is perfectoid.

[F1] [[def-complete-nonarchimedean-field]]: A complete nonarchimedean field has a complete metric from a nontrivial real-valued nonarchimedean absolute value, and its value group is a rank-one subgroup of $\mathbb R_{>0}$.

[F2] [[def-perfectoid-field-and-its-tilt]]: In residue characteristic $p$, a complete rank-one nonarchimedean field is perfectoid precisely when its value group is nondiscrete and Frobenius on its valuation ring modulo $p$ is surjective.

## Proof

1.1 The metric completion $C$ is complete and inherits a rank-one nonarchimedean absolute value. To check it is a field, let $c\ne0$ in $C$ and choose $a_n\in\overline K$ with $a_n\to c$. Eventually $|a_n-c|<|c|$, so $|a_n|=|c|$ and $|a_n^{-1}-a_m^{-1}|=|a_m-a_n|/(|a_n||a_m|)\to0$. Thus $a_n^{-1}$ converges to an inverse of $c$. The valuation ring and maximal ideal of $C$ intersect $K$ in $\mathcal O_K$ and $\mathfrak m_K$, respectively, so the residue field of $K$ injects into that of $C$ and the residue characteristic remains $p$; in particular $|p|<1$. [given, F1, construct, algebra]

2.1 For each integer $n\ge1$, the polynomial $T^{p^n}-p$ has a root $r\in\overline K$, so $|p|^{1/p^n}\in|C^\times|$. These values are distinct, are less than $1$, and tend to $1$ as $n\to\infty$; hence the value group of $C$ is nondiscrete. This uses a separate existential root for each fixed $n$, not a simultaneous choice of roots. [given, step 1.1, choose, algebra]

2.2 Fix $x\in\mathcal O_C$. Density of $\overline K$ in its completion gives $a\in\overline K$ with $|x-a|<|p|$. The nonarchimedean inequality gives $|a|\le1$. Choose $y\in\overline K$ with $y^p=a$; then $|y|\le1$ and $x-y^p=x-a\in p\mathcal O_C$. Thus every class in $\mathcal O_C/p\mathcal O_C$ is a Frobenius image. [given, step 1.1, choose, algebra]

3.1 By [F1] and [F2], completeness, rank one, residue characteristic $p$, nondiscreteness, and Frobenius surjectivity imply that $C$ is perfectoid. [F1, F2, step 1.1, step 2.1, step 2.2] ∎
