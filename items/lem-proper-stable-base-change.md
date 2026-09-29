---
id: lem-proper-stable-base-change
kind: lemma
title: Properness survives arbitrary base change
status: draft
origin: pipeline
deps:
  - def-proper-morphism
  - cor-base-change-finite-type-and-products
  - def-universally-closed-morphism
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-diagonal-base-change-identification
  - def-separated-morphism-schemes
  - def-axiom-of-choice
  - lem-base-change-composition
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Stacks Project, Morphisms of Schemes, Lemma 29.42.5 (tag 01W4)"
      url: https://stacks.math.columbia.edu/tag/01W4
---

## Statement

Assume the Axiom of Choice (AC). For every proper morphism $f:X\to S$ and
every morphism $S'\to S$, the base-changed morphism
$$f_{S'}:X\times_S S'\longrightarrow S'$$
is proper.

## Facts & Assumptions

**Given:** AC, a proper morphism $f:X\to S$, and an arbitrary morphism
$S'\to S$ of schemes.

[F1] A morphism is proper exactly when it is separated, of finite type, and
universally closed. ([[def-proper-morphism]])

[F2] Arbitrary base change preserves finite-type morphisms. No Noetherian or
flatness hypothesis is required. ([[cor-base-change-finite-type-and-products]])

[F3] A morphism is separated exactly when its diagonal is a closed immersion.
([[def-separated-morphism-schemes]])

[F4] Under the canonical fibre-product identification, the diagonal after
base change is the base change of the original diagonal.
([[lem-diagonal-base-change-identification]])

[F5] Assume AC. Every base change of a closed immersion is a closed immersion.
([[lem-closed-immersion-affine-quotient-and-base-change]])

[F6] A morphism is universally closed exactly when every base change along a
scheme over its target is a closed map. ([[def-universally-closed-morphism]])

[F7] Iterated base changes are canonically isomorphic, compatibly with their
induced morphisms. ([[lem-base-change-composition]])

[F8] AC says that every family of nonempty sets admits a choice function.
([[def-axiom-of-choice]])

**Exact AC use:** AC is used only in [F5], whose affine-quotient proof states
AC as a hypothesis. The proof of finite-type stability in [F2] and the
universal-closedness argument from [F6]--[F7] do not use AC.

## Proof

1.1 By [F1], $f$ is separated, of finite type, and universally closed; in particular, its diagonal $\Delta_{X/S}$ is a closed immersion by [F3]. [F1, F3]

1.2 By [F2], the base change $f_{S'}$ is of finite type. [F1, F2]

1.3 By [F4], the diagonal $\Delta_{X_{S'}/S'}$ is the base change of $\Delta_{X/S}$. By the AC-qualified [F5] it is a closed immersion, so [F3] makes $f_{S'}$ separated. This is the only use of AC in the argument. [F3, F4, F5, F8]

1.4 Let $T\to S'$ be any morphism. By [F7], the base change of $f_{S'}$ to $T$ is canonically isomorphic, compatibly with its projection to $T$, to the base change of $f$ along the composite $T\to S'\to S$. Since $f$ is universally closed by [F1], [F6] says this latter map is closed. Thus every base change of $f_{S'}$ is closed, and [F6] makes $f_{S'}$ universally closed. [F1, F6, F7]

2.1 The morphism $f_{S'}$ is separated by step 1.3, of finite type by step 1.2, and universally closed by step 1.4. Hence it is proper by [F1]. If $X$ is empty its pullback is empty; if $S$ is empty then $S'$ and $X$ are empty. Zero-ring affine charts remain empty under base change. For the identity $S'=S$, the assertion returns $f$. Nonreduced schemes and arbitrary bases are covered without additional hypotheses. There are no endpoint or equivalence cases. [F1, step 1.2, step 1.3, step 1.4] ∎
