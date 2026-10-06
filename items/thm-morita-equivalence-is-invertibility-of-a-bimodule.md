---
id: thm-morita-equivalence-is-invertibility-of-a-bimodule
kind: theorem
title: "Morita equivalence is invertibility of a bimodule"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
deps: [thm-eilenberg-watts-biequivalence-for-module-categories, thm-cocomplete-abelian-category-with-small-projective-generator-is-a-module-category, lem-copower-presentation-construction-is-left-adjoint-to-generator-hom, lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism, lem-equivalences-preserve-progenerators, lem-small-projective-modules-are-exactly-finitely-generated-projective-modules, thm-eilenberg-watts-for-arbitrary-unital-rings, lem-tensor-hom-adjunction-for-bimodules, thm-natural-transformations-of-tensor-functors-are-bimodule-maps, thm-an-equivalence-between-abelian-categories-is-exact, prop-equivalences-preserve-reflect-and-create-limits-and-colimits, thm-associativity-of-balanced-tensor-products, thm-unit-isomorphisms-for-module-tensor-products, thm-adjoints-are-unique-up-to-unique-natural-isomorphism, thm-every-equivalence-can-be-made-an-adjoint-equivalence, thm-endomorphism-ring-of-the-left-regular-module-is-opposite, def-small-projective-generator-and-progenerator, def-bimodule, def-morita-bicategory-of-rings-and-bimodules, def-equivalence-and-adjoint-equivalence-of-categories, def-endomorphism-ring-of-a-module, prop-endomorphisms-form-a-ring, def-bicategory-pseudofunctor-and-biequivalence, def-additive-cocontinuous-module-functor, lem-tensoring-defines-a-pseudofunctor-with-interchange]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "W. Crawley-Boevey, Noncommutative Algebra, §3.12, Theorem (Morita) (i)-(iii) and examples (i)-(ii), printed pp.68-69"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
    - title: "nLab, Morita equivalence, Classical Morita theorem (bimodule inverses; R = End of a finitely generated projective generator)"
      url: "https://ncatlab.org/nlab/show/Morita+equivalence"
    - title: "N. Johnson and D. Yau, 2-Dimensional Categories, Example 6.3.6 (M is a left adjoint iff finitely generated projective; Hom_R(M,R) is its right adjoint), together with the tensor-Hom adjunction of the HA-25 page"
      url: "https://arxiv.org/pdf/2002.06055"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A$ and $B$ be unital rings, and say that $A$ and $B$ are **Morita equivalent** when there is an equivalence of categories $A\text{-Mod}\to B\text{-Mod}$ that is additive.
1. The following are equivalent: (a) $A$ and $B$ are Morita equivalent; (b) there are bimodules ${}_BM_A$ and ${}_AN_B$ with isomorphisms $N\otimes_BM\cong{}_AA_A$ and $M\otimes_AN\cong{}_BB_B$ of bimodules; (c) there is an invertible 1-cell between $A$ and $B$ in the Morita bicategory of [[def-morita-bicategory-of-rings-and-bimodules]].
2. If $F:A\text{-Mod}\to B\text{-Mod}$ is such an equivalence, then $F\cong T_M$ for $M=F({}_AA)$ with the $(B,A)$-bimodule structure $ma=F(r_a)(m)$, its quasi-inverse is $T_N$ for $N=G({}_BB)$, and the isomorphisms in 1(b) arise from the unit and counit of $F,G$.
3. If $A$ and $B$ are Morita equivalent, then for any equivalence $F$ the module $P=F({}_AA)$ is a small projective generator of $B\text{-Mod}$ and $a\mapsto F(r_a)$ is a ring isomorphism $A\cong\operatorname{End}_B(P)^{\mathrm{op}}$ ([[def-endomorphism-ring-of-a-module]], [[prop-endomorphisms-form-a-ring]]); conversely, if $P$ is a left $B$-module that is a progenerator and if $A\cong\operatorname{End}_B(P)^{\mathrm{op}}$ is a ring isomorphism making $P$ a $(B,A)$-bimodule, then $T_P=P\otimes_A-$ is an equivalence $A\text{-Mod}\to B\text{-Mod}$ whose right adjoint is $\operatorname{Hom}_B(P,-)\cong P^{\vee}\otimes_B-$ with $P^{\vee}=\operatorname{Hom}_B(P,B)$; in particular $P^{\vee}$ is the inverse $(A,B)$-bimodule of $P$. No commutativity of the rings is assumed and no choice is used.

