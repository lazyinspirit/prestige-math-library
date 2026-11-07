---
id: lem-proper-torsion-degree-zero-exchange
kind: lemma
title: Degree-zero proper exchange for torsion étale sheaves
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-proper-henselian-restriction-for-sections-and-finite-etale-covers
- lem-proper-curve-torsion-cohomology-finite-and-field-invariant
- lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses
- lem-finite-morphism-etale-direct-image-calculus
- lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives
- lem-chow-lemma-proper-noetherian
- thm-proper-quasi-finite-is-finite
- thm-etale-locally-standard-etale
- thm-equivalent-elementary-forms-of-hensels-property
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Proper base change
    url: https://stacks.math.columbia.edu/tag/095S
    locator: Section 59.91, degree-zero proper restriction and reduction; the displayed local AC-scoped argument below is reconstructed from the named local suppliers rather than imported as a theorem.
dependency_level: 10
proof_strategy: direct
axiom_use: AC is explicit and inherited from the proper-henselian, curve-invariance and Noetherian Chow suppliers.
---

## Statement

Assume the Axiom of Choice. Let f:X→S be proper with S Noetherian, let g:T→S be any morphism, and form the Cartesian square with projections f_T:X_T→T and h:X_T→X. For every torsion abelian sheaf F on X_et, the canonical exchange map `g^* f_*F → (f_T)_* h^*F` is an isomorphism. No Noetherian hypothesis is imposed on T.

## Facts & Assumptions

**Given:** AC, the proper map, base change, torsion sheaf and canonical exchange map in the Statement.

[F1] Proper schemes over arbitrary henselian local rings have bijective restriction of all étale set sections to their closed fibres, under AC. [[lem-proper-henselian-restriction-for-sections-and-finite-etale-covers]]

[F2] Proper curves over separably closed fields have torsion cohomology invariant under extensions of separably closed fields, in particular in degree zero. [[lem-proper-curve-torsion-cohomology-finite-and-field-invariant]]

[F3] Étale cohomology of fixed inverse-image abelian sheaves commutes with qcqs affine-transition limits under AC. [[lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses]]

[F4] Finite direct image commutes with arbitrary base change. [[lem-finite-morphism-etale-direct-image-calculus]]

[F5] Noetherian Chow modification and the proper-quasi-finite-is-finite theorem hold at their AC scopes. [[lem-chow-lemma-proper-noetherian]] [[thm-proper-quasi-finite-is-finite]]

[F6] Geometric stalks of étale sheaves are exact and conservative under AC. [[lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives]]

[F7] Étale maps admit standard charts and henselian local rings lift simple residue roots. [[thm-etale-locally-standard-etale]] [[thm-equivalent-elementary-forms-of-hensels-property]]

[F8] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** henselian section restriction, proper-surjective equalizers and the projective-line/Chow reduction.

1.1 For a proper surjection u:Y→X of Noetherian schemes and an abelian étale sheaf E on X, the canonical diagram `E→u_*u^*E ⇒ v_*v^*E`, with v:Y×_X Y→X, is an equalizer. Check on a geometric stalk x. By [F3], the stalks are sections over the corresponding strict henselization A of X at x; the pulled-back maps are proper, even if A is non-Noetherian. By [F1], restrict their sections to the closed fibre. A sheaf on a separably closed field has the same pullback to that fibre as the constant set with value E_x. For any finite-type scheme over that field, its connected components are finitely many and its global sections of this constant set are the product indexed by those components. Surjectivity makes the fibre nonempty. [F1, F3, F6, F7, F8, given, construct, algebra]

2.1 The connected components of the fibre product are the products of the connected components of the fibre. To see this, pass to an algebraic closure of the separably closed residue field; this purely inseparable extension is a universal homeomorphism. Over an algebraically closed field, the product of connected finite-type schemes is connected: choose a rational point y_0 in the first factor; the connected slices `{y_0}×Z` and `Y×{z}` for rational z meet and their union contains every closed point, hence is dense and connected. This applies componentwise, and the purely inseparable passage preserves the component partition. The stalk diagram of step 1.1 is therefore `E_x→E_x^J ⇒ E_x^(J×J)` for a nonempty finite J, whose equalizer is the diagonal. Conservative stalks [F6] prove the asserted sheaf equalizer. The same argument applies after arbitrary base change, since the strict-local proper scheme needed in [F1] remains proper. [F1, F3, F6, F8, step 1.1, given, construct, algebra]

3.1 Suppose q0 exchange holds for f∘u and f∘v for all torsion coefficients, with u proper surjective and v:Y×_X Y→X. Since u^*F and v^*F are torsion, apply f_* to the equalizer of step 2.1; right adjoints preserve equalizers. Inverse image g^* is exact and preserves finite limits. After arbitrary base change, the same equalizer for u_T identifies the target. The two assumed exchange isomorphisms therefore identify the equalizers, proving q0 exchange for f. The exchange maps are the actual pullback-counit maps, so their naturality makes this a proof of the canonical comparison. [F1, F3, F6, F8, step 2.1, given, construct, algebra]

4.1 Let f:P¹_S→S. At a geometric point t of T with image s, [F3] computes each side of q0 exchange on the corresponding strict henselization; [F1] replaces sections on each proper strict-local projective line by sections on its closed fibre. The two residue fields are separably closed and the induced inclusion is an extension of separably closed fields. The closed fibres are proper curves; [F2] identifies their H^0 for the restricted torsion sheaf. These identifications are natural, so q0 exchange is an isomorphism on all stalks and hence an isomorphism. The strict-local H^0 calculation uses the actual closed geometric stalk: standard étale charts and the simple-root lift [F7] give a section of every pointed étale neighbourhood. [F1, F2, F3, F6, F7, F8, step 3.1, given, construct, algebra]

5.1 Finite maps and closed immersions satisfy q0 exchange by [F4]. For a quasi-compact u, u_* preserves torsion: over any quasi-compact étale test object, a section on its quasi-compact inverse image is locally killed by positive integers; a finite étale subcover and their least common multiple kill it globally. Thus q0 exchange for torsion coefficients is stable under proper composition by composing the natural direct-image and inverse-image maps. The multiplication of n binary linear forms defines a finite surjection `(P¹_S)^n→P^n_S`: its geometric fibres consist of the finitely many ordered factorizations of a nonzero binary form, including multiplicity; it is proper and quasi-finite, hence finite by [F5]. For a projective X⊂P^n_S, pull this map back to a finite surjection Y→X. The map Y→S factors through a closed immersion into `(P¹_S)^n`, so has q0 exchange by step 4.1 and composition. The map Y×_X Y→Y is finite and has q0 exchange, so Y×_X Y→S does too. Step 3.1 gives q0 exchange for X→S. [F3, F4, F5, F6, F8, step 4.1, given, construct, algebra]

6.1 For an arbitrary proper f:X→S with Noetherian S, work locally on S. By [F5] choose a proper surjective Chow modification u:Y→X with Y projective over S. The graph of u is closed because X is separated over S; the projective embedding of Y over S then makes u projective. Therefore Y×_X Y is projective over S as well. Step 5.1 proves q0 exchange for both Y→S and Y×_X Y→S, and step 3.1 proves it for X→S. The argument allowed arbitrary T throughout, so no Noetherian assumption on T is needed. [F3, F4, F5, F6, F8, step 5.1, given, construct, algebra] ∎

## Source and authoring record

Local AC-scoped reconstruction from the named suppliers. It proves only degree-zero exchange for torsion coefficients; it does not assert unqualified higher proper base change. This research carrier has not yet been installed or recorded.
