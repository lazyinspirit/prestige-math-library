---
id: "ex-constructible-six-operations-on-a-point-and-an-open-closed-line"
kind: example
title: "Point operations and the open closed constructible line"
status: draft
origin: session
deps: ["def-algebraically-constructible-complex-of-analytic-field-sheaves", "lem-field-module-sheaves-have-injective-derived-models", "thm-extension-by-zero-adjunction-exactness", "lem-extension-by-zero-short-exact-sequence", "lem-sheaf-supported-on-a-closed-subset-is-a-pushforward"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Goresky, Sheaves and Perverse Sheaves; local finite-model reconstruction"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
proof_strategy: direct
---

## Example

Over a field k, the constructible category of a point is the bounded derived category of finite-dimensional k-vector spaces. For the identity map of that point, all four pullback/pushforward operations are the identity; tensor and internal Hom are the usual finite cochain constructions and the dualizing object is k in degree zero. On the analytic algebraic line with j:C*→C and i:{0}→C, the k-linear ordinary localization sequence is $0\to j_!k_{\mathbb C^*}\to k_{\mathbb C}\to i_*k\to0$.

## Facts & Assumptions

**Given:** The spaces, coefficients, ordinary bounds and maps specified above; AC where stated.

[F1] The exact local supplier contract of [[def-algebraically-constructible-complex-of-analytic-field-sheaves]] is used with the hypotheses explicitly stated in its claim.

[F2] The exact local supplier contract of [[lem-field-module-sheaves-have-injective-derived-models]] is used with the hypotheses explicitly stated in its claim.

[F3] The exact local supplier contract of [[thm-extension-by-zero-adjunction-exactness]] is used with the hypotheses explicitly stated in its claim.

[F4] The exact local supplier contract of [[lem-extension-by-zero-short-exact-sequence]] is used with the hypotheses explicitly stated in its claim.

[F5] The exact local supplier contract of [[lem-sheaf-supported-on-a-closed-subset-is-a-pushforward]] is used with the hypotheses explicitly stated in its claim.

## Verification

1.1 A sheaf on a point is its section vector space. Finite-dimensional vector spaces are injective and every finite complex splits into its cohomology plus contractible pairs, so the actual injective derived model is the bounded finite vector-space cochain category. The identity map induces identity inverse and direct images, with identity adjunctions. Its proper-support image is also the identity, and its right adjoint is the identity. Finite tensor and Hom compute the displayed operations and duality, with no dimensional shift. [given, F1, F2, F3, F4, F5]

2.1 For the line, open extension by zero has the original stalk on C* and zero stalk at0. Closed direct image of k has stalk k at0 and zero elsewhere. The two canonical maps in the actual open/closed sequence are identities on their nonzero stalks, so the sequence is k-linearly short exact by the existing stalk calculation. The corresponding cone gives its ordinary localization triangle in the actual derived k-sheaf category. This computes these elementary operations directly; it does not assert a general six-functor construction by example. [given, F1, F2, F3, F4, F5] ∎

## Source notes

This is an authored research draft with a local proof from the exact named suppliers. Its ordinary algebraic triangulation, support/duality and source prerequisites retain their own current proof status. No independent audit, native verdict, readiness or gate pass is asserted. The durable construction and actual source readings are recorded in the constructible packet and proof notes.
