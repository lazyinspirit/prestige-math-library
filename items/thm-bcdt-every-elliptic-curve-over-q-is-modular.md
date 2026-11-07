---
id: thm-bcdt-every-elliptic-curve-over-q-is-modular
kind: theorem
title: "Breuil–Conrad–Diamond–Taylor: every elliptic curve over Q is modular"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 39
axiom_use: The 97-page proof has not been reconstructed, so its axiom dependencies and any choice-free branch are unaudited.
deps:
  - thm-wiles-semistable-elliptic-curves-over-q-are-modular
  - thm-taylor-wiles-minimal-hecke-algebra-complete-intersection-and-r-equals-t
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Christophe Breuil, Brian Conrad, Fred Diamond, and Richard Taylor, On the Modularity of Elliptic Curves over Q: Wild 3-Adic Exercises, Theorem A"
      url: https://dash.harvard.edu/bitstreams/7312037c-55d6-6bd4-e053-0100007fdf3b/download
verification:
  precheck: blocked
---

## Statement

For every elliptic curve $E$ over $\mathbb Q$, meaning a smooth projective geometrically integral curve of genus one with a specified rational point, there is an integer $N\ge1$ and a nonconstant morphism over $\mathbb Q$ from the modular curve $X_0(N)$ to $E$. Here the upper half-plane is $\mathbb H=\{z\in\mathbb C:\operatorname{Im}(z)>0\}$, $\Gamma_0(N)=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\operatorname{SL}_2(\mathbb Z):N\mid c\right\}$, and $X_0(N)$ is the smooth projective compactification of $\Gamma_0(N)\backslash\mathbb H$.

## Statement references

[[thm-wiles-semistable-elliptic-curves-over-q-are-modular]]

[Christophe Breuil, Brian Conrad, Fred Diamond, and Richard Taylor, *On the Modularity of Elliptic Curves over Q: Wild 3-Adic Exercises*, Introduction, Theorem A; full article copy](https://dash.harvard.edu/bitstreams/7312037c-55d6-6bd4-e053-0100007fdf3b/download)

## Facts & Assumptions

**Given:** An elliptic curve $E$ over $\mathbb Q$.

[F1] [[thm-wiles-semistable-elliptic-curves-over-q-are-modular]]: Wiles's statement covers precisely the semistable input class; the current local proof remains escalated.

## Proof status

No local proof is supplied in this carrier. The full BCDT article was obtained and its Introduction Theorem A statement was read. The controlling source ledger records that the detailed 97-page proof was not harvested, so the axiom audit is also open and no choice-free branch is claimed. The proof remains an explicit local authoring obligation, including the wild 3-adic local arguments. This item remains escalated and is not used as an established proof supplier.
