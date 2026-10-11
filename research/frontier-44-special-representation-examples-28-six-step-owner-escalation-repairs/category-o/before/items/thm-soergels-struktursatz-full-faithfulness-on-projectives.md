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
       cor-antidominant-verma-modules-are-simple,
       thm-category-o-has-enough-projectives, thm-projectives-in-category-o-have-verma-flags, thm-pbw-model-of-a-verma-module, lem-direct-summands-of-verma-filtered-objects-are-verma-filtered,
       lem-finite-length-objects-decompose-into-indecomposables]
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

**Given:** AC ([[def-axiom-of-choice]]), the regular integral block, its projective-injective $P=P(a)$ for $a=w_0\cdot\lambda$, and $V=\operatorname{Hom}(P,-)$.

[F1] The central action identifies $\operatorname{End}(P)$ with the local coinvariant algebra $C$, with maximal ideal $C_+$ and residue field $\mathbb C$ ([[thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra]], [[def-the-coinvariant-algebra-of-a-finite-weyl-group]]). The top multiplication pairing is perfect and the socle of $C$ is one-dimensional ([[lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle]]).

[F2] $P$ is projective-injective with a once-each Verma flag; $V$ is exact, $\dim VX=[X:L(a)]$, every Verma has socle $L(a)$, and $V\Delta(x\cdot\lambda)$ is one-dimensional ([[def-the-antidominant-projective-and-the-soergel-functor]]).

[F3] Restricted duality fixes simples and interchanges projective covers with injective hulls; enough projectives therefore gives enough injectives ([[prop-restricted-duality-is-an-exact-involution-on-category-o]], [[thm-category-o-has-enough-projectives]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]], [[lem-finite-length-objects-decompose-into-indecomposables]]).

[F4] Projectives are Verma-filtered, and finite tensor-block functors and wall crossings are exact and biadjoint; every indecomposable projective is a summand of a wall word applied to $\Delta(\lambda)$ ([[thm-projectives-in-category-o-have-verma-flags]], [[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]], [[def-wall-crossing-functor-and-unit-counit]], [[lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label]], [[thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group]]).

[F5] A Verma is free over $U(\mathfrak n^-)$; projective summands retain Verma flags ([[thm-pbw-model-of-a-verma-module]], [[lem-direct-summands-of-verma-filtered-objects-are-verma-filtered]], [[lem-finite-length-objects-decompose-into-indecomposables]]).

## Proof

**Proof technique:** direct; the annihilator argument follows Soergel, §2.3, Lemma 6 and Struktursatz 9 (preprint pp. 15–16).

1.1 An indecomposable injective has simple socle: embed its finite-length socle into the direct sum of the injective hulls from [F3], extend that embedding to the whole object by injectivity of the target, and note that the kernel is zero because any nonzero finite-length submodule meets the socle. Injectivity of the source splits the embedding; indecomposability and uniqueness of injective hulls then give one hull. Every simple submodule of a Verma-filtered object embeds into some flag factor (take the first flag position it meets), so [F2] forces its label to be $a$. Hence every projective-injective indecomposable is the injective hull of $L(a)$, and is isomorphic to $P$. In particular the socle of $P$ is $L(a)$, once. [F2, F3, F4, algebra]

1.2 For a finite $C$-module $N$, define $L(N)=P\otimes_CN$ by a finite presentation: the cokernel of the corresponding map between finite sums of $P$ exists in $\mathcal O$. Tensor-Hom adjunction gives $L\dashv V$; exactness of $V$ and $VP=C$ give $VL(N)\cong N$ by applying $V$ to that presentation. The counit $LVM\to M$ becomes an isomorphism under $V$, so its kernel and cokernel lie in $\ker V$. This supplies the equivalence $\mathcal O_\lambda/\ker V\simeq C\text{-mod}$: in the quotient every object is isomorphic to one of the $L(N)$, and adjunction identifies their quotient Hom maps with module maps. [F1, F2, algebra]

