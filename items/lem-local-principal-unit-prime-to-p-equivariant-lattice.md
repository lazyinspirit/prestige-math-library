---
id: lem-local-principal-unit-prime-to-p-equivariant-lattice
kind: lemma
title: Prime-to-p equivariant principal-unit lattice over a local field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-axiom-of-choice
  - thm-local-valuation-ring-compact-open
  - thm-normal-basis-theorem
  - thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements
  - thm-brauer-character-is-additive-on-short-exact-sequences
  - thm-wedderburn-artin-theorem
  - lem-finite-division-rings-are-fields
proof_strategy: direct
axiom_use: AC is explicit for the finite modular splitting system and representation conventions.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Algebraic Number Theory
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
      locator: Chapter VII, local units and the normal-basis theorem; the equivariant lattice and modular class argument is supplied below.
verification: {}
---

## Statement

Assume AC. Let $E/F$ be a finite Galois extension of finite extensions of $\mathbb Q_p$ with group $H$ of order prime to $p$. Put $U^1_E=1+\mathfrak m_E$ and let $T$ be its torsion subgroup. Then $T$ is the finite group of $p$-power roots of unity in $E$, the quotient $U^1_E/T$ is a finite free $\mathbb Z_p$-module with its natural $H$-action, and in the Grothendieck group of finite-dimensional $\mathbb F_p[H]$-modules
$$[(U^1_E/T)/p(U^1_E/T)]=[F:\mathbb Q_p]\,[\mathbb F_p[H]].$$
No local or global Euler-characteristic formula is asserted.

## Facts & Assumptions

**Given:** The finite local Galois extension, prime, prime-to-$p$ group order and principal-unit subgroup in the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] The valuation ring and its principal-unit neighborhoods are compact open; the local field is complete and has finite residue field. [[thm-local-valuation-ring-compact-open]]

[F2] A finite Galois extension has a normal basis. [[thm-normal-basis-theorem]]

[F3] On $p$-regular elements, Brauer characters are additive and split irreducible Brauer characters are linearly independent. [[thm-brauer-character-is-additive-on-short-exact-sequences]] [[thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements]]

[F4] Finite-dimensional semisimple algebras are products of matrix algebras over division rings, and finite division rings are fields. [[thm-wedderburn-artin-theorem]] [[lem-finite-division-rings-are-fields]]

## Proof

**Proof technique:** use equivariant local logarithms on a finite-index subgroup and the normal basis, then compare prime-to-$p$ characters after reduction.

1.1 Let $e=v_E(p)$ and choose an integer $k>e/(p-1)$. Completeness in [F1] and the estimates $v_E(m!)\le em/(p-1)$ and $v_E(m)\le em/(p-1)$ make the power series $\log(1+x)=\sum_{m\ge1}(-1)^{m+1}x^m/m$ and $\exp(x)=\sum_{m\ge0}x^m/m!$ converge on $\mathfrak m_E^k$. Their formal identities give inverse group homomorphisms $1+\mathfrak m_E^k\leftrightarrow\mathfrak m_E^k$. Both commute with every automorphism in $H$, because their coefficients lie in $\mathbb Q_p$. [F1, given, choose, construct, algebra]

2.1 Each quotient $(1+\mathfrak m_E^j)/(1+\mathfrak m_E^{j+1})$ is the additive residue field by $1+x\mapsto x$, so $U^1_E/(1+\mathfrak m_E^k)$ is a finite $p$-group. A torsion element of $U^1_E$ has $p$-power order: its order is detected in that finite $p$-group because step 1.1 identifies the deep unit subgroup with a torsion-free additive group. Conversely every $p$-power root of unity reduces to $1$ in the finite residue field. Thus $T$ is exactly the finite group of $p$-power roots of unity in $E$. The deep subgroup in step 1.1 is a finite free $\mathbb Z_p$-module spanning $E$, and it has finite index in $U^1_E/T$. Therefore $U^1_E/T$ is a finitely generated torsion-free $\mathbb Z_p$-module, hence finite free, and its rationalization is $H$-equivariantly $E$. [F1, step 1.1, algebra]

3.1 By [F2], $E$ is the regular $F[H]$-module. Restricting scalars to $\mathbb Q_p$ makes its rational class $[F:\mathbb Q_p]$ copies of the regular $\mathbb Q_p[H]$-module. Let $h\in H$. Its order is prime to $p$, so its eigenvalues on the stable $\mathbb Z_p$-lattice $U^1_E/T$ are prime-to-$p$ roots of unity; their distinct reductions and Teichmüller lifts give the same trace as the ordinary rational action on $E$. The same holds for the standard regular integral lattice. Hence both reductions have identical Brauer characters on every element of $H$. [F2, step 2.1, given, construct, algebra]

4.1 By [F3], equality of split Brauer characters is equality in the split Grothendieck group. Scalar extension from $\mathbb F_p$ to a finite splitting field is injective on Grothendieck groups: by [F4], different simple factors of the semisimple quotient of $\mathbb F_p[H]$ split into disjoint collections of simples. Descending the equality from step 3.1 gives the displayed identity. The trivial group and $p=2$ are included. [A1, F3, F4, step 3.1, choose, algebra] ∎
