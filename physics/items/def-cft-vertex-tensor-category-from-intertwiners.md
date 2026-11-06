---
id: def-cft-vertex-tensor-category-from-intertwiners
kind: definition
title: "P(1)-based braided monoidal structure from HLZ intertwiners"
status: published
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-intertwining-operator-space
  - def-cft-hlz-strongly-graded-generalized-module
  - def-cft-pz-tensor-product
  - lem-cft-pz-parallel-transport
  - def-cft-hlz-convergence-extension-property
  - def-monoidal-category
  - def-natural-isomorphism
  - def-vertex-algebra-module
  - def-fusion-and-multifusion-category
  - def-braiding
dependency_roles:
  "def-cft-intertwining-operator-space": mathematical-premise
  "def-cft-hlz-strongly-graded-generalized-module": mathematical-premise
  "def-cft-pz-tensor-product": mathematical-premise
  "lem-cft-pz-parallel-transport": mathematical-premise
  "def-cft-hlz-convergence-extension-property": mathematical-premise
  "def-monoidal-category": mathematical-premise
  "def-natural-isomorphism": mathematical-premise
  "def-vertex-algebra-module": mathematical-premise
  "def-fusion-and-multifusion-category": mathematical-premise
  "def-braiding": mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part VIII, §12.2 and Theorem 12.15"
      url: "https://arxiv.org/pdf/1110.1931v2"
    - title: "Christophe Nozaradan, Introduction to Vertex Algebras"
      url: "https://arxiv.org/pdf/0809.1380v3"
    - title: "Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 5
---

## Definition

This item specifies the P(1)-based braided monoidal structure associated with HLZ vertex-tensor data; it does not define every additional analytic axiom of the full vertex tensor category formalism. Let V be a strongly graded Möbius or conformal vertex algebra and C a specified full category of its strongly graded generalized modules, with V an object of C. For each z∈C×, a P(z)-tensor product bifunctor is a bifunctor $\boxtimes_{P(z)}:C\times C\to C$ with a natural universal P(z)-intertwining map $\iota_{z;X,Y}:X\otimes Y\to\overline{X\boxtimes_{P(z)}Y}$ such that, for every U∈C, composition with $\iota_{z;X,Y}$ gives a natural bijection
$$\operatorname{Hom}_C(X\boxtimes_{P(z)}Y,U)\cong\mathcal M[P(z)]_U^{X,Y}.$$
The family is equipped with natural parallel-transport isomorphisms $T_\gamma:\boxtimes_{P(z_1)}\to\boxtimes_{P(z_2)}$ for paths γ in C×, with identity transport on constant paths, composition under path concatenation, inverse transport on reversed paths, and dependence only on endpoint-fixed homotopy class, as in [[lem-cft-pz-parallel-transport]].

Set $X\boxtimes Y=X\boxtimes_{P(1)}Y$. The associated braided monoidal structure consists of the tensor bifunctor $\boxtimes$, unit object V, natural unit isomorphisms $\lambda_X:V\boxtimes X\to X$ and $\rho_X:X\boxtimes V\to X$, a natural associativity isomorphism $\alpha_{X,Y,Z}:(X\boxtimes Y)\boxtimes Z\to X\boxtimes(Y\boxtimes Z)$, and a natural braiding isomorphism $c_{X,Y}:X\boxtimes Y\to Y\boxtimes X$. These maps are the actual universal maps induced by the stipulated analytic continuation and parallel transport; their existence is a separate theorem or hypothesis. They must satisfy the pentagon and triangle equations of [[def-monoidal-category]] and the two hexagon equations of [[def-braiding]]. These are the exact braided monoidal axioms. Additivity, abelianity, rigidity, a twist, finite-dimensionality of intertwiner spaces, and nondegeneracy are separate properties or structures.

In a specified finite semisimple category, a fusion multiplicity is $\dim I\binom{W_k}{W_i\ W_j}$ when that ordinary intertwining-operator space is finite dimensional, as in [[def-cft-intertwining-operator-space]].

## Facts & Assumptions

**Given:** Work over C with the formal-variable, grading, and branch conventions in the linked definitions.

[F1] [[def-cft-intertwining-operator-space]]: For ordinary modules W1,W2,W3 of a conformal vertex algebra V, let I( W3 ; W1 W2 ) be the vector space of logarithm-free formal intertwining operators of that type, with the Jacobi, lower-truncation, and L(-1)-derivative conditions of def-cft-logarithmic-intertwining-operator and the ordinary grading convention. In a specified finite semisimple category its fusion multiplicity is dim I( Wk ; Wi Wj ) when that dimension is finite. Finite-dimensionality is a separate theorem, not part of this definition.

