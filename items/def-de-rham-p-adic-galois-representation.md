---
id: def-de-rham-p-adic-galois-representation
kind: definition
title: De Rham p-adic Galois representation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-local-p-adic-galois-representation
  - def-p-adic-period-rings
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part II, Chapter 6, Section 6.1
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: Laurent Berger, An Introduction to the Theory of p-adic Representations, Section II.2.3
      url: https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf
verification:
  precheck: n/a
---

## Definition

Let $K/\mathbb Q_p$ be finite and let $V$ be a finite-dimensional continuous $\mathbb Q_p$-representation of $G_K$. Define
$$D_{\mathrm{dR}}(V):=(B_{\mathrm{dR}}\otimes_{\mathbb Q_p}V)^{G_K}.$$
The copy of $K$ in $B_{\mathrm{dR}}$ is fixed by $G_K$, so $D_{\mathrm{dR}}(V)$ is a $K$-vector space. Give it the decreasing filtration
$$\operatorname{Fil}^iD_{\mathrm{dR}}(V):=(\operatorname{Fil}^iB_{\mathrm{dR}}\otimes_{\mathbb Q_p}V)^{G_K}.$$
The representation $V$ is **de Rham** if $\dim_KD_{\mathrm{dR}}(V)=\dim_{\mathbb Q_p}V$.

## Definition references

[[def-local-p-adic-galois-representation]]

[[def-p-adic-period-rings]]

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part II, Chapter 6, §6.1](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Laurent Berger, *An Introduction to the Theory of p-adic Representations*, §II.2.3](https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf)
