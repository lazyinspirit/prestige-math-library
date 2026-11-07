---
id: lem-smith-unpacked-local-kernel-from-duality
kind: lemma
title: "Local-global kernel for an unpacked finite-module tuple"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 29
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-poitou-tate-exact-sequence-for-finite-modules, lem-unramified-local-tate-annihilators-prime-to-residue-characteristic, lem-smith-local-unramified-inertia-pairing]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from finite-module Poitou–Tate
  and the local pairing interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3, Proposition 3.11"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $F$ be a number field and $M$ a finite continuous $G_F$-module killed by $e\ge2$. Let $V$ contain the archimedean places, all places dividing $e$, and every place at which $M$ is ramified. Put $M^D=\operatorname{Hom}(M,\mu_e)$. Suppose that for every finite $v\notin V$ and every $n\in\operatorname{Hom}(\mu_e,M^D)^{G_v}$ there is a global class $B_v(n)\in H^1(F,M^D)$ unramified outside $V\cup\{v\}$ with inertia restriction $n$ at $v$.

Then every $a\in H^1(F,M)$ unramified outside $V$ and locally zero at every $v\in V$ is locally zero at every place of $F$. Equivalently, the kernel of localization at $V$ on the unramified-outside-$V$ subgroup is the everywhere-locally-trivial subgroup. The given sections, rather than the conclusion, are the unpacked hypothesis.

## Statement references

[[thm-poitou-tate-exact-sequence-for-finite-modules]]

[[lem-smith-local-unramified-inertia-pairing]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Proposition 3.11](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the module, auxiliary place set and global classes $B_v(n)$ in the Statement.

[F1] The finite-module Poitou–Tate sequence implies that the sum of local pairings of two global classes is zero. [[thm-poitou-tate-exact-sequence-for-finite-modules]]

[F2] At a finite prime outside $V$, the unramified subgroups of the dual local modules annihilate one another, and tame inertia restrictions of the dual pair perfectly with the unramified classes of $M$. [[lem-unramified-local-tate-annihilators-prime-to-residue-characteristic]] [[lem-smith-local-unramified-inertia-pairing]]

## Proof

1.1 Let $a$ be as in the Statement, choose a finite $v\notin V$, and fix $n\in\operatorname{Hom}(\mu_e,M^D)^{G_v}$. Apply [F1] to $a$ and $B_v(n)$. The terms at $V$ vanish because $a$ is locally zero; the terms outside $V\cup\{v\}$ vanish by [F2] because both classes are unramified. Hence the pairing at $v$ is zero. [F1, F2, given, choose, algebra]

2.1 The class $a$ is unramified at $v$. As $n$ varies, the prescribed inertia restrictions of $B_v(n)$ run over the full tame-inertia group for $M^D$. The perfect pairing in [F2] therefore forces the local class of $a$ to vanish. This holds for every $v\notin V$, while the localizations at $V$ vanish by hypothesis. The reverse kernel inclusion is immediate. [F2, step 1.1, given, algebra] ∎