[F2] [[def-vertex-algebra-module]]: Let $V$ be a vertex algebra over $\mathbb C$ in the ordinary, non-super convention of def-vertex-algebra-state-field. A **left $V$-module** is a complex vector space $M$ and a linear map $$ Y_M(-,z):V\longrightarrow \{\text{formal fields on }M\},\qquad a\longmapsto Y_M(a,z)=\sum_{n\in\mathbb Z}a^M_{(n)}z^{-n-1}, $$ with the following properties: 1. **Lower truncation.** For every $a\in V$ and $m\in M$, $a^M_{(n)}m=0$ for all sufficiently large integers $n$, so $Y_M(a,z)m\in M((z))$ in the support convention of def-formal-distribution-on-a-vector-space. 2. **Vacuum.** $Y_M(\mathbf1,z)=\operatorname{id}_M$. 3. **Module Jacobi identity.** For every $a,b\in V$, $$ z_0^{-1}\delta\!\left(\frac{z_1-z_2}{z_0}\right)Y_M(a,z_1)Y_M(b,z_2)-z_0^{-1}\delta\!\left(\frac{z_2-z_1}{-z_0}\right)Y_M(b,z_2)Y_M(a,z_1)=z_2^{-1}\delta\!\left(\frac{z_1-z_0}{z_2}\right)Y_M(Y(a,z_0)b,z_2). $$ Here $\delta(x)=\sum_{r\in\mathbb Z}x^r$; the first expansion is in nonnegative powers of $z_2$, the second in nonnegative powers of $z_1$, and the right-hand expansion is in nonnegative powers of $z_0$. They use the formal binomial conventions of def-formal-distribution-on-a-vector-space. The $Y$ inside the right-hand side is the state-field map of $V$; it is not the action map $Y_M$. A **$V$-module homomorphism** $f:M\to N$ is a linear map such that $fY_M(a,z)=Y_N(a,z)f$ for every $a\in V$. This definition does not impose a conformal grading, finite-dimensional weight spaces, semisimplicity of $L_0$, a right-module convention, or a twist by an automorphism. For a conformal vertex algebra, write $Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}$ when a conformal vector $\omega$ is specified. A **$V$-submodule** of $M$ is a linear subspace stable under every mode $a^M_{(n)}$. A module is **simple** (or **irreducible**) if it is nonzero and has no proper nonzero $V$-submodule. A module is **completely reducible** (or **semisimple**) if it is an internal direct sum of simple $V$-submodules; the empty direct sum is the zero module.

[F3] [[def-fusion-and-multifusion-category]]: A **multifusion category** is a finite semisimple multitensor category. A **fusion category** is a finite semisimple tensor category. In particular the unit of a fusion category is simple, whereas a multifusion unit may split.

[F4] [[def-braiding]]: Let $(\mathcal C,\otimes,\mathbf 1,\alpha,\lambda,\rho)$ be a monoidal category (def-monoidal-category). A **braiding** on $\mathcal C$ is a natural isomorphism $$c_{X,Y}:X\otimes Y\longrightarrow Y\otimes X$$ natural in both variables (def-natural-isomorphism) such that, for all objects $X,Y,Z$, $$\alpha_{Y,Z,X}\circ c_{X,Y\otimes Z}\circ\alpha_{X,Y,Z}=(1_Y\otimes c_{X,Z})\circ\alpha_{Y,X,Z}\circ(c_{X,Y}\otimes1_Z),$$ and $$\alpha_{Z,X,Y}^{-1}\circ c_{X\otimes Y,Z}\circ\alpha_{X,Y,Z}^{-1}=(c_{X,Z}\otimes1_Y)\circ\alpha_{X,Z,Y}^{-1}\circ(1_X\otimes c_{Y,Z}).$$ These are the two **hexagon identities**. The invertibility of each $c_{X,Y}$ is part of the data, not a consequence of the hexagons.

[F5] [[def-cft-pz-tensor-product]] gives the exact P(z)-representing bijection; [[lem-cft-pz-parallel-transport]] gives the path transport maps and their composition and homotopy laws; [[def-cft-hlz-convergence-extension-property]] specifies the binary product and iterate analytic continuation forms.

[F6] [[def-monoidal-category]] defines a monoidal category by a tensor bifunctor, a unit object, natural associator and unit isomorphisms satisfying the pentagon and triangle. Its pentagon is $$\alpha_{W,X,Y\otimes Z}\circ\alpha_{W\otimes X,Y,Z}=(1_W\otimes\alpha_{X,Y,Z})\circ\alpha_{W,X\otimes Y,Z}\circ(\alpha_{W,X,Y}\otimes1_Z),$$ and its triangle is $$(1_X\otimes\lambda_Y)\circ\alpha_{X,\mathbf1,Y}=\rho_X\otimes1_Y.$$

## Proof

1.1 The tensor bifunctor, unitors, associator and braiding are explicit structure maps, while their universal or analytic constructions require the stated suppliers. [given, F1, F2, F4, F5, F6, algebra]

2.1 Rigidity, finite fusion spaces, semisimplicity, and nondegeneracy therefore require separate proofs before they are attributed to a particular module category. [given, F1, F3, F4, step 1.1, algebra] ∎
