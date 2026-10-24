---
id: cor-finite-one-sided-exactness-is-equivalent-to-existence-of-the-corresponding-adjoint
kind: corollary
title: "Finite one-sided exactness is equivalent to the existence of the corresponding adjoint"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
justified_by: []
aliases: []
deps: [cor-left-adjoints-preserve-colimits, def-abelian-category, def-adjunction-by-unit-counit-and-triangle-identities, def-bimodule, def-dimension, def-exact-and-short-exact-sequences-of-modules, def-hom-groups-and-induced-hom-maps, def-left-exact-and-right-exact-functor, def-module-homomorphism-kernel-image-and-cokernel, lem-tensor-hom-adjunction-for-bimodules, prop-finite-dimensional-module-categories-are-intrinsically-finite, thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits, thm-finite-eilenberg-watts-for-right-exact-linear-functors, thm-finite-left-exact-functors-are-hom-functors-with-dual-bimodule-kernels, thm-modules-over-a-ring-form-an-abelian-category, thm-right-adjoints-preserve-limits]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, §1.8 (Definitions 1.8.1–1.8.6, Proposition 1.8.10, Corollary 1.8.11, Remark 1.8.7), printed pp.9–11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1, Lemma 2.2, equation (2.1))"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Statement

Let $A,B$ be finite-dimensional unital algebras over a field $k$ and let
$F:A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$ be a $k$-linear functor
between the categories of finite-dimensional left modules. Then: (i) $F$ is
right exact if and only if $F$ has a right adjoint; more precisely, if $F$ is
right exact then $F\cong T_{F(A)}$ and $\operatorname{Hom}_B(F(A),-)$ is a
right adjoint taking finite-dimensional modules to finite-dimensional modules,
while a functor with a right adjoint preserves every finite colimit that exists
in $A\text{-}\mathrm{mod}$ and hence is right exact. (ii) $F$ is left exact if
and only if $F$ has a left adjoint; if $F$ is left exact then
$F\cong\operatorname{Hom}_A(M^{*},-)$ with $M=F(A^{*})$ and $M^{*}\otimes_B-$ is
a left adjoint, while a functor with a left adjoint preserves every finite limit
that exists and hence is left exact. No commutativity and no choice are used.

## Facts & Assumptions

**Given:** A field $k$, finite-dimensional unital $k$-algebras $A,B$, and a $k$-linear functor $F:A\text{-}\mathrm{mod}\to B\text{-}\mathrm{mod}$ between the categories of finite-dimensional left modules.

[F1] The categories $A\text{-}\mathrm{mod}$ and $B\text{-}\mathrm{mod}$ are finite $k$-linear abelian categories, hence have all finite limits and all finite colimits ([[prop-finite-dimensional-module-categories-are-intrinsically-finite]], [[def-abelian-category]], [[thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits]]).

[F2] A $k$-linear right exact $F$ is naturally isomorphic to $T_{F(A)}$ with $F(A)$ a finite-dimensional $(B,A)$-bimodule, and a $k$-linear left exact $F$ is naturally isomorphic to $\operatorname{Hom}_A(M^{*},-)$ with $M=F(A^{*})$ a finite-dimensional $(B,A)$-bimodule ([[thm-finite-eilenberg-watts-for-right-exact-linear-functors]], [[thm-finite-left-exact-functors-are-hom-functors-with-dual-bimodule-kernels]]).

[F3] For a $(B,A)$-bimodule $N$ the functor $T_N=N\otimes_A-$ is left adjoint to $\operatorname{Hom}_B(N,-)$, with unit and counit satisfying the triangle identities; every module occurring is finite-dimensional when $N$ and the arguments are, since tensor products and Hom-spaces of finite-dimensional modules are finite-dimensional ([[lem-tensor-hom-adjunction-for-bimodules]], [[def-adjunction-by-unit-counit-and-triangle-identities]], [[def-dimension]], [[def-hom-groups-and-induced-hom-maps]], [[def-bimodule]]).

[F4] Left adjoints preserve every colimit that exists, and right adjoints preserve every limit that exists ([[cor-left-adjoints-preserve-colimits]], [[thm-right-adjoints-preserve-limits]]).

[F5] A functor is right exact when it preserves every finite colimit that exists, and left exact when it preserves every finite limit that exists; in particular a functor preserving all finite colimits (or limits) of the abelian source is right (respectively left) exact ([[def-left-exact-and-right-exact-functor]], [[def-module-homomorphism-kernel-image-and-cokernel]], [[def-exact-and-short-exact-sequences-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 (i), forward direction. Assume $F$ right exact. By [F2] $F\cong T_{F(A)}$ with $F(A)$ a finite-dimensional $(B,A)$-bimodule, and by [F3] the functor $T_{F(A)}$ is left adjoint to $\operatorname{Hom}_B(F(A),-)$, which sends a finite-dimensional left $B$-module $Y$ to the finite-dimensional space $\operatorname{Hom}_B(F(A),Y)$; so $\operatorname{Hom}_B(F(A),-)$ is a right adjoint of $F$ that stays in the finite module categories. [F2, F3, given]

1.2 (i), converse direction. Assume $F$ has a right adjoint. Then $F$ is a left adjoint and preserves every colimit that exists by [F4]; since $A\text{-}\mathrm{mod}$ has all finite colimits by [F1], $F$ preserves them and is right exact by [F5]. [F1, F4, F5]

1.3 (ii), forward direction. Assume $F$ left exact. By [F2] $F\cong\operatorname{Hom}_A(M^{*},-)$ with $M=F(A^{*})$ a finite-dimensional $(B,A)$-bimodule, so $M^{*}$ is an $(A,B)$-bimodule and by [F3] the functor $M^{*}\otimes_B-$ is left adjoint to $\operatorname{Hom}_A(M^{*},-)$, taking finite-dimensional left $B$-modules to finite-dimensional left $A$-modules because $M^{*}\otimes_BY$ is a quotient of the finite-dimensional $M^{*}\otimes_kY$. Hence $F$ has a left adjoint. [F2, F3, given]

1.4 (ii), converse direction. Assume $F$ has a left adjoint. Then $F$ is a right adjoint and preserves every limit that exists by [F4]; since $A\text{-}\mathrm{mod}$ has all finite limits by [F1], $F$ preserves them and is left exact by [F5]. [F1, F4, F5]

2.1 Steps 1.1 and 1.2 prove (i), and steps 1.3 and 1.4 prove (ii). All adjoints exhibited stay inside the finite module categories, no commutativity of $A$ or $B$ was used, and all tensor products, Hom-spaces and adjunction data involved are finite-dimensional, so no choice is used. [step 1.1, step 1.2, step 1.3, step 1.4, given] ∎
