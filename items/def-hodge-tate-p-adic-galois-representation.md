---
id: def-hodge-tate-p-adic-galois-representation
kind: definition
title: Hodge–Tate p-adic representation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-local-p-adic-galois-representation
  - def-local-p-adic-cyclotomic-character
  - def-p-adic-period-rings
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part I, Chapter 2, Sections 2.2–2.3
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: Laurent Berger, An Introduction to the Theory of p-adic Representations, Section II.1.2
      url: https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf
verification:
  precheck: n/a
---

## Definition

Let $K/\mathbb Q_p$ be finite, let $C_p=\widehat{K_s}$, and let $V$ be a finite-dimensional continuous $\mathbb Q_p$-representation of $G_K$. For $r\in\mathbb Z$, write $C_p(r)=C_p\otimes_{\mathbb Q_p}\mathbb Q_p(r)$ with diagonal $G_K$-action. The representation $V$ is **Hodge–Tate** if there is a $G_K$-equivariant isomorphism
$$C_p\otimes_{\mathbb Q_p}V\cong\bigoplus_{j\in\mathbb Z}C_p(-j)^{h_j}$$
for nonnegative integers $h_j$ of finite support. In a displayed decomposition, the indices $j$ are its Hodge–Tate weight indices, with multiplicities $h_j$.

## Definition references

[[def-local-p-adic-galois-representation]]

[[def-local-p-adic-cyclotomic-character]]

[[def-p-adic-period-rings]]

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part I, Chapter 2, §§2.2–2.3](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Laurent Berger, *An Introduction to the Theory of p-adic Representations*, §II.1.2](https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf)
