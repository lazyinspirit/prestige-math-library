---
id: lem-finite-constructible-bijective-specialization-is-lisse
kind: lemma
title: Constructible sheaves with bijective specialization are lisse
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-constructible-etale-sheaf-of-finite-modules
- def-small-etale-site-of-a-scheme
- thm-existence-of-algebraic-closures
- thm-etale-morphisms-open-and-quasi-finite
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Constructible sheaves
    url: https://stacks.math.columbia.edu/tag/03RW
    locator: Definition 59.71.1 read for constructible-sheaf scope; the specialization argument below is local.
dependency_level: 6
proof_strategy: direct
axiom_use: AC is explicit and is used for the geometric-point and finite stratification interfaces.
---

## Statement

Assume the Axiom of Choice. Let X be a Noetherian scheme, Λ a finite commutative ring, and F a finite constructible étale Λ-module sheaf on X. If every geometric specialization map of stalks of F is bijective, then F is finite locally constant. Its local module type is the type of the corresponding geometric stalk.

## Facts & Assumptions

**Given:** AC, X, Λ, F and the specialization hypothesis in the Statement.

[F1] A finite constructible sheaf has a finite locally closed stratification on which it is finite locally constant. [[def-constructible-etale-sheaf-of-finite-modules]]

[F2] Under AC every residue field has an algebraic closure, and étale maps have open images. [[thm-existence-of-algebraic-closures]] [[thm-etale-morphisms-open-and-quasi-finite]]

[F3] The small étale site and its sheaf restrictions are as defined. [[def-small-etale-site-of-a-scheme]]

[F4] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** local generators and the specialization-stable constructible failure locus.

1.1 Fix a geometric point x. Its finite stalk has elements a_1,…,a_r. By the definition of a stalk, after one common affine étale neighbourhood U→X choose sections s_i∈F(U) representing these finitely many elements. They define a map of sheaves of finite sets from the constant set `{1,…,r}` to F|U, which is a bijection on the stalk at x. [F1, F2, F3, F4, given, construct, algebra]

2.1 Its failure locus D⊂U is constructible. Indeed restrict the finite stratification [F1] to U, refine by a finite étale trivialization of F on each stratum, and observe that a map between two finite constant sets is either bijective or not on each connected trivializing piece. Images of the finitely many pieces give a finite constructible partition recording that failure. For every geometric specialization, naturality and the hypothesis identify the two stalk maps by bijections; therefore D is stable under specialization and generization. Under AC each specialization of ordinary points can be equipped with compatible geometric points, and bijectivity is independent of the chosen geometric point over a fixed ordinary point. [F1, F2, F3, F4, step 1.1, given, construct, algebra]

3.1 A constructible subset of a Noetherian space stable under both specialization and generization is open and closed: each irreducible component is entirely in it or entirely outside, because its generic point is comparable to every point of the component; intersecting components force the same choice. There are finitely many irreducible components, so the selected union and its complement are both closed. Since x is outside D, an open neighbourhood of x avoids D. On it the map of step 1.1 is an isomorphism: geometric stalks detect injectivity and local surjectivity. Indeed a failed equality or lift has a geometric point over its nonempty open locus, by [F2]; conversely the local witnesses from all geometric points have open images covering the source, and the sheaf axiom glues them. [F1, F2, F4, step 2.1, given, construct, algebra]

4.1 The resulting finite constant set trivialization makes addition, zero and each scalar operation into maps between finite constant sets. There are finitely many operations because Λ is finite, and each is locally constant. Shrink once more around x so these operations are constant and agree with the module structure on F_x. Thus F is the constant Λ-module F_x on that étale neighbourhood. The construction works at every geometric point, so F is finite locally constant. [F1, F2, F3, F4, step 3.1, given, construct, algebra] ∎

## Source and authoring record

This local AC-scoped criterion is a separate prerequisite for elliptic relative lissity. It does not assert that a particular higher direct image has bijective specialization maps. No independent review is asserted.
