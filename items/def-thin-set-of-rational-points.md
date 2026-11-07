---
id: def-thin-set-of-rational-points
kind: definition
title: "Thin set of rational points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-global-field
  - def-smooth-fano-variety-over-number-field
  - def-projective-variety-classical
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Pierre Serre, Topics in Galois Theory, 2nd ed., Chapter 3, §3.1.1"
      url: "https://indico.math.cnrs.fr/event/11410/attachments/4760/7351/SerreTopicsGaloisTheory.pdf"
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §1"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Jakob Glas, Counting rational points over function fields, PhD thesis, §2.3 (2024)"
      url: "https://research-explorer.ista.ac.at/download/18132/18140/example-phd.pdf"
      locator: "Chapter 2, §2.3, printed pp. 10–11 / PDF pp. 21–22: Manin–Peyre conjecture, alpha-beta-tau factors, thin sets, and accumulating lines on cubic surfaces."
verification: {}
---

## Definition

Let $K$ be a number field and $X/K$ a smooth Fano variety. Here a $K$-variety means an integral separated finite-type $K$-scheme, and the degree of a dominant generically finite morphism $f:Y\to X$ is the degree $[K(Y):K(X)]$ of its induced extension of function fields. A subset $T\subseteq X(K)$ is **thin** if it is contained in a finite union of sets of the following two forms: (I) $Z(K)$ for a proper closed subvariety $Z\subsetneq X$; and (II) $f(Y(K))$, where $Y$ is a $K$-variety and $f:Y\to X$ is a dominant generically finite $K$-morphism of degree at least $2$ that has no rational section, meaning there is no rational map $s:X\dashrightarrow Y$ with $f\circ s$ equal to the identity on a dense open subset of $X$. A set of either displayed form is allowed to be empty.

## Definition references

[[def-global-field]]

[[def-smooth-fano-variety-over-number-field]]

[[def-projective-variety-classical]]

[Jean-Pierre Serre, Chapter 3, §3.1.1, printed pp. 36–37](https://indico.math.cnrs.fr/event/11410/attachments/4760/7351/SerreTopicsGaloisTheory.pdf)

[Emmanuel Peyre, §1](https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf)
