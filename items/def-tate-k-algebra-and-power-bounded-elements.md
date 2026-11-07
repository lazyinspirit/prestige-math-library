---
id: def-tate-k-algebra-and-power-bounded-elements
kind: definition
title: "Tate K-algebra and power-bounded elements"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-complete-nonarchimedean-field]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, §5.1"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Bhatt, Morrow, and Scholze, Integral p-adic Hodge Theory, §3.2"
      url: "https://arxiv.org/pdf/1602.03148v3.pdf"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a complete nonarchimedean field. A **Banach $K$-algebra** is a
unital associative $K$-algebra $R$ with a complete nonarchimedean norm
$\|\cdot\|$ satisfying $\|xy\|\le\|x\|\|y\|$ and
$\|ax\|=|a|_K\|x\|$ for $a\in K$ and $x,y\in R$. For the Tate and perfectoid algebras on this page, $R$ is required to be commutative. It is a **Tate
$K$-algebra** if its topology contains a topologically nilpotent unit, that
is, an invertible $\varpi\in R$ with $\|\varpi^n\|\to0$. An element
$x\in R$ is **power-bounded** if the set $\{\|x^n\|:n\ge0\}$ is bounded;
write $R^\circ$ for the subring of power-bounded elements. The Tate algebra
is **uniform** if $R^\circ$ is bounded in $R$.

## Definition references

[[def-complete-nonarchimedean-field]]

[Peter Scholze, *Perfectoid Spaces*, §5.1](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Bhargav Bhatt, Matthew Morrow, and Peter Scholze, *Integral p-adic Hodge Theory*, §3.2](https://arxiv.org/pdf/1602.03148v3.pdf)
