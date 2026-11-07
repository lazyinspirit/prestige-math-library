---
id: lem-number-field-absolute-multiplicative-galois-h3-vanishes
kind: lemma
title: Absolute multiplicative degree-three Galois cohomology of number fields vanishes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - lem-primary-brauer-classes-vanish-over-cyclotomic-zp-unions
  - lem-continuous-procyclic-pro-p-cohomology-vanishes-above-two
  - lem-dyadic-cyclotomic-quadratic-norm-quotient-is-signatures
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - thm-hilbert-90-for-finite-galois-extension
  - lem-cyclic-group-cohomology-norm-and-inflation
  - thm-lyndon-hochschild-serre-spectral-sequence
  - thm-restriction-corestriction-composite-is-multiplication-by-the-index
  - thm-sylow-first-theorem
  - thm-nontrivial-center-of-a-finite-p-group
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - thm-continuous-lyndon-hochschild-serre-spectral-sequence
  - thm-algebraic-embedding-extension
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are explicit for the actual ordinary/continuous cohomology and field-embedding interfaces. The dyadic real contribution is computed, not discarded; no global class-formation theorem is used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Class Field Theory, version4.03
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
      locator: Global multiplicative degree-three vanishing; the localized cyclotomic and real-signature reduction is reconstructed from explicit local suppliers here
---

## Statement

Assume AC, Countable Choice and DC, using normalized ordinary/continuous cochains or the supplied equivalent derived convention. Let $F$ be a number field, fix a separable closure $F_s$, and give $F_s^\times$ its discrete natural Galois action. For every finite intermediate field $E/F$ in $F_s$,
$$H^3_{\mathrm{cts}}(G_E,F_s^\times)=0,\qquad G_E=\operatorname{Gal}(F_s/E).$$
Real places, including their dyadic norm obstruction, are included. No vanishing for $H^3(\operatorname{Gal}(L/E),L^\times)$ of arbitrary finite noncyclic extensions is asserted.

## Facts & Assumptions

**Given:** Exactly the number field, closure, finite intermediate field and public choice/cohomology hypotheses in the Statement.

[F1] Over the fixed cyclotomic $\mathbb Z_\ell$ union of a number field, all $\ell$-primary Brauer classes on every finite extension vanish when $\ell$ is odd, and also for $\ell=2$ when the base is totally complex. The quotient Galois group is $\mathbb Z_\ell$. [[lem-primary-brauer-classes-vanish-over-cyclotomic-zp-unions]]

[F2] For $\mathbb Z_\ell$, every discrete module has zero continuous cohomology in degrees at least3; torsion modules have zero cohomology in degrees at least2. [[lem-continuous-procyclic-pro-p-cohomology-vanishes-above-two]]

[F3] For a number field with a real place, adjoining $i$ to its real dyadic union gives quotient $C_2\times\mathbb Z_2$. The quadratic norm quotient is the real-signature module $S$, and $H^1(\mathbb Z_2,S)=0$. [[lem-dyadic-cyclotomic-quadratic-norm-quotient-is-signatures]]

[F4] Finite Hilbert90 kills $H^1(H,T^\times)$ for finite Galois fields. Finite $H^2$ embeds into the algebraic Brauer group of the fixed field and commutes with scalar extension. Cyclic periodic cohomology has the norm/augmentation formulas. [[thm-hilbert-90-for-finite-galois-extension]] [[lem-finite-galois-obstruction-brauer-cohomology-comparison]] [[lem-cyclic-group-cohomology-norm-and-inflation]]

[F5] Finite ordinary LHS, finite restriction/corestriction and Sylow theory apply. A finite nontrivial $p$-group has a nontrivial center. [[thm-lyndon-hochschild-serre-spectral-sequence]] [[thm-restriction-corestriction-composite-is-multiplication-by-the-index]] [[thm-sylow-first-theorem]] [[thm-nontrivial-center-of-a-finite-p-group]]

[F6] Continuous cohomology is the actual finite-quotient/fixed-module colimit. Closed-normal continuous LHS has a finite target filtration, with actual inflation and restriction edges, under the public AC branch. An algebraic field embedding extends into an algebraically closed field under AC. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]] [[thm-continuous-lyndon-hochschild-serre-spectral-sequence]] [[thm-algebraic-embedding-extension]]

[A1] AC, Countable Choice and DC are explicit. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Fix a prime $\ell$ and write $M_{(\ell)}=M\otimes_{\mathbb Z}\mathbb Z_{(\ell)}$, inverting the integers prime to $\ell$. Finite-group cochain complexes commute with this localization: each degree is a finite product of copies of $M$, and exactness of localization follows by clearing a common denominator. Thus finite cohomology commutes with it. For a discrete profinite module, localization commutes with the fixed modules in [F6] as well. If $x/s$ is fixed, the orbit of $x$ under the compact fixing subgroup is finite; the finitely many differences $gx-x$ are each killed by an integer prime to $\ell$, so their product kills them all and gives a fixed representative of the fraction. Using the actual fixed-module colimit in [F6] therefore proves
$$H^q_{\mathrm{cts}}(G,M)_{(\ell)}\cong H^q_{\mathrm{cts}}(G,M_{(\ell)}).$$
Here localization of a torsion group retains exactly its $\ell$-primary part. Every positive continuous cohomology class is torsion: it comes from finite-group cohomology by [F6], and restriction to the trivial subgroup followed by corestriction in [F5] kills it by the finite group order. [A1, F5, F6, given, construct, algebra]

