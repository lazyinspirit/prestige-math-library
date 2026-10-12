---
id: thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes
kind: theorem
title: "Middle perverse t structure glues and has simple intersection complexes"
status: draft
origin: session
deps: ["thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes", "lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative", "thm-constructible-six-functors-proper-base-change-and-verdier-duality"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "BBD §§1.4 and 2.1; Bernstein–Lunts Part I, finite resolution construction"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
---

## Statement

Assume AC and let $k$ be a characteristic-zero field. On complex algebraically constructible derived categories, middle perversity is defined on smooth complex strata $S$ by $H^q(i_S^*A)=0$ for $q>-\dim_\mathbb C S$ and $H^q(i_S^!A)=0$ for $q<-\dim_\mathbb C S$. These inequalities give a bounded t structure, independent of compatible refinement, gluing across algebraic open/closed decompositions. The equivariant structure is detected by restriction to X. Its heart is abelian of finite length; its simples are intermediate extensions $\operatorname{IC}_Z(L)=j_{!*}L[\dim_\mathbb C Z]$ of simple finite-rank local systems on dense smooth opens of irreducible supports, with equivariant data in the equivariant category. If A,B lie in the heart, $\operatorname{Hom}(A,B[m])=0$ for $m<0$. A simple object's endomorphism ring is a division k-algebra, not asserted to equal k.

## Facts & Assumptions

**Given:** AC and the coefficient, variety, bounds and maps specified in the Statement.

[F1] The actual stated local construction of [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]] is used with its explicit hypotheses.

[F2] The actual stated local construction of [[lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative]] is used with its explicit hypotheses.

[F3] The actual stated local construction of [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]] is used with its explicit hypotheses.

## Proof

1.1 The ordinary middle-perverse core proves the complete ordinary statement, including support/cosupport, dual aisles, gluing, IC characterization, finite length and negative Hom. Its proof uses only the ordinary six operations and actual geometric models. The Stiefel-normalization bridge constructs the equivariant perverse t structure from those ordinary inequalities, with t-exact conservative restriction to X and normalized finite-resolution comparison. [given, F1, F2, F3]

1.2 The heart of the equivariant t structure is abelian by the same truncation kernel/cokernel proof. Restriction to X is exact and conservative on that heart. Therefore any strictly increasing or decreasing subobject chain gives such a chain in the finite-length ordinary heart, proving finite length. Negative Hom is ordinary t-structure orthogonality in the actual equivariant derived category; a nonzero endomorphism of a simple object has zero kernel and full image and is invertible, giving its division algebra. [given, F1, F2, F3]

2.1 The equivariant six operations give both open/closed localization triangles and the intermediate-extension image construction. Apply the ordinary core recollement argument inside the now constructed equivariant t structure: the intermediate image has no boundary subobject or quotient; an equivariant simple local system on a dense smooth open gives a simple intermediate extension, and each simple heart object is obtained this way by its maximal smooth local-system locus. Connected GL preserves the irreducible support components and that intrinsic open locus. Degree-zero equivariant Hom is computed by the actual internal-Hom adjunction and general simplicial augmentation; ordinary perverse negative local Hom makes its rows nonnegative. On G×X the two descent pullbacks of a morphism agree at the identity and, since G is connected, in all degree-zero product sections. Thus the forgetful heart functor is fully faithful on equivariant objects, consistent with the simple-local-system formulation. This is heart full faithfulness, not derived full faithfulness. [given, F1, F2, F3] ∎

## Source notes

Research draft from the exact named local inputs. Ordinary geometric constructions retain their current draft/open status; this carries no native acceptance or independent audit.
