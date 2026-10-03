---
id: lem-block-projection-preserves-projectives
kind: lemma
title: "Exact projections onto linkage blocks preserve projectives"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-projective-object
  - lem-extensions-between-distinct-o-linkage-classes-split
  - lem-o-modules-split-across-separated-simple-classes
  - thm-category-o-decomposes-by-generalized-central-character
  - thm-central-character-summands-split-into-linkage-blocks
  - thm-projective-object-characterisations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Sec. 16.1-16.3"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§16.1-16.3, block decomposition and projectivity of the summands, printed pp. 84-87 (full text read at harvest)"
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8, Sec. 4"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf
      locator: "§4, printed pp. 6-8 (projectives in a block and the block decomposition; full text read at harvest)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $C$ be a linkage
class and let $\operatorname{pr}_C:\mathcal O\to\mathcal O_C$ be the exact
projection of the block decomposition of
[[thm-central-character-summands-split-into-linkage-blocks]], i.e. the functor
that keeps the direct summand supported on $C$.

If $P\in\mathcal O$ is projective
([[def-projective-object]]), then $\operatorname{pr}_C(P)$ is projective in
$\mathcal O$. Conversely, if $Q\in\mathcal O_C$ is projective in the full
subcategory $\mathcal O_C$, then $Q$ is projective in $\mathcal O$. The proof
is the two adjunction identities
$\operatorname{Hom}_{\mathcal O}(\operatorname{pr}_CP,X)=\operatorname{Hom}_{\mathcal O}(P,X)$
for $X\in\mathcal O_C$ and
$\operatorname{Hom}_{\mathcal O}(Q,X)=\operatorname{Hom}_{\mathcal O_C}(Q,\operatorname{pr}_CX)$
for general $X\in\mathcal O$, together with exactness of
$\operatorname{pr}_C$; these reduce exactness of $\operatorname{Hom}$ to the
corresponding exactness in $\mathcal O_C$ or in $\mathcal O$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a linkage class $C$, and the block decomposition of $\mathcal O$ into the subcategories $\mathcal O_C$.

[F1] Partition the simple labels into the linkage classes. Every extension of two simples from distinct classes splits, in either order ([[lem-extensions-between-distinct-o-linkage-classes-split]]); consequently every object $X$ of $\mathcal O$ has a unique decomposition $X=\bigoplus_C X_C$ into subobjects whose composition factors lie in $C$, with finitely many nonzero terms, functorial in $X$, and every morphism between objects supported on disjoint collections of classes is zero ([[lem-o-modules-split-across-separated-simple-classes]], [[thm-central-character-summands-split-into-linkage-blocks]]). Write $X_C=\operatorname{pr}_C(X)$ and let $i_C$ be the embedding of the full subcategory $\mathcal O_C$ ([[thm-category-o-decomposes-by-generalized-central-character]]). In particular $P\cong\operatorname{pr}_C(P)\oplus\bigoplus_{D\neq C}\operatorname{pr}_D(P)$.

[F2] An object $P$ of an abelian category is projective precisely when $\operatorname{Hom}(P,-)$ preserves epimorphisms, equivalently is exact; and every epimorphism onto a projective splits ([[def-projective-object]], [[thm-projective-object-characterisations]]).

[F3] In an abelian category, finite direct sums are biproducts: for morphisms $f_D:X_D\to Y_D$ the kernel and image of the block-diagonal morphism $\bigoplus_Df_D$ are $\bigoplus_D\ker f_D$ and $\bigoplus_D\operatorname{im}f_D$, so a chain complex of decomposed objects with block-diagonal differentials is exact exactly when each $D$-component is exact.

## Proof

**Proof technique:** direct, through the functorial block decomposition and the $\operatorname{Hom}$ characterisation of projectivity.

1.1 By [F1] every object $X$ is $\bigoplus_CX_C$ with finitely many nonzero terms, the decomposition is functorial, and morphisms between objects supported on disjoint collections of classes vanish. Hence a morphism $f:X\to Y$ between decomposed objects is block diagonal, $f=\bigoplus_Cf_C$ with $f_C:X_C\to Y_C$. [given, F1]

1.2 By [F2] the projectivity of $P$ in $\mathcal O$ says exactly that $\operatorname{Hom}_{\mathcal O}(P,-)$ is exact on $\mathcal O$, and the hypothesis on $Q$ says that $\operatorname{Hom}_{\mathcal O_C}(Q,-)$ is exact on $\mathcal O_C$. [given, F2]

2.1 Apply [F3] to the block-diagonal differentials of step 1.1: a short exact sequence $0\to A\to E\to B\to0$ in $\mathcal O$ decomposes into the short exact sequences $0\to A_C\to E_C\to B_C\to0$ of its components, and conversely exactness of all components gives exactness of the sequence. Therefore $\operatorname{pr}_C$ is an exact functor $\mathcal O\to\mathcal O_C$, and $i_C$ is exact as the inclusion of a full subcategory closed under subobjects and quotients. [F3, step 1.1, algebra]

2.2 For $A\in\mathcal O_C$ and any $X\in\mathcal O$, decomposing $X$ and using the vanishing of morphisms from $A$ into components supported on other classes gives a natural isomorphism $\operatorname{Hom}_{\mathcal O}(A,X)\cong\operatorname{Hom}_{\mathcal O_C}(A,\operatorname{pr}_CX)$; here $\operatorname{Hom}_{\mathcal O}(i_CA,X)$ is written $\operatorname{Hom}_{\mathcal O}(A,X)$. Similarly, for $Y\in\mathcal O_C$, decomposing $P$ gives $\operatorname{Hom}_{\mathcal O}(P,\operatorname{pr}_CY)\cong\operatorname{Hom}_{\mathcal O}(\operatorname{pr}_CP,\operatorname{pr}_CY)$, because all components of $P$ other than $\operatorname{pr}_CP$ map to zero into the object $\operatorname{pr}_CY$ of $\mathcal O_C$. [given, F1, step 1.1]

3.1 Let $P\in\mathcal O$ be projective. Composing the isomorphisms of step 2.2, for every $X\in\mathcal O$ there is a natural isomorphism $\operatorname{Hom}_{\mathcal O}(\operatorname{pr}_CP,X)\cong\operatorname{Hom}_{\mathcal O_C}(\operatorname{pr}_CP,\operatorname{pr}_CX)\cong\operatorname{Hom}_{\mathcal O}(P,\operatorname{pr}_CX)$. Now $X\mapsto\operatorname{pr}_CX$ is exact by step 2.1 and $\operatorname{Hom}_{\mathcal O}(P,-)$ is exact by step 1.2, so the composite functor $X\mapsto\operatorname{Hom}_{\mathcal O}(\operatorname{pr}_CP,X)$ is exact. By [F2] applied in $\mathcal O$, $\operatorname{pr}_CP$ is projective in $\mathcal O$. [F2, step 1.2, step 2.1, step 2.2]

4.1 Conversely let $Q\in\mathcal O_C$ be projective in $\mathcal O_C$. By step 2.2, for every $X\in\mathcal O$ there is a natural isomorphism $\operatorname{Hom}_{\mathcal O}(Q,X)\cong\operatorname{Hom}_{\mathcal O_C}(Q,\operatorname{pr}_CX)$. The first functor is the composite of the exact functor $\operatorname{pr}_C$ of step 2.1 with the exact functor $\operatorname{Hom}_{\mathcal O_C}(Q,-)$ of step 1.2, hence is exact; by [F2], $Q$ is projective in $\mathcal O$. [F2, step 1.2, step 2.1, step 2.2] ∎