2.1 We use the following ordinary finite-group consequence, with its proof included. If $H^1(J,V)=H^2(J,V)=0$ for every subgroup $J\le H$ of a finite group, then all its positive cohomology vanishes. For a cyclic prime-order subgroup, periodicity in [F4] gives that conclusion in every positive degree. For a finite $p$-group choose a central subgroup of order $p$ by [F5]. LHS collapses to the quotient because its normal cyclic subgroup has zero positive cohomology; applying the same fact to the preimage of each quotient subgroup preserves the degree-one/two hypotheses, so induction on the group order gives vanishing. For arbitrary $H$, restriction to each Sylow subgroup is zero. By [F5], its index kills the class. The greatest common divisor of the Sylow indices is1, so an integer Bezout combination kills the class itself. This uses only ordinary positive cohomology, with no negative-degree or complete-resolution input. [F4, F5, construct, algebra]

2.2 Let $B$ be a number field, put $A=BQ_\infty$ for the fixed $\ell$-tower, and assume $\ell$ odd or $B$ totally complex. Let $T/A$ be finite Galois and $J$ any subgroup of its group. By [F1], $\operatorname{Br}(T^J)[\ell^\infty]=0$. The finite comparison in [F4] therefore gives $H^2(J,T^\times)_{(\ell)}=0$, while Hilbert90 gives $H^1(J,T^\times)=0$. Step 1.1 transfers both assertions to the localized coefficient $T^\times_{(\ell)}$. Step 2.1 now gives zero positive finite cohomology for that coefficient. Passing to the actual finite-quotient system over $A$ in [F6] yields
$$H^q_{\mathrm{cts}}(G_A,F_s^\times_{(\ell)})=0\quad(q>0).$$
Its fixed coefficient module is $A^\times_{(\ell)}$ by step 1.1's finite-orbit argument. The closure $F_s$ is a separable closure of these algebraic intermediate fields, since characteristic is zero. [A1, F1, F4, F6, step 1.1, step 2.1, construct, algebra]

3.1 For such a base $B$, apply closed-normal LHS to $G_A\trianglelefteq G_B$. Its quotient is the actual $\operatorname{Gal}(A/B)\cong\mathbb Z_\ell$: restriction is onto because an automorphism of the algebraic field $A$ extends to $F_s$ by [F6], and that embedding is onto (its algebraically closed image contains $B$, hence every root of every $B$-polynomial). The finite-restriction topologies give this quotient its usual topology. Step 2.2 kills every positive normal-subgroup row. The actual inflation edge and finite target filtration in [F6] consequently identify
$$H^3(G_B,F_s^\times_{(\ell)})\cong H^3(\mathbb Z_\ell,A^\times_{(\ell)})=0$$
by [F2]. Thus every odd-primary part vanishes for any $B$, and the dyadic part vanishes for totally complex $B$. This argument does not replace a finite quotient by a subgroup of the absolute group. [A1, F1, F2, F6, step 2.2, construct, algebra]

4.1 It remains to treat $\ell=2$ when $B$ has a real place. Put $D=BQ_\infty$ for the real dyadic tower and $A=D(i)$. Apply step 2.2 with the totally complex base $B(i)$; it gives zero positive cohomology of $G_A$ with $F_s^\times_{(2)}$. By [F3] the quotient $\Gamma=\operatorname{Gal}(A/B)$ is $C_2\times\Gamma_0$ with $\Gamma_0\cong\mathbb Z_2$. The first LHS calculation therefore identifies $H^3(G_B,F_s^\times_{(2)})$ with $H^3(\Gamma,A^\times_{(2)})$. Apply LHS again, this time to $C_2\trianglelefteq\Gamma$. Its degree-zero coefficient is $D^\times_{(2)}$. Its degree-one and degree-three coefficients are zero by finite Hilbert90 and cyclic periodicity in [F4], followed by the finite localization calculation of step 1.1. Its degree-two coefficient is $(D^\times/N A^\times)_{(2)}=S$ by [F3]; localization changes nothing since $S$ has exponent2. Its total-degree-three $E_2$ entries are thus
$$H^3(\Gamma_0,D^\times_{(2)})=0,\quad 0,\quad H^1(\Gamma_0,S)=0,\quad 0,$$
by [F2]–[F3]. All associated graded pieces in total degree3 are zero, so finite-filtration convergence gives $H^3(\Gamma,A^\times_{(2)})=0$. This computes the real dyadic obstruction rather than silently discarding it. [A1, F2, F3, F4, F6, step 1.1, step 2.2, construct, algebra]

5.1 By steps 3.1 and 4.1 every primary localization of $H^3(G_B,F_s^\times)$ is zero. The group is torsion by step 1.1, so it is zero: any nonzero finite-order element has a nonzero primary component, by integer Bezout projections on the finitely many primes dividing its order. This proves the assertion over an arbitrary number field $B$. Given any finite $E/F$ in the original closure, use $B=E$; the same $F_s$ is its separable closure and the same argument applies, without requiring $E/F$ to be normal. This proves the full Statement, while making no false finite noncyclic $H^3$-vanishing claim. [F6, step 1.1, step 3.1, step 4.1, algebra] ∎
