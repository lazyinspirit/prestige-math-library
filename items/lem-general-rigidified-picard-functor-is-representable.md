---
id: lem-general-rigidified-picard-functor-is-representable
kind: lemma
title: "Representability of the rigidified Picard functor for a projective integral variety"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [lem-arith-hilbert-divisor-charts-and-picard-diagonal, thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation, lem-nonaffine-fppf-descent-of-scheme-morphisms, thm-gluing-affine-schemes, cor-weak-nullstellensatz-algebraically-closed-coordinate-form, thm-serre-vanishing, lem-eventual-global-generation-coherent-twists, thm-cohomology-and-base-change, lem-filtered-colimit-fp-scheme-stage, def-axiom-of-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "S. Kleiman, The Picard Scheme, Theorem 4.8"
      url: "https://arxiv.org/pdf/math/0504020"
      locator: "The published general divisor-chart supplier reads this theorem; the proof below reconstructs the translation argument from that supplier and the published generic quotient. No additional source reading is claimed."
verification: {}
---

## Statement

Assume AC and DC. Let $X$ be a projective integral scheme over an algebraically closed field $k$, and choose $e\in X(k)$. The functor assigning to every $k$-scheme $T$ the isomorphism classes of line bundles on $X\times_kT$ rigidified along $e\times T$ is represented by a separated locally finite-type $k$-group scheme. It has a universal rigidified line bundle, and the represented group law is tensor product. Equivalently, it represents the fppf sheafification of $T\mapsto\operatorname{Pic}(X_T)/\operatorname{Pic}(T)$ on all tests.

In particular this applies to smooth integral projective varieties. No assertion that its reduced identity component is proper, smooth, or an abelian variety is made here.

## Facts & Assumptions

**Given:** AC, DC, the projective integral $k$-scheme $X$, the algebraically closed field and the chosen point $e$.

[F1] For a projective geometrically integral scheme, positive divisor charts represent classes as projective-space bundles fppf-locally; the Picard sheaf has representable quasi-compact diagonal and is separated once represented, and a rational point identifies it with rigidified line bundles ([[lem-arith-hilbert-divisor-charts-and-picard-diagonal]]).

[F2] A flat finite-type equivalence-relation groupoid on a separated finite-type $k$-scheme admits a nonempty saturated open with finite-type scheme quotient and the stated flat kernel pair ([[thm-nonaffine-generic-scheme-quotient-flat-equivalence-relation]]).

[F3] Scheme morphisms descend uniquely along fppf covers; affine schemes glue along compatible open overlaps; closed points of finite-type $k$-schemes have residue field $k$ ([[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[thm-gluing-affine-schemes]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]).

[F4] Positive twists have uniform higher-cohomology vanishing and eventual global generation on Noetherian projective tests; proper cohomology and base change supply the local positive-chart conditions, and finite-presentation data descend to a finite-type stage ([[thm-serre-vanishing]], [[lem-eventual-global-generation-coherent-twists]], [[thm-cohomology-and-base-change]], [[lem-filtered-colimit-fp-scheme-stage]]).

## Proof

**Proof technique:** form one quotient chart, cover by its translations, and glue the represented open subfunctors.

1.1 Since $k$ is algebraically closed, the integral $X$ is geometrically integral. Let $\mathcal P$ be the sheaf in [F1], and select a nonempty finite-type positive-divisor chart $D\to\mathcal P$. Such a chart exists: a sufficiently positive very ample line bundle has a nonzero section, giving an effective divisor; the zero-dimensional case is the trivial Picard functor and also follows directly. For a class represented by a divisor on $D$, [F1] identifies the pullback $D\times_{\mathcal P}D\to D$ with its family of positive divisors, a projective-space bundle fppf-locally. Hence the relation $R=D\times_{\mathcal P}D\rightrightarrows D$ is represented, flat and finite type. Apply [F2] to get a nonempty saturated open $W\subset D$ and a finite-type quotient scheme $Q=W/R_W$. [F1, F2, given, choose, construct, algebra]

2.1 The image $U$ of $W$ is an open subfunctor of $\mathcal P$. Indeed for any test $T\to\mathcal P$, the base change $D_T\to T$ is smooth and surjective on the relevant positive open by [F1]. The inverse image of $W$ in $D_T$ is open and saturated under its kernel pair, so it is the full inverse image of an open subset of $T$; smooth maps are open. The quotient property in [F2] identifies $U$ with the scheme $Q$ on every test, using fppf descent [F3]. Thus $U\hookrightarrow\mathcal P$ is a represented nonempty open subfunctor of finite type. [F1, F2, F3, given, step 1.1, construct, algebra]

3.1 Choose $u\in U(k)$, possible because a nonempty finite-type $k$-scheme has a closed $k$-point by [F3]. For every $a\in\mathcal P(k)$ the translate $a-u+U$ contains $a$. These translates are represented open subfunctors because tensoring by the fixed rigidified class $a-u$ is a sheaf automorphism. Their union covers all of $\mathcal P$, not only its $k$-points: pull it back to each finite-type positive-divisor chart and its twists. This pullback is open and contains all closed points, so its closed complement is empty by [F3]. For a line bundle on a Noetherian test, [F4] gives a sufficiently positive twist with the regularity and base-change conditions in [F1], locally on the test. Arbitrary tests reduce locally to a finite-type stage by [F4]. Thus positive charts and inverse twists cover the Picard sheaf fppf-locally on every test. Consequently the translates cover on all tests. [F1, F3, F4, given, step 2.1, choose, construct, algebra]

4.1 Overlaps of the translated copies of $Q$ are represented by open subschemes, with identity transition maps as subfunctors of $\mathcal P$. Their cocycle identities are automatic; glue their affine open covers using [F3] to a scheme $P$ representing the full sheaf. It is locally of finite type, and [F1] supplies separatedness. Tensor product and inversion on rigidified line bundles are natural on all tests, so Yoneda supplies the group-scheme operations and identities. The identity map $P\to P$ represents a rigidified line bundle on $X\times P$, giving the universal bundle; the rational-point clause of [F1] identifies this functor with the indicated Picard sheaf. This includes smooth integral projective $X$ and all nonreduced test schemes, without asserting properness of the identity component. [F1, F3, given, step 2.1, step 3.1, construct, algebra] ∎

## Boundary

The Picard-scheme representability just proved does not prove finite generation of the Néron–Severi group or properness of the reduced Picard identity component. Those are separate obligations in any consumer requiring them.
