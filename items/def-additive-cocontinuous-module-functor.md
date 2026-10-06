---
id: def-additive-cocontinuous-module-functor
kind: definition
title: "Additive cocontinuous module functors and their schematic category"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-additive-functor
  - def-preservation-reflection-creation-continuity-and-cocontinuity
  - def-functor-category
  - def-left-exact-and-right-exact-functor
  - def-left-and-right-modules
  - rem-category-theory-class-and-size-conventions
justified_by:
  - lem-additive-cocontinuous-module-functors-form-a-category
  - lem-additive-module-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving
aliases: []
dependency_level: 0
proof_strategy: construction
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "M. Kamensky, Non-Commutative Algebra (BGU course notes, Spring 2017), §5.1, Theorem 5.1.43, Proposition 5.1.40, Lemma 5.1.46, Corollaries 5.1.48-5.1.49"
      url: "https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf"
    - title: "A. Nyman and S. P. Smith, A Generalization of Watts's Theorem: Right Exact Functors on Module Categories, arXiv:0806.0832, Theorem 1.1-1.2, Propositions 3.2-3.3, Lemma 3.4"
      url: "https://arxiv.org/pdf/0806.0832"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $A$ and $B$ be unital rings, and let $A\text{-}\mathbf{Mod}$ and
$B\text{-}\mathbf{Mod}$ be their categories of unital left modules
([[def-left-and-right-modules]]). A functor
$F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ is **additive** when its
induced maps on hom-groups are group homomorphisms
([[def-additive-functor]]), and **cocontinuous** when it preserves every small
(set-indexed) colimit
([[def-preservation-reflection-creation-continuity-and-cocontinuity]]). The
functor is **additive cocontinuous** when it is both additive and cocontinuous.

Cocontinuity has a module-theoretic reformulation: an additive functor
$F:A\text{-}\mathbf{Mod}\to B\text{-}\mathbf{Mod}$ preserves all small colimits
if and only if it is right exact
([[def-left-exact-and-right-exact-functor]]) and preserves arbitrary direct
sums. The characterization is proved in
[[lem-additive-module-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving]].

We write
$\mathrm{Fun}^{\mathrm{coc}}_{\mathrm{add}}(A\text{-}\mathbf{Mod},B\text{-}\mathbf{Mod})$
for the **schematic category** of these functors and natural transformations,
with componentwise identities and vertical composition. As prescribed by
[[def-functor-category]] and [[rem-category-theory-class-and-size-conventions]],
this is metatheoretic shorthand: functors on the large module category are
fixed definable-class schemas, not set-coded objects of a ZFC class category.
All categorical assertions here and in the Eilenberg–Watts equivalence are
understood componentwise for fixed such schemas. For each fixed pair $F,G$,
[[lem-additive-cocontinuous-module-functors-form-a-category]] proves that a
natural transformation is determined by its component at $A$ and that the
admissible components form a set. We use that set as
$\operatorname{Nat}(F,G)$; the corresponding proper-class families themselves
are not elements of a set. No category of all definable-class functors is
formed.

The term is a property of a functor; no commutativity of $A$ or $B$ is assumed,
and no choice is used.
