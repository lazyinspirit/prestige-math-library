---
id: cor-eilenberg-watts-is-an-equivalence-of-hom-categories
kind: corollary
title: "Eilenberg-Watts is a schematic equivalence of Hom categories"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-eilenberg-watts-for-arbitrary-unital-rings
  - def-additive-cocontinuous-module-functor
  - thm-natural-transformations-of-tensor-functors-are-bimodule-maps
  - lem-additive-cocontinuous-module-functors-form-a-category
  - def-full-faithful-and-essentially-surjective-functor
  - thm-fully-faithful-split-essentially-surjective-characterises-equivalence
  - def-natural-isomorphism
  - def-bimodule
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Kamensky, Non-Commutative Algebra (BGU course notes, Spring 2017), §5.1, Theorem 5.1.43, Proposition 5.1.40, Lemma 5.1.46, Corollaries 5.1.48-5.1.49"
      url: "https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf"
    - title: "A. Nyman and S. P. Smith, A Generalization of Watts's Theorem: Right Exact Functors on Module Categories, arXiv:0806.0832, Theorem 1.1-1.2, Propositions 3.2-3.3, Lemma 3.4"
      url: "https://arxiv.org/pdf/0806.0832"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A,B$ be unital rings. The assignment $M\mapsto T_M$ extends to an
schematic equivalence between the category of $(B,A)$-bimodules with
bimodule maps ([[def-bimodule]]) and the category of additive cocontinuous
functors $A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ with natural
transformations
([[lem-additive-cocontinuous-module-functors-form-a-category]]). It is full and
faithful with
$\operatorname{Nat}(T_M,T_{M'})\cong\operatorname{Hom}_{B\text{-}A}(M,M')$,
naturally in $M$ and $M'$, and essentially surjective by
[[thm-eilenberg-watts-for-arbitrary-unital-rings]]; a quasi-inverse is
$F\mapsto F({}_AA)$. In particular $T_M\cong T_{M'}$ if and only if
$M\cong M'$ as $(B,A)$-bimodules. Categorical language has the schematic meaning of
[[def-additive-cocontinuous-module-functor]]; no category with proper-class
functors as set-coded objects is asserted. No commutativity and no choice are used.

## Facts & Assumptions

**Given:** Unital rings $A,B$ and $(B,A)$-bimodules $M,M',M_1,M_2$.

[F1] The assignment $M\mapsto T_M=M\otimes_A-$ lands in additive cocontinuous functors, and a bimodule map $f:M\to M'$ gives the natural transformation with components $f\otimes1_X$, compatibly with identities and vertical composition; every additive cocontinuous functor $F$ is naturally isomorphic to $T_{F(A)}$ ([[thm-eilenberg-watts-for-arbitrary-unital-rings]]).

[F2] The additive cocontinuous functors with all natural transformations form a schematic category with set-coded fixed Hom-collections, and the $(B,A)$-bimodules with bimodule maps form a locally small category because each Hom-collection is a set of functions ([[lem-additive-cocontinuous-module-functors-form-a-category]], [[def-bimodule]]).

[F3] The assignment $f\mapsto(f\otimes1_X)$ is a bijection $\operatorname{Hom}_{B\text{-}A}(M,M')\to\operatorname{Nat}(T_M,T_{M'})$, and the two assignments are compatible with addition, identities and vertical composition; the inverse sends $\eta$ to $\rho_{M'}\circ\eta_A\circ\rho_M^{-1}$ ([[thm-natural-transformations-of-tensor-functors-are-bimodule-maps]]).

[F4] A functor is fully faithful when every induced hom-map is bijective and split essentially surjective when the data assign to every object $D$ of the target an object $C$ with an isomorphism $FC\cong D$; such a functor is an equivalence, and no choice principle is needed because the splitting is part of the data ([[def-full-faithful-and-essentially-surjective-functor]], [[thm-fully-faithful-split-essentially-surjective-characterises-equivalence]]).

[F5] A natural isomorphism has an inverse natural transformation ([[def-natural-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Let $\Phi$ be the assignment $M\mapsto T_M$ on objects of the bimodule category and $f\mapsto(f\otimes1_X)$ on morphisms. By [F1] the objects are additive cocontinuous functors and the morphisms are natural transformations, compatibly with identities and vertical composition, so $\Phi$ respects the schematic category operations of [F2]; fixed Hom-collections are represented by sets by [F2]. [F1, F2]

1.2 $\Phi$ is full and faithful: for every pair $M,M'$ the map $\Phi_{M,M'}:\operatorname{Hom}_{B\text{-}A}(M,M')\to\operatorname{Nat}(T_M,T_{M'})$ is the bijection of [F3]. [F3]

1.3 $\Phi$ is split essentially surjective: by [F1] every additive cocontinuous $F$ is naturally isomorphic to $T_{F(A)}=\Phi(F(A))$, and $F(A)$ together with that isomorphism is determined by $F$, so the required data are supplied without any selection. [F1]

2.1 The construction proving [F4] applies schematically: for $\eta:F\Rightarrow G$, define $E(\eta)$ as the unique bimodule map whose tensor transformation is $\tau_G^{-1}\circ\eta\circ\tau_F$, using the canonical comparisons $\tau_F:T_{F(A)}\Rightarrow F$ of [F1] and the bijection [F3]. Composition compatibility makes $E$ functorial, and $\tau$ is natural in $F$ by this defining equation. Since $\tau_{F,A}=\rho_{F(A)}$, [F3] gives $E(\eta)=\eta_A$. The tensor-unit maps give the other natural isomorphism $E(T_M)\cong M$: the reconstructed right action is $(m\otimes a)b=m\otimes ab$, and $\rho_M(m\otimes ab)=(ma)b$, while naturality follows on elementary tensors, so $E(F)=F(A)$ is a schematic quasi-inverse. No quantification over objects that are proper classes is needed. [F1, F3, F4, step 1.1, step 1.2, step 1.3]

2.2 Naturality in $M$ and $M'$: for a bimodule map $h:M_1\to M_2$ and $f':M_2\to M'$, the bijection of [F3] sends $f'\circ h$ to the vertical composite of $(f'\otimes1_X)$ with $(h\otimes1_X)$ by the composition compatibility in [F3]; likewise postcomposition with a bimodule map corresponds to postcomposition with its tensor transformation. Hence the bijections are natural in both variables. [F3, step 1.2]

2.3 The bijection identifies natural isomorphisms with bimodule isomorphisms: if $\eta:T_M\Rightarrow T_{M'}$ is a natural isomorphism with associated $f$ and inverse $\eta^{-1}$ with associated $g$, then the identities $\eta^{-1}\circ\eta=1_{T_M}$ and $\eta\circ\eta^{-1}=1_{T_{M'}}$ translate under the compatibility of [F3] into $g\circ f=1_M$ and $f\circ g=1_{M'}$, because the bijection sends $1_{T_M}$ to $1_M$; conversely, for a bimodule isomorphism $f$ the transformation with components $f\otimes1_X$ is a natural isomorphism with components $f^{-1}\otimes1_X$. Hence $T_M\cong T_{M'}$ if and only if $M\cong M'$. [F3, F5, step 1.2]

3.1 Steps 1.1-2.1 exhibit the equivalence $\Phi$ with quasi-inverse $F\mapsto F(A)$, step 2.2 its naturality in both variables, and step 2.3 the isomorphism statement. No object or presentation was chosen, and no commutativity is used. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 2.3] ∎
