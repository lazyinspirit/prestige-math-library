---
id: def-continuous-l-adic-galois-representation
title: "Continuous finite-dimensional ℓ-adic Galois representation"
kind: definition
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-global-field
  - def-absolute-galois-group-of-a-field
  - def-absolute-galois-group-of-a-global-field
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
    - title: "Barry Mazur, Deforming Galois Representations, Chapter I, §1.1"
      url: "https://bpb-us-e1.wpmucdn.com/sites/harvard.edu/dist/a/189/files/2023/01/Deforming-Galois-Representations.pdf"
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques, §3.1"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
verification:
  precheck: n/a
---

## Definition

Assume AC. Let $F$ be a global field, meaning either a finite extension of
$\mathbb Q$ or a one-variable function field over its full finite constant
field. Choose a separable closure $F^{\mathrm{sep}}$ and give
$G_F=\operatorname{Gal}(F^{\mathrm{sep}}/F)$ its Krull topology. Let $\ell$
be a prime, let $V$ be a finite-dimensional $\mathbb Q_\ell$-vector space with
its $\ell$-adic topology, and give $\operatorname{GL}_{\mathbb Q_\ell}(V)$ the
topology induced by the topology on $\operatorname{End}_{\mathbb Q_\ell}(V)$.
A **continuous finite-dimensional $\ell$-adic Galois representation of $F$**
is a continuous group homomorphism
$$\rho:G_F\longrightarrow\operatorname{GL}_{\mathbb Q_\ell}(V).$$

## Definition references

[[def-global-field]]: a number field or a function field with its exact finite constant field.

[Jean-Pierre Serre, *Abelian ℓ-adic Representations and Elliptic Curves*, Chapter I, §1.1](https://www.math.mcgill.ca/darmon/courses/18-19/gs/serre-mcgill.pdf)

[Barry Mazur, *Deforming Galois Representations*, Chapter I, §1.1](https://bpb-us-e1.wpmucdn.com/sites/harvard.edu/dist/a/189/files/2023/01/Deforming-Galois-Representations.pdf)

[Pierre Deligne, *Formes modulaires et représentations ℓ-adiques*, §3.1](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)

## Facts & Assumptions

**Given:** AC, a global field $F$, a chosen separable closure
$F^{\mathrm{sep}}/F$, a prime $\ell$, and a finite-dimensional
$\mathbb Q_\ell$-vector space $V$.

[A1] [[def-axiom-of-choice]]: AC is the assertion that every family of
nonempty sets has a choice function. It is assumed here for the absolute
Galois-group construction declared by the run plan.

[F1] [[def-global-field]]: a global field is either a number field or a
finitely generated one-variable function field over a finite field that is
algebraically closed in the function field.

[F2] [[def-field-of-p-adic-numbers]] and [[def-vector-space]]: $\mathbb Q_\ell$
has its $\ell$-adic field topology, and $V$ is a vector space over that field.


[F3] [[def-absolute-galois-group-of-a-field]]: for a field $F$ and chosen
separable closure $F_s/F$, $G_F$ is the inverse limit of its finite Galois
subextensions, with inverse-limit topology; the current body is draft.

[F4] [[def-absolute-galois-group-of-a-global-field]]: the global-field case
uses $G_F=\operatorname{Gal}(F_s/F)$ with that inverse-limit topology; the
current body is draft.
