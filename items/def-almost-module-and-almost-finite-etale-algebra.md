---
id: def-almost-module-and-almost-finite-etale-algebra
kind: definition
title: "Almost modules and finite étale algebras"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-perfectoid-field-and-its-tilt
  - def-valuation-ring
  - lem-maximal-ideal-of-nondiscrete-valuation-ring-is-idempotent
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, §7.2"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Bhatt, Morrow, and Scholze, Integral p-adic Hodge Theory, §2"
      url: "https://arxiv.org/pdf/1602.03148v3.pdf"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a perfectoid field, let $V=K^\circ$ be its valuation ring, and let $\mathfrak m=K^{\circ\circ}$ be its maximal ideal. An element of a $V$-module $M$ is **almost zero** if it is annihilated by $\mathfrak m$; the module is almost zero if all its elements are. The **almost category of $V$-modules** is the Serre quotient of the category of $V$-modules by its full subcategory of almost-zero modules; the image of $M$ is denoted $M^a$. The ideal $\mathfrak m$ is idempotent, so this quotient has its usual symmetric monoidal structure. For a $V$-algebra $A$, an $A$-module $M$ is **almost finitely generated** if for every $\epsilon\in\mathfrak m$ there is a finitely generated $A$-module $N_\epsilon$ and a map $N_\epsilon\to M$ whose kernel and cokernel are annihilated by $\epsilon$; it is **uniformly almost finitely generated** if a single finite bound works for the number of generators of all $N_\epsilon$. Replace “finitely generated” by “finitely presented” to define **almost finitely presented**. An almost module is **finite projective** if it is flat and almost finitely presented, where flatness means that tensoring with it preserves exact sequences in the almost category. In the almost category, a map $A^a\to B^a$ of commutative algebras is **unramified** if the multiplication map $\mu:B^a\otimes_{A^a}B^a\to B^a$ has an idempotent $e$ with $\mu(e)=1$ and $xe=0$ for every $x$ in the kernel of $\mu$. It is **étale** if it is unramified and $B^a$ is flat over $A^a$, and **finite étale** if it is étale and almost finitely presented as an $A^a$-module. A finite projective almost module is **uniformly finite projective** if it is uniformly almost finitely generated.

## Definition references

[[def-perfectoid-field-and-its-tilt]]

[[def-valuation-ring]]

[lem-maximal-ideal-of-nondiscrete-valuation-ring-is-idempotent]

[Peter Scholze, *Perfectoid Spaces*, Definitions 4.7(iii), 4.10, 4.12–4.13, and 7.2(i)](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Bhargav Bhatt, Matthew Morrow, and Peter Scholze, *Integral p-adic Hodge Theory*, §2](https://arxiv.org/pdf/1602.03148v3.pdf)
