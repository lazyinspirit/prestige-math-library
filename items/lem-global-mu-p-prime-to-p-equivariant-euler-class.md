---
id: lem-global-mu-p-prime-to-p-equivariant-euler-class
kind: lemma
title: Equivariant global Euler class of the pth roots of unity
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 31
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-s-integers-and-s-units-of-a-number-field
  - lem-equivariant-s-unit-mod-p-permutation-class
  - lem-kummer-cohomology-of-roots-of-unity
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-number-field-ideal-class-group-finite-in-zf
  - thm-global-class-field-existence-number-field
  - thm-global-artin-reciprocity-and-norm-index
  - thm-local-artin-reciprocity-and-norm-index
  - lem-unramified-local-unit-norms-and-cohomology
  - thm-local-brauer-invariant-for-finite-residue-local-field
  - thm-poitou-tate-exact-sequence-for-finite-modules
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are inherited from Poitou–Tate and class-field theory.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Theorem 5.1, printed pp.67–70; the explicit equivariant Kummer/class-group computation is supplied below.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC, and the finite-module Poitou–Tate theorem in its stated scope. Let $L/F$ be a finite Galois extension of number fields with group $H$ of order prime to a prime $p$. Assume $L$ is totally imaginary and contains $\mu_p$. Let $S$ be a finite $H$-stable set of places of $L$ containing all archimedean places and all places above $p$. Then $H^i(G_{L,S},\mu_p)$ is finite for $i=0,1,2$, and in the Grothendieck group of finite-dimensional $\mathbb F_p[H]$-modules,
$$\sum_{i=0}^2(-1)^i[H^i(G_{L,S},\mu_p)]=-[\mathbb F_p[S_\infty(L)]].$$
The action is the natural transport action. No Euler formula for arbitrary modules is asserted.

## Facts & Assumptions

**Given:** The Galois extension, prime, totally imaginary field with roots, finite stable set $S$, choices and assumed Poitou–Tate theorem in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] The S-unit group is defined by valuations away from $S$, and its quotient by roots has the stated equivariant modular permutation class. [[def-s-integers-and-s-units-of-a-number-field]] [[lem-equivariant-s-unit-mod-p-permutation-class]]

[F2] Kummer identifies $H^1(G_L,\mu_p)$ with $L^\times/L^{\times p}$ and identifies local $H^2(\mu_p)$ with $p$-torsion in the local Brauer group. [[lem-kummer-cohomology-of-roots-of-unity]]

[F3] Simple residue roots lift in complete valued fields. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F4] The number-field ideal class group is finite. [[thm-number-field-ideal-class-group-finite-in-zf]]

[F5] Global class-field existence and Artin reciprocity identify finite abelian norm quotients; local reciprocity and unramified unit norms detect the unramified and split local conditions. [[thm-global-class-field-existence-number-field]] [[thm-global-artin-reciprocity-and-norm-index]] [[thm-local-artin-reciprocity-and-norm-index]] [[lem-unramified-local-unit-norms-and-cohomology]]

[F6] The normalized local Brauer invariant identifies each finite local Brauer group with $\mathbb Q/\mathbb Z$. [[thm-local-brauer-invariant-for-finite-residue-local-field]]

[F7] The assumed Poitou–Tate theorem gives the exact second half and a canonical perfect pairing between the first localization kernel of one module and the second localization kernel of its Cartier dual. [[thm-poitou-tate-exact-sequence-for-finite-modules]]

## Proof

**Proof technique:** calculate degree one by Kummer and S-ideal classes, degree two by class field theory and Poitou–Tate, and cancel the finite class-group terms.

1.1 Let $U=\mathcal O_{L,S}^{\times}$ and let $A=\operatorname{Cl}(\mathcal O_{L,S})$. The S-class group is the quotient of the ordinary ideal class group by the classes of the finite primes in $S$, hence is finite by [F4]. All constructions are $H$-equivariant because $S$ is stable. For a finite $p$-primary $H$-module, the Grothendieck class computed using its $p$-power filtration is additive in exact sequences. Applied to multiplication by $p$ on the $p$-primary part of $A$, its kernel and cokernel have equal class; hence $[A[p]]=[A/pA]$ in $R_{\mathbb F_p}(H)$. [F1, F4, given, construct, algebra]

2.1 By [F2], a global Kummer class is represented by $a\in L^\times$. At $w\notin S$, its residue characteristic is prime to $p$. Its local class is unramified exactly when $v_w(a)$ is divisible by $p$: after removing a $p$th-power uniformizer, [F3] lifts a root of its unit in a finite unramified residue extension; conversely an unramified extension cannot change the divisibility of the valuation. Thus the subgroup of global classes unramified outside $S$ has an exact sequence $0\to U/U^p\to H^1(G_{L,S},\mu_p)\to A[p]\to0$: divide all valuations outside $S$ by $p$ to form the S-ideal whose class is $p$-torsion, and conversely choose a principal generator of the $p$th power of such an ideal. Naturality makes the sequence $H$-equivariant. [F1, F2, F3, step 1.1, given, choose, construct, algebra]

2.2 By [F5], an $\mathbb F_p$-valued character of $G_{L,S}$ whose localizations all vanish corresponds exactly to a character of $A$: unramifiedness forces all local units to lie in the norm kernel, and vanishing at the places of $S$ also kills their local multiplicative groups, leaving the S-ideal class quotient. The finite-index norm existence theorem gives the converse. These identifications are natural for automorphisms of $L$, so $X_S^1(L,\mathbb F_p)=\operatorname{Hom}(A,\mathbb F_p)$ as an $H$-module. By [F7], its perfect dual is $X_S^2(L,\mu_p)$, hence the latter is $A/pA$. [F5, F7, step 1.1, given, construct, algebra]

3.1 The Poitou–Tate second half in [F7] gives $0\to X_S^2(L,\mu_p)\to H^2(G_{L,S},\mu_p)\to\bigoplus_{w\in S}H^2(L_w,\mu_p)\to H^0(G_{L,S},\mathbb F_p)^\vee\to0$. At a complex place the Tate group is zero; at a finite place [F2] and [F6] identify the local group with $\mathbb F_p$, and the last arrow is the sum of normalized local invariants. Thus the final kernel has class $[\mathbb F_p[S_f]]-[\mathbb F_p]$, where $S_f$ denotes the finite places in $S$. All maps are canonical and $H$-equivariant. This sequence and the Kummer sequence of step 2.1 show the three global cohomology groups are finite. [F2, F6, F7, step 2.1, step 2.2, given, algebra]

4.1 Since $U/\mu(L)$ is free by [F1], the exact sequence $0\to\mu(L)/\mu(L)^p\to U/U^p\to(U/\mu(L))/p\to0$ is $H$-equivariant. The first term has the same $H$-character as $\mu_p(L)=H^0(G_{L,S},\mu_p)$, by taking the $p$-power torsion of the finite cyclic roots of unity. Combining steps 1.1, 2.1 and 3.1 cancels both the roots and the equal class-group terms. The remaining class is $-[(U/\mu(L))/p]+[\mathbb F_p[S_f]]-[\mathbb F_p]$. Apply [F1] to replace the S-unit class by $[\mathbb F_p[S_\infty(L)]]+[\mathbb F_p[S_f]]-[\mathbb F_p]$. This proves the displayed identity, including $p=2$ and the trivial group. [F1, step 1.1, step 2.1, step 3.1, algebra] ∎
