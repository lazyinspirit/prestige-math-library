---
id: def-iwasawa-invariants-of-finitely-generated-torsion-lambda-module
kind: definition
title: "Iwasawa invariants of a finitely generated torsion Iwasawa module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - thm-iwasawa-module-structure-for-finitely-generated-modules
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. Sharifi, Iwasawa Theory lecture notes"
      url: "https://www.math.ucla.edu/~sharifi/iwasawa.pdf"
      locator: "Definition 2.4.1, printed pp. 51–52"
verification: {}
---

## Definition

Let $M$ be a finitely generated torsion module over $\Lambda=\mathbb Z_p\llbracket T\rrbracket$. If $M$ is pseudo-isomorphic to
$$\bigoplus_j\Lambda/(p^{e_j})\oplus\bigoplus_i\Lambda/(f_i^{m_i}),$$
where each $f_i$ is monic distinguished and irreducible, define
$$\mu(M)=\sum_j e_j,\qquad \lambda(M)=\sum_i m_i\deg f_i.$$
The **characteristic polynomial** is $p^{\mu(M)}\prod_i f_i^{m_i}$, determined up to a unit. The values are independent of the decomposition when the module structure theorem applies.

## Definition references

[J. Sharifi, *Iwasawa Theory*, Definition 2.4.1, pp. 51–52](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** A finitely generated torsion $\Lambda$-module $M$.

[F1] The structure theorem supplies the pseudo-isomorphic elementary-divisor decomposition and its uniqueness. [[thm-iwasawa-module-structure-for-finitely-generated-modules]]

## Proof

1.1 Once a decomposition as displayed is given, its finite list of exponents and polynomial degrees defines the two nonnegative integers by finite sums.[F1, algebra]

2.1 By [F1], a decomposition exists for every stated $M$, and its prime-power list is unique up to ordering and associates. Therefore the finite exponent sums are independent of that list, and the product defining the characteristic polynomial is determined up to a unit. [F1, step 1.1, algebra] ∎
