---
id: lem-maximal-ideal-of-nondiscrete-valuation-ring-is-idempotent
kind: lemma
title: "The maximal ideal of a nondiscrete rank-one valuation ring is idempotent"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-perfectoid-field-and-its-tilt
  - def-valuation-ring
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, §7.2"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
verification: {}
---

## Statement

Let $K$ be a complete rank-one nonarchimedean field whose value group $|K^\times|\subset\mathbb R_{>0}$ is nondiscrete, and let $\mathfrak m=\{x\in K:|x|<1\}$ be the maximal ideal of its valuation ring $K^\circ$. Then $\mathfrak m^2=\mathfrak m$.

## Statement references

[Peter Scholze, *Perfectoid Spaces*, §7.2](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

## Facts & Assumptions

**Given:** A complete rank-one nonarchimedean field $K$ with nondiscrete value group and its valuation ring.

[F1] [[def-perfectoid-field-and-its-tilt]]: the valuation ring is $K^\circ=\{x:|x|\le1\}$ and its maximal ideal is $\mathfrak m=\{x:|x|<1\}$; nondiscreteness means the value group has no isolated values.

## Proof

**Given:** The field $K$ and ideal $\mathfrak m$ above.

1.1 If $x,y\in\mathfrak m$, then $|xy|=|x||y|<1$, so $xy\in\mathfrak m$ and $\mathfrak m^2\subseteq\mathfrak m$. [F1, given, algebra]

2.1 Let $z\in\mathfrak m$ be nonzero and write $H=\log|K^\times|\subset\mathbb R$. Since $H$ is a nondiscrete subgroup, it has arbitrarily small positive elements; choose $h\in H$ with $0<h<-\log|z|$. Then $\gamma=e^{-h}\in|K^\times|$ satisfies $|z|<\gamma<1$. Choose $y\in K^\times$ with $|y|=\gamma$. Then $y\in\mathfrak m$ and $|z/y|=|z|/\gamma<1$, so $z/y\in\mathfrak m$ and $z=y(z/y)\in\mathfrak m^2$. Also $0\in\mathfrak m^2$, hence $\mathfrak m\subseteq\mathfrak m^2$. [F1, given, choose, algebra] ∎
