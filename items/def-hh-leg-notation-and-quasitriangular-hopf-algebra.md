---
id: def-hh-leg-notation-and-quasitriangular-hopf-algebra
kind: definition
title: "Leg notation and quasitriangular Hopf algebras"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps: [def-hh-hopf-algebra-and-antipode, def-hh-scalar-and-tensor-conventions, lem-hh-tensor-coherence-on-elementary-tensors, thm-tensor-product-of-algebras-over-a-commutative-ring]
justified_by: [thm-hh-r-matrix-constructs-a-module-braiding, thm-hh-finite-double-hopf-structure-and-canonical-r]
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf Algebras and Representations (Helsinki lecture notes, Spring 2011)"
      url: "https://www.math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
      locator: "§4.2, printed pp. 65–68: leg embeddings, Definition 4.7, Propositions 4.9–4.13"
    - title: "Pavel Etingof and Mykola Semenyakin, A Brief Introduction to Quantum Groups, arXiv:2106.05252v3 (2024)"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "§3.4.3, PDF p. 17, equations (3.26) and Definition 3.28"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** A field $k$ and a Hopf algebra $H$ over $k$.

[F1] [[def-hh-hopf-algebra-and-antipode]]: $H$ is a unital associative $k$-algebra with coproduct $\Delta:H\to H\otimes H$ and counit $\varepsilon:H\to k$ satisfying the coalgebra identities.

[F2] [[def-hh-scalar-and-tensor-conventions]]: tensors are algebraic tensor products, every tensor is a finite sum of elementary tensors, and tensor powers have fixed left-associated parenthesization.

[F3] [[thm-tensor-product-of-algebras-over-a-commutative-ring]]: multiplication on tensor-product algebras is componentwise, $(a\otimes b)(c\otimes d)=ac\otimes bd$, with unit $1\otimes1$.

[F4] [[lem-hh-tensor-coherence-on-elementary-tensors]]: the canonical associators and flips are natural isomorphisms; parentheses may be changed through these specified maps.

## Definition

Set $H^{\otimes3}:=(H\otimes H)\otimes H$. Define linear maps
$\iota_{12}(a\otimes b)=(a\otimes b)\otimes1_H,\qquad \iota_{13}(a\otimes b)=(a\otimes1_H)\otimes b,\qquad \iota_{23}(a\otimes b)=(1_H\otimes a)\otimes b.$
For $X\in H\otimes H$, write $X_{ij}:=\iota_{ij}(X)$ and $X_{21}:=\tau_{H,H}(X)$, where $\tau_{H,H}(a\otimes b)=b\otimes a$. Define $\Delta^{\mathrm{op}}:=\tau_{H,H}\circ\Delta$. In the second hexagon below, $\alpha^{-1}_{H,H,H}$ is the canonical reassociation $(H\otimes(H\otimes H))\to((H\otimes H)\otimes H)$ from [F4].

An algebraic quasitriangular structure on $H$ is an invertible element $R\in H\otimes H$ such that, for every $h\in H$,
$R\Delta(h)=\Delta^{\mathrm{op}}(h)R,$
and
$(\Delta\otimes\operatorname{id}_H)(R)=R_{13}R_{23},\qquad \alpha^{-1}_{H,H,H}(\operatorname{id}_H\otimes\Delta)(R)=R_{13}R_{12}.$
All products are in the componentwise tensor-product algebra, and $R$ is a finite algebraic tensor sum. The displayed formula with $\alpha^{-1}$ is the parenthesized form of $(\operatorname{id}\otimes\Delta)R=R_{13}R_{12}$.

## Verification

**Given:** A field $k$, a Hopf algebra $H$ over $k$, and the tensor-product algebra structures of [F3].

1.1 For each pair $i,j\in\{12,13,23\}$ the displayed assignment on elementary tensors is induced by a $k$-bilinear map $H\times H\to H^{\otimes3}$; the balanced tensor-product universal property therefore gives a well-defined linear map $\iota_{ij}:H\otimes H\to H^{\otimes3}$. The flip $\tau_{H,H}$ is induced by the balanced bilinear map $(a,b)\mapsto b\otimes a$, so it is a well-defined linear map as well. [given, F1, F2, construct]

2.1 On elementary tensors, componentwise multiplication gives $\iota_{12}((a\otimes b)(c\otimes d))=(ac\otimes bd)\otimes1_H=\iota_{12}(a\otimes b)\iota_{12}(c\otimes d),$ and the same calculation gives $(ac\otimes1\otimes bd)$ for $\iota_{13}$ and $(1\otimes ac\otimes bd)$ for $\iota_{23}$. Each map sends $1_H\otimes1_H$ to $1_H^{\otimes3}$. Bilinearity and the spanning of elementary tensors extend these identities to all tensors, so each $\iota_{ij}$ is a unital algebra homomorphism. [given, F2, F3, algebra, step 1.1]

3.1 The flip satisfies $\tau_{H,H}^2(a\otimes b)=a\otimes b$ for every elementary tensor and hence $\tau_{H,H}^2=\operatorname{id}_{H\otimes H}$. The right-parenthesized coproduct in the second hexagon is transported to the fixed left-associated $H^{\otimes3}$ by the canonical associator [F4]. The flip is an involution of vector spaces, not asserted to be an algebra homomorphism. The formulas in the Definition therefore give well-defined leg tensors and opposite coproduct before any quasitriangular axioms are imposed. [given, F2, F4, algebra] ∎
