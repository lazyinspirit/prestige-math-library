---
id: thm-potentially-semistaable-representation-theorem
kind: theorem
title: Every de Rham p-adic representation is potentially semistable
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-de-rham-p-adic-galois-representation
  - def-semistaable-representation-and-filtered-phi-n-module
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part II, Chapter 9, Theorem 9.3.5
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: Laurent Berger, An Introduction to the Theory of p-adic Representations, Sections IV.5.1–5.3
      url: https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf
verification:
  precheck: n/a
---

## Statement

Let $K/\mathbb Q_p$ be finite and let $V$ be a finite-dimensional de Rham $\mathbb Q_p$-representation of $G_K$. There is a finite extension $L/K$ such that the restricted representation $V|_{G_L}$ is semistable as a representation of $G_L$.

## Statement references

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part II, Chapter 9, Theorem 9.3.5](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Laurent Berger, *An Introduction to the Theory of p-adic Representations*, §§IV.5.1–5.3](https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf)

## Facts & Assumptions

**Given:** finite $K/\mathbb Q_p$ and a finite-dimensional de Rham representation $V$ of $G_K$.

[F1] [[def-de-rham-p-adic-galois-representation]]: de Rham means $\dim_KD_{\mathrm{dR}}(V)=\dim_{\mathbb Q_p}V$.

[F2] [[def-semistaable-representation-and-filtered-phi-n-module]]: semistability over a finite extension is the full-dimension condition on its semistable period invariants.

The read proof route uses the p-adic monodromy theorem, equivalently the André–Kedlaya–Mebkhout quasi-unipotence input for the associated differential equation, and a comparison to de Rham representations. Brinon–Conrad state the theorem without a local proof, and Berger reduces to that deep input. No complete proof is supplied here; this item is escalated.
