---
id: lem-proper-henselian-restriction-for-sections-and-finite-etale-covers
kind: lemma
title: Proper henselian restriction for sections and finite etale covers
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
- lem-proper-finite-type-schemes-have-proper-fp-closed-thickenings
- lem-arbitrary-henselian-proper-fp-sections-and-finite-etale-restriction
- thm-etale-morphisms-open-and-quasi-finite
- thm-etale-locally-standard-etale
- thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings
- lem-faithfully-flat-effective-descent-of-modules-and-algebras
- def-henselian-pair-and-henselian-local-ring
- def-small-etale-site-of-a-scheme
- def-etale-morphism-schemes
- def-finite-morphism-schemes
- def-etale-fppf-topology-comparison-and-cohomology-models
- lem-finite-morphism-etale-direct-image-calculus
- lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses
- def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Finite etale covers of proper schemes
    url: https://stacks.math.columbia.edu/tag/0BQC
    locator: Lemma 58.9.1, complete displayed proof. Its henselian reduction uses Grothendieck algebraization and Artin approximation; those are identified as unresolved local proof obligations here.
  - title: SGA 1, Expose IX, Theorem 1.10
    url: https://arxiv.org/pdf/math/0206203
    locator: The complete-local finite-etale comparison used in Expose IX. The Henselian case requires the additional approximation step recorded by Stacks 58.9.1; no local reconstruction is supplied here.
  - title: The Stacks Project, The proper base change theorem
    url: https://stacks.math.columbia.edu/tag/095S
    locator: Lemmas 59.91.1-3, global sections on a proper scheme over a Henselian local base and its closed fibre. The displayed proof depends on the separately cited affine Henselian-pair inputs.
proof_contract_scope:
  public_choice_hypotheses:
  - AC
  target_scope_must_remain_unqualified: true
  proof_status: AC-scoped proof reconstruction staged; readiness not asserted
  source_locator: Stacks 0BQC Lemma 58.9.1 and SGA 1 Expose IX 1.10 read for scope; the local reconstruction uses the explicitly bound algebraization and approximation suppliers.
  old_target_unchanged_held: true
---

## Statement

Assume the Axiom of Choice. Let $(A,\mathfrak m)$ be a local ring whose pair $(A,\mathfrak m)$ is henselian, meaning every factorization of a monic polynomial over $A/\mathfrak m$ into coprime monic factors lifts uniquely to a factorization over $A$. Let $f:X\to\operatorname{Spec}(A)$ be proper (separated, of finite type, and universally closed), and let $X_0=X\times_{\operatorname{Spec}(A)}\operatorname{Spec}(A/\mathfrak m)$ be its closed fibre. For a scheme $T$, let $\mathrm{F\acute{E}t}_T$ denote the category of finite etale $T$-schemes and $T$-morphisms. The base-change functor $\mathrm{F\acute{E}t}_X\to\mathrm{F\acute{E}t}_{X_0}$, $U\mapsto U\times_X X_0$, is an equivalence. The small etale site of $X$ has etale $X$-schemes as objects and jointly surjective etale families as coverings. For every sheaf of sets $\mathcal F$ on this site, the natural restriction map $\Gamma(X,\mathcal F)\to\Gamma(X_0,i^{-1}\mathcal F)$ is a bijection, where $i:X_0\hookrightarrow X$ is the closed immersion. Consequently, for every finite abelian group $M$, restriction induces an isomorphism $H^1_{\mathrm{et}}(X,\underline M)\to H^1_{\mathrm{et}}(X_0,\underline M)$ for the associated constant sheaves.

## Statement references

