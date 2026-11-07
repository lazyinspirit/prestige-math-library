---
id: def-finite-galois-module-and-cartier-dual
kind: definition
title: "Finite Galois module and its Cartier dual with Tate twist"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-global-field
  - def-absolute-galois-group-of-a-global-field
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter I, §4"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "§4 setup and Theorem I.4.10, printed pp. 55–57: finite Galois modules and their multiplicative duals."
    - title: "Kęstutis Česnavičius, Poitou–Tate without restrictions on the order, arXiv:1410.2621v2"
      url: "https://arxiv.org/pdf/1410.2621v2"
      locator: "§1.1, printed PDF p. 1: finite Galois modules, the dual, and the order-invertibility hypothesis."
verification:
  precheck: n/a
---

## Definition

Let $K$ be a global field, let $K_s$ be a fixed separable closure, and write
$G_K=\operatorname{Gal}(K_s/K)$. A **finite Galois module** over $K$ is a finite
abelian group $M$, written additively, with the discrete topology and a
continuous left $G_K$-action. In the function-field case require
$\gcd(|M|,\operatorname{char}K)=1$. Its **Cartier dual with Tate twist** is the
finite Galois module
$$M^D:=\operatorname{Hom}_{\mathbb Z}(M,K_s^\times),\qquad (g\cdot\chi)(m):=g\bigl(\chi(g^{-1}m)\bigr).$$
Because $M$ is finite, every value of a character is a root of unity whose
order divides $|M|$; the prime-to-characteristic hypothesis in positive
characteristic ensures these roots lie in the separable closure. This is the
convention $M^D=\operatorname{Hom}(M,\overline K^\times)$ used in the
Poitou–Tate sequence.

## Definition references

[[def-global-field]]

[[def-absolute-galois-group-of-a-global-field]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[J. S. Milne, *Arithmetic Duality Theorems*, Chapter I §4](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Kęstutis Česnavičius, *Poitou–Tate without restrictions on the order*, §1.1](https://arxiv.org/pdf/1410.2621v2)
