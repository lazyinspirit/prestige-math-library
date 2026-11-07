---
id: def-etale-site-of-a-perfectoid-space
kind: definition
title: "Étale site of a perfectoid space"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-perfectoid-space
  - def-strongly-finite-etale-perfectoid-space-morphism
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Definition 7.11"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
verification:
  precheck: n/a
---

## Definition

Let $X$ be a perfectoid space. Its **étale site** $X_{\acute et}$ has as objects perfectoid spaces $Y$ equipped with an étale morphism $Y\to X$, and as morphisms the morphisms of perfectoid spaces over $X$. A family $\{Y_i\to Y\}_{i\in I}$ in this category is a **covering family** if the images of the underlying continuous maps jointly cover the underlying topological space of $Y$. The associated topos is denoted $X_{\acute et}^{\sim}$.

## Definition references

[[def-perfectoid-space]]

[[def-strongly-finite-etale-perfectoid-space-morphism]]

[Peter Scholze, *Perfectoid Spaces*, Definition 7.11](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

## Remaining local proof obligations

The definition presupposes that the displayed objects and covering families satisfy the site axioms. The necessary perfectoid fiber-product and base-change arguments in Scholze Proposition 6.18 and the preceding étale lemmas have not been reconstructed locally; this definition is retained as the source's interface and is escalated for readiness.