[The Stacks Project, Lemma 58.9.1 (0BQC)](https://stacks.math.columbia.edu/tag/0BQC)

[[def-henselian-pair-and-henselian-local-ring]]

[[def-small-etale-site-of-a-scheme]]

[[def-etale-morphism-schemes]]

[[def-finite-morphism-schemes]]

[[def-etale-fppf-topology-comparison-and-cohomology-models]]

[SGA 1, Expose IX, Theorem 1.10](https://arxiv.org/pdf/math/0206203)

[The Stacks Project, Lemmas 59.91.1-3 (095S)](https://stacks.math.columbia.edu/tag/095S)

## Facts & Assumptions

**Given:** AC, the henselian local ring A, proper finite-type X/A, closed fibre X_0, and the sheaf or finite group in the relevant clause.

[F1] Under AC, a proper finite-type scheme over an affine base is a closed inverse limit of proper finitely presented schemes over that base. [[lem-proper-finite-type-schemes-have-proper-fp-closed-thickenings]]

[F2] Under AC, proper finitely presented schemes over arbitrary henselian local rings satisfy the asserted finite-étale, étale set-section and finite-constant torsor restriction results. [[lem-arbitrary-henselian-proper-fp-sections-and-finite-etale-restriction]]

[F3] Étale morphisms are open under AC. [[thm-etale-morphisms-open-and-quasi-finite]]

[F4] Étale morphisms admit local standard-étale charts under AC. [[thm-etale-locally-standard-etale]]

[F5] AC is assumed. [[def-axiom-of-choice]]

[F6] Under AC a locally small Grothendieck abelian category has injective embeddings. [[thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]]

[F7] Faithfully flat descent is effective for modules, algebras and maps. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

## Proof

**Proof technique:** finite certificates on closed finitely presented thickenings.

1.1 By [F1], write X as the inverse limit of proper finitely presented A-schemes X_i with closed-immersion transitions. Their closed fibres form a directed family of closed subschemes of a fixed finite-type scheme over k=A/m, hence of a Noetherian scheme. Finite affine charts, finite-presentation étale objects and maps descend along the closed affine-transition limit: on finite affine covers use the standard-étale presentations and inverse-derivative equations of [F4], and descend their finitely many coefficients, gluing maps and equations. The same finite-equation argument descends finite projective idempotent matrices, multiplication, unit, perfect-trace inverses, maps and their equations. [F1, F4, F5, given, construct, algebra]

2.1 Let finitely many descended étale maps cover the closed fibre of X, or a specified closed-fibre overlap. By [F3] their images are open. The complement on a fixed stage is closed in a finite-type k-scheme. If every later stage met that complement, the directed family of closed intersections would have the finite-intersection property and its intersection would be nonempty by Noetherian quasi-compactness, contradicting coverage on the limit. Equivalently, a unit identity in the union of the defining ideals uses finitely many coefficients and already holds at a stage. Thus each of the finitely many covering assertions holds at one common stage. No arbitrary sheaf is descended. [F1, F3, F5, step 1.1, given, construct, algebra]

2.2 A finite étale cover of X_0 is described on finitely many affine charts by finite projective idempotents, multiplication, unit, perfect-trace inverse, overlap isomorphisms and their finite identities. Step 1.1 descends all these data to one closed fibre (X_i)_0; the perfect-trace criterion and the finite projective presentation ensure the descended algebra is finite étale. By [F2] it lifts to X_i; restriction to X gives the required cover. Given two finite étale covers of X and a map on X_0, descend the covers and the finite map to a common stage and lift there by [F2]. Equalities of finitely presented maps that hold on the limit hold at a later stage by the same finite equations, so the lift is unique on X. Thus the restriction functor on finite étale schemes is an equivalence. [F1, F2, F4, F5, step 1.1, given, construct, algebra]

3.1 For an arbitrary étale set sheaf F, two global sections equal on X_0 have an open equality locus by [F3]. Its closed complement is proper over Spec A and misses the closed fibre, hence is empty: a nonempty closed image in a local spectrum contains its closed point. This proves injectivity. [F1, F3, F5, step 2.2, given, construct, algebra]

4.1 Let s_0 be a section of the inverse-image sheaf on X_0. By the inverse-image and sheafification definitions, locally it is represented by sections f_i∈F(U_i). Lift finite standard-étale closed-fibre charts through their monic polynomial, derivative and localization equations using [F4]. Shrink the ambient U_i so the representing closed-fibre chart maps surjectively to U_i×X X_0; then the sheaf axiom identifies f_i with s_0 on that entire piece. Quasi-compactness of X_0 gives finitely many U_i. For every ordered pair choose finitely many qc open equality witnesses V_ij⊂U_i×_X U_j covering the closed-fibre overlap. The pulled-back f_i and f_j agree on V_ij. [F1, F3, F4, F5, step 3.1, given, construct, algebra]

5.1 Let G be the sheaf coequalizer of `coprod V_ij ⇒ coprod U_i` in set sheaves on X. The equalities give G→F. The canonical sections on the U_i agree on the entire closed-fibre overlaps and glue to g_0∈Γ(X_0,G|X_0), mapping to s_0. Descend the finite objects and arrows to X_i by step 1.1 and the finite closed-fibre cover assertions by step 2.1. Their coequalizer G_i pulls back to G, because inverse image preserves colimits and represented étale objects. The corresponding canonical sections glue to a closed-fibre section of G_i. [F1, F2, F3, F4, F5, step 4.1, given, construct, algebra]

6.1 Apply [F2] to G_i on the proper finitely presented X_i; its closed-fibre section lifts globally. Pull that section to X and compose G→F. It restricts to s_0. Combined with step 3.1, restriction is a bijection for all étale set sheaves. The proof descends only one finite presentation of representatives and equality witnesses, never F itself. [F1, F2, F3, F5, step 5.1, given, construct, algebra]

7.1 A finite-constant M-torsor is represented by a finite étale scheme: on each affine choose a finite affine étale trivializing cover, apply the algebra descent [F7] to the finite product algebra of its |M| local sections, and descend finite projectivity and vanishing differentials by faithful flatness. These affine schemes glue uniquely. Finite-constant group actions and torsor isomorphisms are finite maps and equations. Descend a closed-fibre torsor and all these data as in step 2.2, lift the finite étale cover and the action through the equivalence [F2], and use full faithfulness to lift and reflect the torsor identity. Step 2.2 similarly lifts torsor isomorphisms and reflects equivariance. Thus restriction gives an equivalence on finite-constant torsors. For finite abelian M, the torsor interpretation follows directly from an injective sheaf resolution: an H^1 class represented by a global 1-cocycle has a sheaf of local primitives, an M-torsor; changing the cocycle by a boundary translates its primitives. Conversely an M-torsor is locally trivial and its local sections give compatible differences, recovering the same class. The abelian sheaf category on the fixed small étale site is Grothendieck, so [F6] supplies the required injective resolution. This correspondence is natural in restriction and identifies addition with contracted product. Hence H^1 restriction is an isomorphism. [F1, F2, F5, F6, F7, step 2.2, given, construct, algebra] ∎

## Source and authoring record

This is a local AC-scoped reconstruction using the bound proper-finitely-presented and closed-thickening suppliers. The earlier unqualified target and all owner holds remain separate; this research copy is not installed or recorded.
