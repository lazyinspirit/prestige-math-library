---
id: thm-temperley-lieb-rank-one-tilting-quotient-fusion-category
kind: theorem
title: "The rank-one tilting quotient is the truncated fusion category"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-temperley-lieb-rank-one-lusztig-tilting-category
  - lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations
  - lem-temperley-lieb-rank-one-tilting-character-and-dimension
  - lem-negligible-morphisms-form-a-tensor-ideal-by-partial-trace
  - def-negligible-morphism-in-a-pivotal-category
  - thm-basic-properties-of-the-categorical-trace
  - thm-in-a-spherical-category-the-left-and-right-traces-agree
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity"
      url: "https://arxiv.org/pdf/math/0308281"
      locator: "Theorem 5 and full proof, printed pp. 25–26: semisimple ribbon quotient of the type-1 tilting category."
    - title: "Henning Haahr Andersen and Daniel Tubbenhauer, Diagram Categories for Uq-Tilting Modules at Roots of Unity"
      url: "https://arxiv.org/pdf/1409.2799"
      locator: "§§2.4–2.5 and §4.4, PDF pp. 10–16 and 41–46: rank-one tilting characters and diagram quotient comparison."
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§4.7, Theorem 4.7.15, printed pp. 109–110: spherical left/right trace comparison over an algebraically closed field."
verification:
  precheck: escalated
---

## Statement

Let $\mathcal T_\ell$ be the finite-dimensional integrable type-1 tilting category of [[def-temperley-lieb-rank-one-lusztig-tilting-category]], with the specified ribbon pivotal structure, and let $\mathcal N_\ell$ be its negligible tensor ideal. The quotient $\mathcal T_\ell/\mathcal N_\ell$ has the same objects and morphism spaces $\operatorname{Hom}_{\mathcal T_\ell}(X,Y)/\mathcal N_\ell(X,Y)$. It is a finite semisimple ribbon category whose simple objects are the classes of $T(0),\ldots,T(\ell-2)$; their pivotal dimensions are $[a+1]_q$. Its fusion rule is

Write $[T(a)]$ for the image of $T(a)$ in the negligible quotient. In the finite semisimple ribbon conclusion, “fusion category” means a $\mathbb C$-linear rigid semisimple monoidal category with simple unit and finitely many simple isomorphism classes. The fusion rule is

$$[T(a)][T(b)]=\sum_{\substack{|a-b|\le c\le\min(a+b,\,2\ell-4-a-b)\\c\equiv a+b\ (2)}}[T(c)]\qquad(0\le a,b\le\ell-2),$$

where an empty sum is zero. The quotient is rigid, has simple tensor unit $T(0)$, and inherits the ribbon structure. The tensor-ideal and conditional dimension calculations are recorded below; the local tilting-filtration/linkage argument that proves semisimplicity, exhausts the simple classes, and derives the fusion multiplicities has not been completed. The full theorem remains escalated.

## Facts & Assumptions

**Given:** The root-of-unity divided-power category and negligible-morphism convention.

[F1] The category and its Weyl/dual-Weyl/tilting meanings use the stated full weight-lattice ribbon extension ([[def-temperley-lieb-rank-one-lusztig-tilting-category]]).

[F2] Negligible morphisms are defined by vanishing of all pivotal trace pairings ([[def-negligible-morphism-in-a-pivotal-category]]).

[F3] The local partial-trace argument proves negligible morphisms form a two-sided tensor ideal ([[lem-negligible-morphisms-form-a-tensor-ideal-by-partial-trace]]).

[F4] The proposed rank-one tilting character formula gives dimension zero outside $0\le a\le\ell-2$, and positive nonzero dimension $[a+1]_q$ in that range; the character derivation itself is explicitly unresolved ([[lem-temperley-lieb-rank-one-tilting-character-and-dimension]]).

[F5] In an algebraically closed field, a pivotal category with the stated duality convention has equal left and right traces when it is spherical ([[thm-in-a-spherical-category-the-left-and-right-traces-agree]]).

## Proof

**Proof technique:** pass to the trace-radical quotient and derive the retained labels and tensor products from rank-one highest-weight filtrations.

1.1 Theorem [F3] makes the negligible morphisms a two-sided tensor ideal, so the quotient category has induced composition and tensor product: changing a representative by a negligible morphism changes any composite or tensor by a negligible morphism. The definition [F2] makes the identity of an object negligible exactly when every endomorphism trace pairing on that object vanishes. [F2, F3, given, algebra]

1.2 The dimension calculation in [F4] predicts that the classes with labels $a\ge\ell-1$ have zero categorical dimension and that the labels $0\le a\le\ell-2$ have nonzero dimension. This calculation alone does not prove that the former identities are negligible, that the latter objects are simple in the quotient, or that the quotient is semisimple. Those implications require the missing Ext/linkage and endomorphism-radical arguments identified in [F4]. [F2, F4, step 1.1]

2.1 No local proof is supplied here for the claimed fusion multiplicities, rigidity of the quotient, or fullness of the retained simple list. The source theorem uses precisely the rank-one tilting character and linkage results left unproved in the preceding carriers. Therefore the complete conclusion in the Statement is retained but escalated, with those three claims as unresolved proof obligations. [F1, F3, F4, F5, step 1.2]
