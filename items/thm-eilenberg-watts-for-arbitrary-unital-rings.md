---
id: thm-eilenberg-watts-for-arbitrary-unital-rings
kind: theorem
title: "Eilenberg-Watts theorem for arbitrary unital rings"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-additive-cocontinuous-module-functor
  - lem-additive-cocontinuous-module-functors-form-a-category
  - lem-additive-module-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving
  - lem-evaluation-on-the-regular-module-has-a-commuting-right-action
  - lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums
  - lem-canonical-free-presentation-controls-eilenberg-watts-comparison
  - thm-natural-transformations-of-tensor-functors-are-bimodule-maps
  - thm-unit-isomorphisms-for-module-tensor-products
  - def-bimodule
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. Fuchs, G. Schaumann, C. Schweigert, Eilenberg-Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, introduction (classical statement for unital rings)"
      url: "https://arxiv.org/pdf/1612.04561v3"
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

Let $A,B$ be unital rings.

(i) For every $(B,A)$-bimodule $M$ ([[def-bimodule]]) the functor
$T_M=M\otimes_A-:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ is additive,
right exact, coproduct-preserving and therefore cocontinuous
([[def-additive-cocontinuous-module-functor]]), and the assignment
$M\mapsto T_M$ is functorial: a bimodule map $f:M\to M'$ gives the natural
transformation with components $f\otimes1_X$.

(ii) Conversely every additive cocontinuous functor
$F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ is naturally isomorphic to
$T_{F(A)}$, where $F(A)$ carries the $(B,A)$-bimodule structure
$ma=F(r_a)(m)$ ([[lem-evaluation-on-the-regular-module-has-a-commuting-right-action]]).

Hence, up to natural isomorphism, the additive cocontinuous functors are exactly
the tensor functors with bimodule kernels: the quasi-inverse of $M\mapsto T_M$
is $F\mapsto F({}_AA)$, with categorical language interpreted schematically
as in [[def-additive-cocontinuous-module-functor]]. No commutativity of $A$ or $B$ is assumed and no choice
is used.

## Facts & Assumptions

**Given:** Unital rings $A,B$; the class of additive cocontinuous functors $A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$; $(B,A)$-bimodules $M,M'$; an additive cocontinuous functor $F$; a bimodule map $f:M\to M'$.

[F1] A functor is additive cocontinuous when it is additive and preserves every small colimit ([[def-additive-cocontinuous-module-functor]]).

[F2] The additive cocontinuous functors with all natural transformations as morphisms satisfy the category laws schematically, with a set of component codes for each fixed Hom-collection, componentwise identities and vertical composition ([[lem-additive-cocontinuous-module-functors-form-a-category]]).

[F3] An additive module functor is cocontinuous if and only if it is right exact and preserves arbitrary coproducts; equivalently if and only if it preserves cokernels and arbitrary direct sums ([[lem-additive-module-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving]]).

[F4] $T_M=M\otimes_A-$ is additive, right exact and preserves arbitrary direct sums, including the empty one; if $M$ is a $(B,A)$-bimodule then $T_M$ takes values in left $B$-modules and all displayed maps are $B$-linear ([[lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums]]).

[F5] Every bimodule map $f:M\to M'$ yields a natural transformation $T_M\Rightarrow T_{M'}$ with components $f\otimes1_X$, and the assignment is compatible with identities and vertical composition ([[thm-natural-transformations-of-tensor-functors-are-bimodule-maps]]).

[F6] If $F$ is additive and $M=F(A)$, then $ma=F(r_a)(m)$ makes $M$ a $(B,A)$-bimodule ([[lem-evaluation-on-the-regular-module-has-a-commuting-right-action]]).

[F7] If $F$ is additive, right exact and coproduct-preserving and $M=F(A)$ with that bimodule structure, then the canonical comparison $\tau:M\otimes_A-\Rightarrow F$ is a natural isomorphism ([[lem-canonical-free-presentation-controls-eilenberg-watts-comparison]]).

[F8] $\rho_M:M\otimes_AA\to M$, $\rho_M(m\otimes a)=ma$, is a group isomorphism ([[thm-unit-isomorphisms-for-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 For a $(B,A)$-bimodule $M$ the functor $T_M$ is additive, right exact and coproduct-preserving by [F4], hence cocontinuous by the equivalence [F3]. Given a bimodule map $f:M\to M'$, the components $f\otimes1_X$ are natural in $X$ and compatible with identities and vertical composition by [F5], so they define a morphism $T_M\Rightarrow T_{M'}$ in the category of [F2]; this makes $M\mapsto T_M$ a functor from $(B,A)$-bimodules to the additive cocontinuous functors. [F1, F2, F3, F4, F5]

1.2 Let $F$ be additive cocontinuous. By [F3] it is right exact and coproduct-preserving, and $M:=F(A)$ is a $(B,A)$-bimodule by [F6]. The canonical comparison $\tau:M\otimes_A-\Rightarrow F$ is then a natural isomorphism by [F7], so $F\cong T_{F(A)}$. [F3, F6, F7]

2.1 The two assignments are inverse up to natural isomorphism: for a bimodule $M$ one has $T_M(A)=M\otimes_AA\cong M$ by the unit isomorphism [F8], and for additive cocontinuous $F$ one has $F\cong T_{F(A)}$ by step 1.2. Steps 1.1 and 1.2 therefore show that, up to natural isomorphism, the additive cocontinuous functors $A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ are exactly the functors $T_M$ with $M$ a $(B,A)$-bimodule, with quasi-inverse $F\mapsto F({}_AA)$. [F8, step 1.1, step 1.2]

3.1 The construction of $\tau$ used no presentation of any module and no element selection, and the module category is treated over arbitrary unital rings; hence neither commutativity of $A$ or $B$ nor the axiom of choice is used. [step 1.1, step 1.2, step 2.1] ∎
