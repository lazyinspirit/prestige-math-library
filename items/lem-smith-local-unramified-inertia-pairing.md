---
id: lem-smith-local-unramified-inertia-pairing
kind: lemma
title: "Local Tate pairing of unramified and tame inertia classes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps: [def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-unramified-local-tate-annihilators-prime-to-residue-characteristic, lem-local-cyclic-algebra-invariant-artin-compatibility, lem-kummer-cohomology-of-roots-of-unity, thm-tame-inertia-structure-and-frobenius-action]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC cover the local duality and cyclic invariant
  interfaces; the last includes the stated cohomology conventions.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3.1, local duality in Proposition 3.23"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $F$ be a nonarchimedean local field of characteristic zero and residue characteristic $p$, and let $M$ be a finite unramified $G_F$-module killed by an integer $e$ prime to $p$. Put $M^D=\operatorname{Hom}(M,\mu_e)$, choose arithmetic Frobenius $\varphi$, and write $T=\operatorname{Hom}(\mu_e,M)^\varphi$. A class $a\in H^1(F,M)$ restricts to an element $m\in T$ on tame inertia, and an unramified class $b\in H^1(F,M^D)$ is represented by $b(\varphi)\in M^D/(\varphi-1)M^D$.

The actual local Tate pairing of $a$ and $b$ equals the canonical evaluation of $m$ against $b(\varphi)$ up to one sign determined only by the fixed cup-product convention. In particular it depends only on the Frobenius action on $M$ and $\mu_e$, is perfect between $T$ and $M^D/(\varphi-1)M^D$, and is the same at two such local fields when these actions and the tame-root identifications agree. The corresponding assertion with $M$ and $M^D$ exchanged also holds.

## Statement references

[[lem-unramified-local-tate-annihilators-prime-to-residue-characteristic]]

[[lem-local-cyclic-algebra-invariant-artin-compatibility]]

[[lem-kummer-cohomology-of-roots-of-unity]]

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the local field, unramified module, integer, Frobenius and local classes in the Statement.

[F1] The unramified subgroups for $M$ and $M^D$ are exact mutual annihilators for the actual local Tate pairing. [[lem-unramified-local-tate-annihilators-prime-to-residue-characteristic]]

[F2] A uniformizer is sent by local Artin reciprocity to arithmetic Frobenius on every unramified cyclic extension, and the invariant of its cyclic algebra is the character value on that Frobenius. [[lem-local-cyclic-algebra-invariant-artin-compatibility]]

[F3] The Kummer class of a nonzero local element is represented by its root cocycle, and tame inertia and Frobenius have the standard cyclotomic action. [[lem-kummer-cohomology-of-roots-of-unity]] [[thm-tame-inertia-structure-and-frobenius-action]]

## Proof

1.1 Choose a uniformizer $\pi$ and let $\kappa(\pi)\in H^1(F,\mu_e)$ be its Kummer class. By [F3], tame inertia acts on an $e$th root of $\pi$ through its canonical $e$th-root quotient, so $m_*\kappa(\pi)$ and $a$ have the same inertia restriction. Their difference is unramified, and pairs trivially with $b$ by [F1]. Thus the pairing of $a$ and $b$ is the pairing of $m_*\kappa(\pi)$ with $b$. [F1, F3, given, choose, algebra]

2.1 The map $m:\mu_e\to M$ is $G_F$-equivariant because inertia acts trivially on both modules and $m$ is Frobenius-invariant. Its dual takes $M^D$ to $\operatorname{Hom}(\mu_e,\mu_e)\cong\mathbb Z/e\mathbb Z$. Naturality of cup products identifies the pairing in step 1.1, up to the fixed graded-commutativity sign, with the invariant of the cup of $\kappa(\pi)$ and the resulting unramified character. For the Kummer/cyclic-algebra comparison, choose $r^e=\pi$ and integer lifts of the character values. The coboundary of the cochain $g\mapsto r^{\widetilde\chi(g)}$ changes the Kummer cup cocycle into the integral carry cocycle with factors $\pi^{(\widetilde\chi(g)+\widetilde\chi(h)-\widetilde\chi(gh))/e}$, up to the fixed cup-order sign. This is the cyclic-algebra factor set; [F2] evaluates its invariant at arithmetic Frobenius. This is exactly the evaluation of $m$ against $b(\varphi)$, up to the same convention sign at every field. [F2, F3, step 1.1, given, algebra]

3.1 By [F1], the quotient by the unramified subgroup is perfectly paired with the unramified subgroup for the dual module. The tame-inertia restriction identifies this quotient with $T$: its kernel is unramified, and every element of $T$ occurs as the restriction of $m_*\kappa(\pi)$ by step 1.1. Thus the evaluation pairing is perfect. The same argument with the dual module proves the final assertion; the formula depends only on the displayed Frobenius action and the common tame-root convention. [F1, step 1.1, step 2.1, given, algebra] ∎
