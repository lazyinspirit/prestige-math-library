---
id: thm-global-flat-duality-finite-constant-field-curves
kind: theorem
title: "Flat duality for finite flat group schemes on curves over finite fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - thm-local-flat-duality-equal-characteristic-finite-residue
  - thm-artin-verdier-duality-for-finite-etale-sheaves-on-global-curves
  - def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings
  - def-global-field
  - def-finite-field-and-its-order
  - def-algebraic-curve-over-field
  - def-pontryagin-dual-and-compact-open-topology
  - def-axiom-of-choice
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
justified_by: []
proof_strategy: direct
axiom_use: "The current source route uses AC through function-field, completion, and Brauer-sequence suppliers and DC through the local equal-characteristic cohomology conventions. The Statement remains unqualified and no rational point on the proper curve is assumed."
provenance:
  statement: literature-derived
  proof: escalated
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter III, §§8.1–8.5, Theorem 8.2"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Cyril Demarche and David Harari, Artin–Mazur–Milne duality for fppf cohomology, §§2 and 4"
      url: "https://arxiv.org/pdf/1804.03941"
    - title: "Takashi Suzuki, Duality for Local Fields and Sheaves on the Category of Fields, §2.7"
      url: "https://arxiv.org/pdf/1310.4941"
verification: {}
---

## Statement

Let $k$ be a finite field, let $C/k$ be a smooth proper geometrically integral curve whose full constant field is $k$, and let $U\subseteq C$ be a nonempty open subscheme. Let $G$ be a commutative finite flat group scheme over $U$ with Cartier dual $G^D$. For every integer $r$, evaluation, cup product, and the compact-support trace give a pairing
$$H^r_{\mathrm{fppf}}(U,G^D)\times H^{3-r}_{c,\mathrm{fppf}}(U,G)
\longrightarrow H^3_{c,\mathrm{fppf}}(U,\mathbb G_m)
\xrightarrow{\operatorname{tr}_U}\mathbb Q/\mathbb Z,$$
which identifies $H_c^{3-r}(U,G)$ with the continuous Pontryagin dual of $H^r_{\mathrm{fppf}}(U,G^D)$ under the compact-open character convention. The compact-support groups use the completions at the closed points of $C\setminus U$; no $k$-rational point on $C$ is required.

## Statement references

[[thm-local-flat-duality-equal-characteristic-finite-residue]]

[[thm-artin-verdier-duality-for-finite-etale-sheaves-on-global-curves]]

[[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]

[[def-algebraic-curve-over-field]]

[[def-finite-field-and-its-order]]

[[def-pontryagin-dual-and-compact-open-topology]]

[Milne, *Arithmetic Duality Theorems*, Chapter III, §§8.1–8.5](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Demarche–Harari, §§2 and 4](https://arxiv.org/pdf/1804.03941)

[Suzuki, §2.7](https://arxiv.org/pdf/1310.4941)

## Facts & Assumptions

**Given:** the finite field $k$ and AC by [A1] for the current proof route, the curve $C$, open $U$, and $G$ in the
Statement.

[A1] [[def-axiom-of-choice]]: AC is assumed through the function-field,
completion, and Brauer-sequence interfaces used by the source route.

[A3] DC is inherited through the local equal-characteristic cohomology
supplier [F3] and the compact-support convention [F2]; it is not added to the
Statement as a hypothesis.

[F1] [[def-finite-field-and-its-order]] defines the finite base field;
[[def-algebraic-curve-over-field]] defines the smooth proper geometrically
integral curve; [[def-global-field]], [[def-place-of-a-global-field]], and
[[def-completion-of-a-global-field-at-a-place]] fix the global function field,
its closed places, and their completions. The exact constant-field hypothesis
is part of [[def-global-field]].

[F2] [[def-pontryagin-dual-and-compact-open-topology]] defines the continuous
character group; [[def-finite-flat-group-scheme-and-cartier-dual]] gives the Cartier dual
and evaluation pairing; [[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]
fixes the completed-local compact-support convention.

[F3] [[thm-local-flat-duality-equal-characteristic-finite-residue]] is the
local duality input at each missing closed point. Its source-level
height-one proof remains unresolved in the current draft.

[F4] [[thm-artin-verdier-duality-for-finite-etale-sheaves-on-global-curves]]
is the prime-to-$p$ input. Its finite-cover comparison remains escalated.

[L1] Milne, Chapter III, Theorem 8.2 and Lemmas 8.3–8.4: use the exact
localization sequence to pass to smaller opens; use extension exact sequences
and the five lemma; reduce the $p$-primary part to height-one groups or their
Cartier duals, extend the generic group to the proper curve, and apply the
height-one proper-curve pairing.
[Milne, Chapter III, §§8.1–8.5](https://www.jmilne.org/math/Books/ADTnot.pdf)

[A2] The reduction requires the height-one proper-curve pairing and the
completion-based localization diagram with functorial maps on complexes. The
former is developed in Milne III.8.5 and the latter in Demarche–Harari,
Proposition 2.1; neither is an accepted in-run item supplier for this batch.

## Proof

**Proof technique:** split prime-to-$p$ and $p$-primary coefficients, then use
localization and finite-flat devissage.

**Given:** AC by [A1], DC by [A3] for the current source route, [F1]–[F4],
[L1], and the unresolved height-one and localization inputs [A2].

1.1 Evaluation and the compact-support trace define the pairing by [F2]. For
the prime-to-$p$ part, the group scheme is finite étale and the asserted
duality is the Artin–Verdier pairing [F4]. [F2, F4]

1.2 For the $p$-primary part, shrink $U$ so that the generic group has a
composition series with height-one factors or Cartier duals of height-one
factors. The source localization sequence and extension sequences reduce the
pairing to those factors; [F3] supplies the local boundary pairings.
[A1, A3, F1, F3, L1]

2.1 On the proper curve, the height-one pairing in [A2] supplies the base
case. The long exact sequences for each extension and the five lemma preserve
perfectness; combining the prime-to-$p$ and $p$-primary decompositions proves
the claimed duality, provided the completion and height-one comparisons in
[A2] are supplied. [F3, F4, L1, A1, A2, A3, step 1.1, step 1.2, algebra] ∎
