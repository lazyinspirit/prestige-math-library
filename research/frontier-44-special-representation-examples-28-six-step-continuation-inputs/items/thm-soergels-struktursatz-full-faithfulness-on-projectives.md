---
id: thm-soergels-struktursatz-full-faithfulness-on-projectives
kind: theorem
title: "Soergel's Struktursatz: the functor V is fully faithful on projectives"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra,
       def-the-antidominant-projective-and-the-soergel-functor,
       lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle,
       lem-finite-dimensional-tensors-reach-every-block-simple,
       prop-projective-covers-in-o-are-indecomposable-and-unique,
       def-axiom-of-choice,
       lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label,
       prop-restricted-duality-is-an-exact-involution-on-category-o,
       thm-verma-homomorphism-spaces-have-dimension-at-most-one,
       thm-bgg-verma-homomorphism-criterion,
       def-the-coinvariant-algebra-of-a-finite-weyl-group,
       thm-simple-objects-of-category-o-are-highest-weight-modules,
       thm-bgg-reciprocity,
       def-wall-crossing-functor-and-unit-counit,
       prop-translation-functors-are-exact-and-biadjoint-across-a-wall,
       thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group,
       cor-antidominant-verma-modules-are-simple]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.3, Struktursatz 9 with Lemma 5 and Lemma 6 (preprint pp. 14-17)"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Theorem 4.19(1) (Struktursatz) and Corollary 4.21(1): V restricts to an equivalence Proj(O_0) -> ungraded Soergel modules"
    - title: "Jonathan Brundan, Representations of the general linear Lie superalgebra in the BGG category O (survey; Section 4 with Soergel's Endomorphismensatz and Struktursatz)"
      url: "https://darkwing.uoregon.edu/~brundan/papers/supero.pdf"
      locator: "Section 4, Theorem 4.2 (Soergel's Struktursatz): V_0 is fully faithful on projectives"
---

## Statement

Assume the Axiom of Choice. Let $\mathcal O_\lambda$ be a regular integral block
with antidominant projective $P=P(w_0\cdot\lambda)$ and Soergel functor
$V=\operatorname{Hom}_{\mathcal O}(P,-)$, and let $C$ be the coinvariant
algebra, identified with $\operatorname{End}_{\mathcal O}(P)$ by
[[thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra]],
so that $V$ takes values in $C$-modules. Then for every $M\in\mathcal O_\lambda$
and every projective $Q\in\mathcal O_\lambda$ the canonical map
$$V\colon \operatorname{Hom}_{\mathcal O_\lambda}(M,Q)\longrightarrow \operatorname{Hom}_{C\text{-mod}}(VM,VQ)$$
is an isomorphism. In particular $V$ is fully faithful on the full subcategory
of projective objects of the block, and it is faithful on all of
$\mathcal O_\lambda$ after passing to the quotient by the Serre subcategory of
objects killed by $V$.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the regular integral block of [[def-the-antidominant-projective-and-the-soergel-functor]] with its projective-injective $P=P(w_0\cdot\lambda)$, the coinvariant algebra $C$ with $\operatorname{End}(P)\cong C$, and $V=\operatorname{Hom}(P,-)$.

[F1] $\operatorname{End}_{\mathcal O}(P)\cong C$ and $VP\cong C$ with its regular $C$-module structure; $C$ is finite dimensional over $\mathbb C$, local with maximal ideal $C_+$ and residue field $\mathbb C$, and has one-dimensional socle $C^{C_+}$; also $\operatorname{Hom}_C(\mathbb C,C)\cong\mathbb C$ and $\operatorname{Hom}_C(\mathbb C,\mathbb C)\cong\mathbb C$ ([[thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra]], [[def-the-coinvariant-algebra-of-a-finite-weyl-group]], [[lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle]]).

[F2] $P$ is projective and injective, and
$\dim\operatorname{Hom}_{\mathcal O}(L(x\cdot\lambda),P)=\dim\operatorname{Hom}_{\mathcal O}(P,L(x\cdot\lambda))=1$
for $x=w_0$ and $0$ otherwise: the projective cover property gives the head and the injectivity gives the socle, every simple submodule of a Verma of the regular block being the antidominant simple $L(a)=L(w_0\cdot\lambda)=M(a)$ with multiplicity one ([[def-the-antidominant-projective-and-the-soergel-functor]], [[cor-antidominant-verma-modules-are-simple]], [[thm-bgg-verma-homomorphism-criterion]], [[thm-verma-homomorphism-spaces-have-dimension-at-most-one]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]], [[prop-restricted-duality-is-an-exact-involution-on-category-o]], [[thm-bgg-reciprocity]], [[lem-finite-dimensional-tensors-reach-every-block-simple]]).

[F3] $V$ is exact, and $\dim\operatorname{Hom}(P,\Delta(w\cdot\lambda))=1$ for every $w$: $P$ is generated by a lift of its head, $\Delta(\lambda)$ has one-dimensional socle $L(a)$, and the composite $P\twoheadrightarrow L(a)\hookrightarrow\Delta(\lambda)$ spans the one-dimensional Hom space ([[def-the-antidominant-projective-and-the-soergel-functor]], [[thm-simple-objects-of-category-o-are-highest-weight-modules]], [[thm-bgg-reciprocity]]). Consequently $V\Delta(\lambda)\cong\mathbb C$ with the trivial $C$-action and $VL(x\cdot\lambda)=0$ for $x\ne w_0$, $VL(w_0\cdot\lambda)\cong\mathbb C$ with the trivial action, the action on a one-dimensional $C$-module being the unique character of the local algebra $C$.

