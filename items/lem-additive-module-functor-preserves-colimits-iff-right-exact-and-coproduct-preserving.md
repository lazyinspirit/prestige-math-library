---
id: lem-additive-module-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving
kind: lemma
title: "An additive module functor is cocontinuous exactly when it is right exact and preserves coproducts"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-additive-cocontinuous-module-functor
  - def-left-exact-and-right-exact-functor
  - thm-small-colimits-from-coproducts-and-coequalizers
  - thm-rmod-is-complete-and-cocomplete
  - cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference
  - thm-an-additive-functor-preserves-finite-biproducts
  - thm-modules-over-a-ring-form-an-abelian-category
  - def-direct-sum-of-a-family-of-modules
  - thm-universal-property-of-module-direct-sums
justified_by: []
aliases: []
dependency_level: 1
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

Let $A,B$ be unital rings and $F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$
additive. Then $F$ preserves all small colimits if and only if $F$ preserves
cokernels and arbitrary direct sums. Equivalently, $F$ is additive cocontinuous
([[def-additive-cocontinuous-module-functor]]) if and only if it is right exact
(preserves every finite colimit that exists,
[[def-left-exact-and-right-exact-functor]]) and preserves arbitrary coproducts.
No commutativity and no choice are used.

## Facts & Assumptions

**Given:** Unital rings $A$ and $B$ and an additive functor
$F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$.

[F1] $F$ is additive cocontinuous when it is additive and preserves every small
colimit ([[def-additive-cocontinuous-module-functor]]).

[F2] A functor is right exact when it preserves every finite colimit that exists
in its source category ([[def-left-exact-and-right-exact-functor]]).

[F3] If $D:\mathcal J\to\mathcal C$ is small and the coproducts
$R=\coprod_{u:j\to k}D(j)$, $S=\coprod_jD(j)$ and the coequalizer of
$d,c:R\rightrightarrows S$, with $d\iota_u=\iota_j$ and $c\iota_u=\iota_kD(u)$,
exist, then that coequalizer is a colimit of $D$, with cocone built from the
coproduct inclusions and the coequalizer map
([[thm-small-colimits-from-coproducts-and-coequalizers]]).

[F4] $A\text{-}\mathbf{Mod}$ has all small colimits
([[thm-rmod-is-complete-and-cocomplete]]).

[F5] In the additive category $A\text{-}\mathbf{Mod}$ a coequalizer of a
parallel pair is exactly a cokernel of the difference, and conversely
([[cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference]]);
a cokernel is a coequalizer of the pair $(f,0)$, hence a finite colimit.

[F6] An additive functor between additive categories preserves finite
biproducts ([[thm-an-additive-functor-preserves-finite-biproducts]]).

[F7] $A\text{-}\mathbf{Mod}$ and $B\text{-}\mathbf{Mod}$ are abelian, hence
additive ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[F8] In a module category the direct sum $\bigoplus_{i\in I}X_i$ is the
coproduct of the family with coordinate inclusions $\jmath_i$, so a functor
preserving arbitrary direct sums carries the coproduct cone of every family to
a coproduct cone, and conversely ([[def-direct-sum-of-a-family-of-modules]],
[[thm-universal-property-of-module-direct-sums]]).

## Proof

**Proof technique:** direct.

1.1 If $F$ preserves all small colimits, then it preserves cokernels and arbitrary direct sums, since a cokernel is the coequalizer of the pair $(f,0)$ and a direct sum is a coproduct, both small colimits by [F5] and [F8]; and it is right exact, since every finite colimit is a small colimit. Hence the first alternative implies the second. [F1, F2, F5, F8]

1.2 Conversely assume $F$ preserves cokernels and arbitrary direct sums, and let $D:\mathcal J\to A\text{-}\mathbf{Mod}$ be a small diagram with colimit $L$. By [F4] the coproducts $R=\coprod_{u:j\to k}D(j)$ and $S=\coprod_jD(j)$ exist, and by [F3] the coequalizer $q:S\to L$ of $d,c:R\rightrightarrows S$ is a colimit of $D$ with its canonical cocone. [F3, F4, F8]

1.3 The two hypothesis families agree for additive $F$: if $F$ is right exact and preserves arbitrary coproducts, then it preserves cokernels, since cokernels are finite colimits; and conversely, if $F$ preserves cokernels and arbitrary direct sums, then it preserves every finite coproduct by [F6], because finite coproducts in an additive category are finite biproducts, and it preserves every finite colimit by the finite instance of the construction [F3] together with [F5], since the coproducts over the arrows and objects of a finite index category are finite coproducts. Hence cokernel-plus-direct-sum preservation is equivalent to right-exactness-plus-coproduct preservation. [F2, F3, F5, F6, F8]

2.1 Under the assumption of step 1.2, $F(R)$ together with the maps $F(\iota_u)$ is a coproduct of the family $\bigl(F(D(j))\bigr)_{u:j\to k}$ and $F(S)$ with the maps $F(\iota_j)$ is a coproduct of the family $\bigl(F(D(j))\bigr)_j$, because $F$ preserves the coproduct cones by [F8]; moreover $F(d)\circ F(\iota_u)=F(\iota_j)$ and $F(c)\circ F(\iota_u)=F(\iota_k)F(D(u))$, and $F(q)$ is a cokernel of $F(d-c)=F(d)-F(c)$ because $F$ preserves the cokernel of $d-c$. By [F5] applied in $B\text{-}\mathbf{Mod}$, $F(q)$ is therefore the coequalizer of $F(d),F(c)$, and by [F3] applied to the small diagram $F\circ D$ the object $F(L)$ with the image of the colimit cocone of $D$ is a colimit of $F\circ D$. Hence $F$ preserves the colimit of $D$. [F3, F5, F7, F8, step 1.2]

3.1 Step 1.1 gives the forward and step 2.1 the reverse implication of the first equivalence, so an additive $F$ preserves all small colimits exactly when it preserves cokernels and arbitrary direct sums; step 1.3 identifies the second hypothesis family with right exactness plus coproduct preservation, so $F$ is additive cocontinuous if and only if it is right exact and preserves arbitrary coproducts. No element, presentation, or diagram is chosen globally, so no choice is used. [F1, step 1.1, step 1.3, step 2.1] ∎
