---
id: def-arithmetic-variety-over-the-integers
kind: definition
title: "Arithmetic varieties over a number ring"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - cor-ring-of-integers-is-a-dedekind-domain
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Henri Gillet and Christophe Soulé, Arithmetic intersection theory"
      url: "https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf"
      locator: "§§3.1–3.2, printed pp. 124–126"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice. Let $K$ be a number field, let $R=\mathcal O_K$ be its ring of integers, and let $X$ be a scheme flat and of finite type over $\operatorname{Spec}R$. Its generic fibre is $X_K=X\times_{\operatorname{Spec}R}\operatorname{Spec}K$. In the convention used here, an **arithmetic variety** is such an $X$ whose generic fibre is smooth and quasi-projective over $K$; it is **regular** if its total scheme is regular, and **projective** if its structural morphism to $\operatorname{Spec}R$ is projective. For each field embedding $\sigma:K\hookrightarrow\mathbb C$, put $X_\sigma=X_K\times_{K,\sigma}\mathbb C$ and $X_\infty=\coprod_{\sigma:K\hookrightarrow\mathbb C}X_\sigma(\mathbb C)$, with complex conjugation interchanging conjugate components; each $X_\sigma(\mathbb C)$ is a complex manifold, compact when $X$ is projective.

## Definition references

[Gillet–Soulé, §§3.1–3.2](https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, its ring of integers $\mathcal O_K$, and a scheme $X$ flat and of finite type over $\operatorname{Spec}\mathcal O_K$.

[F1] A number field is a finite extension $K/\mathbb Q$ ([[def-number-field]]).

[F2] The ring of integers $\mathcal O_K$ is the integral closure of $\mathbb Z$ in $K$ ([[def-ring-of-integers-of-a-number-field]]).

[F3] Under the Axiom of Choice, the ring of integers of every number field is a Dedekind domain ([[cor-ring-of-integers-is-a-dedekind-domain]]).
