---
id: def-local-p-adic-galois-representation
kind: definition
title: Continuous p-adic representation of a local absolute Galois group
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-absolute-galois-group-of-a-local-field
  - def-field-of-p-adic-numbers
  - def-vector-space
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part I, Chapter 1, Sections 1.1–1.2
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: Laurent Berger, An Introduction to the Theory of p-adic Representations, Section I.2.2
      url: https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf
verification:
  precheck: n/a
---

## Definition

Let $K$ be a finite extension of $\mathbb Q_p$, fix a separable closure $K_s$, and write $G_K=\operatorname{Gal}(K_s/K)$ with its inverse-limit topology. A **continuous p-adic representation of $G_K$** is a finite-dimensional $\mathbb Q_p$-vector space $V$ with its p-adic topology together with a continuous group homomorphism $\rho:G_K\to\operatorname{GL}_{\mathbb Q_p}(V)$, where the topology on $\operatorname{GL}_{\mathbb Q_p}(V)$ is induced from the finite-dimensional $\mathbb Q_p$-vector space $\operatorname{End}_{\mathbb Q_p}(V)$.

## Definition references

[[def-absolute-galois-group-of-a-local-field]]

[[def-field-of-p-adic-numbers]]

[[def-vector-space]]

[Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part I, Chapter 1, Sections 1.1–1.2](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Laurent Berger, An Introduction to the Theory of p-adic Representations, Section I.2.2](https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf)
