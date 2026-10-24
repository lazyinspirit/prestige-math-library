---
id: ex-split-even-clifford-algebra-gives-two-spin-modules
kind: example
title: The split even Clifford algebra in signature (1,1)
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: pin-spin-and-clifford-module-representations-examples
dependency_level: 8
deps:
  - def-real-clifford-group-and-normalized-pin-spin
  - lem-normalized-pin-spin-product-and-norm-laws
  - thm-clifford-pbw-basis-and-associated-graded
  - thm-real-spin-modules-and-real-types
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry, §1.5.4, pp. 32–33"
      url: https://arxiv.org/pdf/1911.09766
---

## Example

For signature $(1,1)$, let $E=e_+e_-$ with $e_+^2=1$, $e_-^2=-1$. Then $E^2=1$ and $\mathrm{Cl}^0_{1,1}\cong\mathbb R\oplus\mathbb R$. The two one-dimensional modules $M_\pm$ defined by $E\cdot t=\pm t$ are inequivalent irreducible real Clifford spinor representations of Spin, obtained by restricting the two unital even-Clifford modules.

## Facts & Assumptions

**Given:** The $(1,1)$ Clifford relations and the real even-algebra module classification of [[thm-real-spin-modules-and-real-types]].

[F1] Full-even Spin consists of even normalized products, and its linear span is the even Clifford algebra ([[lem-normalized-pin-spin-product-and-norm-laws]], [[thm-real-spin-modules-and-real-types]]).

[F2] A simple module for a split factor $\mathbb R$ is one-dimensional over $\mathbb R$ ([[thm-real-spin-modules-and-real-types]]).

[F3] The ordered even Clifford monomials form a basis of $\mathrm{Cl}^0$ ([[thm-clifford-pbw-basis-and-associated-graded]]).

## Verification

**Proof technique:** direct.

1.1 The polarized Clifford relation gives $e_+e_-=-e_-e_+$ and hence $E^2=-e_+^2e_-^2=1$. By [F3], $1,E$ form a basis of $\mathrm{Cl}^0_{1,1}$. The map $a+bE\mapsto(a+b,a-b)$ preserves products and is bijective, so it identifies this algebra with $\mathbb R\oplus\mathbb R$. [given, F3, algebra]

2.1 The idempotents $p_\pm=(1\pm E)/2$ are the two factor identities. Let each factor act on $\mathbb R$ by its scalar coordinate and the other factor by zero. Each module is one-dimensional and hence irreducible; they are inequivalent because $E$ acts by opposite scalars. By [F1], invariance under full-even Spin is equivalent to invariance under its linear span $\mathrm{Cl}^0$, so these are precisely the two split-row Clifford spinor types in this example. [F1, F2, step 1.1, algebra] ∎
