---
id: def-continuous-finite-coefficient-l-adic-galois-representation
kind: definition
title: "Continuous Galois representation over a finite ℓ-adic coefficient field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-continuous-l-adic-galois-representation
  - def-field-of-p-adic-numbers
  - def-vector-space
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Pierre Serre, Abelian ℓ-adic Representations and Elliptic Curves, Chapter I, §1.1"
      url: "https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf"
      locator: "Definition of a continuous ℓ-adic representation on a finite-dimensional coefficient space."
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
      locator: "§3.1, continuous ℓ-adic representations attached to lisse sheaves."
---

## Definition

Assume the Axiom of Choice as in the global absolute-Galois-group convention. Let $F$ be a number field, let $\ell$ be a prime, let $L/\mathbb Q_\ell$ be a finite field extension with its finite-dimensional $\ell$-adic topology, and let $W$ be a finite-dimensional $L$-vector space with its induced topology. A **continuous $L$-linear Galois representation of $F$** is a continuous group homomorphism

$$\rho:G_F\longrightarrow\operatorname{GL}_L(W),$$

where $G_F$ has its Krull topology and $\operatorname{GL}_L(W)$ has the topology induced by the topology on $\operatorname{End}_L(W)$. Its dimension is $\dim_L W$, not its dimension after restriction of scalars to $\mathbb Q_\ell$.

## Definition references

[[def-continuous-l-adic-galois-representation]]

[[def-field-of-p-adic-numbers]]

[[def-vector-space]]

[Serre, *Abelian ℓ-adic Representations and Elliptic Curves*, Chapter I, §1.1](https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf)

[Deligne, *Formes modulaires et représentations ℓ-adiques*, §3.1](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)