[F4] Every projective of the block is a direct summand of $F(\Delta(\lambda))$ for some composite $F$ of wall-crossing functors ([[lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label]], [[thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group]]); such an $F$ is exact and biadjoint, with a left adjoint $G$ that is again a composite of wall functors, and $F(P)$ and $G(P)$ are finite direct sums of copies of $P$, because they are projective-injective objects of $\mathcal O_\lambda$ built from $P$ by finite-dimensional tensoring and block projections ([[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]], [[def-wall-crossing-functor-and-unit-counit]], [F2]).

## Proof

**Proof technique:** direct.

1.1 For the target $P$ the comparison holds on simples: $\operatorname{Hom}(L(x\cdot\lambda),P)$ is one-dimensional for $x=w_0$ and zero otherwise by [F2], and $\operatorname{Hom}_C(VL(x\cdot\lambda),C)$ is $\operatorname{Hom}_C(\mathbb C,C)\cong\mathbb C$ for $x=w_0$ and zero otherwise by [F3] and [F1], the canonical map being nonzero at $x=w_0$ because the composite $P\twoheadrightarrow L(a)\hookrightarrow P$ is a nonzero endomorphism. [F1, F2, F3]

1.2 For the target $\Delta(\lambda)$ the comparison holds on simples: $\operatorname{Hom}(L(x\cdot\lambda),\Delta(\lambda))$ is one-dimensional for $x=w_0$ and zero otherwise because the socle of the Verma $\Delta(\lambda)$ is $L(a)$ by [F2], and $\operatorname{Hom}_C(VL(x\cdot\lambda),V\Delta(\lambda))$ equals $\operatorname{Hom}_C(\mathbb C,\mathbb C)\cong\mathbb C$ for $x=w_0$ and $\operatorname{Hom}_C(0,-)=0$ otherwise by [F3]. [F1, F2, F3]

1.3 The exact functor $V$ induces an equivalence between the Serre quotient $\mathcal O_\lambda/\ker V$ and the category of finite-dimensional $C$-modules: the left adjoint of the quotient functor is $N\mapsto P\otimes_CN$, one has $V(P\otimes_CN)\cong\operatorname{Hom}(P,P)\otimes_CN\cong N$ by the Yoneda isomorphism $VP\cong C$, and the counit $P\otimes_CVM\to M$ becomes the identity under $V$, so its kernel and cokernel are killed by $V$ and the unit and counit identities prove the equivalence and the faithfulness of $V$ on the quotient. [F1, F3, algebra]

1.4 The word $F$ and its adjoint $G$ of [F4] send $P$ to finite sums of copies of $P$, so they preserve the subcategory $\ker V$: if $VX=0$ then $V(FX)=\operatorname{Hom}(P,FX)\cong\operatorname{Hom}(GP,X)\cong\bigoplus\operatorname{Hom}(P,X)=0$ by adjunction, and likewise for $G$ using the other adjunction. [F4]

2.1 Since $V$ is exact and $\operatorname{Hom}(P,-)$ and $\operatorname{Hom}_C(V-,C)$ are left exact contravariant functors of $M$ that agree on simples by step 1.1, finite composition-series induction gives a natural isomorphism $\operatorname{Hom}(M,P)\cong\operatorname{Hom}_C(VM,C)$ for every $M$. [F3, step 1.1]

2.2 Likewise $\operatorname{Hom}(M,\Delta(\lambda))\cong\operatorname{Hom}_C(VM,V\Delta(\lambda))$ for every $M$: both sides are left exact contravariant in $M$ and agree on simples by step 1.2. [step 1.2]

3.1 For a word $F$ with adjoint word $G$ as in [F4], $\operatorname{Hom}(M,F\Delta(\lambda))\cong\operatorname{Hom}(GM,\Delta(\lambda))\cong\operatorname{Hom}_C(VGM,V\Delta(\lambda))\cong\operatorname{Hom}_C(VM,VF\Delta(\lambda))$, where the first and last steps are the adjunctions and the middle is step 2.2; the last identification uses that the adjunction descends to the quotient of step 1.3, since both $F$ and $G$ preserve $\ker V$ by step 1.4, and the canonical maps are the original composition maps. [step 1.3, step 1.4, step 2.2]

4.1 Let $Q$ be any projective and choose $F$ with $Q$ a direct summand of $F\Delta(\lambda)$ as in [F4]; the natural isomorphism of step 3.1 restricts along the summand idempotent, which is intertwined with its image under $V$, so additivity gives $\operatorname{Hom}(M,Q)\cong\operatorname{Hom}_C(VM,VQ)$ for every $M$ and every projective $Q$, i.e. $V$ is fully faithful on the full subcategory of projective objects. [F4, step 3.1]

5.1 By step 1.3 the functor $V$ is faithful and full on $\mathcal O_\lambda/\ker V$, and by step 4.1 it is fully faithful on the projectives; together these are the two assertions of the statement. [step 1.3, step 4.1] ∎
