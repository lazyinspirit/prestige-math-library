---
id: def-central-composite-design
kind: definition
title: "Central composite designs"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-two-level-full-factorial-design
  - def-regular-fractional-factorial-defining-relation-and-resolution
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 19, §19.6"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Definition

Fix $k\ge1$, coded factor coordinates $x\in\mathbb R^k$, an axial distance $\alpha>0$, and an integer $m_0\ge1$. A **factorial core** $\mathcal F$ is either the full $2^k$ run set in [[def-two-level-full-factorial-design]] or the run set of a regular fractional factorial as defined by [[def-regular-fractional-factorial-defining-relation-and-resolution]]. In the standard second-order fractional construction the core has resolution V or higher; its generators and resolution are declared with the core.

Let $e_j$ be the $j$th standard coordinate vector. The **axial runs** are $\mathcal A_\alpha=\{\alpha e_j,-\alpha e_j:1\le j\le k\}$, and the **center runs** are $m_0$ copies of $0\in\mathbb R^k$. A **central composite design (CCD)** is the multiset union
$$\mathcal D=\mathcal F\uplus\mathcal A_\alpha\uplus\{0\}^{(m_0)}.$$

The definition specifies runs only. It does not imply that a particular fitted polynomial is estimable, that the design is rotatable, or that blocking is orthogonal; those properties require separate checks for the chosen runs and model matrix.
