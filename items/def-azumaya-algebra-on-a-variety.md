---
id: def-azumaya-algebra-on-a-variety
kind: definition
title: "Azumaya algebra on a variety"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-scheme-over-base
  - def-locally-free-sheaf-finite-rank
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §§6.6.15–6.6.19"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Azumaya algebras, their Brauer classes, and the comparison with the cohomological Brauer group."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §2.1"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Azumaya-algebra definition and local evaluation."
verification: {}
---

## Definition

Let $X$ be a scheme and let $n\ge1$. An **Azumaya algebra of degree $n$ on
$X$** is a sheaf $\mathcal A$ of unital $\mathcal O_X$-algebras that is locally
free of rank $n^2$ as an $\mathcal O_X$-module and for which the canonical
homomorphism
$$\mathcal A\otimes_{\mathcal O_X}\mathcal A^{\mathrm{op}}
\longrightarrow\mathcal E nd_{\mathcal O_X}(\mathcal A),\qquad
a\otimes b\longmapsto(c\mapsto acb)$$
is an isomorphism. Two Azumaya algebras are Brauer equivalent if, after
tensoring each with an endomorphism algebra of a positive-rank finite-rank
locally free $\mathcal O_X$-module, they become isomorphic. Their equivalence classes form
the Azumaya Brauer group $\operatorname{Br}_{\mathrm{Az}}(X)$ under tensor
product.

## Definition references

[[def-scheme-over-base|Schemes and morphisms over a base]]

[[def-locally-free-sheaf-finite-rank|Finite-rank locally free modules]]

[Poonen, §§6.6.15–6.6.19](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §2.1](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

## Facts & Assumptions

**Given:** A scheme $X$ and a positive integer $n$.

[F1] An $X$-scheme is a scheme equipped with a morphism to $X$.
[[def-scheme-over-base]]

[F2] A finite-rank locally free sheaf has an endomorphism algebra and is
locally free on open subsets. [[def-locally-free-sheaf-finite-rank]]

## Proof

**Proof technique:** check that the defining local algebra condition gives
the displayed class group.

**Given:** The data above and the Azumaya algebras in the Definition.

1.1 The displayed map is the action of the algebra and its opposite on the
underlying module. The Definition requires it to be an isomorphism and the
module rank to be $n^2$, so the degree and Azumaya condition are unambiguous
under restriction to every open subset of $X$. [given, F1]

1.2 Tensor products preserve the defining canonical-map isomorphism because
$(\mathcal A\otimes\mathcal B)\otimes(\mathcal A\otimes\mathcal B)^{\mathrm{op}}$
reorders as $(\mathcal A\otimes\mathcal A^{\mathrm{op}})\otimes
(\mathcal B\otimes\mathcal B^{\mathrm{op}})$, and
$\mathcal E nd(\mathcal A)\otimes\mathcal E nd(\mathcal B)\cong
\mathcal E nd(\mathcal A\otimes\mathcal B)$. Stable equivalence is
reflexive and symmetric. For transitivity, suppose
$\mathcal A\otimes\mathcal E nd(E_1)\cong
\mathcal B\otimes\mathcal E nd(F_1)$ and
$\mathcal B\otimes\mathcal E nd(E_2)\cong
\mathcal C\otimes\mathcal E nd(F_2)$. Tensor the first isomorphism with
$\mathcal E nd(E_2)$ and the second with $\mathcal E nd(F_1)$. The middle
terms agree after swapping the two endomorphism-algebra factors, and
$\mathcal E nd(E)\otimes\mathcal E nd(F)\cong
\mathcal E nd(E\otimes F)$; composing gives
$\mathcal A\otimes\mathcal E nd(E_1\otimes E_2)\cong
\mathcal C\otimes\mathcal E nd(F_2\otimes F_1)$.
Tensor product therefore descends to the equivalence classes; the swap map
$\mathcal A\otimes\mathcal B\to\mathcal B\otimes\mathcal A$ is an algebra
isomorphism, so this group is abelian. The identity
is $\mathcal O_X$, and $\mathcal A^{\mathrm{op}}$ is an inverse because the
canonical map in the Definition identifies
$\mathcal A\otimes\mathcal A^{\mathrm{op}}$ with
$\mathcal E nd(\mathcal A)$. Thus the stated classes form an abelian group.
[F2, given, step 1.1, algebra] ∎