2.1 Choose a linear functional $\omega:C\to\mathbb C$ nonzero on the top degree and zero on the other degrees. By [F1], $c\mapsto(d\mapsto\omega(cd))$ identifies $C$ with its vector-space dual as a $C$-module. For a finite $C$-module $N$, $\operatorname{Hom}_C(N,C^*)\cong N^*$ by evaluation at $1$, with inverse $\ell\mapsto(n\mapsto[c\mapsto\ell(cn)])$. Thus $C$ is injective among finite $C$-modules. The two contravariant functors $\operatorname{Hom}(-,P)$ and $\operatorname{Hom}_C(V-,C)$ are exact. Their canonical comparison is an isomorphism on simples by step 1.1 and [F2]; it is nonzero at $L(a)$ because $P\twoheadrightarrow L(a)\hookrightarrow P$ is nonzero. Induction on finite length, using the two short exact Hom sequences, gives the comparison for all sources and target $P$. [F1, F2, step 1.1, algebra]

2.2 The unique maximal-weight Verma factor of $P$ lifts to an embedded $\Delta(\lambda)$ with Verma-filtered quotient. To see this, choose its position in a Verma flag. Earlier factors have no weights above $\lambda$ or at $\lambda$, so a lift of its highest vector is killed by $\mathfrak n^+$. The universal Verma map is injective because its composite to that flag factor is the identity. Its image splits that stage, and quotienting the full flag removes just this factor. Every Verma is annihilated by $C_+$ under the central action [F1], so $\Delta(\lambda)\subseteq K:=\{v\in P:C_+v=0\}$. If $K/\Delta(\lambda)\ne0$, it is a submodule of the Verma-filtered quotient; its socle contains $L(a)$ by the flag argument in step 1.1. Exactness of $V$ would give $\dim VK\ge2$, since $\dim V\Delta(\lambda)=1$. But inclusion into $P$ identifies $VK$ with a subspace of the one-dimensional socle of $VP=C$: every map $P\to K$ has image killed by $C_+$. This is impossible. Thus $K=\Delta(\lambda)$. [F1, F2, F4, F5, step 1.1, algebra]

3.1 The comparison for target $P$ in step 2.1 intertwines the central action. Its subspace of maps annihilated by $C_+$ is exactly $\operatorname{Hom}(M,K)$ on the category-$\mathcal O$ side and $\operatorname{Hom}_C(VM,\operatorname{soc}C)$ on the module side. Step 2.2 and exactness identify these subspaces with $\operatorname{Hom}(M,\Delta(\lambda))$ and $\operatorname{Hom}_C(VM,V\Delta(\lambda))$. This proves the comparison for the dominant Verma without an invalid induction for merely left-exact functors. [F1, F2, step 2.1, step 2.2]

4.1 A wall word $F$ and its adjoint word $G$ send $P$ to projective-injective objects; by step 1.1 these are finite sums of $P$. Therefore $VX=0$ implies $VFX=\operatorname{Hom}(GP,X)=0$, and likewise for $G$. The exact adjunction descends to the Serre quotient: its unit and counit induce maps there, and the triangle identities descend as equalities. Under step 1.2 it is an adjunction between the induced $C$-module functors. Combining the original adjunction, step 3.1 and this descended adjunction gives the canonical chain $\operatorname{Hom}(M,F\Delta(\lambda))\cong\operatorname{Hom}(GM,\Delta(\lambda))\cong\operatorname{Hom}_C(VGM,V\Delta(\lambda))\cong\operatorname{Hom}_C(VM,VF\Delta(\lambda))$. [F4, step 1.1, step 3.1, step 1.2, algebra]

5.1 Every projective is a summand of a finite sum of the wall words in [F4]. The natural comparison in step 4.1 respects the summand idempotents, so restriction gives the required isomorphism for every projective target $Q$ and every source $M$. Step 1.2 also proves faithfulness on the quotient. No claim of full faithfulness on all original objects is made. [F4, step 1.2, step 4.1] ∎
