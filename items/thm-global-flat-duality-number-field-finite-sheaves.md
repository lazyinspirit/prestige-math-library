---
id: thm-global-flat-duality-number-field-finite-sheaves
kind: theorem
title: "Flat duality for finite sheaves over an open number-field scheme"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - thm-artin-verdier-duality-for-finite-etale-sheaves-on-global-curves
  - thm-local-flat-duality-for-finite-flat-group-schemes
  - def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings
  - def-global-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-number-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-algebraic-space-as-fppf-sheaf
  - def-etale-morphism-schemes
  - def-locally-finite-type-and-finite-type-morphism
justified_by: []
proof_strategy: direct
axiom_use: "The current source route uses AC through number-field places, completions, and Brauer–Hasse inputs; real-place Tate terms also inherit DC. The Statement remains unqualified; no choice-free proof branch is established."
provenance:
  statement: literature-derived
  proof: escalated
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter III, §3, Theorem 3.1 and Corollary 3.2"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Cyril Demarche and David Harari, Artin–Mazur–Milne duality for fppf cohomology, §5"
      url: "https://arxiv.org/pdf/1804.03941"
verification: {}
---

## Statement

Let $K$ be a number field, let
$X=\operatorname{Spec}\mathcal O_K$, and let $U\subseteq X$ be a nonempty
open subscheme. For $n\ge1$ put
$U[1/n]=U\times_{\operatorname{Spec}\mathbb Z}\operatorname{Spec}\mathbb Z[1/n]$.
Let $F$ be an abelian fppf sheaf on $U$ annihilated by $n$. Assume that on
$U[1/n]$ it is represented by a finite-type étale algebraic space, and that at
every finite place of $U$ where $n$ is not invertible its restriction to the
completed valuation ring is represented by a finite flat commutative group
scheme. Define $F^D$ on $U[1/n]$ by the étale derived sheaf dual and on each
such finite-flat neighborhood by Cartier duality; these local descriptions
agree on their common generic fibres and glue to the dual sheaf. For every
integer $r$, cup product and trace induce a perfect pairing of finite groups,
meaning each group maps isomorphically to the group of homomorphisms from the
other to $\mathbb Q/\mathbb Z$. The pairing is
$$H^r_{\mathrm{fppf}}(U,F^D)\times H^{3-r}_{c,\mathrm{fppf}}(U,F)
\longrightarrow H^3_{c,\mathrm{fppf}}(U,\mathbb G_m)
\xrightarrow{\operatorname{tr}_U}\mathbb Q/\mathbb Z.$$

## Statement references

[[thm-artin-verdier-duality-for-finite-etale-sheaves-on-global-curves]]

[[thm-local-flat-duality-for-finite-flat-group-schemes]]

[[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]

[Milne, *Arithmetic Duality Theorems*, Chapter III, §3](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Demarche–Harari, §5](https://arxiv.org/pdf/1804.03941)

## Facts & Assumptions

**Given:** the number field $K$, AC by [A1] for the current proof route, DC by [A3] when real places occur, the open subscheme $U$, and the sheaf $F$
with the hypotheses in the Statement.

[A1] [[def-axiom-of-choice]]: AC is assumed for the number-field place,
completion, and global Brauer–Hasse interfaces used by this source route.

[A3] [[def-dependent-choice]]: DC is used only by the real-place Tate branch
of the compact-support convention [F2].

[F1] [[def-global-field]], [[def-number-field]],
[[def-place-of-a-global-field]], and
[[def-completion-of-a-global-field-at-a-place]] fix the global field, its
finite places, and their completions.

[F2] [[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]:
the compact-support restriction map uses the completed local fields and the
modified real-place complexes.

[F3] [[thm-artin-verdier-duality-for-finite-etale-sheaves-on-global-curves]]:
the prime-to-$n$ open part has the finite étale Artin–Verdier pairing. Its
current proof is escalated at the finite-cover local-to-global comparison.

[F4] [[thm-local-flat-duality-for-finite-flat-group-schemes]]:
the finite flat local pieces have the support pairing over Henselian DVRs.
Its current proof is conditional on the noncomplete local-trace comparison.

[F5] [[def-algebraic-space-as-fppf-sheaf]], [[def-etale-morphism-schemes]],
and [[def-locally-finite-type-and-finite-type-morphism]] define the algebraic
space, étale, and finite-type terms in the coefficient hypothesis.

[L1] Milne, Chapter III, §3, proof of Theorem 3.1: on overlaps the étale
derived dual and Cartier dual agree, since the finite-flat group scheme is
étale and its order is invertible there; this identifies the local descriptions
and gives the glued dual object.
[Milne, Chapter III, §3](https://www.jmilne.org/math/Books/ADTnot.pdf)

[L2] Demarche–Harari, Proposition 2.1(3), supplies the completion-based
localization exact sequence and proves compatibility at the level of actual
complexes; their §5 proof uses this sequence to pass from $U[1/n]$ to $U$.
[Demarche–Harari, Proposition 2.1 and §5](https://arxiv.org/pdf/1804.03941)

[A2] The exact local-to-global diagram in [L2] must be paired with the
nondegenerate rows supplied by [F3] and [F4]. Those suppliers remain
unresolved, so five-lemma exactness at every boundary term cannot yet be
certified by their actual bodies.

## Proof

**Proof technique:** reduce away from $n$ to Artin–Verdier duality and use
local flat duality at the primes dividing $n$.

**Given:** AC by [A1], DC by [A3] when real places occur, [F1]–[F5], the dual-gluing result [L1], the
localization comparison [L2], and the unresolved boundary compatibility [A2].

1.1 On $U[1/n]$, the coefficient order is invertible, so the sheaf is finite
étale and its dual is the usual étale dual by [F5]. The perfect pairing there
is [F3]. [F2, F3, F5]

1.2 At each finite place in $U\setminus U[1/n]$, the stated finite-flat
model gives the local support pairing [F4]. The completion-based localization
sequence [L2] places these local terms in the boundary row for the restriction
from $U$ to $U[1/n]$. [A1, A3, F1, F2, F4, F5, L2]

2.1 By [L1] the dual object is glued from compatible local descriptions. The
source proof forms a commutative diagram of the resulting global and local
cohomology sequences using [L2]. If [A2] holds, the outer vertical maps are the
perfect pairings [F3] and [F4]; exactness and the five lemma identify the
middle vertical map with the claimed perfect global pairing. The required
diagram has not been verified against ready suppliers, so the result is
escalated. [F3, F4, F5, L1, L2, A1, A2, step 1.1, step 1.2, algebra] ∎
