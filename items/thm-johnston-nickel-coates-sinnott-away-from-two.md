---
id: thm-johnston-nickel-coates-sinnott-away-from-two
kind: theorem
title: Coates–Sinnott Annihilator Inclusion Away from Two
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 32
deps:
  - def-smoothed-stickelberger-element-at-nonpositive-integer
  - def-higher-quillen-k-group-of-ring-of-integers
  - def-fitting-ideal-of-a-finitely-presented-module
  - thm-johnston-nickel-coates-sinnott-fitting-ideal-identity
  - thm-soule-p-adic-chern-class-isomorphism-negative-degree
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: AC, Countable Choice, and Dependent Choice are carried through the local EIMC/Fitting input; the Chern-class comparison is separate.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Corollary 12.6 and proof, printed pp. 38–39.
verification: {}
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $L/K$ be a finite abelian extension of number fields, let $G=\operatorname{Gal}(L/K)$, let $S$ be a finite set of places of $K$ containing all infinite places and all places ramified in $L$, and let $r<0$. Let $\Theta_S(r)\in\mathbb Q[G]$ be characterized by $\chi(\Theta_S(r))=L_S(r,\chi^{-1})$. For an $A$-module $M$, write $\operatorname{Ann}_A(M)=\{a\in A:aM=0\}$. Define $e_r=0$ if $K$ is not totally real; if $K$ is totally real, set $e_r=\prod_{v\in S_\infty}(1-(-1)^rj_v)/2$, where $j_v$ is complex conjugation at the real place $v$. Then
$$\operatorname{Ann}_{\mathbb Z[1/2][G]}\!\left(\mathbb Z[1/2]\otimes K_{1-2r}(\mathcal O_L)_{\mathrm{tors}}\right)\Theta_S(r)=e_r\operatorname{Fitt}_{\mathbb Z[1/2][G]}\!\left(\mathbb Z[1/2]\otimes K_{-2r}(\mathcal O_{L,S})\right).$$
In particular, the left side annihilates $\mathbb Z[1/2]\otimes K_{-2r}(\mathcal O_{L,S})$.

## Statement references

[Johnston and Nickel, Corollary 12.6](https://arxiv.org/pdf/2010.03186)

[[def-smoothed-stickelberger-element-at-nonpositive-integer]]

[[def-higher-quillen-k-group-of-ring-of-integers]]

[[def-fitting-ideal-of-a-finitely-presented-module]]

## Proof status

The source proof passes through the truncated-cohomology Fitting identity and the Soulé Chern class maps. The norm-residue/Chern-class isomorphism has no complete local proof in the current library, and the Fitting supplier remains conditional.

## Facts & Assumptions

**Given:** The hypotheses and notation in the Statement.

[F1] The localized Fitting identity is the finite-level input used in the source proof. [[thm-johnston-nickel-coates-sinnott-fitting-ideal-identity]]

[A1] The Soulé Chern class maps are not proved to be isomorphisms in the current library; the source uses the norm residue isomorphism theorem. [[thm-soule-p-adic-chern-class-isomorphism-negative-degree]]

[A2] The current Fitting-identity carrier is conditional on the incomplete abelian EIMC proof and finite-level cohomology/base-change arguments. [[thm-johnston-nickel-coates-sinnott-fitting-ideal-identity]]

## Proof

**Given:** The Statement hypotheses and the conditional inputs [F1], [A1], and [A2].

1.1 For each odd prime $p$, the Chern class isomorphisms in [A1] identify the relevant $p$-primary higher $K$-groups with the étale cohomology groups in the truncated-complex exact sequence. [A1, given]

1.2 Applying the annihilator/Fitting comparison to that exact sequence and using the finite-level Fitting identity [F1] gives the claimed equality after localization at every odd prime. The noncommutative and torsion terms in this comparison are part of the source proof and are not reconstructed locally. [A2, F1, step 1.1]

2.1 Equality at all odd localizations gives the asserted equality after inverting $2$, and the annihilator inclusion follows from the Fitting annihilation property. This derivation is conditional on [A1]–[A2]; both remain escalated. [A1, A2, F1, step 1.2] ∎

## Proof references

[Johnston and Nickel, proof of Corollary 12.6](https://arxiv.org/pdf/2010.03186)