## Facts & Assumptions

**Given:** Unital rings $A$ and $B$; $A$ and $B$ are **Morita equivalent** when there is an additive equivalence of categories $A\text{-Mod}\to B\text{-Mod}$.

[F1] In the Morita bicategory of [[def-morita-bicategory-of-rings-and-bimodules]] a 1-cell $A\to B$ is a $(B,A)$-bimodule $M$, composition is $N\otimes_BM$, and a 1-cell is invertible exactly when there are bimodules ${}_BM_A$ and ${}_AN_B$ with isomorphisms $N\otimes_BM\cong{}_AA_A$ and $M\otimes_AN\cong{}_BB_B$ of bimodules ([[def-morita-bicategory-of-rings-and-bimodules]], [[def-bicategory-pseudofunctor-and-biequivalence]]).

[F2] An equivalence between abelian categories is exact, preserves and reflects all existing colimits, and hence is additive cocontinuous; conversely every additive cocontinuous functor $F:A\text{-Mod}\to B\text{-Mod}$ is naturally isomorphic to $T_{F(A)}$, where $F(A)$ carries the $(B,A)$-bimodule structure $ma=F(r_a)(m)$, and $T_M=M\otimes_A-$ is additive cocontinuous for every $(B,A)$-bimodule $M$ ([[thm-an-equivalence-between-abelian-categories-is-exact]], [[prop-equivalences-preserve-reflect-and-create-limits-and-colimits]], [[thm-eilenberg-watts-for-arbitrary-unital-rings]], [[def-additive-cocontinuous-module-functor]]).

