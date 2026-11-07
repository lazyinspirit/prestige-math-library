---
id: lem-finite-choice-local-galois-residue-sequence
kind: lemma
title: The local Galois residue sequence under countable finite choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-choice-for-pairs-and-countable-finite-choice
  - lem-choice-free-bounded-degree-padic-subfields-and-galois-tower
  - lem-choice-free-finite-ax-sen-approximation
  - lem-choice-free-finite-padic-different-and-base-change-calculus
  - lem-choice-free-cyclotomic-tilt-value-group-and-residue-constants
  - lem-choice-free-identification-of-padic-algebraic-closure-completions
  - thm-fundamental-theorem-of-finite-galois-theory
  - thm-absolute-galois-group-of-finite-field-is-procyclic
  - def-local-inertia-subgroup-of-absolute-galois-group
justified_by: []
proof_strategy: direct
axiom_use: "Countable choice for finite sets is used only to order finite residue-lift fibers; the coherent lift is then defined by deterministic recursion."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Algebraic Number Theory
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
      locator: Chapter VII, local residue Galois sequence; finite-tower lifting is reconstructed below
verification: {}
---

## Statement

Assume $\mathrm{AC}_{\omega,\mathrm{fin}}$. Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure with ordinary completion $C$, suppose a compatible primitive cyclotomic system is GIVEN, and let $K\subset F$ be finite with residue field $k$. Let $\overline{k}$ be the residue field of $C$ and $I_K$ the subgroup of $G_K=\operatorname{Aut}(F/K)$ acting trivially on $\overline{k}$. Then the residue-action homomorphism $G_K\to\operatorname{Gal}(\overline{k}/k)$ is continuous, surjective and open, with kernel $I_K$. Consequently every continuous character of $G_K$ trivial on $I_K$ factors uniquely and continuously through the residue group. No full Axiom of Choice is used.

## Facts & Assumptions

**Given:** Countable choice for nonempty finite sets, the valued closure and completion, the primitive cyclotomic system, and the finite extension $K/\mathbb Q_p$.

[A1] $\mathrm{AC}_{\omega,\mathrm{fin}}$ selects from each indexed countable family of nonempty finite sets. [[def-choice-for-pairs-and-countable-finite-choice]]

[F1] The closure has a choice-free canonical increasing cofinal sequence of finite Galois subfields over $\mathbb Q_p$. [[lem-choice-free-bounded-degree-padic-subfields-and-galois-tower]]

[F2] Every finite intermediate field is complete, every finite embedding is isometric, and its valuation ring is a finite free discrete valuation ring with finite residue field. [[lem-choice-free-finite-ax-sen-approximation]] [[lem-choice-free-finite-padic-different-and-base-change-calculus]]

[F3] The completion has algebraically closed residue field and agrees with the ball completion; the original closure is dense. [[lem-choice-free-cyclotomic-tilt-value-group-and-residue-constants]] [[lem-choice-free-identification-of-padic-algebraic-closure-completions]]

[F4] The finite Galois correspondence gives finite automorphism orders and finite restriction surjectivity. [[thm-fundamental-theorem-of-finite-galois-theory]]

[F5] The absolute Galois group of a finite residue field is the inverse limit of its finite Frobenius groups. [[thm-absolute-galois-group-of-finite-field-is-procyclic]]

[F6] Absolute inertia consists of the compatible finite-level automorphisms acting trivially on residue fields. [[def-local-inertia-subgroup-of-absolute-galois-group]]

## Proof

1.1 If $E/D$ is a finite Galois extension of finite intermediate fields of $F$, reduction $\operatorname{Gal}(E/D)\to\operatorname{Gal}(k_E/k_D)$ is surjective. Indeed choose one residue generator $\bar a$ of $k_E/k_D$, and lift its monic irreducible polynomial to a monic polynomial over $\mathcal O_D$. Each Frobenius conjugate of $\bar a$ is a simple residue root, so the deterministic finite Hensel iteration in the complete field $E$ lifts each to a root of that polynomial. Irreducibility modulo the maximal ideal makes the lift irreducible over $D$. The finite Galois group is transitive on its roots by [F4], so it realizes every Frobenius action on the residue generator and hence on $k_E$. [F2, F4, given, construct, algebra]

2.1 Let $L_n$ be the canonical tower of [F1] and set $M_n=KL_n$. These are increasing finite Galois extensions of $K$ with union $F$. Their residue fields $k_n$ exhaust $\overline{k}$: every integral element of $C$ has an element of the dense field $F$ with the same residue. Fix $a\in\operatorname{Gal}(\overline{k}/k)$ and let $X_n$ be the finite set of $\sigma\in\operatorname{Gal}(M_n/K)$ whose residue action is $a|_{k_n}$. It is nonempty by step 1.1. The transition $X_{n+1}\to X_n$ is surjective: lift a given $\sigma$ by finite Galois correspondence, then correct its residue action using step 1.1 for $M_{n+1}/M_n$. [F1, F2, F3, F4, step 1.1, given, construct, algebra]

3.1 The set of total orderings of each $X_n$ is finite and nonempty. Apply [A1] to order them, then recursively choose the least compatible lift. The resulting compatible finite automorphisms and their inverses unite to $g\in G_K$ inducing $a$ on every $k_n$, hence on $\overline{k}$. The residue action is thus surjective; it is continuous because each finite residue coordinate depends on a finite field restriction, and its kernel is $I_K$ by [F6]. [A1, F5, F6, step 2.1, construct, algebra]

4.1 The residue map is open. For a basic subgroup $G_{M_N}$ and any residue automorphism fixing $k_N$, repeat step 3.1 with finite fibers inside $\operatorname{Gal}(M_n/M_N)$ for $n\ge N$; step 1.1 and the same finite correction show that the fibers are nonempty with surjective transitions. This gives a lift in $G_{M_N}$, so the image of $G_{M_N}$ is precisely $\operatorname{Gal}(\overline{k}/k_N)$, an open subgroup. The $G_{M_N}$ form a basis of open neighborhoods, hence all open sets have open image. A continuous character trivial on $I_K$ therefore descends uniquely through the open quotient map and the descended character is continuous. [A1, F5, step 1.1, step 2.1, step 3.1, construct, algebra] ∎

## Source notes

Milne's finite residue-action theorem and proof were read. The proof above replaces the source's general compactness step by the recorded canonical countable tower and one explicit application of countable choice for finite orderings. It does not assert a choice-free residue-lifting theorem.
