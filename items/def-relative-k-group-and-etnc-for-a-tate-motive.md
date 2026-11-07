---
id: def-relative-k-group-and-etnc-for-a-tate-motive
kind: definition
title: Relative K0 Formulation of the Equivariant Tamagawa Number Conjecture
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-finite-galois-extension-and-galois-group
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - def-relative-algebraic-k0-group
  - thm-relative-k-theory-localization-sequence
  - def-determinant-line-of-a-perfect-complex
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: §12.2, printed pp. 35–36.
    - title: "Weibel, The K-book: An Introduction to Algebraic K-Theory"
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf
      locator: Chapter II, relative $K_0$ groups and localization.
verification: {}
---

## Definition

Let $L/K$ be a finite Galois extension of number fields, let $G=\operatorname{Gal}(L/K)$, and let $r\in\mathbb Z$. The Tate motive $h^0(\operatorname{Spec}L)(r)$ with coefficient ring $\mathbb Z[G]$ has a canonical Burns–Flach relative Euler characteristic
$$T\Omega(L/K,\mathbb Z[G],r)\in K_0(\mathbb Z[G],\mathbb R[G]),$$
formed from the equivariant leading-term, regulator, and integral-cohomology data of the motive. The equivariant Tamagawa number conjecture for this pair is the assertion that this canonical class is zero. If $L/K$ is CM and $j\in G$ is complex conjugation, set $e_r=(1-(-1)^rj)/2\in\mathbb Z[1/2][G]$. The plus or minus component away from $2$ is the corresponding class in $K_0(e_r\mathbb Z[1/2][G],e_r\mathbb R[G])$. For a negative integer $r$ and an odd prime $p$, its $p$-part is the image in $K_0(e_r\mathbb Z_p[G],e_r\mathbb Q_p[G])$; it holds when this image vanishes.

## Definition references

[Johnston and Nickel, §12.2](https://arxiv.org/pdf/2010.03186)

[Weibel, *The K-book*, Chapter II](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf)

[[def-finite-galois-extension-and-galois-group]]

[[thm-group-ring-is-a-unital-algebra-with-basis-g]]

[[def-relative-algebraic-k0-group]]

[[thm-relative-k-theory-localization-sequence]]