[F3] For $(B,A)$-bimodules $M,M'$ the correspondence $f\mapsto f\otimes1$ is a bijection $\operatorname{Hom}_{B\text{-}A}(M,M')\cong\operatorname{Nat}(T_M,T_{M'})$ compatible with identities and composition, so an invertible natural transformation corresponds to an isomorphism of bimodules ([[thm-natural-transformations-of-tensor-functors-are-bimodule-maps]]).

[F4] The canonical associativity and unitor isomorphisms give natural isomorphisms $T_N\circ T_M\cong T_{N\otimes_BM}$ and $T_A\cong1_{A\text{-}\mathrm{Mod}}$, $T_B\cong1_{B\text{-}\mathrm{Mod}}$ ([[lem-tensoring-defines-a-pseudofunctor-with-interchange]], [[thm-associativity-of-balanced-tensor-products]], [[thm-unit-isomorphisms-for-module-tensor-products]]).

[F5] The regular module ${}_AA$ is a small projective generator of $A\text{-Mod}$, and small projective generators are preserved and reflected by equivalences; a left $B$-module is a small projective generator of $B\text{-Mod}$ exactly when it is a progenerator, i.e. finitely generated, projective and a generator ([[lem-small-projective-modules-are-exactly-finitely-generated-projective-modules]], [[lem-equivalences-preserve-progenerators]], [[def-small-projective-generator-and-progenerator]]).

[F6] Evaluation at $1$ gives a ring isomorphism $\operatorname{End}_A({}_AA)\cong A^{\mathrm{op}}$, and for a left $R$-module $M$ the endomorphisms form a unital ring under pointwise addition and composition ([[thm-endomorphism-ring-of-the-left-regular-module-is-opposite]], [[prop-endomorphisms-form-a-ring]], [[def-endomorphism-ring-of-a-module]]).

[F7] With supplied definable copower and cokernel assignments, a small projective generator $P$ of a locally small cocomplete abelian category $\mathcal C$ with $A\cong\operatorname{End}_{\mathcal C}(P)^{\mathrm{op}}$ yields an equivalence $H=\mathcal C(P,-):\mathcal C\to A\text{-Mod}$ with a quasi-inverse $L$ ([[thm-cocomplete-abelian-category-with-small-projective-generator-is-a-module-category]], [[lem-copower-presentation-construction-is-left-adjoint-to-generator-hom]]).

[F8] For a $(B,A)$-bimodule $P$ the tensor functor $T_P=P\otimes_A-$ is left adjoint to $\operatorname{Hom}_B(P,-)$ with the left $A$-module structure $(a\varphi)(p)=\varphi(pa)$, and a left adjoint of a functor is unique up to a unique compatible natural isomorphism ([[lem-tensor-hom-adjunction-for-bimodules]], [[thm-adjoints-are-unique-up-to-unique-natural-isomorphism]]).

[F9] For a finitely generated projective left $B$-module $P$ the evaluation map gives a natural isomorphism $\operatorname{Hom}_B(P,-)\cong\operatorname{Hom}_B(P,B)\otimes_B-$ with $P^{\vee}=\operatorname{Hom}_B(P,B)$, and $P^{\vee}$ is an $(A,B)$-bimodule when $P$ is a $(B,A)$-bimodule ([[lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism]]).

[F10] Every equivalence can be equipped as an adjoint equivalence, but the two arbitrary initial isomorphisms witnessing invertibility of a bimodule need not themselves be the unit and counit of that adjoint equivalence ([[thm-every-equivalence-can-be-made-an-adjoint-equivalence]], [[def-equivalence-and-adjoint-equivalence-of-categories]]).

## Proof

**Proof technique:** direct.

1.1 (Set-up.) An additive equivalence $F:A\text{-Mod}\to B\text{-Mod}$ has a quasi-inverse $G$, and by [F2] both are additive cocontinuous, so $F\cong T_M$ with $M:=F({}_AA)$ carrying the $(B,A)$-bimodule structure $ma=F(r_a)(m)$, and $G\cong T_N$ with $N:=G({}_BB)$ carrying the $(A,B)$-bimodule structure. The unit and counit of the equivalence give natural isomorphisms $G\circ F\cong1_{A\text{-}\mathrm{Mod}}$ and $F\circ G\cong1_{B\text{-}\mathrm{Mod}}$. [F2, F4, given]

1.2 ((b) implies (a).) Suppose ${}_BM_A$ and ${}_AN_B$ satisfy $N\otimes_BM\cong{}_AA_A$ and $M\otimes_AN\cong{}_BB_B$ as bimodules. Then [F4] gives natural isomorphisms $T_N\circ T_M\cong T_{N\otimes_BM}\cong T_A\cong1_{A\text{-}\mathrm{Mod}}$ and $T_M\circ T_N\cong T_B\cong1_{B\text{-}\mathrm{Mod}}$, so $T_M$ and $T_N$ are mutually quasi-inverse functors and $T_M$ is an additive equivalence; hence $A$ and $B$ are Morita equivalent. [F4, given]

1.3 (Forward direction of (3).) Let $F$ be an additive equivalence. By [F5] the regular module ${}_AA$ is a small projective generator and $P:=F({}_AA)$ is again one, hence a progenerator of $B\text{-Mod}$. Full faithfulness of $F$ makes $f\mapsto F(f)$ a ring isomorphism $\operatorname{End}_A({}_AA)\to\operatorname{End}_B(P)$, and [F6] identifies $\operatorname{End}_A({}_AA)$ with $A^{\mathrm{op}}$ through evaluation at $1$; composition of these identifications is exactly $a\mapsto F(r_a)$, whose image is the right $A$-action $ma=F(r_a)(m)$ of [F2]. Hence $A\cong\operatorname{End}_B(P)^{\mathrm{op}}$ and $P$ is a $(B,A)$-bimodule. [F2, F5, F6, given, algebra]

1.4 (Converse direction of (3).) Let $P$ be a left $B$-module that is a progenerator, suppose $A\cong\operatorname{End}_B(P)^{\mathrm{op}}$ is a ring isomorphism making $P$ a $(B,A)$-bimodule. By [F5] $P$ is a small projective generator. In $B\text{-Mod}$ the finite-support direct sums of copies of $P$ and the quotients by images supply definable copower and cokernel assignments; thus [F7] gives an equivalence $H=\operatorname{Hom}_B(P,-):B\text{-Mod}\to A\text{-Mod}$ with quasi-inverse $L$. By [F8] the tensor functor $T_P=P\otimes_A-$ is left adjoint to $H$, so by uniqueness of left adjoints $L\cong T_P$ and $T_P$ is an equivalence with right adjoint $H$; since $P$ is finitely generated projective as a left $B$-module, [F9] identifies $H=\operatorname{Hom}_B(P,-)$ with $P^{\vee}\otimes_B-$ for the $(A,B)$-bimodule $P^{\vee}=\operatorname{Hom}_B(P,B)$. [F5, F7, F8, F9, given]

2.1 ((a) implies (b).) Let $F$ be an additive equivalence with quasi-inverse $G$, and let $M=F({}_AA)$, $N=G({}_BB)$ be as in step 1.1. Composing the natural isomorphism $G\circ F\cong1$ with the comparisons $G\circ F\cong T_N\circ T_M\cong T_{N\otimes_BM}$ of [F4] gives an invertible natural transformation $T_{N\otimes_BM}\cong T_A$, which by [F3] corresponds to an isomorphism of $(A,A)$-bimodules $N\otimes_BM\cong{}_AA_A$; symmetrically $F\circ G\cong1$ yields $M\otimes_AN\cong{}_BB_B$. Hence a Morita equivalence produces inverse bimodules. [F3, F4, step 1.1, given]

2.2 (Proof of (3).) Steps 1.3 and 1.4 prove the two directions: an equivalence sends the regular module to a progenerator whose endomorphism ring is $A^{\mathrm{op}}$, and conversely a progenerator with $A\cong\operatorname{End}_B(P)^{\mathrm{op}}$ has $T_P$ as an equivalence with right adjoint $\operatorname{Hom}_B(P,-)\cong P^{\vee}\otimes_B-$, so $P^{\vee}$ is the inverse $(A,B)$-bimodule of $P$. [step 1.3, step 1.4, given]

3.1 (Proof of (1).) Step 1.2 gives (b)$\Rightarrow$(a) and step 2.1 gives (a)$\Rightarrow$(b), so (a) and (b) are equivalent; condition (c) is the same statement in the language of the Morita bicategory, where an invertible 1-cell is one admitting a two-sided inverse up to invertible 2-cells, which are exactly the bimodule isomorphisms of (b) by [F1]. Hence (a), (b), (c) are equivalent. [F1, step 1.2, step 2.1, given]

3.2 (Proof of (2).) Let $F$ be an equivalence. Step 1.1 exhibits $F\cong T_M$ with $M=F({}_AA)$ and the $(B,A)$-bimodule structure $ma=F(r_a)(m)$, and its quasi-inverse $G\cong T_N$ with $N=G({}_BB)$; step 2.1 derives the two bimodule isomorphisms from the unit and counit of the equivalence. This is exactly assertion (2). [step 1.1, step 2.1, given]

4.1 Steps 3.1, 3.2 and 2.2 prove the three assertions; if triangle identities are wanted, replace the equivalence by an adjoint equivalence as in [F10] — the initial bimodule isomorphisms of step 2.1 need not themselves be the unit and counit of that adjoint equivalence. No commutativity of the rings is assumed and no choice is used. [F10, step 3.1, step 3.2, step 2.2] ∎
