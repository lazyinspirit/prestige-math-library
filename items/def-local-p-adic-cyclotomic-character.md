---
id: def-local-p-adic-cyclotomic-character
kind: definition
title: The local p-adic cyclotomic character and Tate twists
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-absolute-galois-group-of-a-local-field
  - def-p-adic-integers-as-compatible-residue-classes
  - def-local-p-adic-galois-representation
justified_by:
  - lem-local-p-adic-cyclotomic-character-is-continuous
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part I, Chapter 1, Section 1.1
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: Laurent Berger, An Introduction to the Theory of p-adic Representations, Section I.2.2
      url: https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf
verification:
  precheck: n/a
---

## Definition

Let $K$ be a finite extension of $\mathbb Q_p$, fix a separable closure $K_s$, and choose a compatible system of primitive roots of unity $\zeta_{p^n}\in K_s$ with $\zeta_{p^{n+1}}^p=\zeta_{p^n}$. For $g\in G_K$ and $n\ge1$, let $\chi_{p,n}(g)\in(\mathbb Z/p^n\mathbb Z)^\times$ be the unique exponent satisfying $g(\zeta_{p^n})=\zeta_{p^n}^{\chi_{p,n}(g)}$. Compatibility gives a group homomorphism $\chi_p:G_K\to\mathbb Z_p^\times=\varprojlim_n(\mathbb Z/p^n\mathbb Z)^\times$, called the **p-adic cyclotomic character**; it is continuous. For $r\in\mathbb Z$, the **Tate twist** $\mathbb Q_p(r)$ is the one-dimensional p-adic representation on which $g\in G_K$ acts by multiplication by $\chi_p(g)^r$.

## Definition references

[[def-absolute-galois-group-of-a-local-field]]

[[def-p-adic-integers-as-compatible-residue-classes]]

[[def-local-p-adic-galois-representation]]

[Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part I, Chapter 1, Section 1.1](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Laurent Berger, An Introduction to the Theory of p-adic Representations, Section I.2.2](https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf)
