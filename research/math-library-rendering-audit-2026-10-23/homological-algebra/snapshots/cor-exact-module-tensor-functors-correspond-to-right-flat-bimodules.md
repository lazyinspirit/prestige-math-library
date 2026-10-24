---
id: cor-exact-module-tensor-functors-correspond-to-right-flat-bimodules
kind: corollary
title: "Exact module tensor functors correspond to right-flat bimodules"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - thm-eilenberg-watts-for-arbitrary-unital-rings
  - cor-eilenberg-watts-is-an-equivalence-of-hom-categories
  - lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums
  - def-left-and-right-flat-modules-over-an-arbitrary-ring
  - def-exact-functor-between-abelian-categories
  - thm-one-sided-and-two-sided-exactness-by-short-exact-sequences
  - def-exact-and-short-exact-sequences-of-modules
  - def-module-homomorphism-kernel-image-and-cokernel
  - thm-modules-over-a-ring-form-an-abelian-category
  - thm-abelian-groups-form-an-abelian-category
  - def-bimodule
justified_by: []
aliases: []
dependency_level: 5
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

Let $A,B$ be unital rings and $M$ a $(B,A)$-bimodule
([[def-bimodule]]). Then the tensor functor
$T_M=M\otimes_A-:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ is exact
([[def-exact-functor-between-abelian-categories]]) if and only if $M$ is flat as
a right $A$-module
([[def-left-and-right-flat-modules-over-an-arbitrary-ring]]). Under the
Eilenberg-Watts equivalence this is a bijection between isomorphism classes of
exact tensor functors $A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ and
right-flat $(B,A)$-bimodules. Isomorphism classes here are a schematic
classification, not an assertion that either collection is a set. No commutativity and no choice are used.

## Facts & Assumptions

**Given:** Unital rings $A,B$ and a $(B,A)$-bimodule $M$.

[F1] A right $R$-module $N$ is flat when $N\otimes_R-$ is exact on left $R$-modules, i.e. when the functor $X\mapsto N\otimes_RX$ from left $R$-modules to abelian groups is exact ([[def-left-and-right-flat-modules-over-an-arbitrary-ring]]).

[F2] A functor between abelian categories is exact when it is additive and both left and right exact ([[def-exact-functor-between-abelian-categories]]).

[F3] A functor between abelian categories is exact if and only if it carries every short exact sequence to a short exact sequence ([[thm-one-sided-and-two-sided-exactness-by-short-exact-sequences]]).

[F4] For a homomorphism of $B$-modules, kernel, image and cokernel are computed on the underlying sets as $\ker f=\{m:f(m)=0\}$, $\operatorname{im}f=\{f(m)\}$ and $\operatorname{coker}f=N/\operatorname{im}f$; a sequence of $B$-modules is exact exactly when $\operatorname{im}=\ker$ at every meeting point, and a short exact sequence has injective and surjective outer maps ([[def-module-homomorphism-kernel-image-and-cokernel]], [[def-exact-and-short-exact-sequences-of-modules]]). Consequently a sequence of $B$-modules is exact, respectively short exact, if and only if its underlying sequence of abelian groups is.

[F5] $A\text{-}\mathbf{Mod}$, $B\text{-}\mathbf{Mod}$ and $\mathbf{Ab}$ are abelian categories ([[thm-modules-over-a-ring-form-an-abelian-category]], [[thm-abelian-groups-form-an-abelian-category]]).

[F6] $T_M$ is additive (and right exact) ([[lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums]]).

[F7] Under the Eilenberg-Watts equivalence $M\mapsto T_M$ is an equivalence of categories in the schematic sense of the cited equivalence, so $T_M\cong T_{M'}$ if and only if $M\cong M'$ as $(B,A)$-bimodules ([[thm-eilenberg-watts-for-arbitrary-unital-rings]], [[cor-eilenberg-watts-is-an-equivalence-of-hom-categories]]).

## Proof

**Proof technique:** direct.

1.1 Since $T_M$ is additive by [F6] and $A\text{-}\mathbf{Mod}$, $B\text{-}\mathbf{Mod}$, $\mathbf{Ab}$ are abelian by [F5], exactness of $T_M$ is characterised by short exact sequences by [F3]. By [F4] a sequence of $B$-modules is short exact exactly when its underlying sequence of abelian groups is, so $T_M$ carries every short exact sequence of $A$-modules to a short exact sequence of $B$-modules if and only if the composite with the forgetful functor, the functor $X\mapsto M\otimes_AX$ from $A\text{-}\mathbf{Mod}$ to $\mathbf{Ab}$, does. That composite is additive, so by [F3] again it carries short exact sequences to short exact sequences if and only if it is exact; by [F2] this is equivalent to exactness of $M\otimes_A-$. [F2, F3, F4, F5, F6]

2.1 By [F1] the right $A$-module $M$ is flat exactly when $M\otimes_A-$ is exact as a functor to abelian groups, which by step 1.1 is exactly when $T_M$ is exact. Hence $T_M$ is exact if and only if $M$ is right-flat. [F1, step 1.1]

3.1 Isomorphism classes: by [F7] the assignment $M\mapsto T_M$ induces a bijection between isomorphism classes of $(B,A)$-bimodules and isomorphism classes of tensor functors, and exactness is invariant under natural isomorphism, because a natural isomorphism intertwines the images of every short exact sequence termwise and an isomorphic copy of a short exact sequence is short exact by [F4]. Hence restricting along step 2.1 gives a bijection between isomorphism classes of exact tensor functors $A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ and isomorphism classes of right-flat $(B,A)$-bimodules. [F7, step 2.1]

4.1 The corollary asserts exactness of $T_M$ precisely for right-flat $M$; it makes no claim about projectivity of $M$ as a left $B$-module, which governs different functors. No commutativity and no choice are used, since the argument only transports exactness across the forgetful functor and invokes the displayed universal properties. [step 1.1, step 2.1, step 3.1] ∎
