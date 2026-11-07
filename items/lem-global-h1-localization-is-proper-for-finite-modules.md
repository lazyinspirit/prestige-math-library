---
id: lem-global-h1-localization-is-proper-for-finite-modules
kind: lemma
title: Properness of finite-module global H1 localization
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-restricted-product-of-local-galois-cohomology-groups
  - lem-global-localization-lands-in-restricted-cohomology
  - thm-number-field-ideal-class-group-finite-in-zf
  - lem-function-field-coefficient-ring-has-finite-ideal-class-group
  - thm-curves-function-fields-equivalence
  - thm-global-artin-reciprocity-and-norm-index
  - thm-global-function-field-artin-reciprocity-and-norm-index
  - thm-local-artin-reciprocity-and-norm-index
  - lem-unramified-local-unit-norms-and-cohomology
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-local-valuation-ring-compact-open
  - thm-tychonoff
  - thm-continuous-lyndon-hochschild-serre-spectral-sequence
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are explicit for restricted-product compactness, finite class groups, idelic reciprocity and continuous cohomology.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Lemma 4.9, printed p.56. The proof below uses finite exponent idèle quotients and finite Artin reciprocity, including the prime-to-characteristic function-field case.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $K$, $S_0\subseteq S$, $K_S$, and the finite continuous $G_{K,S}$-module $M$ satisfy the hypotheses of the restricted-local-cohomology definition, including that $|M|$ is prime to $\operatorname{char}K$ in positive characteristic. Give $H^1(G_{K,S},M)$ the discrete topology. Its actual localization map to $P^1_S(K,M)$ is proper: the inverse image of every compact subset is finite. In particular its localization kernel is finite. No global Poitou–Tate exactness or pairing is asserted.

## Facts & Assumptions

**Given:** The global field, place sets, unramified tower, finite module, local conventions and explicit choices of the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] Localization lands in the stated restricted product. [[lem-global-localization-lands-in-restricted-cohomology]]

[F2] Number-field ideal class groups and one-point finite-constant function-field coefficient-ring class groups are finite; the curve/function-field equivalence provides the latter model. [[thm-number-field-ideal-class-group-finite-in-zf]] [[lem-function-field-coefficient-ring-has-finite-ideal-class-group]] [[thm-curves-function-fields-equivalence]]

[F3] Finite global Artin maps for both field types are surjective with norm kernels; local reciprocity and the unramified unit norm theorem identify unramified local extensions by containing the local units in the norm subgroup. [[thm-global-artin-reciprocity-and-norm-index]] [[thm-global-function-field-artin-reciprocity-and-norm-index]] [[thm-local-artin-reciprocity-and-norm-index]] [[lem-unramified-local-unit-norms-and-cohomology]]

[F4] Finite-place unit groups are compact and the stated Hensel factor-lifting theorem applies. Products of compact spaces are compact. [[thm-local-valuation-ring-compact-open]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]] [[thm-tychonoff]]

[F5] The continuous Hochschild–Serre sequence supplies inflation–restriction. [[thm-continuous-lyndon-hochschild-serre-spectral-sequence]]

## Proof

**Proof technique:** compact sets impose finitely many ramification exceptions; finite exponent idèle quotients bound the resulting abelian characters.

1.1 Put $n=|M|$. For a finite place of a number field, $F_v^\times/F_v^{\times n}$ is finite: valuation gives a finite quotient, and the unit quotient is compact and discrete because $1+n^2\mathfrak m_v$ consists of $n$th powers. Indeed $((1+nY)^n-z)/n^2$ has integral coefficients and a simple residue root $Y=0$ for $z\in1+n^2\mathfrak m_v$; the corresponding monic linear factor lifts by [F4]. For a function-field completion, $n$ is a unit, so the reduction of $X^n-z$ has the simple root $1$ when $z\in1+\mathfrak m_v$, and [F4] gives the same conclusion. Real and complex multiplicative groups also have finite exponent-$n$ quotients. [F4, given, construct, algebra]

2.1 Let $F$ be any finite intermediate field of $K_S/K$ and let $T$ be a finite nonempty set of its places containing the archimedean places. The outside unit product $U_T=\prod_{w\notin T}\mathcal O_w^\times$ embeds in $C_F$. The S-component idèle map gives an exact sequence $0\to C_{F,T}\to C_F/U_T\to\operatorname{Cl}_T(F)\to0$: its kernel consists of $T$-units and its cokernel is the outside valuation ideal class group. This class group is finite by [F2], because it is a quotient of the ordinary number-field class group or of the one-point coefficient-ring class group at any chosen place of $T$. Since $T$ is finite, $C_{F,T}/nC_{F,T}$ is a quotient of the finite product $\prod_{w\in T}F_w^\times/F_w^{\times n}$ from step 1.1. Hence $C_F/(U_T C_F^n)$ is finite. [F2, step 1.1, given, choose, construct, algebra]

3.1 Suppose a finite abelian group $A$ of exponent dividing $n$ has trivial $G_{F,T}$-action. For any continuous homomorphism $f:G_{F,T}\to A$, its image defines a finite abelian extension of $F$ unramified outside $T$. By [F3] its Artin map is surjective and kills $U_T$ and $C_F^n$: local unit norm containment gives the first, and exponent $n$ gives the second. Thus $f$ pulls back to a homomorphism from the finite group in step 2.1 to $A$. This pullback is injective on such $f$, because every finite Artin quotient is onto. Consequently $\operatorname{Hom}_{\rm cts}(G_{F,T},A)$ is finite. This uses prime-to-characteristic exponent in the function-field case and does not assert finite ramification families with characteristic torsion. [F3, step 2.1, given, algebra]

4.1 Every compact subset of the restricted product lies in a subgroup with only finitely many unrestricted coordinates: the compact open subgroups indexed by finite exceptional sets cover the restricted product, and a finite subcover gives one common finite set. Let $C$ be compact and choose such a finite set $T_0\subset S$, enlarging it by $S_0$. Choose a finite Galois $F/K$ in $K_S$ that kills the action on $M$. Enlarge the finite set $T_F$ of places above $T_0$ by all archimedean places and, in the function-field case if necessary, one arbitrary place. For a class whose localization lies in $C$, its restriction to $G_{K_S/F}$ is a continuous homomorphism to $M$ and is unramified outside $T_F$: over $S\setminus T_0$ this follows from the unramified local condition, and outside $S$ from the defining unramified tower. It therefore factors through $G_{F,T_F}$. Step 3.1 gives only finitely many possible restrictions. The kernel of restriction from $H^1(G_{K,S},M)$ is the image of $H^1(\operatorname{Gal}(F/K),M)$ by [F5], a finite group because the quotient and coefficient are finite. Every fiber is a coset of this finite kernel. Therefore only finitely many global classes localize into $C$. The kernel is the preimage of the compact singleton zero. [F1, F3, F5, step 3.1, given, choose, construct, algebra] ∎
