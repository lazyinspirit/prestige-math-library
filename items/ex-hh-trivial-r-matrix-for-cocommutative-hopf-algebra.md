---
id: ex-hh-trivial-r-matrix-for-cocommutative-hopf-algebra
kind: example
title: "The trivial universal R-matrix for the group algebra of a two-element group"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 5
deps: [def-hh-hopf-algebra-and-antipode, def-hh-module-category-and-tensor-action, thm-hh-bialgebra-module-tensor-coherence, def-hh-leg-notation-and-quasitriangular-hopf-algebra, def-hh-braiding-and-triangular-structure]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf Algebras and Representations (Helsinki lecture notes, Spring 2011)"
      url: "https://www.math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
      locator: "§4.2, printed pp. 65–68: the universal R axioms and induced module braiding"
    - title: "Pavel Etingof and Mykola Semenyakin, A Brief Introduction to Quantum Groups, arXiv:2106.05252v3 (2024)"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "Definition 3.28 and Remark 3.31, PDF p. 17: algebraic R axioms and triangularity"
verification:
  precheck: pass
---

## Example

Let $k$ be any field and let $H$ have basis $1,g$ with multiplication $g^2=1$. Give it the Hopf structure $\Delta(g^i)=g^i\otimes g^i$, $\varepsilon(g^i)=1$, and $S(g^i)=g^i$ for $i\in\{0,1\}$. This is the group algebra of the cyclic group of order two. It is cocommutative, and $R=1_H\otimes1_H$ is a triangular quasitriangular structure. The induced module map is the ordinary flip.

## Facts & Assumptions

**Given:** A field $k$, the two-element group $\{1,g\}$ with $g^2=1$, and its displayed two-dimensional algebra and structure maps.

[F1] [[def-hh-hopf-algebra-and-antipode]]: a Hopf algebra is a unital algebra with algebra-map coproduct and counit satisfying the coalgebra identities, and with an antipode satisfying both convolution contractions.

[F2] [[def-hh-module-category-and-tensor-action]]: the tensor product of left $H$-modules carries the diagonal action $h(v\otimes w)=\sum h_{(1)}v\otimes h_{(2)}w$.

[F3] [[thm-hh-bialgebra-module-tensor-coherence]]: the canonical associator on module tensor products is $H$-linear and the tensor action is coassociative.

[F4] [[def-hh-leg-notation-and-quasitriangular-hopf-algebra]]: $R$ is quasitriangular when it is invertible, intertwines $\Delta$ with $\Delta^{\mathrm{op}}$, and satisfies the two leg hexagons.

[F5] [[def-hh-braiding-and-triangular-structure]]: a braiding is a natural family of module isomorphisms satisfying both tensor hexagons, and triangularity is $R_{21}R=1\otimes1$.

## Verification

**Given:** The field $k$, the algebra $H$ and maps of the Example, and arbitrary left $H$-modules $V,W$ when discussing the induced map.

1.1 The multiplication is associative because on basis elements $(g^i g^j)g^m=g^{i+j+m}=g^i(g^j g^m)$ with exponents modulo two; $1=g^0$ is a two-sided unit. The maps $\Delta$ and $\varepsilon$ preserve products and units on the basis $g^0,g^1$, and both iterated coproducts send $g^i$ to $g^i\otimes g^i\otimes g^i$, while both counit contractions return $g^i$. Thus $H$ is a bialgebra. [given, F1, construct]

2.1 On each basis element $g^i$, both $m(S\otimes\operatorname{id})\Delta(g^i)$ and $m(\operatorname{id}\otimes S)\Delta(g^i)$ equal $g^{2i}=1=\varepsilon(g^i)1$. Linearity gives both antipode contractions on $H$, so the stated structure is a Hopf algebra. Also $\Delta(g^i)=g^i\otimes g^i$ is fixed by the flip, proving cocommutativity. [given, F1, algebra, step 1.1]

3.1 The tensor $R=1_H\otimes1_H$ is invertible with inverse itself. For every $h\in H$, $R\Delta(h)=\Delta(h)=\Delta^{\mathrm{op}}(h)R$ by cocommutativity; moreover $(\Delta\otimes\operatorname{id})R=1_H^{\otimes3}=R_{13}R_{23}$ and $\alpha^{-1}(\operatorname{id}\otimes\Delta)R=1_H^{\otimes3}=R_{13}R_{12}$. Hence $R$ is quasitriangular. Since $R_{21}R=1_H\otimes1_H$, it is triangular. [given, F4, algebra, step 2.1]

4.1 On any pair of left modules the formula $c_{V,W}=\tau_{V,W}(\rho_V\otimes\rho_W)(R)$ reduces to $v\otimes w\mapsto w\otimes v$. For $h\in H$, the two module actions agree because $\Delta(h)=\Delta^{\mathrm{op}}(h)$; the flip is natural for module maps; and each of the two hexagon composites sends a pure triple tensor to the same reordered pure tensor. The pure tensors span, so this is the symmetric module braiding associated with $R$. [given, F2, F3, F5, algebra, step 3.1] ∎
